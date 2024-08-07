import{c as oe,b as c,d as k,O as ue,b6 as ye,a3 as Le,r as M,b7 as ze,b8 as We,w as g,k as we,x as Ie,D as G,g as ge,aT as H,b9 as Ve,b2 as L,aF as Fe,ba as He,a$ as V,bb as J,aR as ce,ac as ne,b0 as Z,Y as Qe,a2 as Re,R as je,a5 as Xe,T as Ye,a7 as Ne,i as Ue,e as ee,l as Ke,a9 as Ge,bc as Je,aw as fe,o as Ze,b4 as et,V as ve,bd as tt}from"./index.f3ff8765.js";import{a as at,e as F}from"./format.68e162a5.js";import{e as nt}from"./position-engine.a3e937f8.js";var ot=oe({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:o}){const r=c(()=>{const v=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(t=>e[t]===!0).map(t=>`q-btn-group--${t}`).join(" ");return`q-btn-group row no-wrap${v.length!==0?" "+v:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>k("div",{class:r.value},ue(o.default))}});const ut=Object.keys(ye);function rt(e){return ut.reduce((o,r)=>{const v=e[r];return v!==void 0&&(o[r]=v),o},{})}var ht=oe({name:"QBtnDropdown",props:{...ye,...Le,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:r}){const{proxy:v}=ge(),t=M(e.modelValue),n=M(null),l=ze(),h=c(()=>{const d={"aria-expanded":t.value===!0?"true":"false","aria-haspopup":"true","aria-controls":l.value,"aria-label":e.toggleAriaLabel||v.$q.lang.label[t.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(d["aria-disabled"]="true"),d}),b=c(()=>"q-btn-dropdown__arrow"+(t.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),s=c(()=>We(e)),u=c(()=>rt(e));g(()=>e.modelValue,d=>{n.value!==null&&n.value[d?"show":"hide"]()}),g(()=>e.split,O);function B(d){t.value=!0,r("beforeShow",d)}function y(d){r("show",d),r("update:modelValue",!0)}function w(d){t.value=!1,r("beforeHide",d)}function f(d){r("hide",d),r("update:modelValue",!1)}function S(d){r("click",d)}function p(d){H(d),O(),r("click",d)}function m(d){n.value!==null&&n.value.toggle(d)}function _(d){n.value!==null&&n.value.show(d)}function O(d){n.value!==null&&n.value.hide(d)}return Object.assign(v,{show:_,hide:O,toggle:m}),we(()=>{e.modelValue===!0&&_()}),()=>{const d=[k(Ie,{class:b.value,name:e.dropdownIcon||v.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&d.push(k(at,{ref:n,id:l.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:B,onShow:y,onBeforeHide:w,onHide:f},o.default)),e.split===!1?k(G,{class:"q-btn-dropdown q-btn-dropdown--simple",...u.value,...h.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:S},{default:()=>ue(o.label,[]).concat(d),loading:o.loading}):k(ot,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...s.value,glossy:e.glossy,stretch:e.stretch},()=>[k(G,{class:"q-btn-dropdown--current",...u.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:p},{default:o.label,loading:o.loading}),k(G,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...h.value,...s.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>d)])}}});const re={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},it=Object.keys(re);re.all=!0;function he(e){const o={};for(const r of it)e[r]===!0&&(o[r]=!0);return Object.keys(o).length===0?re:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const lt=["INPUT","TEXTAREA"];function me(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&lt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function te(e,o,r){const v=ne(e);let t,n=v.left-o.event.x,l=v.top-o.event.y,h=Math.abs(n),b=Math.abs(l);const s=o.direction;s.horizontal===!0&&s.vertical!==!0?t=n<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=l<0?"up":"down":s.up===!0&&l<0?(t="up",h>b&&(s.left===!0&&n<0?t="left":s.right===!0&&n>0&&(t="right"))):s.down===!0&&l>0?(t="down",h>b&&(s.left===!0&&n<0?t="left":s.right===!0&&n>0&&(t="right"))):s.left===!0&&n<0?(t="left",h<b&&(s.up===!0&&l<0?t="up":s.down===!0&&l>0&&(t="down"))):s.right===!0&&n>0&&(t="right",h<b&&(s.up===!0&&l<0?t="up":s.down===!0&&l>0&&(t="down")));let u=!1;if(t===void 0&&r===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,u=!0,t==="left"||t==="right"?(v.left-=n,h=0,n=0):(v.top-=l,b=0,l=0)}return{synthetic:u,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:v,direction:t,isFirst:o.event.isFirst,isFinal:r===!0,duration:Date.now()-o.event.time,distance:{x:h,y:b},offset:{x:n,y:l},delta:{x:v.left-o.event.lastX,y:v.top-o.event.lastY}}}}let st=0;var ae=Ve({name:"touch-pan",beforeMount(e,{value:o,modifiers:r}){if(r.mouse!==!0&&L.has.touch!==!0)return;function v(n,l){r.mouse===!0&&l===!0?Qe(n):(r.stop===!0&&H(n),r.prevent===!0&&ce(n))}const t={uid:"qvtp_"+st++,handler:o,modifiers:r,direction:he(r),noop:Fe,mouseStart(n){me(n,t)&&He(n)&&(V(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(me(n,t)){const l=n.target;V(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,l){if(L.is.firefox===!0&&J(e,!0),t.lastEvt=n,l===!0||r.stop===!0){if(t.direction.all!==!0&&(l!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&ce(s),n.cancelBubble===!0&&H(s),Object.assign(s,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:s}}H(n)}const{left:h,top:b}=ne(n);t.event={x:h,y:b,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:b}},move(n){if(t.event===void 0)return;const l=ne(n),h=l.left-t.event.x,b=l.top-t.event.y;if(h===0&&b===0)return;t.lastEvt=n;const s=t.event.mouse===!0,u=()=>{v(n,s);let w;r.preserveCursor!==!0&&r.preservecursor!==!0&&(w=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),nt(),t.styleCleanup=f=>{if(t.styleCleanup=void 0,w!==void 0&&(document.documentElement.style.cursor=w),document.body.classList.remove("non-selectable"),s===!0){const S=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{S(),f()},50):S()}else f!==void 0&&f()}};if(t.event.detected===!0){t.event.isFirst!==!0&&v(n,t.event.mouse);const{payload:w,synthetic:f}=te(n,t,!1);w!==void 0&&(t.handler(w)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=w.position.left,t.event.lastY=w.position.top,t.event.lastDir=f===!0?void 0:w.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(n);return}const B=Math.abs(h),y=Math.abs(b);B!==y&&(t.direction.horizontal===!0&&B>y||t.direction.vertical===!0&&B<y||t.direction.up===!0&&B<y&&b<0||t.direction.down===!0&&B<y&&b>0||t.direction.left===!0&&B>y&&h<0||t.direction.right===!0&&B>y&&h>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,l){if(t.event!==void 0){if(Z(t,"temp"),L.is.firefox===!0&&J(e,!1),l===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(te(n===void 0?t.lastEvt:n,t).payload);const{payload:h}=te(n===void 0?t.lastEvt:n,t,!0),b=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(b):b()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const n=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";V(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}L.has.touch===!0&&V(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const r=e.__qtouchpan;r!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&r.end(),r.handler=o.value),r.direction=he(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),Z(o,"main"),Z(o,"temp"),L.is.firefox===!0&&J(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const be=150;var mt=oe({name:"QDrawer",inheritAttrs:!1,props:{...Re,...je,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Xe,"onLayout","miniState"],setup(e,{slots:o,emit:r,attrs:v}){const t=ge(),{proxy:{$q:n}}=t,l=Ye(e,n),{preventBodyScroll:h}=tt(),{registerTimeout:b,removeTimeout:s}=Ne(),u=Ue(Ke,ee);if(u===ee)return console.error("QDrawer needs to be child of QLayout"),ee;let B,y=null,w;const f=M(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),S=c(()=>e.mini===!0&&f.value!==!0),p=c(()=>S.value===!0?e.miniWidth:e.width),m=M(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),_=c(()=>e.persistent!==!0&&(f.value===!0||Be.value===!0));function O(a,i){if(pe(),a!==!1&&u.animate(),q(0),f.value===!0){const C=u.instances[W.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),A(1),u.isContainer.value!==!0&&h(!0)}else A(0),a!==!1&&N(!1);b(()=>{a!==!1&&N(!0),i!==!0&&r("show",a)},be)}function d(a,i){Ce(),a!==!1&&u.animate(),A(0),q(T.value*p.value),U(),i!==!0?b(()=>{r("hide",a)},be):s()}const{show:Q,hide:$}=Ge({showing:m,hideOnRouteChange:_,handleShow:O,handleHide:d}),{addToHistory:pe,removeFromHistory:Ce}=Je(m,$,_),z={belowBreakpoint:f,hide:$},D=c(()=>e.side==="right"),T=c(()=>(n.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),ie=M(0),E=M(!1),R=M(!1),le=M(p.value*T.value),W=c(()=>D.value===!0?"left":"right"),j=c(()=>m.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:p.value:0),X=c(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(D.value?"R":"L")!==-1||n.platform.is.ios===!0&&u.isContainer.value===!0),P=c(()=>e.overlay===!1&&m.value===!0&&f.value===!1),Be=c(()=>e.overlay===!0&&m.value===!0&&f.value===!1),qe=c(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&E.value===!1?" hidden":"")),ke=c(()=>({backgroundColor:`rgba(0,0,0,${ie.value*.4})`})),se=c(()=>D.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),Se=c(()=>D.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),De=c(()=>{const a={};return u.header.space===!0&&se.value===!1&&(X.value===!0?a.top=`${u.header.offset}px`:u.header.space===!0&&(a.top=`${u.header.size}px`)),u.footer.space===!0&&Se.value===!1&&(X.value===!0?a.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(a.bottom=`${u.footer.size}px`)),a}),Ae=c(()=>{const a={width:`${p.value}px`,transform:`translateX(${le.value}px)`};return f.value===!0?a:Object.assign(a,De.value)}),xe=c(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Me=c(()=>`q-drawer q-drawer--${e.side}`+(R.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${S.value===!0?"mini":"standard"}`+(X.value===!0||P.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(se.value===!0?" q-drawer--top-padding":""))),Oe=c(()=>{const a=n.lang.rtl===!0?e.side:W.value;return[[ae,$e,void 0,{[a]:!0,mouse:!0}]]}),Te=c(()=>{const a=n.lang.rtl===!0?W.value:e.side;return[[ae,de,void 0,{[a]:!0,mouse:!0}]]}),Ee=c(()=>{const a=n.lang.rtl===!0?W.value:e.side;return[[ae,de,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function Y(){Pe(f,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}g(f,a=>{a===!0?(B=m.value,m.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&B!==!1&&(m.value===!0?(q(0),A(0),U()):Q(!1))}),g(()=>e.side,(a,i)=>{u.instances[i]===z&&(u.instances[i]=void 0,u[i].space=!1,u[i].offset=0),u.instances[a]=z,u[a].size=p.value,u[a].space=P.value,u[a].offset=j.value}),g(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&Y()}),g(()=>e.behavior+e.breakpoint,Y),g(u.isContainer,a=>{m.value===!0&&h(a!==!0),a===!0&&Y()}),g(u.scrollbarWidth,()=>{q(m.value===!0?0:void 0)}),g(j,a=>{x("offset",a)}),g(P,a=>{r("onLayout",a),x("space",a)}),g(D,()=>{q()}),g(p,a=>{q(),K(e.miniToOverlay,a)}),g(()=>e.miniToOverlay,a=>{K(a,p.value)}),g(()=>n.lang.rtl,()=>{q()}),g(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(_e(),u.animate())}),g(S,a=>{r("miniState",a)});function q(a){a===void 0?fe(()=>{a=m.value===!0?0:p.value,q(T.value*a)}):(u.isContainer.value===!0&&D.value===!0&&(f.value===!0||Math.abs(a)===p.value)&&(a+=T.value*u.scrollbarWidth.value),le.value=a)}function A(a){ie.value=a}function N(a){const i=a===!0?"remove":u.isContainer.value!==!0?"add":"";i!==""&&document.body.classList[i]("q-body--drawer-toggle")}function _e(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),R.value=!0,y=setTimeout(()=>{y=null,R.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function $e(a){if(m.value!==!1)return;const i=p.value,C=F(a.distance.x,0,i);if(a.isFinal===!0){C>=Math.min(75,i)===!0?Q():(u.animate(),A(0),q(T.value*i)),E.value=!1;return}q((n.lang.rtl===!0?D.value!==!0:D.value)?Math.max(i-C,0):Math.min(0,C-i)),A(F(C/i,0,1)),a.isFirst===!0&&(E.value=!0)}function de(a){if(m.value!==!0)return;const i=p.value,C=a.direction===e.side,I=(n.lang.rtl===!0?C!==!0:C)?F(a.distance.x,0,i):0;if(a.isFinal===!0){Math.abs(I)<Math.min(75,i)===!0?(u.animate(),A(1),q(0)):$(),E.value=!1;return}q(T.value*I),A(F(1-I/i,0,1)),a.isFirst===!0&&(E.value=!0)}function U(){h(!1),N(!0)}function x(a,i){u.update(e.side,a,i)}function Pe(a,i){a.value!==i&&(a.value=i)}function K(a,i){x("size",a===!0?e.miniWidth:i)}return u.instances[e.side]=z,K(e.miniToOverlay,p.value),x("space",P.value),x("offset",j.value),e.showIfAbove===!0&&e.modelValue!==!0&&m.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),we(()=>{r("onLayout",P.value),r("miniState",S.value),B=e.showIfAbove===!0;const a=()=>{(m.value===!0?O:d)(!1,!0)};if(u.totalWidth.value!==0){fe(a);return}w=g(u.totalWidth,()=>{w(),w=void 0,m.value===!1&&e.showIfAbove===!0&&f.value===!1?Q(!1):a()})}),Ze(()=>{w!==void 0&&w(),y!==null&&(clearTimeout(y),y=null),m.value===!0&&U(),u.instances[e.side]===z&&(u.instances[e.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=[];f.value===!0&&(e.noSwipeOpen===!1&&a.push(et(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Oe.value)),a.push(ve("div",{ref:"backdrop",class:qe.value,style:ke.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&m.value===!0,()=>Ee.value)));const i=S.value===!0&&o.mini!==void 0,C=[k("div",{...v,key:""+i,class:[xe.value,v.class]},i===!0?o.mini():ue(o.default))];return e.elevated===!0&&m.value===!0&&C.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(ve("aside",{ref:"content",class:Me.value,style:Ae.value},C,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>Te.value)),k("div",{class:"q-drawer-container"},a)}}});export{ht as Q,ae as T,mt as a};
