import { 
    decodeArgument, 
    encodeArgument 
} from "../arguments"
import axios, { AxiosInstance } from "axios"
import { QC_Function_Storage_Callable_Interface, QC_Object, QC_Transction_ID } from "../interface";

interface QuickCallClient {
    [key: string]: (...args: any[]) => Promise<any>;
}

var Axios_Instance: AxiosInstance

const QC_Tansaction_Storage = new Map<QC_Transction_ID, any>()


export function serverCall(QCObject: QC_Object, callback: (res: object) => void): void {
    Axios_Instance.request({
        method: "post",
        data: {
            qc: QCObject
        }
    }).then((data: any) => {
        console.log("data = ", data)
        callback({
            isSuccess: true,
            data: data.data
        })
    })
    .catch((error: any) => {
        console.log("axios error", error)
        callback({
            isSuccess: false,
            error
        })
    })
}

export function ClientCallHandler(QCObject: QC_Object) {
    return function QC_Function(...args: any[]): Promise<any> {
        return new Promise((resolve) => {
            QCObject.args = encodeArgument([...args])

            serverCall(QCObject, (res: any) => {
                const data = serverResponseDataHandler(res.data)
                console.log("qc_response_data", res.data)
                resolve(data)
            })
        })
    }
}


function serverResponseDataHandler(responseData: QC_Function_Storage_Callable_Interface): any {
    const arg = decodeArgument([responseData?.qc?.data])

    if("function" === typeof arg[0]){
        if(responseData.qc.type === "returnCallback"){
            return arg[0]
        }
    }
    return arg
}

function initTransaction(): string{
    const TransactionId = Math.random().toString(36)
    QC_Tansaction_Storage.set(TransactionId, {
        transaction: {
            started: true,
            startedTimeStamp: Date.now(),
            requestCount: 1 // it will increase whenever client will communicate with server with this transaction id
        },
    })

    return TransactionId
}

/**
 * @param communicationChannel http/https url where QuickCall will communicate
 */
export function QuickCallClient(communicationChannel: string): QuickCallClient {
    console.log(communicationChannel)
    
    // creating the axios instance
    Axios_Instance = axios.create({
        baseURL: communicationChannel,
        // timeout: 1000,
    });


    const QCStore: QuickCallClient = new Proxy({}, {
        get: function (target: QuickCallClient, functionName: string): (...args: any[]) => Promise<any> {
            console.log(target)
           
            return ClientCallHandler({
                clientTansactionId: initTransaction(),
                type: "function",
                action: "call",
                functionName,
            })
        }
    })


    return QCStore
}
