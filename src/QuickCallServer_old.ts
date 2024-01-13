import { Request, Response } from 'express';
import { decodeArgument, encodeArgument } from './arguments';
import { DEFAULT_QC_CommunicationChannel } from './utils/constant';
import { DataType, QC_Client_Request_Data, QC_Function_Storage_Interface, AnyFunction, QC_Function_Storage_Callable_Interface } from './interface';
import { generateSignature } from './utils/common';

// currently we will support only the "/" namespace
// user can add multiple namespace in upcoming version



const QC_Function_Storage = new Map<string, QC_Function_Storage_Interface>() // storage for keeping the target functions

// const QC_Transction_Storage = new Map<QC_Transction_ID, any>()


function QCWrapper(target: AnyFunction, aliasName?: string): AnyFunction {
    QC_Function_Storage.set(aliasName || target.name, {
        type: "function",
        target,
        name: target.name
    })

    return target
}


function responseHandler(networkResponseHanlder: AnyFunction, method: QC_Function_Storage_Interface, data: QC_Client_Request_Data, req: Request, res: Response) {
    const decodedClientArg = decodeArgument(data.qc.arg)
    Promise.all([
        method.target.apply({
            // applying the qc arg. so that function will know who is calling and also function can directly use the express req and res object
            qc: {
                caller: "QuickCall",
                reqest: req,
                response: res
            }
        }, decodedClientArg)
    ])
        .then((data: DataType[]) => { // when method.target will return any value
            const dataReturnByQCFunction = data[0]
            const timestamp = Date.now()
            const isReturnDataFunction = "function" === typeof dataReturnByQCFunction
            const signature = generateSignature(timestamp, isReturnDataFunction ? dataReturnByQCFunction.name : "returnObject")

            // return data can be anything like callback function or any other 
            // encode the return data, before sending the client again
            // if nothing will return then it will be @undefined
            const encodedData = encodeArgument([dataReturnByQCFunction], true, signature) 

            const returnData = encodedData[0]

            // there are some function which client need to call
            // we have to keep that function somewhere with signature
            if(encodedData[1]){ // TODO :: Continue work from here
                // if function return [ ()=>{} ] or (()=>{}) or { getName: ()=>{} } or other
                
                const newObj: QC_Function_Storage_Callable_Interface = {
                   qc: {
                        data: dataReturnByQCFunction,
                        signature: signature,
                        type: isReturnDataFunction ? "returnCallback" : "returnObject",
                        timestamp
                   }
                }
                // method.callable.push(newObj)
                networkResponseHanlder({
                    type: newObj.qc.type, 
                    data: Array.isArray(returnData) ? returnData[0]: returnData,
                    signature: newObj.qc.signature
                })
            }else{
                networkResponseHanlder({
                    type: "function" === typeof dataReturnByQCFunction ? "returnCallback" : "returnObject", 
                    data: Array.isArray(returnData) ? returnData[0]: returnData,
                })
            }

        })
        .catch((error: any) => {
            console.log("promise rej", error)
        })
}

function requestDataHandler(data: QC_Client_Request_Data, networkResponseHanlder: AnyFunction, req: Request, res: Response) {
    console.log("requestDataHandler = ", data)
    if (data.qc && data.qc.type === "function") {
        const method = QC_Function_Storage.get(data.qc.name)
        if ("function" === typeof method?.target) {
            responseHandler(networkResponseHanlder, method, data, req, res)
        }
    }
}


export function Server(expressApp: any, communicationChannel: string = DEFAULT_QC_CommunicationChannel) {

    // init the express route for communication
    expressApp.use(communicationChannel, (req: Request, res: Response) => {
        console.log("[QC] req.body", req.body)
        requestDataHandler(req.body as QC_Client_Request_Data, (qcData: QC_Function_Storage_Callable_Interface) => {
            // sending the response back to client
            res.send({
                qc: qcData
            })

        }, req, res)
    })


    return QCWrapper
}


