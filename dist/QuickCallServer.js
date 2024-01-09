"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const arguments_1 = require("./arguments");
const QC_Function_Stack = new Map();
function QCWrapper(target) {
    QC_Function_Stack.set(target.name, target);
    return target;
}
function Server(expressApp, communicationChannel = "/quick-call") {
    // init the express route for communication
    expressApp.use(communicationChannel, (req, res) => {
        console.log("[QC] req.body", req.body);
        requestDataHandler(req.body, (data) => {
            res.send({
                qc: {
                    return: data
                }
            });
        });
    });
    function responseHandler(cb, data) {
        console.log("[QC] method return", data);
        cb(data);
        // Promise.all(data)
        // .then((data: any)=>{
        // })
        // .catch((error: any)=>{
        //     console.log("promise rej", error)
        // })
    }
    function requestDataHandler(data, networkResponseHanlder) {
        console.log("requestDataHandler = ", data);
        if (data.qc && data.qc.type === "function") {
            const method = QC_Function_Stack.get(data.qc.name);
            console.log("method = ", method);
            if ("function" === typeof method) {
                responseHandler(networkResponseHanlder, method(...(0, arguments_1.decodeArgument)(data.qc.arg)));
            }
        }
    }
    return QCWrapper;
}
exports.Server = Server;
