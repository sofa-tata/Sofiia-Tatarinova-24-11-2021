(this["webpackJsonpherolo-weather"]=this["webpackJsonpherolo-weather"]||[]).push([[0],{123:function(e,t,a){},125:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(11),c=a.n(r),i=(a(123),a(29)),o=a.n(i),s=a(44),l=(a(125),a(45)),u=a.n(l),p=a(36),d=a(111),b=a(53),j=a(194),m=a(195),x=a(103),h=a.n(x),f=a(202),O=a(188),g=a(5),v=a(203),y=Object(O.a)((function(e){return{search:{fill:e.palette.input.search}}})),k=Object(g.a)((function(e){return{popupIndicatorOpen:{transform:"rotate(0deg)"},root:{"& .MuiInput-underline:after":{borderBottom:"1px solid ".concat(e.palette.input.stroke)},"& .MuiInput-underline:hover:before":{borderBottomColor:e.palette.input.strokeBefore},"& .MuiInput-underline:before":{borderBottom:"1px solid ".concat(e.palette.input.stroke)},"& .MuiInputBase-input":{color:e.palette.text.main}},inputRoot:{"& input::placeholder":{color:e.palette.input.placeholder}},paper:{"&.MuiAutocomplete-paper":{backgroundColor:e.palette.background.paper}},option:{"&.MuiAutocomplete-option":{color:e.palette.text.option,"&:hover":{backgroundColor:e.palette.background.rowHover}}},listbox:{"&.MuiAutocomplete-listbox":{"&::-webkit-scrollbar":{width:"3px",height:"3px"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 5px #FFFFFF",borderRadius:"10px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"grey",borderRadius:"10px"}}}}}))(v.a),C=a(39),w="cy3jy1dYWJFfXqR4Ke2vnFdq88MmrdDW",F="https://dataservice.accuweather.com",S="/locations/v1/cities/autocomplete",N="/currentconditions/v1",T="/forecasts/v1/daily/5day",A="/locations/v1/cities/geoposition/search",I={text:{main:"#F6F6F6",appbar:"#F6F6F6",container:"#1A1A1A",input:"#232323",option:"#F6F6F6",yellow:"rgba(243, 225, 107)",menu:"#8c8cff",day:"#1A1A1A"},background:{appbar:"#323232",main:"rgb(255, 255, 255, .7)",paper:"#323232",favorite:"#8c8cff",favoriteHover:"#6d6dff",day:"rgb(255, 255, 255, .8)",rowHover:"#1A1A1A"},button:{toggleSelected:"rgb(255,255,255, .6)",toggleSelectedHover:"rgb(255,255,255, .5)"},input:{stroke:"#F6F6F6",strokeBefore:"rgb(255, 255, 255, .7)",strokeHover:"rgb(255, 255, 255, .3)",placeholder:"rgb(255, 255, 255, .7)",search:"#F6F6F6"}},M={text:{main:"#1A1A1A",appbar:"#323232",container:"#1A1A1A",input:"#232323",option:"#232323",yellow:"#edd700",menu:"#6d6dff",day:"#F6F6F6"},background:{appbar:"#F6F6F6",primary:"#000000",main:"rgba(48, 48, 48, 0.8)",paper:"#F6F6F6",favorite:"rgba(0, 0, 255, 0.4)",favoriteHover:"rgba(0, 0, 255, 0.5)",day:"rgba(48, 48, 48, 0.7)",rowHover:"#F6F6F6"},button:{toggleSelected:"rgb(255,255,255, .6)",toggleSelectedHover:"rgb(255,255,255, .3)"},input:{stroke:"#000000",strokeBefore:"rgba(48, 48, 48, 0.8)",strokeHover:"rgb(255, 255, 255, .3)",placeholder:"rgba(48, 48, 48, 0.8)",search:"#1A1A1A"}},W=Object(C.a)({name:"snackbar",initialState:{visible:!1,timeout:3e3,message:"",type:"error"},reducers:{turnOnSnackbar:function(e,t){e.visible=!0,e.timeout=t.payload.timeout,e.message=t.payload.message,e.type=t.payload.type},turnOffSnackbar:function(e){e.visible=!1}}}),L=null,z=function(){return function(e){e(R()),clearTimeout(L)}},B=function(e){var t=e.type,a=e.message,n=e.timeout,r=void 0===n?2e3:n;return function(e){e(H({type:t,message:a,timeout:r})),L=setTimeout((function(){e(z())}),r)}},D=W.actions,H=D.turnOnSnackbar,R=D.turnOffSnackbar,V=W.reducer,E=Object(C.a)({name:"main",initialState:{themeMode:"light",citiesOptions:[],currentCity:{value:null,inputValue:""},currentWeather:null,fiveDaysForecast:[]},reducers:{setCitiesOptions:function(e,t){e.citiesOptions=t.payload},setCurrentCity:function(e,t){e.currentCity[t.payload.key]=t.payload.value},setCurrentWeather:function(e,t){e.currentWeather=t.payload},setFiveDaysForecast:function(e,t){e.fiveDaysForecast=t.payload},setThemeMode:function(e,t){e.themeMode=t.payload}}}),U=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(F).concat(S),{params:{apikey:w,q:e}});case 3:200===(n=t.sent).status&&n.data.length&&a(K(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(B({type:"error",message:"Something went wrong",timeout:3e3}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},P=E.actions,K=P.setCitiesOptions,_=P.setCurrentCity,q=P.setCurrentWeather,J=P.setFiveDaysForecast,Y=P.setThemeMode,X=E.reducer,Z=a(13),G=a(2);var Q=function(){var e=y(),t=Object(Z.b)(),a=Object(Z.c)((function(e){return e.main.citiesOptions})),r=Object(Z.c)((function(e){return e.main.currentCity}));return Object(n.useEffect)((function(){var e;r.value&&(t((e=r.value.Key,function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(F).concat(N,"/").concat(e),{params:{apikey:w}});case 3:200===(n=t.sent).status&&a(q(n.data[0])),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(B({type:"error",message:"Something went wrong",timeout:3e3}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())),t(function(e){return function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(F).concat(T,"/").concat(e),{params:{apikey:w,metric:!0}});case 3:200===(n=t.sent).status&&a(J(n.data.DailyForecasts)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(B({type:"error",message:"Something went wrong",timeout:3e3}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(r.value.Key)))}),[r]),Object(G.jsx)(k,{id:"city",freeSolo:!0,options:a,autoHighlight:!0,disableClearable:!0,value:r.value,inputValue:r.inputValue||"",getOptionLabel:function(e){return e.LocalizedName||""},getOptionSelected:function(e,t){return e.name===t},onChange:function(e,a){t(_({key:"value",value:a}))},onInputChange:function(e,a){var n;t(_({key:"inputValue",value:n=a})),t(U(n))},renderInput:function(t){return Object(G.jsx)(f.a,Object(p.a)(Object(p.a)({placeholder:"Search for city"},t),{},{inputProps:Object(p.a)({},t.inputProps),InputProps:Object(p.a)(Object(p.a)({},t.InputProps),{},{startAdornment:Object(G.jsx)(h.a,{className:e.search})})}))}})},$=a(104),ee=a.n($),te=a(105),ae=a.n(te),ne=Object(C.a)({name:"favorites",initialState:{favorites:[]},reducers:{updateFavoritesList:function(e,t){e.favorites=t.payload}}}),re=ne.actions.updateFavoritesList,ce=ne.reducer,ie=a(12),oe=a(193),se=Object(O.a)((function(e){return{mainContainer:{backgroundImage:function(e){return e.backgroundImage},backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover",backgroundAttachment:"fixed","&::-webkit-backface-visibility":"hidden","&::-webkit-transform":"translateZ(0x)",minHeight:"100vh"},searchContainer:Object(ie.a)({marginTop:"7vh",maxHeight:"30px"},e.breakpoints.down("sm"),{marginTop:"12vh"}),cityAndFavContainer:{marginTop:"50px"},mainWeatherText:Object(ie.a)({fontSize:"40px",color:e.palette.text.main},e.breakpoints.down("sm"),{fontSize:"32px"}),mainWeatherTextContainer:{marginTop:"60px"},daysContainer:{marginTop:"50px",paddingBottom:"10px"},temperatureValue:Object(ie.a)({fontSize:"26px",fontWeight:600,color:e.palette.text.main},e.breakpoints.down("sm"),{fontSize:"22px"}),locationName:Object(ie.a)({fontSize:"24px",fontWeight:400,color:e.palette.text.main},e.breakpoints.down("sm"),{fontSize:"20px"}),mainContent:{padding:"15px",borderRadius:"4px"}}})),le=Object(g.a)((function(e){var t;return{root:(t={minWidth:"179px"},Object(ie.a)(t,e.breakpoints.down("sm"),{minWidth:"55px"}),Object(ie.a)(t,"backgroundColor","transparent"),Object(ie.a)(t,"border","none"),Object(ie.a)(t,"color",e.palette.text.main),Object(ie.a)(t,"textTransform","none"),Object(ie.a)(t,"&:hover",{backgroundColor:e.palette.button.toggleSelectedHover,transition:".3s"}),Object(ie.a)(t,"&.MuiToggleButton-root.Mui-selected",{backgroundColor:"transparent",color:e.palette.text.main,textTransform:"none","&:hover":{backgroundColor:e.palette.button.toggleSelectedHover,transition:".3s"}}),t)}}))(oe.a),ue=a(201),pe=Object(O.a)((function(e){return{dayContainer:{backgroundColor:e.palette.background.day,borderRadius:"4px",padding:"40px 15px",boxShadow:"0px 2px 4px -1px rgb(0, 0, 0, 0.2)"},dayText:{textAlign:"center",color:e.palette.text.day,marginBottom:"20px",fontWeight:600},dayWeather:{textAlign:"center",color:e.palette.text.day}}})),de=(a(96),a(4));var be=function(e){var t=e.day,a=pe(),r=Object(n.useState)(!1),c=Object(b.a)(r,2),i=c[0],o=c[1],s=Object(Z.c)((function(e){return e.main.currentCity}));return Object(n.useEffect)((function(){o(!0),setTimeout((function(){o(!1)}),1e3)}),[s.value]),Object(G.jsxs)(j.a,{container:!0,justifyContent:"center",alignItems:"center",className:Object(de.a)(a.dayContainer,"animate__animated",{animate__fadeIn:i}),children:[Object(G.jsx)(j.a,{item:!0,xs:10,children:Object(G.jsx)(m.a,{className:a.dayText,children:Object(ue.a)(new Date(t.Date),"EEEE")})}),Object(G.jsx)(j.a,{item:!0,xs:10,children:Object(G.jsx)(m.a,{className:a.dayWeather,children:"".concat(t.Temperature.Minimum.Value,"\xb0 / ").concat(t.Temperature.Maximum.Value,"\xb0")})})]})},je=a(196),me=a(20);var xe=function(){var e=se(),t=Object(Z.b)(),a=Object(me.a)(),r=Object(je.a)(a.breakpoints.up("md")),c=Object(Z.c)((function(e){return e.main.currentCity})),i=Object(Z.c)((function(e){return e.main.currentWeather})),o=Object(Z.c)((function(e){return e.main.fiveDaysForecast})),s=Object(Z.c)((function(e){return e.favorites.favorites})),l=Object(n.useState)(!1),u=Object(b.a)(l,2),x=u[0],h=u[1];return Object(n.useEffect)((function(){if(c.value){var e=s.some((function(e){return e.Key===c.value.Key}));h(e)}}),[c,s]),Object(G.jsxs)(j.a,{container:!0,justifyContent:"center",children:[Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(j.a,{container:!0,justifyContent:"center",children:Object(G.jsx)(j.a,{item:!0,xs:10,sm:6,md:4,lg:2,className:e.searchContainer,children:Object(G.jsx)(Q,{})})})}),c.value&&i&&o.length&&Object(G.jsx)(j.a,{item:!0,xs:10,sm:8,children:Object(G.jsxs)(j.a,{container:!0,justifyContent:"center",children:[Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsxs)(j.a,{container:!0,className:e.cityAndFavContainer,justifyContent:"space-between",alignItems:"center",children:[Object(G.jsx)(j.a,{item:!0,xs:6,md:5,lg:3,children:Object(G.jsxs)(j.a,{container:!0,alignItems:"center",className:e.mainContent,children:[Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(m.a,{className:e.locationName,children:c.value.LocalizedName})}),Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(m.a,{className:e.temperatureValue,children:"".concat(i.Temperature.Metric.Value," \xb0C")})})]})}),Object(G.jsx)(j.a,{item:!0,xs:6,children:Object(G.jsx)(j.a,{container:!0,justifyContent:"flex-end",children:Object(G.jsx)(j.a,{item:!0,children:Object(G.jsx)(le,{value:"fav",selected:x,onChange:function(){if(c){var e=Object(d.a)(s);if(x){var a=e.findIndex((function(e){return e.Key===c.value.Key}));e.splice(a,1)}else{var n=Object(p.a)(Object(p.a)({},c.value),{},{weather:i.Temperature.Metric.Value});e.push(n)}t(re(e))}},children:x?Object(G.jsxs)(j.a,{container:!0,justifyContent:r?"flex-start":"center",children:[Object(G.jsx)(ee.a,{className:"animate__animated animate__heartBeat"}),r&&Object(G.jsx)(m.a,{children:"\xa0\xa0In favorites"})]}):Object(G.jsxs)(j.a,{container:!0,justifyContent:r?"flex-start":"center",children:[Object(G.jsx)(ae.a,{}),r&&Object(G.jsx)(m.a,{children:"\xa0\xa0Add to favorites"})]})})})})})]})}),Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(j.a,{container:!0,justifyContent:"center",className:e.mainWeatherTextContainer,children:Object(G.jsx)(m.a,{className:e.mainWeatherText,children:i.WeatherText})})}),Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(j.a,{container:!0,justifyContent:"center",className:e.daysContainer,spacing:1,children:o.map((function(e,t){return Object(G.jsx)(j.a,{item:!0,xs:12,sm:12,md:8,lg:2,children:Object(G.jsx)(be,{day:e})},t)}))})})]})})]})},he=Object(O.a)((function(e){return{cityContainer:{backgroundColor:e.palette.background.favorite,borderRadius:"4px",padding:"20px 15px",boxShadow:"0px 2px 4px -1px rgb(0, 0, 0, 0.2)","&:hover":{backgroundColor:e.palette.background.favoriteHover,transition:".3s"}},cityText:{fontWeight:600,textAlign:"center",marginBottom:"20px",color:e.palette.text.day},cityWeather:{textAlign:"center",color:e.palette.text.day}}}));var fe=function(e){var t=e.city,a=he(),n=Object(me.a)(),r=Object(je.a)(n.breakpoints.only("lg"));return Object(G.jsxs)(j.a,{container:!0,className:a.cityContainer,justifyContent:"center",children:[Object(G.jsx)(j.a,{item:!0,xs:10,children:Object(G.jsx)(m.a,{className:a.cityText,children:t.LocalizedName.length>17&&r?"".concat(t.LocalizedName.slice(0,17),"..."):t.LocalizedName})}),Object(G.jsx)(j.a,{item:!0,xs:10,children:Object(G.jsx)(m.a,{className:a.cityWeather,children:"".concat(t.weather," \xb0C")})})]})},Oe=Object(O.a)((function(e){return{noLocations:Object(ie.a)({fontSize:"36px",color:e.palette.text.main,textAlign:"center",marginTop:"2vh"},e.breakpoints.down("sm"),{fontSize:"22px",marginTop:"12vh"}),citiesContainer:Object(ie.a)({marginTop:"18vh"},e.breakpoints.down("sm"),{marginTop:"12vh"}),link:{textDecoration:"none",color:e.palette.text.main},yourFavorite:Object(ie.a)({color:e.palette.text.main,textAlign:"center",fontSize:"36px",marginBottom:"4vh"},e.breakpoints.down("sm"),{fontSize:"22px"})}})),ge=a(32);var ve=function(){var e=Oe(),t=Object(Z.b)(),a=Object(Z.c)((function(e){return e.favorites.favorites}));return Object(G.jsx)(j.a,{container:!0,justifyContent:"center",children:Object(G.jsx)(j.a,{item:!0,xs:10,sm:8,children:Object(G.jsx)(j.a,{container:!0,className:e.citiesContainer,children:a.length?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsxs)(m.a,{className:e.yourFavorite,children:["Weather in your favorite cities:"," "]})}),Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(j.a,{container:!0,spacing:1,justifyContent:"center",children:a.map((function(a,n){return Object(G.jsx)(j.a,{item:!0,xs:12,sm:12,md:6,lg:3,children:Object(G.jsx)(ge.b,{to:"/home",className:e.link,onClick:function(){return function(e,a){t(U(a)),t(_({key:"inputValue",value:a})),t(_({key:"value",value:e}))}(a,a.name)},children:Object(G.jsx)(fe,{city:a})})},n)}))})})]}):Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(m.a,{className:e.noLocations,children:"You don't have saved locations yet."})})})})})},ye=a(197),ke=a(198),Ce=a(192),we=a(204),Fe=a(15),Se=Object(O.a)((function(e){return{header:{backgroundColor:e.palette.background.appbar,zIndex:3e3},title:{color:e.palette.text.main,marginLeft:"40px"},link:{textDecoration:"none",color:e.palette.text.main,"&:hover":{color:e.palette.text.menu,transition:".3s"}},menuLink:{textDecoration:"none",color:e.palette.text.main,padding:"20px 45px 20px 20px"},menuIcon:{fontSize:30,fill:e.palette.text.main},menuButton:{padding:"10px",marginRight:"20px"},menuDrawer:{minWidth:"50px"},mobileTopBar:{backgroundColor:e.palette.background.appbar,boxShadow:"0px 2px 4px -1px rgb(0, 0, 0, 0.2)"},currentPageLinkMobile:{backgroundColor:e.palette.text.menu},mobileDark:{marginRight:"20px"},darkMode:{transform:"rotate(150deg)"},darkModeSelected:{fill:e.palette.text.yellow},currentLink:{fontWeight:600}}})),Ne=Object(g.a)((function(e){return{root:Object(ie.a)({},e.breakpoints.down("sm"),{padding:"7px"})}}))(oe.a),Te=a(107),Ae=a.n(Te),Ie=a(78),Me=a.n(Ie);var We=function(){var e=Se(),t=Object(Z.b)(),a=Object(me.a)(),r=Object(je.a)(a.breakpoints.down("sm")),c=Object(n.useState)(!1),i=Object(b.a)(c,2),o=i[0],s=i[1],l=Object(Fe.f)(),u=Object(Z.c)((function(e){return e.main.themeMode})),p=function(){t(Y("light"===u?"dark":"light"))},d=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&s(e)}};return Object(G.jsx)(G.Fragment,{children:r?Object(G.jsx)(ye.a,{position:"fixed",className:e.mobileTopBar,elevation:0,children:Object(G.jsx)(j.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"flex-end",children:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Ne,{value:"mode",className:e.mobileDark,selected:"dark"===u,onChange:p,children:Object(G.jsx)(Me.a,{className:Object(de.a)(e.darkMode,Object(ie.a)({},e.darkModeSelected,"dark"===u))})}),Object(G.jsx)(Ce.a,{"aria-label":"menu",onClick:d(!0),className:e.menuButton,children:Object(G.jsx)(Ae.a,{className:e.menuIcon})}),Object(G.jsx)(we.a,{anchor:"right",open:o,onClose:d(!1),onOpen:d(!0),children:Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(ge.b,{to:"/home",onClick:d(!1),className:Object(de.a)(e.menuLink,Object(ie.a)({},e.currentPageLinkMobile,"/favorites"!==l.pathname)),children:"HOME"}),Object(G.jsx)(ge.b,{to:"/favorites",onClick:d(!1),className:Object(de.a)(e.menuLink,Object(ie.a)({},e.currentPageLinkMobile,"/favorites"===l.pathname)),children:"FAVORITES"})]})})]})})}):Object(G.jsx)(ye.a,{position:"sticky",className:e.header,children:Object(G.jsx)(ke.a,{children:Object(G.jsxs)(j.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(G.jsx)(j.a,{item:!0,sm:4,children:Object(G.jsx)(ge.b,{to:"/home",className:e.link,children:Object(G.jsx)(m.a,{variant:"h6",className:e.title,children:"Herolo Weather Task"})})}),Object(G.jsx)(j.a,{item:!0,xs:4,children:Object(G.jsxs)(j.a,{container:!0,justifyContent:"flex-end",alignItems:"center",children:[Object(G.jsx)(j.a,{item:!0,xs:4,children:Object(G.jsx)(Ne,{value:"mode",selected:"dark"===u,onChange:p,children:Object(G.jsx)(Me.a,{className:Object(de.a)(e.darkMode,Object(ie.a)({},e.darkModeSelected,"dark"===u))})})}),Object(G.jsx)(j.a,{item:!0,xs:3,children:Object(G.jsx)(ge.b,{to:"/home",className:e.link,children:Object(G.jsx)(m.a,{className:Object(de.a)(Object(ie.a)({},e.currentLink,"/favorites"!==l.pathname)),children:"Home"})})}),Object(G.jsx)(j.a,{item:!0,xs:3,children:Object(G.jsx)(ge.b,{to:"/favorites",className:e.link,children:Object(G.jsx)(m.a,{className:Object(de.a)(Object(ie.a)({},e.currentLink,"/favorites"===l.pathname)),children:"Favorites"})})})]})})]})})})})},Le=a(110),ze=a(200),Be=a(205),De=a(199),He=a(108),Re=a.n(He),Ve=Object(O.a)((function(e){return{root:Object(ie.a)({position:"fixed",top:"69px",right:"30px",width:"auto",zIndex:400,"& > * + *":{marginTop:e.spacing(3)}},e.breakpoints.down("xs"),{position:"absolute",zIndex:3,width:"90%",right:"5%"}),iconButtonSnack:{height:"20px",width:"20px"},closeIconSnack:{color:"#FFFFFF"}}}));var Ee=function(){var e=Ve(),t=Object(Z.b)(),a=Object(Z.c)((function(e){return e.snackbar}));return Object(G.jsx)(j.a,{container:!0,className:e.root,children:Object(G.jsx)(De.a,{in:a.visible,timeout:600,children:Object(G.jsx)(Be.a,{elevation:4,variant:"filled",severity:a.type,action:Object(G.jsx)(Ce.a,{className:e.iconButtonSnack,elevation:4,variant:"filled",severity:a.type,onClick:function(e,a){"clickaway"!==a&&t(z())},children:Object(G.jsx)(Re.a,{className:e.closeIconSnack})}),children:Object(G.jsx)(m.a,{children:a.message})})})})},Ue=a.p+"static/media/glenn-carstens-peters-sunny.2d868bf6.jpg",Pe=a.p+"static/media/pexels-scott-webb-clear.561d37be.jpg",Ke=a.p+"static/media/kumiko-shimizu-rainy.c8b08f98.jpg",_e=a.p+"static/media/harmen-jelle-van-mourik-cloudy.71d6792c.jpg",qe=a.p+"static/media/fabian-mardi-snow.88d22739.jpg",Je=a.p+"static/media/irina-iriser-sunny-dark.b82f7ccc.jpg",Ye=a.p+"static/media/kai-pilger-clear-dark.e4d8065b.jpg",Xe=a.p+"static/media/anna-atkins-rainy-dark.0d57c36f.jpg",Ze=a.p+"static/media/samuel-bryngelsson-cloudy-dark.04fc2b17.jpg",Ge=a.p+"static/media/nathan-fertig-snow-dark.1e4fb779.jpg",Qe=a.p+"static/media/fakurian-design-fav.2e106688.jpg",$e=a.p+"static/media/brennan-burling-fav-dark.3f672ee6.jpg",et="215854";var tt=function(){var e=Object(Z.b)(),t=Object(Z.c)((function(e){return e.main.currentWeather})),a=Object(Z.c)((function(e){return e.main.themeMode})),r=Object(Fe.f)(),c=Object(Le.a)({palette:"light"===a?M:I,typography:{fontFamily:["Montserrat","sans-serif"].join(",")}});Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition(i,l)}),[]),Object(n.useEffect)((function(){function t(){return(t=Object(s.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(F).concat(S),{params:{apikey:w,q:"Tel Aviv"}});case 3:200===(a=t.sent).status&&a.data.length&&(n=a.data.find((function(e){return e.Key===et})),e(_({key:"value",value:n}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e(B({type:"error",message:"Something went wrong",timeout:3e3}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}e(_({key:"inputValue",value:"Tel Aviv"})),function(){t.apply(this,arguments)}()}),[]);var i=function(){var t=Object(s.a)(o.a.mark((function t(a){var n,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.coords.latitude,r=a.coords.longitude,t.prev=2,t.next=5,u.a.get("".concat(F).concat(A),{params:{apikey:w,q:"".concat(n,",").concat(r),toplevel:!0}});case 5:200===(c=t.sent).status&&(e(_({key:"inputValue",value:c.data.LocalizedName})),e(_({key:"value",value:c.data}))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e(B({type:"error",message:"Something went wrong",timeout:3e3}));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),l=function(t){2===t.code&&e(B({type:"error",message:"Position is unavailable!",timeout:3e3}))},p=function(e,t,a){return"/favorites"===a?"url(".concat("light"===t?Qe:$e,")"):"light"===t?e.toUpperCase().includes("SUN")?"url(".concat(Ue,")"):e.toUpperCase().includes("RAIN")?"url(".concat(Ke,")"):e.toUpperCase().includes("CLOUD")||e.toUpperCase().includes("OVERCAST")?"url(".concat(_e,")"):e.toUpperCase().includes("SNOW")?"url(".concat(qe,")"):"url(".concat(Pe,")"):e.toUpperCase().includes("SUN")?"url(".concat(Je,")"):e.toUpperCase().includes("RAIN")?"url(".concat(Xe,")"):e.toUpperCase().includes("CLOUD")||e.toUpperCase().includes("OVERCAST")?"url(".concat(Ze,")"):e.toUpperCase().includes("SNOW")?"url(".concat(Ge,")"):"url(".concat(Ye,")")},d={backgroundImage:p(t?t.WeatherText:"",a,r.pathname)},b=se(d);return Object(G.jsx)(ze.a,{theme:c,children:Object(G.jsxs)("div",{className:b.mainContainer,children:[Object(G.jsx)(We,{}),Object(G.jsx)(Ee,{}),Object(G.jsxs)(Fe.c,{children:[Object(G.jsx)(Fe.a,{exact:!0,path:"/",component:xe}),Object(G.jsx)(Fe.a,{exact:!0,path:"/home",component:xe}),Object(G.jsx)(Fe.a,{exact:!0,path:"/favorites",component:ve})]})]})})},at=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,207)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},nt=a(31),rt=a(60),ct=a(109),it=function(){return Object(nt.combineReducers)({snackbar:V,main:X,favorites:ce})};var ot=function(e){var t=[rt.a],a=[nt.applyMiddleware.apply(void 0,t)],n=ct.composeWithDevTools.apply(void 0,a);return Object(nt.createStore)(it(),e,n)}();c.a.render(Object(G.jsx)(Z.a,{store:ot,children:Object(G.jsx)(ge.a,{children:Object(G.jsx)(tt,{})})}),document.getElementById("root")),at()}},[[151,1,2]]]);
//# sourceMappingURL=main.a0df0fd8.chunk.js.map