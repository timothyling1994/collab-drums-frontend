(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){},58:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(50),o=n.n(a),s=(n(58),n(53)),i=n(2),u=n.n(i),l=n(5),d=n(3),p=(n(20),n(19)),j=n.n(p),m=n(96),b=n(12),h=Object(b.a)(),f=n(15),O=n.p+"static/media/vinyl.4eb661fa.svg",v=n.p+"static/media/play.43b34e85.svg",x=n.p+"static/media/pause.a4c7de09.svg",y=n.p+"static/media/trash.8edb7a59.svg",k=n(51),g=n.n(k),w=n(1);var C=function(e){var t=g()("http://localhost:3000"),n=Object(r.useState)(null),c=Object(d.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(null),i=Object(d.a)(s,2),p=i[0],m=i[1],b=Object(r.useState)(null),k=Object(d.a)(b,2),C=k[0],N=k[1],S=Object(r.useState)(!1),T=Object(d.a)(S,2),R=T[0],D=T[1],E=Object(r.useState)(!1),I=Object(d.a)(E,2),P=I[0],L=I[1],A=Object(r.useState)(!1),J=Object(d.a)(A,2),V=J[0],B=J[1],U=Object(r.useState)(!1),z=Object(d.a)(U,2),F=z[0],q=z[1],M=Object(r.useState)(null),G=Object(d.a)(M,2),H=G[0],K=G[1],Q=Object(r.useState)({}),W=Object(d.a)(Q,2),X=(W[0],W[1],Object(r.useState)(null)),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1],_=Object(r.useState)(null),ee=Object(d.a)(_,2),te=ee[0],ne=ee[1],re=Object(r.useState)([!0,!0,!0,!0,!0,!0]),ce=Object(d.a)(re,2),ae=ce[0],oe=ce[1],se=Object(r.useRef)(1),ie=Object(r.useRef)(null),ue=Object(r.useRef)(null),le=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(p),e.next=4,fetch("http://localhost:8080/initialize-room/"+p);case 4:return t=e.sent,e.next=7,t.json();case 7:t=e.sent,n=[],r=[],c=[],null!==t.roomData[0].roomData&&(t.roomData[0].roomData.tracks.map((function(e){return n.push(e.stepArray),null!==e.audioURL?r.push(new Audio(e.audioURL)):r.push(null),c.push(e.audioName),!0})),N(n),ie.current=t.roomData[0].roomData.bpm,$(r),ne(c),a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,o(a)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>=40&&n<=208)){e.next=14;break}return K(n),e.prev=2,e.next=5,fetch("http://localhost:8080/update-bpm-settings/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomId:p,bpm:n})});case 5:return r=e.sent,e.next=8,r.json();case 8:e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),pe=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=Object(f.a)(C))[t][n]=!r[t][n],N(r),e.prev=3,e.next=6,fetch("http://localhost:8080/update-room-settings/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomId:p,gridArr:r,trackNum:t})});case 6:return c=e.sent,e.next=9,c.json();case 9:e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,n){return e.apply(this,arguments)}}(),je=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=Object(f.a)(ae))[t]=!n[t],oe(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,c,a,o,s,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files,(c=new FormData).append("roomId",p),c.append("instrumentNum",n),c.append("fileName",r[0].name),c.append("contentType",r[0].type),c.append("audioFile",r[0]),e.prev=7,e.next=10,fetch("http://localhost:8080/update-audio-settings/",{method:"POST",mode:"cors",headers:{Accept:"application/json",Origin:"http://localhost:3000/room/1gtirs1ziaky0hpww2"},body:c});case 10:return a=e.sent,e.next=13,a.json();case 13:(o=e.sent).updated&&((s=Object(f.a)(ae))[n]=!s[n],oe(s),(i=Object(f.a)(te))[n]=r[0].name,ne(i),(l=Object(f.a)(Z))[n]=new Audio(o.downloadURL),$(l)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return t.on("user-connected",(function(){console.log("a user connected")})),t.on("user-disconnected",(function(e){console.log("user disconnected:"+e)})),m(e.roomId),function(){t.disconnect()}}),[]),Object(r.useEffect)((function(){null!==p&&le()}),[p]),Object(r.useEffect)((function(){if(null!==H){H>=40&&H<=208&&(ie.current=H),null!==ue.current&&clearTimeout(ue.current);var e=setInterval((function(){t(),n(),r(),se.current+1===33?se.current=1:se.current+=1}),60/ie.current*1e3);ue.current=e;var t=function(){for(var e=document.getElementsByClassName("highlighted");e.length;)e[0].classList.remove("highlighted")},n=function(){for(var e=document.getElementsByClassName("step-"+se.current),t=0;t<e.length;t++)e[t].classList.add("highlighted")},r=function(){C[0][se.current-1]&&null!==Z[0]&&(Z[0].currentTime=0,Z[0].play()),C[1][se.current-1]&&null!==Z[1]&&(Z[1].currentTime=0,Z[1].play()),C[2][se.current-1]&&null!==Z[2]&&(Z[2].currentTime=0,Z[2].play()),C[3][se.current-1]&&null!==Z[3]&&(Z[3].currentTime=0,Z[3].play()),C[4][se.current-1]&&null!==Z[4]&&(Z[4].currentTime=0,Z[4].play()),C[5][se.current-1]&&null!==Z[5]&&(Z[5].currentTime=0,Z[5].play())}}return function(){clearTimeout(ue.current)}}),[H,C]),Object(r.useEffect)((function(){null!==C&&B(!0)}),[C]),Object(r.useEffect)((function(){null!==Z&&L(!0)}),[Z]),Object(r.useEffect)((function(){null!==te&&D(!0)}),[te]),Object(r.useEffect)((function(){V&&R&&P&&(q(!0),t.emit("joining-room",p))}),[V,R,P]),Object(r.useEffect)((function(){K(ie.current)}),[F]),Object(w.jsxs)("div",{className:"Room",children:[Object(w.jsx)("div",{id:"room-title-container",children:Object(w.jsx)("div",{id:"room-title",onClick:function(){h.push("/home"),e.setDisplayRooms(!1)},children:"Collab Drums"})}),Object(w.jsx)("div",{id:"main-container",children:Object(w.jsx)("div",{id:"message-container"})}),Object(w.jsxs)("div",{id:"drum-grid",children:[Object(w.jsxs)("div",{id:"control-panel",children:[Object(w.jsx)("img",{className:"control-btn",src:v,alt:"play button"}),Object(w.jsx)("img",{className:"control-btn",src:x,alt:"pause button"}),Object(w.jsx)("img",{className:"control-btn",src:y,alt:"trash button"}),Object(w.jsx)("input",{type:"number",id:"bpm",min:"40",max:"208",value:null!==H?H:"",onChange:function(e){return de(e,e.target.value)}})]}),V?C.map((function(e,t){return Object(w.jsxs)("div",{className:"instrument",id:"instrument-"+t,children:[ae[t]?Object(w.jsxs)("div",{className:"add-sample",id:"add-sample-"+t,onClick:function(){return je(t)},children:[Object(w.jsx)("img",{className:"sample-icon",src:O,alt:"sample button"}),R?Object(w.jsx)("div",{id:"add-sample-descrip-"+t,className:"add-sample-descrip",children:null===te[t]?"Add Sample":te[t]}):null]}):Object(w.jsx)("input",{type:"file",className:"file-input",accept:".wav,.mp3",onChange:function(e){return me(e,t)}}),e.map((function(e,n){var r=["drum-box"];return e&&r.push("clicked"),(n+1)%4===1?r.push("first"):(n+1)%4===0&&r.push("fourth"),r.push("step-"+(n+1)),Object(w.jsx)("div",{className:r.join(" "),onClick:function(){return pe(t,n)}},j()())}))]},j()())})):null,null!==a?Object(w.jsx)("div",{id:"bottom-container",children:Object(w.jsxs)("div",{id:"copy-link-container",children:[Object(w.jsx)("div",{id:"copy-link-text",children:"Copy link"}),Object(w.jsx)("div",{id:"copy-link-window",onClick:function(){navigator.clipboard.writeText(a);var e=document.querySelector("#copy-link-text");e.textContent="Link copied!",setTimeout((function(){e.textContent="Copy link"}),2e3)},children:a})]})}):null]})]})};var N=function(e){return Object(w.jsxs)("div",{className:"NotValidRoom",children:[Object(w.jsx)("div",{id:"room-title-container",children:Object(w.jsx)("div",{id:"room-title",onClick:function(){return h.push("/home")},children:"Collab Drums"})}),Object(w.jsx)("div",{id:"error-container",children:Object(w.jsx)("div",{id:"error-msg",children:"Not a valid room"})})]})};var S=function(e){var t=Object(r.useState)(!0),n=Object(d.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkIfValidRoom(e.match.params.id);case 2:n=t.sent,a(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(w.jsx)("div",{className:"ProtectedComponent",children:c?Object(w.jsx)(C,{roomId:e.match.params.id,setDisplayRooms:e.setDisplayRooms}):Object(w.jsx)(N,{})})};var T=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(d.a)(a,2),i=o[0],p=o[1],b=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8080/room/"+t);case 3:return n=e.sent,e.next=6,n.json();case 6:return n=e.sent,e.abrupt("return",n.isValid);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8080/create-public-room",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:t=e.sent,h.push("/room/"+t.roomId),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8080/create-private-room",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:t=e.sent,h.push("/room/"+t.roomId),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8080/display-public-rooms");case 3:return t=e.sent,e.next=6,t.json();case 6:t=e.sent,p(t.rooms),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[n]),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(m.b,{history:h,children:Object(w.jsxs)(m.c,{children:[Object(w.jsxs)(m.a,{exact:!0,path:"/home",children:[Object(w.jsx)("div",{id:"main-container-title",children:Object(w.jsx)("div",{id:"title",onClick:function(){h.push("/home"),c(!1)},children:"Collab Drums"})}),Object(w.jsx)("div",{id:"home-page-options",children:n?Object(w.jsx)("div",{id:"public-room-container",children:i.map((function(e){return Object(w.jsx)("div",{className:"roomList-container",children:Object(w.jsxs)("div",{className:"roomList",onClick:function(){return h.push("/room/"+e.roomId)},children:["Join ",e.roomId]},j()())})}))}):Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{id:"join-public-room",children:Object(w.jsx)("button",{className:"main-btn",onClick:function(){c(!0)},children:"Join Public Room"})}),Object(w.jsx)("div",{id:"create-public-room",children:Object(w.jsx)("button",{className:"main-btn",onClick:f,children:"Create Public Room"})}),Object(w.jsx)("div",{id:"create-private-room",children:Object(w.jsx)("button",{className:"main-btn",onClick:O,children:"Create Private Room"})})]})})]}),Object(w.jsx)(m.a,{path:"/room/:id",render:function(e){return Object(w.jsx)(S,Object(s.a)({checkIfValidRoom:b,redirect:"/home",history:h,setDisplayRooms:c},e))}})]})})})};o.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.f830a078.chunk.js.map