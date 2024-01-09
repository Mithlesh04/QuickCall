"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeArgument = exports.decodeArgument = void 0;
const arguments_1 = require("./arguments");
Object.defineProperty(exports, "decodeArgument", { enumerable: true, get: function () { return arguments_1.decodeArgument; } });
Object.defineProperty(exports, "encodeArgument", { enumerable: true, get: function () { return arguments_1.encodeArgument; } });
// import { encodeArgument } from "./arguments"
// const data = ["main", 23, [ function(){} ]]
// console.log("data=", data)
// console.log("mainArg = ", encodeArgument(data))
// const data = [ 'main', 23, [ "$$QCFunction[[2][0]]" ] ]
// const decoded: any = decodeArgument(data)
// console.log("decode",decoded)
// decoded[2][0]("arg from parent", "hi", 12, { ram(){}})
// encodeArgument([
//     'ram', 
//     function(){},
//     {
//         name: {
//             class: {
//                 rollno: {
//                     get(){}
//                 }
//             }
//         }
//     }
// ])
