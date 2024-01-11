import { ALL_deepDigITS_REGEX } from "./constant";

export function isNum(str: number | string) {
    return String(str).match(ALL_deepDigITS_REGEX);
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