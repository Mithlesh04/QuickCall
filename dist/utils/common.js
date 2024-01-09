"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexEscape = exports.isNum = void 0;
const ALL_deepDigITS_REGEX = /^\d+$/;
function isNum(str) {
    return String(str).match(ALL_deepDigITS_REGEX);
}
exports.isNum = isNum;
function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.regexEscape = regexEscape;
