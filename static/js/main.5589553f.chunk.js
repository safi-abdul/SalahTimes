(this["webpackJsonpsalah-times"]=this["webpackJsonpsalah-times"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),s=n(6),i=n.n(s),o=(n(12),n(2)),u=n.n(o),h=n(3),j=n(4);var d=function(t){var e=Object(c.useState)({}),n=Object(j.a)(e,2),a=n[0],s=n[1];function i(t){return o.apply(this,arguments)}function o(){return(o=Object(h.a)(u.a.mark((function t(e){var n,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URL("http://api.aladhan.com/v1/timings")).searchParams.append("latitude",e.lat),n.searchParams.append("longitude",e.long),n.searchParams.append("method",2),n.searchParams.append("school",0),n.searchParams.append("annual","false"),t.next=8,fetch(n,{method:"GET"});case 8:return r=t.sent,t.next=11,r.json();case 11:return c=t.sent,t.abrupt("return",c.data.timings);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,i(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var d=function(t){if(t){var e=t.split(":");return(parseInt(e[0])+11)%12+1+":"+e[1]}};return a?Object(r.jsx)("div",{children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Fajr"}),Object(r.jsx)("th",{children:"Dhuhr"}),Object(r.jsx)("th",{children:"Asr"}),Object(r.jsx)("th",{children:"Maghrib"}),Object(r.jsx)("th",{children:"Isha"})]})}),Object(r.jsx)("tbody",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:d(a.Fajr)}),Object(r.jsx)("td",{children:d(a.Dhuhr)}),Object(r.jsx)("td",{children:d(a.Asr)}),Object(r.jsx)("td",{children:d(a.Maghrib)}),Object(r.jsx)("td",{children:d(a.Isha)})]})})]})}):Object(r.jsx)("div",{children:"Loading"})};var l=function(){var t=Object(c.useState)({}),e=Object(j.a)(t,2),n=e[0],a=e[1],s={};function i(){return new Promise((function(t,e){if(navigator.geolocation)return navigator.geolocation.getCurrentPosition((function(e){s={lat:e.coords.latitude,long:e.coords.longitude},t(s)}));e(new Error("Can't find geolocation"))}))}return Object(c.useEffect)((function(){function t(){return(t=Object(h.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,i();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),n.lat&&n.long?Object(r.jsx)("div",{children:Object(r.jsx)(d,{lat:n.lat,long:n.long})}):Object(r.jsx)("div",{children:"Loading"})};var p=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(l,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.5589553f.chunk.js.map