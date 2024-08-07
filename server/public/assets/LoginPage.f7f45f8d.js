import{Q as w}from"./QImg.e0796625.js";import{_ as v,f as x,i as b,j as Q,r as c,k,P as m,m as P,n as V,A as q,s as i,g as C,t as j,q as o,B as e,I as L,bk as B,L as g,D as f,y as h}from"./index.63e8c0ce.js";import{Q as I}from"./QForm.43d9de00.js";import{Q as R}from"./QPage.ff88fab8.js";import{Q as S,a as $}from"./QLayout.1d8af999.js";import{u as z}from"./use-quasar.9121bb9a.js";import"./use-ratio.9183a368.js";import"./QScrollObserver.8aef43d3.js";var y="/assets/login.1041f817.png";const U=x({name:"Login",setup(){const s=b("store"),a=C(),d=Q(),u=z();c(a.appContext.config.globalProperties.$profile);const l=c(""),r=c(""),t=()=>{l.value="",r.value=""},_=()=>{l.value!=""&&r.value!=""?(console.log("submit",l.value,r.value),j.post("/login",{data:{username:l.value,password:r.value}},{headers:{"Content-Type":"application/json"}}).then(async n=>{if(console.log("login",n.data.results),n.data.results.authorized){s.state.token=n.data.results.token,s.state.user=n.data.results.user[0],m.set("token",n.data.results.token);const p=m.getItem("route");console.log("route cache",p),p==null?d.push("/"):d.push({path:"/"+p.site_id})}else u.notify({position:"top",message:"Incorrect username or passoword!",color:"purple"})})):u.notify({position:"top",message:"Empty username or passoword!",color:"purple"})};return k(()=>{m.remove("token")}),{Platform:P,store:s,name:l,password:r,onSubmit:_,onReset:t}}}),N={class:"row full-width flex justify-center"},F={class:"col-md-7 col-xs-12 q-px-md q-py-xl"},T={class:"row"},A={class:"col-md-6 col-xs-12 q-pa-md text-center"},D={class:"col-md-6 col-xs-12"},E={class:"q-pa-md"},H=e("div",{class:"text-h6 q-pb-md text-grey-9 text-center text-weight-bolder"},[e("div",{class:"text-h5"},[h("mySites"),e("span",{class:"text-deep-orange text-h4"},"V"),h("ision")]),e("div",{class:"text-h6"},"Login")],-1),M={class:"flex justify-end"},G={class:"row full-width flex justify-center"};function J(s,a,d,u,l,r){return V(),q(S,{view:"hHh Lpr lFf"},{default:i(()=>[o($,{class:"bg-grey-12"},{default:i(()=>[o(R,{padding:"",class:"row items-center justify-center"},{default:i(()=>[e("div",N,[e("div",F,[o(L,{flat:"",class:"bg-white text-grey-9"},{default:i(()=>[e("div",T,[e("div",A,[o(w,{"placeholder-src":y,src:y,"spinner-color":"white",style:B(s.Platform.is.desktop?"width:400px;":"width: 250px;")},null,8,["style"])]),e("div",D,[e("div",E,[H,o(I,{onSubmit:s.onSubmit,onReset:s.onReset,class:"q-gutter-none"},{default:i(()=>[o(g,{filled:"",modelValue:s.name,"onUpdate:modelValue":a[0]||(a[0]=t=>s.name=t),label:"Username","lazy-rules":"",rules:[t=>t&&t.length>0||"Please type Username"]},null,8,["modelValue","rules"]),o(g,{filled:"",type:"password",modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=t=>s.password=t),label:"Password","lazy-rules":"",rules:[t=>t!==null&&t!==""||"Please type your password"]},null,8,["modelValue","rules"]),e("div",M,[o(f,{rounded:"",label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"}),o(f,{rounded:"",label:"Login",type:"submit",color:"primary"})])]),_:1},8,["onSubmit","onReset"])])])])]),_:1})])]),e("div",G,[o(f,{label:"<< Back",color:"secondary",to:"/"})])]),_:1})]),_:1})]),_:1})}var te=v(U,[["render",J]]);export{te as default};
