(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i=n(1),s=n.n(i),d=n(24),l=n.n(d),b=(n(33),n(3)),u=n(25),j=n(2);!function(e){e.new="new",e.good="good",e.bad="bad"}(r||(r={})),function(e){e.NEW="NEW",e.PENDING="PENDING",e.CREATED="CREATED",e.FAILED="FAILED"}(c||(c={})),function(e){e.NONE="NONE",e.DELETED="DELETED",e.FAILED="FAILED",e.PENDING="PENDING"}(a||(a={})),function(e){e.NONE="NONE",e.PENDING="PENDING",e.FAILED="FAILED",e.UPDATED="UPDATED"}(o||(o={}));var p,h=n(0),O=function(e){var t=e.status;return t===c.NEW?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"Create card"})}):t===c.CREATED?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"Card Created"})}):t===c.FAILED?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"Creatind card failed"})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h3",{children:"..."})})},f=(n(5),n(7),n(8)),x=function(){var e=g();return f.a.get("".concat(e,"/cards")).json()},m=function(e){var t=g(),n=e;return f.a.post("".concat(t,"/update"),{json:n}).json()},g=function(){return"https://node11255.herokuapp.com"},C=[{label:"angielski"},{label:"test"}],w=n(6),v=n(13);n(9);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function k(e,t){var n=e.title,r=e.titleId,c=E(e,["title","titleId"]);return i.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-10 0 1034 1024",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,p||(p=i.createElement("g",{transform:"matrix(1 0 0 -1 0 832)"},i.createElement("path",{fill:"currentColor",d:"M512 166.72l-261.28 261.28l45.28 45.28l216 -216l216 216l45.28 -45.28z"}))))}var y,I,A=i.forwardRef(k);n.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function D(e,t){var n=e.title,r=e.titleId,c=F(e,["title","titleId"]);return i.createElement("svg",_({width:30,height:30,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,y||(y=i.createElement("g",{clipPath:"url(#clip0-856330)"},i.createElement("path",{d:"M24.6425 15C24.0508 15 23.5711 15.4797 23.5711 16.0715V26.7856C23.5711 27.3773 23.0914 27.857 22.4996 27.857H3.21424C2.6225 27.857 2.14281 27.3773 2.14281 26.7856V5.35731C2.14281 4.76556 2.6225 4.28587 3.21424 4.28587H16.0712C16.663 4.28587 17.1427 3.80619 17.1427 3.21444C17.1427 2.62269 16.663 2.14307 16.0712 2.14307H3.21424C1.43906 2.14307 0 3.58213 0 5.35731V26.7856C0 28.5608 1.43906 29.9998 3.21424 29.9998H22.4997C24.2749 29.9998 25.7139 28.5608 25.7139 26.7856V16.0714C25.7139 15.4797 25.2343 15 24.6425 15Z",fill:"black"}),i.createElement("path",{d:"M28.799 1.20165C28.0297 0.432239 26.9863 7.44999e-05 25.8983 0.000200056C24.8096 -0.00293885 23.7651 0.429979 22.998 1.20234L8.88524 15.3139C8.76816 15.4318 8.67983 15.5752 8.62703 15.7328L6.48422 22.1613C6.2972 22.7227 6.60074 23.3294 7.16216 23.5163C7.27108 23.5526 7.38515 23.5711 7.49991 23.5713C7.61492 23.5711 7.72924 23.5526 7.83847 23.5167L14.267 21.3738C14.4249 21.3211 14.5683 21.2323 14.6859 21.1146L28.7986 7.00191C30.4004 5.40032 30.4006 2.80343 28.799 1.20165ZM27.2836 5.48795L13.3552 19.4164L9.1938 20.806L10.5791 16.6499L24.5129 2.72157C25.2789 1.95706 26.5197 1.95831 27.2842 2.72433C27.6494 3.09027 27.8552 3.58565 27.8568 4.10263C27.8581 4.62237 27.6517 5.12108 27.2836 5.48795Z",fill:"black"}))),I||(I=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0-856330"},i.createElement("rect",{width:30,height:30,fill:"b"})))))}var S=i.forwardRef(D),M=(n.p,function(e){var t=e.options,n=e.onSelection,r=e.className,c=Object(i.useState)(t[0].label),a=Object(j.a)(c,2),o=a[0],s=a[1],d=Object(i.useState)(!1),l=Object(j.a)(d,2),b=l[0],u=l[1],p=Object(i.useCallback)((function(e){s(e),n(e)}),[n]);return Object(h.jsx)(L,{className:Object(w.a)("wrapper",r),children:Object(h.jsxs)(v.Wrapper,{className:"dropdown",onSelection:p,onMenuToggle:function(e){u(e.isOpen)},children:[Object(h.jsxs)(v.Button,{className:"dropdown-title",children:[Object(h.jsx)("div",{children:o}),Object(h.jsx)("div",{children:Object(h.jsx)(A,{className:Object(w.a)("dropdown-arrow",{rotate:b})})})]}),Object(h.jsx)(v.Menu,{className:"dropdown-menu-wrapper",children:Object(h.jsx)("ul",{className:"dropdown-menu",children:t.map((function(e,t){return Object(h.jsx)(v.MenuItem,{value:e.label,className:"dropdown-menu-item",children:Object(h.jsx)("li",{className:"menu-item-wrapper",children:Object(h.jsx)("div",{className:"menu-item-inner",children:Object(h.jsxs)("div",{children:[" ",e.label," "]})})})},t)}))})})]})})}),L=b.a.div.withConfig({displayName:"dropdown__Container",componentId:"sc-104l720-0"})([".dropdown{border:1px solid #3F3F3F;text-align-last:left;background-color:white;border-radius:10px;border-width:2px;position:relative;}.dropdown-title{outline:none;position:relative;display:flex;padding:5px;color:var(--abbey);max-width:260px;}.dropdown-arrow{position:absolute;width:1.8em;pointer-events:none;right:5px;top:50%;transform:translateY(-50%) translateX(-50%) rotate(-90deg);transition:all 0.3s ease;&.rotate{transform:translateY(-50%) translateX(-50%) rotate(0);}}.dropdown-menu-wrapper{outline:none;position:absolute;z-index:999999;width:100%;max-width:260px;box-sizing:border-box;.dropdown-menu{list-style-type:none;margin:0;padding:0;.dropdown-menu-item{outline:none;border:1px solid #3f3f3f;border-width:2px;border-radius:10px;background:white;&:hover{background-color:var(--gallery);cursor:pointer;}.menu-item-wrapper{padding:10px 15px;color:inherit;}}}}"]),T=Object(i.createContext)(null),P=T.Provider,z=function(e){var t=e.children,n=Object(i.useState)({goodAnswers:0,badAnswers:0,numberOfCards:0}),r=Object(j.a)(n,2),c=r[0],a=r[1],o=Object(i.useState)(0),s=Object(j.a)(o,2),d=s[0],l=s[1],b=Object(i.useState)([]),u=Object(j.a)(b,2),p=u[0],O=u[1],f=Object(i.useState)(!1),m=Object(j.a)(f,2),g=m[0],C=m[1],w=Object(i.useState)(!1),v=Object(j.a)(w,2),N=v[0],E=v[1],k=Object(i.useCallback)((function(){x().then((function(e){console.log(e),O(e)})).catch((function(){return C(!0)}))}),[]),y=Object(i.useCallback)((function(){l(d+1)}),[d]),I=Object(i.useMemo)((function(){return{cards:p,error:g,fetchCards:k,activeCardIndex:d,increaseActiveCardIndex:y,lessonMode:c,setLessonMode:a,isTestMode:N,setIsTestMode:E}}),[p,g,k,d,y,c,a,N,E]);return Object(h.jsx)(P,{value:I,children:t})},W=function(){var e=Object(i.useContext)(T);if(null===e)throw Error("Context has not been Provided!");return e},G=function(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(!1),a=Object(j.a)(c,2),o=a[0],s=a[1],d=Object(i.useState)(!1),l=Object(j.a)(d,2),b=l[0],u=l[1],p=W(),h=p.fetchCards,O=p.increaseActiveCardIndex;return Object(i.useEffect)((function(){u(!1)}),[o]),{hasError:n,isLoading:o,isComplete:b,editCard:Object(i.useCallback)((function(e){s(!0),m(e).then((function(e){e.ok&&(u(!0),s(!1),h())})).catch((function(e){r(!0),s(!1),console.log(e)}))}),[h]),editAnswer:Object(i.useCallback)((function(e){s(!0),m(e).then((function(e){e.ok&&(u(!0),s(!1),O())})).catch((function(e){r(!0),s(!1),console.log(e)}))}),[O])}};var B,R=function(){var e=Object(i.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(""),s=Object(j.a)(o,2),d=s[0],l=s[1],b=Object(i.useState)(!1),u=Object(j.a)(b,2),p=u[0],x=u[1],m=Object(i.useState)(c.NEW),w=Object(j.a)(m,2),v=w[0],N=w[1],E=C,k=Object(i.useState)(C[0].label),y=Object(j.a)(k,2),I=y[0],A=y[1],_=W().fetchCards,F=Object(i.useCallback)((function(e){if(e.preventDefault(),n&&d&&I){x(!1);var t={front:n,back:d,status:r.new,collectionName:I};N(c.PENDING),function(e){var t=g();return f.a.post("".concat(t,"/add"),{json:e})}(t).then((function(){N(c.CREATED),a(""),l(""),_()})).catch((function(e){N(c.FAILED),console.log(e)}))}else x(!0)}),[n,d,I,_]),D=Object(i.useCallback)((function(e){var t=e.target.name,n=e.target.value;"front"===t?a(n):l(n)}),[]),S=Object(i.useCallback)((function(e){A(e)}),[]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(U,{children:[Object(h.jsx)("h1",{children:"Create card"}),Object(h.jsxs)("form",{action:"submit",onSubmit:F,autoComplete:"off",children:[Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{type:"text",placeholder:"Front",onChange:D,value:n,name:"front"})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{type:"text",placeholder:"Back",onChange:D,value:d,name:"back"})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)(M,{onSelection:S,options:E})}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("button",{type:"submit",children:"Submit"})}),Object(h.jsx)(O,{status:v}),p&&Object(h.jsx)("div",{className:"",children:Object(h.jsx)("p",{children:"You need to fill all the required forms"})})]})]})})},U=b.a.div(B||(B=Object(u.a)(["\nwidth:350px;\npadding:50px;\nborder:1px solid white;\nbackground-color:var(--mine-shaft);\ncolor:white;\n"]))),Y=function(){var e=Object(i.useCallback)((function(e){e.preventDefault(),function(e){var t=g(),n={name:e};return f.a.post("".concat(t,"/collections"),{json:n}).json()}("lolo").then((function(e){console.log(e)}))}),[]);return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:e,children:["Create collection:",Object(h.jsx)("button",{children:"Create Colection"})]})})},H=function(e){var t=e.onClick,n=Object(i.useState)(!1),r=Object(j.a)(n,2),c=r[0],a=r[1],o=Object(i.useCallback)((function(){a(!c),t()}),[c,t]);return Object(h.jsx)(V,{children:Object(h.jsx)(S,{className:Object(w.a)("iconWrapper",{editMode:c}),onClick:o})})},V=b.a.div.withConfig({displayName:"edit-button__EditIconWrapper",componentId:"buh0p9-0"})(["position:absolute;top:6px;right:10px;svg{width:17px;height:17px;}&:hover{cursor:pointer;}"]),X=n(21),Z=function(e){var t=e.onClick,n=e.className,r=e.name,c=e.bgColor,a=e.children,o=Object(i.useCallback)((function(e){t&&t(e)}),[t]);return Object(h.jsx)(q,{bgColor:c,name:r,onClick:o,className:Object(w.a)("button",n),children:a})},q=b.a.button.withConfig({displayName:"button__ButtonWrapper",componentId:"sc-10pbdnn-0"})(["margin:10px;width:100%;padding:5px 10px;border-radius:10px;outline:none;background-color:",";color:white;&:hover,&:focus{cursor:pointer;background-color:",";}"],(function(e){return e.bgColor?e.bgColor:"#3F3F3F"}),(function(e){return e.bgColor?Object(X.a)("0.1",e.bgColor):Object(X.a)("0.1","#3F3F3F")})),J=function(e){var t=e.card,n=e.onCardFlip,r=C,c=t.front,o=t.back,s=t.status,d=t._id,l=Object(i.useState)(!1),b=Object(j.a)(l,2),u=b[0],p=b[1],O=Object(i.useState)(c),x=Object(j.a)(O,2),m=x[0],v=x[1],N=Object(i.useState)(o),E=Object(j.a)(N,2),k=E[0],y=E[1],I=Object(i.useState)(C[0].label),A=Object(j.a)(I,2),_=A[0],F=A[1],D=Object(i.useState)(a.NONE),S=Object(j.a)(D,2),L=S[0],T=S[1],P=G(),z=P.hasError,B=P.isLoading,R=P.isComplete,U=P.editCard,Y=W().fetchCards;Object(i.useEffect)((function(){R&&p(!1)}),[R]);var V=Object(i.useCallback)((function(e){F(e)}),[]),X=Object(i.useCallback)((function(){U({id:d,front:m,back:k,collectionName:_})}),[d,m,k,_,U]),q=Object(i.useMemo)((function(){return R?"Card Updated":B?"Updating Card":z?"Updating Card Failed":B?"":"Update Card"}),[z,B,R]),J=Object(i.useCallback)((function(e){var t=e.target,n=t.name,r=t.value;"front"===n?v(r):y(r)}),[]),te=Object(i.useCallback)((function(){T(a.PENDING),function(e){var t=g(),n={cardId:e};return f.a.delete("".concat(t,"/delete"),{json:n}).json()}(d).then((function(e){console.log("card deleted:"+e),T(a.DELETED),Y()})).catch((function(e){console.log(e),T(a.FAILED)}))}),[d,Y]),ne=Object(i.useMemo)((function(){return L===a.NONE?"Delete Card":L===a.PENDING?"Removing....":L===a.FAILED?"Failed removing card":L===a.DELETED?"Card deleted":""}),[L]);return Object(h.jsxs)(K,{status:s,className:Object(w.a)("wrapper",{editMode:u},{deleted:L===a.DELETED}),children:[Object(h.jsxs)(Q,{children:[Object(h.jsx)(H,{onClick:n}),Object(h.jsx)("div",{children:"Front:"}),Object(h.jsx)($,{name:"front",value:m,onChange:J,autoComplete:"off"}),Object(h.jsx)("div",{children:"Back:"}),Object(h.jsx)($,{name:"back",value:k,onChange:J,autoComplete:"off"}),Object(h.jsx)("div",{children:"Collection:"}),Object(h.jsx)(M,{onSelection:V,options:r})]}),Object(h.jsxs)(ee,{children:[Object(h.jsx)(Z,{onClick:X,children:q}),Object(h.jsx)(Z,{bgColor:"#F48A94",onClick:te,children:ne})]})]})},K=b.a.div.withConfig({displayName:"edit-card__Container",componentId:"sc-183z39r-0"})(["display:flex;flex-direction:column;"]),Q=b.a.div.withConfig({displayName:"edit-card__CardBackInner",componentId:"sc-183z39r-1"})(["height:275px;background:linear-gradient(#F7F8FA,#C8C8C7);padding:20px;border-top-left-radius:25px;border-top-right-radius:25px;"]),$=b.a.input.withConfig({displayName:"edit-card__Input",componentId:"sc-183z39r-2"})(["padding:5px;border-radius:10px;border-color:#3f3f3f;margin:5px 0;outline:none;"]),ee=b.a.div.withConfig({displayName:"edit-card__ButtonsWrapper",componentId:"sc-183z39r-3"})(["background-color:white;display:flex;"]),te=n(4),ne=function(e){var t=e.card,n=G().editAnswer,c=W(),a=c.lessonMode,o=c.setLessonMode,s=Object(i.useCallback)((function(e){e.preventDefault();var c=e.target.name,i=t.goodAnswers,s=t.badAnswers,d=a;if("good"===c){var l=a.goodAnswers+1;o(Object(te.a)(Object(te.a)({},d),{},{goodAnswers:l})),n({id:t._id,goodAnswers:i+1,status:r.good})}else{var b=a.badAnswers+1;o(Object(te.a)(Object(te.a)({},d),{},{badAnswers:b})),n({id:t._id,badAnswers:s+1,status:r.bad})}}),[t,a,o,n]);return Object(h.jsxs)(re,{className:Object(w.a)("wrapper"),children:[Object(h.jsx)(Z,{onClick:s,name:"good",children:"Good"}),Object(h.jsx)(Z,{onClick:s,name:"bad",children:"Bad"})]})},re=b.a.div.withConfig({displayName:"card-answers-buttons__Wrapper",componentId:"d08j5j-0"})(["margin-top:13px;display:flex;"]),ce=function(e){var t=function(e,t){var n=parseInt((100*e/(e+t)).toFixed(2),10);return{firstColumn:n,secondColumn:100-n,goodAnswers:e,badAnswers:t}}(e.firstColumn,e.secondColumn);return Object(h.jsx)(oe,{children:Object(h.jsxs)("div",{className:"inner-wrapper",children:[Object(h.jsxs)("div",{className:"row-wrapper good",children:[Object(h.jsx)(ae,{value:t.firstColumn,bgColor:"#3DC99C"}),Object(h.jsx)("div",{className:"text",children:t.goodAnswers})]}),Object(h.jsxs)("div",{className:"row-wrapper bad",children:[Object(h.jsx)(ae,{value:t.secondColumn,bgColor:"#F48A94"}),Object(h.jsx)("div",{className:"text",children:t.badAnswers})]})]})})},ae=b.a.div.withConfig({displayName:"percentage-columns__Column",componentId:"zm23cp-0"})(["background-color:",";width:","%;height:5px;"],(function(e){return e.bgColor}),(function(e){return e.value+1})),oe=b.a.div.withConfig({displayName:"percentage-columns__Container",componentId:"zm23cp-1"})(["width:100%;height:50px;display:flex;align-items:center;flex-direction:column;.text{margin-left:5px;font-size:10px;}.good{color:var(--primaryGreen);border-left:1px solid var(--primaryGreen);}.bad{color:#F48A94;border-left:1px solid var(--primaryRed);}.inner-wrapper{width:100px;height:50px;}.row-wrapper{display:flex;align-items:center;border-width:2px;height:8px;}"]),ie=function(e){var t=e.card,n=e.showAnswer,r=e.onShowAnswer,c=t.front,a=t.back,o=t.goodAnswers,s=t.badAnswers,d=Object(i.useMemo)((function(){return function(e,t){var n=Math.floor(2*Math.random());return{visibleText:0===n?e:t,hiddenText:0===n?t:e}}(c,a)}),[c,a]),l=0===o&&0===s,b=Object(i.useCallback)((function(){r()}),[r]),u=d.visibleText,j=d.hiddenText;return Object(h.jsxs)(se,{onClick:b,children:[Object(h.jsx)("h3",{children:u}),Object(h.jsx)("div",{className:"separate-answer"}),n?Object(h.jsx)("h3",{children:j}):Object(h.jsx)("h3",{children:"Show Answer"}),n&&!l&&Object(h.jsx)(ce,{firstColumn:o,secondColumn:s})]})},se=b.a.div.withConfig({displayName:"card-answers__Container",componentId:"o8uhb4-0"})(["height:100%;.separate-answer{border-bottom:1px solid white;}"]),de=function(e){var t=e.card,n=Object(i.useState)(!1),r=Object(j.a)(n,2),c=r[0],a=r[1],o=t.status,s=t.collectionName,d=t._id,l=t.goodAnswers,b=t.badAnswers,u=W().isTestMode,p=Object(i.useCallback)((function(){a(!0)}),[a]);return Object(h.jsxs)(be,{children:[Object(h.jsxs)(le,{onClick:p,children:[Object(h.jsx)(ie,{card:t,onShowAnswer:p,showAnswer:c}),u&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:["status: ",o]}),Object(h.jsxs)("h3",{children:["collection: ",s]}),Object(h.jsxs)("h3",{children:["Good: ",l]}),Object(h.jsxs)("h3",{children:["Bad: ",b]}),Object(h.jsxs)("h3",{children:["id: ",d]})]})]}),Object(h.jsx)("div",{className:"separate-line"})]})},le=b.a.div.withConfig({displayName:"card-front-inner__Inner",componentId:"sc-6v23jh-0"})(["height:100%;padding:20px;&:hover{cursor:pointer;}"]),be=b.a.div.withConfig({displayName:"card-front-inner__Container",componentId:"sc-6v23jh-1"})(["height:275px;background:linear-gradient(#F7F8FA,#C8C8C7);border-top-left-radius:25px;border-top-right-radius:25px;.separate-line{box-shadow:0px -2px 10px 1px #3f3f3f;}"]),ue=function(e){var t=e.card,n=Object(i.useState)(!1),c=Object(j.a)(n,2),a=c[0],o=c[1],s=Object(i.useMemo)((function(){return t.status===r.good?r.good:t.status===r.bad?r.bad:r.new}),[t.status]),d=Object(i.useCallback)((function(){o(!a)}),[a]);return Object(h.jsx)(je,{size:"16",children:Object(h.jsxs)(pe,{className:Object(w.a)({flipped:a}),children:[Object(h.jsxs)("div",{className:Object(w.a)("cardFace front",s),children:[Object(h.jsx)(H,{onClick:d}),Object(h.jsx)(de,{card:t}),Object(h.jsx)(ne,{card:t})]}),Object(h.jsx)("div",{className:"cardFace back",children:Object(h.jsx)(J,{card:t,onCardFlip:d})})]})})},je=b.a.div.withConfig({displayName:"card__CardWrapper",componentId:"p4941i-0"})(["display:flex;align-items:center;justify-content:center;border-radius:20px;overflow:hidden;width:300px;height:400px;margin:15px;perspective:600px;font-size:","px;"],(function(e){return e.size})),pe=b.a.div.withConfig({displayName:"card__Card",componentId:"p4941i-1"})(["position:relative;width:250px;height:350px;transform-style:preserve-3d;transform-origin:center right;transition:transform 1s;.cardFace{position:absolute;width:100%;height:100%;color:#454545;;text-align:center;font-weight:bold;backface-visibility:hidden;box-shadow:2px 3px 15px -5px #000000;border-radius:20px;&.front{background-color:white;&.new{}&.good{}&.bad{}&.deleted{background-color:#a63d40;}}&.back{background-color:white;transform:rotateY(180deg);}}&.flipped{transform:translateX(-100%) rotateY(-180deg);}"]),he=function(){var e=W().cards,t=Object(i.useMemo)((function(){return e.length}),[e.length]);return Object(h.jsxs)(Oe,{children:[Object(h.jsx)("h1",{children:"Statistics :"}),Object(h.jsxs)("h1",{children:["Number of cards: ",t]})]})},Oe=b.a.div.withConfig({displayName:"statistics__Wrapper",componentId:"sc-1uqtsgn-0"})(["border:1px solid white;width:50%;color:white;"]),fe=function(){var e=W().lessonMode,t=Object(i.useMemo)((function(){return e.numberOfCards}),[e.numberOfCards]),n=Object(i.useMemo)((function(){return e.goodAnswers}),[e.goodAnswers]),r=Object(i.useMemo)((function(){return e.badAnswers}),[e.badAnswers]);return Object(h.jsxs)(xe,{children:[Object(h.jsx)("h1",{children:"lesson statistics"}),Object(h.jsxs)("h3",{children:["Number Of Cards: ",t]}),Object(h.jsxs)("h3",{children:["Good Answers: ",n]}),Object(h.jsxs)("h3",{children:["Bad Answers: ",r]})]})},xe=b.a.div.withConfig({displayName:"lesson-statistics__Wrapper",componentId:"sc-1yksv7v-0"})(["border:1px solid white;"]),me=function(){var e=W(),t=e.cards,n=e.activeCardIndex,r=e.setLessonMode,c=e.lessonMode,a=Object(i.useState)(!1),o=Object(j.a)(a,2),s=o[0],d=o[1],l=Object(i.useState)(!1),b=Object(j.a)(l,2),u=b[0],p=b[1],O=Object(i.useState)(0),f=Object(j.a)(O,2),x=f[0],m=f[1],g=Object(i.useMemo)((function(){return t.length}),[t.length]),C=Object(i.useCallback)((function(){var e=c;r(Object(te.a)(Object(te.a)({},e),{},{numberOfCards:g})),p(!0)}),[c,g,r]);return Object(i.useEffect)((function(){s&&!u&&C()}),[s,C,u]),Object(i.useEffect)((function(){g>n?m(n):g&&g===n&&d(!0)}),[n,g,x]),Object(h.jsxs)(ge,{children:[Object(h.jsx)(Ce,{children:x+1+" / "+g}),Object(h.jsx)("h1",{children:s?"Lesson Complete":"Lesson"}),!s&&t.length>1&&Object(h.jsx)(ue,{card:t[x]},t[x]._id),u&&Object(h.jsx)(fe,{})]})},ge=b.a.div.withConfig({displayName:"lesson__Wrapper",componentId:"xp0n78-0"})(["border:1px solid white;"]),Ce=b.a.div.withConfig({displayName:"lesson__Counts",componentId:"xp0n78-1"})(["  border:1px solid white;font-size:20px;width:50px;"]),we=function(){var e=W(),t=e.cards,n=e.error,r=e.fetchCards,c=W();Object(i.useEffect)((function(){r()}),[]);var a=Object(i.useCallback)((function(e){var t=c.isTestMode;c.setIsTestMode(!t)}),[c]);return Object(h.jsxs)(ve,{children:[Object(h.jsx)(Z,{onClick:a,className:"test-button",children:"Test Mode"}),Object(h.jsx)(me,{}),Object(h.jsx)(Ee,{children:t&&t.map((function(e){return Object(h.jsx)(ue,{card:e},e._id)}))}),n&&Object(h.jsx)("h1",{children:"Error while loading the cards"}),Object(h.jsx)(Ne,{children:Object(h.jsx)(R,{})}),Object(h.jsx)(Y,{}),Object(h.jsx)(he,{})]})},ve=b.a.div.withConfig({displayName:"main__MainWrapper",componentId:"sb5z0r-0"})(["display:flex;flex-direction:column;background-color:var(--tundora);background-color:#2a363b;background:linear-gradient(#D9D8DF,#A19EAE);.test-button{max-width:100px;}"]),Ne=b.a.div.withConfig({displayName:"main__MenuWrapper",componentId:"sb5z0r-1"})([""]),Ee=b.a.div.withConfig({displayName:"main__CardsWrapper",componentId:"sb5z0r-2"})(["display:flex;flex-wrap:wrap;"]);var ke=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(z,{children:Object(h.jsx)(we,{})})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(ke,{})}),document.getElementById("root")),ye()},9:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.ca990255.chunk.js.map