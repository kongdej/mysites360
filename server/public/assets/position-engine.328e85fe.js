import{m as K,r as P,a9 as D,a6 as z,S as N,b0 as A,w as E,k as Q,o as j,g as X,b1 as Y,as as L,b2 as $,aG as F,aD as G}from"./index.63e8c0ce.js";function U(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),K.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const J={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},lt={...J,contextMenu:Boolean};function nt({showing:t,avoidEmit:l,configureAnchorEl:n}){const{props:e,proxy:a,emit:s}=X(),o=P(null);let c=null;function d(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){D(i,13)===!0&&u.toggle(i)},contextClick(i){a.hide(i),z(i),N(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:z,mobileTouch(i){if(u.mobileCleanup(i),d(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const r=i.target;A(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),t.value===!0&&i!==void 0&&U()}}),n=function(i=e.contextMenu){if(e.noParentEvent===!0||o.value===null)return;let r;i===!0?a.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],A(u,"anchor",r)});function f(){Y(u,"anchor")}function y(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function p(){if(e.target===!1||e.target===""||a.$el.parentNode===null)o.value=null;else if(e.target===!0)y(a.$el.parentNode);else{let i=e.target;if(typeof e.target=="string")try{i=document.querySelector(e.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${e.target}" not found`))}}return E(()=>e.contextMenu,i=>{o.value!==null&&(f(),n(i))}),E(()=>e.target,()=>{o.value!==null&&f(),p()}),E(()=>e.noParentEvent,i=>{o.value!==null&&(i===!0?f():n())}),Q(()=>{p(),l!==!0&&e.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),j(()=>{c!==null&&clearTimeout(c),f()}),{anchorEl:o,canShow:d,anchorEvents:u}}function it(t,l){const n=P(null);let e;function a(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:e;c!==window&&c[u]("scroll",f,L.passive),window[u]("scroll",f,L.passive),e=d}function s(){n.value!==null&&(a(n.value),n.value=null)}const o=E(()=>t.noParentEvent,()=>{n.value!==null&&(s(),l())});return j(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:a}}const{notPassiveCapture:W}=L,g=[];function M(t){const l=t.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=$.length-1;for(;n>=0;){const e=$[n].$;if(e.type.name==="QTooltip"){n--;continue}if(e.type.name!=="QDialog")break;if(e.props.seamless!==!0)return;n--}for(let e=g.length-1;e>=0;e--){const a=g[e];if((a.anchorEl.value===null||a.anchorEl.value.contains(l)===!1)&&(l===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(l)===!1))t.qClickOutside=!0,a.onClickOutside(t);else return}}function ot(t){g.push(t),g.length===1&&(document.addEventListener("mousedown",M,W),document.addEventListener("touchstart",M,W))}function at(t){const l=g.findIndex(n=>n===t);l!==-1&&(g.splice(l,1),g.length===0&&(document.removeEventListener("mousedown",M,W),document.removeEventListener("touchstart",M,W)))}let q,R;function rt(t){const l=t.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ut(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const S={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{S[`${t}#ltr`]=t,S[`${t}#rtl`]=t});function st(t,l){const n=t.split(" ");return{vertical:n[0],horizontal:S[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function Z(t,l){let{top:n,left:e,right:a,bottom:s,width:o,height:c}=t.getBoundingClientRect();return l!==void 0&&(n-=l[1],e-=l[0],s+=l[1],a+=l[0],o+=l[0],c+=l[1]),{top:n,bottom:s,height:c,left:e,right:a,width:o,middle:e+(a-e)/2,center:n+(s-n)/2}}function _(t,l,n){let{top:e,left:a}=t.getBoundingClientRect();return e+=l.top,a+=l.left,n!==void 0&&(e+=n[1],a+=n[0]),{top:e,bottom:e+1,height:1,left:a,right:a+1,width:1,middle:a,center:e}}function O(t,l){return{top:0,center:l/2,bottom:l,left:0,middle:t/2,right:t}}function B(t,l,n,e){return{top:t[n.vertical]-l[e.vertical],left:t[n.horizontal]-l[e.horizontal]}}function tt(t,l=0){if(t.targetEl===null||t.anchorEl===null||l>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{tt(t,l+1)},10);return}const{targetEl:n,offset:e,anchorEl:a,anchorOrigin:s,selfOrigin:o,absoluteOffset:c,fit:d,cover:u,maxHeight:f,maxWidth:y}=t;if(F.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:b,offsetTop:v}=window.visualViewport;b!==q&&(H.setProperty("--q-pe-left",b+"px"),q=b),v!==R&&(H.setProperty("--q-pe-top",v+"px"),R=v)}const{scrollLeft:p,scrollTop:i}=n,r=c===void 0?Z(a,u===!0?[0,0]:e):_(a,c,e);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:T}=n,{elWidth:V,elHeight:I}=d===!0||u===!0?{elWidth:Math.max(r.width,k),elHeight:u===!0?Math.max(r.height,T):T}:{elWidth:k,elHeight:T};let m={maxWidth:y,maxHeight:f};(d===!0||u===!0)&&(m.minWidth=r.width+"px",u===!0&&(m.minHeight=r.height+"px")),Object.assign(n.style,m);const x=O(V,I);let h=B(r,x,s,o);if(c===void 0||e===void 0)C(h,r,x,s,o);else{const{top:H,left:b}=h;C(h,r,x,s,o);let v=!1;if(h.top!==H){v=!0;const w=2*e[1];r.center=r.top-=w,r.bottom-=w+2}if(h.left!==b){v=!0;const w=2*e[0];r.middle=r.left-=w,r.right-=w+2}v===!0&&(h=B(r,x,s,o),C(h,r,x,s,o))}m={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(m.maxHeight=h.maxHeight+"px",r.height>h.maxHeight&&(m.minHeight=m.maxHeight)),h.maxWidth!==void 0&&(m.maxWidth=h.maxWidth+"px",r.width>h.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(n.style,m),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==p&&(n.scrollLeft=p)}function C(t,l,n,e,a){const s=n.bottom,o=n.right,c=G(),d=window.innerHeight-c,u=document.body.clientWidth;if(t.top<0||t.top+s>d)if(a.vertical==="center")t.top=l[e.vertical]>d/2?Math.max(0,d-s):0,t.maxHeight=Math.min(s,d);else if(l[e.vertical]>d/2){const f=Math.min(d,e.vertical==="center"?l.center:e.vertical===a.vertical?l.bottom:l.top);t.maxHeight=Math.min(s,f),t.top=Math.max(0,f-s)}else t.top=Math.max(0,e.vertical==="center"?l.center:e.vertical===a.vertical?l.top:l.bottom),t.maxHeight=Math.min(s,d-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),a.horizontal==="middle")t.left=l[e.horizontal]>u/2?Math.max(0,u-o):0;else if(l[e.horizontal]>u/2){const f=Math.min(u,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.right:l.left);t.maxWidth=Math.min(o,f),t.left=Math.max(0,f-t.maxWidth)}else t.left=Math.max(0,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.left:l.right),t.maxWidth=Math.min(o,u-t.left)}export{ut as a,it as b,nt as c,ot as d,U as e,J as f,st as p,at as r,tt as s,lt as u,rt as v};
