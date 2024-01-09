import { QC_Methods } from "./utils/constant";
interface KeyValue {
    [key: string]: DataType;
}
type DataType = null | number | bigint | string | undefined | KeyValue | QC_Methods | Function | DataType[];
export declare function decodeArgument(arg: DataType[]): DataType;
export declare function encodeArgument(arg: DataType[]): DataType;
export {};
