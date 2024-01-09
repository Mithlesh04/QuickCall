import { encodeArgument } from "./arguments";
import { QC_Function_NAME } from "./utils/constant";

// , QC_Function_NAME
test("[Argument] Simple argument With multiple dataType except function, List and Dict", ()=>{
    const data = [50,"John"]
    expect(encodeArgument(data)).toMatchObject(data)
})

test("[Argument] Multi-Dim Dict", ()=>{
    const data = [ { school: { name: "xyz" } } ]
    expect(encodeArgument(data)).toMatchObject(data)
})

test("[Argument] Multi-Dim Dict and multiple other dataType arguments", ()=>{
    const data = [ { school: { names: "xyz" } }, "John", { age: 12 }, undefined, 23 ]
    expect(encodeArgument(data)).toMatchObject(data)
})

test("[Argument] Providing the callback", ()=>{
    expect(encodeArgument([ ()=>undefined ]))
    .toMatchObject([ `${QC_Function_NAME}[0]` ])
})

test("[Argument] Providing the multiple callback", ()=>{
    expect(encodeArgument([ ()=>undefined, function(){}, (name: any)=>name ]))
    .toMatchObject([ `${QC_Function_NAME}[0]`, `${QC_Function_NAME}[1]`, `${QC_Function_NAME}[2]` ])
})

test("[Argument] Providing the callback function inside dict", ()=>{
    expect(encodeArgument([ ()=>undefined, function(){}, { method: (name: any)=>name } ]))
    .toMatchObject([ `${QC_Function_NAME}[0]`, `${QC_Function_NAME}[1]`, {method: `${QC_Function_NAME}[2].method`} ])
})

test("[Argument] Providing the callback function inside nested dict", ()=>{
    expect(encodeArgument([ ()=>undefined, function(){}, { country: { city: { state: { getPopulation(){} } } } } ]))
    .toMatchObject([ `${QC_Function_NAME}[0]`, `${QC_Function_NAME}[1]`, { country: { city: { state: { getPopulation: `${QC_Function_NAME}[2].country.city.state.getPopulation` } } }} ])
})

test("[Argument] Providing Simple List", ()=>{
    const data = [ ["12",12] ]
    expect(encodeArgument(data)).toMatchObject(data)
})

test("[Argument] Providing Nested List", ()=>{
    const data = [ ["12",12], [ ["City", ["Country", [["Unknown"], "India"]]] ] ]
    expect(encodeArgument(data)).toMatchObject(data)
})

test("[Argument] Providing function inside Nested List", ()=>{
    expect(encodeArgument([ 
        ["12",12], 
        [ 
            [
                "City", 
                [
                    "Country", 
                    [
                        [
                            function(){}
                        ], 
                        "India"
                    ]
                ]
            ]
        ]
    ]))
    .toMatchObject([ ["12",12], [ ["City", ["Country", [[`${QC_Function_NAME}[1][0][0][1][0][1][0][0]`], "India"]]] ] ])
})

test("[Argument] Providing multiple function inside Nested List", ()=>{
    expect(encodeArgument([
        25,
        "John",
        {
            country: [
                "India",
            ],
            getCountry(){}
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
    ])
})
