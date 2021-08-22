(this["webpackJsonpVG Data Inspect JS"]=this["webpackJsonpVG Data Inspect JS"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(71),c=n(10),r=n(72),s=n(126),i=n(127),o=n(129),j=n(140),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4AgMAAADV6NONAAAACVBMVEXV/9Xq/+r////GhL+UAAAAAnRSTlN/fx6OxKwAAAABYktHRAJmC3xkAAAAyElEQVQoU4XSsbFFIQgE0DWgBPphOyCA/lv5gSLc9wPNdnQ8swrysxBJupi42HKBCc8KJeFKMr9xkbZCbYHiMg5nhrqY3PiBfqJLassgfbUMMqRl2AppGaSzZZBTfri2XLozQsnujFCyOyPUVndGKNmdETrlZ98pY79RySeWjP2+JZ/dkk8s+dVXpoz9ZCXfuGXUz2757m4Z9bNbfvcdMnbPktEz5UqiZ2rHe5jigp6pzOf/zmmOPFeVDHLKIKeMOc0UzGn+B/0BKDi/hZnFDCcAAAAASUVORK5CYII=",b=n(0),d=n.n(b),h=n(29),O=n(35),u=function(e,t){var n=t.type;switch(n){case"TOGGLE_THEME":return Object(O.a)(Object(O.a)({},e),{},{switched:e.switched+1,theme:"light"===e.theme?"dark":"light"});default:throw new Error("Unhandled action type: ".concat(n))}},p=n(2),x=n(0).createContext,g=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):{switched:0,theme:"dark"},m=x(),f=x(),A=function(){return Object(b.useContext)(m)},v=function(e){var t=e.children,n=Object(b.useReducer)(u,g),a=Object(h.a)(n,2),c=a[0],r=a[1];return Object(b.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(c))}),[c]),Object(p.jsx)(m.Provider,{value:c,children:Object(p.jsx)(f.Provider,{value:r,children:t})})},k={palette:{type:"light"},overrides:{MuiCssBaseline:{"@global":{body:{backgroundImage:"url(".concat(l,")"),backgroundImageOpacity:.6}}}}},y={palette:{type:"dark",primary:{main:"#7289da",paper:{main:"#7289da"}}},overrides:{MuiCssBaseline:{"@global":{body:{backgroundImage:"url(".concat(l,")"),backgroundImageOpacity:.6}}}}};function C(e){var t=e.children,n=A().theme,a=Object(r.a)(k),c=Object(r.a)(y);return Object(p.jsxs)(s.a,{theme:"light"===n?a:c,children:[Object(p.jsx)(i.a,{}),Object(p.jsx)(o.a,{maxWidth:"md",children:Object(p.jsx)(j.a,{marginTop:2,children:t})})]})}var T=n(24),S=n(39),w="SET_SNACKBAR",E={snackbarOpen:!1,snackbarType:"success",snackbarMessage:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n=t.snackbarOpen,a=t.snackbarMessage,c=t.snackbarType;return Object(O.a)(Object(O.a)({},e),{},{snackbarOpen:n,snackbarType:c,snackbarMessage:a});default:return e}},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:w,snackbarOpen:e,snackbarType:t,snackbarMessage:n}},G=Object(S.b)({snackbar:I}),B=Object(S.c)(G,{}),N=n(136),V=n(131),J=n(137),D=n(75),F=n(130),U=n(70),K=n.n(U),H=n(69),P=n.n(H),R=n(138),Z=n(139),z=n(141),L=n(135),X=n(133),q=n(134),Q=n(132);function W(){var e=d.a.useState(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],c=function(){a(!1)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(F.a,{onClick:function(){a(!0)},children:"About"}),Object(p.jsxs)(z.a,{open:n,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(p.jsx)(Q.a,{children:"About"}),Object(p.jsx)(X.a,{children:Object(p.jsxs)(q.a,{style:{textAlign:"center"},children:["This is a JavaScript port of VGDataInspect.",Object(p.jsx)("br",{}),"Currently it only checks the file extension.",Object(p.jsx)("br",{}),"To obtain the extension to name mappings, a GET request to VGDataInspect's repo is preformed. This is done so this app's list is always up to date."]})}),Object(p.jsx)(L.a,{children:Object(p.jsx)(F.a,{onClick:c,autoFocus:!0,children:"Close"})})]})]})}var Y=Object(N.a)((function(e){return{formControl:{minWidth:120,maxWidth:300},paper:{padding:e.spacing(4),margin:"auto"},img:{width:"100%"},divider:{margin:e.spacing(2),height:4},centerText:{textAlign:"center"}}}));function _(){var e=Y(),t=A().theme,n=Object(b.useContext)(f),a=Object(T.b)(),c=d.a.useState({}),r=Object(h.a)(c,2),s=r[0],i=r[1],o=d.a.useState(""),j=Object(h.a)(o,2),l=j[0],O=j[1],u=d.a.useState(""),x=Object(h.a)(u,2),g=x[0],m=x[1],v=/\.[^.]+$/;Object(b.useEffect)((function(){try{!function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="json",n.onload=function(){var e=n.status;200===e?t(null,n.response):t(e)},n.send()}("https://raw.githubusercontent.com/romh-acking/vgdatainspect/main/rcogfileexts.json",(function(e,t){t?i(t):a(M(!0,"error","Could not obtains file extension settings json. Received HTTP status code: ".concat(e)))}))}catch(e){a(M(!0,"error","Could not obtains file extension settings json: ".concat(e)))}}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(V.a,{className:e.paper,children:[Object(p.jsxs)(J.a,{container:!0,justify:"space-between",alignItems:"flex-start",children:[Object(p.jsx)(J.a,{item:!0,children:Object(p.jsx)(J.a,{container:!0,direction:"row",alignItems:"center",children:Object(p.jsx)(J.a,{item:!0,children:Object(p.jsx)(D.a,{variant:"h4",children:"\xa0\xa0VGDataInspect JS"})})})}),Object(p.jsx)(J.a,{item:!0,children:Object(p.jsxs)(J.a,{container:!0,spacing:4,alignItems:"center",children:[Object(p.jsx)(J.a,{item:!0,children:s?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("label",{htmlFor:"upload-file",children:[Object(p.jsx)("input",{style:{display:"none"},id:"upload-file",type:"file",onChange:function(e){O("");var t=e.target.files[0].name;m(t);var n=t.match(v);n?s[n]?O(s[n]):O("Unknown file"):a(M(!0,"error","File doesn't have extension: ".concat(t)))}}),Object(p.jsx)(F.a,{color:"primary",variant:"contained",component:"span",children:"Check Extension"})]})}):null}),Object(p.jsx)(J.a,{item:!0,children:Object(p.jsx)(W,{})}),Object(p.jsx)(J.a,{item:!0,children:Object(p.jsx)(R.a,{onClick:function(){return n({type:"TOGGLE_THEME"})},children:"light"===t?Object(p.jsx)(P.a,{}):Object(p.jsx)(K.a,{})})})]})})]}),l?Object(p.jsxs)(J.a,{item:!0,children:[Object(p.jsx)(Z.a,{className:e.divider}),Object(p.jsxs)(D.a,{className:e.centerText,children:["Based on the extension,",Object(p.jsx)("br",{}),'"',g,'"',Object(p.jsx)("br",{}),"is a(n):",Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsx)(D.a,{className:e.centerText,variant:"h5",children:l})]}):null]}),Object(p.jsx)("br",{})]})}var $=n(143),ee=n(142),te=Object(N.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),ne=function(){var e=te(),t=Object(T.b)(),n=Object(T.c)((function(e){return e.snackbar.snackbarOpen})),a=Object(T.c)((function(e){return e.snackbar.snackbarType})),c=Object(T.c)((function(e){return e.snackbar.snackbarMessage})),r=function(e,n){"clickaway"!==n&&t(M(!1,a,c))};return Object(p.jsx)("div",{className:e.root,children:Object(p.jsx)($.a,{open:n,autoHideDuration:1e4,onClose:r,children:Object(p.jsx)(ee.a,{elevation:6,variant:"filled",onClose:r,color:a,children:c})})})};var ae=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(v,{children:Object(p.jsx)(T.a,{store:B,children:Object(p.jsx)(C,{children:Object(p.jsx)(a.a,{children:Object(p.jsx)(c.c,{children:Object(p.jsxs)(c.a,{path:"/",children:[Object(p.jsx)(ne,{}),Object(p.jsx)(_,{})]})})})})})})})},ce=n(11);n.n(ce).a.render(Object(p.jsx)(d.a.StrictMode,{children:Object(p.jsx)(ae,{})}),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.3cbab75b.chunk.js.map