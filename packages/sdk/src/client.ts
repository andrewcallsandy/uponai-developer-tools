import { metadata } from './metadata.js';
import { UponAIError, UponAIValidationError } from './errors.js';
import type { ClientOptions, OperationId, OperationInput, OperationOutput, RequestOptions, PaginationOptions } from './types.js';
const MAX_BYTES=5*1024*1024;
const fail=(message:string):never=>{throw new UponAIValidationError(message);};
function bounded(n:number,min:number,max:number,label:string){if(!Number.isInteger(n)||n<min||n>max)fail(`Invalid ${label}`);return n;}
function validateValue(value:unknown,schema:any,name:string){
 if(schema.type==='integer'&&(!Number.isInteger(value)))fail(`Expected integer: ${name}`);
 if(schema.type==='number'&&(typeof value!=='number'||!Number.isFinite(value)))fail(`Expected number: ${name}`);
 if(schema.type==='string'&&typeof value!=='string')fail(`Expected string: ${name}`);
 if(schema.type==='boolean'&&typeof value!=='boolean')fail(`Expected boolean: ${name}`);
 if(typeof value==='number'&&((schema.minimum!==undefined&&value<schema.minimum)||(schema.maximum!==undefined&&value>schema.maximum)))fail(`Out of range: ${name}`);
 if(schema.enum&&!schema.enum.includes(value))fail(`Invalid value: ${name}`);
}
export class ClientCore {
 private readonly base:string; private readonly fetcher:typeof fetch; private readonly timeout:number; private readonly retries:number;
 constructor(private readonly config:ClientOptions){
  if(!config||!(typeof config.apiKey==='string'||typeof config.apiKey==='function'))fail('apiKey is required');
  const url=new URL(config.baseUrl||'https://api.upon-ai.com');
  if(url.protocol!=='https:'||url.username||url.password||url.pathname!=='/'||url.search||url.hash)fail('baseUrl must be an HTTPS origin');
  this.base=url.origin;this.fetcher=config.fetch||globalThis.fetch;this.timeout=bounded(config.timeoutMs??30000,1,120000,'timeout');this.retries=bounded(config.maxRetries??2,0,3,'retry limit');
 }
 protected async execute<K extends OperationId>(operation:K,args:OperationInput<K>,options:RequestOptions={}):Promise<OperationOutput<K>>{
  if(!Object.hasOwn(metadata,operation))fail('Operation is not in the public contract');
  const meta=metadata[operation] as any,input=(args||{}) as any;
  if(Object.keys(input).some(k=>!['path','query','body'].includes(k)))fail('Only path, query and body inputs are supported');
  let route:string=meta.path;const query=new URLSearchParams();
  for(const location of ['path','query']){
   const supplied=input[location]||{};if(typeof supplied!=='object'||Array.isArray(supplied))fail(`Invalid ${location}`);
   const parameters=meta.parameters.filter((p:any)=>p.in===location);
   if(Object.keys(supplied).some(k=>!parameters.some((p:any)=>p.name===k)))fail(`Unknown ${location} parameter`);
   for(const p of parameters){const value=supplied[p.name];if(value===undefined){if(p.required)fail(`Missing ${location} parameter: ${p.name}`);continue;}
    validateValue(value,p.schema,p.name);
    if(location==='path'){
     if(!/^[A-Za-z0-9_-]+$/.test(String(value)))fail(`Invalid path identifier: ${p.name}`);
     route=route.replace(`{${p.name}}`,encodeURIComponent(String(value)));
    }else if(Array.isArray(value)){for(const v of value)query.append(p.name,String(v));}
    else if(typeof value==='object')fail(`Unsupported query value: ${p.name}`);else query.set(p.name,String(value));
   }
  }
  if(route.includes('{'))fail('Missing path parameter');
  if(meta.bodyRequired&&input.body===undefined)fail('Request body is required');
  if(!meta.bodyType&&input.body!==undefined)fail('This operation does not accept a body');
  const headers:Record<string,string>={Accept:'application/json'};let body:BodyInit|undefined;
  if(input.body!==undefined){
   if(meta.bodyType==='multipart/form-data'){
    if(!(input.body instanceof FormData))fail('Multipart operations require FormData');body=input.body;
   }else{body=JSON.stringify(input.body);headers['Content-Type']='application/json';if(Buffer.byteLength(body as string)>MAX_BYTES)fail('Request exceeds 5 MiB');}
  }
  const token=typeof this.config.apiKey==='function'?await this.config.apiKey():this.config.apiKey;
  if(!token||/[\s\x00-\x1f\x7f]/.test(token))fail('Invalid API credential');headers.Authorization=`Bearer ${token}`;
  const url=this.base+route+(query.size?'?'+query.toString():'');
  const timeout=AbortSignal.timeout(bounded(options.timeoutMs??this.timeout,1,120000,'timeout'));
  const signal=options.signal?AbortSignal.any([options.signal,timeout]):timeout;
  const retryable=meta.method==='get';
  for(let attempt=0;;attempt++){
   let response:Response;
   try{response=await this.fetcher(url,{method:meta.method.toUpperCase(),headers,body,redirect:'error',credentials:'omit',signal});}
   catch{if(signal.aborted)throw new UponAIError('Request cancelled or timed out');throw new UponAIError('Unable to reach the UponAI API');}
   if(retryable&&attempt<this.retries&&[429,502,503,504].includes(response.status)){
    const retryAfter=response.headers.get('retry-after');const seconds=retryAfter===null?NaN:Number(retryAfter);
    const delay=Number.isFinite(seconds)?Math.min(Math.max(seconds*1000,0),5000):Math.min(200*2**attempt,2000);
    await response.body?.cancel();await new Promise<void>((resolve,reject)=>{if(signal.aborted)return reject(new UponAIError('Request cancelled or timed out'));const cancel=()=>{clearTimeout(timer);reject(new UponAIError('Request cancelled or timed out'));};const timer=setTimeout(()=>{signal.removeEventListener('abort',cancel);resolve();},delay);signal.addEventListener('abort',cancel,{once:true});});continue;
   }
   if(!response.ok){await response.body?.cancel();const id=response.headers.get('x-request-id');throw new UponAIError(`UponAI API returned HTTP ${response.status}`,response.status,id&&/^[\w-]{1,128}$/.test(id)?id:undefined);}
   if(response.status===204)return undefined as OperationOutput<K>;
   const contentLength=Number(response.headers.get('content-length'));if(contentLength>MAX_BYTES){await response.body?.cancel();throw new UponAIError('Response exceeds 5 MiB');}
   const chunks:Uint8Array[]=[];let size=0;const reader=response.body?.getReader();
   if(reader){try{for(;;){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>MAX_BYTES){await reader.cancel();throw new UponAIError('Response exceeds 5 MiB');}chunks.push(value);}}catch(e){if(e instanceof UponAIError)throw e;throw new UponAIError('Response interrupted');}}
   const bytes=Buffer.concat(chunks);const contentType=response.headers.get('content-type')||'';
   if(contentType.includes('json')){try{return JSON.parse(bytes.toString('utf8'));}catch{throw new UponAIError('Invalid JSON response');}}
   return new Blob([bytes],{type:contentType}) as OperationOutput<K>;
  }
 }
 async *paginate<K extends OperationId,T>(options:PaginationOptions<K,T>):AsyncGenerator<T>{
  if(!Object.hasOwn(metadata,options.operation)||metadata[options.operation].method!=='get')fail('Pagination supports GET operations only');
  const max=bounded(options.maxPages??100,1,1000,'page limit');let input=options.input;const seen=new Set<string>();
  for(let i=0;i<max;i++){const key=JSON.stringify(input);if(seen.has(key))throw new UponAIError('Pagination cursor repeated');seen.add(key);
   const page=await this.execute(options.operation,input,{signal:options.signal});for(const item of options.items(page))yield item;
   const next=options.next(page,input);if(!next)return;input=next;
  }throw new UponAIError('Pagination page limit reached');
 }
}
