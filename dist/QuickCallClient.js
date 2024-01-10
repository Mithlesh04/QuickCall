"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickCallClient = void 0;
const arguments_1 = require("./arguments");
const axios_1 = __importDefault(require("axios"));
console.log("axios.post", axios_1.default);
/**
 * @param communicationChannel http/https url where QuickCall will communicate
 */
function QuickCallClient(communicationChannel) {
    console.log(communicationChannel);
    const serverCall = function (payload, callback) {
        (0, axios_1.default)({
            method: "post",
            url: communicationChannel,
            data: {
                qc: payload
            }
        }).then((data) => {
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
