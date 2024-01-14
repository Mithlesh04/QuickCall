import { DataType, PathDataType } from "../interface";
import { ALL_deepDigITS_REGEX, QC_Prefix } from "./constant";

export function isNum(str: number | string) {
    return String(str).match(ALL_deepDigITS_REGEX);
}

export function generateTransactionId(): string {
  return Math.random().toString(28).replace(/0\./,Date.now().toString())
}

export function regexEscape(str: string) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const secretKey = 'QuickCallyourSecretKey'; // ! Replace with your secret key

export function generateSignature(timestamp: number, name: string) {
  const dataToSign = timestamp + name + secretKey;
  const signature = dataToSign // sha256(dataToSign); // ! modify this. Use a secure hashing algorithm like SHA-256
  return signature;
}

export function validateSignature(timestamp: number, name: string, signature: string) {
  const generatedSignature = generateSignature(timestamp, name);
  return signature === generatedSignature;
}

// "$${signature}method[data]$$"
const QuickCall_Signature_Regex = new RegExp(`^${regexEscape(QC_Prefix)}((\\{[^{}]+\\})?)([a-zA-Z]+)\\[(.*?)\\]\\$\\${QC_Prefix}`)

export function is_QC_Signature(str: string){
  return QuickCall_Signature_Regex.test(str)
}

export function decodeQuickCallSignature(signature: string){
  const output: {
    isValid: boolean
    signature?: string | undefined
    method?: typeof QuickCallMethods[number]["name"] | undefined | string
    data?: string | undefined
  } = {
    isValid: false,
  }
  
  if(!signature || "string" !== typeof signature)return output

  const sign = signature.match(QuickCall_Signature_Regex)
  if(sign){
    output.isValid = true;
    ([,,output.signature, output.method, output.data] = sign);

    if(output.signature){      
      const mainSign = output.signature.match(/\{([^}]+)\}/)
      if(mainSign){
        ([,output.signature] = mainSign)
      }
    }
  }

  return output
}

export function encodeQuickCallSignature(method: typeof QuickCallMethods[number]["name"], data: string, signature?:string){
  
  if(is_QC_Signature(data)){
    return data
  }

  if(signature){
    return `${QC_Prefix}{${signature}}${method}[${data}]${QC_Prefix}`
  }

  return `${QC_Prefix}${method}[${data}]${QC_Prefix}`

}

export const QuickCallMethods = [
  {
    name: "QCFunction",
    dataType: "function",
    encode: function(obj: { path: PathDataType[], value: DataType }){ // "obj" can be function
      var functionMapping = ""
      for (let key of obj.path) {
        if (isNum(key)) {
          functionMapping += `[${key}]` // for array index
        } else {
          functionMapping += `.${key}` // for object key
        }
      }
      obj.value = functionMapping
    },
    decode: function(obj: { path: PathDataType[], value: DataType }, methodData: { data: string | undefined, signature?: string | undefined }){
      console.log("decode_obj", obj, methodData)


      const QC_Function = function(this: any) {
        console.log("decode_function_called", this)
      }.bind({ QCEncodedFunction: obj.value, methodData } as const)
      
      obj.value = QC_Function
    },
  }
] as const