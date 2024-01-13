import { DataType, PathDataType } from "../interface";
export declare function isNum(str: number | string): RegExpMatchArray | null;
export declare function regexEscape(str: string): string;
export declare function generateSignature(timestamp: number, name: string): string;
export declare function validateSignature(timestamp: number, name: string, signature: string): boolean;
export declare function is_QC_Signature(str: string): boolean;
export declare function decodeQuickCallSignature(signature: string): {
    isValid: boolean;
    signature?: string | undefined;
    method?: (typeof QuickCallMethods)[number]["name"] | undefined | string;
    data?: string | undefined;
};
export declare function encodeQuickCallSignature(method: typeof QuickCallMethods[number]["name"], data: string, signature?: string): string;
export declare const QuickCallMethods: readonly [{
    readonly name: "QCFunction";
    readonly dataType: "function";
    readonly encode: (obj: {
        path: PathDataType[];
        value: DataType;
    }) => void;
    readonly decode: (obj: {
        path: PathDataType[];
        value: DataType;
    }, methodData: {
        data: string | undefined;
        signature?: string | undefined;
    }) => void;
}];
