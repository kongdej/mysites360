import{c as Ke,b as m,d as w,O as Tt,R as _t,r as E,w as me,S as Z,T as Bt,U as Ht,V as Rt,W as Lt,o as dt,g as ft,X as je,Y as vt,Z as mt,$ as St,a0 as Dt,a1 as Pt,a2 as at,a3 as Ce,a4 as Nt,a5 as $t,a6 as Ne,x as Kt,a7 as jt,a8 as fe,a9 as Qt,aa as Ut,ab as ve,Q as Wt,h as Xt}from"./index.20a83c22.js";import{a as Yt,b as Zt,c as Gt,d as Jt}from"./QItemLabel.5fea025f.js";import{n as it,Q as el}from"./format.6780ce5f.js";var cl=Ke({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const i=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:i.value},Tt(r.default))}});let Te=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Te=e.scrollLeft>=0,e.remove()}const $=1e3,tl=["start","center","end","start-force","center-force","end-force"],gt=Array.prototype.filter,ll=window.getComputedStyle(document.body).overflowAnchor===void 0?_t:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];gt.call(i,q=>q.dataset&&q.dataset.qVsAnchor!==void 0).forEach(q=>{delete q.dataset.qVsAnchor});const b=i[r];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function Se(e,r){return e+r}function $e(e,r,i,b,q,a,T,h){const S=e===window?document.scrollingElement||document.documentElement:e,_=q===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-T-h,scrollMaxSize:0,offsetStart:-T,offsetEnd:-h};if(q===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=S.scrollLeft,s.scrollViewSize+=S.clientWidth),s.scrollMaxSize=S.scrollWidth,a===!0&&(s.scrollStart=(Te===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=S.scrollTop,s.scrollViewSize+=S.clientHeight),s.scrollMaxSize=S.scrollHeight),i!==null)for(let y=i.previousElementSibling;y!==null;y=y.previousElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=y[_]);if(b!==null)for(let y=b.nextElementSibling;y!==null;y=y.nextElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=y[_]);if(r!==e){const y=S.getBoundingClientRect(),V=r.getBoundingClientRect();q===!0?(s.offsetStart+=V.left-y.left,s.offsetEnd-=V.width):(s.offsetStart+=V.top-y.top,s.offsetEnd-=V.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function rt(e,r,i,b){r==="end"&&(r=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(b===!0&&(r=(Te===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):i===!0?(b===!0&&(r=(Te===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function xe(e,r,i,b){if(i>=b)return 0;const q=r.length,a=Math.floor(i/$),T=Math.floor((b-1)/$)+1;let h=e.slice(a,T).reduce(Se,0);return i%$!==0&&(h-=r.slice(a*$,i).reduce(Se,0)),b%$!==0&&b!==q&&(h-=r.slice(b,T*$).reduce(Se,0)),h}const ht={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},dl=Object.keys(ht),st={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...ht};function ul({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:i,virtualScrollItemSizeComputed:b}){const q=ft(),{props:a,emit:T,proxy:h}=q,{$q:S}=h;let _,s,y,V=[],k;const O=E(0),N=E(0),H=E({}),U=E(null),W=E(null),R=E(null),z=E({from:0,to:0}),ke=m(()=>a.tableColspan!==void 0?a.tableColspan:100);b===void 0&&(b=m(()=>a.virtualScrollItemSize));const I=m(()=>b.value+";"+a.virtualScrollHorizontal),X=m(()=>I.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);me(X,()=>{K()}),me(I,G);function G(){ne(s,!0)}function ge(l){ne(l===void 0?s:l)}function J(l,o){const d=r();if(d==null||d.nodeType===8)return;const x=$e(d,i(),U.value,W.value,a.virtualScrollHorizontal,S.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);y!==x.scrollViewSize&&K(x.scrollViewSize),L(d,x,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,tl.indexOf(o)!==-1?o:s!==-1&&l>s?"end":"start")}function Ae(){const l=r();if(l==null||l.nodeType===8)return;const o=$e(l,i(),U.value,W.value,a.virtualScrollHorizontal,S.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),d=e.value-1,x=o.scrollMaxSize-o.offsetStart-o.offsetEnd-N.value;if(_===o.scrollStart)return;if(o.scrollMaxSize<=0){L(l,o,0,0);return}y!==o.scrollViewSize&&K(o.scrollViewSize),he(z.value.from);const M=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(k[d],o.scrollViewSize/2));if(M>0&&Math.ceil(o.scrollStart)>=M){L(l,o,d,o.scrollMaxSize-o.offsetEnd-V.reduce(Se,0));return}let g=0,v=o.scrollStart-o.offsetStart,F=v;if(v<=x&&v+o.scrollViewSize>=O.value)v-=O.value,g=z.value.from,F=v;else for(let f=0;v>=V[f]&&g<d;f++)v-=V[f],g+=$;for(;v>0&&g<d;)v-=k[g],v>-o.scrollViewSize?(g++,F=v):F=k[g]+v;L(l,o,g,F)}function L(l,o,d,x,M){const g=typeof M=="string"&&M.indexOf("-force")!==-1,v=g===!0?M.replace("-force",""):M,F=v!==void 0?v:"start";let f=Math.max(0,d-H.value[F]),D=f+H.value.total;D>e.value&&(D=e.value,f=Math.max(0,D-H.value.total)),_=o.scrollStart;const Y=f!==z.value.from||D!==z.value.to;if(Y===!1&&v===void 0){ye(d);return}const{activeElement:Ie}=document,j=R.value;Y===!0&&j!==null&&j!==Ie&&j.contains(Ie)===!0&&(j.addEventListener("focusout",ze),setTimeout(()=>{j!==null&&j.removeEventListener("focusout",ze)})),ll(j,d-f);const Oe=v!==void 0?k.slice(f,d).reduce(Se,0):0;if(Y===!0){const ee=D>=z.value.from&&f<=z.value.to?z.value.to:D;z.value={from:f,to:ee},O.value=xe(V,k,0,f),N.value=xe(V,k,D,e.value),requestAnimationFrame(()=>{z.value.to!==D&&_===o.scrollStart&&(z.value={from:z.value.from,to:D},N.value=xe(V,k,D,e.value))})}requestAnimationFrame(()=>{if(_!==o.scrollStart)return;Y===!0&&he(f);const ee=k.slice(f,d).reduce(Se,0),te=ee+o.offsetStart+O.value,Me=te+k[d];let be=te+x;if(v!==void 0){const Be=ee-Oe,Ve=o.scrollStart+Be;be=g!==!0&&Ve<te&&Me<Ve+o.scrollViewSize?Ve:v==="end"?Me-o.scrollViewSize:te-(v==="start"?0:Math.round((o.scrollViewSize-k[d])/2))}_=be,rt(l,be,a.virtualScrollHorizontal,S.lang.rtl),ye(d)})}function he(l){const o=R.value;if(o){const d=gt.call(o.children,f=>f.classList&&f.classList.contains("q-virtual-scroll--skip")===!1),x=d.length,M=a.virtualScrollHorizontal===!0?f=>f.getBoundingClientRect().width:f=>f.offsetHeight;let g=l,v,F;for(let f=0;f<x;){for(v=M(d[f]),f++;f<x&&d[f].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=M(d[f]),f++;F=v-k[g],F!==0&&(k[g]+=F,V[Math.floor(g/$)]+=F),g++}}}function ze(){R.value!==null&&R.value!==void 0&&R.value.focus()}function ne(l,o){const d=1*b.value;(o===!0||Array.isArray(k)===!1)&&(k=[]);const x=k.length;k.length=e.value;for(let g=e.value-1;g>=x;g--)k[g]=d;const M=Math.floor((e.value-1)/$);V=[];for(let g=0;g<=M;g++){let v=0;const F=Math.min((g+1)*$,e.value);for(let f=g*$;f<F;f++)v+=k[f];V.push(v)}s=-1,_=void 0,O.value=xe(V,k,0,z.value.from),N.value=xe(V,k,z.value.to,e.value),l>=0?(he(z.value.from),Z(()=>{J(l)})):oe()}function K(l){if(l===void 0&&typeof window!="undefined"){const v=r();v!=null&&v.nodeType!==8&&(l=$e(v,i(),U.value,W.value,a.virtualScrollHorizontal,S.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}y=l;const o=parseFloat(a.virtualScrollSliceRatioBefore)||0,d=parseFloat(a.virtualScrollSliceRatioAfter)||0,x=1+o+d,M=l===void 0||l<=0?1:Math.ceil(l/b.value),g=Math.max(1,M,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/x));H.value={total:Math.ceil(g*x),start:Math.ceil(g*o),center:Math.ceil(g*(.5+o)),end:Math.ceil(g*(1+o)),view:M}}function _e(l,o){const d=a.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+d]:b.value+"px"};return[l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"before",ref:U},[w("tr",[w("td",{style:{[d]:`${O.value}px`,...x},colspan:ke.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"before",ref:U,style:{[d]:`${O.value}px`,...x}}),w(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},o.flat()),l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[w("tr",[w("td",{style:{[d]:`${N.value}px`,...x},colspan:ke.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[d]:`${N.value}px`,...x}})]}function ye(l){s!==l&&(a.onVirtualScroll!==void 0&&T("virtualScroll",{index:l,from:z.value.from,to:z.value.to-1,direction:l<s?"decrease":"increase",ref:h}),s=l)}K();const oe=Bt(Ae,S.platform.is.ios===!0?120:35);Ht(()=>{K()});let we=!1;return Rt(()=>{we=!0}),Lt(()=>{if(we!==!0)return;const l=r();_!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?rt(l,_,a.virtualScrollHorizontal,S.lang.rtl):J(s)}),dt(()=>{oe.cancel()}),Object.assign(h,{scrollTo:J,reset:G,refresh:ge}),{virtualScrollSliceRange:z,virtualScrollSliceSizeComputed:H,setVirtualScrollSize:K,onVirtualScrollEvt:oe,localResetVirtualScroll:ne,padVirtualScroll:_e,scrollTo:J,reset:G,refresh:ge}}var nl=Ke({name:"QField",inheritAttrs:!1,props:{...je,tag:{type:String,default:"label"}},emits:vt,setup(){return mt(St({tagProp:!0}))}});const ct=e=>["add","add-unique","toggle"].includes(e),ol=".*+?^${}()|[]\\",al=Object.keys(je);var fl=Ke({name:"QSelect",inheritAttrs:!1,props:{...st,...Dt,...je,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ct},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:st.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...vt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:r,emit:i}){const{proxy:b}=ft(),{$q:q}=b,a=E(!1),T=E(!1),h=E(-1),S=E(""),_=E(!1),s=E(!1);let y=null,V=null,k,O,N,H=null,U,W,R,z;const ke=E(null),I=E(null),X=E(null),G=E(null),ge=E(null),J=Pt(e),Ae=jt(tt),L=m(()=>Array.isArray(e.options)?e.options.length:0),he=m(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ze,virtualScrollSliceSizeComputed:ne,localResetVirtualScroll:K,padVirtualScroll:_e,onVirtualScrollEvt:ye,scrollTo:oe,setVirtualScrollSize:we}=ul({virtualScrollLength:L,getVirtualScrollTarget:Vt,getVirtualScrollEl:Je,virtualScrollItemSizeComputed:he}),l=St(),o=m(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&k!==void 0?k:[],c=n.map(C=>bt(C,u));return e.modelValue===null&&t===!0?c.filter(C=>C!==null):c}return n}),d=m(()=>{const t={};return al.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),x=m(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),M=m(()=>at(o.value)),g=m(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),v=m(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),F=m(()=>L.value===0),f=m(()=>o.value.map(t=>P.value(t)).join(", ")),D=m(()=>e.displayValue!==void 0?e.displayValue:f.value),Y=m(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Ie=m(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),j=m(()=>l.focused.value===!0?e.tabindex:-1),Oe=m(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${h.value}`),t}),ee=m(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=m(()=>o.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:wt,toggleOption:le,tabindex:j.value}))),Me=m(()=>{if(L.value===0)return[];const{from:t,to:n}=ze.value;return e.options.slice(t,n).map((u,c)=>{const C=ae.value(u)===!0,p=Le(u)===!0,B=t+c,A={clickable:!0,active:p,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:C,tabindex:-1,dense:e.optionsDense,dark:x.value,role:"option","aria-selected":p===!0?"true":"false",id:`${l.targetUid.value}_${B}`,onClick:()=>{le(u)}};return C!==!0&&(h.value===B&&(A.focused=!0),q.platform.is.desktop===!0&&(A.onMousemove=()=>{a.value===!0&&ie(B)})),{index:B,opt:u,html:Y.value(u),label:P.value(u),selected:A.active,focused:A.focused,toggleOption:le,setOptionIndex:ie,itemProps:A}})}),be=m(()=>e.dropdownIcon!==void 0?e.dropdownIcon:q.iconSet.arrow.dropdown),Be=m(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=m(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),Q=m(()=>Re(e.optionValue,"value")),P=m(()=>Re(e.optionLabel,"label")),ae=m(()=>Re(e.optionDisable,"disable")),Fe=m(()=>o.value.map(t=>Q.value(t))),yt=m(()=>{const t={onInput:tt,onChange:Ae,onKeydown:Ge,onKeyup:Ye,onKeypress:Ze,onFocus:We,onClick(n){O===!0&&fe(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Ae,t});me(o,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(T.value!==!0&&a.value!==!0||M.value!==!0)&&(N!==!0&&de(),(T.value===!0||a.value===!0)&&re(""))},{immediate:!0}),me(()=>e.fillInput,de),me(a,De),me(L,Et);function Qe(t){return e.emitValue===!0?Q.value(t):t}function He(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const n=e.modelValue.slice();i("remove",{index:t,value:n.splice(t,1)[0]}),i("update:modelValue",n)}else i("update:modelValue",null)}function wt(t){He(t),l.focus()}function Ue(t,n){const u=Qe(t);if(e.multiple!==!0){e.fillInput===!0&&pe(P.value(t),!0,!0),i("update:modelValue",u);return}if(o.value.length===0){i("add",{index:0,value:u}),i("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const c=e.modelValue.slice();i("add",{index:c.length,value:u}),c.push(u),i("update:modelValue",c)}function le(t,n){if(l.editable.value!==!0||t===void 0||ae.value(t)===!0)return;const u=Q.value(t);if(e.multiple!==!0){n!==!0&&(pe(e.fillInput===!0?P.value(t):"",!0,!0),ue()),I.value!==null&&I.value.focus(),(o.value.length===0||Ce(Q.value(o.value[0]),u)!==!0)&&i("update:modelValue",e.emitValue===!0?u:t);return}if((O!==!0||_.value===!0)&&l.focus(),We(),o.value.length===0){const p=e.emitValue===!0?u:t;i("add",{index:0,value:p}),i("update:modelValue",e.multiple===!0?[p]:p);return}const c=e.modelValue.slice(),C=Fe.value.findIndex(p=>Ce(p,u));if(C!==-1)i("remove",{index:C,value:c.splice(C,1)[0]});else{if(e.maxValues!==void 0&&c.length>=e.maxValues)return;const p=e.emitValue===!0?u:t;i("add",{index:c.length,value:p}),c.push(p)}i("update:modelValue",c)}function ie(t){if(q.platform.is.desktop!==!0)return;const n=t!==-1&&t<L.value?t:-1;h.value!==n&&(h.value=n)}function qe(t=1,n){if(a.value===!0){let u=h.value;do u=it(u+t,-1,L.value-1);while(u!==-1&&u!==h.value&&ae.value(e.options[u])===!0);h.value!==u&&(ie(u),oe(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Ee(u>=0?P.value(e.options[u]):U,!0))}}function bt(t,n){const u=c=>Ce(Q.value(c),t);return e.options.find(u)||n.find(u)||t}function Re(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:c=>c!==null&&typeof c=="object"&&u in c?c[u]:c}function Le(t){const n=Q.value(t);return Fe.value.find(u=>Ce(u,n))!==void 0}function We(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===f.value)&&I.value.select()}function Xe(t){Qt(t,27)===!0&&a.value===!0&&(fe(t),ue(),de()),i("keyup",t)}function Ye(t){const{value:n}=t.target;if(t.keyCode!==void 0){Xe(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),de(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),c=p=>{const B=e.options.find(A=>p.value(A).toLocaleLowerCase()===u);return B===void 0?!1:(o.value.indexOf(B)===-1?le(B):ue(),!0)},C=p=>{c(Q)!==!0&&(c(P)===!0||p===!0||re(n,!0,()=>C(!0)))};C()}else l.clearValue(t)}function Ze(t){i("keypress",t)}function Ge(t){if(i("keydown",t),Ut(t)===!0)return;const n=S.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(h.value!==-1||n===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&a.value===!1){ve(t),ce();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&S.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof S.value!="string"||S.value.length===0)&&(ve(t),h.value=-1,qe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ne.value!==void 0&&(ve(t),h.value=Math.max(-1,Math.min(L.value,h.value+(t.keyCode===33?-1:1)*ne.value.view)),qe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ve(t),qe(t.keyCode===38?-1:1,e.multiple));const c=L.value;if((R===void 0||z<Date.now())&&(R=""),c>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){a.value!==!0&&ce(t);const C=t.key.toLocaleLowerCase(),p=R.length===1&&R[0]===C;z=Date.now()+1500,p===!1&&(ve(t),R+=C);const B=new RegExp("^"+R.split("").map(Pe=>ol.indexOf(Pe)!==-1?"\\"+Pe:Pe).join(".*"),"i");let A=h.value;if(p===!0||A<0||B.test(P.value(e.options[A]))!==!0)do A=it(A+1,-1,c-1);while(A!==h.value&&(ae.value(e.options[A])===!0||B.test(P.value(e.options[A]))!==!0));h.value!==A&&Z(()=>{ie(A),oe(A),A>=0&&e.useInput===!0&&e.fillInput===!0&&Ee(P.value(e.options[A]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ve(t),h.value!==-1&&h.value<c){le(e.options[h.value]);return}if(n===!0){const C=(p,B)=>{if(B){if(ct(B)!==!0)return}else B=e.newValueMode;if(pe("",e.multiple!==!0,!0),p==null)return;(B==="toggle"?le:Ue)(p,B==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),ue())};if(e.onNewValue!==void 0?i("newValue",S.value,C):C(S.value),e.multiple!==!0)return}a.value===!0?se():l.innerLoading.value!==!0&&ce()}}function Je(){return O===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Vt(){return Je()}function pt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?te.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?te.value.map((t,n)=>w(Yt,{key:"option-"+n,removable:l.editable.value===!0&&ae.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:j.value,onRemove(){t.removeAtIndex(n)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:P.value(t.opt)}))):[w("span",{[Ie.value===!0?"innerHTML":"textContent"]:D.value})]}function et(){if(F.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:S.value}):void 0;const t=r.option!==void 0?r.option:u=>w(Jt,{key:u.index,...u.itemProps},()=>w(Zt,()=>w(Gt,()=>w("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=_e("div",Me.value.map(t));return r["before-options"]!==void 0&&(n=r["before-options"]().concat(n)),Xt(r["after-options"],n)}function Ct(t,n){const u=n===!0?{...Oe.value,...l.splitAttrs.attributes.value}:void 0,c={ref:n===!0?I:void 0,key:"i_t",class:g.value,style:e.inputStyle,value:S.value!==void 0?S.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&O===!0&&(Array.isArray(c.class)===!0?c.class=[...c.class,"no-pointer-events"]:c.class+=" no-pointer-events"),w("input",c)}function tt(t){y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ee(t.target.value||""),N=!0,U=S.value,l.focused.value!==!0&&(O!==!0||_.value===!0)&&l.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,re(S.value)},e.inputDebounce)))}function Ee(t,n){S.value!==t&&(S.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?i("inputValue",t):V=setTimeout(()=>{V=null,i("inputValue",t)},e.inputDebounce))}function pe(t,n,u){N=u!==!0,e.useInput===!0&&(Ee(t,!0),(n===!0||u!==!0)&&(U=t),n!==!0&&re(t))}function re(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?i("filterAbort"):(l.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&N!==!0&&t===P.value(o.value[0])&&(t="");const c=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);H!==null&&clearTimeout(H),H=c,i("filter",t,(C,p)=>{(n===!0||l.focused.value===!0)&&H===c&&(clearTimeout(H),typeof C=="function"&&C(),s.value=!1,Z(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?a.value===!0&&ue():a.value===!0?De(!0):a.value=!0),typeof p=="function"&&Z(()=>{p(b)}),typeof u=="function"&&Z(()=>{u(b)})}))},()=>{l.focused.value===!0&&H===c&&(clearTimeout(H),l.innerLoading.value=!1,s.value=!1),a.value===!0&&(a.value=!1)})}function xt(){return w(el,{ref:X,class:v.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&F.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:x.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Be.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:ut,onBeforeHide:kt,onShow:At},et)}function kt(t){nt(t),se()}function At(){we()}function zt(t){fe(t),I.value!==null&&I.value.focus(),_.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function It(t){fe(t),Z(()=>{_.value=!1})}function Ot(){const t=[w(nl,{class:`col-auto ${l.fieldClass.value}`,...d.value,for:l.targetUid.value,dark:x.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:S.value.length!==0,...l.splitAttrs.listeners.value,onFocus:zt,onBlur:It},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(w("div",{ref:ge,class:v.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Ne,onScrollPassive:ye},et())),w(Wt,{ref:G,modelValue:T.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ut,onBeforeHide:Mt,onHide:Ft,onShow:qt},()=>w("div",{class:"q-select__dialog"+(x.value===!0?" q-select__dialog--dark q-dark":"")+(_.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){nt(t),G.value!==null&&G.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ft(t){ue(),l.focused.value===!1&&i("blur",t),de()}function qt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),we()}function se(){T.value!==!0&&(h.value=-1,a.value===!0&&(a.value=!1),l.focused.value===!1&&(H!==null&&(clearTimeout(H),H=null),l.innerLoading.value===!0&&(i("filterAbort"),l.innerLoading.value=!1,s.value=!1)))}function ce(t){l.editable.value===!0&&(O===!0?(l.onControlFocusin(t),T.value=!0,Z(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?re(S.value):(F.value!==!0||r["no-option"]!==void 0)&&(a.value=!0))}function ue(){T.value=!1,se()}function de(){e.useInput===!0&&pe(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&P.value(o.value[0])||"",!0,!0)}function De(t){let n=-1;if(t===!0){if(o.value.length!==0){const u=Q.value(o.value[0]);n=e.options.findIndex(c=>Ce(Q.value(c),u))}K(n)}ie(n)}function Et(t,n){a.value===!0&&l.innerLoading.value===!1&&(K(-1,!0),Z(()=>{a.value===!0&&l.innerLoading.value===!1&&(t>n?K():De(!0))}))}function lt(){T.value===!1&&X.value!==null&&X.value.updatePosition()}function ut(t){t!==void 0&&fe(t),i("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function nt(t){t!==void 0&&fe(t),i("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ot(){O=q.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||F.value===!1:!0),W=q.platform.is.ios===!0&&O===!0&&e.useInput===!0?"fade":e.transitionShow}return Nt(ot),$t(lt),ot(),dt(()=>{y!==null&&clearTimeout(y),V!==null&&clearTimeout(V)}),Object.assign(b,{showPopup:ce,hidePopup:ue,removeAtIndex:He,add:Ue,toggleOption:le,getOptionIndex:()=>h.value,setOptionIndex:ie,moveOptionSelection:qe,filter:re,updateMenuPosition:lt,updateInputValue:pe,isOptionSelected:Le,getEmittingOptionValue:Qe,isOptionDisabled:(...t)=>ae.value.apply(null,t)===!0,getOptionValue:(...t)=>Q.value.apply(null,t),getOptionLabel:(...t)=>P.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:m(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:ke,targetRef:I,hasValue:M,showPopup:ce,floatingLabel:m(()=>e.hideSelected!==!0&&M.value===!0||typeof S.value=="number"||S.value.length!==0||at(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(T.value===!0||F.value!==!0||r["no-option"]!==void 0))return O===!0?Ot():xt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{de(),se()})},onClick(t){if(Ne(t),O!==!0&&a.value===!0){se(),I.value!==null&&I.value.focus();return}ce(t)}},getControl:t=>{const n=pt(),u=t===!0||T.value!==!0||O!==!0;if(e.useInput===!0)n.push(Ct(t,u));else if(l.editable.value===!0){const C=u===!0?Oe.value:void 0;n.push(w("input",{ref:u===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:D.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...C,onKeydown:Ge,onKeyup:Xe,onKeypress:Ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ye}))}if(J.value!==void 0&&e.disable!==!0&&Fe.value.length!==0){const C=Fe.value.map(p=>w("option",{value:p,selected:!0}));n.push(w("select",{class:"hidden",name:J.value,multiple:e.multiple},C))}const c=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...c,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[w(Kt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:be.value})]:null}),mt(l)}});export{cl as Q,fl as a,ul as b,dl as c,Te as r,st as u};
