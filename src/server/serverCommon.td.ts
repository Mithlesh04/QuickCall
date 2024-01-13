import { AnyFunction } from "../interface"

type RequestDataActionType = "call" | "init"

type RequestDataType = "function" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object"


export interface QC_Request_Data {
    transactionId: string
    stackCount: number
    type: RequestDataType
    name: string
    arg?: any[]
    action: RequestDataActionType
}

export interface QC_Transction_Storage_Stack_Interface {
    type: RequestDataType
    name?: string // name can't be there if QC_Transction_Storage_Stack_Interface["type"] != function
    target: QC_Transction_Storage_Stack_Interface["type"] extends "function" ? AnyFunction : any
    arg: any[]
    action: RequestDataActionType
    return?: QC_Transction_Storage_Stack_Interface
}

export interface QC_Transction_Storage_Interface {
    transactionId: string
    startTimeStamp: number
    stackCount: number
    stack: QC_Transction_Storage_Stack_Interface
}
