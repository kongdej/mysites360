import{c as ne,aO as se,ac as ue,aP as le,aq as ie,aQ as re,r as M,b as r,ae as ce,aR as fe,am as de,aS as ve,aT as ge,aU as he,w as A,aV as me,aW as Pe,aX as Te,aY as R,ar as Se,aZ as ye,d as D,O as ke,an as xe,o as Be,g as Ce,a_ as Oe,aK as be,a$ as qe,ab as we}from"./index.63e8c0ce.js";import{u as Ee,v as K,a as Fe,b as Me,c as Ae,p as H,r as Q,s as Re,d as De}from"./position-engine.328e85fe.js";var Qe=ne({name:"QMenu",inheritAttrs:!1,props:{...Ee,...se,...ue,...le,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:K},self:{type:String,validator:K},offset:{type:Array,validator:Fe},scrollTarget:ie,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...re,"click","escapeKey"],setup(e,{slots:o,emit:a,attrs:s}){let n=null,v,c,g;const y=Ce(),{proxy:h}=y,{$q:u}=h,l=M(null),i=M(!1),$=r(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),z=ce(e,u),{registerTick:I,removeTick:_}=fe(),{registerTimeout:k}=de(),{transitionProps:j,transitionStyle:U}=ve(e),{localScrollTarget:x,changeScrollEvent:G,unconfigureScrollTarget:L}=Me(e,E),{anchorEl:f,canShow:V}=Ae({showing:i}),{hide:B}=ge({showing:i,canShow:V,handleShow:N,handleHide:p,hideOnRouteChange:$,processOnMount:!0}),{showPortal:C,hidePortal:O,renderPortal:X}=he(y,l,te,"menu"),m={anchorEl:f,innerRef:l,onClickOutside(t){if(e.persistent!==!0&&i.value===!0)return B(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&we(t),!0}},b=r(()=>H(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),Y=r(()=>e.cover===!0?b.value:H(e.self||"top start",u.lang.rtl)),Z=r(()=>(e.square===!0?" q-menu--square":"")+(z.value===!0?" q-menu--dark q-dark":"")),J=r(()=>e.autoClose===!0?{onClick:ee}:{}),q=r(()=>i.value===!0&&e.persistent!==!0);A(q,t=>{t===!0?(Oe(T),De(m)):(R(T),Q(m))});function P(){be(()=>{let t=l.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function N(t){if(n=e.noRefocus===!1?document.activeElement:null,me(F),C(),E(),v=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const S=Pe(t);if(S.left!==void 0){const{top:oe,left:ae}=f.value.getBoundingClientRect();v={left:S.left-ae,top:S.top-oe}}}c===void 0&&(c=A(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,d)),e.noFocus!==!0&&document.activeElement.blur(),I(()=>{d(),e.noFocus!==!0&&P()}),k(()=>{u.platform.is.ios===!0&&(g=e.autoClose,l.value.click()),d(),C(!0),a("show",t)},e.transitionDuration)}function p(t){_(),O(),w(!0),n!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),k(()=>{O(!0),a("hide",t)},e.transitionDuration)}function w(t){v=void 0,c!==void 0&&(c(),c=void 0),(t===!0||i.value===!0)&&(Te(F),L(),Q(m),R(T)),t!==!0&&(n=null)}function E(){(f.value!==null||e.scrollTarget!==void 0)&&(x.value=Se(f.value,e.scrollTarget),G(x.value,d))}function ee(t){g!==!0?(ye(h,t),a("click",t)):g=!1}function F(t){q.value===!0&&e.noFocus!==!0&&qe(l.value,t.target)!==!0&&P()}function T(t){a("escapeKey"),B(t)}function d(){Re({targetEl:l.value,offset:e.offset,anchorEl:f.value,anchorOrigin:b.value,selfOrigin:Y.value,absoluteOffset:v,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function te(){return D(xe,j.value,()=>i.value===!0?D("div",{role:"menu",...s,ref:l,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,s.class],style:[s.style,U.value],...J.value},ke(o.default)):null)}return Be(w),Object.assign(h,{focus:P,updatePosition:d}),X}});const W=["B","KB","MB","GB","TB","PB"];function We(e,o=1){let a=0;for(;parseInt(e,10)>=1024&&a<W.length-1;)e/=1024,++a;return`${e.toFixed(o)}${W[a]}`}function $e(e,o,a){return a<=o?o:Math.min(a,Math.max(o,e))}function ze(e,o,a){if(a<=o)return o;const s=a-o+1;let n=o+(e-o)%s;return n<o&&(n=s+n),n===0?0:n}function Ie(e,o=2,a="0"){if(e==null)return e;const s=""+e;return s.length>=o?s:new Array(o-s.length+1).join(a)+s}export{Qe as Q,$e as b,We as h,ze as n,Ie as p};
