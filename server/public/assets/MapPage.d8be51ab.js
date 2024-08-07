import{i as ot,e as ze,br as at,r,b as V,o as lt,k as nt,b4 as st,X as ut,d as E,Y as Xe,a0 as dt,aU as ct,x as Ae,h as ft,g as Ke,aO as vt,bs as mt,c as it,a6 as Ee,a7 as Ge,w as be,aB as pt,ap as gt,ao as ht,O as bt,f as yt,u as kt,j as Ct,t as le,_ as wt,n as g,p as F,q as s,s as u,C as R,Q as Ne,F as ge,bk as He,E as Se,A as O,D as z,H as We,y as A,z as U,B as q,I as De,J as _e,G as Pt,K as Je,L as fe,M as Tt,N as Mt}from"./index.49655061.js";import{Q as qt}from"./QScrollObserver.d5e31836.js";import{r as $t}from"./QSelect.d704b6dc.js";import{Q as Ye}from"./QSpace.7e063dbb.js";import{Q as Fe,a as It}from"./QList.c50b3e05.js";import{Q as St}from"./QHeader.56c2fbe5.js";import{Q as he}from"./QToolbarTitle.76b74483.js";import{Q as Re}from"./QImg.5bb31884.js";import{Q as Dt}from"./QTable.bb319420.js";import{c as _t,b as Ze,d as Ft}from"./format.e0ab4e45.js";import{Q as Rt,a as At}from"./QLayout.b394bec6.js";import{Q as et}from"./QUploader.c5308a4a.js";import{Q as tt}from"./QForm.5683a096.js";import{C as Lt}from"./ClosePopup.670bca3a.js";import{u as Qt}from"./use-quasar.db328b8d.js";import{m as Vt}from"./index.58290dd4.js";import"./use-ratio.15b68297.js";import"./position-engine.42b8dcdb.js";import"./use-file.e5d12371.js";let xt=0;const jt=["click","keydown"],Bt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${xt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ut(e,d,x,h){const p=ot(at,ze);if(p===ze)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ze;const{proxy:ne}=Ke(),l=r(null),I=r(null),P=r(null),T=V(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),y=V(()=>p.currentModel.value===e.name),J=V(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(y.value===!0?" q-tab--active"+(p.tabProps.value.activeClass?" "+p.tabProps.value.activeClass:"")+(p.tabProps.value.activeColor?` text-${p.tabProps.value.activeColor}`:"")+(p.tabProps.value.activeBgColor?` bg-${p.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&p.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||p.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(h!==void 0?h.linkClass.value:"")),j=V(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(p.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),B=V(()=>e.disable===!0||p.hasFocus.value===!0||y.value===!1&&p.hasActiveTab.value===!0?-1:e.tabindex||0);function N(c,C){if(C!==!0&&l.value!==null&&l.value.focus(),e.disable===!0){h!==void 0&&h.hasRouterLink.value===!0&&Xe(c);return}if(h===void 0){p.updateModel({name:e.name}),x("click",c);return}if(h.hasRouterLink.value===!0){const M=(S={})=>{let D;const L=S.to===void 0||vt(S.to,e.to)===!0?p.avoidRouteWatcher=mt():null;return h.navigateToRouterLink(c,{...S,returnRouterError:!0}).catch(Q=>{D=Q}).then(Q=>{if(L===p.avoidRouteWatcher&&(p.avoidRouteWatcher=!1,D===void 0&&(Q===void 0||Q.message!==void 0&&Q.message.startsWith("Avoided redundant navigation")===!0)&&p.updateModel({name:e.name})),S.returnRouterError===!0)return D!==void 0?Promise.reject(D):Q})};x("click",c,M),c.defaultPrevented!==!0&&M();return}x("click",c)}function Y(c){dt(c,[13,32])?N(c,!0):ct(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&p.onKbdNavigate(c.keyCode,ne.$el)===!0&&Xe(c),x("keydown",c)}function se(){const c=p.tabProps.value.narrowIndicator,C=[],M=E("div",{ref:P,class:["q-tab__indicator",p.tabProps.value.indicatorClass]});e.icon!==void 0&&C.push(E(Ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&C.push(E("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&C.push(e.alertIcon!==void 0?E(Ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):E("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&C.push(M);const S=[E("div",{class:"q-focus-helper",tabindex:-1,ref:l}),E("div",{class:j.value},ft(d.default,C))];return c===!1&&S.push(M),S}const ee={name:V(()=>e.name),rootRef:I,tabIndicatorRef:P,routeData:h};lt(()=>{p.unregisterTab(ee)}),nt(()=>{p.registerTab(ee)});function re(c,C){const M={ref:I,class:J.value,tabindex:B.value,role:"tab","aria-selected":y.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:N,onKeydown:Y,...C};return st(E(c,M,se()),[[ut,T.value]])}return{renderTab:re,$tabs:p}}var Ot=it({name:"QTab",props:Bt,emits:jt,setup(e,{slots:d,emit:x}){const{renderTab:h}=Ut(e,d,x);return()=>h("div")}});function zt(e,d,x){const h=x===!0?["left","right"]:["top","bottom"];return`absolute-${d===!0?h[0]:h[1]}${e?` text-${e}`:""}`}const Et=["left","center","right","justify"];var Nt=it({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Et.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:d,emit:x}){const{proxy:h}=Ke(),{$q:p}=h,{registerTick:ne}=Ee(),{registerTick:l}=Ee(),{registerTick:I}=Ee(),{registerTimeout:P,removeTimeout:T}=Ge(),{registerTimeout:y,removeTimeout:J}=Ge(),j=r(null),B=r(null),N=r(e.modelValue),Y=r(!1),se=r(!0),ee=r(!1),re=r(!1),c=[],C=r(0),M=r(!1);let S=null,D=null,L;const Q=V(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:zt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ve=V(()=>{const o=C.value,n=N.value;for(let i=0;i<o;i++)if(c[i].name.value===n)return!0;return!1}),f=V(()=>`q-tabs__content--align-${Y.value===!0?"left":re.value===!0?"justify":e.align}`),ye=V(()=>`q-tabs row no-wrap items-center q-tabs--${Y.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),ue=V(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+f.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),de=V(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=V(()=>e.vertical!==!0&&p.lang.rtl===!0),H=V(()=>$t===!1&&K.value===!0);be(K,Z),be(()=>e.modelValue,o=>{me({name:o,setCurrent:!0,skipEmit:!0})}),be(()=>e.outsideArrows,te);function me({name:o,setCurrent:n,skipEmit:i}){N.value!==o&&(i!==!0&&e["onUpdate:modelValue"]!==void 0&&x("update:modelValue",o),(n===!0||e["onUpdate:modelValue"]===void 0)&&(Le(N.value,o),N.value=o))}function te(){ne(()=>{ke({width:j.value.offsetWidth,height:j.value.offsetHeight})})}function ke(o){if(de.value===void 0||B.value===null)return;const n=o[de.value.container],i=Math.min(B.value[de.value.scroll],Array.prototype.reduce.call(B.value.children,(w,b)=>w+(b[de.value.content]||0),0)),k=n>0&&i>n;Y.value=k,k===!0&&l(Z),re.value=n<parseInt(e.breakpoint,10)}function Le(o,n){const i=o!=null&&o!==""?c.find(w=>w.name.value===o):null,k=n!=null&&n!==""?c.find(w=>w.name.value===n):null;if(i&&k){const w=i.tabIndicatorRef.value,b=k.tabIndicatorRef.value;S!==null&&(clearTimeout(S),S=null),w.style.transition="none",w.style.transform="none",b.style.transition="none",b.style.transform="none";const m=w.getBoundingClientRect(),_=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${m.top-_.top}px,0) scale3d(1,${_.height?m.height/_.height:1},1)`:`translate3d(${m.left-_.left}px,0,0) scale3d(${_.width?m.width/_.width:1},1,1)`,I(()=>{S=setTimeout(()=>{S=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}k&&Y.value===!0&&oe(k.rootRef.value)}function oe(o){const{left:n,width:i,top:k,height:w}=B.value.getBoundingClientRect(),b=o.getBoundingClientRect();let m=e.vertical===!0?b.top-k:b.left-n;if(m<0){B.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(m),Z();return}m+=e.vertical===!0?b.height-w:b.width-i,m>0&&(B.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(m),Z())}function Z(){const o=B.value;if(o===null)return;const n=o.getBoundingClientRect(),i=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);K.value===!0?(se.value=Math.ceil(i+n.width)<o.scrollWidth-1,ee.value=i>0):(se.value=i>0,ee.value=e.vertical===!0?Math.ceil(i+n.height)<o.scrollHeight:Math.ceil(i+n.width)<o.scrollWidth)}function ae(o){D!==null&&clearInterval(D),D=setInterval(()=>{Ve(o)===!0&&X()},5)}function Ce(){ae(H.value===!0?Number.MAX_SAFE_INTEGER:0)}function we(){ae(H.value===!0?0:Number.MAX_SAFE_INTEGER)}function X(){D!==null&&(clearInterval(D),D=null)}function Qe(o,n){const i=Array.prototype.filter.call(B.value.children,_=>_===n||_.matches&&_.matches(".q-tab.q-focusable")===!0),k=i.length;if(k===0)return;if(o===36)return oe(i[0]),i[0].focus(),!0;if(o===35)return oe(i[k-1]),i[k-1].focus(),!0;const w=o===(e.vertical===!0?38:37),b=o===(e.vertical===!0?40:39),m=w===!0?-1:b===!0?1:void 0;if(m!==void 0){const _=K.value===!0?-1:1,t=i.indexOf(n)+m*_;return t>=0&&t<k&&(oe(i[t]),i[t].focus({preventScroll:!0})),!0}}const Pe=V(()=>H.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,n)=>{o.scrollLeft=-n}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,n)=>{o.scrollTop=n}}:{get:o=>o.scrollLeft,set:(o,n)=>{o.scrollLeft=n}});function Ve(o){const n=B.value,{get:i,set:k}=Pe.value;let w=!1,b=i(n);const m=o<b?-1:1;return b+=m*5,b<0?(w=!0,b=0):(m===-1&&b<=o||m===1&&b>=o)&&(w=!0,b=o),k(n,b),Z(),w}function Te(o,n){for(const i in o)if(o[i]!==n[i])return!1;return!0}function xe(){let o=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const i=c.filter(m=>m.routeData!==void 0&&m.routeData.hasRouterLink.value===!0),{hash:k,query:w}=h.$route,b=Object.keys(w).length;for(const m of i){const _=m.routeData.exact.value===!0;if(m.routeData[_===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:t,query:a,matched:v,href:W}=m.routeData.resolvedLink.value,G=Object.keys(a).length;if(_===!0){if(t!==k||G!==b||Te(w,a)===!1)continue;o=m.name.value;break}if(t!==""&&t!==k||G!==0&&Te(a,w)===!1)continue;const $={matchedLen:v.length,queryDiff:b-G,hrefLen:W.length-t.length};if($.matchedLen>n.matchedLen){o=m.name.value,n=$;continue}else if($.matchedLen!==n.matchedLen)continue;if($.queryDiff<n.queryDiff)o=m.name.value,n=$;else if($.queryDiff!==n.queryDiff)continue;$.hrefLen>n.hrefLen&&(o=m.name.value,n=$)}o===null&&c.some(m=>m.routeData===void 0&&m.name.value===N.value)===!0||me({name:o,setCurrent:!0})}function je(o){if(T(),M.value!==!0&&j.value!==null&&o.target&&typeof o.target.closest=="function"){const n=o.target.closest(".q-tab");n&&j.value.contains(n)===!0&&(M.value=!0,Y.value===!0&&oe(n))}}function Be(){P(()=>{M.value=!1},30)}function ce(){qe.avoidRouteWatcher===!1?y(xe):J()}function Me(){if(L===void 0){const o=be(()=>h.$route.fullPath,ce);L=()=>{o(),L=void 0}}}function Ue(o){c.push(o),C.value++,te(),o.routeData===void 0||h.$route===void 0?y(()=>{if(Y.value===!0){const n=N.value,i=n!=null&&n!==""?c.find(k=>k.name.value===n):null;i&&oe(i.rootRef.value)}}):(Me(),o.routeData.hasRouterLink.value===!0&&ce())}function Oe(o){c.splice(c.indexOf(o),1),C.value--,te(),L!==void 0&&o.routeData!==void 0&&(c.every(n=>n.routeData===void 0)===!0&&L(),ce())}const qe={currentModel:N,tabProps:Q,hasFocus:M,hasActiveTab:ve,registerTab:Ue,unregisterTab:Oe,verifyRouteModel:ce,updateModel:me,onKbdNavigate:Qe,avoidRouteWatcher:!1};pt(at,qe);function $e(){S!==null&&clearTimeout(S),X(),L!==void 0&&L()}let Ie;return lt($e),gt(()=>{Ie=L!==void 0,$e()}),ht(()=>{Ie===!0&&Me(),te()}),()=>E("div",{ref:j,class:ye.value,role:"tablist",onFocusin:je,onFocusout:Be},[E(qt,{onResize:ke}),E("div",{ref:B,class:ue.value,onScroll:Z},bt(d.default)),E(Ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(se.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||p.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X}),E(Ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(ee.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||p.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:we,onTouchstartPassive:we,onMouseupPassive:X,onMouseleavePassive:X,onTouchendPassive:X})])}}),Ht=yt({name:"MapPage",setup(){const e=ot("store"),d=kt(),x=Ct(),h=r(d.params.site),p=r(e.state.token!=""),ne=Ke(),l=r(ne.appContext.config.globalProperties.$imgUrl),I=ne.appContext.config.globalProperties.$baseUrl,P=Qt(),T=r([]),y=r(),J=r(!1),j=r(!1),B=r(),N=r(),Y=r(),se=r(""),ee=r([]),re=r(0),c=r(0),C=r([]),M=r({code:"",name:""}),S=r(""),D=r(""),L=r(),Q=r(),ve=r(!1),f=r(),ye=r(!1),ue=r(),de=r([{name:"id",label:"Point Id",field:"id",align:"left",style:"width:50px;"},{name:"map",label:"Map",field:"map",style:"width:50px;"},{name:"no",label:"Point No",field:"no",align:"left",style:"width:50px;",sortable:!0},{name:"name",label:"Point Name",field:"name",align:"left"},{name:"x",label:"Position X",field:"x",align:"center",style:"width:85px;"},{name:"y",label:"Position Y",field:"y",align:"center",style:"width:85px;"},{name:"photo",label:"Photo",field:"hasPhoto",align:"center",style:"width:100px;"}]),K=r([]),H=r(30),me=r("/icons/marker.png");be(T,t=>{t.length>0&&(K.value=t.map(a=>{const v={id:a.point.id,map:a.code,no:a.point.no,name:a.point.name,x:a.point.x,y:a.point.y};return a.photos.length>0?{...v,hasPhoto:a.photos.length}:{...v,hasPhoto:a.photos.length}}),K.value.sort((a,v)=>a.no-v.no))},{deep:!0});const te=t=>{le.post("/getpoint",{data:{map_id:parseInt(t)}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(a=>{T.value=a.data.results,console.log("load points to icons",T.value)})},ke=(t,a)=>{const v={condition:t,newpoint:a};console.log("update->",v),le.post("/updatepoint",{data:v},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(W=>{console.log("update points ",W.data)})},Le=t=>{console.log("delete ",t),le.post("/deletepoint",{data:t},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(a=>{console.log("delete points ",a.data)})},oe=t=>{console.log("delete ",t),le.post("/deletephoto",{data:{...t,site_id:parseInt(h.value),map_id:parseInt(f.value.id)}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(a=>{console.log("delete photo ",a.data)})},Z=t=>le.post("/getmap",{data:{site_id:t}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(a=>a.data.results),ae=t=>{P.notify({position:"top",message:t,color:"purple"})},Ce=t=>{const a=t.offsetX-H.value/2,v=t.offsetY-H.value/2;console.log(`Clicked position: (${a}, ${v})`),console.log("current map is",f.value),T.value.push({edit:!1,id:f.value.id,site_id:h.value,code:f.value.code,name:f.value.name,point:{id:Math.floor(Date.now()/1e3),map_id:f.value.id,name:"",no:"",x:a,y:v,postby:e.state.user.username},photos:[]}),y.value=T.value[T.value.length-1],i.value={},J.value=!0},we=(t,a)=>{t.offsetX,t.offsetY},X=(t,a)=>{t.offsetX,t.offsetY},Qe=(t,a)=>{const v=t.offsetX,W=t.offsetY;console.log(`drag end: ${a} (${v}, ${W})`);const G=T.value.findIndex(pe=>pe.point.id===a),$=T.value[G];if(G!==-1){const pe={no:$.point.no,name:$.point.name,x:$.point.x+v-H.value/2,y:$.point.y+W-H.value/2,modifiedBy:e.state.user.username};ke({id:a},pe),T.value[G]={...$,point:{...$.point,x:$.point.x+v-H.value/2,y:$.point.y+W-H.value/2}},console.log("change icons",T.value[G])}},Pe=t=>{y.value=T.value.filter(a=>a.point.id==t)[0],y.value={...y.value,point:{...y.value.point,postby:e.state.user.username},edit:!0},n.value=!0,i.value={},J.value=!0},Ve=()=>{console.log("edit Map"),j.value=!0,M.value={id:f.value.id,code:f.value.code,name:f.value.name,edit:!0,url:`${l.value}/${f.value.site_id}/${f.value.id}/map.jpg`}},Te=t=>{console.log("handle upload",t),L.value.mapFile=t[0]},xe=async()=>{console.log("add map",M.value);const t=new FormData,a={...M.value,postby:e.state.user.username,site_id:parseInt(h.value)};t.append("data",JSON.stringify(a)),t.append("mapPhoto",L.value.mapFile),L.value.mapFile!=null||M.value.edit?(console.log("send to server",a),le.post("/addmap",t,{headers:{"Content-Type":"multipart/form-data",Authorization:e.state.token}}).then(async v=>{console.log("Data submitted successfully",v.data.results),ae(`Add new map ${M.value.code} done.`),j.value=!1,C.value=await Z(h.value),C.value.length>0&&(f.value=C.value.filter(W=>W.id===v.data.results.id)[0],console.log("select Map",f.value),setTimeout(()=>{D.value=`${l.value}/${h.value}/${f.value.id}/map.jpg`,ue.value=f.value.code,T.value=[],K.value=[]},1e3))}).catch(v=>{console.error("Error submitting data",v)})):ae("Map photo is required.")},je=()=>{ve.value=!0},Be=()=>{ve.value=!1,console.log("detete map",f.value),le.post("/deletemap",{data:f.value},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(t=>{console.log(t.data.results);const a=C.value.findIndex(v=>v.id===f.value.id);a!==-1&&C.value.splice(a,1),C.value.length>0?(f.value=C.value[0],D.value=`${l.value}/${f.value.site_id}/${f.value.id}/map.jpg`,ue.value=f.value.code):j.value=!0,ae('Delete map "'+f.value.code+'" done.')})},ce=t=>{const a=C.value.filter(v=>v.id==t)[0];f.value=a,D.value=`${l.value}/${h.value}/${t}/map.jpg`,te(t),K.value=[]},Me=()=>{console.log("add point",y.value),y.value.point.name==""&&(y.value.point.name="Point "+y.value.point.no);const t=new FormData,a={...y.value};t.append("data",JSON.stringify(a)),t.append("pointPhoto",Q.value.pointFile),console.log("-->",Q.value.pointFile),Q.value.pointFile!=null||y.value.edit?(console.log("send icon to server",y.value),P.loading.show({delay:400}),le.post("/addpoint",t,{headers:{"Content-Type":"multipart/form-data",Authorization:e.state.token}}).then(async v=>{console.log("Data submitted successfully",v.data.results),ae(`Point "${y.value.point.no}" submitted successfully`),J.value=!1,i.value={},P.loading.hide(),n.value=!1}).catch(v=>{console.error("Error submitting data",v)})):ae("Photo is required.")},Ue=()=>{P.dialog({title:"Confirm",message:"Would you like to delete this point including all photos?",cancel:!0,persistent:!0}).onOk(()=>{J.value=!1;const t=T.value.findIndex(a=>a.point.id===y.value.point.id);console.log(">>>> delele point  = ",t),t!==-1&&(Le(T.value[t]),T.value.splice(t,1))}).onCancel(()=>{console.log(">>>> Cancel")}).onDismiss(()=>{console.log("I am triggered on both OK and Cancel")})},Oe=(t,a,v)=>{console.log("Row clicked:",a.id),Pe(a.id)},qe=t=>{P.dialog({title:"Confirm",message:"Would you like to delete photo?",cancel:!0,persistent:!0}).onOk(()=>{console.log(">>>> OK - delete photo id",t.id,y.value);const a=y.value.photos.findIndex(v=>v.id===t.id);a!==-1&&(y.value.photos.splice(a,1),oe(t))}).onCancel(()=>{console.log(">>>> Cancel")}).onDismiss(()=>{console.log("I am triggered on both OK and Cancel")})},$e=()=>{j.value=!0,M.value={code:"",name:"",edit:!1},ye.value=!1,L.value=""};nt(async()=>{e.state.token!==""?(C.value=await Z(h.value),C.value.length>0?(f.value=C.value[0],D.value=`${l.value}/${f.value.site_id}/${f.value.id}/map.jpg`,ue.value=f.value.code,te(f.value.id)):j.value=!0):(p.value=!1,x.push("/"),console.log("not allow"))});const Ie=()=>{console.log("close"),te(f.value.id)},o=async t=>new Promise(a=>{a({url:`${I}upload360`,methods:"POST",headers:[{name:"Authorization",value:e.state.token}],formFields:[{name:"site_id",value:h.value},{name:"map_id",value:f.value.id}]})}),n=r(!1),i=r({}),k=t=>t.toString().padStart(2,"0"),w=t=>{const a=new Date(parseInt(t)*1e3-252e5),v=a.getYear()+1900,W=a.getMonth()+1,G=a.getDate(),$=a.getHours(),pe=a.getMinutes(),rt=a.getSeconds();return`${v}-${k(W)}-${k(G)} ${k($)}:${k(pe)}:${k(rt)}`},b=t=>Vt.unix(t).tz("Asia/Bangkok").format("YYYY-MM-DD HH:mm:ss"),m=t=>{Q.value.pointFile=t.files[0],console.log("handle point upload",Q.value.pointFile),t.xhr.onload=function(){if(t.xhr.status===200){n.value=!0;const a=JSON.parse(t.xhr.responseText);console.log("Response:",a),i.value=a.results.exif,a.results.lastpoint&&y.value.point.no==""&&(y.value.point.no=a.results.lastpoint,y.value.point.name=`Point ${a.results.lastpoint}`)}}},_=(t,a)=>{t.removeFile(a),i.value={}};return{screen:r(P.screen),localDateString:b,dateString:w,removeFile:_,exif:i,enablePointForm:n,router:x,authorized:p,onClosePointForm:Ie,imgUrl:l,site:h,marker:me,mapUrl:D,icons:T,selectIcon:y,addIcon:Ce,dragStart:we,drag:X,dragEnd:Qe,editPoint:Pe,openPointForm:J,pmap_id:B,pid:N,pno:Y,pname:se,pphotos:ee,iconX:re,iconY:c,maps:C,form:M,submitForm:xe,factoryFn:o,file:S,noSpacesRule:t=>!/\s/.test(t),fileRequiredRule:t=>!!t||"File is required",handleFileUpload:Te,uploaderRef:L,uploaderPointRef:Q,handlePointUpload:m,deleteMap:je,openMapForm:j,showConfirm:ve,confirmDeleteMap:Be,selectMap:f,onSelectMap:ce,fileUploaded:ye,tab:ue,editMap:Ve,submitPointForm:Me,confirmDeletePoint:Ue,column:de,rows:K,iconSize:H,handleRowClick:Oe,deletePhoto:qe,mapFormOpen:$e}}});const ie=e=>(Tt("data-v-9a7f7630"),e=e(),Mt(),e),Wt={key:0},Yt={key:1,class:"flex justify-center q-mt-md bg-grey-12"},Kt={class:"image-container"},Xt=["src"],Gt=["onDragstart","onDrag","onDragend"],Jt={style:{padding:"5px 7px",color:"#f00","background-color":"rgba(0,0,0,0)"}},Zt={class:"row"},eo={class:"q-pa-sm col-12"},to={class:"col-12"},oo={class:"q-mb-xl q-ma-md flex justify-end"},ao={class:"q-gutter-xs row justify-around"},lo={class:"absolute-bottom"},no={class:"text-cation"},so={class:"absolute-top text-center"},io={key:0,class:"col-6"},ro=ie(()=>q("span",{class:"text-black"},"Make:",-1)),uo={key:1,class:"col-6"},co=ie(()=>q("span",{class:"text-black"},"Model:",-1)),fo={key:2,class:"col-6"},vo=ie(()=>q("span",{class:"text-black"},"Latitude:",-1)),mo={key:3,class:"col-6"},po=ie(()=>q("span",{class:"text-black"},"Longitude:",-1)),go={key:4,class:"col-6"},ho=ie(()=>q("span",{class:"text-black"},"DateTimeOriginal:",-1)),bo={key:5,class:"col-6"},yo=ie(()=>q("span",{class:"text-black"},"ModifyDate:",-1)),ko={key:6,class:"col-6"},Co=ie(()=>q("span",{class:"text-black"},"CreateDate:",-1)),wo={class:"q-gutter-xs row items-start"},Po={class:"flex justify-start"};function To(e,d,x,h,p,ne){return g(),F(ge,null,[e.authorized?(g(),F("div",Wt,[s(Rt,{view:"hHh lpr fff"},{default:u(()=>[s(St,{elevated:"",class:"bg-grey-9 text-grey-1"},{default:u(()=>[s(Fe,{class:"q-pa-none"},{default:u(()=>[e.maps.length?(g(),F("div",{key:0,class:"q-mx-sm",style:He(e.screen.name=="xs"?"max-width: 250px":"max-width: 400px")},[s(Nt,{"inline-label":"","outside-arrows":"","mobile-arrows":"",align:"left",modelValue:e.tab,"onUpdate:modelValue":d[0]||(d[0]=l=>e.tab=l)},{default:u(()=>[(g(!0),F(ge,null,Se(e.maps,(l,I)=>(g(),O(Ot,{name:l.code,key:I,onClick:P=>e.onSelectMap(l.id),label:l.code},null,8,["name","onClick","label"]))),128))]),_:1},8,["modelValue"])],4)):R("",!0),s(z,{rounded:"",color:"deep-orange",icon:"add",onClick:e.mapFormOpen,label:e.screen.name=="xs"?"":"New Map"},null,8,["onClick","label"]),s(Ye),s(We,{dark:"",vertical:""}),s(z,{class:"",rounded:"",flat:"",color:"grey-1",to:"/"+e.site,"icon-right":"close",label:e.screen.name=="xs"?"":"Close"},null,8,["to","label"])]),_:1})]),_:1}),s(At,null,{default:u(()=>[e.mapUrl?(g(),O(Fe,{key:0,class:"bg-grey-11 text-black"},{default:u(()=>[s(he,{class:"flex justify-center"},{default:u(()=>[A(U(`${e.selectMap.code} - ${e.selectMap.name}`),1)]),_:1}),A(" MID"+U(e.selectMap.id),1)]),_:1})):R("",!0),e.mapUrl?(g(),F("div",Yt,[q("div",Kt,[q("img",{src:e.mapUrl,onClick:d[1]||(d[1]=(...l)=>e.addIcon&&e.addIcon(...l)),style:{border:"1px solid #ccc"}},null,8,Xt),(g(!0),F(ge,null,Se(e.icons,(l,I)=>(g(),F("div",{class:"icon",key:I,style:He({top:l.point.y+"px",left:l.point.x+"px"}),draggable:"true",onDragstart:P=>e.dragStart(P,l.point.id),onDrag:P=>e.drag(P,l.point.id),onDragend:P=>e.dragEnd(P,l.point.id)},[s(Re,{title:"point: "+l.point.no+`
click to edit`,src:e.marker,style:He("cursor:pointer; width:"+e.iconSize+"px"),onClick:P=>e.editPoint(l.point.id)},{default:u(()=>[q("div",Jt,U(l.point.no),1)]),_:2},1032,["title","src","style","onClick"])],44,Gt))),128)),q("div",Zt,[q("div",eo,[s(Dt,{title:"Points",rows:e.rows,columns:e.column,"row-key":"id",onRowClick:e.handleRowClick,"rows-per-page-options":[100,200,300],pagination:"true"},null,8,["rows","columns","onRowClick"])]),q("div",to,[q("div",oo,[s(z,{rounded:"",color:"primary",onClick:e.editMap,class:"q-mr-sm"},{default:u(()=>[A("Edit MAP")]),_:1},8,["onClick"]),s(z,{rounded:"",color:"negative",onClick:e.deleteMap},{default:u(()=>[A("Delete MAP")]),_:1},8,["onClick"]),s(Ne,{modelValue:e.showConfirm,"onUpdate:modelValue":d[3]||(d[3]=l=>e.showConfirm=l)},{default:u(()=>[s(De,{style:{"min-width":"300px"}},{default:u(()=>[s(_e,null,{default:u(()=>[s(_t,null,{default:u(()=>[A('Delete Map "'+U(e.selectMap.code)+'" ?',1)]),_:1})]),_:1}),s(Pt,{class:"flex justify-center q-mb-sm"},{default:u(()=>[s(z,{"no-caps":"",rounded:"",label:"Yes",color:"negative",onClick:e.confirmDeleteMap},null,8,["onClick"]),s(z,{"no-caps":"",rounded:"",label:"No",color:"primary",onClick:d[2]||(d[2]=l=>e.showConfirm=!1)})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])])])])):R("",!0)]),_:1})]),_:1})])):R("",!0),s(Ne,{modelValue:e.openMapForm,"onUpdate:modelValue":d[7]||(d[7]=l=>e.openMapForm=l)},{default:u(()=>[s(De,{class:"q-pa-none",style:{width:"450px"}},{default:u(()=>[s(Fe,{class:"bg-secondary text-grey-1"},{default:u(()=>[e.form.id?(g(),O(he,{key:0},{default:u(()=>[A("Edit Map: "+U(e.form.id),1)]),_:1})):(g(),O(he,{key:1},{default:u(()=>[A("Add Map")]),_:1}))]),_:1}),s(tt,{onSubmit:Je(e.submitForm,["prevent"]),class:"q-gutter-xs"},{default:u(()=>[s(_e,null,{default:u(()=>[s(fe,{filled:"",dense:"",modelValue:e.form.code,"onUpdate:modelValue":d[4]||(d[4]=l=>e.form.code=l),label:"Map Code",rules:[l=>!/\s/.test(l)&&!!l||"input code with no space"]},null,8,["modelValue","rules"]),s(fe,{filled:"",dense:"",modelValue:e.form.name,"onUpdate:modelValue":d[5]||(d[5]=l=>e.form.name=l),label:"Map Name",rules:[l=>!!l||"input name"]},null,8,["modelValue","rules"]),e.form.id?(g(),O(Re,{key:0,src:e.form.url,class:"q-my-md"},null,8,["src"])):R("",!0),s(et,{ref:"uploaderRef",onAdded:e.handleFileUpload,extensions:["jpg","jpeg","png","gif"],"auto-upload":!1,multiple:!1,"hide-upload-btn":!0,label:"Upload Map",class:"full-width"},null,8,["onAdded"])]),_:1}),s(_e,{class:"flex justify-end"},{default:u(()=>[s(z,{rounded:"",flat:"",label:"Cancel",onClick:d[6]||(d[6]=l=>e.openMapForm=!1)}),s(z,{rounded:"",type:"submit",color:"primary",label:"Submit"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),s(Ne,{modelValue:e.openPointForm,"onUpdate:modelValue":d[12]||(d[12]=l=>e.openPointForm=l),persistent:"","transition-show":"scale","transition-hide":"scale",onHide:e.onClosePointForm},{default:u(()=>[s(De,{class:"q-pa-none",style:{width:"550px"}},{default:u(()=>[s(Fe,{class:"bg-secondary text-grey-1"},{default:u(()=>[e.selectIcon.edit?(g(),O(he,{key:0},{default:u(()=>[A("Edit Point")]),_:1})):(g(),O(he,{key:1},{default:u(()=>[A("Add Point")]),_:1}))]),_:1}),s(_e,{class:"q-pa-lg"},{default:u(()=>[s(tt,{onSubmit:Je(e.submitPointForm,["prevent"]),class:"q-gutter-none"},{default:u(()=>[q("div",ao,[(g(!0),F(ge,null,Se(e.selectIcon.photos,(l,I)=>(g(),F("div",{key:I,class:"col-5"},[s(Re,{style:{height:"180px"},src:`${e.imgUrl}/${e.selectIcon.site_id}/${e.selectIcon.point.map_id}/${e.selectIcon.point.id}/${l.id}/thumbnail.jpg`},{default:u(()=>[q("div",lo,[q("div",no,U(l.timestamp),1)])]),_:2},1032,["src"]),s(Ye),s(z,{onClick:P=>e.deletePhoto(l),flat:"",icon:"close",class:"text-red"},{default:u(()=>[A("Delete")]),_:2},1032,["onClick"])]))),128))]),s(et,{ref:"uploaderPointRef",extensions:"['jpg', 'jpeg', 'png', 'gif']",factory:e.factoryFn,onUploaded:e.handlePointUpload,"auto-upload":"",multiple:!1,"max-files":"1",label:"Upload 360\xB0 Photo",class:"full-width q-mb-md"},{list:u(l=>[s(It,{separator:""},{default:u(()=>[(g(!0),F(ge,null,Se(l.files,I=>(g(),O(Ft,{key:I.__key},{default:u(()=>[I.__img?(g(),O(Ze,{key:0},{default:u(()=>[s(Re,{src:I.__img.src},{default:u(()=>[q("div",so,U(I.name),1)]),_:2},1032,["src"])]),_:2},1024)):R("",!0),s(Ze,{top:"",side:""},{default:u(()=>[s(z,{class:"gt-xs",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:P=>e.removeFile(l,I)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["factory","onUploaded"]),e.exif.Make?(g(),O(De,{key:0,class:"row items-start text-caption text-grey-8 q-mt-none q-pa-md"},{default:u(()=>[e.exif.Make?(g(),F("div",io,[ro,A(" "+U(e.exif.Make),1)])):R("",!0),e.exif.Model?(g(),F("div",uo,[co,A(" "+U(e.exif.Model),1)])):R("",!0),e.exif.GPSLatitude?(g(),F("div",fo,[vo,A(" "+U(e.exif.GPSLatitude),1)])):R("",!0),e.exif.GPSLongitude?(g(),F("div",mo,[po,A(" "+U(e.exif.GPSLongitude),1)])):R("",!0),e.exif.DateTimeOriginal?(g(),F("div",go,[ho,A(" "+U(e.dateString(e.exif.DateTimeOriginal)),1)])):R("",!0),e.exif.ModifyDate?(g(),F("div",bo,[yo,A(" "+U(e.dateString(e.exif.ModifyDate)),1)])):R("",!0),e.exif.CreateDate?(g(),F("div",ko,[Co,A(" "+U(e.dateString(e.exif.CreateDate)),1)])):R("",!0)]),_:1})):R("",!0),e.exif.Make?(g(),O(We,{key:1,color:"grey-4 q-mb-md"})):R("",!0),s(fe,{disable:!e.enablePointForm,filled:"",dense:"",modelValue:e.selectIcon.point.no,"onUpdate:modelValue":d[8]||(d[8]=l=>e.selectIcon.point.no=l),label:"Point No",rules:[l=>!/\s/.test(l)&&!!l||"input code with no space"]},null,8,["disable","modelValue","rules"]),s(fe,{disable:!e.enablePointForm,filled:"",dense:"",modelValue:e.selectIcon.point.name,"onUpdate:modelValue":d[9]||(d[9]=l=>e.selectIcon.point.name=l),label:"Point Name",class:"q-mb-lg"},null,8,["disable","modelValue"]),q("div",wo,[s(fe,{disable:!e.enablePointForm,filled:"",dense:"",modelValue:e.selectIcon.point.x,"onUpdate:modelValue":d[10]||(d[10]=l=>e.selectIcon.point.x=l),label:"Position X",rules:[l=>!!l||"required"]},null,8,["disable","modelValue","rules"]),s(fe,{disable:!e.enablePointForm,filled:"",dense:"",modelValue:e.selectIcon.point.y,"onUpdate:modelValue":d[11]||(d[11]=l=>e.selectIcon.point.y=l),label:"Position Y",rules:[l=>!!l||"required"]},null,8,["disable","modelValue","rules"])]),q("div",Po,[e.selectIcon.edit?(g(),O(z,{key:0,rounded:"",label:"Delete",color:"negative",onClick:e.confirmDeletePoint},null,8,["onClick"])):R("",!0),e.selectIcon.edit?(g(),O(We,{key:1,vertical:"",class:"q-mx-sm"})):R("",!0),s(Ye),st(s(z,{flat:"",label:"Cancel"},null,512),[[Lt]]),s(z,{disable:!e.enablePointForm,rounded:"",type:"submit",color:"primary",label:"Submit"},null,8,["disable"])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue","onHide"])],64)}var No=wt(Ht,[["render",To],["__scopeId","data-v-9a7f7630"]]);export{No as default};
