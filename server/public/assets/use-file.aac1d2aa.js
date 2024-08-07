import{r as E,b as F,g as I,aT as A,Y as _,b2 as O,d as U}from"./index.0a7ad086.js";function c(a,u,g,p){const r=[];return a.forEach(f=>{p(f)===!0?r.push(f):u.push({failedPropValidation:g,file:f})}),r}function m(a){a&&a.dataTransfer&&(a.dataTransfer.dropEffect="copy"),_(a)}const Y={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},M=["rejected"];function R({editable:a,dnd:u,getFileInput:g,addFilesToQueue:p}){const{props:r,emit:f,proxy:D}=I(),d=E(null),z=F(()=>r.accept!==void 0?r.accept.split(",").map(e=>(e=e.trim(),e==="*"?"*/":(e.endsWith("/*")&&(e=e.slice(0,e.length-1)),e.toUpperCase()))):null),S=F(()=>parseInt(r.maxFiles,10)),b=F(()=>parseInt(r.maxTotalSize,10));function x(e){if(a.value)if(e!==Object(e)&&(e={target:null}),e.target!==null&&e.target.matches('input[type="file"]')===!0)e.clientX===0&&e.clientY===0&&A(e);else{const l=g();l&&l!==e.target&&l.click(e)}}function y(e){a.value&&e&&p(null,e)}function N(e,l,v,h){let t=Array.from(l||e.target.files);const s=[],o=()=>{s.length!==0&&f("rejected",s)};if(r.accept!==void 0&&z.value.indexOf("*/")===-1&&(t=c(t,s,"accept",n=>z.value.some(i=>n.type.toUpperCase().startsWith(i)||n.name.toUpperCase().endsWith(i))),t.length===0))return o();if(r.maxFileSize!==void 0){const n=parseInt(r.maxFileSize,10);if(t=c(t,s,"max-file-size",i=>i.size<=n),t.length===0)return o()}if(r.multiple!==!0&&t.length!==0&&(t=[t[0]]),t.forEach(n=>{n.__key=n.webkitRelativePath+n.lastModified+n.name+n.size}),h===!0){const n=v.map(i=>i.__key);t=c(t,s,"duplicate",i=>n.includes(i.__key)===!1)}if(t.length===0)return o();if(r.maxTotalSize!==void 0){let n=h===!0?v.reduce((i,C)=>i+C.size,0):0;if(t=c(t,s,"max-total-size",i=>(n+=i.size,n<=b.value)),t.length===0)return o()}if(typeof r.filter=="function"){const n=r.filter(t);t=c(t,s,"filter",i=>n.includes(i))}if(r.maxFiles!==void 0){let n=h===!0?v.length:0;if(t=c(t,s,"max-files",()=>(n++,n<=S.value)),t.length===0)return o()}if(o(),t.length!==0)return t}function k(e){m(e),u.value!==!0&&(u.value=!0)}function T(e){_(e),(e.relatedTarget!==null||O.is.safari!==!0?e.relatedTarget!==d.value:document.elementsFromPoint(e.clientX,e.clientY).includes(d.value)===!1)===!0&&(u.value=!1)}function j(e){m(e);const l=e.dataTransfer.files;l.length!==0&&p(null,l),u.value=!1}function P(e){if(u.value===!0)return U("div",{ref:d,class:`q-${e}__dnd absolute-full`,onDragenter:m,onDragover:m,onDragleave:T,onDrop:j})}return Object.assign(D,{pickFiles:x,addFiles:y}),{pickFiles:x,addFiles:y,onDragover:k,onDragleave:T,processFiles:N,getDndNode:P,maxFilesNumber:S,maxTotalSizeNumber:b}}export{M as a,R as b,Y as u};
