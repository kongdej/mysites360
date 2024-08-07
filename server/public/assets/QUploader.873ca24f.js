import{S as ce,c as ue,U as ve,b as c,d as n,W as fe,g as oe,R as pe,T as _e,r as F,am as me,aB as ge,aV as he,w as be,aT as Fe,o as ye,aW as qe,az as Se,ax as ke,al as ee,x as xe,D as ae,av as we}from"./index.7e4bf9c5.js";import{e as ze,h as te}from"./format.6f4df70e.js";import{u as Ue,a as Ce,b as Be}from"./use-file.fb7756f6.js";const Re={...ce,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:t=>t>=0&&t<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},H=50,re=2*H,ne=re*Math.PI,Le=Math.round(ne*1e3)/1e3;var Ee=ue({name:"QCircularProgress",props:{...Re,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(t,{slots:p}){const{proxy:{$q:u}}=oe(),l=ve(t),v=c(()=>{const d=(u.lang.rtl===!0?-1:1)*t.angle;return{transform:t.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-d}deg)`:`rotate3d(0, 0, 1, ${d-90}deg)`}}),f=c(()=>t.instantFeedback!==!0&&t.indeterminate!==!0?{transition:`stroke-dashoffset ${t.animationSpeed}ms ease 0s, stroke ${t.animationSpeed}ms ease`}:""),_=c(()=>re/(1-t.thickness/2)),w=c(()=>`${_.value/2} ${_.value/2} ${_.value} ${_.value}`),z=c(()=>ze(t.value,t.min,t.max)),C=c(()=>t.max-t.min),q=c(()=>t.thickness/2*_.value),L=c(()=>{const d=(t.max-z.value)/C.value,e=t.rounded===!0&&z.value<t.max&&d<.25?q.value/2*(1-d/.25):0;return ne*d+e});function U({thickness:d,offset:e,color:i,cls:y,rounded:s}){return n("circle",{class:"q-circular-progress__"+y+(i!==void 0?` text-${i}`:""),style:f.value,fill:"transparent",stroke:"currentColor","stroke-width":d,"stroke-dasharray":Le,"stroke-dashoffset":e,"stroke-linecap":s,cx:_.value,cy:_.value,r:H})}return()=>{const d=[];t.centerColor!==void 0&&t.centerColor!=="transparent"&&d.push(n("circle",{class:`q-circular-progress__center text-${t.centerColor}`,fill:"currentColor",r:H-q.value/2,cx:_.value,cy:_.value})),t.trackColor!==void 0&&t.trackColor!=="transparent"&&d.push(U({cls:"track",thickness:q.value,offset:0,color:t.trackColor})),d.push(U({cls:"circle",thickness:q.value,offset:L.value,color:t.color,rounded:t.rounded===!0?"round":void 0}));const e=[n("svg",{class:"q-circular-progress__svg",style:v.value,viewBox:w.value,"aria-hidden":"true"},d)];return t.showValue===!0&&e.push(n("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:t.fontSize}},p.default!==void 0?p.default():[n("div",z.value)])),n("div",{class:`q-circular-progress q-circular-progress--${t.indeterminate===!0?"in":""}determinate`,style:l.value,role:"progressbar","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.indeterminate===!0?void 0:z.value},fe(p.internal,e))}}});function le(t){return(t*100).toFixed(2)+"%"}const Pe={...pe,...Ue,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},se=[...Ce,"start","finish","added","removed"];function $e(t,p){const u=oe(),{props:l,slots:v,emit:f,proxy:_}=u,{$q:w}=_,z=_e(l,w);function C(a,r,g){if(a.__status=r,r==="idle"){a.__uploaded=0,a.__progress=0,a.__sizeLabel=te(a.size),a.__progressLabel="0.00%";return}if(r==="failed"){_.$forceUpdate();return}a.__uploaded=r==="uploaded"?a.size:g,a.__progress=r==="uploaded"?1:Math.min(.9999,a.__uploaded/a.size),a.__progressLabel=le(a.__progress),_.$forceUpdate()}const q=c(()=>l.disable!==!0&&l.readonly!==!0),L=F(!1),U=F(null),d=F(null),e={files:F([]),queuedFiles:F([]),uploadedFiles:F([]),uploadedSize:F(0),updateFileStatus:C,isAlive:()=>me(u)===!1},{pickFiles:i,addFiles:y,onDragover:s,onDragleave:m,processFiles:A,getDndNode:I,maxFilesNumber:Q,maxTotalSizeNumber:D}=Be({editable:q,dnd:L,getFileInput:V,addFilesToQueue:X});Object.assign(e,t({props:l,slots:v,emit:f,helpers:e,exposeApi:a=>{Object.assign(e,a)}})),e.isBusy===void 0&&(e.isBusy=F(!1));const b=F(0),T=c(()=>b.value===0?0:e.uploadedSize.value/b.value),E=c(()=>le(T.value)),P=c(()=>te(b.value)),B=c(()=>q.value===!0&&e.isUploading.value!==!0&&(l.multiple===!0||e.queuedFiles.value.length===0)&&(l.maxFiles===void 0||e.files.value.length<Q.value)&&(l.maxTotalSize===void 0||b.value<D.value)),o=c(()=>q.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);ge(he,Y);const R=c(()=>"q-uploader column no-wrap"+(z.value===!0?" q-uploader--dark q-dark":"")+(l.bordered===!0?" q-uploader--bordered":"")+(l.square===!0?" q-uploader--square no-border-radius":"")+(l.flat===!0?" q-uploader--flat no-shadow":"")+(l.disable===!0?" disabled q-uploader--disable":"")+(L.value===!0?" q-uploader--dnd":"")),$=c(()=>"q-uploader__header"+(l.color!==void 0?` bg-${l.color}`:"")+(l.textColor!==void 0?` text-${l.textColor}`:""));be(e.isUploading,(a,r)=>{r===!1&&a===!0?f("start"):r===!0&&a===!1&&f("finish")});function j(){l.disable===!1&&(e.abort(),e.uploadedSize.value=0,b.value=0,K(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function S(){l.disable===!1&&G(["uploaded"],()=>{e.uploadedFiles.value=[]})}function M(){G(["idle","failed"],({size:a})=>{b.value-=a,e.queuedFiles.value=[]})}function G(a,r){if(l.disable===!0)return;const g={files:[],size:0},k=e.files.value.filter(h=>a.indexOf(h.__status)===-1?!0:(g.size+=h.size,g.files.push(h),h.__img!==void 0&&window.URL.revokeObjectURL(h.__img.src),!1));g.files.length!==0&&(e.files.value=k,r(g),f("removed",g.files))}function W(a){l.disable||(a.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(r=>r.__key!==a.__key):a.__status==="uploading"?a.__abort():b.value-=a.size,e.files.value=e.files.value.filter(r=>r.__key!==a.__key?!0:(r.__img!==void 0&&window.URL.revokeObjectURL(r.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(r=>r.__key!==a.__key),f("removed",[a]))}function K(){e.files.value.forEach(a=>{a.__img!==void 0&&window.URL.revokeObjectURL(a.__img.src)})}function V(){return d.value||U.value.getElementsByClassName("q-uploader__input")[0]}function X(a,r){const g=A(a,r,e.files.value,!0),k=V();k!=null&&(k.value=""),g!==void 0&&(g.forEach(h=>{if(e.updateFileStatus(h,"idle"),b.value+=h.size,l.noThumbnails!==!0&&h.type.toUpperCase().startsWith("IMAGE")){const Z=new Image;Z.src=window.URL.createObjectURL(h),h.__img=Z}}),e.files.value=e.files.value.concat(g),e.queuedFiles.value=e.queuedFiles.value.concat(g),f("added",g),l.autoUpload===!0&&e.upload())}function J(){o.value===!0&&e.upload()}function N(a,r,g){if(a===!0){const k={type:"a",key:r,icon:w.iconSet.uploader[r],flat:!0,dense:!0};let h;return r==="add"?(k.onClick=i,h=Y):k.onClick=g,n(ae,k,h)}}function Y(){return n("input",{ref:d,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:l.accept,multiple:l.multiple===!0?"multiple":void 0,capture:l.capture,onMousedown:Fe,onClick:i,onChange:X})}function ie(){return v.header!==void 0?v.header(O):[n("div",{class:"q-uploader__header-content column"},[n("div",{class:"flex flex-center no-wrap q-gutter-xs"},[N(e.queuedFiles.value.length!==0,"removeQueue",M),N(e.uploadedFiles.value.length!==0,"removeUploaded",S),e.isUploading.value===!0?n(ee,{class:"q-uploader__spinner"}):null,n("div",{class:"col column justify-center"},[l.label!==void 0?n("div",{class:"q-uploader__title"},[l.label]):null,n("div",{class:"q-uploader__subtitle"},[P.value+" / "+E.value])]),N(B.value,"add"),N(l.hideUploadBtn===!1&&o.value===!0,"upload",e.upload),N(e.isUploading.value,"clear",e.abort)])])]}function de(){return v.list!==void 0?v.list(O):e.files.value.map(a=>n("div",{key:a.__key,class:"q-uploader__file relative-position"+(l.noThumbnails!==!0&&a.__img!==void 0?" q-uploader__file--img":"")+(a.__status==="failed"?" q-uploader__file--failed":a.__status==="uploaded"?" q-uploader__file--uploaded":""),style:l.noThumbnails!==!0&&a.__img!==void 0?{backgroundImage:'url("'+a.__img.src+'")'}:null},[n("div",{class:"q-uploader__file-header row flex-center no-wrap"},[a.__status==="failed"?n(xe,{class:"q-uploader__file-status",name:w.iconSet.type.negative,color:"negative"}):null,n("div",{class:"q-uploader__file-header-content col"},[n("div",{class:"q-uploader__title"},[a.name]),n("div",{class:"q-uploader__subtitle row items-center no-wrap"},[a.__sizeLabel+" / "+a.__progressLabel])]),a.__status==="uploading"?n(Ee,{value:a.__progress,min:0,max:1,indeterminate:a.__progress===0}):n(ae,{round:!0,dense:!0,flat:!0,icon:w.iconSet.uploader[a.__status==="uploaded"?"done":"clear"],onClick:()=>{W(a)}})])]))}ye(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&K()});const O={};for(const a in e)qe(e[a])===!0?Se(O,a,()=>e[a].value):O[a]=e[a];return Object.assign(O,{upload:J,reset:j,removeUploadedFiles:S,removeQueuedFiles:M,removeFile:W,pickFiles:i,addFiles:y}),ke(O,{canAddFiles:()=>B.value,canUpload:()=>o.value,uploadSizeLabel:()=>P.value,uploadProgressLabel:()=>E.value}),p({...e,upload:J,reset:j,removeUploadedFiles:S,removeQueuedFiles:M,removeFile:W,pickFiles:i,addFiles:y,canAddFiles:B,canUpload:o,uploadSizeLabel:P,uploadProgressLabel:E}),()=>{const a=[n("div",{class:$.value},ie()),n("div",{class:"q-uploader__list scroll"},de()),I("uploader")];e.isBusy.value===!0&&a.push(n("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[n(ee)]));const r={ref:U,class:R.value};return B.value===!0&&Object.assign(r,{onDragover:s,onDragleave:m}),n("div",r,a)}}const je=()=>!0;function Oe(t){const p={};return t.forEach(u=>{p[u]=je}),p}const Ne=Oe(se);var Ae=({name:t,props:p,emits:u,injectPlugin:l})=>ue({name:t,props:{...Pe,...p},emits:we(u)===!0?{...Ne,...u}:[...se,...u],setup(v,{expose:f}){return $e(l,f)}});function x(t){return typeof t=="function"?t:()=>t}const Ie="QUploader",Qe={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>t=>t.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},De=["factoryFailed","uploaded","failed","uploading"];function Te({props:t,emit:p,helpers:u}){const l=F([]),v=F([]),f=F(0),_=c(()=>({url:x(t.url),method:x(t.method),headers:x(t.headers),formFields:x(t.formFields),fieldName:x(t.fieldName),withCredentials:x(t.withCredentials),sendRaw:x(t.sendRaw),batch:x(t.batch)})),w=c(()=>f.value>0),z=c(()=>v.value.length!==0);let C;function q(){l.value.forEach(e=>{e.abort()}),v.value.length!==0&&(C=!0)}function L(){const e=u.queuedFiles.value.slice(0);u.queuedFiles.value=[],_.value.batch(e)?U(e):e.forEach(i=>{U([i])})}function U(e){if(f.value++,typeof t.factory!="function"){d(e,{});return}const i=t.factory(e);if(!i)p("factoryFailed",new Error("QUploader: factory() does not return properly"),e),f.value--;else if(typeof i.catch=="function"&&typeof i.then=="function"){v.value.push(i);const y=s=>{u.isAlive()===!0&&(v.value=v.value.filter(m=>m!==i),v.value.length===0&&(C=!1),u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(m=>{u.updateFileStatus(m,"failed")}),p("factoryFailed",s,e),f.value--)};i.then(s=>{C===!0?y(new Error("Aborted")):u.isAlive()===!0&&(v.value=v.value.filter(m=>m!==i),d(e,s))}).catch(y)}else d(e,i||{})}function d(e,i){const y=new FormData,s=new XMLHttpRequest,m=(o,R)=>i[o]!==void 0?x(i[o])(R):_.value[o](R),A=m("url",e);if(!A){console.error("q-uploader: invalid or no URL specified"),f.value--;return}const I=m("formFields",e);I!==void 0&&I.forEach(o=>{y.append(o.name,o.value)});let Q=0,D=0,b=0,T=0,E;s.upload.addEventListener("progress",o=>{if(E===!0)return;const R=Math.min(T,o.loaded);u.uploadedSize.value+=R-b,b=R;let $=b-D;for(let j=Q;$>0&&j<e.length;j++){const S=e[j];if($>S.size)$-=S.size,Q++,D+=S.size,u.updateFileStatus(S,"uploading",S.size);else{u.updateFileStatus(S,"uploading",$);return}}},!1),s.onreadystatechange=()=>{s.readyState<4||(s.status&&s.status<400?(u.uploadedFiles.value=u.uploadedFiles.value.concat(e),e.forEach(o=>{u.updateFileStatus(o,"uploaded")}),p("uploaded",{files:e,xhr:s})):(E=!0,u.uploadedSize.value-=b,u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(o=>{u.updateFileStatus(o,"failed")}),p("failed",{files:e,xhr:s})),f.value--,l.value=l.value.filter(o=>o!==s))},s.open(m("method",e),A),m("withCredentials",e)===!0&&(s.withCredentials=!0);const P=m("headers",e);P!==void 0&&P.forEach(o=>{s.setRequestHeader(o.name,o.value)});const B=m("sendRaw",e);e.forEach(o=>{u.updateFileStatus(o,"uploading",0),B!==!0&&y.append(m("fieldName",o),o,o.name),o.xhr=s,o.__abort=()=>{s.abort()},T+=o.size}),p("uploading",{files:e,xhr:s}),l.value.push(s),B===!0?s.send(new Blob(e)):s.send(y)}return{isUploading:w,isBusy:z,abort:q,upload:L}}var Me={name:Ie,props:Qe,emits:De,injectPlugin:Te},Ke=Ae(Me);export{Ke as Q};
