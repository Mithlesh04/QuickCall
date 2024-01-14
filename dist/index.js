(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Client:()=>Ye,QcVersion:()=>dt,Server:()=>ft,default:()=>pt});var n={};function r(e,t){return function(){return e.apply(t,arguments)}}e.r(n),e.d(n,{hasBrowserEnv:()=>ne,hasStandardBrowserEnv:()=>re,hasStandardBrowserWebWorkerEnv:()=>ie});const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>s(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined"),d=c("ArrayBuffer"),p=u("string"),h=u("function"),m=u("number"),y=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==s(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),w=c("File"),v=c("Blob"),E=c("FileList"),O=c("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,T=e=>!f(e)&&e!==A,j=(x="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>x&&e instanceof x);var x;const P=c("HTMLFormElement"),C=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),N=c("RegExp"),_=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},k="abcdefghijklmnopqrstuvwxyz",U="0123456789",F={DIGIT:U,ALPHA:k,ALPHA_DIGIT:k+k.toUpperCase()+U},B=c("AsyncFunction"),D={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=s(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:g,isUndefined:f,isDate:b,isFile:w,isBlob:v,isRegExp:N,isFunction:h,isStream:e=>y(e)&&h(e.pipe),isURLSearchParams:O,isTypedArray:j,isFileList:E,forEach:S,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const i=t&&R(n,o)||o;g(n[i])&&g(r)?n[i]=e(n[i],r):g(r)?n[i]=e({},r):l(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(S(t,((t,o)=>{n&&h(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:P,hasOwnProperty:C,hasOwnProp:C,reduceDescriptors:_,freezeMethods:e=>{_(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:R,global:A,isContextDefined:T,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return S(e,((e,t)=>{const i=n(e,r+1);!f(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:B,isThenable:e=>e&&(y(e)||h(e))&&h(e.then)&&h(e.catch)};function L(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}D.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const I=L.prototype,q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(L,q),Object.defineProperty(I,"isAxiosError",{value:!0}),L.from=(e,t,n,r,o,i)=>{const s=Object.create(I);return D.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),L.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const M=L;function z(e){return D.isPlainObject(e)||D.isArray(e)}function H(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function J(e,t,n){return e?e.concat(t).map((function(e,t){return e=H(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const V=D.toFlatObject(D,{},null,(function(e){return/^is[A-Z]/.test(e)})),W=function(e,t,n){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!D.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(D.isDate(e))return e.toISOString();if(!a&&D.isBlob(e))throw new M("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(e)||D.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(D.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(D.isArray(e)&&function(e){return D.isArray(e)&&!e.some(z)}(e)||(D.isFileList(e)||D.endsWith(n,"[]"))&&(a=D.toArray(e)))return n=H(n),a.forEach((function(e,r){!D.isUndefined(e)&&null!==e&&t.append(!0===s?J([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!z(e)||(t.append(J(o,n,i),c(e)),!1)}const l=[],f=Object.assign(V,{defaultVisitor:u,convertValue:c,isVisitable:z});if(!D.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!D.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),D.forEach(n,(function(n,i){!0===(!(D.isUndefined(n)||null===n)&&o.call(t,n,D.isString(i)?i.trim():i,r,f))&&e(n,r?r.concat(i):[i])})),l.pop()}}(e),t};function K(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function $(e,t){this._pairs=[],e&&W(e,this,t)}const G=$.prototype;G.append=function(e,t){this._pairs.push([e,t])},G.toString=function(e){const t=e?function(t){return e.call(this,t,K)}:K;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const X=$;function Q(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Z(e,t,n){if(!t)return e;const r=n&&n.encode||Q,o=n&&n.serialize;let i;if(i=o?o(t,n):D.isURLSearchParams(t)?t.toString():new X(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const Y=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ee={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},te={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:X,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ne="undefined"!=typeof window&&"undefined"!=typeof document,re=(oe="undefined"!=typeof navigator&&navigator.product,ne&&["ReactNative","NativeScript","NS"].indexOf(oe)<0);var oe;const ie="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,se={...n,...te},ae=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&D.isArray(r)?r.length:i,a?(D.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&D.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&D.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(D.isFormData(e)&&D.isFunction(e.entries)){const n={};return D.forEachEntry(e,((e,r)=>{t(function(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},ce={transitional:ee,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=D.isObject(e);if(o&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return r&&r?JSON.stringify(ae(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return W(e,new se.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return se.isNode&&D.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=D.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return W(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(D.isString(e))try{return(0,JSON.parse)(e),D.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ce.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&D.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw M.from(e,M.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:se.classes.FormData,Blob:se.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],(e=>{ce.headers[e]={}}));const ue=ce,le=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fe=Symbol("internals");function de(e){return e&&String(e).trim().toLowerCase()}function pe(e){return!1===e||null==e?e:D.isArray(e)?e.map(pe):String(e)}function he(e,t,n,r,o){return D.isFunction(r)?r.call(this,t,n):(o&&(t=n),D.isString(t)?D.isString(r)?-1!==t.indexOf(r):D.isRegExp(r)?r.test(t):void 0:void 0)}class me{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=de(t);if(!o)throw new Error("header name must be a non-empty string");const i=D.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=pe(e))}const i=(e,t)=>D.forEach(e,((e,n)=>o(e,n,t)));return D.isPlainObject(e)||e instanceof this.constructor?i(e,t):D.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&le[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=de(e)){const n=D.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(D.isFunction(t))return t.call(this,e,n);if(D.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=de(e)){const n=D.findKey(this,e);return!(!n||void 0===this[n]||t&&!he(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=de(e)){const o=D.findKey(n,e);!o||t&&!he(0,n[o],o,t)||(delete n[o],r=!0)}}return D.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!he(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return D.forEach(this,((r,o)=>{const i=D.findKey(n,o);if(i)return t[i]=pe(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=pe(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return D.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&D.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[fe]=this[fe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=de(e);t[r]||(function(e,t){const n=D.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return D.isArray(e)?e.forEach(r):r(e),this}}me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),D.reduceDescriptors(me.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),D.freezeMethods(me);const ye=me;function ge(e,t){const n=this||ue,r=t||n,o=ye.from(r.headers);let i=r.data;return D.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function be(e){return!(!e||!e.__CANCEL__)}function we(e,t,n){M.call(this,null==e?"canceled":e,M.ERR_CANCELED,t,n),this.name="CanceledError"}D.inherits(we,M,{__CANCEL__:!0});const ve=we,Ee=se.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];D.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),D.isString(r)&&s.push("path="+r),D.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Oe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Se=se.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=D.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Re(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;for(;l!==i;)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Ae={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ye.from(e.headers).normalize();let i,s,{responseType:a,withXSRFToken:c}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}if(D.isFormData(r))if(se.hasStandardBrowserEnv||se.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(s=o.getContentType())){const[e,...t]=s?s.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=Oe(e.baseURL,e.url);function d(){if(!l)return;const r=ye.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),u()}),(function(e){n(e),u()}),{data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Z(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new M("Request aborted",M.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new M("Network Error",M.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||ee;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new M(t,r.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,l)),l=null},se.hasStandardBrowserEnv&&(c&&D.isFunction(c)&&(c=c(e)),c||!1!==c&&Se(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&Ee.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&D.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),D.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Re(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Re(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{l&&(n(!t||t.type?new ve(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);p&&-1===se.protocols.indexOf(p)?n(new M("Unsupported protocol "+p+":",M.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};D.forEach(Ae,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Te=e=>`- ${e}`,je=e=>D.isFunction(e)||null===e||!1===e,xe=e=>{e=D.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!je(n)&&(r=Ae[(t=String(n)).toLowerCase()],void 0===r))throw new M(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(Te).join("\n"):" "+Te(e[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Pe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ve(null,e)}function Ce(e){return Pe(e),e.headers=ye.from(e.headers),e.data=ge.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),xe(e.adapter||ue.adapter)(e).then((function(t){return Pe(e),t.data=ge.call(e,e.transformResponse,t),t.headers=ye.from(t.headers),t}),(function(t){return be(t)||(Pe(e),t&&t.response&&(t.response.data=ge.call(e,e.transformResponse,t.response),t.response.headers=ye.from(t.response.headers))),Promise.reject(t)}))}const Ne=e=>e instanceof ye?e.toJSON():e;function _e(e,t){t=t||{};const n={};function r(e,t,n){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge.call({caseless:n},e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}function o(e,t,n){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!D.isUndefined(t))return r(void 0,t)}function s(e,t){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Ne(e),Ne(t),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);D.isUndefined(s)&&i!==a||(n[r]=s)})),n}const ke={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ke[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ue={};ke.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new M(r(o," has been removed"+(t?" in "+t:"")),M.ERR_DEPRECATED);return t&&!Ue[o]&&(Ue[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const Fe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new M("option "+i+" must be "+n,M.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new M("Unknown option "+i,M.ERR_BAD_OPTION)}},validators:ke},Be=Fe.validators;class De{constructor(e){this.defaults=e,this.interceptors={request:new Y,response:new Y}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=_e(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Fe.assertOptions(n,{silentJSONParsing:Be.transitional(Be.boolean),forcedJSONParsing:Be.transitional(Be.boolean),clarifyTimeoutError:Be.transitional(Be.boolean)},!1),null!=r&&(D.isFunction(r)?t.paramsSerializer={serialize:r}:Fe.assertOptions(r,{encode:Be.function,serialize:Be.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&D.merge(o.common,o[t.method]);o&&D.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ye.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ce.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;for(f=0;f<l;){const e=s[f++],t=s[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Ce.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return Z(Oe((e=_e(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],(function(e){De.prototype[e]=function(t,n){return this.request(_e(n||{},{method:e,url:t,data:(n||{}).data}))}})),D.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(_e(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}De.prototype[e]=t(),De.prototype[e+"Form"]=t(!0)}));const Le=De;class Ie{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ve(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ie((function(t){e=t})),cancel:e}}}const qe=Ie,Me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Me).forEach((([e,t])=>{Me[t]=e}));const ze=Me,He=function e(t){const n=new Le(t),o=r(Le.prototype.request,n);return D.extend(o,Le.prototype,n,{allOwnKeys:!0}),D.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(_e(t,n))},o}(ue);He.Axios=Le,He.CanceledError=ve,He.CancelToken=qe,He.isCancel=be,He.VERSION="1.6.5",He.toFormData=W,He.AxiosError=M,He.Cancel=He.CanceledError,He.all=function(e){return Promise.all(e)},He.spread=function(e){return function(t){return e.apply(null,t)}},He.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError},He.mergeConfig=_e,He.AxiosHeaders=ye,He.formToJSON=e=>ae(D.isHTMLForm(e)?new FormData(e):e),He.getAdapter=xe,He.HttpStatusCode=ze,He.default=He;const Je=He;var Ve,We,Ke="$$",$e="/quick-call",Ge=new RegExp("^".concat((We=Ke,We.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")),"((\\{[^{}]+\\})?)([a-zA-Z]+)\\[(.*?)\\]\\$\\").concat(Ke));function Xe(e){return Ge.test(e)}var Qe=new Map;var Ze=new Proxy({},{get:function(){var e,t=arguments[1];return((e={})[t]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return new Promise((function(n){var r,o,i,s,a;(r=(i={name:t,arg:e,type:"function",action:"call",target:void 0,meta:{caller:"client",initializer:"server"}},s=Math.random().toString(28).replace(/0\./,Date.now().toString()),a={transactionId:s,startTimeStamp:Date.now(),stackCount:0,stack:i},Qe.has(s),Qe.set(s,a),a).transactionId,o=["stack"],new Promise((function(e){var t,n=(t=r,Qe.get(t));if(n){var i,s,a;if(o.forEach((function(e){e.startsWith("target")||(i=(i||n)[e])})),"call"===i.action){if("server"===i.meta.initializer&&i.name)return s={meta:i.meta,action:i.action,name:i.name,stackCount:n.stackCount,transactionId:n.transactionId,type:i.type,arg:i.arg},a=function(t){var n,r,o=null===(n=null==t?void 0:t.data)||void 0===n?void 0:n.qc;o&&(Qe.delete(o.transactionId),o.return&&"function"!=typeof o.return.type)?e(null!==(r=o.return.target)&&void 0!==r?r:void 0):e(t)},void Ve.request({method:"post",data:{qc:s}}).then((function(e){a({isSuccess:!0,data:e.data})})).catch((function(e){a({isSuccess:!1,error:e})}));if("client"===i.meta.initializer&&"function"==typeof i.target)return void e(i.target.apply(i,i.arg))}else e("add action='call'. so that we can call the function");e("no any condition matched")}else e("error")}))).then(n)}))},e)[t]}});function Ye(e,t){return function(e,t){void 0===t&&(t=$e),Ve=Je.create({baseURL:Je.getUri({baseURL:e,url:t})})}(e,t),Ze}var et=new Map;function tt(e,t){return et.set(t||e.name,{target:e,type:"function",name:e.name,aliasName:t}),e}var nt=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},rt=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},ot=new Map;function it(e){return ot.get(e)}function st(e,t){var n;return nt(this,void 0,void 0,(function(){var r,o,i;return rt(this,(function(s){switch(s.label){case 0:return[4,Promise.allSettled([e.target.apply(e,e.arg)])];case 1:return r=s.sent(),"rejected"===(null===(n=r[0])||void 0===n?void 0:n.status)?[2]:(o=(r[0]||{value:void 0}).value,i=typeof o,e.return={type:i,target:o,action:"init",arg:[],meta:{initializer:"server",caller:"client"}},"function"===i?(t.push("return","target"),e.return.name=(a="QCFunction","",c=t.join("."),Xe("")?"":c?"".concat(Ke,"{").concat(c,"}").concat(a,"[").concat("","]").concat(Ke):"".concat(Ke).concat(a,"[").concat("","]").concat(Ke)),[2,{return:e.return}]):[2,{return:e.return}])}var a,c}))}))}var at=function(){return at=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},at.apply(this,arguments)},ct=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))},ut=function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};function lt(e,t){var n,r,o,i=null===(n=e.body)||void 0===n?void 0:n.qc;if(i){if(0===i.stackCount){var s=function(e){if(et.has(e))return et.get(e)}(i.name);if(!s)return;r=i.transactionId,o={transactionId:i.transactionId,startTimeStamp:Date.now(),stackCount:0,stack:{type:i.type,name:s.aliasName||s.name,target:s.target,arg:[],action:"init",meta:{initializer:"server",caller:"client"}}},ot.has(r)||ot.set(r,o)}(function(e){return ct(this,void 0,void 0,(function(){var t,n,r,o;return ut(this,(function(i){switch(i.label){case 0:return"call"!==e.action?[3,5]:(t=it(e.transactionId))?Xe(e.name)?(n=function(e){var t={isValid:!1};if(!e||"string"!=typeof e)return t;var n=e.match(Ge);if(n&&(t.isValid=!0,t.signature=n[2],t.method=n[3],t.data=n[4],t.signature)){var r=t.signature.match(/\{([^}]+)\}/);r&&(t.signature=r[1])}return t}(e.name)).isValid?n.signature?(r=function(e,t){var n,r=it(e);if(r)return t.split(/\./).forEach((function(e){e.startsWith("target")||(n=(n||r)[e])})),n}(e.transactionId,n.signature),r?"function"!==r.type?[3,2]:(r.arg=e.arg||[],r.action=e.action,[4,st(r,["stack"])]):[2]):[3,2]:[2]:[3,3]:[2];case 1:case 4:return o=i.sent(),[2,at({transactionId:e.transactionId},o)];case 2:return[3,5];case 3:return t.stack.name!==e.name?[2]:"function"!==t.stack.type?[3,5]:(t.stack.arg=e.arg||[],t.stack.action=e.action,[4,st(t.stack,["stack"])]);case 5:return[2,void 0]}}))}))})(i).then((function(e){var n;n=i.transactionId,ot.delete(n),t.send({qc:e})}))}}function ft(e,t){return void 0===t&&(t=$e),e.use(t,lt),tt}var dt="0.0.3";const pt=Ye;var ht=exports;for(var mt in t)ht[mt]=t[mt];t.__esModule&&Object.defineProperty(ht,"__esModule",{value:!0})})();