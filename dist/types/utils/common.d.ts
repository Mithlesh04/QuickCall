export declare function isNum(str: number | string): RegExpMatchArray | null;
export declare function regexEscape(str: string): string;
export declare function generateSignature(timestamp: number, name: string): string;
export declare function validateSignature(timestamp: number, name: string, signature: string): boolean;
