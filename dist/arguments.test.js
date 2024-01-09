"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arguments_1 = require("./arguments");
const constant_1 = require("./utils/constant");
// , QC_Function_NAME
test("[Argument] Simple argument With multiple dataType except function, List and Dict", () => {
    const data = [50, "John"];
    expect((0, arguments_1.encodeArgument)(data)).toMatchObject(data);
});
test("[Argument] Multi-Dim Dict", () => {
    const data = [{ school: { name: "xyz" } }];
    expect((0, arguments_1.encodeArgument)(data)).toMatchObject(data);
});
test("[Argument] Multi-Dim Dict and multiple other dataType arguments", () => {
    const data = [{ school: { names: "xyz" } }, "John", { age: 12 }, undefined, 23];
    expect((0, arguments_1.encodeArgument)(data)).toMatchObject(data);
});
test("[Argument] Providing the callback", () => {
    expect((0, arguments_1.encodeArgument)([() => undefined]))
        .toMatchObject([`${constant_1.QC_Function_NAME}[0]`]);
});
test("[Argument] Providing the multiple callback", () => {
    expect((0, arguments_1.encodeArgument)([() => undefined, function () { }, (name) => name]))
        .toMatchObject([`${constant_1.QC_Function_NAME}[0]`, `${constant_1.QC_Function_NAME}[1]`, `${constant_1.QC_Function_NAME}[2]`]);
});
test("[Argument] Providing the callback function inside dict", () => {
    expect((0, arguments_1.encodeArgument)([() => undefined, function () { }, { method: (name) => name }]))
        .toMatchObject([`${constant_1.QC_Function_NAME}[0]`, `${constant_1.QC_Function_NAME}[1]`, { method: `${constant_1.QC_Function_NAME}[2].method` }]);
});
test("[Argument] Providing the callback function inside nested dict", () => {
    expect((0, arguments_1.encodeArgument)([() => undefined, function () { }, { country: { city: { state: { getPopulation() { } } } } }]))
        .toMatchObject([`${constant_1.QC_Function_NAME}[0]`, `${constant_1.QC_Function_NAME}[1]`, { country: { city: { state: { getPopulation: `${constant_1.QC_Function_NAME}[2].country.city.state.getPopulation` } } } }]);
});
test("[Argument] Providing Simple List", () => {
    const data = [["12", 12]];
    expect((0, arguments_1.encodeArgument)(data)).toMatchObject(data);
});
test("[Argument] Providing Nested List", () => {
    const data = [["12", 12], [["City", ["Country", [["Unknown"], "India"]]]]];
    expect((0, arguments_1.encodeArgument)(data)).toMatchObject(data);
});
test("[Argument] Providing function inside Nested List", () => {
    expect((0, arguments_1.encodeArgument)([
        ["12", 12],
        [
            [
                "City",
                [
                    "Country",
                    [
                        [
                            function () { }
                        ],
                        "India"
                    ]
                ]
            ]
        ]
    ]))
        .toMatchObject([["12", 12], [["City", ["Country", [[`${constant_1.QC_Function_NAME}[1][0][0][1][0][1][0][0]`], "India"]]]]]);
});
test("[Argument] Providing multiple function inside Nested List", () => {
    expect((0, arguments_1.encodeArgument)([
        25,
        "John",
        {
            country: [
                "India",
            ],
            getCountry() { }
        }
    ])).toMatchObject([
        25,
        "John",
        {
            country: [
                "India",
            ],
            // getCountry: `${QC_Function_NAME}[2].getCountry`
        }
    ]);
});
