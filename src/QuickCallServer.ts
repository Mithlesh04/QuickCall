import { Request, Response } from 'express';
import { decodeArgument, encodeArgument } from './arguments';
import { DEFAULT_QC_CommunicationChannel } from './utils/constant';
import { DataType, KeyValue } from './interface';
import { generateSignature } from './utils/common';

// currently we will support only the "/" namespace
// user can add multiple namespace in upcoming version

type AnyFunction = (...arg: any[]) => any

type QC_Client_Request_Data_Type = "function" | "returnCallback" | "returnObject" /** [()=>void] | { getName(){} } */ | "argObject" /** [()=>void] | { getName(){} } */

interface QC_Function_Stack_Callable_Interface {
    data: DataType | DataType[],
    signature: string,
    type: QC_Client_Request_Data_Type,
    arg?: DataType[],
    timestamp: number,
}

interface QC_Function_Stack_Interface {
    type: QC_Client_Request_Data_Type
    target: AnyFunction
    callable: Array<QC_Function_Stack_Callable_Interface>
}

interface QC_Client_Request_Data extends KeyValue {
    qc: {
        type: QC_Client_Request_Data_Type
        name: string
        signature?: QC_Function_Stack_Callable_Interface["signature"]
        arg: DataType[]
    }
}

const QC_Function_Stack = new Map<string, QC_Function_Stack_Interface>()


function QCWrapper(target: AnyFunction, aliasName?: string): AnyFunction {
    QC_Function_Stack.set(aliasName || target.name, {
        type: "function",
        target,
        callable: new Array(),
    })

    return target
}

// .target.apply({
//     qc: {
//         caller: "QuickCall",
//         reqest: req,
//         response: res
//     }
// }

function responseHandler(networkResponseHanlder: AnyFunction, method: QC_Function_Stack_Interface, data: QC_Client_Request_Data, req: Request, res: Response) {
    const decodedClientArg = decodeArgument(data.qc.arg)
    Promise.all([
        method.target.apply({
            qc: {
                caller: "QuickCall",
                reqest: req,
                response: res
            }
        }, decodedClientArg)
    ])
        .then((data: DataType[]) => { // when method.target will return any value
            const dataReturnByQCFunction = data[0]
            // return data can be anything like callback function or any other 
            // encode the return data, before sending the client again
            // if nothing will return then it will be @undefined
            const encodedData = encodeArgument([dataReturnByQCFunction], true) 

            const returnData = encodedData[0]

            // there are some function which client need to call
            // we have to keep that function somewhere with signature
            if(encodedData[1]){ // TODO :: Continue work from here
                // if function return [ ()=>{} ] or (()=>{}) or { getName: ()=>{} } or other
                const timestamp = Date.now()
                const isReturnDataFunction = "function" === typeof dataReturnByQCFunction
                const newObj: QC_Function_Stack_Callable_Interface = {
                    data: dataReturnByQCFunction,
                    signature: generateSignature(timestamp, isReturnDataFunction ? dataReturnByQCFunction.name : "returnObject"),
                    type: isReturnDataFunction ? "returnCallback" : "returnObject",
                    timestamp
                }
                method.callable.push(newObj)
                networkResponseHanlder({
                    type: newObj.type, 
                    data: Array.isArray(returnData) ? returnData[0]: returnData,
                    signature: newObj.signature
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
        const method = QC_Function_Stack.get(data.qc.name)
        if ("function" === typeof method?.target) {
            responseHandler(networkResponseHanlder, method, data, req, res)
        }
    }
}


export function Server(expressApp: any, communicationChannel: string = DEFAULT_QC_CommunicationChannel) {

    // init the express route for communication
    expressApp.use(communicationChannel, (req: Request, res: Response) => {
        console.log("[QC] req.body", req.body)
        requestDataHandler(req.body as QC_Client_Request_Data, (qcData: any) => {

            // sending the response back to client
            res.send({
                qc: qcData
            })

        }, req, res)
    })


    return QCWrapper
}


