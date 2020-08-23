(this["webpackJsonpcovid-dash"]=this["webpackJsonpcovid-dash"]||[]).push([[0],{108:function(e,a,t){e.exports=t(237)},237:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),o=t.n(c),l=t(64),i=t(7),s=t(5),u=t.n(s),m=t(8),d=t(18),p=t(255),v=t(256),f=t(104),E=t(257),h=t(258),b=t(259),g=t(260),y=t(261),x=t(262),N=t(263),C=t(253),_=t(254),w=t(265),S=t(238),k=t(51),j=t.n(k),O=function(){return r.a.createElement("div",{className:j.a.root},r.a.createElement(C.a,{position:"static",style:{background:"#639ACE"}},r.a.createElement(_.a,{variant:"dense"},r.a.createElement(w.a,{href:"/",className:j.a.button,color:"inherit"},r.a.createElement(S.a,{variant:"h6",className:j.a.title},"COVID-19-DASH")),r.a.createElement(w.a,{href:"/",color:"inherit"},"World"),r.a.createElement(w.a,{href:"/singapore",color:"inherit"},"Singapore"),r.a.createElement(w.a,{href:"/summary",color:"inherit"},"Summary"),r.a.createElement(w.a,{href:"/news",color:"inherit"},"News"),r.a.createElement(w.a,{href:"https://github.com/thchong-code/covid-dash",color:"inherit"},"Github"))))},D=t(25),F=t.n(D),A=function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.covid19api.com/summary",e.next=4,F.a.get("https://api.covid19api.com/summary");case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t="https://api.covid19api.com/total/country",a&&(n="".concat(t,"/").concat(a)),a||(n="".concat(t,"/singapore")),e.prev=4,e.next=7,F.a.get(n);case 7:return r=e.sent,e.abrupt("return",r.data);case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(a){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://covid19.mathdro.id/api/daily",e.next=4,F.a.get("https://covid19.mathdro.id/api/daily");case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(u.a.mark((function e(){var a,t,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://covid19.mathdro.id/api/countries/Singapore",e.next=4,F.a.get("https://covid19.mathdro.id/api/countries/Singapore");case 4:return a=e.sent,t=a.data.confirmed.value,n=a.data.recovered.value,r=a.data.deaths.value,c={infected:t,recovered:n,active:t-r-n,deaths:r},e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(u.a.mark((function e(){var a,t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.covid19api.com/summary",e.next=4,F.a.get("https://api.covid19api.com/summary");case 4:return a=e.sent,t=a.data,n=t.Countries,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://api.coronatracker.com/news/trending",e.next=4,F.a.get("http://api.coronatracker.com/news/trending");case 4:return a=e.sent,t=a.data.items,e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=t(26),H=t.n(P),V=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,c(a),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=t.map((function(e,a){return r.a.createElement(p.a,{key:a},r.a.createElement(v.a,null,e.Country),r.a.createElement(v.a,null,e.NewConfirmed),r.a.createElement(v.a,null,e.NewDeaths),r.a.createElement(v.a,null,e.NewRecovered),r.a.createElement(v.a,null,e.TotalConfirmed),r.a.createElement(v.a,null,e.TotalDeaths),r.a.createElement(v.a,null,e.TotalRecovered))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:H.a.container},r.a.createElement(f.a,{className:H.a.container},r.a.createElement(E.a,{spacing:3,align:"center"},r.a.createElement(E.a,{item:!0,component:h.a,className:H.a.container},r.a.createElement(b.a,{className:H.a.container},r.a.createElement(g.a,{className:H.a.container},r.a.createElement(y.a,{stickyHeader:!0,"aria-label":"sticky table",className:H.a.container},r.a.createElement(x.a,{className:H.a.head},r.a.createElement(p.a,{hover:!0,role:"checkbox",tabIndex:-1},r.a.createElement(v.a,{key:1},"Country"),r.a.createElement(v.a,{key:2},"Newly Confirmed"),r.a.createElement(v.a,{key:3},"New Deaths"),r.a.createElement(v.a,{key:4},"Newly Recovered"),r.a.createElement(v.a,{key:5},"Confirmed"),r.a.createElement(v.a,{key:6},"Deaths"),r.a.createElement(v.a,{key:7},"Recovered"))),r.a.createElement(N.a,null,o),r.a.createElement("caption",null,"Courtesy of https://api.covid19api.com")))))))))},z=t(39),G=t(19),J=t.n(G),W=t(20),Y=t.n(W),Z=t(9),K=t.n(Z),M=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=t.infected,l=t.recovered,i=t.deaths,s=t.active,p=(new Date).toDateString();return o?r.a.createElement("div",{className:K.a.container},r.a.createElement(E.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.infected)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Confirmed"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:o,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},p),r.a.createElement(S.a,{variant:"body2"},"Number of infections"))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.active)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Active"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:s,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},p),r.a.createElement(S.a,{variant:"body2"},"Number of active cases"))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.recovered)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:l,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},p),r.a.createElement(S.a,{variant:"body2"},"Number of recoveries"))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.deaths)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:i,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},p),r.a.createElement(S.a,{variant:"body2"},"Number of fatalities"))))):"Loading..."},U=t(40),X=t.n(U),q=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)({}),l=Object(d.a)(o,2),i=l[0],s=l[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,B();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=s,e.next=8,T();case 8:e.t3=e.sent,(0,e.t2)(e.t3);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=t.length?r.a.createElement(z.Line,{data:{labels:t.map((function(e){return new Date(e.Date).toDateString()})),datasets:[{data:t.map((function(e){return e.Confirmed})),label:"Confirmed",borderColor:"#FFA500",backgroundColor:"rgba(255,165,0, 0.3)",fill:"origin"},{data:t.map((function(e){return e.Deaths})),label:"Deaths",borderColor:"#FF0000",backgroundColor:"rgba(255,0,0, 0.3)",fill:"origin"},{data:t.map((function(e){return e.Recovered})),label:"Recovered",borderColor:"#00FF7F",backgroundColor:"rgba(0,255,127, 0.3)",fill:"origin"},{data:t.map((function(e){return e.Active})),label:"Active",borderColor:"#FFFF00",backgroundColor:"rgba(255,255,0, 0.3)",fill:"origin"}]},options:{maintainAspectRatio:!0,responsive:!0}}):null,v=i?r.a.createElement(z.HorizontalBar,{data:{labels:["Confirmed","Recovered","Active","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255,165,0, 0.5)","rgba(0,255,127, 0.5)","rgba(255,255,0, 0.5)","rgba(255, 0, 0, 0.3)"],data:[i.infected,i.recovered,i.active,i.deaths]}]},options:{legend:{display:!1}}}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:X.a.container},r.a.createElement(M,null)),r.a.createElement("div",{className:X.a.container},r.a.createElement(E.a,{spacing:3,align:"center"},r.a.createElement(E.a,{item:!0,component:h.a,className:X.a.card},r.a.createElement(b.a,null,r.a.createElement(S.a,{variant:"h5",align:"center"},"Singapore Trends \ud83c\uddf8\ud83c\uddec"),p)),r.a.createElement(E.a,{item:!0,component:h.a,className:X.a.card},r.a.createElement(b.a,null,r.a.createElement(S.a,{variant:"h5",align:"center"},"Singapore Summary \ud83c\uddf8\ud83c\uddec"),v)))))},Q=t(264),$=t(99),ee=t(52),ae=t.n(ee),te=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:a=e.sent,c(a),console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=t.map((function(e,a){return r.a.createElement("div",{className:ae.a.container},r.a.createElement(b.a,{className:ae.a.card},r.a.createElement(S.a,{variant:"h6",color:"textPrimary",gutterBotton:!0},$.countries[e.countryCode].name),r.a.createElement(S.a,{variant:"h6",color:"primary",gutterBottom:!0},e.title),r.a.createElement(S.a,{variant:"body2"},e.content),r.a.createElement(S.a,{variant:"caption"},"Source:\xa0",r.a.createElement(Q.a,{href:e.url},e.url)),r.a.createElement(S.a,{variant:"body2"},"Published:\xa0",new Date(e.publishedAt).toLocaleString())))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:ae.a.container},r.a.createElement(E.a,{spacing:3,align:"center"},r.a.createElement(E.a,{item:!0,component:h.a},o))))},ne=t(100),re=t(101),ce=t(103),oe=t(102),le=t(65),ie=t.n(le),se=function(e){var a=e.data,t=e.date,n=a.TotalConfirmed,c=a.TotalRecovered,o=a.TotalDeaths,l=n-o-c,i=new Date(t).toDateString();return n?r.a.createElement("div",{className:K.a.container},r.a.createElement(E.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.infected)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Confirmed"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:n,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},i),r.a.createElement(S.a,{variant:"body2"},"Number of infections"))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.active)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Active"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:l,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},i),r.a.createElement(S.a,{variant:"body2"},"Number of active cases"))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.recovered)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:c,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},i),r.a.createElement(S.a,{variant:"body2"},"Number of recoveries"))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:2,className:Y()(K.a.card,K.a.deaths)},r.a.createElement(b.a,null,r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(S.a,{variant:"h5"},r.a.createElement(J.a,{start:0,end:o,duration:2.5,seperator:","})),r.a.createElement(S.a,{color:"textSecondary"},i),r.a.createElement(S.a,{variant:"body2"},"Number of fatalities"))))):"Loading..."},ue=t(66),me=t.n(ue),de=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=t.length?r.a.createElement(z.Line,{data:{labels:t.map((function(e){return new Date(e.reportDate).toDateString()})),datasets:[{data:t.map((function(e){return e.totalConfirmed})),label:"Confirmed",borderColor:"#FFA500",backgroundColor:"rgba(255,165,0, 0.3)",fill:"origin"},{data:t.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"#FF0000",backgroundColor:"rgba(255,0,0, 0.3)",fill:"origin"},{data:t.map((function(e){return e.totalConfirmed-e.deaths.total})),label:"Active / Recovered",borderColor:"#8A2BE2",backgroundColor:"rgba(138,43,226, 0.3)",fill:"origin"}]},options:{maintainAspectRatio:!0,responsive:!0}}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:me.a.container},r.a.createElement(E.a,{spacing:3,align:"center"},r.a.createElement(E.a,{item:!0,component:h.a,className:me.a.card},r.a.createElement(b.a,null,r.a.createElement(S.a,{variant:"h5",align:"center"},"World Trends \ud83c\udf0e"),o)))))},pe=function(e){Object(ce.a)(t,e);var a=Object(oe.a)(t);function t(){var e;Object(ne.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},dataDynamic:{},date:"",country:""},e}return Object(re.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:a=e.sent,this.setState({data:a.Global}),this.setState({date:a.Date});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data,a=this.state.date,t=this.state.country;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:ie.a.container},r.a.createElement(se,{data:e,date:a})),r.a.createElement("div",{className:ie.a.container},r.a.createElement(de,{country:t})))}}]),t}(r.a.Component),ve=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:pe}),r.a.createElement(i.a,{path:"/summary",component:V}),r.a.createElement(i.a,{path:"/singapore",component:q}),r.a.createElement(i.a,{path:"/news",component:te}))};o.a.render(r.a.createElement(l.a,{basename:"/covid-dash"},r.a.createElement(ve,null)),document.getElementById("root"))},26:function(e,a,t){e.exports={container:"Tables_container__1ZZll"}},40:function(e,a,t){e.exports={container:"Singapore_container__Oh8jz",card:"Singapore_card__34Cne"}},51:function(e,a,t){e.exports={button:"TopBar_button__2P3xO"}},52:function(e,a,t){e.exports={container:"News_container__kptau",card:"News_card__2V8V5"}},65:function(e,a,t){e.exports={container:"App_container__3Cyev"}},66:function(e,a,t){e.exports={container:"Charts_container__1Y8uv",card:"Charts_card__1_Yrv"}},9:function(e,a,t){e.exports={container:"Cards_container__2alDK",card:"Cards_card__2yU1P",infected:"Cards_infected__1EFcA",active:"Cards_active__TD9Xv",recovered:"Cards_recovered__947st",deaths:"Cards_deaths__2I0Ix"}}},[[108,1,2]]]);
//# sourceMappingURL=main.3b59f3b7.chunk.js.map