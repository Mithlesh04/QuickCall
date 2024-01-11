import { DataType } from "./interface";
export declare function decodeArgument(arg: DataType[]): DataType[];
export declare function encodeArgument(arg: DataType[], withCheckIsThereFunction?: boolean): DataType[] | [DataType[], boolean];
