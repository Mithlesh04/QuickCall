export interface Store_Interface {
    [key: string]: (...args: any[]) => Promise<any>;
}
export declare const store: Store_Interface;
