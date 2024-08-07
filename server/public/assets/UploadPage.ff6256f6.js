import{c as A,i as N,e as S,aV as E,b as J,d as K,O as W,f as X,u as Y,j as Z,r as d,k as ee,g as te,_ as oe,n,A as p,s as o,q as l,v as D,x as I,y as r,H as le,D as v,B as f,C as i,al as ae,z as u,p as C,L as se,ay as ne,M as re,N as ie}from"./index.f3ff8765.js";import{Q as de}from"./QToolbarTitle.00f235f1.js";import{Q as ue}from"./QSpace.921976e1.js";import{Q as pe}from"./QList.c6f7238b.js";import{Q as ce}from"./QHeader.b7d91911.js";import{Q as k}from"./QTooltip.79b4b5c2.js";import{Q as me}from"./QUploader.53114d16.js";import{Q as fe,a as b}from"./QTable.e82a26b5.js";import{Q as w}from"./QTd.35193cbd.js";import{Q as M}from"./QImg.1552f5cb.js";import{Q as ge,a as he}from"./QLayout.8a435aaf.js";import{u as ve}from"./use-quasar.040d274c.js";import{a as _e,d as ye}from"./api.7746bcf7.js";import{a as ke,l as be}from"./index.2151db98.js";import"./QScrollObserver.ac34ba03.js";import"./position-engine.a3e937f8.js";import"./format.68e162a5.js";import"./use-file.132dc55f.js";import"./QSelect.34b3be84.js";import"./use-ratio.3a344eb0.js";import"./index.58290dd4.js";var we=A({name:"QUploaderAddTrigger",setup(){const e=N(E,S);return e===S&&console.error("QUploaderAddTrigger needs to be child of QUploader"),e}}),V=A({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:g}){const Q=J(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>K("tr",{class:Q.value},W(g.default))}}),Qe=X({name:"UploadPage",setup(){const e=N("store"),g=Y(),Q=Z(),_=d(g.params.site),U=d(e.state.token!=""),P=te();P.appContext.config.globalProperties.$imgUrl;const t=P.appContext.config.globalProperties.$baseUrl,x=P.appContext.config.globalProperties.$photoUrl,q=ve(),c=d([]),j=d([{name:"Photo 360",required:!0,align:"center",field:"image",style:"width:350px;"},{name:"Info",required:!0,align:"center",field:"photo_id",style:"width:150px;"},{name:"Map Name",required:!0,align:"left",sortable:!0,filter:!0,field:"map_name"},{name:"Point No",required:!0,align:"center",field:"point_no",style:"width:50px;"},{name:"Point Name",required:!0,align:"left",field:"point_name"}]),m=d([]),B=d("");d([]);const h=d(),R=d([]),y=d(),$=d([]),T=d();return ee(async()=>{if(!U.value)Q.push("/");else{let s=await _e(_.value,e.state.token);console.log("results",e.state.token),c.value=s.map(a=>({photo_id:a.photo_id,exif:a.exif,user:a.user,image:`${x}/${a.site_id}/${a.photo_id}/low.jpg`})),console.log("photos",c.value)}}),{uploaderPointRef:T,handlePointUpload:s=>{console.log(s),T.value.pointFile=s.files[0],console.log("handle point upload",T.value.pointFile),s.xhr.onload=function(){if(s.xhr.status===200){const a=JSON.parse(s.xhr.responseText);console.log("Response:",a),q.notify({position:"top",message:a.results.msg,color:a.results.status?"purple":"red"})}}},factoryFn:async s=>new Promise(a=>{a({url:`${t}uploadbulk`,methods:"POST",headers:[{name:"Authorization",value:e.state.token}],formFields:[{name:"site_id",value:_.value},{name:"postby",value:e.state.user.username}]})}),selectedPoint:y,listPoints:$,updatePoints:()=>{console.log("select map",h.value),$.value=h.value.points.map(s=>({label:s.name,value:s.id})),console.log("points",$.value)},listMaps:R,selectedMap:h,filterMethod:(s,a,F)=>{if(!a.length)return s;const O=a[0].toLowerCase();return s.filter(z=>F.some(H=>{const G=z[H.name];return String(G).toLowerCase().includes(O)}))},filter:B,site:_,authorized:U,photos:c,tableColumns:j,dAgo:ke,formattDate:s=>be(s),baseUrl:t,selected:m,handleMove:async()=>{console.log("selected",m.value),console.log("move",h.value,y.value),movePhotos(m.value,_.value,h.value,y.value,e.state),m.value.map(s=>{const a=c.value.findIndex(F=>F.photo_id==s);console.log("index",a),a!=-1&&(c.value[a].point_id=y.value.value,c.value[a].point_name=y.value.label,c.value[a].map_id=h.value.value,c.value[a].map_name=h.value.label)}),m.value=[]},handleDelete:()=>{q.dialog({title:"Confirm",message:"Delete photos?",cancel:!0,persistent:!0}).onOk(async()=>{console.log("delete",m.value),await ye(m.value,e.state.token),c.value=c.value.filter(s=>!m.value.includes(s.photo_id)),q.notify({position:"top",message:"Delete done.",color:"purple"}),m.value=[]}).onCancel(()=>{console.log(">>>> Cancel")})}}}});const L=e=>(re("data-v-1e9af1eb"),e=e(),ie(),e),Pe={class:"flex flex-center q-pa-md-xl q-pa-none"},Ce={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},Ue={class:"col"},xe=L(()=>f("div",{class:"q-uploader__title"},"Upload your Photos",-1)),qe={class:"q-uploader__subtitle"},$e={key:0,class:"full-width"},Te={class:"flex q-my-md"},Fe={key:0},Se={key:0},De=L(()=>f("br",null,null,-1)),Ie={key:0};function Me(e,g,Q,_,U,P){return n(),p(ge,{view:"hHh lpr fff"},{default:o(()=>[l(ce,{elevated:"",class:"bg-grey-9 text-grey-1"},{default:o(()=>[l(pe,null,{default:o(()=>[l(de,null,{default:o(()=>[l(D,null,{default:o(()=>[l(I,{name:"add_a_photo",size:"sm"})]),_:1}),r(" Upload Photos ")]),_:1}),l(ue),l(le,{dark:"",vertical:""}),l(v,{class:"",rounded:"",flat:"",color:"grey-1",to:"/"+e.site+"/geomap","icon-right":"close",label:"Close"},null,8,["to"])]),_:1})]),_:1}),l(he,{calss:"bg-grey-8"},{default:o(()=>[f("div",Pe,[l(me,{ref:"uploaderPointRef",extensions:"['jpg', 'jpeg']",factory:e.factoryFn,onUploaded:e.handlePointUpload,"auto-upload":"false",multiple:"",label:"Upload Photos",class:"q-mb-md full-width bg-grey-12",style:{"max-width":"450px"}},{header:o(t=>[f("div",Ce,[t.queuedFiles.length>0?(n(),p(v,{key:0,icon:"clear_all",onClick:t.removeQueuedFiles,round:"",dense:"",flat:""},{default:o(()=>[l(k,null,{default:o(()=>[r("Clear All")]),_:1})]),_:2},1032,["onClick"])):i("",!0),t.uploadedFiles.length>0?(n(),p(v,{key:1,icon:"done_all",onClick:t.removeUploadedFiles,round:"",dense:"",flat:""},{default:o(()=>[l(k,null,{default:o(()=>[r("Remove Uploaded Files")]),_:1})]),_:2},1032,["onClick"])):i("",!0),t.isUploading?(n(),p(ae,{key:2,class:"q-uploader__spinner"})):i("",!0),f("div",Ue,[xe,f("div",qe,u(t.uploadSizeLabel)+" / "+u(t.uploadProgressLabel),1)]),t.canAddFiles?(n(),p(v,{key:3,type:"a",icon:"add_box",onClick:t.pickFiles,round:"",dense:"",flat:""},{default:o(()=>[l(we),l(k,null,{default:o(()=>[r("Pick Files")]),_:1})]),_:2},1032,["onClick"])):i("",!0),t.canUpload?(n(),p(v,{key:4,icon:"cloud_upload",onClick:t.upload,round:"",dense:"",flat:""},{default:o(()=>[l(k,null,{default:o(()=>[r("Upload Files")]),_:1})]),_:2},1032,["onClick"])):i("",!0),t.isUploading?(n(),p(v,{key:5,icon:"clear",onClick:t.abort,round:"",dense:"",flat:""},{default:o(()=>[l(k,null,{default:o(()=>[r("Abort Upload")]),_:1})]),_:2},1032,["onClick"])):i("",!0)])]),_:1},8,["factory","onUploaded"]),e.selected.length>0?(n(),C("div",$e,[f("div",Te,[l(v,{color:"red",icon:"delete",label:"Delete",onClick:e.handleDelete},null,8,["onClick"])])])):i("",!0),l(fe,{title:"Photos",rows:e.photos,columns:e.tableColumns,"row-key":"id","rows-per-page-options":[100,150,200],pagination:!0,"selected-rows-label":{singular:"item selected",plural:"items selected"},class:"full-width",filter:e.filter,"visible-columns":["point_no"],"wrap-cells":"",grid:e.$q.screen.xs,dense:e.$q.screen.lt.md},{"top-right":o(()=>[l(se,{rounded:"",outlined:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":g[0]||(g[0]=t=>e.filter=t),placeholder:"Search"},{append:o(()=>[l(I,{name:"search"})]),_:1},8,["modelValue"])]),header:o(t=>[l(V,{class:"custom-header"},{default:o(()=>[l(b),l(b,null,{default:o(()=>[r("Photo")]),_:1}),l(b,null,{default:o(()=>[r("Date")]),_:1}),l(b,null,{default:o(()=>[r("Info")]),_:1}),l(b,null,{default:o(()=>[r("Poster")]),_:1})]),_:1})]),body:o(t=>[(n(),p(V,{props:t,key:`m_${t.row.photo_id}`},{default:o(()=>[l(w,{style:{width:"50px","vertical-align":"top"}},{default:o(()=>[l(ne,{modelValue:e.selected,"onUpdate:modelValue":g[1]||(g[1]=x=>e.selected=x),val:t.row.photo_id},null,8,["modelValue","val"])]),_:2},1024),l(w,null,{default:o(()=>[l(M,{fit:"cover",style:{"max-height":"200px"},src:t.row.image,"spinner-color":"white",class:"table-image"},null,8,["src"]),e.$q.screen.lt.lg?(n(),C("div",Fe,[e.$q.screen.xs?(n(),C("div",Se,u(e.formattDate(t.row.point_id)),1)):i("",!0),f("div",null,u(t.row.map_name)+" : "+u(t.row.point_name),1)])):i("",!0)]),_:2},1024),e.$q.screen.gt.xs?(n(),p(w,{key:0,style:{width:"200px","text-align":"center","vertical-align":"top"}},{default:o(()=>[r(u(e.formattDate(t.row.exif.DateTimeOriginal)),1)]),_:2},1024)):i("",!0),e.$q.screen.gt.xs?(n(),p(w,{key:1,style:{width:"200px","text-align":"center","vertical-align":"top"}},{default:o(()=>[r(u(t.row.exif.Make)+" , "+u(t.row.exif.Model),1),De,r(" "+u(t.row.exif.GPSLatitude)+" , "+u(t.row.exif.GPSLongitude),1)]),_:2},1024)):i("",!0),e.$q.screen.gt.xs?(n(),p(w,{key:2,style:{width:"180px","text-align":"center","vertical-align":"top"}},{default:o(()=>[l(D,null,{default:o(()=>[l(M,{src:`${e.baseUrl}avatars/${t.row.user.empn}.jpg`},null,8,["src"])]),_:2},1024),f("div",null,u(t.row.user.name),1),e.$q.screen.gt.md?(n(),C("div",Ie,u(t.row.user.dept),1)):i("",!0)]),_:2},1024)):i("",!0)]),_:2},1032,["props"]))]),_:1},8,["rows","columns","filter","grid","dense"])])]),_:1})]),_:1})}var ut=oe(Qe,[["render",Me],["__scopeId","data-v-1e9af1eb"]]);export{ut as default};
