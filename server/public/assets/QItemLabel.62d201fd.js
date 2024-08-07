import{c as v,ac as x,ad as $,ae as C,af as E,b as n,ag as K,g as L,d as i,x as S,ah as j,ai as D,ab as I,O as k,aj as A,ak as N,r as Q,a9 as O,al as z}from"./index.16a70692.js";const P={xs:8,sm:10,md:14,lg:20,xl:24};var V=v({name:"QChip",props:{...x,...$,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:u,emit:l}){const{proxy:{$q:o}}=L(),s=C(e,o),f=E(e,P),g=n(()=>e.selected===!0||e.icon!==void 0),_=n(()=>e.selected===!0?e.iconSelected||o.iconSet.chip.selected:e.icon),y=n(()=>e.iconRemove||o.iconSet.chip.remove),b=n(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=n(()=>{const t=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(b.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(s.value===!0?" q-chip--dark q-dark":"")}),r=n(()=>{const t=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},m={...t,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||o.lang.label.remove};return{chip:t,remove:m}});function q(t){t.keyCode===13&&c(t)}function c(t){e.disable||(l("update:selected",!e.selected),l("click",t))}function h(t){(t.keyCode===void 0||t.keyCode===13)&&(I(t),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function B(){const t=[];b.value===!0&&t.push(i("div",{class:"q-focus-helper"})),g.value===!0&&t.push(i(S,{class:"q-chip__icon q-chip__icon--left",name:_.value}));const m=e.label!==void 0?[i("div",{class:"ellipsis"},[e.label])]:void 0;return t.push(i("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},j(u.default,m))),e.iconRight&&t.push(i(S,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&t.push(i(S,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...r.value.remove,onClick:h,onKeyup:h})),t}return()=>{if(e.modelValue===!1)return;const t={class:d.value,style:f.value};return b.value===!0&&Object.assign(t,r.value.chip,{onClick:c,onKeyup:q}),K("div",t,B(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[D,e.ripple]])}}}),F=v({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const l=n(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>i("div",{class:l.value,role:"toolbar"},k(u.default))}}),M=v({name:"QList",props:{...x,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:u}){const l=L(),o=C(e,l.proxy.$q),s=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>i(e.tag,{class:s.value},k(u.default))}}),W=v({name:"QItem",props:{...x,...A,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:u,emit:l}){const{proxy:{$q:o}}=L(),s=C(e,o),{hasLink:f,linkAttrs:g,linkClass:_,linkTag:y,navigateOnClick:b}=N(),d=Q(null),r=Q(null),q=n(()=>e.clickable===!0||f.value===!0||e.tag==="label"),c=n(()=>e.disable!==!0&&q.value===!0),h=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(s.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?_.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=n(()=>{if(e.insetLevel===void 0)return null;const a=o.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function t(a){c.value===!0&&(r.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===d.value?r.value.focus():document.activeElement===r.value&&d.value.focus()),b(a))}function m(a){if(c.value===!0&&O(a,[13,32])===!0){I(a),a.qKeyEvent=!0;const w=new MouseEvent("click",a);w.qKeyEvent=!0,d.value.dispatchEvent(w)}l("keyup",a)}function R(){const a=z(u.default,[]);return c.value===!0&&a.unshift(i("div",{class:"q-focus-helper",tabindex:-1,ref:r})),a}return()=>{const a={ref:d,class:h.value,style:B.value,role:"listitem",onClick:t,onKeyup:m};return c.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,g.value)):q.value===!0&&(a["aria-disabled"]="true"),i(y.value,a,R())}}}),U=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:u}){const l=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:l.value},k(u.default))}}),G=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:u}){const l=n(()=>parseInt(e.lines,10)),o=n(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),s=n(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>i("div",{style:s.value,class:o.value},k(u.default))}});export{F as Q,V as a,U as b,G as c,W as d,M as e};
