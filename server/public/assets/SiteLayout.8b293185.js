import{c as ue,b as X,d as de,h as ce,_ as me,f as pe,i as fe,r as m,j as ge,u as he,w as ve,k as be,m as ke,b3 as _e,n as l,A as r,s as t,g as we,t as M,P as R,q as a,x as k,C as u,p as C,z as p,H as P,B as b,y as s,D as S,E as F,b4 as _,v as O,F as B,b5 as ye,X as T}from"./index.f3ff8765.js";import{Q as Ce}from"./QSpace.921976e1.js";import{a as K,c as f,d as w,b as d,Q as U}from"./format.68e162a5.js";import{Q as Qe,a as V}from"./QList.c6f7238b.js";import{Q as $e,a as De}from"./QDrawer.f7c151fb.js";import{Q as ze}from"./QHeader.b7d91911.js";import{Q as Ae,a as qe}from"./QLayout.8a435aaf.js";import{C as $}from"./ClosePopup.902c135c.js";import{u as Le}from"./use-quasar.040d274c.js";import{d as Me,l as Pe,a as Se,s as Oe}from"./index.2151db98.js";import"./position-engine.a3e937f8.js";import"./QScrollObserver.ac34ba03.js";import"./index.58290dd4.js";const Be=["top","middle","bottom"];var Y=ue({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Be.includes(e)}},setup(e,{slots:c}){const z=X(()=>e.align!==void 0?{verticalAlign:e.align}:null),D=X(()=>{const h=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(h!==void 0?` text-${h}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>de("div",{class:D.value,style:z.value,role:"status","aria-label":e.label},ce(c.default,e.label!==void 0?[e.label]:[]))}});const Te=pe({name:"SiteLayout",setup(){const e=fe("store"),c=Le(),z=we(),D=m(z.appContext.config.globalProperties.$baseUrl),h=ge(),H=he(),g=m(H.params.site),o=m(),v=m(!!e.state.token),A=m(e.state.user.isAdmin),Z=m(`${D.value}avatars/${e.state.user.username}.jpg`),J=m(e.state.user),Q=[{id:1,icon:"panorama_photosphere",label:"VirtualTour",separator:!0,to:""},{id:10,icon:"thunderstorm",label:"Weather",separator:!0,to:"weather"}],j=m("photosphere"),x=m([]),I=m(null),E=m(!1),q=m("1"),L=m([]);ve(j,n=>{n=="photosphere"?h.push({path:"/"+g.value}):h.push({path:"/"+g.value+"/"+n})},{deep:!0});const ee=()=>M.post("/loadsites",{data:{site:g.value}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(n=>n.data.results),W=n=>M.post("/getnotification",{data:{site_id:n}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(i=>i.data.results),te=n=>M.post("/getcctv",{data:{site_id:n}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(i=>i.data.results),ae=()=>{e.state.token="",e.state.user="",R.remove("token"),v.value=!1,Oe("User Logout")},oe=()=>{window.orientation===0||window.orientation===180?I.value="vertical":I.value="horizontal"},le=n=>{h.push({path:"/"+g.value+"/"+n.to}),q.value=n,E.value=!1},G=m([]),ne=async n=>M.post("/getphoto_info",{data:{p:n}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(i=>i.data.results);be(async()=>{E.value=!1;const n=await ee(),i=h.currentRoute.value.path.split("/");i.length>2&&(j.value=i[i.length-1]),o.value=n[0],o.value.photos.sort((y,N)=>new Date(N.timestamp)-new Date(y.timestamp)),G.value=await ne(o.value.photos),Q.push({id:5,icon:"map",label:"GeoMap",separator:!0,to:"geomap"}),G.value.findIndex(y=>typeof y[0].gps.GPSLongitude!="undefined"),await te(g.value)!=null&&Q.push({id:13,icon:"vrpano",label:"CCTV",separator:!0,to:"cctv"}),J.value.username&&(L.value=await W(g.value),e.state.total_comment=L.value.length,e.state.total_photo=o.value.photos.length),i.length==2&&(q.value=Q[0]),i.length>2&&(q.value=Q.filter(y=>y.to==i[2])[0]),Q.sort((y,N)=>y.id-N.id),window.addEventListener("resize",oe)});const se=async()=>{L.value=await W(g.value)},re=n=>{console.log("gotoPoint",n);const i={site_id:n.comment.site_id,map_id:n.comment.map_id,point_id:n.comment.point_id,photo_id:n.comment.photo_id};console.log("routeCache",i),R.set("route",i),h.go(0)},ie=n=>{console.log("gotoPhoto",n);const i={site_id:g.value,map_id:n[0].map.id,point_id:n[0].point.id,photo_id:n[0].id};console.log("routeCache",i),R.set("route",i),h.go(0)};return{screen:m(c.screen),gotoPhoto:ie,photos:G,getComments:se,comments:L,store:e,dateString:Me,localDateString:Pe,dAgo:Se,baseUrl:D,gotoPoint:re,selectedMenu:q,clickMenu:le,menuList:Q,leftDrawerOpen:E,orientation:I,Platform:ke,notifications:x,logout:ae,avatarUrl:Z,menu:j,authorized:v,isAdmin:A,site:g,siteInfo:o,user:J}}}),Ue={key:0,class:"q-mr-lg text-subtitle1"},Ve={class:"text-deep-orange q-ml-sm"},je={style:{width:"350px"}},Ie=["src"],Ee={style:{width:"450px"}},Ge=["src"],Ne={class:"row items-center no-wrap"},Re=["src"],Fe=["src"],He=b("span",{class:"text-deep-orange"},"V",-1);function Je(e,c,z,D,h,H){const g=_e("router-view");return l(),r(Ae,{view:"lHh lpR fFf",class:"bg-grey-12"},{default:t(()=>[a(ze,{elevated:"",class:"bg-grey-9 text-grey-1"},{default:t(()=>[a(Qe,{class:"q-pa-none"},{default:t(()=>[e.leftDrawerOpen?u("",!0):(l(),r(k,{key:0,class:"q-mx-sm",name:"menu",size:"md",onClick:c[0]||(c[0]=o=>e.leftDrawerOpen=!e.leftDrawerOpen)})),e.orientation=="horizontal"&&!e.leftDrawerOpen?(l(),C("div",{key:1,class:"q-mr-lg text-subtitle1",onClick:c[1]||(c[1]=o=>e.leftDrawerOpen=!e.leftDrawerOpen)},p(e.siteInfo.name),1)):(l(),C("div",{key:2,onClick:c[2]||(c[2]=o=>e.leftDrawerOpen=!e.leftDrawerOpen)},[e.siteInfo&&(e.Platform.is.desktop||e.Platform.is.platform=="ipad")&&!e.leftDrawerOpen?(l(),C("div",Ue,p(e.siteInfo.name),1)):u("",!0)])),a(P,{dark:"",vertical:""}),b("div",Ve,[a(k,{class:"q-mx-sm",name:e.selectedMenu.icon,size:"sm"},null,8,["name"]),s(p(e.selectedMenu.label),1)]),a(Ce),e.authorized&&e.selectedMenu.id=="1"?(l(),r(S,{key:3,round:"",flat:"",icon:"add_a_photo"},{default:t(()=>[e.store.state.total_photo?(l(),r(Y,{key:0,color:"red",floating:"",transparent:""},{default:t(()=>[s(p(e.store.state.total_photo),1)]),_:1})):u("",!0),a(K,null,{default:t(()=>[b("div",je,[a(V,{separator:"",bordered:""},{default:t(()=>[a(f,{header:"",class:"text-weight-bold"},{default:t(()=>[s("Latest Uploads")]),_:1}),(l(!0),C(B,null,F(e.photos,(o,v)=>_((l(),r(w,{key:v,clickable:"",onClick:A=>e.gotoPhoto(o)},{default:t(()=>[a(d,{top:"",avatar:""},{default:t(()=>[a(O,null,{default:t(()=>[b("img",{src:`${e.baseUrl}avatars/${o[o.length-1].user.username}.jpg`},null,8,Ie)]),_:2},1024)]),_:2},1024),a(d,{top:""},{default:t(()=>[a(f,{class:"text-weight-light",caption:"",lines:"1"},{default:t(()=>[s(p(e.dateString(o[o.length-1].point.timestamp)),1)]),_:2},1024),a(f,{caption:"",lines:"3"},{default:t(()=>[s(p(o[o.length-1].map.name)+": "+p(o[o.length-1].point.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[T],[$]])),128))]),_:1})])]),_:1})]),_:1})):u("",!0),e.authorized&&e.selectedMenu.id=="1"?(l(),r(S,{key:4,round:"",flat:"",icon:"chat",onClick:c[3]||(c[3]=o=>e.getComments())},{default:t(()=>[e.store.state.total_comment?(l(),r(Y,{key:0,color:"red",floating:"",transparent:""},{default:t(()=>[s(p(e.store.state.total_comment),1)]),_:1})):u("",!0),a(K,null,{default:t(()=>[b("div",Ee,[a(V,{bordered:""},{default:t(()=>[a(f,{header:"",class:"text-weight-bold"},{default:t(()=>[s("Comments")]),_:1}),(l(!0),C(B,null,F(e.comments,(o,v)=>_((l(),r(w,{key:v,clickable:"",onClick:A=>e.gotoPoint(o)},{default:t(()=>[o.postby[0].username?(l(),r(d,{key:0,avatar:""},{default:t(()=>[a(O,{size:"xl"},{default:t(()=>[b("img",{src:`${e.baseUrl}avatars/${o.postby[0].username}.jpg`},null,8,Ge)]),_:2},1024)]),_:2},1024)):u("",!0),a(d,{top:""},{default:t(()=>[a(f,{class:"text-weight-bold",caption:"",lines:"1"},{default:t(()=>[s(p(o.point[0].name),1)]),_:2},1024),a(f,{caption:"",lines:"3"},{default:t(()=>[s(p(o.comment.text),1)]),_:2},1024)]),_:2},1024),a(d,{side:"",top:""},{default:t(()=>[a(f,{caption:""},{default:t(()=>[s(p(e.dAgo(o.comment.id)),1)]),_:2},1024),o.comment.tag=="goodjob"?(l(),r(U,{key:0,dense:"",color:"teal","text-color":"white",icon:"thumb_up"},{default:t(()=>[s("Good Job")]),_:1})):u("",!0),o.comment.tag=="defect"?(l(),r(U,{key:1,dense:"",color:"red","text-color":"white",icon:"build_circle"},{default:t(()=>[s("Defect")]),_:1})):u("",!0),o.comment.tag=="action"?(l(),r(U,{key:2,dense:"",color:"green","text-color":"white",icon:"schedule"},{default:t(()=>[s("Action")]),_:1})):u("",!0),o.comment.tag=="question"?(l(),r(U,{key:3,dense:"",color:"primary","text-color":"white",icon:"help"},{default:t(()=>[s("Question")]),_:1})):u("",!0)]),_:2},1024)]),_:2},1032,["onClick"])),[[T],[$]])),128))]),_:1})])]),_:1})]),_:1})):u("",!0),e.authorized?(l(),r($e,{key:5,flat:""},{label:t(()=>[b("div",Ne,[a(O,{size:"md"},{default:t(()=>[b("img",{src:e.avatarUrl},null,8,Re)]),_:1})])]),default:t(()=>[a(V,{style:{width:"280px"}},{default:t(()=>[_((l(),r(w,{clickable:""},{default:t(()=>[a(d,{side:""},{default:t(()=>[a(O,{size:"32px"},{default:t(()=>[b("img",{src:e.avatarUrl},null,8,Fe)]),_:1})]),_:1}),a(d,null,{default:t(()=>[a(f,null,{default:t(()=>[s(p(e.user.userEGAT.person_thai_name),1)]),_:1}),a(f,{caption:""},{default:t(()=>[s(p(e.user.userEGAT.person_position),1)]),_:1}),a(f,{caption:""},{default:t(()=>[s(p(e.user.userEGAT.main_org_thai_name_reverse_path),1)]),_:1})]),_:1})]),_:1})),[[T]]),a(P,{spaced:""}),e.isAdmin&&e.selectedMenu.id=="1"?_((l(),r(w,{key:0,clickable:"",to:"/"+e.site+"/map",exact:""},{default:t(()=>[a(d,{avatar:""},{default:t(()=>[a(k,{name:"map",color:"primary","text-color":"white"})]),_:1}),a(d,null,{default:t(()=>[a(f,null,{default:t(()=>[s("Map")]),_:1})]),_:1})]),_:1},8,["to"])),[[$]]):u("",!0),e.isAdmin&&e.selectedMenu.id=="5"?_((l(),r(w,{key:1,clickable:"",to:"/"+e.site+"/upload",exact:""},{default:t(()=>[a(d,{avatar:""},{default:t(()=>[a(k,{name:"add_a_photo",color:"primary","text-color":"white"})]),_:1}),a(d,null,{default:t(()=>[a(f,null,{default:t(()=>[s("Upload Photos")]),_:1})]),_:1})]),_:1},8,["to"])),[[$]]):u("",!0),e.isAdmin&&e.selectedMenu.id=="5"?_((l(),r(w,{key:2,clickable:"",to:"/"+e.site+"/upload_layer",exact:""},{default:t(()=>[a(d,{avatar:""},{default:t(()=>[a(k,{name:"library_add",color:"primary","text-color":"white"})]),_:1}),a(d,null,{default:t(()=>[a(f,null,{default:t(()=>[s("Upload Layers")]),_:1})]),_:1})]),_:1},8,["to"])),[[$]]):u("",!0),_((l(),r(w,{clickable:"",onClick:e.logout},{default:t(()=>[a(d,{avatar:""},{default:t(()=>[a(k,{name:"logout",color:"primary","text-color":"white"})]),_:1}),a(d,null,{default:t(()=>[a(f,null,{default:t(()=>[s("Logout")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[$]])]),_:1})]),_:1})):u("",!0),e.authorized?u("",!0):(l(),r(S,{key:6,flat:"",icon:"login",label:"Login",to:"/login"})),a(P,{dark:"",vertical:""}),a(S,{rounded:"",flat:"","icon-right":"close",to:"/",label:e.screen.name=="xs"?"":"Close"},null,8,["label"])]),_:1})]),_:1}),a(De,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":c[5]||(c[5]=o=>e.leftDrawerOpen=o),width:288,breakpoint:500,bordered:"",dark:"",class:ye(e.$q.dark.isActive?"bg-grey-1":"bg-grey-9")},{default:t(()=>[a(k,{class:"q-mx-sm",name:"menu",size:"md",onClick:c[4]||(c[4]=o=>e.leftDrawerOpen=!e.leftDrawerOpen)}),s(" mySites"),He,s("ision "),a(V,null,{default:t(()=>[(l(!0),C(B,null,F(e.menuList,(o,v)=>(l(),C(B,{key:v},[_((l(),r(w,{clickable:"",active:o.id==e.selectedMenu.id,"active-class":"bg-grey-1 text-grey-8",onClick:A=>e.clickMenu(o)},{default:t(()=>[a(d,{avatar:""},{default:t(()=>[a(k,{name:o.icon},null,8,["name"])]),_:2},1024),a(d,null,{default:t(()=>[s(p(o.label),1)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[T]]),o.separator?(l(),r(P,{key:"sep"+v})):u("",!0)],64))),128))]),_:1})]),_:1},8,["modelValue","class"]),a(qe,null,{default:t(()=>[a(g)]),_:1})]),_:1})}var it=me(Te,[["render",Je]]);export{it as default};
