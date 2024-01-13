import { QC_Methods } from "./utils/constant"

export interface KeyValue {
    [key: string]: DataType
}

export type DataType = 
    null      | 
    number    |
    bigint    |
    string    |
    boolean   |
    undefined |
    KeyValue  |
    QC_Methods|
    Function  |
    DataType[]

export type PathDataType = string | number

export interface QC_Function_Bind {
    path: string
}

export type QCServerFunctionReturnType = "return" | "argCB" /** argument callback */

export type AnyFunction = (...arg: any[]) => any

export type QC_Client_Request_Data_Type = "function" | "returnCallback" | "returnObject" | "argObject" /** ("returnObject" | "argObject") = [()=>void] | { getName(){} } | undefined | null | boolean | bigdata | string | other */

export interface QC_Function_Storage_Callable_Interface {
    qc: {
        data: DataType | DataType[],
        signature: string,
        type: QC_Client_Request_Data_Type,
        arg?: DataType[],
        timestamp: number,
    }
}

export interface QC_Function_Storage_Interface {
    type: QC_Client_Request_Data_Type
    target: AnyFunction,
    name: string,
    aliasName?: string | undefined
}

export interface QC_Client_Request_Data extends KeyValue {
    qc: {
        type: QC_Client_Request_Data_Type
        name: string
        signature?: QC_Function_Storage_Callable_Interface["signature"]
        arg: DataType[]
    }
}

export type QC_Methods_Action = "call"

export type QC_Transction_ID = string

export interface QC_Object {
    clientTansactionId: QC_Transction_ID, 
    serverTansactionId?: QC_Transction_ID, 
    action: QC_Methods_Action, 
    type: QC_Client_Request_Data_Type, 
    functionName?: string, 
    args?: any[]
}