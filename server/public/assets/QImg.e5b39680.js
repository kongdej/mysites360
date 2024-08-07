import{c as M,r,a7 as T,b as o,a as O,k as $,d as n,ah as E,O as F,al as P,w as A,am as S,g as W}from"./index.1b7456cd.js";import{u as x,a as G}from"./use-ratio.002aafa8.js";const J=1.7778;var V=M({name:"QImg",props:{...x,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:J},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:g,emit:h}){const y=r(e.initialRatio),_=G(e,y),d=W(),{registerTimeout:C,removeTimeout:m}=T(),{registerTimeout:k,removeTimeout:b}=T(),v=o(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),z=o(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),t=[r(null),r(v.value)],a=r(0),u=r(!1),s=r(!1),L=o(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),R=o(()=>({width:e.width,height:e.height})),I=o(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),j=o(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function B(){if(b(),e.loadingShowDelay===0){u.value=!0;return}k(()=>{u.value=!0},e.loadingShowDelay)}function f(){b(),u.value=!1}function D({target:i}){S(d)===!1&&(m(),y.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,w(i,1))}function w(i,l){l===1e3||S(d)===!0||(i.complete===!0?N(i):C(()=>{w(i,l+1)},50))}function N(i){S(d)!==!0&&(a.value=a.value^1,t[a.value].value=null,f(),i.getAttribute("__qerror")!=="true"&&(s.value=!1),h("load",i.currentSrc||i.src))}function Q(i){m(),f(),s.value=!0,t[a.value].value=z.value,t[a.value^1].value=v.value,h("error",i)}function q(i){const l=t[i].value,c={key:"img_"+i,class:I.value,style:j.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return a.value===i?Object.assign(c,{class:c.class+"current",onLoad:D,onError:Q}):c.class+="loaded",n("div",{class:"q-img__container absolute-full",key:"img"+i},n("img",c))}function H(){return u.value===!1?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},F(g[s.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},g.loading!==void 0?g.loading():e.noSpinner===!0?void 0:[n(P,{color:e.spinnerColor,size:e.spinnerSize})])}{let i=function(){A(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,l=>{m(),s.value=!1,l===null?(f(),t[a.value^1].value=v.value):B(),t[a.value].value=l},{immediate:!0})};O.value===!0?$(i):i()}return()=>{const i=[];return _.value!==null&&i.push(n("div",{key:"filler",style:_.value})),t[0].value!==null&&i.push(q(0)),t[1].value!==null&&i.push(q(1)),i.push(n(E,{name:"q-transition--fade"},H)),n("div",{key:"main",class:L.value,style:R.value,role:"img","aria-label":e.alt},i)}}});export{V as Q};
