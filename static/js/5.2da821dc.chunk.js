(this.webpackJsonpcashingame=this.webpackJsonpcashingame||[]).push([[5],{62:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var n=t(15),l=t(9),r=t(0),c=t.n(r),s=t(11),o=(t(1),t(5)),m=t(8),i=t(10);c.a.Component;c.a.Component;var d=function(e,a){return"function"===typeof e?e(a):e},u=function(e,a){return"string"===typeof e?Object(s.c)(e,null,null,a):e},v=function(e){return e},E=c.a.forwardRef;"undefined"===typeof E&&(E=v);var f=E((function(e,a){var t=e.innerRef,n=e.navigate,l=e.onClick,r=Object(m.a)(e,["innerRef","navigate","onClick"]),s=r.target,i=Object(o.a)({},r,{onClick:function(e){try{l&&l(e)}catch(a){throw e.preventDefault(),a}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return i.ref=v!==E&&a||t,c.a.createElement("a",i)}));var p=E((function(e,a){var t=e.component,l=void 0===t?f:t,r=e.replace,s=e.to,p=e.innerRef,b=Object(m.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(n.e.Consumer,null,(function(e){e||Object(i.a)(!1);var t=e.history,n=u(d(s,e.location),e.location),m=n?t.createHref(n):"",f=Object(o.a)({},b,{href:m,navigate:function(){var a=d(s,e.location);(r?t.replace:t.push)(a)}});return v!==E?f.ref=a||p:f.innerRef=p,c.a.createElement(l,f)}))})),b=function(e){return e},N=c.a.forwardRef;"undefined"===typeof N&&(N=b);var h=N((function(e,a){var t=e["aria-current"],l=void 0===t?"page":t,r=e.activeClassName,s=void 0===r?"active":r,v=e.activeStyle,E=e.className,f=e.exact,h=e.isActive,g=e.location,w=e.strict,y=e.style,k=e.to,C=e.innerRef,j=Object(m.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return c.a.createElement(n.e.Consumer,null,(function(e){e||Object(i.a)(!1);var t=g||e.location,r=u(d(k,t),t),m=r.pathname,x=m&&m.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=x?Object(n.f)(t.pathname,{path:x,exact:f,strict:w}):null,S=!!(h?h(O,t):O),R=S?function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return e})).join(" ")}(E,s):E,A=S?Object(o.a)({},y,{},v):y,F=Object(o.a)({"aria-current":S&&l||null,className:R,style:A,to:r},j);return b!==N?F.ref=a||C:F.innerRef=C,c.a.createElement(p,F)}))}))},63:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(12),c=t(62),s=t(18);a.a=function(e){var a=Object(r.d)(),t=Object(s.j)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"layoutSidenav_nav"},l.a.createElement("nav",{className:"sidenav shadow-right sidenav-dark bg-cust-navy"},l.a.createElement("div",{className:"sidenav-menu"},l.a.createElement("div",{className:"nav accordion pt-4 mt-4 font-weight-normal",id:"accordionSidenav"},l.a.createElement(c.b,{className:"nav-link collapsed",to:"/dashboard","data-toggle":"collapse","data-target":"#collapseDashboards","aria-expanded":"false","aria-controls":"collapseDashboards",activeClassName:"selectedLink"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"activity"})),l.a.createElement("span",{className:"color-cust-warm"},"Dashboards"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),["IsSuperAdmin","IsAdministrator","IsCashier"].includes(null===t||void 0===t?void 0:t.role)&&l.a.createElement(c.b,{className:"nav-link collapsed",to:"users"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"layout"})),l.a.createElement("span",{className:"color-cust-warm"},"Users"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"customers"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"package"})),l.a.createElement("span",{className:"color-cust-warm"},"Customers"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"charges"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"tool"})),l.a.createElement("span",{className:"color-cust-warm"},"Charges"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"cards"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"tool"})),l.a.createElement("span",{className:"color-cust-warm"},"Cards"),l.a.createElement("div",{className:"sidenav-collapse-arrow"})),l.a.createElement(c.b,{className:"nav-link collapsed",to:"/transactions","data-toggle":"collapse","data-target":"#collapseTransaction","aria-expanded":"false","aria-controls":"collapseTransaction"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"book-open"})),l.a.createElement("span",{className:"color-cust-warm"},"Transactions"),l.a.createElement("div",{className:"sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),l.a.createElement("div",{className:"collapse",id:"collapseTransaction","data-parent":"#accordionSidenav"},l.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},l.a.createElement(c.b,{className:"nav-link",to:"/transactions/credit"},"Post Credit"),l.a.createElement(c.b,{className:"nav-link",to:"/transactions/debit"},"Post Debit"),l.a.createElement(c.b,{className:"nav-link",to:"/transactions"},"View Transactions"))),l.a.createElement(c.b,{className:"nav-link collapsed",to:"reports","data-toggle":"collapse","data-target":"#collapseReports","aria-expanded":"false","aria-controls":"collapseReports"},l.a.createElement("div",{className:"nav-link-icon"},l.a.createElement("i",{"data-feather":"book-open"})),l.a.createElement("span",{className:"color-cust-warm"},"Reports"),l.a.createElement("div",{className:"sidenav-collapse-arrow"},l.a.createElement("i",{className:"fas fa-plus-circle color-cust-warm"}))),l.a.createElement("div",{className:"collapse",id:"collapseReports","data-parent":"#accordionSidenav"},l.a.createElement("nav",{className:"sidenav-menu-nested nav accordion font-weight-bold",id:"accordionSidenavPagesMenu"},l.a.createElement(c.b,{className:"nav-link",to:"blank.html"}," Customer History"),l.a.createElement(c.b,{className:"nav-link",to:"blank.html"}," Customer Account Statement"),l.a.createElement(c.b,{className:"nav-link",to:"blank.html"},"Transactions"),l.a.createElement(c.b,{className:"nav-link",to:"cards"},"Card List"))))),l.a.createElement("div",{className:"sidenav-footer"},l.a.createElement("div",{className:"sidenav-footer-content color-cust-warm text-center"},l.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder py-2"},t.username," (",t.role,")"),l.a.createElement("div",{className:"sidenav-footer-title font-weight-bolder"},l.a.createElement("button",{className:"btn btn-sm bg-white mx-2 py-0",onClick:function(){a(Object(s.m)())}},"logout")))))))}},64:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"footer mt-auto bg-cust-light "},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 small font-weight-bolder"},"Copyright \xa9 SAVLITE ADMIN 2020"),l.a.createElement("div",{className:"col-md-6 text-md-right small font-weight-bolder"},l.a.createElement("a",{href:"#!"},"Privacy Policy"),"\xb7",l.a.createElement("a",{href:"#!"},"Terms & Conditions"))))))}},66:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(12),c=(t(67),t(18));a.a=function(e){var a=e.isSuccess,t=void 0!==a&&a,n=e.isError,s=void 0!==n&&n,o=e.isWarning,m=void 0!==o&&o,i=e.content,d=Object(r.d)(),u=function(){d(Object(c.b)())};return l.a.createElement("div",{class:"Alert font-weight-bold text-left"},s&&l.a.createElement("div",{class:"alert alert-danger alert-dismissible fade show pb-4",role:"alert"},i,l.a.createElement("button",{class:"close",type:"button","aria-label":"Close",onClick:u},"\xd7")),t&&l.a.createElement("div",{class:"alert alert-success alert-dismissible fade show pb-4",role:"alert"},i,l.a.createElement("button",{class:"close",type:"button","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true",onClick:u},"\xd7"))),m&&l.a.createElement("div",{class:"alert alert-orange alert-dismissible fade show pb-4",role:"alert"},i,l.a.createElement("button",{class:"close",type:"button","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true",onClick:u},"\xd7"))))}},67:function(e,a,t){},68:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){var a=e.error;return a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"alert alert-danger",role:"alert"},a)):null}},71:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(62),c=t(12),s=t(70),o=(t(68),t(63)),m=t(64),i=t(66),d=(t(71),t(18));a.default=function(e){var a=Object(c.d)(),t=Object(c.e)((function(e){return e.common.error})),n=Object(c.e)((function(e){return e.common.fetching})),u=Object(s.a)(),v=u.register,E=u.errors,f=u.handleSubmit;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"layoutSidenav"},l.a.createElement(o.a,null),l.a.createElement("div",{id:"layoutSidenav_content"},l.a.createElement("main",null,l.a.createElement("div",{className:"page-header page-header-light bg-white shadow"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"page-header-content py-4"},l.a.createElement("ol",{className:"breadcrumb mt-4 mb-0 font-weight-bold h5"},l.a.createElement("li",{className:"breadcrumb-item color-cust-navy"},l.a.createElement(r.a,{to:"/customers"},l.a.createElement("span",{className:"color-cust-navy"},"Customers"))),l.a.createElement("li",{className:"breadcrumb-item active"},"Create"))))),l.a.createElement("div",{className:"container-fluid mt-4"},l.a.createElement("div",{className:"card mb-4"},l.a.createElement("div",{className:"card-header py-2 d-flex justify-content-between bg-cust-navy"},l.a.createElement("span",{className:"h4 color-cust-warm"},"Create Customer"),l.a.createElement(r.a,{to:"/customers"},l.a.createElement("button",{type:"button",className:"btn bg-cust-warm pull-right font-weight-bold"},"\xa0Back\xa0"))),l.a.createElement("div",{className:"card-body"},t&&l.a.createElement(i.a,{isError:!0,content:t}),l.a.createElement("form",{autoComplete:"false",onSubmit:f((function(e){a(Object(d.d)(e))}))},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-group font-weight-bolder"},l.a.createElement("label",{className:"mb-2",htmlFor:"fulname"},"Customer Name"),l.a.createElement("span",{className:" font-weight-bold text-danger small"},E.customerName&&"* "),l.a.createElement("input",{className:"form-control py-4",name:"customerName",id:"fullname",type:"text",placeholder:"Enter Customer name",ref:v({required:!0})})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group font-weight-bolder"},l.a.createElement("label",{className:"mb-2",htmlFor:"inputPassword"},"Email"),l.a.createElement("span",{className:"font-weight-bold text-danger small"},E.fullname&&" *"),l.a.createElement("input",{className:"form-control py-4",name:"email",id:"email",type:"email",placeholder:"Enter customer email",ref:v({required:!0})}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group font-weight-bolder"},l.a.createElement("label",{className:"mb-2",htmlFor:"phone"},"Phone Number"),l.a.createElement("span",{className:"font-weight-bold text-danger small"},E.phoneNumber&&" *"),l.a.createElement("input",{className:"form-control py-4",name:"phoneNumber",id:"phone",type:"text",placeholder:"Enter phone number",ref:v({required:!0})})))),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group font-weight-bolder"},l.a.createElement("label",{className:"mb-2",htmlFor:"rate"},"Rate"),l.a.createElement("span",{className:"font-weight-bold text-danger small"},E.rate&&" *"),l.a.createElement("input",{className:"form-control py-4",name:"rate",id:"rate",min:1,type:"number",placeholder:"Enter rate",ref:v({required:!0})}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group font-weight-bolder"},l.a.createElement("label",{className:"mb-2",htmlFor:"card"},"Card No."),l.a.createElement("span",{className:"font-weight-bold text-danger small"},E.card&&" *"),l.a.createElement("input",{className:"form-control py-4",name:"customerCardNo",id:"card",type:"number",placeholder:"Enter card number",ref:v({required:!1})})))),l.a.createElement("div",{className:"form-group font-weight-bolder"},l.a.createElement("label",{className:"mb-2",htmlFor:"address"},"Address"),l.a.createElement("span",{className:"font-weight-bold text-danger small"},E.address&&" *"),l.a.createElement("textarea",{className:"form-control py-4",name:"address",id:"address",placeholder:"Enter address",ref:v({required:!0})})),l.a.createElement("div",{className:"mt-2 mb-0 float-right"},l.a.createElement("button",{type:"submit",className:"btn bg-cust-navy text-light",disabled:n},n?"creating":"Create Customer"))))))),l.a.createElement(m.a,null))))}}}]);
//# sourceMappingURL=5.2da821dc.chunk.js.map