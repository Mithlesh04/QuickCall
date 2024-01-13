
import { QuickCallClient } from "./client/client"
import { Server } from "./QuickCallServer_old"

export {
    QuickCallClient,
    Server
}

export default QuickCallClient



const qc = QuickCallClient("http://localhost:3002/quick-call")

console.log('started')

if('function' === typeof qc.add){
    const cb = ()=>{}
    qc.add(10, 20, cb)
    .then((data: any)=>{
        if("function" === typeof data)data()
        console.log("final data= ", data) 
    })
}


// const QC_Function_NAME = "QCFunction"
// QCFunction[[0]]
// const output = "$${signature.ram!#@.df}method[[data]]$$" //{ramame} {signature.ram}method[[data]]
// const output = "$$method[data]$$" //{ramame} {signature.ram}method[[data]]

// const QC_Methods_Regex = /^\$\$(\{[a-zA-Z]+\})?(method\[[a-zA-Z]+\])$/ //new RegExp(`^${regexEscape(QC_Prefix)}(\\{(.*)\\}?)`)
// const QC_Methods_Regex = /^\$\$((\{[^{}]+\})?)([a-zA-Z]+)\[(.*?)\]\$\$$/ //new RegExp(`^${regexEscape(QC_Prefix)}{(.*?)}([a-zA-Z0-9]+)(\\[.*\\])`)
// const QC_Methods_Regex = new RegExp(`^${regexEscape(QC_Prefix)}((\\{[^{}]+\\})?)([a-zA-Z]+)\\[(.*?)\\]\\$\\${QC_Prefix}`)

// const pattern = output.match(QC_Methods_Regex ) 

