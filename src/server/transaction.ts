import { QC_Transction_Storage_Interface } from "./serverCommon.td"




const QC_Transction_Storage = new Map<string, QC_Transction_Storage_Interface>()


export function initTransaction(transId: string, data: QC_Transction_Storage_Interface): { error: boolean, message?: string } {

    if(QC_Transction_Storage.has(transId)){
        return {
            error: true,
            message: "Transaction Id is already exists. Please change the transaction id"
        } as const
    }

    QC_Transction_Storage.set(transId, data)
    
    return {
        error: false
    } as const
}

export function getTransactionObjById(transId: string): QC_Transction_Storage_Interface | undefined {
    return QC_Transction_Storage.get(transId)
}