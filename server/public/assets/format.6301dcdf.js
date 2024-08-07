import{c as _,R as I,S as de,T as L,U as ve,b as u,V as fe,g as K,d,x as F,W as me,X as he,Y as M,Z as be,$ as ge,r as T,a0 as qe,a1 as ke,O as A,a2 as ye,a3 as Se,a4 as xe,a5 as Be,a6 as Ce,a7 as _e,a8 as Te,a9 as Pe,aa as we,w as V,ab as Oe,ac as Re,ad as Ee,ae as U,af as Fe,ag as Ie,ah as Le,o as Ke,ai as Me,aj as Ae,ak as Qe}from"./index.91025aa1.js";import{u as $e,v as G,a as De,b as je,c as ze,p as X,r as Y,s as We,d as He}from"./position-engine.8815c850.js";const Ne={xs:8,sm:10,md:14,lg:20,xl:24};var Ge=_({name:"QChip",props:{...I,...de,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:a}){const{proxy:{$q:o}}=K(),s=L(e,o),m=ve(e,Ne),h=u(()=>e.selected===!0||e.icon!==void 0),q=u(()=>e.selected===!0?e.iconSelected||o.iconSet.chip.selected:e.icon),k=u(()=>e.iconRemove||o.iconSet.chip.remove),b=u(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),r=u(()=>{const n=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(n?` text-${n} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(b.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(s.value===!0?" q-chip--dark q-dark":"")}),c=u(()=>{const n=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},g={...n,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||o.lang.label.remove};return{chip:n,remove:g}});function v(n){n.keyCode===13&&f(n)}function f(n){e.disable||(a("update:selected",!e.selected),a("click",n))}function y(n){(n.keyCode===void 0||n.keyCode===13)&&(M(n),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function S(){const n=[];b.value===!0&&n.push(d("div",{class:"q-focus-helper"})),h.value===!0&&n.push(d(F,{class:"q-chip__icon q-chip__icon--left",name:q.value}));const g=e.label!==void 0?[d("div",{class:"ellipsis"},[e.label])]:void 0;return n.push(d("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},me(l.default,g))),e.iconRight&&n.push(d(F,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&n.push(d(F,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:k.value,...c.value.remove,onClick:y,onKeyup:y})),n}return()=>{if(e.modelValue===!1)return;const n={class:r.value,style:m.value};return b.value===!0&&Object.assign(n,c.value.chip,{onClick:f,onKeyup:v}),fe("div",n,S(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[he,e.ripple]])}}}),Xe=_({name:"QItem",props:{...I,...be,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:a}){const{proxy:{$q:o}}=K(),s=L(e,o),{hasLink:m,linkAttrs:h,linkClass:q,linkTag:k,navigateOnClick:b}=ge(),r=T(null),c=T(null),v=u(()=>e.clickable===!0||m.value===!0||e.tag==="label"),f=u(()=>e.disable!==!0&&v.value===!0),y=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?q.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=u(()=>{if(e.insetLevel===void 0)return null;const i=o.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+e.insetLevel*56+"px"}});function n(i){f.value===!0&&(c.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),b(i))}function g(i){if(f.value===!0&&qe(i,[13,32])===!0){M(i),i.qKeyEvent=!0;const x=new MouseEvent("click",i);x.qKeyEvent=!0,r.value.dispatchEvent(x)}a("keyup",i)}function P(){const i=ke(l.default,[]);return f.value===!0&&i.unshift(d("div",{class:"q-focus-helper",tabindex:-1,ref:c})),i}return()=>{const i={ref:r,class:y.value,style:S.value,role:"listitem",onClick:n,onKeyup:g};return f.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,h.value)):v.value===!0&&(i["aria-disabled"]="true"),d(k.value,i,P())}}}),Ye=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const a=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>d("div",{class:a.value},A(l.default))}}),Ze=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const a=u(()=>parseInt(e.lines,10)),o=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),s=u(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>d("div",{style:s.value,class:o.value},A(l.default))}}),Je=_({name:"QMenu",inheritAttrs:!1,props:{...$e,...ye,...I,...Se,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:G},self:{type:String,validator:G},offset:{type:Array,validator:De},scrollTarget:xe,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Be,"click","escapeKey"],setup(e,{slots:l,emit:a,attrs:o}){let s=null,m,h,q;const k=K(),{proxy:b}=k,{$q:r}=b,c=T(null),v=T(!1),f=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),y=L(e,r),{registerTick:S,removeTick:n}=Ce(),{registerTimeout:g}=_e(),{transitionProps:P,transitionStyle:i}=Te(e),{localScrollTarget:x,changeScrollEvent:J,unconfigureScrollTarget:p}=je(e,H),{anchorEl:B,canShow:ee}=ze({showing:v}),{hide:Q}=Pe({showing:v,canShow:ee,handleShow:oe,handleHide:ie,hideOnRouteChange:f,processOnMount:!0}),{showPortal:$,hidePortal:D,renderPortal:te}=we(k,c,se,"menu"),w={anchorEl:B,innerRef:c,onClickOutside(t){if(e.persistent!==!0&&v.value===!0)return Q(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&M(t),!0}},j=u(()=>X(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),ae=u(()=>e.cover===!0?j.value:X(e.self||"top start",r.lang.rtl)),ne=u(()=>(e.square===!0?" q-menu--square":"")+(y.value===!0?" q-menu--dark q-dark":"")),le=u(()=>e.autoClose===!0?{onClick:ue}:{}),z=u(()=>v.value===!0&&e.persistent!==!0);V(z,t=>{t===!0?(Me(R),He(w)):(U(R),Y(w))});function O(){Ae(()=>{let t=c.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function oe(t){if(s=e.noRefocus===!1?document.activeElement:null,Oe(N),$(),H(),m=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const E=Re(t);if(E.left!==void 0){const{top:ce,left:re}=B.value.getBoundingClientRect();m={left:E.left-re,top:E.top-ce}}}h===void 0&&(h=V(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,C)),e.noFocus!==!0&&document.activeElement.blur(),S(()=>{C(),e.noFocus!==!0&&O()}),g(()=>{r.platform.is.ios===!0&&(q=e.autoClose,c.value.click()),C(),$(!0),a("show",t)},e.transitionDuration)}function ie(t){n(),D(),W(!0),s!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?s.closest('[tabindex]:not([tabindex^="-"])'):void 0)||s).focus(),s=null),g(()=>{D(!0),a("hide",t)},e.transitionDuration)}function W(t){m=void 0,h!==void 0&&(h(),h=void 0),(t===!0||v.value===!0)&&(Ee(N),p(),Y(w),U(R)),t!==!0&&(s=null)}function H(){(B.value!==null||e.scrollTarget!==void 0)&&(x.value=Fe(B.value,e.scrollTarget),J(x.value,C))}function ue(t){q!==!0?(Ie(b,t),a("click",t)):q=!1}function N(t){z.value===!0&&e.noFocus!==!0&&Qe(c.value,t.target)!==!0&&O()}function R(t){a("escapeKey"),Q(t)}function C(){We({targetEl:c.value,offset:e.offset,anchorEl:B.value,anchorOrigin:j.value,selfOrigin:ae.value,absoluteOffset:m,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function se(){return d(Le,P.value,()=>v.value===!0?d("div",{role:"menu",...o,ref:c,tabindex:-1,class:["q-menu q-position-engine scroll"+ne.value,o.class],style:[o.style,i.value],...le.value},A(l.default)):null)}return Ke(W),Object.assign(b,{focus:O,updatePosition:C}),te}});const Z=["B","KB","MB","GB","TB","PB"];function pe(e,l=1){let a=0;for(;parseInt(e,10)>=1024&&a<Z.length-1;)e/=1024,++a;return`${e.toFixed(l)}${Z[a]}`}function et(e,l,a){return a<=l?l:Math.min(a,Math.max(l,e))}function tt(e,l,a){if(a<=l)return l;const o=a-l+1;let s=l+(e-l)%o;return s<l&&(s=o+s),s===0?0:s}function at(e,l=2,a="0"){if(e==null)return e;const o=""+e;return o.length>=l?o:new Array(l-o.length+1).join(a)+o}export{Ge as Q,Je as a,Ye as b,Ze as c,Xe as d,et as e,pe as h,tt as n,at as p};
