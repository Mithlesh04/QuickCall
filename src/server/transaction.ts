import { encodeQuickCallSignature } from "../utils/common"
import { QC_Transaction_Storage_Interface, QC_Transaction_Storage_Stack_Interface } from "./serverType"




const QC_Server_Transaction_Storage = new Map<string, QC_Transaction_Storage_Interface>()


export function initTransaction(transId: string, data: QC_Transaction_Storage_Interface): { error: boolean, message?: string } {

    if(QC_Server_Transaction_Storage.has(transId)){
        return {
            error: true,
            message: "Transaction Id is already exists. Please change the transaction id"
        } as const
    }

    QC_Server_Transaction_Storage.set(transId, data)
    
    return {
        error: false
    } as const
}

export function getTransactionObjById(transId: string): QC_Transaction_Storage_Interface | undefined {
    return QC_Server_Transaction_Storage.get(transId)
}


// stackMap = stack.return.target // only support for this
// stackMap = stack.return.target[]
// stackMap = stack.return.target[0]
// stackMap = stack.return.target[] 
export function getTransactionStack(transId: string, stackPath: string): QC_Transaction_Storage_Stack_Interface | undefined{
    const transObj = getTransactionObjById(transId)
    if(!transObj) return undefined;

    var stackObj!: QC_Transaction_Storage_Stack_Interface

    stackPath.split(/\./).forEach((path)=>{
        if(path.startsWith("target"))return;

        stackObj = (stackObj || transObj)[path as keyof (QC_Transaction_Storage_Interface | QC_Transaction_Storage_Stack_Interface)]
    })
    
    return stackObj

}


export async function callServerStack(stack: QC_Transaction_Storage_Stack_Interface, stackPath: any[]){
    const promiseObj = await Promise.allSettled([
        stack.target(...stack.arg)
    ])
    if (promiseObj[0]?.status === "rejected") {
        // * handle the error which return by QC function. use this to get the rejection reason promiseObj[0].reason
        return
    }
    // the data which return by QC function 
    const funcReturnData: any = (promiseObj[0] as PromiseFulfilledResult<any> || { value: undefined /** if nothing will return then the default return type will be undefined */ } as const).value
    const returnType = typeof funcReturnData
    stack.return = {
        type: returnType,
        target: funcReturnData,
        action: "init",
        arg: [],
        meta: {
            initializer: "server",
            caller: "client"
        }
    }
    if (returnType === "function") {
        stackPath.push("return", "target") // modify this when return datatype will be [()=>void] list of function or any other
        stack.return.name = encodeQuickCallSignature("QCFunction", '', stackPath.join(".")) // * here return can be promise (or and that is called) also. handling is pending
        
        return {
            return: stack.return
        }
    }

    return {
        return: stack.return
    }
}

export function deleteTransaction(transactionId: string){
    QC_Server_Transaction_Storage.delete(transactionId)
}