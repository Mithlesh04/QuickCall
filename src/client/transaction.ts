import { QC_Transaction_Storage_Interface, QC_Transaction_Storage_Stack_Interface } from "../server/serverType";
import { generateTransactionId } from "../utils/common";
import { serverCall } from "./request";

const QC_Client_Transaction_Storage = new Map<string, QC_Transaction_Storage_Interface>()


export function initTransaction(stack: QC_Transaction_Storage_Stack_Interface): QC_Transaction_Storage_Interface {
    const TransactionId = generateTransactionId()
    const data = {
        transactionId: TransactionId,
        startTimeStamp: Date.now(),
        stackCount: 0,
        stack: stack
    }
    
    if(QC_Client_Transaction_Storage.has(TransactionId)){
        // * currently we are assuming there will be unique transactionId
        // pending we have to handle this
    }

    QC_Client_Transaction_Storage.set(TransactionId, data)
    
    return data
}

export function getTransactionObjById(transId: string): QC_Transaction_Storage_Interface | undefined {
    return QC_Client_Transaction_Storage.get(transId)
}

export function callClientStack(transactionId: string, stackPath: any[]){
    // stackPath = [ stack, target ]
    return new Promise(resolve=>{
        
        const transObj: QC_Transaction_Storage_Interface | undefined = getTransactionObjById(transactionId)
        
        if(!transObj){
            // * return handle the error. 
            resolve("error")
            return 
        }
    
        var stackObj!: QC_Transaction_Storage_Stack_Interface
    
        stackPath.forEach((path)=>{
            if(path.startsWith("target"))return;
            stackObj = (stackObj || transObj)[path as keyof (QC_Transaction_Storage_Stack_Interface | QC_Transaction_Storage_Interface)]
        })
    
        if(stackObj.action === "call"){
            if(stackObj.meta.initializer === "server" && stackObj.name /** function name which client want to call */){
                serverCall({
                    meta: stackObj.meta,
                    action: stackObj.action,
                    name: stackObj.name,
                    stackCount: transObj.stackCount,
                    transactionId: transObj.transactionId,
                    type: stackObj.type,
                    arg: stackObj.arg
                }, (data: any)=>{
                    const qcResData = data?.data?.qc
                    // console.log("mainObj", qcResData)
                    if(qcResData){
                        // ! temp. Clearing the storage 
                        QC_Client_Transaction_Storage.delete(qcResData.transactionId)

                        if(qcResData.return){
                            if("function" !== typeof qcResData.return.type){
                                resolve(qcResData.return.target??undefined)
                                return;
                            }
                        }
                    }
                    resolve(data)
                })
                return;
            }else if(stackObj.meta.initializer === "client" && "function" === typeof stackObj.target){
                resolve(stackObj.target(...stackObj.arg))
                return;
            }
        }else{
            resolve("add action='call'. so that we can call the function")
        }

        resolve("no any condition matched")
    })

}