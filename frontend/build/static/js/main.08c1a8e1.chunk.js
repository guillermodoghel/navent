(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,a,t){e.exports=t(187)},165:function(e,a,t){},167:function(e,a,t){},177:function(e,a,t){},187:function(e,a,t){"use strict";t.r(a);t(111),t(127),t(128),t(93),t(103),t(152);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,a){a=a||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,a.bubbles,a.cancelable,a.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var l=t(1),s=t.n(l),m=t(20),c=t.n(m),r=(t(165),t(22)),n=t(23),i=t(25),o=t(24),d=t(26),u=t(213),E=t(214),v=t(210),g=(t(167),t(169),t(171),t(173),t(175),t(177),t(212)),p=t(3),N=t(11),b={items:[{name:"Guardar Pedido",url:"/dashboard",icon:"icon-note",badge:{variant:"info",text:"NEW"}}]},h=t(109);var f=t.n(h)()({loader:function(){return Promise.all([t.e(3),t.e(1)]).then(t.bind(null,211))},loading:function(){return s.a.createElement("div",null,"Loading...")}}),x=[{path:"/",exact:!0,name:"Home",component:P},{path:"/dashboard",name:"Guardar Pedido",component:f}],j=t(55),w=t(43),O=t(2),k=t.n(O),y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).toggle=t.toggle.bind(Object(w.a)(Object(w.a)(t))),t.state={activeTab:"1"},t}return Object(d.a)(a,e),Object(n.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,a=this.props;a.children,Object(j.a)(a,["children"]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.r,{tabs:!0},s.a.createElement(p.s,null,s.a.createElement(p.t,{className:k()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},s.a.createElement("i",{className:"icon-list"}))),s.a.createElement(p.s,null,s.a.createElement(p.t,{className:k()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},s.a.createElement("i",{className:"icon-speech"}))),s.a.createElement(p.s,null,s.a.createElement(p.t,{className:k()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},s.a.createElement("i",{className:"icon-settings"})))),s.a.createElement(p.w,{activeTab:this.state.activeTab},s.a.createElement(p.x,{tabId:"1"},s.a.createElement(p.p,{className:"list-group-accent"},s.a.createElement(p.q,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Today"),s.a.createElement(p.q,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider"},s.a.createElement("div",{className:"avatar float-right"},s.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",null,"Meeting with ",s.a.createElement("strong",null,"Lucas")," "),s.a.createElement("small",{className:"text-muted mr-3"},s.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),s.a.createElement("small",{className:"text-muted"},s.a.createElement("i",{className:"icon-location-pin"})," Palo Alto, CA")),s.a.createElement(p.q,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-info list-group-item-divider"},s.a.createElement("div",{className:"avatar float-right"},s.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",null,"Skype with ",s.a.createElement("strong",null,"Megan")),s.a.createElement("small",{className:"text-muted mr-3"},s.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 5pm"),s.a.createElement("small",{className:"text-muted"},s.a.createElement("i",{className:"icon-social-skype"})," On-line")),s.a.createElement(p.q,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Tomorrow"),s.a.createElement(p.q,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-danger list-group-item-divider"},s.a.createElement("div",null,"New UI Project - ",s.a.createElement("strong",null,"deadline")),s.a.createElement("small",{className:"text-muted mr-3"},s.a.createElement("i",{className:"icon-calendar"}),"\xa0 10 - 11pm"),s.a.createElement("small",{className:"text-muted"},s.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),s.a.createElement("div",{className:"avatars-stack mt-2"},s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))),s.a.createElement(p.q,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-success list-group-item-divider"},s.a.createElement("div",null,s.a.createElement("strong",null,"#10 Startups.Garden")," Meetup"),s.a.createElement("small",{className:"text-muted mr-3"},s.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),s.a.createElement("small",{className:"text-muted"},s.a.createElement("i",{className:"icon-location-pin"}),"\xa0 Palo Alto, CA")),s.a.createElement(p.q,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-primary list-group-item-divider"},s.a.createElement("div",null,s.a.createElement("strong",null,"Team meeting")),s.a.createElement("small",{className:"text-muted mr-3"},s.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 6pm"),s.a.createElement("small",{className:"text-muted"},s.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),s.a.createElement("div",{className:"avatars-stack mt-2"},s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),s.a.createElement("div",{className:"avatar avatar-xs"},s.a.createElement("img",{src:"assets/img/avatars/8.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))))),s.a.createElement(p.x,{tabId:"2",className:"p-3"},s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"avatar-status badge-success"}))),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),s.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),s.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),s.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),s.a.createElement("hr",null),s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"avatar-status badge-success"}))),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),s.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),s.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),s.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),s.a.createElement("hr",null),s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"avatar-status badge-success"}))),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),s.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),s.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),s.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),s.a.createElement("hr",null),s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"avatar-status badge-success"}))),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),s.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),s.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),s.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),s.a.createElement("hr",null),s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},s.a.createElement("div",{className:"avatar"},s.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),s.a.createElement("span",{className:"avatar-status badge-success"}))),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),s.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),s.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),s.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),s.a.createElement(p.x,{tabId:"3",className:"p-3"},s.a.createElement("h6",null,"Settings"),s.a.createElement("div",{className:"aside-options"},s.a.createElement("div",{className:"clearfix mt-4"},s.a.createElement("small",null,s.a.createElement("b",null,"Option 1")),s.a.createElement(N.g,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"})),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),s.a.createElement("div",{className:"aside-options"},s.a.createElement("div",{className:"clearfix mt-3"},s.a.createElement("small",null,s.a.createElement("b",null,"Option 2")),s.a.createElement(N.g,{className:"float-right",variant:"pill",label:!0,color:"success",size:"sm"})),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),s.a.createElement("div",{className:"aside-options"},s.a.createElement("div",{className:"clearfix mt-3"},s.a.createElement("small",null,s.a.createElement("b",null,"Option 3")),s.a.createElement(N.g,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm",disabled:!0}),s.a.createElement("div",null,s.a.createElement("small",{className:"text-muted"},"Option disabled.")))),s.a.createElement("div",{className:"aside-options"},s.a.createElement("div",{className:"clearfix mt-3"},s.a.createElement("small",null,s.a.createElement("b",null,"Option 4")),s.a.createElement(N.g,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"}))),s.a.createElement("hr",null),s.a.createElement("h6",null,"System Utilization"),s.a.createElement("div",{className:"text-uppercase mb-1 mt-4"},s.a.createElement("small",null,s.a.createElement("b",null,"CPU Usage"))),s.a.createElement(p.u,{className:"progress-xs",color:"info",value:"25"}),s.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores."),s.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},s.a.createElement("small",null,s.a.createElement("b",null,"Memory Usage"))),s.a.createElement(p.u,{className:"progress-xs",color:"warning",value:"70"}),s.a.createElement("small",{className:"text-muted"},"11444GB/16384MB"),s.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},s.a.createElement("small",null,s.a.createElement("b",null,"SSD 1 Usage"))),s.a.createElement(p.u,{className:"progress-xs",color:"danger",value:"95"}),s.a.createElement("small",{className:"text-muted"},"243GB/256GB"),s.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},s.a.createElement("small",null,s.a.createElement("b",null,"SSD 2 Usage"))),s.a.createElement(p.u,{className:"progress-xs",color:"success",value:"10"}),s.a.createElement("small",{className:"text-muted"},"25GB/256GB"))))}}]),a}(l.Component);y.defaultProps={};var L=y,C=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props;e.children,Object(j.a)(e,["children"]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"ml-auto"},"Test done by ",s.a.createElement("a",{href:"https://doghel.com.ar"},"Guillermo Doghel")))}}]),a}(l.Component);C.defaultProps={};var z=C,P=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app-body"},s.a.createElement(N.d,{fixed:!0,display:"lg"},s.a.createElement(N.e,null),s.a.createElement(N.f,Object.assign({navConfig:b},this.props))),s.a.createElement("main",{className:"main"},s.a.createElement(N.b,{appRoutes:x}),s.a.createElement(p.j,{fluid:!0},s.a.createElement(E.a,null,x.map(function(e,a){return e.component?s.a.createElement(v.a,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return s.a.createElement(e.component,a)}}):null}),s.a.createElement(g.a,{from:"/",to:"/dashboard"})))),s.a.createElement(N.a,{fixed:!0,hidden:!0},s.a.createElement(L,null))),s.a.createElement(N.c,null,s.a.createElement(z,null)))}}]),a}(l.Component),T=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(E.a,null,s.a.createElement(v.a,{path:"/",name:"Home",component:P})))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[110,4,2]]]);
//# sourceMappingURL=main.08c1a8e1.chunk.js.map