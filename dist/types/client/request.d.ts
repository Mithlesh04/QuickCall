import { QC_Request_Data } from "../server/serverType";
export declare function serverCall(qcData: QC_Request_Data, callback: (res: object) => void): void;
export declare function initAxiosInstance(host: string, channel?: string): void;
