export class UponAIError extends Error {
 constructor(message: string, public readonly status?: number, public readonly requestId?: string) { super(message); this.name='UponAIError'; }
}
export class UponAIValidationError extends UponAIError { constructor(message:string){super(message);this.name='UponAIValidationError';} }
