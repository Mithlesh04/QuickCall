import { isNum, regexEscape } from "./utils/common"
import { QC_Function_NAME, QC_Methods } from "./utils/constant"

interface KeyValue {
    [key: string]: DataType
}

type DataType = 
    null      | 
    number    |
    bigint    |
    string    |
    undefined |
    KeyValue  |
    QC_Methods|
    Function  |
    DataType[]

type PathDataType = string | number

interface QC_Function_Bind {
    path: string
}
// type QuickCallArgumentType = string | number | null | undefined | bigint | KeyValue | object



export function decodeArgument(arg: DataType[]): DataType {
    const argLen: number = arg.length
    
    // converting the regular expression for the QC method
    const QC_Methods_Regex = new RegExp(regexEscape(QC_Function_NAME)+`\\[(.*?)\\]$`)

    function mainDecoder(arg: DataType, path: PathDataType[]): DataType {
        
        if ('string' === typeof arg && arg.match(QC_Methods_Regex)) {
            arg = function QC_Function(this: QC_Function_Bind, ...arg:any[]): void {
                // encode the argument before sending back to server/client
                // version 1 = no need to call the server/client again
                // we will add this feature in upcoming version
                console.log("decode string", this.path, arg)
            }.bind({
                path: arg
            })
        } else if (arg instanceof Object) {
            let newArg: any = Array.isArray(arg) ? [] : {}
            let keyMap: PathDataType[] = [...path]
            for (let key in arg) {
                let mainKey = key as keyof KeyValue
                let val: DataType = arg[mainKey as keyof DataType]
                keyMap.push(key)
                newArg[mainKey] = mainDecoder(val, keyMap)
            }
            arg = newArg
        }

        return arg as DataType
    }

    for(let i=0; i < argLen; ++i){
        arg[i] = mainDecoder(arg[i], [i]) as DataType
    }

    return arg
} 


export function encodeArgument(arg: DataType[]): DataType {
    const mainArg: DataType[] = []
    const argLen: number = arg.length
    
    function mainEncoder(arg: DataType, path: PathDataType[]): DataType {
        if (arg instanceof Function) {
            arg = ""
            for (let key of path) {
                if (isNum(key)) {
                    arg += `[${key}]` // for array index
                } else {
                    arg += `.${key}` // for object key
                }
            }
            arg = `${QC_Function_NAME}[${arg}]` // QuickCall Method
        } else if (arg instanceof Object) {
            let newArg: any = Array.isArray(arg) ? [] : {}
            let keyMap: PathDataType[] = [...path]
            for (let key in arg) {
                let mainKey = key as keyof KeyValue
                let val: DataType = arg[mainKey as keyof DataType]
                keyMap.push(key)
                newArg[mainKey] = mainEncoder(val, keyMap)
            }
            arg = newArg
        }

        return arg as DataType
    }

    for(let i=0; i < argLen; ++i){
        mainArg.push(mainEncoder(arg[i], [i]) as DataType)
    }

    return mainArg
}