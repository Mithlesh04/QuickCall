import { AnyFunction } from './interface';
declare function QCWrapper(target: AnyFunction, aliasName?: string): AnyFunction;
export declare function Server(expressApp: any, communicationChannel?: string): typeof QCWrapper;
export {};
