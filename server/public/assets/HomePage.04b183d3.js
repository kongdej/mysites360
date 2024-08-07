import{c as ie,i as ae,e as N,l as ue,r as i,a as de,b as w,w as A,o as ce,h as me,d as G,g as oe,_ as pe,f as fe,u as he,j as ve,k as ge,P as M,m as ye,n as r,p as S,q as o,s,Q as be,F as x,t as U,v as X,x as ke,y as f,z as j,A as k,B as y,C as p,D as Q,E as Ce,G as Qe,H as Y,I as Z,J as _e,K as we,L as ee,M as Se,N as Ve}from"./index.5d02f1f6.js";import{Q as O}from"./QToolbarTitle.4ff44f93.js";import{Q as Ae}from"./format.dc814c6a.js";import{Q as K}from"./QList.6fdd6e3f.js";import{Q as Fe}from"./QHeader.d90c2f0e.js";import{Q as te}from"./QImg.60b8e4c9.js";import{Q as $e}from"./QSpace.c2cb139a.js";import{Q as ze}from"./QTable.1c07ec23.js";import{Q as qe}from"./QPage.c9210a53.js";import{Q as Pe,a as Ue}from"./QLayout.51e848ba.js";import{Q as je}from"./QScrollObserver.eca2b804.js";import{Q as Te}from"./QSelect.3b97f3f2.js";import{Q as He}from"./QUploader.88fc3fbf.js";import{Q as Be}from"./QForm.29a6e65e.js";import{u as Ie}from"./use-quasar.9a44ee4b.js";import{d as Le}from"./index.dc1e2260.js";import"./position-engine.4ada9e57.js";import"./use-ratio.b1c4df81.js";import"./use-file.037afe90.js";import"./index.58290dd4.js";var De=ie({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:F}){const{proxy:{$q:h}}=oe(),n=ae(ue,N);if(n===N)return console.error("QFooter needs to be child of QLayout"),N;const v=i(parseInt(e.heightHint,10)),t=i(!0),d=i(de.value===!0||n.isContainer.value===!0?0:window.innerHeight),c=w(()=>e.reveal===!0||n.view.value.indexOf("F")!==-1||h.platform.is.ios&&n.isContainer.value===!0),V=w(()=>n.isContainer.value===!0?n.containerHeight.value:d.value),T=w(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return t.value===!0?v.value:0;const a=n.scroll.value.position+V.value+v.value-n.height.value;return a>0?a:0}),$=w(()=>e.modelValue!==!0||c.value===!0&&t.value!==!0),B=w(()=>e.modelValue===!0&&$.value===!0&&e.reveal===!0),z=w(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+($.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),I=w(()=>{const a=n.rows.value.bottom,m={};return a[0]==="l"&&n.left.space===!0&&(m[h.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),a[2]==="r"&&n.right.space===!0&&(m[h.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),m});function g(a,m){n.update("footer",a,m)}function _(a,m){a.value!==m&&(a.value=m)}function L({height:a}){_(v,a),g("size",a)}function q(){if(e.reveal!==!0)return;const{direction:a,position:m,inflectionPoint:E}=n.scroll.value;_(t,a==="up"||m-E<100||n.height.value-V.value-m-v.value<300)}function D(a){B.value===!0&&_(t,!0),F("focusin",a)}A(()=>e.modelValue,a=>{g("space",a),_(t,!0),n.animate()}),A(T,a=>{g("offset",a)}),A(()=>e.reveal,a=>{a===!1&&_(t,e.modelValue)}),A(t,a=>{n.animate(),F("reveal",a)}),A([v,n.scroll,n.height],q),A(()=>h.screen.height,a=>{n.isContainer.value!==!0&&_(d,a)});const H={};return n.instances.footer=H,e.modelValue===!0&&g("size",v.value),g("space",e.modelValue),g("offset",T.value),ce(()=>{n.instances.footer===H&&(n.instances.footer=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const a=me(u.default,[G(je,{debounce:0,onResize:L})]);return e.elevated===!0&&a.push(G("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),G("footer",{class:z.value,style:I.value,onFocusin:D},a)}}});const Ee=fe({name:"HomePage",setup(){const e=ae("store"),u=Ie();he();const F=ve(),h=i([]),n=i(!1),v=i(!1);v.value=i(!!e.state.token);const t=i(!1),d=i({code:"",name:"",province:""}),c=i(null),V=oe(),T=i(V.appContext.config.globalProperties.$version),$=i(V.appContext.config.globalProperties.$imgUrl),B=i(V.appContext.config.globalProperties.$baseUrl),z=i(!1),I=["\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23","\u0E01\u0E23\u0E30\u0E1A\u0E35\u0E48","\u0E01\u0E32\u0E0D\u0E08\u0E19\u0E1A\u0E38\u0E23\u0E35","\u0E01\u0E32\u0E2C\u0E2A\u0E34\u0E19\u0E18\u0E38\u0E4C","\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E40\u0E1E\u0E0A\u0E23","\u0E02\u0E2D\u0E19\u0E41\u0E01\u0E48\u0E19","\u0E08\u0E31\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35","\u0E09\u0E30\u0E40\u0E0A\u0E34\u0E07\u0E40\u0E17\u0E23\u0E32","\u0E0A\u0E25\u0E1A\u0E38\u0E23\u0E35","\u0E0A\u0E31\u0E22\u0E19\u0E32\u0E17","\u0E0A\u0E31\u0E22\u0E20\u0E39\u0E21\u0E34","\u0E0A\u0E38\u0E21\u0E1E\u0E23","\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48","\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E22","\u0E15\u0E23\u0E31\u0E07","\u0E15\u0E23\u0E32\u0E14","\u0E15\u0E32\u0E01","\u0E19\u0E04\u0E23\u0E19\u0E32\u0E22\u0E01","\u0E19\u0E04\u0E23\u0E1B\u0E10\u0E21","\u0E19\u0E04\u0E23\u0E1E\u0E19\u0E21","\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32","\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A","\u0E19\u0E04\u0E23\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C","\u0E19\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35","\u0E19\u0E23\u0E32\u0E18\u0E34\u0E27\u0E32\u0E2A","\u0E19\u0E48\u0E32\u0E19","\u0E1A\u0E36\u0E07\u0E01\u0E32\u0E2C","\u0E1A\u0E38\u0E23\u0E35\u0E23\u0E31\u0E21\u0E22\u0E4C","\u0E1B\u0E17\u0E38\u0E21\u0E18\u0E32\u0E19\u0E35","\u0E1B\u0E23\u0E30\u0E08\u0E27\u0E1A\u0E04\u0E35\u0E23\u0E35\u0E02\u0E31\u0E19\u0E18\u0E4C","\u0E1B\u0E23\u0E32\u0E08\u0E35\u0E19\u0E1A\u0E38\u0E23\u0E35","\u0E1B\u0E31\u0E15\u0E15\u0E32\u0E19\u0E35","\u0E1E\u0E23\u0E30\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E2D\u0E22\u0E38\u0E18\u0E22\u0E32","\u0E1E\u0E30\u0E40\u0E22\u0E32","\u0E1E\u0E31\u0E07\u0E07\u0E32","\u0E1E\u0E31\u0E17\u0E25\u0E38\u0E07","\u0E1E\u0E34\u0E08\u0E34\u0E15\u0E23","\u0E1E\u0E34\u0E29\u0E13\u0E38\u0E42\u0E25\u0E01","\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E38\u0E23\u0E35","\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E39\u0E23\u0E13\u0E4C","\u0E41\u0E1E\u0E23\u0E48","\u0E20\u0E39\u0E40\u0E01\u0E47\u0E15","\u0E21\u0E2B\u0E32\u0E2A\u0E32\u0E23\u0E04\u0E32\u0E21","\u0E21\u0E38\u0E01\u0E14\u0E32\u0E2B\u0E32\u0E23","\u0E41\u0E21\u0E48\u0E2E\u0E48\u0E2D\u0E07\u0E2A\u0E2D\u0E19","\u0E22\u0E42\u0E2A\u0E18\u0E23","\u0E22\u0E30\u0E25\u0E32","\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E2D\u0E47\u0E14","\u0E23\u0E30\u0E19\u0E2D\u0E07","\u0E23\u0E30\u0E22\u0E2D\u0E07","\u0E23\u0E32\u0E0A\u0E1A\u0E38\u0E23\u0E35","\u0E25\u0E1E\u0E1A\u0E38\u0E23\u0E35","\u0E25\u0E33\u0E1B\u0E32\u0E07","\u0E25\u0E33\u0E1E\u0E39\u0E19","\u0E40\u0E25\u0E22","\u0E28\u0E23\u0E35\u0E2A\u0E30\u0E40\u0E01\u0E29","\u0E2A\u0E01\u0E25\u0E19\u0E04\u0E23","\u0E2A\u0E07\u0E02\u0E25\u0E32","\u0E2A\u0E15\u0E39\u0E25","\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23","\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E07\u0E04\u0E23\u0E32\u0E21","\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E32\u0E04\u0E23","\u0E2A\u0E23\u0E30\u0E41\u0E01\u0E49\u0E27","\u0E2A\u0E23\u0E30\u0E1A\u0E38\u0E23\u0E35","\u0E2A\u0E34\u0E07\u0E2B\u0E4C\u0E1A\u0E38\u0E23\u0E35","\u0E2A\u0E38\u0E42\u0E02\u0E17\u0E31\u0E22","\u0E2A\u0E38\u0E1E\u0E23\u0E23\u0E13\u0E1A\u0E38\u0E23\u0E35","\u0E2A\u0E38\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E4C\u0E18\u0E32\u0E19\u0E35","\u0E2A\u0E38\u0E23\u0E34\u0E19\u0E17\u0E23\u0E4C","\u0E2B\u0E19\u0E2D\u0E07\u0E04\u0E32\u0E22","\u0E2B\u0E19\u0E2D\u0E07\u0E1A\u0E31\u0E27\u0E25\u0E33\u0E20\u0E39","\u0E2D\u0E48\u0E32\u0E07\u0E17\u0E2D\u0E07","\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E40\u0E08\u0E23\u0E34\u0E0D","\u0E2D\u0E38\u0E14\u0E23\u0E18\u0E32\u0E19\u0E35","\u0E2D\u0E38\u0E15\u0E23\u0E14\u0E34\u0E15\u0E16\u0E4C","\u0E2D\u0E38\u0E17\u0E31\u0E22\u0E18\u0E32\u0E19\u0E35","\u0E2D\u0E38\u0E1A\u0E25\u0E23\u0E32\u0E0A\u0E18\u0E32\u0E19\u0E35"],g={krabi:"\u0E01\u0E23\u0E30\u0E1A\u0E35\u0E48",bangkok:"\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23",kanchanaburi:"\u0E01\u0E32\u0E0D\u0E08\u0E19\u0E1A\u0E38\u0E23\u0E35",kalasin:"\u0E01\u0E32\u0E2C\u0E2A\u0E34\u0E19\u0E18\u0E38\u0E4C",kamphaengphet:"\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E40\u0E1E\u0E0A\u0E23",khonkaen:"\u0E02\u0E2D\u0E19\u0E41\u0E01\u0E48\u0E19",chanthaburi:"\u0E08\u0E31\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35",chachoengsao:"\u0E09\u0E30\u0E40\u0E0A\u0E34\u0E07\u0E40\u0E17\u0E23\u0E32",chonburi:"\u0E0A\u0E25\u0E1A\u0E38\u0E23\u0E35",chainat:"\u0E0A\u0E31\u0E22\u0E19\u0E32\u0E17",chaiyaphum:"\u0E0A\u0E31\u0E22\u0E20\u0E39\u0E21\u0E34",chumphon:"\u0E0A\u0E38\u0E21\u0E1E\u0E23",chiangrai:"\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E22",chiangmai:"\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E43\u0E2B\u0E21\u0E48",trang:"\u0E15\u0E23\u0E31\u0E07",trat:"\u0E15\u0E23\u0E32\u0E14",tak:"\u0E15\u0E32\u0E01",nakhonnayok:"\u0E19\u0E04\u0E23\u0E19\u0E32\u0E22\u0E01",nakhonpathom:"\u0E19\u0E04\u0E23\u0E1B\u0E10\u0E21",nakhonphanom:"\u0E19\u0E04\u0E23\u0E1E\u0E19\u0E21",nakhonratchasima:"\u0E19\u0E04\u0E23\u0E23\u0E32\u0E0A\u0E2A\u0E35\u0E21\u0E32",nakhonsithammarat:"\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E18\u0E23\u0E23\u0E21\u0E23\u0E32\u0E0A",nakhonsawan:"\u0E19\u0E04\u0E23\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C",nonthaburi:"\u0E19\u0E19\u0E17\u0E1A\u0E38\u0E23\u0E35",narathiwat:"\u0E19\u0E23\u0E32\u0E18\u0E34\u0E27\u0E32\u0E2A",nan:"\u0E19\u0E48\u0E32\u0E19",buriram:"\u0E1A\u0E38\u0E23\u0E35\u0E23\u0E31\u0E21\u0E22\u0E4C",pathumthani:"\u0E1B\u0E17\u0E38\u0E21\u0E18\u0E32\u0E19\u0E35",prachuapkhirikhan:"\u0E1B\u0E23\u0E30\u0E08\u0E27\u0E1A\u0E04\u0E35\u0E23\u0E35\u0E02\u0E31\u0E19\u0E18\u0E4C",prachinburi:"\u0E1B\u0E23\u0E32\u0E08\u0E35\u0E19\u0E1A\u0E38\u0E23\u0E35",pattani:"\u0E1B\u0E31\u0E15\u0E15\u0E32\u0E19\u0E35",ayutthaya:"\u0E1E\u0E23\u0E30\u0E19\u0E04\u0E23\u0E28\u0E23\u0E35\u0E2D\u0E22\u0E38\u0E18\u0E22\u0E32",phayao:"\u0E1E\u0E30\u0E40\u0E22\u0E32",phangnga:"\u0E1E\u0E31\u0E07\u0E07\u0E32",phatthalung:"\u0E1E\u0E31\u0E17\u0E25\u0E38\u0E07",phichit:"\u0E1E\u0E34\u0E08\u0E34\u0E15\u0E23",phitsanulok:"\u0E1E\u0E34\u0E29\u0E13\u0E38\u0E42\u0E25\u0E01",phetchaburi:"\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E38\u0E23\u0E35",phetchabun:"\u0E40\u0E1E\u0E0A\u0E23\u0E1A\u0E39\u0E23\u0E13\u0E4C",phrae:"\u0E41\u0E1E\u0E23\u0E48",phuket:"\u0E20\u0E39\u0E40\u0E01\u0E47\u0E15",mahasarakham:"\u0E21\u0E2B\u0E32\u0E2A\u0E32\u0E23\u0E04\u0E32\u0E21",mukdahan:"\u0E21\u0E38\u0E01\u0E14\u0E32\u0E2B\u0E32\u0E23",maehongson:"\u0E41\u0E21\u0E48\u0E2E\u0E48\u0E2D\u0E07\u0E2A\u0E2D\u0E19",yasothon:"\u0E22\u0E42\u0E2A\u0E18\u0E23",yala:"\u0E22\u0E30\u0E25\u0E32",roiet:"\u0E23\u0E49\u0E2D\u0E22\u0E40\u0E2D\u0E47\u0E14",ranong:"\u0E23\u0E30\u0E19\u0E2D\u0E07",rayong:"\u0E23\u0E30\u0E22\u0E2D\u0E07",ratchaburi:"\u0E23\u0E32\u0E0A\u0E1A\u0E38\u0E23\u0E35",lopburi:"\u0E25\u0E1E\u0E1A\u0E38\u0E23\u0E35",loei:"\u0E40\u0E25\u0E22",lampang:"\u0E25\u0E33\u0E1B\u0E32\u0E07",lamphun:"\u0E25\u0E33\u0E1E\u0E39\u0E19",sisaket:"\u0E28\u0E23\u0E35\u0E2A\u0E30\u0E40\u0E01\u0E29",sakonnakhon:"\u0E2A\u0E01\u0E25\u0E19\u0E04\u0E23",songkhla:"\u0E2A\u0E07\u0E02\u0E25\u0E32",satun:"\u0E2A\u0E15\u0E39\u0E25",samutprakan:"\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E1B\u0E23\u0E32\u0E01\u0E32\u0E23",samutsongkhram:"\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E07\u0E04\u0E23\u0E32\u0E21",samutsakhon:"\u0E2A\u0E21\u0E38\u0E17\u0E23\u0E2A\u0E32\u0E04\u0E23",sakaeo:"\u0E2A\u0E23\u0E30\u0E41\u0E01\u0E49\u0E27",saraburi:"\u0E2A\u0E23\u0E30\u0E1A\u0E38\u0E23\u0E35",singburi:"\u0E2A\u0E34\u0E07\u0E2B\u0E4C\u0E1A\u0E38\u0E23\u0E35",sukhothai:"\u0E2A\u0E38\u0E42\u0E02\u0E17\u0E31\u0E22",suphanburi:"\u0E2A\u0E38\u0E1E\u0E23\u0E23\u0E13\u0E1A\u0E38\u0E23\u0E35",suratthani:"\u0E2A\u0E38\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E4C\u0E18\u0E32\u0E19\u0E35",surin:"\u0E2A\u0E38\u0E23\u0E34\u0E19\u0E17\u0E23\u0E4C",nongkhai:"\u0E2B\u0E19\u0E2D\u0E07\u0E04\u0E32\u0E22",nongbualamphu:"\u0E2B\u0E19\u0E2D\u0E07\u0E1A\u0E31\u0E27\u0E25\u0E33\u0E20\u0E39",angthong:"\u0E2D\u0E48\u0E32\u0E07\u0E17\u0E2D\u0E07",amnatcharoen:"\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E40\u0E08\u0E23\u0E34\u0E0D",udonthani:"\u0E2D\u0E38\u0E14\u0E23\u0E18\u0E32\u0E19\u0E35",uttaradit:"\u0E2D\u0E38\u0E15\u0E23\u0E14\u0E34\u0E15\u0E16\u0E4C",uthaithani:"\u0E2D\u0E38\u0E17\u0E31\u0E22\u0E18\u0E32\u0E19\u0E35",ubonratchathani:"\u0E2D\u0E38\u0E1A\u0E25\u0E23\u0E32\u0E0A\u0E18\u0E32\u0E19\u0E35",betong:"\u0E40\u0E1A\u0E15\u0E07"},_=i(u.screen.name),L=[{name:"time",align:"left",style:"width:100px",label:"Date Time",field:"modified",sortable:!0},{name:"postby",align:"center",label:"User",style:"width:100px",field:"postby",sortable:!0},{name:"event",align:"left",label:"Events",field:"action",sortable:!0}],q=()=>U.post("/getsite",{},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(l=>l.data.results),D=()=>U.post("/getuser",{},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(l=>l.data.results),H=()=>U.post("/geteventlog",{},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(l=>l.data.results),a=l=>{c.value.coverFile=l[0]},m=l=>{const b=Object.keys(g).find(P=>g[P]==d.value.province);console.log("add site",d.value,b);const C=new FormData,le={...d.value,province_en:b,postby:e.state.user.username};C.append("data",JSON.stringify(le)),C.append("coverPhoto",c.value.coverFile),c.value.coverFile!=null||d.value.edit?U.post("/addsite",C,{headers:{"Content-Type":"multipart/form-data",Authorization:e.state.token}}).then(async P=>{console.log("Data submitted successfully",P.data.results),t.value=!1,R(`Add new ${d.value.code} done.`),h.value=await q(),d.value.code="",d.value.name="",c.value=""}).catch(P=>{console.error("Error submitting data",P)}):R("Cover photo is required.")},E=()=>{e.state.token="",e.state.user="",M.remove("token"),M.remove("route"),v.value=!1,z.value=!1,R("User Logout")},R=l=>{u.notify({position:"top",message:l,color:"purple"})},ne=l=>{u.dialog({title:"Confirm",message:`Would you like to delete ${l.name}?`,cancel:!0,persistent:!0}).onOk(()=>{U.post("/deletesite",{data:l},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(async b=>{h.value=await q()})}).onCancel(()=>{console.log(">>>> Cancel")}).onDismiss(()=>{console.log("I am triggered on both OK and Cancel")})},se=l=>{t.value=!0;const b=h.value.filter(C=>C.id==l.id)[0];console.log("edit site",b),d.value={edit:!0,id:b.id,code:b.code,name:b.name,cover:`${$.value}/${b.id}/cover.jpg`}},re=()=>{t.value=!0,d.value={code:"",name:"",cover:""}},W=i([]);return ge(async()=>{const l=await D();if(n.value=!(l.length>0),v.value=e.state.token!="",z.value=e.state.user.isAdmin,h.value=await q(),h.value.length){M.remove("route");const b=await H();W.value=b.map(C=>({modified:Le(C.modified),postby:C.postby?C.user[0].userEGAT.person_thai_name:"Guest",action:C.action}))}}),{first:n,division:i("Power Plant Management and Construction"),orientation:_,Platform:ye,store:e,baseUrl:B,router:F,authorized:v,isAdmin:z,logout:E,sites:h,openSiteForm:t,form:d,uploaderRef:c,handleFileUpload:a,submitForm:m,deleteSite:ne,imgUrl:$,editSite:se,openForm:re,provinces:I,version:T,columns_event:L,events:W}}}),J=e=>(Se("data-v-b496a9d6"),e=e(),Ve(),e),Re=J(()=>y("span",{class:"text-deep-orange text-h6"},"V",-1)),Ne=["src"],Ge={key:1},Me={key:0,class:"row flex flex-center text-center q-mt-lg text-h4"},Oe=J(()=>y("div",{class:"col-12 q-my-lg"},[f("Welcome to mySites"),y("span",{class:"text-red-6"},"V"),f("ision")],-1)),Ke={key:0,class:"col-12 q-my-lg"},Je={class:"row items-start justify-center q-gutter-md q-pa-md"},We={class:"absolute-top text-center"},xe={class:"text-h6"},Xe={class:"text-subtitle2"},Ye={class:"flex justify-center col-12 q-gutter-md"},Ze={key:1,class:"q-mt-xl"},et={class:"flex justify-center text-caption"},tt=J(()=>y("span",{class:"text-deep-orange"},"V",-1)),at={key:0},ot={class:"flex justify-end"};function nt(e,u,F,h,n,v){return r(),S(x,null,[o(Pe,{view:"hHh lpR fff"},{default:s(()=>[o(Fe,{elevated:"",class:"bg-grey-9 text-grey-1"},{default:s(()=>[o(K,null,{default:s(()=>[o(O,{class:"text-subtitle1"},{default:s(()=>[o(X,null,{default:s(()=>[o(ke,{color:"",size:"lg",name:"coronavirus"})]),_:1}),f(" mySites"),Re,f("ision - "+j(e.division),1)]),_:1}),e.authorized&&e.store.state.user.userEGAT?(r(),k(Ae,{key:0,class:"bg-grey-8",dark:""},{default:s(()=>[o(X,{size:"md"},{default:s(()=>[y("img",{src:`${e.baseUrl}avatars/${e.store.state.user.username}.jpg`},null,8,Ne)]),_:1}),f(" "+j(e.store.state.user.userEGAT.person_thai_name),1)]),_:1})):p("",!0),e.first?p("",!0):(r(),S("div",Ge,[e.authorized?(r(),k(Q,{key:1,icon:"logout",flat:"",label:"Logout",onClick:e.logout},null,8,["onClick"])):(r(),k(Q,{key:0,icon:"login",label:"Login",to:"/login"}))]))]),_:1})]),_:1}),o(Ue,{class:"bg-grey-12 q-pa-xl"},{default:s(()=>[o(qe,null,{default:s(()=>[e.first?(r(),S("div",Me,[Oe,e.first?(r(),S("div",Ke,[o(Q,{rounded:"",icon:"manage_accounts",size:"lg",class:"self-center text-grey-1",label:"add you to admin user",glossy:"",color:"deep-orange",to:"/login"})])):p("",!0)])):p("",!0),y("div",Je,[(r(!0),S(x,null,Ce(e.sites,(t,d)=>(r(),k(Z,{class:"col-12 my-card bg-grey-1",key:d},{default:s(()=>[o(te,{onClick:c=>e.router.push(`/${t.id}`),ratio:4/3,src:e.imgUrl+"/"+t.id+"/cover.jpg",class:"image-card"},{default:s(()=>[y("div",We,[y("div",xe,j(t.code.toLocaleUpperCase()),1),y("div",Xe,j(t.name),1)])]),_:2},1032,["onClick","src"]),o(Qe,null,{default:s(()=>[e.isAdmin?(r(),k(Q,{key:0,flat:"",icon:"done",color:"primary",onClick:c=>e.editSite(t)},{default:s(()=>[f("Edit")]),_:2},1032,["onClick"])):p("",!0),e.isAdmin?(r(),k(Y,{key:1,vertical:""})):p("",!0),e.isAdmin?(r(),k(Q,{key:2,flat:"",icon:"close",color:"red",onClick:c=>e.deleteSite(t)},{default:s(()=>[f("Delete")]),_:2},1032,["onClick"])):p("",!0),e.isAdmin?(r(),k(Y,{key:3,vertical:""})):p("",!0),o($e),o(Q,{color:"grey-9",to:"/"+t.id},{default:s(()=>[f("Goto Site")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128)),y("div",Ye,[e.isAdmin?(r(),k(Q,{key:0,class:"self-center",rounded:"",icon:"map",size:"lg",color:"deep-orange",onClick:e.openForm},{default:s(()=>[f("New Site")]),_:1},8,["onClick"])):p("",!0),e.isAdmin?(r(),k(Q,{key:1,class:"self-center",rounded:"",icon:"people",size:"lg",color:"deep-orange",to:"/user"},{default:s(()=>[f("Add User")]),_:1})):p("",!0)])]),e.events.length>0?(r(),S("div",Ze,[o(ze,{title:"History",rows:e.events,columns:e.columns_event,"row-key":"name"},null,8,["rows","columns"])])):p("",!0)]),_:1})]),_:1}),o(De,{elevated:"",class:"bg-grey-9 text-white"},{default:s(()=>[o(K,null,{default:s(()=>[o(O,null,{default:s(()=>[y("div",et,[f(" \xA92023 mySites"),tt,f("ision "),e.Platform.is.desktop?(r(),S("span",at,", Powered by mySites Team (PMC.EGAT), Designed by Somboon.Ph - version:"+j(e.version),1)):p("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}),o(be,{modelValue:e.openSiteForm,"onUpdate:modelValue":u[4]||(u[4]=t=>e.openSiteForm=t)},{default:s(()=>[o(Z,{class:"q-pa-none",style:{width:"400px"}},{default:s(()=>[o(K,{class:"bg-secondary text-grey-1"},{default:s(()=>[o(O,null,{default:s(()=>[f("Site")]),_:1})]),_:1}),o(_e,{class:"q-pa-lg"},{default:s(()=>[o(Be,{onSubmit:we(e.submitForm,["prevent"]),class:"q-gutter-md"},{default:s(()=>[o(ee,{outlined:"",modelValue:e.form.code,"onUpdate:modelValue":u[0]||(u[0]=t=>e.form.code=t),label:"Site Code",rules:[t=>!/\s/.test(t)&&!!t||"input code with no space"]},null,8,["modelValue","rules"]),o(ee,{outlined:"",modelValue:e.form.name,"onUpdate:modelValue":u[1]||(u[1]=t=>e.form.name=t),label:"Site Name",rules:[t=>!!t||"input site name"]},null,8,["modelValue","rules"]),o(Te,{rounded:"",outlined:"",standout:"",modelValue:e.form.province,"onUpdate:modelValue":u[2]||(u[2]=t=>e.form.province=t),options:e.provinces,label:"\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14",rules:[t=>!!t||"select province"]},null,8,["modelValue","options","rules"]),e.form.cover?(r(),k(te,{key:0,src:e.form.cover},null,8,["src"])):p("",!0),o(He,{style:{width:"350px"},color:"secondary",ref:"uploaderRef",onAdded:e.handleFileUpload,extensions:["jpg","jpeg","png","gif"],"auto-upload":!1,multiple:!1,"hide-upload-btn":!0},null,8,["onAdded"]),y("div",ot,[o(Q,{rounded:"",flat:"",label:"Cancel",onClick:u[3]||(u[3]=t=>e.openSiteForm=!1)}),o(Q,{rounded:"",type:"submit",color:"primary",label:"Submit"})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var St=pe(Ee,[["render",nt],["__scopeId","data-v-b496a9d6"]]);export{St as default};
