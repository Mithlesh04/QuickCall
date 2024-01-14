
import { Client } from "./client"
import { Server } from "./server"

const QcVersion = "0.0.4"

export {
    Client,
    Server,
    QcVersion
}

export default Client



// const qc = Client("http://localhost:3002", "quick-call")

// console.log('started')

// if('function' === typeof qc.add){
//     // const cb = ()=>{}
//     qc.add(10, 20)
//     .then((data: any)=>{
//         if("function" === typeof data)data()
//         console.log("final data= ", data) 
//     })
// }