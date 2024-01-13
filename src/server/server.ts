import { Response, Request } from "express"
import { DEFAULT_QC_CommunicationChannel } from "../utils/constant"
import { QCWrapper, QCgetTargetByName } from "./wrapper"
import { AnyFunction } from "../interface"
import { getTransactionObjById, initTransaction } from "./transaction"
import { QC_Request_Data, QC_Transction_Storage_Stack_Interface } from "./serverCommon.td"
import { encodeQuickCallSignature, is_QC_Signature } from "../utils/common"


function callQCFunction(stack: QC_Transction_Storage_Stack_Interface, stackPath: any[]){
    return Promise.allSettled([
        stack.target(...stack.arg)
    ]).then((promiseObj: Array<PromiseSettledResult<any>>)=>{

        if(promiseObj[0]?.status === "rejected"){
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
        }

        if(returnType === "function"){
            stackPath.push("return", "target") // modify this when return datatype will be [()=>void] list of function or any other
            stack.return.name = encodeQuickCallSignature("QCFunction", '', stackPath.join("."))
        }
        
    })
}

async function QCFunctionHandler(qcData: QC_Request_Data){
    if(qcData.action === "call"){
       const transObj = getTransactionObjById(qcData.transactionId)
       
       if(!transObj){
            // * return error. error can be throw because of transaction id is not there in transaction storage
            // do not create and init the transaction id here.
            return
       }

       if(is_QC_Signature(qcData.name)){
            // as this is the qc signature so decode the signature first and perform the action
       }else{
            // if this is not the qc signature then it will be the qc wrapper function which is calling now
            // this function will always read from first stack
            if(transObj.stack.name !== qcData.name){
                // * return error. the function not exists in transaction storage which client is trying to call
                return;
            }

            if(transObj.stack.type === "function"){
                transObj.stack.arg = qcData.arg || [] // * decode the argument
                transObj.stack.action = qcData.action
                await callQCFunction(transObj.stack, ["stack"])
            }
        
       }


    }
}

export function RequestHandler(req: Request, res: Response){
    // req.body.data
    const qcReqData = req.body?.data?.qc as QC_Request_Data
    if(qcReqData){

        // check if stackCount is 0 then it's mean transaction is started
        // we have to keep the transaction in transaction storage
        if(qcReqData.stackCount === 0){
            const targetFunObj = QCgetTargetByName(qcReqData.name)

            if(!targetFunObj){
                // * return the target function is not there. check the function name
                return;
            }

            const initStatus = initTransaction(qcReqData.transactionId, {
                transactionId: qcReqData.transactionId,
                startTimeStamp: Date.now(),
                stackCount: 0,
                stack: {
                    type: qcReqData.type,
                    name: targetFunObj.aliasName || targetFunObj.name, // at this point it will be server function which wrapped by QuickCall
                    target: targetFunObj.target,
                    arg: [], // at this point arg will be empty. once someone call this then arg will be here if provided
                    action: "init", // at this point it will be "init" when someone will call this then it will be call
                    
                }
            })

            if(initStatus.error){
                // * return send error. the transaction id is already there. client needs to change the transaction id
            }
        }else{

            // return from here if there is any error
        }

        QCFunctionHandler(qcReqData)
        

    }else{
        // * return send error. the qc data is not there in body. 
    }
}


export function Server(expressApp: any, communicationChannel: string = DEFAULT_QC_CommunicationChannel): AnyFunction {

    // init the express route for communication
    expressApp.use(communicationChannel, RequestHandler)


    return QCWrapper
}
