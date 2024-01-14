import { AnyFunction } from "../interface"

type RequestDataActionType = "call" | "init"

type RequestDataType = "function" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object"


export interface QC_Request_Data {
    transactionId: string
    stackCount: number
    type: RequestDataType
    name: string
    action: RequestDataActionType
    meta: {
        caller: "client" | "server"
        initializer: "client" | "server"
    }
    arg?: any[]
}

export interface QC_Transaction_Storage_Stack_Interface {
    type: RequestDataType
    target: QC_Transaction_Storage_Stack_Interface["type"] extends "function" ? AnyFunction : any
    arg: any[]
    action: RequestDataActionType
    meta: {
        caller: "client" | "server"
        initializer: "client" | "server"
    }
    name?: string // name can't be there if QC_Transaction_Storage_Stack_Interface["type"] != function
    return?: QC_Transaction_Storage_Stack_Interface
}

export interface QC_Transaction_Storage_Interface {
    transactionId: string
    startTimeStamp: number
    stackCount: number
    stack: QC_Transaction_Storage_Stack_Interface
}
