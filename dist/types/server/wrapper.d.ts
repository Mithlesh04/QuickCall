import { AnyFunction, QC_Function_Storage_Interface } from "../interface";
export declare function QCWrapper(target: AnyFunction, aliasName?: string): AnyFunction;
export declare function QCgetTargetByName(name: string): QC_Function_Storage_Interface | undefined;
