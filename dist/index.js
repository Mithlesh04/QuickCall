"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.QuickCallClient = void 0;
const QuickCallClient_1 = require("./QuickCallClient");
Object.defineProperty(exports, "QuickCallClient", { enumerable: true, get: function () { return QuickCallClient_1.QuickCallClient; } });
const QuickCallServer_1 = require("./QuickCallServer");
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return QuickCallServer_1.Server; } });
// import axios from "axios"
// const qc = QuickCallClient("http://localhost:3002/quick-call", axios)
// if('function' === typeof qc.add){
//     qc.add(10, 20)  
//     .then((data: any)=>{
//         console.log("d = ", data) 
//     })
// }
