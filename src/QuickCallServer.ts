import { Request, Response } from 'express';
import { decodeArgument } from './arguments';

// currently we will support only the "/" namespace
// user can add multiple namespace in upcoming version

type AnyFunction = (...arg: any[])=> any

const QC_Function_Stack = new Map<string, AnyFunction>()


function QCWrapper(target: AnyFunction): AnyFunction{
    QC_Function_Stack.set(target.name, target)

    return target
}


export function Server(expressApp: any, communicationChannel: string="/quick-call"){
    // init the express route for communication
    expressApp.use(communicationChannel, (req: Request, res: Response)=>{
        console.log("[QC] req.body", req.body)
        requestDataHandler(req.body, (data: any)=>{
            
            res.send({
                qc: {
                    return: data
                }
            })

        })
    })

    function responseHandler(cb: AnyFunction, data: any) {
        console.log("[QC] method return", data)
        cb(data)
        // Promise.all(data)
        // .then((data: any)=>{
        // })
        // .catch((error: any)=>{
        //     console.log("promise rej", error)
        // })
    }

    function requestDataHandler(data: any, networkResponseHanlder: AnyFunction){
        console.log("requestDataHandler = ", data)
        if(data.qc && data.qc.type === "function"){
            const method = QC_Function_Stack.get(data.qc.name)
            console.log("method = ", method)
            if("function" === typeof method){
                responseHandler(networkResponseHanlder, method(...decodeArgument(data.qc.arg)))
            }
        }
    }


    return QCWrapper
}


