(this.webpackJsonpcashingame=this.webpackJsonpcashingame||[]).push([[16],{104:function(e,a,t){"use strict";t.r(a);var n=t(65),c=t(0),r=t.n(c),l=t(62),s=t(12),o=t(70),m=(t(69),t(68)),i=t(63),d=t(64),u=t(6);t(18);a.default=function(e){Object(s.d)();var a=Object(s.e)((function(e){return e.common.error})),t=Object(s.e)((function(e){return e.common.fetching})),v=Object(o.a)(),f=(v.register,v.errors,v.handleSubmit,Object(c.useState)({})),E=Object(n.a)(f,2),p=(E[0],E[1]),N=e.match.params.id;return Object(c.useEffect)((function(){u.a.Transaction.view(N).then((function(e){p(e),console.log(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"layoutSidenav"},r.a.createElement(i.a,null),r.a.createElement("div",{id:"layoutSidenav_content"},r.a.createElement("main",null,r.a.createElement("div",{className:"page-header page-header-light bg-white shadow"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"page-header-content py-4"},r.a.createElement("ol",{className:"breadcrumb mt-4 mb-0 font-weight-bold h5"},r.a.createElement("li",{className:"breadcrumb-item color-cust-navy"},r.a.createElement(l.a,{to:"/transactions"},r.a.createElement("span",{className:"color-cust-navy"},"Transactions"))),r.a.createElement("li",{className:"breadcrumb-item active"},"Approve"))))),r.a.createElement("div",{className:"container-fluid mt-4"},r.a.createElement("div",{className:"card mb-4"},r.a.createElement("div",{className:"card-header py-2 d-flex justify-content-between bg-cust-navy"},r.a.createElement("span",{className:"h4 color-cust-warm"},"Approve Transaction"),r.a.createElement(l.a,{to:"/transactions"},r.a.createElement("button",{type:"button",className:"btn bg-cust-warm pull-right font-weight-bold"},"\xa0Back\xa0"))),r.a.createElement("div",{className:"card-body"},r.a.createElement(m.a,{error:a}),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("div",{className:"form-group font-weight-bolder"},r.a.createElement("label",{className:"mb-2",htmlFor:"referenceNo"},"Cross Reference"),r.a.createElement("input",{className:"form-control py-4",name:"referenceNo",id:"referenceNo",type:"text",placeholder:"Enter reference number"}))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("div",{className:"form-group font-weight-bolder"},r.a.createElement("label",{className:"mb-2",htmlFor:"referenceNo"},"Customer No"),r.a.createElement("input",{className:"form-control py-4",name:"transactionID",id:"transactionID",type:"text",placeholder:"Enter transaction number"}))))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("div",{className:"form-group font-weight-bolder"},r.a.createElement("label",{className:"mb-2",htmlFor:"referenceNo"},"Transaction"),r.a.createElement("input",{className:"form-control py-4",name:"transactionID",id:"transactionID",type:"text",placeholder:""}))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("div",{className:"form-group font-weight-bolder"},r.a.createElement("label",{className:"mb-2",htmlFor:"transactionType"},"Transaction Type"),r.a.createElement("input",{className:"form-control py-4",name:"transactionType",id:"transactionType",type:"text",placeholder:""}))))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group font-weight-bolder"},r.a.createElement("label",{className:"mb-2",htmlFor:"amount"},"Amount"),r.a.createElement("input",{className:"form-control py-4",name:"amount",id:"amount",type:"number",placeholder:"Enter Amount"})))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group font-weight-bolder"},r.a.createElement("label",{className:"mb-2",htmlFor:"balance"},"Balance"),r.a.createElement("input",{className:"form-control py-4",name:"balance",id:"balance",type:"number",placeholder:""})))),r.a.createElement("div",{className:"mt-2 mb-0 float-right"},r.a.createElement("button",{type:"submit",className:"btn bg-success text-light",disabled:t},t?"approving":"Approve Transaction"))))))),r.a.createElement(d.a,null))))}},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var n=t(15),c=t(9),r=t(0),l=t.n(r),s=t(11),o=(t(1),t(5)),m=t(8),i=t(10);l.a.Component;l.a.Component;var d=function(e,a){return"function"===typeof e?e(a):e},u=function(e,a){return"string"===typeof e?Object(s.c)(e,null,null,a):e},v=function(e){return e},f=l.a.forwardRef;"undefined"===typeof f&&(f=v);var E=f((function(e,a){var t=e.innerRef,n=e.navigate,c=e.onClick,r=Object(m.a)(e,["innerRef","navigate","onClick"]),s=r.target,i=Object(o.a)({},r,{onClick:function(e){try{c&&c(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return i.ref=v!==f&&a||t,l.a.createElement("a",i)}));var p=f((function(e,a){var t=e.component,c=void 0===t?E:t,r=e.replace,s=e.to,p=e.innerRef,N=Object(m.a)(e,["component","replace","to","innerRef"]);return l.a.createElement(n.e.Consumer,null,(function(e){e||Object(i.a)(!1);var t=e.history,n=u(d(s,e.location),e.location),m=n?t.createHref(n):"",E=Object(o.a)({},N,{href:m,navigate:function(){var a=d(s,e.location);(r?t.replace:t.push)(a)}});return v!==f?E.ref=a||p:E.innerRef=p,l.a.createElement(c,E)}))})),N=function(e){return e},b=l.a.forwardRef;"undefined"===typeof b&&(b=N);var h=b((function(e,a){var t=e["aria-current"],c=void 0===t?"page":t,r=e.activeClassName,s=void 0===r?"active":r,v=e.activeStyle,f=e.className,E=e.exact,h=e.isActive,g=e.location,y=e.strict,w=e.style,k=e.to,j=e.innerRef,C=Object(m.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return l.a.createElement(n.e.Consumer,null,(function(e){e||Object(i.a)(!1);var t=g||e.location,r=u(d(k,t),t),m=r.pathname,O=m&&m.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=O?Object(n.f)(t.pathname,{path:O,exact:E,strict:y}):null,x=!!(h?h(T,t):T),R=x?function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(f,s):f,S=x?Object(o.a)({},w,{},v):w,A=Object(o.a)({"aria-current":x&&c||null,className:R,style:S,to:r},C);return N!==b?A.ref=a||j:A.innerRef=j,l.a.createElement(p,A)}))}))},63:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(12),l=t(62),s=t(18);a.a=function(e){var a=Object(r.d)(),t=Object(s.j)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"layoutSidenav_nav"},c.a.createElement("nav",{className:"sidenav shadow-right sidenav-dark bg-cust-navy"},c.a.createElement("div",{className:"sidenav-menu"},c.a.createElement("div",{className:"nav accordion pt-4 mt-4 font-weight-normal",id:"accordionSidenav"},c.a.createElement(l.b,{className:"nav-link collapsed",to:"/dashboard","data-toggle":"collapse","data-target":"#collapseDashboards","aria-expanded":"false","aria-controls":"collapseDashboards",activeClassName:"selectedLink"},c.a.createElement("div",{className:"nav-link-icon"},c.a.createElement("i",{"data-feather":"activity"})),c.a.createElement("span",{className:"color-cust-warm"},"Dashboards"),c.a.createElement("div",{className:"sidenav-collapse-arrow"})),["IsSuperAdmin","IsAdministrator","IsCashier"].includes(null===t||void 0===t?void 0:t.role)&&c.a.createElement(l.b,{className:"nav-link collapsed",to:"users"},c.a.createElement("div",{className:"nav-link-icon"},c.a.createElement("i",{"data-feather":"layout"})),c.a.createElement("span",{className:"color-cust-warm"},"Users"),c.a.createElement("div",{className:"sidenav-collapse-arrow"})),c.a.createElement(l.b,{className:"nav-link collapsed",to:"customers"},c.a.createElement("div",{className:"nav-link-icon"},c.a.createElement("i",{"data-feather":"package"})),c.a.createElement("span",{className:"color-cust-warm"},"Customers"),c.a.createElement("div",{className:"sidenav-collapse-arrow"})),c.a.createElement(l.b,{className:"nav-link collapsed",to:"charges"},c.a.createElement("div",{className:"nav-link-icon"},c.a.createElement("i",{"data-feather":"tool"})),c.a.createElement("span",{className:"color-cust-warm"},"Charges"),c.a.createElement("div",{className:"sidenav-collapse-arrow"})),c.a.createElement(l.b,{className:"nav-link collapsed",to:"cards"},c.a.createElement("div",{className:"nav-link-icon"},c.a.createElement("i",{"data-feather":"tool"})),c.a.createElement("span",{className:"color-cust-warm"},"Cards"),c.a.createElement("div",{className:"sidenav-collapse-arrow"})),c.a.createElement(l.b,{className:"nav-link collapsed",to:"/transactions","data-toggle":"collapse","data-target":"#collapseTransaction","aria-expanded":"false","aria-controls":"collapseTransaction"},c.a.createElement("div",{className:"nav-link-icon"},c.a.createElement("i",{"data-feather":"book-open"})),c.a.createElement("span",{className:"color-cust-warm"},"Transactions"),c.a.createElement("div",{className:"sidenav-collapse-arrow"},c.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),c.a.createElement("div",{className:"collapse",id:"collapseTransaction","data-parent":"#accordionSidenav"},c.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},c.a.createElement(l.b,{className:"nav-link",to:"/transactions/credit"},"Post Credit"),c.a.createElement(l.b,{className:"nav-link",to:"/transactions/debit"},"Post Debit"),c.a.createElement(l.b,{className:"nav-link",to:"/transactions"},"View Transactions"))),c.a.createElement(l.b,{className:"nav-link collapsed",to:"reports","data-toggle":"collapse","data-target":"#collapseReports","aria-expanded":"false","aria-controls":"collapseReports"},c.a.createElement("div",{className:"nav-link-icon"},c.a.createElement("i",{"data-feather":"book-open"})),c.a.createElement("span",{className:"color-cust-warm"},"Reports"),c.a.createElement("div",{className:"sidenav-collapse-arrow"},c.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),c.a.createElement("div",{className:"collapse",id:"collapseReports","data-parent":"#accordionSidenav"},c.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},c.a.createElement(l.b,{className:"nav-link",to:"blank.html"}," Customer History"),c.a.createElement(l.b,{className:"nav-link",to:"blank.html"}," Customer Account Statement"),c.a.createElement(l.b,{className:"nav-link",to:"blank.html"},"Transactions"),c.a.createElement(l.b,{className:"nav-link",to:"cards"},"Card List"))))),c.a.createElement("div",{className:"sidenav-footer"},c.a.createElement("div",{className:"sidenav-footer-content color-cust-warm text-center"},c.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder py-2"},t.username," (",t.role,")"),c.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder"},c.a.createElement("button",{className:"btn btn-sm bg-white mx-2 py-0",onClick:function(){a(Object(s.m)())}},"logout")))))))}},64:function(e,a,t){"use strict";var n=t(0),c=t.n(n);a.a=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",{className:"footer mt-auto bg-cust-light "},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 small font-weight-bolder"},"Copyright \xa9 SAVLITE ADMIN 2020"),c.a.createElement("div",{className:"col-md-6 text-md-right small font-weight-bolder"},c.a.createElement("a",{href:"#!"},"Privacy Policy"),"\xb7",c.a.createElement("a",{href:"#!"},"Terms & Conditions"))))))}},68:function(e,a,t){"use strict";var n=t(0),c=t.n(n);a.a=function(e){var a=e.error;return a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"alert alert-danger",role:"alert"},a)):null}},69:function(e,a,t){}}]);
//# sourceMappingURL=16.afd23ee2.chunk.js.map