import axios, { AxiosInstance } from "axios"
import { QC_Request_Data } from "../server/serverType"
import { DEFAULT_QC_Channel } from "../utils/constant"

var Axios_Instance: AxiosInstance

export function serverCall(qcData: QC_Request_Data, callback: (res: object) => void): void {
    Axios_Instance.request({
        method: "post",
        data: {
            qc: qcData
        }
    }).then((data: any) => {
        // console.log("[serverCall] data = ", data)
        callback({
            isSuccess: true,
            data: data.data
        })
    })
    .catch((error: any) => {
        // console.log("[serverCall] axios_error", error)
        callback({
            isSuccess: false,
            error
        })
    })
}


export function initAxiosInstance(host: string, channel: string = DEFAULT_QC_Channel){
    
    Axios_Instance = axios.create({
        baseURL: axios.getUri({ baseURL: host, url: channel }),
    });

}