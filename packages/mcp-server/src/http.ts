import http from 'node:http';
import { timingSafeEqual } from 'node:crypto';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createMcpServer, type McpOptions } from './index.js';
export interface HttpOptions { accessToken:string;publicUrl:string;port?:number; }
export async function startHttpServer(config:McpOptions,options:HttpOptions){
 const origin=new URL(options.publicUrl);
 if(origin.protocol!=='https:'||origin.username||origin.password||origin.pathname!=='/'||origin.search||origin.hash)throw Error('Configure a fixed HTTPS public origin');
 if(options.accessToken.length<32||/\s/.test(options.accessToken))throw Error('Configure a distinct MCP access token of at least 32 characters');
 const port=options.port??7093;if(!Number.isInteger(port)||port<0||port>65535)throw Error('Invalid port');
 let active=0;let windowStart=Date.now(),count=0;
 const reply=(res:http.ServerResponse,status:number,message:string)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store',...(status===401?{'WWW-Authenticate':'Bearer realm="uponai-mcp"'}:{})});res.end(JSON.stringify({error:message}));};
 const server=http.createServer(async(req,res)=>{
  if(req.headers.host!==origin.host)return reply(res,421,'Invalid host');
  if(req.headers.origin&&req.headers.origin!==origin.origin)return reply(res,403,'Invalid origin');
  if(req.url!=='/mcp')return reply(res,404,'Not found');
  const supplied=/^Bearer (\S+)$/.exec(req.headers.authorization||'')?.[1]||'';
  const a=Buffer.from(supplied),b=Buffer.from(options.accessToken);
  if(a.length!==b.length||!timingSafeEqual(a,b))return reply(res,401,'Unauthorized');
  if(req.method!=='POST')return reply(res,405,'Use POST');
  if(!/^application\/json(?:;|$)/i.test(req.headers['content-type']||''))return reply(res,415,'Use application/json');
  if(Date.now()-windowStart>=60000){windowStart=Date.now();count=0;}
  if(++count>60||active>=4)return reply(res,429,'Request limit exceeded');
  active++;let mcp;let transport;
  try{
   let raw='';for await(const chunk of req){raw+=chunk;if(Buffer.byteLength(raw)>65536){reply(res,413,'Request too large');return;}}
   let body;try{body=JSON.parse(raw);}catch{reply(res,400,'Invalid JSON');return;}
   // A fixed server credential is used upstream. The caller's MCP token is never forwarded.
   mcp=await createMcpServer(config);
   transport=new StreamableHTTPServerTransport({sessionIdGenerator:undefined,enableJsonResponse:true});
   await mcp.connect(transport);await transport.handleRequest(req,res,body);
  }catch{if(!res.headersSent)reply(res,503,'MCP temporarily unavailable');}
  finally{await mcp?.close().catch(()=>{});active--;}
 });
 server.requestTimeout=15000;server.headersTimeout=10000;
 await new Promise<void>((resolve,reject)=>{server.once('error',reject);server.listen(port,'127.0.0.1',resolve);});return server;
}
