import{_ as p,f as u,r as o,k as _,w as h,n as m,p as g,bk as v,i as y,u as f,t as w,b3 as z,B as d,q as $}from"./index.16a70692.js";const k=u({name:"WindyMap",props:{gps:{type:Array,required:!0},size:{type:String,required:!0},zoom:{type:Number,default:6.3}},setup(e){const s=o(null),n=o(null);_(()=>{const i={key:"ATW8Hrl7iB1MuV7e9PgueSw4mhpXCkMH",verbose:!0,model:"ecmwf",lat:e.gps[0].lat,lon:e.gps[0].lon,zoom:e.zoom,englishLabels:!0,graticule:!1,latlon:!0};windyInit(i,r=>{const{map:t}=r;t.options.container=s.value;const c=L.icon({iconUrl:"/icons/marker-icon-2x-red.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]});e.gps.map(l=>{L.marker([l.lat,l.lon],{icon:c}).addTo(t).bindTooltip(l.name)}),t.panTo([e.gps[0].lat,e.gps[0].lon])})}),h(()=>e.gps,()=>{n.value&&n.value.setLatLng([e.gps.lat,e.gps.lon])});const a=o(e.size);return{windyContainer:s,size:a}}});function W(e,s,n,a,i,r){return m(),g("div",{id:"windy",ref:"windyContainer",style:v(e.size)},null,4)}var M=p(k,[["render",W],["__scopeId","data-v-49e89e6c"]]),S=u({name:"WeatherPage",components:{WindyMap:M},setup(){const e=y("store"),s=f(),n=o(s.params.site);o([]);const a=o(""),i=o([{lat:13.8118,lon:100.505119}]),r=()=>w.post("/loadsites",{data:{site:n.value}},{headers:{"Content-Type":"application/json",Authorization:e.state.token}}).then(t=>(console.log("loadsite",n.value,t.data.results),t.data.results[0]));return _(async()=>{const t=await r();a.value=t.province;const c=t.photos[0].gps;console.log("sites",t),i.value=[{lat:c.GPSLatitude,lon:c.GPSLongitude,name:t.name}]}),{province:a,location:i}}});const b={class:"row"},C={class:"col-12"},A={class:"col-12"},B=["src"];function P(e,s,n,a,i,r){const t=z("WindyMap");return m(),g("div",b,[d("div",C,[$(t,{gps:e.location,size:"width:100%;height:500px;"},null,8,["gps"])]),d("div",A,[d("iframe",{src:`https://www.tmd.go.th/weatherForecast7DaysWidget?province=${e.province}`,height:"345",width:"100%",scrolling:"no",frameborder:"0"},null,8,B)])])}var x=p(S,[["render",P]]);export{x as default};
