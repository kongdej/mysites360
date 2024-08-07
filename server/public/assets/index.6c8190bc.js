import{u as A}from"./use-quasar.c901e1dc.js";import{m as Y}from"./index.58290dd4.js";function S(e){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function c(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function l(e){c(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||S(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var I={};function X(){return I}function T(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function M(e,t){c(2,arguments);var a=l(e),n=l(t),i=a.getTime()-n.getTime();return i<0?-1:i>0?1:i}function _(e,t){c(2,arguments);var a=l(e),n=l(t),i=a.getFullYear()-n.getFullYear(),o=a.getMonth()-n.getMonth();return i*12+o}function R(e,t){return c(2,arguments),l(e).getTime()-l(t).getTime()}var W={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},j="trunc";function E(e){return e?W[e]:W[j]}function $(e){c(1,arguments);var t=l(e);return t.setHours(23,59,59,999),t}function q(e){c(1,arguments);var t=l(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function z(e){c(1,arguments);var t=l(e);return $(t).getTime()===q(t).getTime()}function H(e,t){c(2,arguments);var a=l(e),n=l(t),i=M(a,n),o=Math.abs(_(a,n)),r;if(o<1)r=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*o);var s=M(a,n)===-i;z(l(e))&&o===1&&M(e,n)===1&&(s=!1),r=i*(o-Number(s))}return r===0?0:r}function L(e,t,a){c(2,arguments);var n=R(e,t)/1e3;return E(a==null?void 0:a.roundingMethod)(n)}var V={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},J=function(t,a,n){var i,o=V[t];return typeof o=="string"?i=o:a===1?i=o.one:i=o.other.replace("{{count}}",a.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i},U=J;function p(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}var Q={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},B={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},G={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},K={date:p({formats:Q,defaultWidth:"full"}),time:p({formats:B,defaultWidth:"full"}),dateTime:p({formats:G,defaultWidth:"full"})},Z=K,ee={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},te=function(t,a,n,i){return ee[t]},ae=te;function g(e){return function(t,a){var n=a!=null&&a.context?String(a.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=a!=null&&a.width?String(a.width):o;i=e.formattingValues[r]||e.formattingValues[o]}else{var s=e.defaultWidth,u=a!=null&&a.width?String(a.width):e.defaultWidth;i=e.values[u]||e.values[s]}var f=e.argumentCallback?e.argumentCallback(t):t;return i[f]}}var ne={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},re={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ie={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},oe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ue={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},se={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},le=function(t,a){var n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},de={ordinalNumber:le,era:g({values:ne,defaultWidth:"wide"}),quarter:g({values:re,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:g({values:ie,defaultWidth:"wide"}),day:g({values:oe,defaultWidth:"wide"}),dayPeriod:g({values:ue,defaultWidth:"wide",formattingValues:se,defaultFormattingWidth:"wide"})},fe=de;function b(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var r=o[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?ce(s,function(m){return m.test(r)}):me(s,function(m){return m.test(r)}),f;f=e.valueCallback?e.valueCallback(u):u,f=a.valueCallback?a.valueCallback(f):f;var h=t.slice(r.length);return{value:f,rest:h}}}function me(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function ce(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function he(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],o=t.match(e.parsePattern);if(!o)return null;var r=e.valueCallback?e.valueCallback(o[0]):o[0];r=a.valueCallback?a.valueCallback(r):r;var s=t.slice(i.length);return{value:r,rest:s}}}var ve=/^(\d+)(th|st|nd|rd)?/i,ge=/\d+/i,be={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ye={any:[/^b/i,/^(a|c)/i]},Me={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},we={any:[/1/i,/2/i,/3/i,/4/i]},pe={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},De={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Se={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Te={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},We={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Oe={ordinalNumber:he({matchPattern:ve,parsePattern:ge,valueCallback:function(t){return parseInt(t,10)}}),era:b({matchPatterns:be,defaultMatchWidth:"wide",parsePatterns:ye,defaultParseWidth:"any"}),quarter:b({matchPatterns:Me,defaultMatchWidth:"wide",parsePatterns:we,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:b({matchPatterns:pe,defaultMatchWidth:"wide",parsePatterns:De,defaultParseWidth:"any"}),day:b({matchPatterns:Se,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:Te,defaultMatchWidth:"any",parsePatterns:We,defaultParseWidth:"any"})},Ne=Oe,ke={code:"en-US",formatDistance:U,formatLong:Z,formatRelative:ae,localize:fe,match:Ne,options:{weekStartsOn:0,firstWeekContainsDate:1}},xe=ke;function N(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function Ce(e){return N({},e)}var O=1440,Fe=2520,D=43200,Ae=86400;function Ye(e,t,a){var n,i;c(2,arguments);var o=X(),r=(n=(i=a==null?void 0:a.locale)!==null&&i!==void 0?i:o.locale)!==null&&n!==void 0?n:xe;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=M(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var u=N(Ce(a),{addSuffix:Boolean(a==null?void 0:a.addSuffix),comparison:s}),f,h;s>0?(f=l(t),h=l(e)):(f=l(e),h=l(t));var m=L(h,f),k=(T(h)-T(f))/1e3,d=Math.round((m-k)/60),v;if(d<2)return a!=null&&a.includeSeconds?m<5?r.formatDistance("lessThanXSeconds",5,u):m<10?r.formatDistance("lessThanXSeconds",10,u):m<20?r.formatDistance("lessThanXSeconds",20,u):m<40?r.formatDistance("halfAMinute",0,u):m<60?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",1,u):d===0?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",d,u);if(d<45)return r.formatDistance("xMinutes",d,u);if(d<90)return r.formatDistance("aboutXHours",1,u);if(d<O){var x=Math.round(d/60);return r.formatDistance("aboutXHours",x,u)}else{if(d<Fe)return r.formatDistance("xDays",1,u);if(d<D){var C=Math.round(d/O);return r.formatDistance("xDays",C,u)}else if(d<Ae)return v=Math.round(d/D),r.formatDistance("aboutXMonths",v,u)}if(v=H(h,f),v<12){var F=Math.round(d/D);return r.formatDistance("xMonths",F,u)}else{var P=v%12,w=Math.floor(v/12);return P<3?r.formatDistance("aboutXYears",w,u):P<9?r.formatDistance("overXYears",w,u):r.formatDistance("almostXYears",w+1,u)}}function _e(e){A().notify({position:"top",message:e,color:"purple"})}function y(e){return e.toString().padStart(2,"0")}function Re(e){const t=new Date(e),a=t.getYear()+1900,n=t.getMonth()+1,i=t.getDate(),o=t.getHours(),r=t.getMinutes(),s=t.getSeconds();return`${a}-${y(n)}-${y(i)} ${y(o)}:${y(r)}:${y(s)}`}function je(e){return Y.unix(parseInt(e)).tz("UTC").format("MMMM DD, YYYY HH:mm")}function Ee(e){if(e){const t=Ye(new Date(parseInt(e)*1e3),new Date);return t.includes("less")?t:t+" ago."}else return"-"}export{Ee as a,Re as d,Ye as f,je as l,_e as s};
