type AnyFunction = (...arg: any[]) => any;
declare function QCWrapper(target: AnyFunction): AnyFunction;
export declare function Server(expressApp: any, communicationChannel?: string): typeof QCWrapper;
export {};
