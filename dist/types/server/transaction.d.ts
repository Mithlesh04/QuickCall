import { QC_Transaction_Storage_Interface, QC_Transaction_Storage_Stack_Interface } from "./serverType";
export declare function initTransaction(transId: string, data: QC_Transaction_Storage_Interface): {
    error: boolean;
    message?: string;
};
export declare function getTransactionObjById(transId: string): QC_Transaction_Storage_Interface | undefined;
export declare function getTransactionStack(transId: string, stackPath: string): QC_Transaction_Storage_Stack_Interface | undefined;
export declare function callServerStack(stack: QC_Transaction_Storage_Stack_Interface, stackPath: any[]): Promise<{
    return: QC_Transaction_Storage_Stack_Interface;
} | undefined>;
export declare function deleteTransaction(transactionId: string): void;
