import { initAxiosInstance } from "./request";
import { Store_Interface, store } from "./store";

export function Client(host: string, channel: string): Store_Interface{
    initAxiosInstance(host, channel)

    return store
}