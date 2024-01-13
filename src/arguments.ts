import { QuickCallMethods, decodeQuickCallSignature, encodeQuickCallSignature } from "./utils/common"
import { DataType, KeyValue, PathDataType } from "./interface"


function encodeDecodeQCMethods(isEncode: boolean, arg: DataType, path: PathDataType[], signature?: string): any {
    const obj = {
        isHandled: false,
        value: arg,
        path: path
    }

    if (isEncode) {
        const handler = QuickCallMethods.find(h => h.dataType === typeof arg)
        if (handler) {
            handler.encode.apply(handler, [obj] as const)
            obj.value = encodeQuickCallSignature(handler.name, obj.value as string, signature)
            obj.isHandled = true
        }
    }else{
        const sign = decodeQuickCallSignature(obj.value as string)
        if(sign.isValid){
            const handler = QuickCallMethods.find(h => h.name === sign.method)
            if(handler){
                handler.decode.apply(handler, [obj, { data: sign.data, signature: sign.signature }])
                obj.isHandled = true
            }
        }
    }
    

    return obj
}

export function decodeArgument(arg: DataType[]): DataType[] {
    const argLen: number = arg.length
    
    function mainDecoder(arg: DataType, path: PathDataType[]): DataType {
        
        const handler = encodeDecodeQCMethods(false, arg, path)
        if(handler.isHandled){
            arg = handler.value
        }else if (arg instanceof Object) {
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


export function encodeArgument(arg: DataType[], withCheckIsThereFunction: boolean=false, signature?: string): DataType[] | [ DataType[], boolean ] {
    const mainArg: DataType[] = []
    const argLen: number = arg.length
    var isThereAnyFunction = false
    
    function mainEncoder(arg: DataType, path: PathDataType[]): DataType {
        
        const handler = encodeDecodeQCMethods(true, arg, path, signature)

        if(handler.isHandled){
            arg = handler.value
            if(withCheckIsThereFunction)isThereAnyFunction = true;
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

    if(withCheckIsThereFunction){
        return [ mainArg, isThereAnyFunction ]
    }

    return mainArg
}
