import { QC_Transaction_Storage_Interface, QC_Transaction_Storage_Stack_Interface } from "../server/serverType";
export declare function initTransaction(stack: QC_Transaction_Storage_Stack_Interface): QC_Transaction_Storage_Interface;
export declare function getTransactionObjById(transId: string): QC_Transaction_Storage_Interface | undefined;
export declare function callClientStack(transactionId: string, stackPath: any[]): Promise<unknown>;
