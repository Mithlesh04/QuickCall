import { encodeArgument } from "./arguments"

interface QuickCallClient {
    [key: string]: (...args: any[]) => Promise<any>;
}

/**
 * @param communicationChannel http/https url where QuickCall will communicate
 */
export function QuickCallClient(communicationChannel: string, axios: any): QuickCallClient {
    console.log(communicationChannel)

    const serverCall = function (payload: object, callback: (res: object) => void) {
        axios.post(communicationChannel, {
            qc: payload
        })
            .then((data: any) => {
                // console.log("data = ", data)
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




    const proxyGetHandler = function (target: QuickCallClient, functionName: any): (...args: any[]) => Promise<any> {
        console.log(target)
        return function (...args: any[]): Promise<any> {
            console.log("args = ", args)
            return new Promise((resolve) => {
                serverCall({
                    type: "function",
                    name: functionName,
                    arg: encodeArgument([...arguments])
                }, (res: any) => {
                    resolve(res.data.qc.return)
                })
            })
        }
    }

    const QCStore: QuickCallClient = new Proxy({}, {
        get: proxyGetHandler
    })


    return QCStore
}
