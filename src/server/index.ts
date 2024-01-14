import { Response, Request } from "express"
import { DEFAULT_QC_Channel } from "../utils/constant"
import { QCWrapper, QCgetTargetByName } from "./wrapper"
import { AnyFunction } from "../interface"
import { callServerStack, deleteTransaction, getTransactionObjById, getTransactionStack, initTransaction } from "./transaction"
import { QC_Request_Data } from "./serverType"
import { decodeQuickCallSignature, is_QC_Signature } from "../utils/common"





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
            const qcSignDec = decodeQuickCallSignature(qcData.name)
            if(!qcSignDec.isValid){
                // * return error. Invalid qc signature
                return
            }

            if(qcSignDec.signature){
                const stack = getTransactionStack(qcData.transactionId, qcSignDec.signature)
                if(!stack){
                    // * return error. stack<the function which client want to call> not available in transaction stack
                    return
                }

                if(stack.type === "function"){
                    stack.arg = qcData.arg || [] // * decode the argument
                    stack.action = qcData.action
                    const qcFunctionData = await callServerStack(stack, ["stack"])
                    return {
                        transactionId: qcData.transactionId,
                        ...qcFunctionData
                    }
                }
                
            }

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
                const qcFunctionData = await callServerStack(transObj.stack, ["stack"])
                return {
                    transactionId: qcData.transactionId,
                    ...qcFunctionData
                }
            }
        
       }


    }

    return undefined
}

function RequestHandler(req: Request, res: Response){
    // req.body.data
    const qcReqData = req.body?.qc as QC_Request_Data
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
                    meta: {
                        initializer: "server",
                        caller: "client"
                    }
                }
            })

            if(initStatus.error){
                // * return send error. the transaction id is already there. client needs to change the transaction id
            }
        }else{

            // return from here if there is any error
        }

        QCFunctionHandler(qcReqData)
        .then(data=>{
            // ! temp. Clearing the storage 
            deleteTransaction(qcReqData.transactionId)
            // console.log("returned obj", data)
            res.send({
                qc: data
            })
        })
        

    }else{
        // * return send error. the qc data is not there in body. 
    }
}


export function Server(expressApp: any, channel: string = DEFAULT_QC_Channel): AnyFunction {

    // init the express route for communication
    expressApp.use(channel, RequestHandler)


    return QCWrapper
}
