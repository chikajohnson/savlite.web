(this.webpackJsonpcashingame=this.webpackJsonpcashingame||[]).push([[24],{113:function(e,a,t){"use strict";t.r(a);var n=t(65),l=t(0),r=t.n(l),c=t(12),s=(t(69),t(63)),o=t(64),i=t(6);function m(e){var a=e.show,t=e.color;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("div",{id:"spinner",className:"spinner-border spinner-border-sm text-".concat(t),role:"status"},r.a.createElement("span",{className:"sr-only"},"loading...")))}var d=t(62);a.default=function(e){var a=Object(c.d)(),t=Object(l.useState)([]),u=Object(n.a)(t,2),v=u[0],E=u[1],p=Object(c.e)((function(e){return e.common.fetching}));return Object(l.useEffect)((function(){a({type:"REQUEST_FETCHING"}),i.a.Transaction.load().then((function(e){a({type:"REQUEST_FETCHED"}),E(e.result)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"layoutSidenav"},r.a.createElement(s.a,null),r.a.createElement("div",{id:"layoutSidenav_content"},r.a.createElement("main",null,r.a.createElement("div",{className:"page-header page-header-light bg-white shadow"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"page-header-content py-4"},r.a.createElement("ol",{className:"breadcrumb mt-4 mb-0 font-weight-bold h5"},r.a.createElement("li",{className:"breadcrumb-item color-cust-navy"},r.a.createElement(d.a,{to:"/transactions"},r.a.createElement("span",{className:"color-cust-navy"},"Transactions"))),r.a.createElement("li",{className:"breadcrumb-item active"},"List"))))),r.a.createElement("div",{class:"container-fluid mt-4"},r.a.createElement("div",{class:"card mb-4"},r.a.createElement("div",{class:"card-header py-2 d-flex justify-content-between bg-cust-navy"},r.a.createElement("span",{className:"h4 color-cust-warm"},"Transaction List (",v.length,") ",r.a.createElement(m,{show:p,color:"white"})),r.a.createElement("p",{className:"pt-2"},r.a.createElement(d.a,{to:"transactions/credit"},r.a.createElement("button",{type:"button",class:"btn bg-light  text-dark pull-right font-weight-bold"},"\xa0Create\xa0")))),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"datatable table-responsive"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-12 col-md-6 d-sm-none"},r.a.createElement("div",{class:"dataTables_length",id:"dataTable_length"},r.a.createElement("label",{className:"font-weight-bolder"},"Show \xa0",r.a.createElement("select",{name:"dataTable_length","aria-controls":"dataTable",class:"form-control-sm"},r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"25"},"25"),r.a.createElement("option",{value:"50"},"50"),r.a.createElement("option",{value:"100"},"100")),"\xa0 entries"))),r.a.createElement("div",{class:"col-sm-12"},r.a.createElement("div",{class:"text-right"},r.a.createElement("label",{className:"font-weight-bold"},"Search:  \xa0",r.a.createElement("input",{type:"search",style:{width:"30vw"},class:"form-control-sm",placeholder:"search records","aria-controls":"dataTable"}))))),r.a.createElement("table",{class:"table table-bordered table-hover",id:"dataTable",cellSpacing:"0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"CrossReference No."),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Approval Status"),r.a.createElement("th",null,"Transaction Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"CrossReference No."),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Approval Status"),r.a.createElement("th",null,"Transaction Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,v.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement("td",null,a+1),r.a.createElement("td",{className:"font-weight-bolder h6"},r.a.createElement(d.a,{to:"transactions/view/"+e.id},e.referenceNo)),r.a.createElement("td",null,e.transactionType),r.a.createElement("td",null,e.amount),r.a.createElement("td",null,e.approved?r.a.createElement("strong",{className:"bg-success px-4 py-1 text-light"},"Approved"):r.a.createElement("strong",{className:"bg-warning px-4 py-1 text-dark"},"Pending")),r.a.createElement("td",null,new Date(e.transactionDate).toLocaleDateString()),r.a.createElement("td",{className:"text-left"},!e.approved&&"debit"===e.transactionType&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"/transactions/delete/"+e.id,className:"text-danger",title:"delete trans"},r.a.createElement("i",{class:"far fa-trash-alt fa-2x"})),"\xa0 \xa0 \xa0",r.a.createElement("a",{href:"/transactions/approve/"+e.id,className:"text-danger",title:"Approve trans"},r.a.createElement("button",{className:"btn btn-sm btn-success"},"approve")))))})),0===v.length&&r.a.createElement("p",{className:"h6 my-4 text-center"},"No record found"))))),r.a.createElement("div",{class:"row bg-cust-navy pt-2 pb-2"},r.a.createElement("div",{class:"col-sm-12 col-md-5 "}),r.a.createElement("div",{class:"col-sm-12 col-md-7"},r.a.createElement("div",{class:"dataTables_paginate paging_simple_numbers float-right  mr-5",id:"dataTable_paginate"},r.a.createElement("ul",{class:"pagination"},r.a.createElement("li",{class:"paginate_button page-item previous disabled",id:"dataTable_previous"},r.a.createElement("a",{href:"#","aria-controls":"dataTable","data-dt-idx":"0",tabindex:"0",class:"page-link"},"Previous")),r.a.createElement("li",{class:"paginate_button page-item active"},r.a.createElement("a",{href:"#","aria-controls":"dataTable","data-dt-idx":"1",tabindex:"0",class:"page-link"},"1")),r.a.createElement("li",{class:"paginate_button page-item next disabled",id:"dataTable_next"},r.a.createElement("a",{href:"#","aria-controls":"dataTable","data-dt-idx":"2",tabindex:"0",class:"page-link"},"Next"))))))))),r.a.createElement(o.a,null))))}},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return f})),t.d(a,"b",(function(){return g}));var n=t(15),l=t(9),r=t(0),c=t.n(r),s=t(11),o=(t(1),t(5)),i=t(8),m=t(10);c.a.Component;c.a.Component;var d=function(e,a){return"function"===typeof e?e(a):e},u=function(e,a){return"string"===typeof e?Object(s.c)(e,null,null,a):e},v=function(e){return e},E=c.a.forwardRef;"undefined"===typeof E&&(E=v);var p=E((function(e,a){var t=e.innerRef,n=e.navigate,l=e.onClick,r=Object(i.a)(e,["innerRef","navigate","onClick"]),s=r.target,m=Object(o.a)({},r,{onClick:function(e){try{l&&l(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return m.ref=v!==E&&a||t,c.a.createElement("a",m)}));var f=E((function(e,a){var t=e.component,l=void 0===t?p:t,r=e.replace,s=e.to,f=e.innerRef,b=Object(i.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(n.e.Consumer,null,(function(e){e||Object(m.a)(!1);var t=e.history,n=u(d(s,e.location),e.location),i=n?t.createHref(n):"",p=Object(o.a)({},b,{href:i,navigate:function(){var a=d(s,e.location);(r?t.replace:t.push)(a)}});return v!==E?p.ref=a||f:p.innerRef=f,c.a.createElement(l,p)}))})),b=function(e){return e},h=c.a.forwardRef;"undefined"===typeof h&&(h=b);var g=h((function(e,a){var t=e["aria-current"],l=void 0===t?"page":t,r=e.activeClassName,s=void 0===r?"active":r,v=e.activeStyle,E=e.className,p=e.exact,g=e.isActive,N=e.location,y=e.strict,w=e.style,k=e.to,T=e.innerRef,x=Object(i.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return c.a.createElement(n.e.Consumer,null,(function(e){e||Object(m.a)(!1);var t=N||e.location,r=u(d(k,t),t),i=r.pathname,S=i&&i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),C=S?Object(n.f)(t.pathname,{path:S,exact:p,strict:y}):null,j=!!(g?g(C,t):C),O=j?function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(E,s):E,A=j?Object(o.a)({},w,{},v):w,R=Object(o.a)({"aria-current":j&&l||null,className:O,style:A,to:r},x);return b!==h?R.ref=a||T:R.innerRef=T,c.a.createElement(f,R)}))}))},63:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(12),c=t(62),s=t(18);a.a=function(e){var a=Object(r.d)(),t=Object(s.j)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"layoutSidenav_nav"},l.a.createElement("nav",{className:"sidenav shadow-right sidenav-dark bg-cust-navy"},l.a.createElement("div",{className:"sidenav-menu"},l.a.createElement("div",{className:"nav accordion pt-4 mt-4 font-weight-normal",id:"accordionSidenav"},l.a.createElement(c.b,{className:"nav-link collapsed",to:"/dashboard","data-toggle":"collapse","data-target":"#collapseDashboards","aria-expanded":"false","aria-controls":"collapseDashboards",activeClassName:"selectedLink"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"activity"})),l.a.createElement("span",{className:"color-cust-warm"},"Dashboards"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),["IsSuperAdmin","IsAdministrator","IsCashier"].includes(null===t||void 0===t?void 0:t.role)&&l.a.createElement(c.b,{className:"nav-link collapsed",to:"users"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"layout"})),l.a.createElement("span",{className:"color-cust-warm"},"Users"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"customers"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"package"})),l.a.createElement("span",{className:"color-cust-warm"},"Customers"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"charges"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"tool"})),l.a.createElement("span",{className:"color-cust-warm"},"Charges"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"cards"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"tool"})),l.a.createElement("span",{className:"color-cust-warm"},"Cards"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"/transactions","data-toggle":"collapse","data-target":"#collapseTransaction","aria-expanded":"false","aria-controls":"collapseTransaction"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"book-open"})),l.a.createElement("span",{className:"color-cust-warm"},"Transactions"),l.a.createElement("div",{className:"sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),l.a.createElement("div",{className:"collapse",id:"collapseTransaction","data-parent":"#accordionSidenav"},l.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},l.a.createElement(c.b,{className:"nav-link",to:"/transactions/credit"},"Post Credit"),l.a.createElement(c.b,{className:"nav-link",to:"/transactions/debit"},"Post Debit"),l.a.createElement(c.b,{className:"nav-link",to:"/transactions"},"View Transactions"))),l.a.createElement(c.b,{className:"nav-link collapsed",to:"reports","data-toggle":"collapse","data-target":"#collapseReports","aria-expanded":"false","aria-controls":"collapseReports"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"book-open"})),l.a.createElement("span",{className:"color-cust-warm"},"Reports"),l.a.createElement("div",{className:"sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),l.a.createElement("div",{className:"collapse",id:"collapseReports","data-parent":"#accordionSidenav"},l.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},l.a.createElement(c.b,{className:"nav-link",to:"blank.html"}," Customer History"),l.a.createElement(c.b,{className:"nav-link",to:"blank.html"}," Customer Account Statement"),l.a.createElement(c.b,{className:"nav-link",to:"blank.html"},"Transactions"),l.a.createElement(c.b,{className:"nav-link",to:"cards"},"Card List"))))),l.a.createElement("div",{className:"sidenav-footer"},l.a.createElement("div",{className:"sidenav-footer-content color-cust-warm text-center"},l.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder py-2"},t.username," (",t.role,")"),l.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder"},l.a.createElement("button",{className:"btn btn-sm bg-white mx-2 py-0",onClick:function(){a(Object(s.m)())}},"logout")))))))}},64:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"footer mt-auto bg-cust-light "},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 small font-weight-bolder"},"Copyright \xa9 SAVLITE ADMIN 2020"),l.a.createElement("div",{className:"col-md-6 text-md-right small font-weight-bolder"},l.a.createElement("a",{href:"#!"},"Privacy Policy"),"\xb7",l.a.createElement("a",{href:"#!"},"Terms & Conditions"))))))}},65:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,l=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(o){l=!0,r=o}finally{try{n||null==s.return||s.return()}finally{if(l)throw r}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",(function(){return n}))},69:function(e,a,t){}}]);
//# sourceMappingURL=24.19f41d24.chunk.js.map