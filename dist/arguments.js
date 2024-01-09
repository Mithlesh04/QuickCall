"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeArgument = exports.decodeArgument = void 0;
const common_1 = require("./utils/common");
const constant_1 = require("./utils/constant");
// type QuickCallArgumentType = string | number | null | undefined | bigint | KeyValue | object
function decodeArgument(arg) {
    const argLen = arg.length;
    // converting the regular expression for the QC method
    const QC_Methods_Regex = new RegExp((0, common_1.regexEscape)(constant_1.QC_Function_NAME) + `\\[(.*?)\\]$`);
    function mainDecoder(arg, path) {
        if ('string' === typeof arg && arg.match(QC_Methods_Regex)) {
            arg = function QC_Function(...arg) {
                // encode the argument before sending back to server/client
                // version 1 = no need to call the server/client again
                // we will add this feature in upcoming version
                console.log("decode string", this.path, arg);
            }.bind({
                path: arg
            });
        }
        else if (arg instanceof Object) {
            let newArg = Array.isArray(arg) ? [] : {};
            let keyMap = [...path];
            for (let key in arg) {
                let mainKey = key;
                let val = arg[mainKey];
                keyMap.push(key);
                newArg[mainKey] = mainDecoder(val, keyMap);
            }
            arg = newArg;
        }
        return arg;
    }
    for (let i = 0; i < argLen; ++i) {
        arg[i] = mainDecoder(arg[i], [i]);
    }
    return arg;
}
exports.decodeArgument = decodeArgument;
function encodeArgument(arg) {
    const mainArg = [];
    const argLen = arg.length;
    function mainEncoder(arg, path) {
        if (arg instanceof Function) {
            arg = "";
            for (let key of path) {
                if ((0, common_1.isNum)(key)) {
                    arg += `[${key}]`; // for array index
                }
                else {
                    arg += `.${key}`; // for object key
                }
            }
            arg = `${constant_1.QC_Function_NAME}[${arg}]`; // QuickCall Method
        }
        else if (arg instanceof Object) {
            let newArg = Array.isArray(arg) ? [] : {};
            let keyMap = [...path];
            for (let key in arg) {
                let mainKey = key;
                let val = arg[mainKey];
                keyMap.push(key);
                newArg[mainKey] = mainEncoder(val, keyMap);
            }
            arg = newArg;
        }
        return arg;
    }
    for (let i = 0; i < argLen; ++i) {
        mainArg.push(mainEncoder(arg[i], [i]));
    }
    return mainArg;
}
exports.encodeArgument = encodeArgument;
