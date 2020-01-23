(this["webpackJsonpweather-api-rr"]=this["webpackJsonpweather-api-rr"]||[]).push([[0],{38:function(e,t,a){e.exports=a(72)},49:function(e,t,a){},50:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),r=a.n(l),i=a(12),o=a(10),s=a(35),m=a(18),u={hourlyTemp:null},d={nearbyTemp:null,temp:null},p=Object(o.combineReducers)({hourlyTemp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HOURLY_TEMP":return Object(m.a)({},e);default:return e}},temp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log("REDUCER",t.payload),t.type){case"NEARBY_TEMP":return Object(m.a)({},e,{nearbyTemp:t.payload});default:return e}}}),b=a(36),h=(a(47),a(48),a(49),a(13)),E=a(11),y=a(23),v=a(17),g=(a(50),a(51)),N=function(e){var t=Object(i.b)(),a=Object(n.useState)(null),l=Object(y.a)(a,2),r=l[0],o=l[1],s=Object(n.useState)(null),m=Object(y.a)(s,2),u=m[0],d=m[1];console.log("lat",r),console.log(u);var p=Object(i.c)((function(e){return e.temp.nearByTemp}));console.log("DATA",p),Object(n.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(h):v.b.error("Geolocation is not supported by this browser.")}),[]),Object(n.useEffect)((function(){p&&E(p)}),[p]);var b=function(){var e,a;r&&u&&t((e=r,a=u,function(t){console.log("ACTIONS LOGG",a),console.log("ACTIONS LAT",e),g.get("http://localhost:5001/weatherApi/nearby?lat=".concat(e,"&lon=").concat(a)).then((function(e){console.log("ACTIONS DATA",e),t({type:"NEARBY_TEMP",payload:e})})).catch((function(e){t({type:"ERROR_FETCHING",payload:e})}))}))};function h(e){o(e.coords.latitude),d(e.coords.longitude)}var E=function(e){document.querySelector("#nearby-city").innerHTML=e.name,document.querySelector("#nearby-temp").innerHTML="".concat(Math.floor(e.main.temp)," \xb0C "),document.querySelector("#weather-icon").innerHTML='<img src = "images/'.concat(e.weather[0].main,'-256.png"\n            alt = ').concat(e.weather[0].main," > "),document.querySelector("#nearby-weather-type").innerHTML=e.weather[0].main};return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 containers"},c.a.createElement("div",{className:"main-title"},c.a.createElement("h1",null,"Weather Api"),c.a.createElement("input",{className:"btn1",onClick:b,id:"nearbydata-button",type:"submit",name:"q",value:"Nearby"}),c.a.createElement("span",{role:"img","aria-label":"Add"},"\ud83d\udc4d")),c.a.createElement("div",{id:"nearby-weather"},c.a.createElement("span",{id:"nearby-city"}),c.a.createElement("p",{id:"current-date"}),c.a.createElement("p",{id:"nearby-temp"}),c.a.createElement("div",{id:"weather-icon"},c.a.createElement("img",{src:"/images/Clear-256.png",alt:"rainbow"})),c.a.createElement("p",{id:"nearby-weather-type"})),c.a.createElement("h3",null,"Search City"),c.a.createElement("div",{className:"search-city"},c.a.createElement("input",{id:"search-city",type:"search",placeholder:"Enter City",name:"q",required:!0}),c.a.createElement("input",{className:"btn1",id:"search-city-button",type:"submit",placeholder:"Search City",name:"q"}),c.a.createElement("input",{className:"btn1",id:"search-city-hourly-button",type:"submit",placeholder:"Search City",name:"q",value:"Hourly"}),c.a.createElement("input",{className:"btn1 line-graph",type:"submit",name:"q",value:"Graph",style:{visibility:"hidden"}}),c.a.createElement("a",{className:"nav-item nav-link",href:"#graphs"},"Graphs Div")),c.a.createElement("div",null,c.a.createElement("ul",{className:"hourly-data"}))),c.a.createElement("div",{className:"col-md-6 table-div",style:{visibility:"hidden"}},c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Temp"),c.a.createElement("th",{scope:"col"},"Weather"),c.a.createElement("th",{scope:"col"},"Wind m/s"))),c.a.createElement("tbody",{id:"d1"})))))),c.a.createElement("div",{className:"stats-btns",style:{visibility:"hidden"}},c.a.createElement("input",{className:"btn1 temperature",type:"submit",name:"q",value:"Temparature"}),c.a.createElement("input",{className:"btn1 wind-speed",type:"submit",name:"q",value:"Wind Speed"}),c.a.createElement("input",{className:"btn1 humidity",type:"submit",name:"q",value:"Humidity"}),c.a.createElement("input",{className:"btn1 pressure",type:"submit",name:"q",value:"Pressure"}),c.a.createElement("input",{className:"btn1 hide-table",type:"submit",name:"q",value:"Hide"})),c.a.createElement("div",{className:"row graph-div",id:"graphs"},c.a.createElement("canvas",{className:"speed-chart",width:"300",height:"300"})))},f=function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark"},c.a.createElement("div",null,c.a.createElement(h.b,{exact:!0,activeClassName:"active",to:"/",className:" col s5 black-text"},"Home"),c.a.createElement(h.b,{exact:!0,activeClassName:"active",to:"/chat",className:"col s5 center black-text"},"About"))))},w=function(){return c.a.createElement("h1",{style:{display:"flex"}},"Page Not Found")},O=function(){return c.a.createElement("h1",{style:{display:"flex"}},"About")},T=function(){Object(i.b)();return Object(n.useEffect)((function(){}),[]),c.a.createElement("div",{className:"Navigation"},c.a.createElement(f,null),c.a.createElement(v.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",component:N}),c.a.createElement(E.a,{exact:!0,path:"/about",component:O}),c.a.createElement(E.a,{component:w})))};a(71);var C=function(){return c.a.createElement(h.a,null,c.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=Object(o.createStore)(p,void 0,Object(b.composeWithDevTools)(Object(o.applyMiddleware)(s.a)));r.a.render(c.a.createElement(i.a,{store:j},c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.9e1acbba.chunk.js.map