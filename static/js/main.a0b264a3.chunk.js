(this["webpackJsonpcovid-dash"]=this["webpackJsonpcovid-dash"]||[]).push([[0],{374:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=374},423:function(e,t,a){e.exports=a(611)},608:function(e,t,a){},609:function(e,t,a){},611:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(18),c=a.n(o),i=a(279),l=a(33),s=a(14),u=a.n(s),m=a(22),d=a(30),f=a(363),p=a(108),b=a.n(p),g=a(118),E=a.n(g),h=a(109),y=a.n(h),j=a(116),O=a.n(j),v=a(74),w=a.n(v),C=a(73),k=a.n(C),x=a(110),R=a.n(x),N=a(111),S=a.n(N),T=a(113),A=a.n(T),P=a(114),D=a.n(P),F=a(115),I=a.n(F),_=a(119),B=a.n(_),L=a(112),H=a.n(L),M=a(117),z=a.n(M),Y=a(120),V=a.n(Y),G=a(370),q=a(150),J=a(638),U=a(364),W=a(640),K=a(641),Q=a(101),X=a.n(Q),Z=a(639),$=a(349),ee=a(103),te=Object(f.a)({root:{backgroundColor:"rgb(92, 219, 149, 0.2)",padding:"0% !important",margin:"0% !important"},root1:{padding:"1%",textAlign:"justify",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.2)"},title:{flexGrow:1,textAlign:"start",paddingLeft:"inherit"}}),ae=function(){var e=te();return n.a.createElement(n.a.Fragment,null,n.a.createElement(Z.a,{position:"static",color:"transparent",elevation:0,className:e.root},n.a.createElement($.a,null,n.a.createElement(ee.a,{variant:"h6",className:e.title},n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud835\uddd6\ud835\udde2\ud835\udde9\ud835\udddc\ud835\uddd7\ud83e\udda0\ud835\udde7\ud835\udde5\ud835\uddd4\ud835\uddd6\ud835\uddde\ud835\uddd8\ud835\udde5")),n.a.createElement(U.a,{size:"large",href:" #/",color:"secondary",className:e.current},"Home"),n.a.createElement(U.a,{size:"large",href:" #/globe",color:"secondary",className:e.current},"Globe"),n.a.createElement(U.a,{size:"large",href:" #/summary",color:"secondary",className:e.current},"Summary"),n.a.createElement(U.a,{size:"large",href:" #/news",color:"secondary",className:e.current},"News"),n.a.createElement(U.a,{size:"large",href:" #/about",color:"secondary",className:e.current},"About"),n.a.createElement(U.a,{size:"large",onClick:function(){return window.location.reload(!1)},color:"secondary",className:e.current},n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud83d\udd04")))),n.a.createElement(q.a,{elevation:0,className:e.root1},n.a.createElement(ee.a,{variant:"button"},"For the latest travel advisories visit",n.a.createElement(U.a,{color:"secondary",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice",target:"_blank"},"World Health Organisation"))))},re=a(61),ne=a.n(re),oe=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://api.coronatracker.com/v3/stats/worldometer/global",e.next=4,ne.a.get("http://api.coronatracker.com/v3/stats/worldometer/global");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://covid19-api.org/api/timeline",e.next=4,ne.a.get("https://covid19-api.org/api/timeline");case 4:return t=e.sent,e.abrupt("return",t.data.reverse());case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.coronatracker.com/news/trending",e.next=4,ne.a.get("https://api.coronatracker.com/news/trending");case 4:return t=e.sent,a=t.data.items,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,r,n,o,c,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://disease.sh/v3/covid-19/countries?sort=todayCases",t="https://disease.sh/v3/covid-19/countries",a="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases",r="https://disease.sh/v3/covid-19/countries?yesterday=true",e.next=7,ne.a.get("https://disease.sh/v3/covid-19/countries?sort=todayCases");case 7:return n=e.sent,e.next=10,ne.a.get(a);case 10:return o=e.sent,e.next=13,ne.a.get(t);case 13:return c=e.sent,e.next=16,ne.a.get(r);case 16:return i=e.sent,l={today:n.data.slice(0,10),todayAll:c.data,yesterday:o.data.slice(0,10),yesterdayAll:i.data},e.abrupt("return",l);case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://corona.lmao.ninja/v2/countries?sort=cases",e.next=4,ne.a.get("https://corona.lmao.ninja/v2/countries?sort=cases");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ue=Object(f.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"}}),me={Add:Object(r.forwardRef)((function(e,t){return n.a.createElement(b.a,Object.assign({},e,{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return n.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return n.a.createElement(R.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return n.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return n.a.createElement(H.a,Object.assign({},e,{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return n.a.createElement(A.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(D.a,Object.assign({},e,{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(I.a,Object.assign({},e,{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(O.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return n.a.createElement(z.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return n.a.createElement(E.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return n.a.createElement(B.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return n.a.createElement(V.a,Object.assign({},e,{ref:t}))}))},de=function(){var e=ue(),t=Object(r.useState)([]),a=Object(d.a)(t,2),o=a[0],c=a[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,a=t.todayAll,c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);if(!o.map((function(e){return e.country})))return n.a.createElement(G.a,null);var i=o;return n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,null),n.a.createElement(q.a,{className:e.root},n.a.createElement(J.a,{spacing:3,align:"center"},n.a.createElement(J.a,{item:!0},n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/summary"},"Today"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/ytdsummary"},"Yesterday"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(J.a,{item:!0,component:W.a,className:e.card},n.a.createElement(K.a,null,n.a.createElement(X.a,{icons:me,columns:[{field:"country",title:"Country"},{field:"cases",title:"Total Cases"},{field:"todayCases",title:"New Cases"},{field:"deaths",title:"Total Deaths"},{field:"recovered",title:"Total Recovered"},{field:"todayRecovered",title:"New Recovered"},{field:"active",title:"Active"},{field:"casesPerOneMillion",title:"Cases per million"},{field:"deathsPerOneMillion",title:"Deaths per million"},{field:"population",title:"Total Population"},{field:"continent",title:"Continent"}],title:"#/summary"===window.location.hash?"Today's Summary":"Yesterday's Summary",data:i,options:{sorting:!0}}))))))},fe=a(82),pe=a(95),be=a.n(pe),ge=a(81),Ee=a.n(ge),he=(Object(f.a)({container:{margin:0,textAlign:"center"},card:{margin:"2% !important",marginBottom:"0% !important",borderRadius:"12px"},root:{padding:"2% !important",margin:"10% !important",marginTop:"4% !important",marginBottom:"2% !important",textAlign:"justify"},infected:{borderBottom:"20px solid orange",color:"orange",backgroundColor:"rgba(255,165,0, 0.1)"},active:{borderBottom:"20px solid turquoise",color:"#40E0D0",backgroundColor:"rgb(64,224,208, 0.1)"},recovered:{borderBottom:"20px solid springgreen",color:"green",backgroundColor:"rgb(0,128,0, 0.1)"},deaths:{borderBottom:"20px solid red",color:"red",backgroundColor:"rgb(255, 0, 0, 0.1)"}}),Object(f.a)({container:{display:"flexbox",justifyContent:"center",textAlign:"center",marginTop:"0% !important"},root:{width:"80%",marginLeft:"10% !important",marginTop:"2% !important"},root1:{width:"80%",marginLeft:"10% !important",marginTop:"1% !important"},card:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},card1:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},card2:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},card3:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"}}),a(642)),ye=a(410),je=Object(f.a)({container:{textAlign:"justify",boxShadow:"none !important",width:"100% !important",marginLeft:"10%"},card:{margin:"2% !important",borderColor:"transparent",textAlign:"justify"}}),Oe=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1],c=je();if(Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!a)return n.a.createElement(G.a,null);var i=a.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(K.a,{className:c.card},n.a.createElement(ee.a,{variant:"h6",color:"textPrimary",gutterBotton:!0},ye.countries[e.countryCode].name),n.a.createElement(ee.a,{variant:"h6",color:"primary",gutterBottom:!0},e.title),n.a.createElement(ee.a,{variant:"body2"},e.content),n.a.createElement(ee.a,{variant:"caption"},"Source:\xa0",n.a.createElement(he.a,{href:e.url,target:"_blank"},e.url)),n.a.createElement(ee.a,{variant:"body2"},"Published:\xa0",new Date(e.publishedAt).toLocaleString())))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,null),n.a.createElement(J.a,{elevation:0,container:!0,spacing:0},n.a.createElement(J.a,{item:!0},i)))},ve=a(286),we=Object(ve.a)({container:{textAlign:"center"},card:{margin:"2% !important",borderColor:"transparent",textAlign:"justify"}}),Ce=function(){var e=we();return n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,null),n.a.createElement(K.a,{elevation:1,className:e.card},n.a.createElement(ee.a,{align:"inherit",variant:"h5"},"We get our data from"),n.a.createElement(U.a,{href:"https://api.covid19api.com",target:"_blank",color:"secondary"},"covid19api"),n.a.createElement(U.a,{href:"https://covid19-api.org",target:"_blank",color:"secondary"},"covid19-api"),n.a.createElement(U.a,{href:"https://covid19.mathdro.id",target:"_blank",color:"secondary"},"covid19.mathdro.id"),n.a.createElement(U.a,{href:"https://api.coronatracker.com",target:"_blank",color:"secondary"},"CoronaTrackerAPI"),n.a.createElement(U.a,{href:"https://api.apify.com",target:"_blank",color:"secondary"},"Apify API"),n.a.createElement(U.a,{href:"https://disease.sh/",target:"_blank",color:"secondary"},"disease.sh")),n.a.createElement(K.a,{elevation:1,className:e.card},n.a.createElement(ee.a,{align:"inherit",variant:"h5"},"Content"),n.a.createElement(U.a,null,"Made with React, material-ui and chartjs")),n.a.createElement(K.a,{elevation:1,className:e.card},n.a.createElement(ee.a,{align:"inherit",variant:"h5"},"Code and Contributors"),n.a.createElement(U.a,{size:"large",href:" https://github.com/thchong-code/covid-dash",target:"_blank",color:"secondary"},"Github"),n.a.createElement(U.a,{size:"large",href:"https://github.com/imsamuel",target:"_blank",color:"secondary"},"imsamuel")),n.a.createElement(K.a,{elevation:1,className:e.card},n.a.createElement(ee.a,{align:"inherit",variant:"h5"},"Find me @"),n.a.createElement(U.a,{size:"large",href:" https://thchong-code.github.io/portfolio-webpage/#/",target:"_blank",color:"secondary"},"HC")))},ke=a(411),xe=a(412),Re=a(415),Ne=a(414),Se=a(643),Te=a(371),Ae=a(369),Pe=a(354),De=a(347),Fe=a(353),Ie=Object(f.a)({container:{textAlign:"center",width:"50% !important"},card:{margin:"2% !important",borderRadius:"12px"},root:{margin:"2% !important",padding:"2%",textAlign:"justify",width:"76%",marginLeft:"10% !important",marginTop:"0% !important",marginBottom:"1% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},root1:{padding:"1%",textAlign:"justify",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.2)"},infected:{borderBottom:"20px solid orange",color:"orange",backgroundColor:"rgba(255,165,0, 0.1)"},active:{borderBottom:"20px solid turquoise",color:"#40E0D0",backgroundColor:"rgb(64,224,208, 0.1)"},recovered:{borderBottom:"20px solid springgreen",color:"green",backgroundColor:"rgb(0,128,0, 0.1)"},deaths:{borderBottom:"20px solid red",color:"red",backgroundColor:"rgb(255, 0, 0, 0.1)"},tables:{maxHeight:"240px",width:"100% !important"},more:{alignItems:"center"}}),_e=function(e){var t=e.data,a=parseInt(t.totalConfirmed),o=parseInt(t.totalRecovered),c=parseInt(t.totalDeaths),i=parseInt(t.totalActiveCases),l=Ie(),s=Object(r.useState)([]),f=Object(d.a)(s,2),p=f[0],b=f[1],g=Object(r.useState)([]),E=Object(d.a)(g,2),h=E[0],y=E[1],j=[{id:"country",label:"Country"},{id:"todayCases",label:"Newly Confirmed"},{id:"todayDeaths",label:"New Deaths"}];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,a=t.today,r=t.yesterday,b(a),y(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=p?n.a.createElement(fe.HorizontalBar,{data:{labels:p.map((function(e){return e.country})),datasets:[{label:"New Cases",backgroundColor:"rgba(0,255,127, 0.5)",data:p.map((function(e){return e.todayCases}))},{label:"Deaths",backgroundColor:"rgba(0, 0, 225, 0.5)",data:p.map((function(e){return e.todayDeaths}))}]},options:{legend:{display:!0},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}):n.a.createElement(G.a,null),v=h?n.a.createElement(fe.HorizontalBar,{data:{labels:h.map((function(e){return e.country})),datasets:[{label:"New Cases",backgroundColor:"rgb(128,0,128, 0.5)",data:h.map((function(e){return e.todayCases}))},{label:"Deaths",backgroundColor:"yellow",data:h.map((function(e){return e.todayDeaths}))}]},options:{legend:{display:!0},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}):n.a.createElement(G.a,null);return a?n.a.createElement("div",null,n.a.createElement(J.a,{container:!0,spacing:3,justify:"center",borderRadius:16},n.a.createElement(J.a,{item:!0,component:W.a,xs:12,md:2,className:Ee()(l.card,l.infected)},n.a.createElement(K.a,null,n.a.createElement(ee.a,{gutterBottom:!0},"Confirmed"),n.a.createElement(ee.a,{variant:"h5"},n.a.createElement(be.a,{start:0,end:a,duration:2.5,separator:","})))),n.a.createElement(J.a,{item:!0,component:W.a,xs:12,md:2,className:Ee()(l.card,l.recovered)},n.a.createElement(K.a,null,n.a.createElement(ee.a,{gutterBottom:!0},"Recovered"),n.a.createElement(ee.a,{variant:"h5"},n.a.createElement(be.a,{start:0,end:o,duration:2.5,separator:","})))),n.a.createElement(J.a,{item:!0,component:W.a,xs:12,md:2,className:Ee()(l.card,l.active)},n.a.createElement(K.a,null,n.a.createElement(ee.a,{gutterBottom:!0},"Active"),n.a.createElement(ee.a,{variant:"h5"},n.a.createElement(be.a,{start:0,end:i,duration:2.5,separator:","})))),n.a.createElement(J.a,{item:!0,component:W.a,xs:12,md:2,className:Ee()(l.card,l.deaths)},n.a.createElement(K.a,null,n.a.createElement(ee.a,{gutterBottom:!0},"Deaths"),n.a.createElement(ee.a,{variant:"h5"},n.a.createElement(be.a,{start:0,end:c,duration:2.5,separator:","}))))),n.a.createElement(q.a,{elevation:0,className:l.root},n.a.createElement(ee.a,{variant:"h5",color:"textSecondary",gutterBottom:!0,style:{textAlign:"center"}},"Top 10 Today ",n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud83d\udcc8")),n.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(J.a,{item:!0},n.a.createElement(Se.a,{className:l.tables},n.a.createElement(Te.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(Ae.a,null,n.a.createElement(Pe.a,null,j.map((function(e){return n.a.createElement(De.a,{key:e.id},e.label)})))),n.a.createElement(Fe.a,null,p.map((function(e){return n.a.createElement(Pe.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.country},j.map((function(t){var a=e[t.id];return n.a.createElement(De.a,{key:t.id},a.toLocaleString())})))})))))),n.a.createElement("div",{className:l.container},n.a.createElement(J.a,{item:!0},O)))),n.a.createElement(q.a,{elevation:0,className:l.root},n.a.createElement(ee.a,{variant:"h5",color:"textSecondary",gutterBottom:!0,style:{textAlign:"center"}},"Top 10 Yesterday ",n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud83d\udcc8")),n.a.createElement(J.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(J.a,{item:!0},n.a.createElement(Se.a,{className:l.tables},n.a.createElement(Te.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(Ae.a,null,n.a.createElement(Pe.a,null,j.map((function(e){return n.a.createElement(De.a,{key:e.id},e.label)})))),n.a.createElement(Fe.a,null,h.map((function(e){return n.a.createElement(Pe.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.country},j.map((function(t){var a=e[t.id];return n.a.createElement(De.a,{key:t.id},a.toLocaleString())})))})))))),n.a.createElement("div",{className:l.container},n.a.createElement(J.a,{item:!0},v)),n.a.createElement(J.a,{item:!0},n.a.createElement(ee.a,{variant:"button"},n.a.createElement(U.a,{color:"secondary",className:l.more,href:"#/toptensummary"},"Comparison Tables Click Here")))))):null},Be=Object(f.a)({container:{display:"flexbox",textAlign:"center",width:"80%",justifyItems:"center"},card:{padding:"2%",width:"50%",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.1)",borderRadius:"12px"},card1:{padding:"2%",width:"50%",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.1)",borderRadius:"12px"},root:{marginTop:"0.5%",marginLeft:"10%",width:"80%"},more:{backgroundColor:"rgb(92, 219, 149, 0.2)"}}),Le=function(e){var t=e.data,a=Object(r.useState)([]),o=Object(d.a)(a,2),c=o[0],i=o[1],l=parseInt(t.totalConfirmed),s=parseInt(t.totalRecovered),f=parseInt(t.totalDeaths),p=parseInt(t.totalActiveCases),b=l+f+s,g=Be();Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,ce();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=l?n.a.createElement(fe.Doughnut,{data:{labels:["Infected","Recovered","Deaths","Active"],datasets:[{data:[l,s,f,p],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(0, 225, 0, 0.5)"]}]}}):null,h=c.length?n.a.createElement(fe.Line,{data:{labels:c.map((function(e){return new Date(e.last_update).toDateString()})),datasets:[{data:c.map((function(e){return e.total_cases})),label:"Confirmed",borderColor:"#FFA500",backgroundColor:"rgba(255,165,0, 0.3)",fill:"origin"},{data:c.map((function(e){return e.total_deaths})),label:"Deaths",borderColor:"#FF0000",backgroundColor:"rgba(255,0,0, 0.3)",fill:"origin"},{data:c.map((function(e){return e.total_recovered})),label:"Recovered",borderColor:"#00FF7F",backgroundColor:"rgba(0,255,127, 0.3)",fill:"origin"},{data:c.map((function(e){return e.total_cases-e.total_deaths-e.total_recovered})),label:"Active",borderColor:"#FFFF00",backgroundColor:"rgba(255,255,0, 0.3)",fill:"origin"}]},options:{maintainAspectRatio:!0,responsive:!0,scales:{xAxes:[{type:"time",ticks:{autoSkip:!0,maxTicksLimit:3}}],yAxes:[{ticks:{maxTicksLimit:4}}]}}}):null;return n.a.createElement(n.a.Fragment,null,n.a.createElement(q.a,{elevation:0,className:g.root},n.a.createElement(J.a,{xs:12,lg:12,container:!0,justify:"center",direction:"row"},n.a.createElement(J.a,{item:!0,component:W.a,className:g.card},n.a.createElement(ee.a,{variant:"button",align:"center"},"Trend"),h),n.a.createElement(J.a,{item:!0,component:W.a,className:g.card1},n.a.createElement(ee.a,{variant:"button",align:"center"},"Breakdown"),E,n.a.createElement(ee.a,{variant:"button",align:"center"},"Death Rate: ",(f/b*100).toFixed(2),"%")))))},He=(a(608),function(e){Object(Re.a)(a,e);var t=Object(Ne.a)(a);function a(){var e;Object(ke.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={data:{},dataDynamic:{},date:"",country:""},e}return Object(xe.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement(ae,null),n.a.createElement(_e,{data:e}),n.a.createElement(Le,{data:e})))}}]),a}(n.a.Component)),Me=Object(f.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"},more:{alignItems:"center"}}),ze={Add:Object(r.forwardRef)((function(e,t){return n.a.createElement(b.a,Object.assign({},e,{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return n.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return n.a.createElement(R.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return n.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return n.a.createElement(H.a,Object.assign({},e,{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return n.a.createElement(A.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(D.a,Object.assign({},e,{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(I.a,Object.assign({},e,{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(O.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return n.a.createElement(z.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return n.a.createElement(E.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return n.a.createElement(B.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return n.a.createElement(V.a,Object.assign({},e,{ref:t}))}))},Ye=function(){var e=Me(),t=Object(r.useState)([]),a=Object(d.a)(t,2),o=a[0],c=a[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,a=t.today,c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);if(!o.map((function(e){return e.country})))return n.a.createElement(G.a,null);var i=o;return n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,null),n.a.createElement(q.a,{className:e.root},n.a.createElement(J.a,{spacing:3,align:"center"},n.a.createElement(J.a,{item:!0},n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/toptensummary"},"Today"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/toptensummaryytd"},"Yesterday"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(J.a,{item:!0,component:W.a,className:e.card},n.a.createElement(K.a,null,n.a.createElement(X.a,{icons:ze,columns:[{field:"country",title:"Country"},{field:"cases",title:"Total Cases"},{field:"todayCases",title:"New Cases"},{field:"deaths",title:"Total Deaths"},{field:"recovered",title:"Total Recovered"},{field:"todayRecovered",title:"New Recovered"},{field:"active",title:"Active"},{field:"casesPerOneMillion",title:"Cases per million"},{field:"deathsPerOneMillion",title:"Deaths per million"},{field:"population",title:"Total Population"},{field:"continent",title:"Continent"}],title:"#/toptensummary"===window.location.hash?"Today's Summary":"Yesterday's Summary",data:i,options:{sorting:!0}}))))))},Ve=Object(f.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"}}),Ge={Add:Object(r.forwardRef)((function(e,t){return n.a.createElement(b.a,Object.assign({},e,{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return n.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return n.a.createElement(R.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return n.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return n.a.createElement(H.a,Object.assign({},e,{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return n.a.createElement(A.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(D.a,Object.assign({},e,{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(I.a,Object.assign({},e,{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(O.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return n.a.createElement(z.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return n.a.createElement(E.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return n.a.createElement(B.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return n.a.createElement(V.a,Object.assign({},e,{ref:t}))}))},qe=function(){var e=Ve(),t=Object(r.useState)([]),a=Object(d.a)(t,2),o=a[0],c=a[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,a=t.yesterdayAll,c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);if(!o.map((function(e){return e.country})))return n.a.createElement(G.a,null);var i=o;return n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,null),n.a.createElement(q.a,{className:e.root},n.a.createElement(J.a,{spacing:3,align:"center"},n.a.createElement(J.a,{item:!0,component:W.a,className:e.card},n.a.createElement(J.a,{item:!0},n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/summary"},"Today"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/ytdsummary"},"Yesterday"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(K.a,null,n.a.createElement(X.a,{icons:Ge,columns:[{field:"country",title:"Country"},{field:"cases",title:"Total Cases"},{field:"todayCases",title:"New Cases"},{field:"deaths",title:"Total Deaths"},{field:"recovered",title:"Total Recovered"},{field:"todayRecovered",title:"New Recovered"},{field:"active",title:"Active"},{field:"casesPerOneMillion",title:"Cases per million"},{field:"deathsPerOneMillion",title:"Deaths per million"},{field:"population",title:"Total Population"},{field:"continent",title:"Continent"}],title:"#/summary"===window.location.hash?"Today's Summary":"Yesterday's Summary",data:i,options:{sorting:!0}}))))))},Je=Object(f.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"}}),Ue={Add:Object(r.forwardRef)((function(e,t){return n.a.createElement(b.a,Object.assign({},e,{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return n.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return n.a.createElement(R.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return n.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return n.a.createElement(H.a,Object.assign({},e,{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return n.a.createElement(A.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(D.a,Object.assign({},e,{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(I.a,Object.assign({},e,{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(w.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return n.a.createElement(O.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return n.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return n.a.createElement(z.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return n.a.createElement(E.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return n.a.createElement(B.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return n.a.createElement(V.a,Object.assign({},e,{ref:t}))}))},We=function(){var e=Je(),t=Object(r.useState)([]),a=Object(d.a)(t,2),o=a[0],c=a[1];Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:t=e.sent,a=t.yesterday,c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);if(!o.map((function(e){return e.country})))return n.a.createElement(G.a,null);var i=o;return n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,null),n.a.createElement(q.a,{className:e.root},n.a.createElement(J.a,{spacing:3,align:"center"},n.a.createElement(J.a,{item:!0},n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/toptensummary"},"Today"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/toptensummaryytd"},"Yesterday"),n.a.createElement(U.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(J.a,{item:!0,component:W.a,className:e.card},n.a.createElement(K.a,null,n.a.createElement(X.a,{icons:Ue,columns:[{field:"country",title:"Country"},{field:"cases",title:"Total Cases"},{field:"todayCases",title:"New Cases"},{field:"deaths",title:"Total Deaths"},{field:"recovered",title:"Total Recovered"},{field:"todayRecovered",title:"New Recovered"},{field:"active",title:"Active"},{field:"casesPerOneMillion",title:"Cases per million"},{field:"deathsPerOneMillion",title:"Deaths per million"},{field:"population",title:"Total Population"},{field:"continent",title:"Continent"}],title:"#/toptensummary"===window.location.hash?"Today's Summary":"Yesterday's Summary",data:i,options:{sorting:!0}}))))))},Ke=a(646),Qe=a(647),Xe=a(645),Ze=a(648),$e=(a(609),function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(!1),i=Object(d.a)(c,2),l=i[0],s=i[1];return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(a),n.a.createElement(n.a.Fragment,null,n.a.createElement(ae,null),n.a.createElement(Ke.a,{center:[8,0],zoom:2.3},n.a.createElement(Qe.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",attribution:'\xa9 <a href="https://stadiamaps.com/">Stadia Maps</a>, \xa9 <a href="https://openmaptiles.org/">OpenMapTiles</a> \xa9 <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}),a.slice(0,10).map((function(e){return n.a.createElement(Xe.a,{key:e.countryInfo._id,center:[e.countryInfo.lat,e.countryInfo.long],onClick:function(){return s(e)},radius:24,color:"red"})})),a.slice(10,20).map((function(e){return n.a.createElement(Xe.a,{key:e.countryInfo._id,center:[e.countryInfo.lat,e.countryInfo.long],onClick:function(){return s(e)},radius:14,color:"orange"})})),a.slice(20,a.length+1).map((function(e){return n.a.createElement(Xe.a,{key:e.countryInfo._id,center:[e.countryInfo.lat,e.countryInfo.long],onClick:function(){return s(e)},radius:8,color:"green"})})),l&&n.a.createElement(Ze.a,{position:[l.countryInfo.lat,l.countryInfo.long],onClose:function(){return s(!1)}},n.a.createElement("div",null,n.a.createElement("h2",null,l.country),n.a.createElement("p",null,"Cases:\xa0",l.cases.toLocaleString()),n.a.createElement("p",null,"Deaths:\xa0",l.deaths.toLocaleString()),n.a.createElement("p",null,"Active:\xa0",l.active.toLocaleString()),n.a.createElement("p",null,"Recovered:\xa0",l.recovered.toLocaleString()),n.a.createElement("p",null,"Critical:\xa0",l.critical.toLocaleString())))))}),et=function(){return n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:He}),n.a.createElement(l.a,{path:"/summary",component:de}),n.a.createElement(l.a,{path:"/ytdsummary",component:qe}),n.a.createElement(l.a,{path:"/toptensummary",component:Ye}),n.a.createElement(l.a,{path:"/toptensummaryytd",component:We}),n.a.createElement(l.a,{path:"/globe",component:$e}),n.a.createElement(l.a,{path:"/news",component:Oe}),n.a.createElement(l.a,{path:"/about",component:Ce}))};c.a.render(n.a.createElement(i.a,{basename:"/covid-dash/"},n.a.createElement(et,null)),document.getElementById("root"))}},[[423,1,2]]]);
//# sourceMappingURL=main.a0b264a3.chunk.js.map