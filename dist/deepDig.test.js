"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepDig_1 = __importDefault(require("./deepDig"));
test("works with a shallow object", () => {
    expect((0, deepDig_1.default)({ param: 1 }, "param")).toBe(1);
});
test("works with a shallow array", () => {
    expect((0, deepDig_1.default)([1, 2, 3], "[2]")).toBe(3);
});
test("works with a shallow array when shouldThrow is true", () => {
    expect((0, deepDig_1.default)([1, 2, 3], "[2]", true)).toBe(3);
});
test("works with a nested object", () => {
    const source = { param: [{}, { test: "A" }] };
    expect((0, deepDig_1.default)(source, "param[1].test")).toBe("A");
});
test("returns undefined when source is null", () => {
    expect((0, deepDig_1.default)(null, "param[1].test")).toBeUndefined();
});
test("returns undefined when path is wrong", () => {
    expect((0, deepDig_1.default)({ param: [] }, "param[1].test")).toBeUndefined();
});
test("throws an exception when path is wrong and shouldThrow is true", () => {
    expect(() => (0, deepDig_1.default)({ param: [] }, "param[1].test", true)).toThrow();
});
test("works tranparently with Sets and Maps", () => {
    const source = new Map([
        ["param", new Set()],
        ["innerSet", new Set([new Map(), new Map([["innerKey", "value"]])])],
    ]);
    expect((0, deepDig_1.default)(source, "innerSet[1].innerKey")).toBe("value");
});
