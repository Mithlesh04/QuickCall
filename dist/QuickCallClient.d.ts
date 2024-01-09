interface QuickCallClient {
    [key: string]: (...args: any[]) => Promise<any>;
}
/**
 * @param communicationChannel http/https url where QuickCall will communicate
 */
export declare function QuickCallClient(communicationChannel: string, axios: any): QuickCallClient;
export {};
