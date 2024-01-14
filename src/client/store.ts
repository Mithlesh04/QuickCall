import { QC_Transaction_Storage_Stack_Interface } from "../server/serverType"
import { callClientStack, initTransaction } from "./transaction"

export interface Store_Interface {
    [key: string]: (...args: any[]) => Promise<any>;
}

export const store: Store_Interface = new Proxy({}, {
    get: storeHandleGet
})


function storeHandleGet(){
    const name = arguments[1] /** name of the function */

    const obj = {
        [name]: function(...arg: any[]): Promise<any>{ /** this function will call by the client */
            
            return new Promise(function(resolve): void {
                const tranStorage = initTransaction({
                    name,
                    arg,
                    type: "function",
                    action: "call",
                    target: undefined,
                    meta: {
                        caller: "client",
                        initializer: "server"
                    }
                } as QC_Transaction_Storage_Stack_Interface)
                
                callClientStack(tranStorage.transactionId, ["stack"] as const)
                .then(resolve)
            })

        }
    }

    return obj[name]
}

