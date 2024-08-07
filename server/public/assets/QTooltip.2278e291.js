import{c as te,a2 as ae,a3 as T,a4 as oe,a5 as ne,r as C,b as f,a6 as ie,a7 as se,a8 as le,a9 as re,aa as ue,w as E,o as k,b0 as x,a$ as H,af as ce,d as A,ah as de,g as fe,O as he,Y as ve}from"./index.49655061.js";import{f as ge,v as q,a as me,p as D,b as Te,c as ye,r as M,s as pe,e as j,d as be}from"./position-engine.42b8dcdb.js";var we=te({name:"QTooltip",inheritAttrs:!1,props:{...ge,...ae,...T,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...T.transitionShow,default:"jump-down"},transitionHide:{...T.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:me},scrollTarget:oe,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...ne],setup(e,{slots:L,emit:y,attrs:h}){let i,s;const v=fe(),{proxy:{$q:a}}=v,l=C(null),c=C(!1),Q=f(()=>D(e.anchor,a.lang.rtl)),W=f(()=>D(e.self,a.lang.rtl)),B=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ie(),{registerTimeout:d}=se(),{transitionProps:_,transitionStyle:$}=le(e),{localScrollTarget:p,changeScrollEvent:I,unconfigureScrollTarget:U}=Te(e,w),{anchorEl:o,canShow:V,anchorEvents:r}=ye({showing:c,configureAnchorEl:X}),{show:Y,hide:g}=re({showing:c,canShow:V,handleShow:F,handleHide:G,hideOnRouteChange:B,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:b,hidePortal:S,renderPortal:z}=ue(v,l,ee,"tooltip");if(a.platform.is.mobile===!0){const t={anchorEl:o,innerRef:l,onClickOutside(n){return g(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},m=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(m,n=>{(n===!0?be:M)(t)}),k(()=>{M(t)})}function F(t){b(),N(()=>{s=new MutationObserver(()=>u()),s.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),w()}),i===void 0&&(i=E(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,u)),d(()=>{b(!0),y("show",t)},e.transitionDuration)}function G(t){R(),S(),P(),d(()=>{S(!0),y("hide",t)},e.transitionDuration)}function P(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),U(),x(r,"tooltipTemp")}function u(){pe({targetEl:l.value,offset:e.offset,anchorEl:o.value,anchorOrigin:Q.value,selfOrigin:W.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(a.platform.is.mobile===!0){j(),document.body.classList.add("non-selectable");const m=o.value,n=["touchmove","touchcancel","touchend","click"].map(O=>[m,O,"delayHide","passiveCapture"]);H(r,"tooltipTemp",n)}d(()=>{Y(t)},e.delay)}function K(t){a.platform.is.mobile===!0&&(x(r,"tooltipTemp"),j(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{g(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||o.value===null)return;const t=a.platform.is.mobile===!0?[[o.value,"touchstart","delayShow","passive"]]:[[o.value,"mouseenter","delayShow","passive"],[o.value,"mouseleave","delayHide","passive"]];H(r,"anchor",t)}function w(){if(o.value!==null||e.scrollTarget!==void 0){p.value=ce(o.value,e.scrollTarget);const t=e.noParentEvent===!0?u:g;I(p.value,t)}}function Z(){return c.value===!0?A("div",{...h,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",h.class],style:[h.style,$.value],role:"tooltip"},he(L.default)):null}function ee(){return A(de,_.value,Z)}return k(P),Object.assign(v.proxy,{updatePosition:u}),z}});export{we as Q};
