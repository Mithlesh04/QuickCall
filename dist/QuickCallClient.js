"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickCallClient = void 0;
const arguments_1 = require("./arguments");
/**
 * @param communicationChannel http/https url where QuickCall will communicate
 */
function QuickCallClient(communicationChannel, axios) {
    console.log(communicationChannel);
    const serverCall = function (payload, callback) {
        axios.post(communicationChannel, {
            qc: payload
        })
            .then((data) => {
            // console.log("data = ", data)
            callback({
                isSuccess: true,
                data: data.data
            });
        })
            .catch((error) => {
            console.log("axios error", error);
            callback({
                isSuccess: false,
                error
            });
        });
    };
    const proxyGetHandler = function (target, functionName) {
        console.log(target);
        return function (...args) {
            console.log("args = ", args);
            return new Promise((resolve) => {
                serverCall({
                    type: "function",
                    name: functionName,
                    arg: (0, arguments_1.encodeArgument)([...arguments])
                }, (res) => {
                    resolve(res.data.qc.return);
                });
            });
        };
    };
    const QCStore = new Proxy({}, {
        get: proxyGetHandler
    });
    return QCStore;
}
exports.QuickCallClient = QuickCallClient;
