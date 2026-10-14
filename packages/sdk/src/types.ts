import type { operations } from './schema.js';
export type OperationId = keyof operations;
type Params<O> = O extends { parameters: infer P } ? { [K in keyof P as K extends 'path' | 'query' ? P[K] extends undefined ? never : K : never]: P[K] } : {};
type Content<B> = B extends { content: infer C } ? C extends { 'multipart/form-data': unknown } ? FormData : C[keyof C] : never;
type Body<O> = O extends { requestBody: infer B } ? { body: Content<B> } : O extends { requestBody?: infer B } ? [Exclude<B, undefined>] extends [never] ? {} : { body?: Content<Exclude<B, undefined>> } : {};
export type OperationInput<K extends OperationId> = Params<operations[K]> & Body<operations[K]>;
type Success<R> = { [S in keyof R]: `${S & (string | number)}` extends `2${string}` ? R[S] extends { content: infer C } ? C extends { 'application/json': infer J } ? J : C extends undefined ? void : Blob : void : never }[keyof R];
export type OperationOutput<K extends OperationId> = operations[K] extends {responses: infer R} ? Success<R> : unknown;
export interface RequestOptions { signal?: AbortSignal; timeoutMs?: number; }
export interface ClientOptions {
 apiKey: string | (() => string | Promise<string>);
 baseUrl?: string;
 timeoutMs?: number;
 maxRetries?: number;
 fetch?: typeof globalThis.fetch;
}
export interface PaginationOptions<K extends OperationId, T> {
 operation: K;
 input: OperationInput<K>;
 items: (page: OperationOutput<K>) => readonly T[];
 next: (page: OperationOutput<K>, previous: OperationInput<K>) => OperationInput<K> | undefined;
 maxPages?: number;
 signal?: AbortSignal;
}
