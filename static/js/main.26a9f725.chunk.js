(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var o,a,c,r,s=n(1),i=n.n(s),l=n(25),d=n.n(l),b=(n(34),n(2)),u=n(3),j=n(26);!function(e){e.new="new",e.good="good",e.bad="bad"}(o||(o={})),function(e){e.NEW="NEW",e.PENDING="PENDING",e.CREATED="CREATED",e.FAILED="FAILED"}(a||(a={})),function(e){e.NONE="NONE",e.DELETED="DELETED",e.FAILED="FAILED",e.PENDING="PENDING"}(c||(c={})),function(e){e.NONE="NONE",e.PENDING="PENDING",e.FAILED="FAILED",e.UPDATED="UPDATED"}(r||(r={}));var p,h=n(0),f=function(e){var t=e.status;return t===a.NEW?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"Create card"})}):t===a.CREATED?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"Card Created"})}):t===a.FAILED?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"Creatind card failed"})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"..."})})},O=function(e){var t=e.name,n=e.value,o=e.onChange,a=e.type,c=e.placeholder,r=e.className;return Object(h.jsx)(x,{name:t,value:n,onChange:o,type:a,placeholder:c,className:r})},x=u.a.input.withConfig({displayName:"input__Container",componentId:"bol67i-0"})(["border:1px solid red;padding:5px;border-radius:10px;border-color:#3f3f3f;margin:5px 0;outline:none;"]),m=n(6),g=n(22),C=function(e){var t=e.onClick,n=e.className,o=e.name,a=e.bgColor,c=e.children,r=e.type,i=Object(s.useCallback)((function(e){t&&t(e)}),[t]);return Object(h.jsx)(w,{bgColor:a,name:o,onClick:i,className:Object(m.a)("button",n),type:r,children:c})},w=u.a.button.withConfig({displayName:"button__ButtonWrapper",componentId:"sc-1jfqf56-0"})(["width:100%;padding:5px 10px;border-radius:10px;outline:none;background-color:",";color:white;&:hover,&:focus{cursor:pointer;background-color:",";}"],(function(e){return e.bgColor?e.bgColor:"#3F3F3F"}),(function(e){return e.bgColor?Object(g.a)("0.1",e.bgColor):Object(g.a)("0.1","#3F3F3F")})),v=(n(5),n(8),n(7)),N=function(){var e=y();return v.a.get("".concat(e,"/cards")).json()},k=function(e){var t=y(),n=e;return v.a.post("".concat(t,"/update"),{json:n}).json()},y=function(){return"https://node11255.herokuapp.com"},E=[{label:"angielski"},{label:"test"}],I=n(14);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function A(e,t){var n=e.title,o=e.titleId,a=S(e,["title","titleId"]);return s.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-10 0 1034 1024",ref:t,"aria-labelledby":o},a),n?s.createElement("title",{id:o},n):null,p||(p=s.createElement("g",{transform:"matrix(1 0 0 -1 0 832)"},s.createElement("path",{fill:"currentColor",d:"M512 166.72l-261.28 261.28l45.28 45.28l216 -216l216 216l45.28 -45.28z"}))))}var L,F,D=s.forwardRef(A);n.p;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(e,t){var n=e.title,o=e.titleId,a=T(e,["title","titleId"]);return s.createElement("svg",M({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},a),n?s.createElement("title",{id:o},n):null,L||(L=s.createElement("g",{clipPath:"url(#clip0-856330)"},s.createElement("path",{d:"M24.6425 15C24.0508 15 23.5711 15.4797 23.5711 16.0715V26.7856C23.5711 27.3773 23.0914 27.857 22.4996 27.857H3.21424C2.6225 27.857 2.14281 27.3773 2.14281 26.7856V5.35731C2.14281 4.76556 2.6225 4.28587 3.21424 4.28587H16.0712C16.663 4.28587 17.1427 3.80619 17.1427 3.21444C17.1427 2.62269 16.663 2.14307 16.0712 2.14307H3.21424C1.43906 2.14307 0 3.58213 0 5.35731V26.7856C0 28.5608 1.43906 29.9998 3.21424 29.9998H22.4997C24.2749 29.9998 25.7139 28.5608 25.7139 26.7856V16.0714C25.7139 15.4797 25.2343 15 24.6425 15Z",fill:"black"}),s.createElement("path",{d:"M28.799 1.20165C28.0297 0.432239 26.9863 7.44999e-05 25.8983 0.000200056C24.8096 -0.00293885 23.7651 0.429979 22.998 1.20234L8.88524 15.3139C8.76816 15.4318 8.67983 15.5752 8.62703 15.7328L6.48422 22.1613C6.2972 22.7227 6.60074 23.3294 7.16216 23.5163C7.27108 23.5526 7.38515 23.5711 7.49991 23.5713C7.61492 23.5711 7.72924 23.5526 7.83847 23.5167L14.267 21.3738C14.4249 21.3211 14.5683 21.2323 14.6859 21.1146L28.7986 7.00191C30.4004 5.40032 30.4006 2.80343 28.799 1.20165ZM27.2836 5.48795L13.3552 19.4164L9.1938 20.806L10.5791 16.6499L24.5129 2.72157C25.2789 1.95706 26.5197 1.95831 27.2842 2.72433C27.6494 3.09027 27.8552 3.58565 27.8568 4.10263C27.8581 4.62237 27.6517 5.12108 27.2836 5.48795Z",fill:"black"}))),F||(F=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0-856330"},s.createElement("rect",{width:30,height:30,fill:"b"})))))}var z=s.forwardRef(P),W=(n.p,n(9),function(e){var t=e.options,n=e.onSelection,o=e.className,a=Object(s.useState)(t[0].label),c=Object(b.a)(a,2),r=c[0],i=c[1],l=Object(s.useState)(!1),d=Object(b.a)(l,2),u=d[0],j=d[1],p=Object(s.useCallback)((function(e){i(e),n(e)}),[n]);return Object(h.jsx)(G,{className:Object(m.a)("wrapper",o),children:Object(h.jsxs)(I.Wrapper,{className:"dropdown",onSelection:p,onMenuToggle:function(e){j(e.isOpen)},children:[Object(h.jsxs)(I.Button,{className:"dropdown-title",children:[Object(h.jsx)("div",{children:r}),Object(h.jsx)("div",{children:Object(h.jsx)(D,{className:Object(m.a)("dropdown-arrow",{rotate:u})})})]}),Object(h.jsx)(I.Menu,{className:"dropdown-menu-wrapper",children:Object(h.jsx)("ul",{className:"dropdown-menu",children:t.map((function(e,t){return Object(h.jsx)(I.MenuItem,{value:e.label,className:"dropdown-menu-item",children:Object(h.jsx)("li",{className:"menu-item-wrapper",children:Object(h.jsx)("div",{className:"menu-item-inner",children:Object(h.jsxs)("div",{children:[" ",e.label," "]})})})},t)}))})})]})})}),G=u.a.div.withConfig({displayName:"dropdown__Container",componentId:"sc-104l720-0"})([".dropdown{border:1px solid #3f3f3f;text-align-last:left;background-color:white;border-radius:10px;border-width:2px;position:relative;}.dropdown-title{outline:none;position:relative;display:flex;padding:5px;color:var(--abbey);max-width:260px;}.dropdown-arrow{position:absolute;width:1.8em;pointer-events:none;right:5px;top:50%;transform:translateY(-50%) translateX(-50%) rotate(-90deg);transition:all 0.3s ease;&.rotate{transform:translateY(-50%) translateX(-50%) rotate(0);}}.dropdown-menu-wrapper{outline:none;position:absolute;z-index:999999;width:100%;max-width:260px;box-sizing:border-box;.dropdown-menu{list-style-type:none;margin:0;padding:0;.dropdown-menu-item{color:var(--abbey);outline:none;border:1px solid #3f3f3f;border-width:2px;border-radius:10px;background:white;&:hover{background-color:var(--gallery);cursor:pointer;}.menu-item-wrapper{padding:10px 15px;color:inherit;}}}}"]),B=n(11),R=Object(s.createContext)(null),q=R.Provider,U=function(e){var t=e.children,n=Object(s.useState)({goodAnswers:0,badAnswers:0,numberOfCards:0}),o=Object(b.a)(n,2),a=o[0],c=o[1],r=Object(s.useState)(0),i=Object(b.a)(r,2),l=i[0],d=i[1],u=Object(s.useState)([]),j=Object(b.a)(u,2),p=j[0],f=j[1],O=Object(s.useState)(!1),x=Object(b.a)(O,2),m=x[0],g=x[1],C=Object(s.useState)(!1),w=Object(b.a)(C,2),v=w[0],k=w[1],y=Object(s.useState)(!1),E=Object(b.a)(y,2),I=E[0],_=E[1],S=Object(s.useState)(!1),A=Object(b.a)(S,2),L=A[0],F=A[1],D=Object(s.useState)(!0),M=Object(b.a)(D,2),T=M[0],P=M[1],z=Object(s.useCallback)((function(){N().then((function(e){console.log(e),f(e)})).catch((function(){return g(!0)}))}),[]),W=Object(s.useCallback)((function(){P(!0);var e=Object(B.read_cookie)("fishki");console.log(e),e&&X(e).then((function(e){P(!1),e.cookieExist?F(!0):F(!1)}))}),[]),G=Object(s.useCallback)((function(){d(l+1)}),[l]),R=Object(s.useMemo)((function(){return{cards:p,error:m,fetchCards:z,activeCardIndex:l,increaseActiveCardIndex:G,lessonMode:a,setLessonMode:c,isTestMode:v,setIsTestMode:k,isLessonMode:I,setIsLessonMode:_,isLoggedIn:L,setIsLoggedIn:F,checkSession:W,isSessionChecking:T}}),[p,m,z,l,G,a,c,v,k,I,_,L,F,W,T]);return Object(h.jsx)(q,{value:R,children:t})},Y=function(){var e=Object(s.useContext)(R);if(null===e)throw Error("Context has not been Provided!");return e},H=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(s.useState)(!1),c=Object(b.a)(a,2),r=c[0],i=c[1],l=Object(s.useState)(!1),d=Object(b.a)(l,2),u=d[0],j=d[1],p=Y(),h=p.fetchCards,f=p.increaseActiveCardIndex;return Object(s.useEffect)((function(){j(!1)}),[r]),{hasError:n,isLoading:r,isComplete:u,editCard:Object(s.useCallback)((function(e){i(!0),k(e).then((function(e){e.ok&&(j(!0),i(!1),h())})).catch((function(e){o(!0),i(!1),console.log(e)}))}),[h]),editAnswer:Object(s.useCallback)((function(e){i(!0),k(e).then((function(e){e.ok&&(j(!0),i(!1),f())})).catch((function(e){o(!0),i(!1),console.log(e)}))}),[f])}};var V,X=function(e){var t=y(),n={cookie:e};return v.a.post("".concat(t,"/session"),{json:n}).json()},Z=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),i=Object(b.a)(r,2),l=i[0],d=i[1],u=Object(s.useState)(!1),j=Object(b.a)(u,2),p=j[0],x=j[1],m=Object(s.useState)(a.NEW),g=Object(b.a)(m,2),w=g[0],N=g[1],k=E,I=Object(s.useState)(E[0].label),_=Object(b.a)(I,2),S=_[0],A=_[1],L=Y().fetchCards,F=Object(s.useCallback)((function(e){if(e.preventDefault(),n&&l&&S){x(!1);var t={front:n,back:l,status:o.new,collectionName:S};N(a.PENDING),function(e){var t=y();return v.a.post("".concat(t,"/add"),{json:e})}(t).then((function(){N(a.CREATED),c(""),d(""),L()})).catch((function(e){N(a.FAILED),console.log(e)}))}else x(!0)}),[n,l,S,L]),D=Object(s.useCallback)((function(e){var t=e.target.name,n=e.target.value;"front"===t?c(n):d(n)}),[]),M=Object(s.useCallback)((function(e){A(e)}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(J,{children:[Object(h.jsx)("h1",{children:"Create card"}),Object(h.jsxs)("form",{action:"submit",onSubmit:F,autoComplete:"off",children:[Object(h.jsx)("div",{className:"",children:Object(h.jsx)(O,{type:"text",placeholder:"Front",onChange:D,name:"front",value:n})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)(O,{type:"text",placeholder:"Back",onChange:D,value:l,name:"back"})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)(W,{onSelection:M,options:k})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)(C,{className:"create-card-button",type:"submit",children:"Submit"})}),Object(h.jsx)(f,{status:w}),p&&Object(h.jsx)("div",{className:"",children:Object(h.jsx)("p",{children:"You need to fill all the required forms"})})]})]})})},J=u.a.div(V||(V=Object(j.a)(["\n  width: 350px;\n  padding: 50px;\n  border: 1px solid white;\n  background-color: var(--mine-shaft);\n  color: white;\n\n  .create-card-button {\n    margin: 10px 0;\n  }\n"]))),K=function(e){var t=e.onClick,n=Object(s.useState)(!1),o=Object(b.a)(n,2),a=o[0],c=o[1],r=Object(s.useCallback)((function(){c(!a),t()}),[a,t]);return Object(h.jsx)(Q,{children:Object(h.jsx)(z,{className:Object(m.a)("iconWrapper",{editMode:a}),onClick:r})})},Q=u.a.div.withConfig({displayName:"edit-button__EditIconWrapper",componentId:"buh0p9-0"})(["position:absolute;top:6px;right:10px;svg{width:17px;height:17px;}&:hover{cursor:pointer;}"]),$=function(e){var t=e.card,n=e.onCardFlip,o=E,a=t.front,r=t.back,i=t.status,l=t._id,d=Object(s.useState)(!1),u=Object(b.a)(d,2),j=u[0],p=u[1],f=Object(s.useState)(a),O=Object(b.a)(f,2),x=O[0],g=O[1],w=Object(s.useState)(r),N=Object(b.a)(w,2),k=N[0],I=N[1],_=Object(s.useState)(E[0].label),S=Object(b.a)(_,2),A=S[0],L=S[1],F=Object(s.useState)(c.NONE),D=Object(b.a)(F,2),M=D[0],T=D[1],P=H(),z=P.hasError,G=P.isLoading,B=P.isComplete,R=P.editCard,q=Y().fetchCards;Object(s.useEffect)((function(){B&&p(!1)}),[B]);var U=Object(s.useCallback)((function(e){L(e)}),[]),V=Object(s.useCallback)((function(){R({id:l,front:x,back:k,collectionName:A})}),[l,x,k,A,R]),X=Object(s.useMemo)((function(){return B?"Card Updated":G?"Updating...":z?"Updating Card Failed":G?"":"Update Card"}),[z,G,B]),Z=Object(s.useCallback)((function(e){var t=e.target,n=t.name,o=t.value;"front"===n?g(o):I(o)}),[]),J=Object(s.useCallback)((function(){T(c.PENDING),function(e){var t=y(),n={cardId:e};return v.a.delete("".concat(t,"/delete"),{json:n}).json()}(l).then((function(e){console.log("card deleted:"+e),T(c.DELETED),q()})).catch((function(e){console.log(e),T(c.FAILED)}))}),[l,q]),Q=Object(s.useMemo)((function(){return M===c.NONE?"Delete Card":M===c.PENDING?"Removing....":M===c.FAILED?"Failed removing card":M===c.DELETED?"Card deleted":""}),[M]);return Object(h.jsxs)(ee,{status:i,className:Object(m.a)("wrapper",{editMode:j},{deleted:M===c.DELETED}),children:[Object(h.jsxs)(te,{children:[Object(h.jsx)(K,{onClick:n}),Object(h.jsx)("div",{children:"Front:"}),Object(h.jsx)(ne,{name:"front",value:x,onChange:Z,autoComplete:"off"}),Object(h.jsx)("div",{children:"Back:"}),Object(h.jsx)(ne,{name:"back",value:k,onChange:Z,autoComplete:"off"}),Object(h.jsx)("div",{children:"Collection:"}),Object(h.jsx)(W,{onSelection:U,options:o})]}),Object(h.jsxs)(oe,{children:[Object(h.jsx)(C,{className:"edit-card-button",onClick:V,children:X}),Object(h.jsx)(C,{className:"edit-card-button",bgColor:"#F48A94",onClick:J,children:Q})]})]})},ee=u.a.div.withConfig({displayName:"edit-card__Container",componentId:"sc-183z39r-0"})(["display:flex;flex-direction:column;"]),te=u.a.div.withConfig({displayName:"edit-card__CardBackInner",componentId:"sc-183z39r-1"})(["height:275px;background:linear-gradient(#F7F8FA,#C8C8C7);padding:20px;border-top-left-radius:25px;border-top-right-radius:25px;"]),ne=u.a.input.withConfig({displayName:"edit-card__Input",componentId:"sc-183z39r-2"})(["padding:5px;border-radius:10px;border-color:#3f3f3f;margin:5px 0;outline:none;"]),oe=u.a.div.withConfig({displayName:"edit-card__ButtonsWrapper",componentId:"sc-183z39r-3"})(["margin-top:13px;background-color:white;display:flex;.edit-card-button{margin:10px;}"]),ae=n(4),ce=function(e){var t=e.card,n=H().editAnswer,a=Y(),c=a.lessonMode,r=a.setLessonMode,i=Object(s.useCallback)((function(e){e.preventDefault();var a=e.target.name,s=t.goodAnswers,i=t.badAnswers,l=c;if("good"===a){var d=c.goodAnswers+1;r(Object(ae.a)(Object(ae.a)({},l),{},{goodAnswers:d})),n({id:t._id,goodAnswers:s+1,status:o.good})}else{var b=c.badAnswers+1;r(Object(ae.a)(Object(ae.a)({},l),{},{badAnswers:b})),n({id:t._id,badAnswers:i+1,status:o.bad})}}),[t,c,r,n]);return Object(h.jsxs)(re,{className:Object(m.a)("wrapper"),children:[Object(h.jsx)(C,{className:"card-answer-button",onClick:i,name:"good",children:"Good"}),Object(h.jsx)(C,{className:"card-answer-button",onClick:i,name:"bad",children:"Bad"})]})},re=u.a.div.withConfig({displayName:"card-answers-buttons__Wrapper",componentId:"d08j5j-0"})(["margin-top:13px;display:flex;.card-answer-button{margin:10px}"]),se=function(e){var t=function(e,t){var n=parseInt((100*e/(e+t)).toFixed(2),10);return{firstColumn:n,secondColumn:100-n,goodAnswers:e,badAnswers:t}}(e.firstColumn,e.secondColumn);return Object(h.jsx)(le,{children:Object(h.jsxs)("div",{className:"inner-wrapper",children:[Object(h.jsxs)("div",{className:"row-wrapper good",children:[Object(h.jsx)(ie,{value:t.firstColumn,bgColor:"#3DC99C"}),Object(h.jsx)("div",{className:"text",children:t.goodAnswers})]}),Object(h.jsxs)("div",{className:"row-wrapper bad",children:[Object(h.jsx)(ie,{value:t.secondColumn,bgColor:"#F48A94"}),Object(h.jsx)("div",{className:"text",children:t.badAnswers})]})]})})},ie=u.a.div.withConfig({displayName:"percentage-columns__Column",componentId:"zm23cp-0"})(["background-color:",";width:","%;height:5px;"],(function(e){return e.bgColor}),(function(e){return e.value+1})),le=u.a.div.withConfig({displayName:"percentage-columns__Container",componentId:"zm23cp-1"})(["width:100%;height:50px;display:flex;align-items:center;flex-direction:column;.text{transform:translateY(-2px);margin-left:5px;font-size:10px;}.good{color:var(--primaryGreen);border-left:1px solid var(--primaryGreen);}.bad{color:#f48a94;border-left:1px solid var(--primaryRed);}.inner-wrapper{width:100px;height:50px;}.row-wrapper{display:flex;align-items:center;border-width:2px;height:8px;}"]),de=function(e){var t=e.card,n=e.showAnswer,o=e.onShowAnswer,a=t.front,c=t.back,r=t.goodAnswers,i=t.badAnswers,l=Object(s.useMemo)((function(){return function(e,t){var n=Math.floor(2*Math.random());return{visibleText:0===n?e:t,hiddenText:0===n?t:e}}(a,c)}),[a,c]),d=0===r&&0===i,b=Object(s.useCallback)((function(){o()}),[o]),u=l.visibleText,j=l.hiddenText;return Object(h.jsxs)(be,{onClick:b,children:[Object(h.jsx)("h3",{children:u}),Object(h.jsx)("div",{className:"separate-answer"}),n?Object(h.jsx)("h3",{children:j}):Object(h.jsx)("h3",{children:"Show Answer"}),n&&!d&&Object(h.jsx)(se,{firstColumn:r,secondColumn:i})]})},be=u.a.div.withConfig({displayName:"card-answers__Container",componentId:"o8uhb4-0"})(["height:100%;.separate-answer{border-bottom:1px solid white;}"]),ue=function(e){var t=e.card,n=Object(s.useState)(!1),o=Object(b.a)(n,2),a=o[0],c=o[1],r=t.status,i=t.collectionName,l=t._id,d=t.goodAnswers,u=t.badAnswers,j=Y().isTestMode,p=Object(s.useCallback)((function(){c(!0)}),[c]);return Object(h.jsxs)(pe,{children:[Object(h.jsxs)(je,{onClick:p,children:[Object(h.jsx)(de,{card:t,onShowAnswer:p,showAnswer:a}),j&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:["status: ",r]}),Object(h.jsxs)("h3",{children:["collection: ",i]}),Object(h.jsxs)("h3",{children:["Good: ",d]}),Object(h.jsxs)("h3",{children:["Bad: ",u]}),Object(h.jsxs)("h3",{children:["id: ",l]})]})]}),Object(h.jsx)("div",{className:"separate-line"})]})},je=u.a.div.withConfig({displayName:"card-front-inner__Inner",componentId:"sc-6v23jh-0"})(["height:100%;padding:20px;&:hover{cursor:pointer;}"]),pe=u.a.div.withConfig({displayName:"card-front-inner__Container",componentId:"sc-6v23jh-1"})(["height:275px;background:linear-gradient(#F7F8FA,#C8C8C7);border-top-left-radius:25px;border-top-right-radius:25px;.separate-line{box-shadow:0px -2px 10px 1px #3f3f3f;}"]),he=function(e){var t=e.card,n=Object(s.useState)(!1),a=Object(b.a)(n,2),c=a[0],r=a[1],i=Object(s.useMemo)((function(){return t.status===o.good?o.good:t.status===o.bad?o.bad:o.new}),[t.status]),l=Object(s.useCallback)((function(){r(!c)}),[c]);return Object(h.jsx)(fe,{size:"16",children:Object(h.jsxs)(Oe,{className:Object(m.a)({flipped:c}),children:[Object(h.jsxs)("div",{className:Object(m.a)("cardFace front",i),children:[Object(h.jsx)(K,{onClick:l}),Object(h.jsx)(ue,{card:t}),Object(h.jsx)(ce,{card:t})]}),Object(h.jsx)("div",{className:"cardFace back",children:Object(h.jsx)($,{card:t,onCardFlip:l})})]})})},fe=u.a.div.withConfig({displayName:"card__CardWrapper",componentId:"p4941i-0"})(["display:flex;align-items:center;justify-content:center;border-radius:20px;overflow:hidden;width:300px;height:400px;margin:15px;perspective:600px;font-size:","px;"],(function(e){return e.size})),Oe=u.a.div.withConfig({displayName:"card__Card",componentId:"p4941i-1"})(["position:relative;width:250px;height:350px;transform-style:preserve-3d;transform-origin:center right;transition:transform 1s;.cardFace{position:absolute;width:100%;height:100%;color:#454545;;text-align:center;font-weight:bold;backface-visibility:hidden;box-shadow:2px 3px 15px -5px #000000;border-radius:20px;&.front{background-color:white;&.new{}&.good{}&.bad{}&.deleted{background-color:#a63d40;}}&.back{background-color:white;transform:rotateY(180deg);}}&.flipped{transform:translateX(-100%) rotateY(-180deg);}"]),xe=function(){var e=Y().cards,t=Object(s.useMemo)((function(){return e.length}),[e.length]);return Object(h.jsxs)(me,{children:[Object(h.jsx)("h1",{children:"Statistics :"}),Object(h.jsxs)("h1",{children:["Number of cards: ",t]})]})},me=u.a.div.withConfig({displayName:"statistics__Wrapper",componentId:"sc-1uqtsgn-0"})(["border:1px solid white;width:50%;color:white;"]),ge=function(){var e=Y().lessonMode,t=Object(s.useMemo)((function(){return e.numberOfCards}),[e.numberOfCards]),n=Object(s.useMemo)((function(){return e.goodAnswers}),[e.goodAnswers]),o=Object(s.useMemo)((function(){return e.badAnswers}),[e.badAnswers]);return Object(h.jsxs)(Ce,{children:[Object(h.jsx)("h1",{children:"lesson statistics"}),Object(h.jsxs)("h3",{children:["Number Of Cards: ",t]}),Object(h.jsxs)("h3",{children:["Good Answers: ",n]}),Object(h.jsxs)("h3",{children:["Bad Answers: ",o]})]})},Ce=u.a.div.withConfig({displayName:"lesson-statistics__Wrapper",componentId:"sc-1yksv7v-0"})(["border:1px solid white;"]),we=function(){var e=Y(),t=e.cards,n=e.activeCardIndex,o=e.setLessonMode,a=e.lessonMode,c=Object(s.useState)(!1),r=Object(b.a)(c,2),i=r[0],l=r[1],d=Object(s.useState)(!1),u=Object(b.a)(d,2),j=u[0],p=u[1],f=Object(s.useState)(0),O=Object(b.a)(f,2),x=O[0],m=O[1],g=Object(s.useMemo)((function(){return t.length}),[t.length]),C=Object(s.useCallback)((function(){var e=a;o(Object(ae.a)(Object(ae.a)({},e),{},{numberOfCards:g})),p(!0)}),[a,g,o]);return Object(s.useEffect)((function(){i&&!j&&C()}),[i,C,j]),Object(s.useEffect)((function(){g>n?m(n):g&&g===n&&l(!0)}),[n,g,x]),Object(h.jsxs)(ve,{children:[Object(h.jsx)(Ne,{children:x+1+" / "+g}),Object(h.jsx)("h1",{children:i?"Lesson Complete":"Lesson"}),!i&&t.length>1&&Object(h.jsx)(he,{card:t[x]},t[x]._id),j&&Object(h.jsx)(ge,{})]})},ve=u.a.div.withConfig({displayName:"lesson__Wrapper",componentId:"xp0n78-0"})(["border:1px solid white;"]),Ne=u.a.div.withConfig({displayName:"lesson__Counts",componentId:"xp0n78-1"})(["  border:1px solid white;font-size:20px;width:50px;"]),ke=function(){var e=Y().isLoggedIn;return Object(h.jsx)(ye,{className:Object(m.a)("wrapper"),isLoggedIn:e,children:e?"Logged":"NotLogged"})},ye=u.a.div.withConfig({displayName:"login-status__Container",componentId:"sc-1scs4w3-0"})(["display:flex;justify-content:center;border:1px solid black;position:absolute;top:0;right:0;width:100px;height:24px;border-radius:10px;background-color:white;"]),Ee=n(11).bake_cookie,Ie=function(){var e=Object(s.useState)("pass"),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Object(s.useState)("email"),c=Object(b.a)(a,2),r=c[0],i=c[1],l=Y(),d=l.isTestMode,u=l.checkSession,j=Object(s.useCallback)((function(e){var t=e.target,n=t.value,a=t.name;"email"===a?i(n):"password"===a&&o(n)}),[]),p=Object(s.useCallback)((function(e,t){e&&e.preventDefault(),function(e){var t=y();return v.a.post("".concat(t,"/login"),{json:e}).json()}(t||{email:r,password:n}).then((function(e){e.isMatch?(Ee("fishki",e.sessionId),console.log("cookie created"),u()):console.log("Invalid Password")}))}),[r,n,u]),f=Object(s.useCallback)((function(){p(null,{email:"guest",password:"guest"})}),[p]),x=Object(s.useCallback)((function(){u()}),[u]);return Object(h.jsxs)(Se,{children:[Object(h.jsx)("h1",{children:"Login:"}),Object(h.jsxs)(_e,{onSubmit:p,children:[Object(h.jsx)(O,{name:"email",value:r,onChange:j,type:"text",placeholder:"Email"}),Object(h.jsx)(O,{name:"password",value:n,onChange:j,type:"text",placeholder:"Password"}),Object(h.jsx)(C,{className:"login-form-button",type:"submit",children:"Login"}),Object(h.jsx)("div",{className:"login-form-guest",onClick:f,children:"Or test as a guest"}),d&&Object(h.jsx)(C,{onClick:x,className:"login-form-button",type:"button",children:"Check Session"})]})]})},_e=u.a.form.withConfig({displayName:"login-form__Form",componentId:"dbjq0v-0"})(["display:flex;flex-direction:column;"]),Se=u.a.div.withConfig({displayName:"login-form__Container",componentId:"dbjq0v-1"})(["height:100vh;display:flex;flex-direction:column;align-items:center;.login-form-button{max-width:200px;}.login-form-guest{color:#000;text-decoration:underline;margin-top:10px;&:hover{cursor:pointer;}}"]),Ae=(n(48),function(e){var t={backgroundColor:e.color};return Object(h.jsxs)("div",{className:"loading-dots",children:[Object(h.jsx)("div",{className:"loading-dots--dot",style:t}),Object(h.jsx)("div",{className:"loading-dots--dot",style:t}),Object(h.jsx)("div",{className:"loading-dots--dot",style:t})]})}),Le=function(){return Object(h.jsx)(Fe,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"text-container",children:"Checking Session"}),Object(h.jsx)("div",{className:"loader-container",children:Object(h.jsx)(Ae,{color:"#fff"})})]})})},Fe=u.a.div.withConfig({displayName:"checking-session__Wrapper",componentId:"sc-1qo7p1o-0"})(["background:linear-gradient(#d9d8df,#a19eae);height:100vh;display:flex;align-items:center;justify-content:center;.container{display:flex;align-items:baseline;}.text-container{margin-right:10px;font-size:2rem;color:white;}"]),De=function(){var e=Y(),t=e.isTestMode,n=e.setIsTestMode,o=e.setIsLessonMode,a=e.checkSession,c=Object(s.useCallback)((function(e){n(!t)}),[t,n]),r=Object(s.useCallback)((function(){o(!0)}),[o]),i=Object(s.useCallback)((function(){console.log("showCards")}),[]),l=Object(s.useCallback)((function(){console.log("create card")}),[]),d=Object(s.useCallback)((function(){console.log("show statistics")}),[]),b=Object(s.useCallback)((function(){(function(e){var t=y(),n={cookieId:e};return v.a.post("".concat(t,"/logout"),{json:n}).json()})(Object(B.read_cookie)("fishki")).then((function(e){e.cookieDeleted&&Object(B.delete_cookie)("fishki"),a()}))}),[a]);return Object(h.jsx)(Me,{children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(C,{onClick:b,className:"logout-button",children:"Logout"}),Object(h.jsx)(C,{onClick:c,className:"test-button",children:"Test Mode"}),Object(h.jsx)(C,{onClick:r,className:"start-lesson-button",children:"Start Lesson"}),Object(h.jsx)(C,{onClick:i,className:"show-cards-button",children:"Show All Cards"}),Object(h.jsx)(C,{onClick:l,className:"create-card-button",children:"Create New Card"}),Object(h.jsx)(C,{onClick:d,className:"show-statistics-button",children:"Show Statistics"})]})})},Me=u.a.div.withConfig({displayName:"menu-buttons__Container",componentId:"sc-1nkw7h7-0"})([""]),Te=function(){var e=Object(s.useState)(!0),t=Object(b.a)(e,2),n=t[0],o=t[1],a=Y(),c=a.cards,r=a.fetchCards,i=a.isLoggedIn,l=a.checkSession,d=a.isSessionChecking,u=Y().isLessonMode;return Object(s.useEffect)((function(){l(),r()}),[]),Object(s.useEffect)((function(){d&&o(!0),d||setTimeout((function(){o(!1)}),1e3)}),[d]),Object(h.jsxs)(Pe,{children:[n&&Object(h.jsx)(Le,{}),!i&&Object(h.jsx)(Ie,{}),i&&Object(h.jsx)(De,{}),u&&Object(h.jsx)(we,{}),Object(h.jsx)(We,{children:c&&c.map((function(e){return Object(h.jsx)(he,{card:e},e._id)}))}),Object(h.jsx)(ze,{children:Object(h.jsx)(Z,{})}),Object(h.jsx)(xe,{}),Object(h.jsx)(ke,{})]})},Pe=u.a.div.withConfig({displayName:"main__MainContainer",componentId:"sb5z0r-0"})(["display:flex;flex-direction:column;background-color:var(--tundora);background:linear-gradient(#d9d8df,#a19eae);.logout-button{max-width:100px;position:absolute;right:0;top:23px;}.test-button{max-width:100px;position:absolute;right:0;top:51px;}.start-lesson-button{max-width:200px;}.show-cards-button{max-width:200px;}.create-card-button{max-width:200px;}.create-collection-button{max-width:200px;}.show-statistics-button{max-width:200px;}"]),ze=u.a.div.withConfig({displayName:"main__MenuWrapper",componentId:"sb5z0r-1"})([""]),We=u.a.div.withConfig({displayName:"main__CardsWrapper",componentId:"sb5z0r-2"})(["display:flex;flex-wrap:wrap;"]);var Ge=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(U,{children:Object(h.jsx)(Te,{})})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),c(e),r(e)}))};d.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(Ge,{})}),document.getElementById("root")),Be()},9:function(e,t,n){}},[[49,1,2]]]);
//# sourceMappingURL=main.26a9f725.chunk.js.map