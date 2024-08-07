import{c as W,bt as X,aL as Y,aI as Z,aK as ee,r as g,aM as te,bu as ae,b as d,aN as A,d as C,az as le,aJ as oe,g as $,aR as ne,f as se,i as ie,u as ue,j as re,k as de,t as ce,_ as me,n as I,A as fe,s as c,q as o,v as pe,x as O,y as R,H as ve,D as S,B as F,L as ge,p as be,C as ye}from"./index.1b7456cd.js";import{Q as he}from"./QToolbarTitle.0f70caef.js";import{Q as Ce}from"./QSpace.f3dc32ea.js";import{Q as Fe}from"./QList.1c68ea67.js";import{Q as Qe}from"./QHeader.2bbc7080.js";import{Q as Ve}from"./QBanner.91a98371.js";import{h as Se,Q as ke}from"./format.ee840bac.js";import{u as xe,a as we,b as De}from"./use-file.303d690b.js";import{Q as _e}from"./QForm.184ef64e.js";import{Q as Ne}from"./QTable.6adef025.js";import{Q as Pe,a as je}from"./QLayout.99afa6a1.js";import{u as Le}from"./use-quasar.2e9eb89d.js";import{g as qe,b as Ae}from"./api.c0f1cfa6.js";import"./index.58290dd4.js";import"./QScrollObserver.5b50419f.js";import"./position-engine.89d7a081.js";import"./QSelect.241859ee.js";var Ie=W({name:"QFile",inheritAttrs:!1,props:{...X,...Y,...xe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Z,...we],setup(e,{slots:n,emit:Q,attrs:b}){const{proxy:y}=$(),s=ee(),l=g(null),p=g(!1),v=te(e),{pickFiles:k,onDragover:u,onDragleave:_,processFiles:N,getDndNode:m}=De({editable:s.editable,dnd:p,getFileInput:L,addFilesToQueue:q}),f=ae(e),a=d(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),h=d(()=>A(a.value)),U=d(()=>a.value.map(t=>t.name).join(", ")),P=d(()=>Se(a.value.reduce((t,i)=>t+i.size,0))),B=d(()=>({totalSize:P.value,filesNumber:a.value.length,maxFiles:e.maxFiles})),T=d(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:v.value,...b,id:s.targetUid.value,disabled:s.editable.value!==!0})),z=d(()=>"q-file q-field--auto-height"+(p.value===!0?" q-file--dnd":"")),j=d(()=>e.multiple===!0&&e.append===!0);function x(t){const i=a.value.slice();i.splice(t,1),w(i)}function E(t){const i=a.value.indexOf(t);i!==-1&&x(i)}function w(t){Q("update:modelValue",e.multiple===!0?t:t[0])}function J(t){t.keyCode===13&&ne(t)}function G(t){(t.keyCode===13||t.keyCode===32)&&k(t)}function L(){return l.value}function q(t,i){const r=N(t,i,a.value,j.value),D=L();D!=null&&(D.value=""),r!==void 0&&((e.multiple===!0?e.modelValue&&r.every(M=>a.value.includes(M)):e.modelValue===r[0])||w(j.value===!0?a.value.concat(r):r))}function V(){return[C("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function H(){if(n.file!==void 0)return a.value.length===0?V():a.value.map((i,r)=>n.file({index:r,file:i,ref:this}));if(n.selected!==void 0)return a.value.length===0?V():n.selected({files:a.value,ref:this});if(e.useChips===!0)return a.value.length===0?V():a.value.map((i,r)=>C(ke,{key:"file-"+r,removable:s.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{x(r)}},()=>C("span",{class:"ellipsis",textContent:i.name})));const t=e.displayValue!==void 0?e.displayValue:U.value;return t.length!==0?[C("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:V()}function K(){const t={ref:l,...T.value,...f.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:q};return e.multiple===!0&&(t.multiple=!0),C("input",t)}return Object.assign(s,{fieldClass:z,emitValue:w,hasValue:h,inputRef:l,innerValue:a,floatingLabel:d(()=>h.value===!0||A(e.displayValue)),computedCounter:d(()=>{if(e.counterLabel!==void 0)return e.counterLabel(B.value);const t=e.maxFiles;return`${a.value.length}${t!==void 0?" / "+t:""} (${P.value})`}),getControlChild:()=>m("file"),getControl:()=>{const t={ref:s.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return s.editable.value===!0&&Object.assign(t,{onDragover:u,onDragleave:_,onKeydown:J,onKeyup:G}),C("div",t,[K()].concat(H()))}}),Object.assign(y,{removeAtIndex:x,removeFile:E,getNativeElement:()=>l.value}),le(y,"nativeEl",()=>l.value),oe(s)}}),Oe=se({name:"UploadPage",setup(){const e=ie("store"),n=ue(),Q=re(),b=g(n.params.site),y=g(e.state.token!=""),s=$();s.appContext.config.globalProperties.$imgUrl,s.appContext.config.globalProperties.$baseUrl,s.appContext.config.globalProperties.$photoUrl;const l=Le(),p=g({name:"",files:[]}),v=g([]),k=[{name:"name",align:"center",label:"Name",field:"name",sortable:!0},{name:"modified",align:"center",label:"Modified",field:"modified",sortable:!0}],u=g([]);return de(async()=>{if(!y.value)Q.push("/");else{const m=await qe(b.value,e.state.token);console.log("results",m),u.value=m.map(f=>({id:f._id,name:f.name,modified:f.modified})),console.log("results",u)}}),{handleDelete:()=>{l.dialog({title:"Confirm",message:"Delete layers?",cancel:!0,persistent:!0}).onOk(async()=>{console.log("delete",v.value),console.log("rows",u.value),await Ae(v.value,e.state.token),u.value=u.value.filter(m=>!v.value.includes(m)),console.log("rowsss",u.value),l.notify({position:"top",message:"Delete done.",color:"purple"}),v.value=[]}).onCancel(()=>{console.log(">>>> Cancel")})},selected:v,columns:k,rows:u,onSubmit:m=>{const[f]=m.target[0].files;console.log("name",p.value.name);const a=new FileReader;a.addEventListener("load",()=>{ce.post("/addgeojson",{data:{site_id:parseInt(b.value),name:p.value.name,content:a.result,modified:new Date().toLocaleString("th-TH"),postby:e.state.user.username}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(h=>{console.log(h.data.results),u.value.push(h.data.results),h.data.results&&l.notify({position:"top",message:p.value.name+" is uploaded",color:"purple"})})},!1),f?a.readAsText(f):(console.log("not found upload file"),l.notify({type:"negative",position:"top",message:"Please enter layer name and upload a GeoJSON file."}))},formData:p,site:b,authorized:y}}});const Re={class:"row justify-center"},$e={class:"col-12 bg-grey-12 q-ma-md q-pa-sm",style:{width:"400px"}},Ue=F("div",{class:"text-subtitle1"},"Upload GeoJson",-1),Be={key:0,class:"col-12 q-ma-md"},Te={class:"col-12"};function ze(e,n,Q,b,y,s){return I(),fe(Pe,{view:"hHh lpr fff",class:"bg-grey-8"},{default:c(()=>[o(je,{class:"flex flex-center"},{default:c(()=>[o(Qe,{elevated:"",class:"bg-grey-9 text-grey-1"},{default:c(()=>[o(Fe,null,{default:c(()=>[o(he,null,{default:c(()=>[o(pe,null,{default:c(()=>[o(O,{name:"library_add",size:"sm"})]),_:1}),R(" Upload GeoJSON Layer ")]),_:1}),o(Ce),o(ve,{dark:"",vertical:""}),o(S,{class:"",rounded:"",flat:"",color:"grey-1",to:"/"+e.site+"/geomap","icon-right":"close",label:"Close"},null,8,["to"])]),_:1})]),_:1}),F("div",Re,[F("div",$e,[o(Ve,{class:"bg-black text-white"},{avatar:c(()=>[o(O,{name:"public",color:"grey-8"})]),default:c(()=>[Ue]),_:1}),o(_e,{onSubmit:e.onSubmit,onReset:e.onReset,class:"q-my-md"},{default:c(()=>[o(Ie,{filled:"","bottom-slots":"",modelValue:e.formData.file,"onUpdate:modelValue":n[0]||(n[0]=l=>e.formData.file=l),label:"+ GeoJSON",accept:".geojson"},{hint:c(()=>[R(" Only .geojson file is accepted ")]),_:1},8,["modelValue"]),o(ge,{class:"q-my-md",filled:"",modelValue:e.formData.name,"onUpdate:modelValue":n[1]||(n[1]=l=>e.formData.name=l),label:"Name ",rules:[l=>l&&l.length>0||"Please type something"]},null,8,["modelValue","rules"]),F("div",null,[o(S,{label:"Submit",type:"submit",color:"primary"}),o(S,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])]),_:1},8,["onSubmit","onReset"])]),e.selected.length?(I(),be("div",Be,[o(S,{color:"red",icon:"delete",label:"Delete",onClick:e.handleDelete},null,8,["onClick"])])):ye("",!0),F("div",Te,[o(Ne,{flat:"",bordered:"",title:"Laysers","rows-per-page-options":[100,150,200],rows:e.rows,columns:e.columns,"row-key":"name",selection:"multiple",selected:e.selected,"onUpdate:selected":n[2]||(n[2]=l=>e.selected=l)},null,8,["rows","columns","selected"])])])]),_:1})]),_:1})}var it=me(Oe,[["render",ze]]);export{it as default};
