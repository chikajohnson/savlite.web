(this.webpackJsonpcashingame=this.webpackJsonpcashingame||[]).push([[19],{62:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return g}));var n=t(15),l=t(9),c=t(0),r=t.n(c),s=t(11),o=(t(1),t(5)),i=t(8),m=t(10);r.a.Component;r.a.Component;var d=function(e,a){return"function"===typeof e?e(a):e},u=function(e,a){return"string"===typeof e?Object(s.c)(e,null,null,a):e},v=function(e){return e},E=r.a.forwardRef;"undefined"===typeof E&&(E=v);var f=E((function(e,a){var t=e.innerRef,n=e.navigate,l=e.onClick,c=Object(i.a)(e,["innerRef","navigate","onClick"]),s=c.target,m=Object(o.a)({},c,{onClick:function(e){try{l&&l(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return m.ref=v!==E&&a||t,r.a.createElement("a",m)}));var p=E((function(e,a){var t=e.component,l=void 0===t?f:t,c=e.replace,s=e.to,p=e.innerRef,b=Object(i.a)(e,["component","replace","to","innerRef"]);return r.a.createElement(n.e.Consumer,null,(function(e){e||Object(m.a)(!1);var t=e.history,n=u(d(s,e.location),e.location),i=n?t.createHref(n):"",f=Object(o.a)({},b,{href:i,navigate:function(){var a=d(s,e.location);(c?t.replace:t.push)(a)}});return v!==E?f.ref=a||p:f.innerRef=p,r.a.createElement(l,f)}))})),b=function(e){return e},h=r.a.forwardRef;"undefined"===typeof h&&(h=b);var g=h((function(e,a){var t=e["aria-current"],l=void 0===t?"page":t,c=e.activeClassName,s=void 0===c?"active":c,v=e.activeStyle,E=e.className,f=e.exact,g=e.isActive,N=e.location,w=e.strict,y=e.style,k=e.to,x=e.innerRef,C=Object(i.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return r.a.createElement(n.e.Consumer,null,(function(e){e||Object(m.a)(!1);var t=N||e.location,c=u(d(k,t),t),i=c.pathname,j=i&&i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=j?Object(n.f)(t.pathname,{path:j,exact:f,strict:w}):null,S=!!(g?g(T,t):T),O=S?function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(E,s):E,A=S?Object(o.a)({},y,{},v):y,_=Object(o.a)({"aria-current":S&&l||null,className:O,style:A,to:c},C);return b!==h?_.ref=a||x:_.innerRef=x,r.a.createElement(p,_)}))}))},63:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(12),r=t(62),s=t(18);a.a=function(e){var a=Object(c.d)(),t=Object(s.j)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"layoutSidenav_nav"},l.a.createElement("nav",{className:"sidenav shadow-right sidenav-dark bg-cust-navy"},l.a.createElement("div",{className:"sidenav-menu"},l.a.createElement("div",{className:"nav accordion pt-4 mt-4 font-weight-normal",id:"accordionSidenav"},l.a.createElement(r.b,{className:"nav-link collapsed",to:"/dashboard","data-toggle":"collapse","data-target":"#collapseDashboards","aria-expanded":"false","aria-controls":"collapseDashboards",activeClassName:"selectedLink"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"activity"})),l.a.createElement("span",{className:"color-cust-warm"},"Dashboards"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),["IsSuperAdmin","IsAdministrator","IsCashier"].includes(null===t||void 0===t?void 0:t.role)&&l.a.createElement(r.b,{className:"nav-link collapsed",to:"users"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"layout"})),l.a.createElement("span",{className:"color-cust-warm"},"Users"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(r.b,{className:"nav-link collapsed",to:"customers"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"package"})),l.a.createElement("span",{className:"color-cust-warm"},"Customers"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(r.b,{className:"nav-link collapsed",to:"charges"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"tool"})),l.a.createElement("span",{className:"color-cust-warm"},"Charges"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(r.b,{className:"nav-link collapsed",to:"cards"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"tool"})),l.a.createElement("span",{className:"color-cust-warm"},"Cards"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(r.b,{className:"nav-link collapsed",to:"/transactions","data-toggle":"collapse","data-target":"#collapseTransaction","aria-expanded":"false","aria-controls":"collapseTransaction"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"book-open"})),l.a.createElement("span",{className:"color-cust-warm"},"Transactions"),l.a.createElement("div",{className:"sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),l.a.createElement("div",{className:"collapse",id:"collapseTransaction","data-parent":"#accordionSidenav"},l.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},l.a.createElement(r.b,{className:"nav-link",to:"/transactions/credit"},"Post Credit"),l.a.createElement(r.b,{className:"nav-link",to:"/transactions/debit"},"Post Debit"),l.a.createElement(r.b,{className:"nav-link",to:"/transactions"},"View Transactions"))),l.a.createElement(r.b,{className:"nav-link collapsed",to:"reports","data-toggle":"collapse","data-target":"#collapseReports","aria-expanded":"false","aria-controls":"collapseReports"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"book-open"})),l.a.createElement("span",{className:"color-cust-warm"},"Reports"),l.a.createElement("div",{className:"sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),l.a.createElement("div",{className:"collapse",id:"collapseReports","data-parent":"#accordionSidenav"},l.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},l.a.createElement(r.b,{className:"nav-link",to:"blank.html"}," Customer History"),l.a.createElement(r.b,{className:"nav-link",to:"blank.html"}," Customer Account Statement"),l.a.createElement(r.b,{className:"nav-link",to:"blank.html"},"Transactions"),l.a.createElement(r.b,{className:"nav-link",to:"cards"},"Card List"))))),l.a.createElement("div",{className:"sidenav-footer"},l.a.createElement("div",{className:"sidenav-footer-content color-cust-warm text-center"},l.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder py-2"},t.username," (",t.role,")"),l.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder"},l.a.createElement("button",{className:"btn btn-sm bg-white mx-2 py-0",onClick:function(){a(Object(s.m)())}},"logout")))))))}},64:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"footer mt-auto bg-cust-light "},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 small font-weight-bolder"},"Copyright \xa9 SAVLITE ADMIN 2020"),l.a.createElement("div",{className:"col-md-6 text-md-right small font-weight-bolder"},l.a.createElement("a",{href:"#!"},"Privacy Policy"),"\xb7",l.a.createElement("a",{href:"#!"},"Terms & Conditions"))))))}},65:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,l=!1,c=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(o){l=!0,c=o}finally{try{n||null==s.return||s.return()}finally{if(l)throw c}}return t}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",(function(){return n}))},72:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(65),l=t(0),c=t.n(l),r=(t(72),t(63)),s=t(64),o=t(6),i=t(62);a.default=function(e){var a=Object(l.useState)([]),t=Object(n.a)(a,2),m=t[0],d=t[1];return Object(l.useEffect)((function(){o.a.Charge.load().then((function(e){d(e.result)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"layoutSidenav"},c.a.createElement(r.a,null),c.a.createElement("div",{id:"layoutSidenav_content"},c.a.createElement("main",null,c.a.createElement("div",{className:"page-header page-header-light bg-white shadow"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"page-header-content py-4"},c.a.createElement("ol",{className:"breadcrumb mt-4 mb-0 font-weight-normal h5"},c.a.createElement("li",{className:"breadcrumb-item color-cust-navy"},c.a.createElement(i.a,{to:"/charges"},c.a.createElement("span",{className:"color-cust-navy"},"Charges"))),c.a.createElement("li",{className:"breadcrumb-item active"},"List"))))),c.a.createElement("div",{class:"container-fluid mt-4"},c.a.createElement("div",{class:"card mb-4"},c.a.createElement("div",{class:"card-header py-2 d-flex justify-content-between bg-cust-navy"},c.a.createElement("span",{className:"h5 color-cust-warm"},"Charge List (",m.length,")"),c.a.createElement("p",{className:"pt-2"},c.a.createElement(i.a,{to:"charges/new"},c.a.createElement("button",{type:"button",class:"btn bg-light  text-dark pull-right font-weight-bold"},"\xa0Create\xa0")))),c.a.createElement("div",{class:"card-body"},c.a.createElement("div",{class:"datatable table-responsive"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-sm-12 col-md-6 d-sm-none"},c.a.createElement("div",{class:"dataTables_length",id:"dataTable_length"},c.a.createElement("label",{className:"font-weight-bolder"},"Show \xa0",c.a.createElement("select",{name:"dataTable_length","aria-controls":"dataTable",class:"form-control-sm"},c.a.createElement("option",{value:"10"},"10"),c.a.createElement("option",{value:"25"},"25"),c.a.createElement("option",{value:"50"},"50"),c.a.createElement("option",{value:"100"},"100")),"\xa0 entries"))),c.a.createElement("div",{class:"col-sm-12"},c.a.createElement("div",{class:"text-right"},c.a.createElement("label",{className:"font-weight-bold"},"Search:  \xa0",c.a.createElement("input",{type:"search",style:{width:"30vw"},class:"form-control-sm",placeholder:"search records","aria-controls":"dataTable"}))))),c.a.createElement("table",{class:"table table-bordered table-hover",id:"dataTable",cellSpacing:"0"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tfoot",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,m.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",{className:"font-weight-bolder"},c.a.createElement(i.a,{to:"charges/view/"+e.id},e.chargeName)),c.a.createElement("td",null,e.amount),c.a.createElement("td",{className:"text-left"},c.a.createElement("a",{href:"/charges/edit/"+e.id,className:"text-dark",title:"edit charge"},c.a.createElement("i",{class:"far fa-2x fa-edit"})),"\xa0 \xa0 \xa0",c.a.createElement("a",{href:"/charges/delete/"+e.id,className:"text-danger",title:"delete charge"},c.a.createElement("i",{class:"far fa-trash-alt fa-2x"}))))})))))),c.a.createElement("div",{class:"row bg-cust-navy pt-2 pb-2"},c.a.createElement("div",{class:"col-sm-12 col-md-5 "}),c.a.createElement("div",{class:"col-sm-12 col-md-7"},c.a.createElement("div",{class:"dataTables_paginate paging_simple_numbers float-right  mr-5",id:"dataTable_paginate"},c.a.createElement("ul",{class:"pagination"},c.a.createElement("li",{class:"paginate_button page-item previous disabled",id:"dataTable_previous"},c.a.createElement("a",{href:"#","aria-controls":"dataTable","data-dt-idx":"0",tabindex:"0",class:"page-link"},"Previous")),c.a.createElement("li",{class:"paginate_button page-item active"},c.a.createElement("a",{href:"#","aria-controls":"dataTable","data-dt-idx":"1",tabindex:"0",class:"page-link"},"1")),c.a.createElement("li",{class:"paginate_button page-item next disabled",id:"dataTable_next"},c.a.createElement("a",{href:"#","aria-controls":"dataTable","data-dt-idx":"2",tabindex:"0",class:"page-link"},"Next"))))))))),c.a.createElement(s.a,null))))}}}]);
//# sourceMappingURL=19.310cd888.chunk.js.map