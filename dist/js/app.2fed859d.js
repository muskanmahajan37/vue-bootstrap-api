(function(t){function a(a){for(var e,o,l=a[0],i=a[1],c=a[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);d&&d(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,l=1;l<s.length;l++){var i=s[l];0!==r[i]&&(e=!1)}e&&(n.splice(a--,1),t=o(o.s=s[0]))}return t}var e={},r={app:0},n=[];function o(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,a,s){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(s,e,function(a){return t[a]}.bind(null,e));return s},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=i;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("NavBar"),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("Slider")],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("h1",[t._v("Hello From Salman")]),s("p",[t._v(t._s(t.msg))])]),s("div",{staticClass:"col-md-12"},[s("Talks")],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("GitHubUserComponent")],1),s("div",{staticClass:"col-md-6"},[s("GitHubUserComponent")],1)])])],1)},n=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-primary",on:{click:t.showUsers}},[t._v("Show Github Users")])])]),t.loader?s("div",{staticClass:"row mt-5"},[t._m(0)]):s("div",{staticClass:"row mt-5"},t._l(t.githubUserData,(function(a,e){return s("div",{key:e,staticClass:"col-md-3"},[s("div",{staticClass:"card"},[s("img",{attrs:{src:a.avatar_url,width:"100%",alt:""}}),s("p",[t._v(t._s(a.login))])])])})),0)])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-12 text-center"},[s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],i=(s("d3b7"),{name:"GithubComponent",data:function(){return{githubUserData:[],loader:!1}},methods:{showUsers:function(){var t=this;this.loader=!0,fetch("https://api.github.com/users").then((function(t){return t.json()})).then((function(a){console.log(a),t.loader=!1,t.githubUserData=a})).catch((function(a){t.loader=!1,console.log(a)}))}}}),c=i,d=s("2877"),u=Object(d["a"])(c,o,l,!1,null,null,null),p=u.exports,v=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")])]),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Dropdown ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),s("div",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Disabled")])])]),s("form",{staticClass:"form-inline my-2 my-lg-0"},[s("input",{staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),s("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Search")])])])])}],h={name:"NavBar",data:function(){return{}},methods:{}},f=h,b=Object(d["a"])(f,v,m,!1,null,null,null),C=b.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner",staticStyle:{height:"400px"}},[s("div",{staticClass:"carousel-item active"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"..."}})]),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"..."}})]),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block w-100",attrs:{src:"https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"..."}})])]),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])}],w={name:"Slider",data:function(){return{}},methods:{}},y=w,x=Object(d["a"])(y,g,_,!1,null,null,null),k=x.exports,j=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-info",on:{click:t.showData}},[t._v("Show Talks")])])]),s("div",{staticClass:"row"},t._l(t.talksData,(function(t,a){return s("div",{key:a,staticClass:"col-md-4"},[s("TalkCard",{attrs:{data:t}})],1)})),0)])},S=[],O=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card p-3 m-1"},[s("p",[t._v(t._s(t.data.talktopic))]),s("p",[t._v(t._s(t.data.eventname))]),s("p",[t._v(t._s(t.data.date))])])},E=[],D={name:"TalkCard",props:["data"],data:function(){return{}},methods:{}},T=D,$=Object(d["a"])(T,O,E,!1,null,null,null),U=$.exports,P={name:"talksComponent",components:{TalkCard:U},data:function(){return{talksData:[]}},methods:{showData:function(){var t=this;fetch("https://vrijraj-backend-server.herokuapp.com/api/v1/talks").then((function(t){return t.json()})).then((function(a){console.log(a.data),t.talksData=a.data})).catch((function(t){console.log(t)}))}}},I=P,M=Object(d["a"])(I,j,S,!1,null,null,null),G=M.exports,H={name:"MainComponent",components:{GitHubUserComponent:p,NavBar:C,Slider:k,Talks:G},data:function(){return{msg:"Trump is Modi"}},methods:{}},N=H,B=Object(d["a"])(N,r,n,!1,null,null,null),A=B.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(A)}}).$mount("#app")}});
//# sourceMappingURL=app.2fed859d.js.map