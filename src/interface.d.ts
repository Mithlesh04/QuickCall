import { QC_Methods } from "./utils/constant"

export interface KeyValue {
    [key: string]: DataType
}

export type DataType = 
    null      | 
    number    |
    bigint    |
    string    |
    undefined |
    KeyValue  |
    QC_Methods|
    Function  |
    DataType[]

export type PathDataType = string | number

export interface QC_Function_Bind {
    path: string
}