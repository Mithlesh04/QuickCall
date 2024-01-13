import { AnyFunction, QC_Function_Storage_Interface } from "../interface"

const QC_Function_Storage = new Map<string, QC_Function_Storage_Interface>() // storage for keeping the target functions


export function QCWrapper(target: AnyFunction, aliasName?: string): AnyFunction {
    QC_Function_Storage.set(aliasName || target.name, {
        target,
        type: "function",
        name: target.name,
        aliasName: aliasName
    })

    return target
}

export function QCgetTargetByName(name: string): QC_Function_Storage_Interface | undefined {

    if(QC_Function_Storage.has(name)){
        return QC_Function_Storage.get(name)
    }

    return undefined
}