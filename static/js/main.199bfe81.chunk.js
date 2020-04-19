(this["webpackJsonptaquito-react"]=this["webpackJsonptaquito-react"]||[]).push([[0],{111:function(e,t){},158:function(e,t,a){},172:function(e,t,a){e.exports=a(359)},177:function(e,t,a){},184:function(e,t){},186:function(e,t){},249:function(e,t){},251:function(e,t){},280:function(e,t){},281:function(e,t){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},359:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(177),a(4)),i=a.n(l),u=a(11),s=a(8),d=a(29),m=a(161),p=function(e){var t=e.code,a=e.storage,n=e.currentStep,c=t.length>0?"// Contract Code \n"+JSON.stringify(t,null,2):"// Contract Code",o=a?"// Initial Storage Code \n"+JSON.stringify(a,null,2):"// Initial Storage Code ";return 1!==n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"contract-code-editor"},r.a.createElement(m.split,{width:"700px",height:"300px",mode:"json",theme:"monokai",tabSize:2,splits:2,style:{borderRadius:"5px",margin:"0 auto"},orientation:"beside",value:[c,o],name:"contract-code-editor",editorProps:{$blockScrolling:!0}})))},b=a(382),h=a(381),g=a(44),f=(a(158),function(e){var t=Object(g.a)(),a=t.register,c=t.handleSubmit,o=Object(n.useState)(""),l=Object(s.a)(o,2),d=l[0],m=l[1],p=Object(n.useState)(!1),f=Object(s.a)(p,2),v=f[0],E=f[1],S=e.updateProvider,k=e.provider,w=e.loading,O=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rpc&&S(t.rpc),m("Provider set and key file is importing"),E(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){E(!1)};return r.a.createElement("div",{id:"rpc"},r.a.createElement("h3",null,"Provider"),d&&r.a.createElement(b.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:v,autoHideDuration:3e3,onClose:C},r.a.createElement(h.a,{elevation:6,variant:"filled",onClose:C,severity:"success"},d)),r.a.createElement("div",{id:"rpc-dialog"},r.a.createElement("div",{id:"rpc-content"},r.a.createElement("div",{id:"balance-form"},r.a.createElement("form",{onSubmit:c(O)},r.a.createElement("input",{onChange:S,value:k||"https://api.tez.ie/rpc/carthagenet",id:"rpc-input",name:"rpc",ref:a}),r.a.createElement("br",null),r.a.createElement("input",{disabled:!!w,id:"".concat(w?"show-balance-button-hovered":"show-balance-button"),type:"submit"}))))))}),v=a(69),E=(a(352),function(e){var t=e.handleNetworkChange,a=e.network,n=e.updateContractAddress,c=e.handleContractSubmit,o=e.loading,l=e.currentStep,i=e.contractAddress,u=Object(g.a)(),s=u.register,d=u.handleSubmit,m={value:a,label:a.charAt(0).toUpperCase()+a.slice(1)};return 1!==l?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Lookup Contract Code"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(v.a,{className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:m,onChange:function(e){t(e.value)}}),r.a.createElement("div",{id:"content"},r.a.createElement("label",{id:"react-select-lookup-label"},"Enter Contract Address"),r.a.createElement("div",{id:"contract-code-form"},r.a.createElement("form",{onSubmit:d(c)},r.a.createElement("input",{onChange:n,placeholder:"Contract Address",id:"address-input",name:"address",ref:s}),r.a.createElement("br",null),r.a.createElement("input",{disabled:!i,id:"".concat(o?"show-balance-button-hovered":"show-balance-button"),type:"submit"}))))))}),S=(a(353),function(e){var t=e.signer,a=e.updateSigner,n=e.handleNetworkChange,c=e.network,o=e.handleLaunchSubmit,l=e.loading,i=e.currentStep,u=Object(g.a)(),s=u.register,d=u.handleSubmit,m={value:c,label:c.charAt(0).toUpperCase()+c.slice(1)};return 2!==i?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"dialog"},r.a.createElement("h2",null,"Originate Contract"),r.a.createElement("label",{id:"react-select-label"},"Choose Network"),r.a.createElement(v.a,{name:"address",ref:s,className:"network-select",options:[{value:"mainnet",label:"Mainnet"},{value:"carthagenet",label:"Carthagenet"},{value:"sandbox",label:"Sandbox"}],value:m,onChange:function(e){n(e.value)}}),r.a.createElement("label",{id:"react-select-signer-label"},"Choose Signer"),r.a.createElement("label",{className:"signer-toolbar"},"mainnet"!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{onClick:a,value:"ephemeral",id:"ephemeral",type:"radio"}),r.a.createElement("label",{className:"ephemeral"===t?"signer-button-selected":"signer-button",htmlFor:"ephemeral"},"Ephemeral Key")),r.a.createElement("input",{onClick:a,value:"beacon",id:"beacon",type:"radio"}),r.a.createElement("label",{className:"beacon"===t?"signer-button-selected":"signer-button",htmlFor:"beacon"},"Beacon"),r.a.createElement("input",{onClick:a,value:"tezbridge",id:"tezbridge",type:"radio"}),r.a.createElement("label",{className:"tezbridge"===t?"signer-button-selected":"signer-button",htmlFor:"tezbridge"},"TezBridge")),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"contract-launch-form"},r.a.createElement("form",{onSubmit:d(o)},r.a.createElement("input",{disabled:!(!l&&"Select A Network..."!==c),id:"show-balance-button",type:"submit"}))))))}),k=function(e){var t=e.snackbar,a=e.closeSnackbar,n=e.type,c=e.children,o=e.duration;return r.a.createElement(b.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:"none"===o?null:5e3,onClose:function(e,t){"clickaway"!==t&&a()}},r.a.createElement(h.a,{elevation:6,variant:"filled",onClose:a,severity:n},c))},w=function(e){var t=e.txnAddress,a=e.snackbar,n=e.closeSnackbar,c=e.error,o=e.loading,l=e.loadingMessage,i=e.launchNetwork;return r.a.createElement(r.a.Fragment,null,t&&!l&&r.a.createElement(k,{duration:5e3,snackbar:a,closeSnackbar:n,type:"success"},r.a.createElement(r.a.Fragment,null,"Launched new contract at ",t,r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://".concat(i,".tzstats.com/").concat(t)},"View on TzStats"))),c&&!l&&r.a.createElement(k,{snackbar:a,closeSnackbar:n,type:"warning"},r.a.createElement(r.a.Fragment,null,c)),o&&r.a.createElement(k,{duration:"none",snackbar:a,closeSnackbar:n,type:"info"},r.a.createElement(r.a.Fragment,null,l)))},O=(a(354),function(e){var t=e.lastLaunchedContract;return r.a.createElement("div",{className:"last-launched-contract-div"},r.a.createElement("h3",null,"Last Launched Contract:",r.a.createElement("div",{id:"last-launched-contract"},r.a.createElement("h5",null,t))))}),C=(a(355),function(e){var t=e.code,a=e.launchNetwork,n=e.signer,c=e.currentStep,o=e.setCurrentStep;return r.a.createElement("div",{className:"dots-container"},r.a.createElement("span",{onClick:function(){return o(1)},className:"".concat(1===c?"hide-step":"previous-step")},"Prev Step"),r.a.createElement("span",{className:"".concat(t.length>0?"dot completed":"dot"," ").concat(1===c?"active":"")},"1"),r.a.createElement("span",{className:"".concat("Select A Network..."!==a&&n?"dot completed":"dot"," ").concat(2===c?"active":"")},"2"),r.a.createElement("button",{onClick:function(){return o(2)},disabled:!(t.length>0),className:"".concat(2===c?"hide-step":"next-step")},"Next Step"))}),j=(a(356),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"left-container"},r.a.createElement("a",{href:"https://github.com/ecadlabs/taquito"},r.a.createElement("img",{height:"45",width:"150",alt:"Taquito logo",src:"taquito.png"}))),r.a.createElement("div",{className:"right-container"},r.a.createElement("a",{href:"https://github.com/ecadlabs/bjm"},r.a.createElement("img",{alt:"Github logo",height:"55",width:"100",src:"github.jpg"}))))}),x=a(17),N=a(164),y=a(165),z=function(){var e=Object(u.a)(i.a.mark((function e(t,a,n,r,c,o,l,u,s,m){var p,b,h,g,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="ephemeral"===e.t0?3:"tezbridge"===e.t0?19:"beacon"===e.t0?22:23;break;case 3:return e.prev=3,p=new x.a,e.next=7,p.createRequest({url:"https://api.tez.ie/keys/".concat(n||a,"/ephemeral"),method:"POST",headers:{Authorization:"Bearer taquito-example"}});case 7:return b=e.sent,h=b.id,g=b.pkh,f=new N.a(g,"https://api.tez.ie/keys/".concat(n||a,"/ephemeral/").concat(h,"/"),{headers:{Authorization:"Bearer taquito-example"}}),e.next=13,d.a.setSignerProvider(f);case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(3),m&&m(e.t1.message);case 18:return e.abrupt("break",24);case 19:return d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(n||a),signer:new y.a}),d.a.contract.originate({code:r,init:c}).then((function(e){return e.contract()})).then((function(e){o&&o(!1),l&&l(!1),u&&u(""),s&&s(e.address),l&&l(!0)})).catch((function(e){throw e})),e.abrupt("break",24);case 22:case 23:return e.abrupt("break",24);case 24:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,a,n,r,c,o,l,i,u,s){return e.apply(this,arguments)}}(),A=(a(357),a(358),function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),m=l[0],b=l[1],h=Object(n.useState)(""),g=Object(s.a)(h,2),v=g[0],k=g[1],x=Object(n.useState)(""),N=Object(s.a)(x,2),y=N[0],A=N[1],F=Object(n.useState)(!1),L=Object(s.a)(F,2),P=L[0],q=L[1],T=Object(n.useState)(""),B=Object(s.a)(T,2),I=B[0],J=B[1],M=Object(n.useState)(""),D=Object(s.a)(M,2),G=D[0],H=D[1],R=Object(n.useState)([]),U=Object(s.a)(R,2),K=U[0],V=U[1],$=Object(n.useState)(),_=Object(s.a)($,2),Q=_[0],W=_[1],X=Object(n.useState)("Select A Network..."),Y=Object(s.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)("Select A Network..."),ae=Object(s.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useState)(""),oe=Object(s.a)(ce,2),le=oe[0],ie=oe[1],ue=Object(n.useState)(""),se=Object(s.a)(ue,2),de=se[0],me=se[1],pe=Object(n.useState)(""),be=Object(s.a)(pe,2),he=be[0],ge=be[1];Object(n.useEffect)((function(){de&&localStorage.setItem("lastLaunchedContract",de);var e=localStorage.getItem("lastLaunchedContract");ge(e)}),[de]);var fe=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("sandbox"===t){e.next=4;break}return e.next=3,d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(t)});case 3:H("https://api.tez.ie/rpc/".concat(t));case 4:ee(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),k("Launching contract..."),q(!0),H("https://api.tez.ie/rpc/".concat(Z)),e.next=6,d.a.setProvider({rpc:"https://api.tez.ie/rpc/".concat(Z)});case 6:return e.next=8,z(I,ne,Z,K,Q,b,q,k,me,A);case 8:"tezbridge"!==I&&d.a.contract.originate({code:K,init:Q}).then((function(e){return e.contract()})).then((function(e){b(!1),q(!1),k(""),me(e.address),q(!0)})).catch((function(e){return A(e)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),k("Loading contract code..."),q(!0),e.next=5,d.a.setProvider({rpc:G});case 5:return e.next=7,d.a.contract.at(le);case 7:t=e.sent,V(t.script.code),W(t.script.storage),ie(""),k(""),b(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(t.currentTarget.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{id:"top-header"},r.a.createElement(f,{loading:m,provider:G,updateProvider:Se}),he&&r.a.createElement(O,{lastLaunchedContract:he})),r.a.createElement("div",{id:"wallet"},r.a.createElement("h1",null,"The George Cloney"),r.a.createElement(w,{launchNetwork:Z,txnAddress:de,snackbar:P,closeSnackbar:function(){q(!1)},error:y,loading:m,loadingMessage:v}),r.a.createElement("div",{id:"main-forms"},r.a.createElement(E,{contractAddress:le,currentStep:a,loading:m,handleContractSubmit:Ee,updateContractAddress:function(e){ie(e.target.value)},handleNetworkChange:function(e){"sandbox"===e&&H(""),H("https://api.tez.ie/rpc/".concat(e)),re(e)},network:ne}),r.a.createElement(S,{currentStep:a,setCurrentStep:c,loading:m,signer:I,updateSigner:ke,handleLaunchSubmit:ve,handleNetworkChange:fe,network:Z})),r.a.createElement(C,{setCurrentStep:c,currentStep:a,signer:I,code:K,launchNetwork:Z}),r.a.createElement(p,{currentStep:a,code:K,storage:Q})))});o.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.199bfe81.chunk.js.map