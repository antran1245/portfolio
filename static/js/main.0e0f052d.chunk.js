(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,a,t){},39:function(e,a,t){e.exports=t(71)},47:function(e,a,t){},54:function(e,a,t){var n={"./aboutme.jpg":55,"./indeed_feature.png":56,"./loadingScreen.png":57,"./tools.jpg":58,"./white_home.jpg":59,"./yellow_home.jpg":60};function l(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=54},55:function(e,a,t){e.exports=t.p+"static/media/aboutme.83b781c0.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/indeed_feature.d8a14bfe.png"},57:function(e,a,t){e.exports=t.p+"static/media/loadingScreen.28f56272.png"},58:function(e,a,t){e.exports=t.p+"static/media/tools.e79e23bc.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/white_home.b2e745df.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/yellow_home.390a91b9.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/An Tran.e4f2c1c8.pdf"},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=(t(44),t(45),t(46),t(47),t(16)),m=t(17),o=t(18),i=t(19),d=t(6),u=t(33),E=t(12),f=t(79),h=t(36),p=t(34),g=t(74),b=t(75),y=t(76),k=t(80),N=t(81),w=t(78),x=t(77),j=[{title:"Desire Feature to Indeed",body:"A not actual clone of an Indeed page. This clone is to show that I want Indeed to have a feature that will show the information that was shown when applied.",img:"indeed_feature.png",link:"https://antran1245.github.io/indeed_feature/"},{title:"Loading Screen",body:"A rotating mesh object that was created to serve as a loading screen.",img:"loadingScreen.png",link:"https://antran1245.github.io/loadingScreen/"}];var v=function(e){return l.a.createElement(w.a,{show:e.show,onHide:e.onHide,size:"lg"},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement("h1",null,"Projects")),l.a.createElement(w.a.Body,null,l.a.createElement(g.a,{fluid:!0},j.map((function(e){return l.a.createElement(b.a,null,l.a.createElement(k.a,{border:"dark",className:"mt-2"},l.a.createElement(b.a,null,l.a.createElement(y.a,{xs:12,sm:3,className:"align-self-center"},l.a.createElement(x.a,{src:t(54)("./"+e.img),alt:e.img,width:"100%"})),l.a.createElement(y.a,{xs:12,sm:9},l.a.createElement(b.a,null,l.a.createElement(y.a,null,l.a.createElement(k.a.Header,null,e.title))),l.a.createElement(b.a,null,l.a.createElement(y.a,null,l.a.createElement(k.a.Body,null,l.a.createElement(b.a,null,e.body),l.a.createElement(b.a,{className:"mt-2 mt-sm-4 justify-content-end"},l.a.createElement(N.a,{style:{width:"50%"},href:e.link,size:"sm"},"Link")))))))))})))))},C=(t(27),function(e){Object(i.a)(n,e);var a=Object(o.a)(n);function n(e){var t;return Object(s.a)(this,n),(t=a.call(this,e)).state={card1:!1,card2:!1,card3:!1,modal:!1},t.toggleCard=t.toggleCard.bind(Object(E.a)(t)),t.showModal=t.showModal.bind(Object(E.a)(t)),t}return Object(m.a)(n,[{key:"toggleCard",value:function(e,a){this.setState(Object(u.a)({},e,a))}},{key:"showModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"content"},l.a.createElement(g.a,{className:"home_layout",fluid:!0},l.a.createElement(b.a,null,l.a.createElement(y.a,{xs:{span:12,order:12},sm:{span:6,order:12}},l.a.createElement(b.a,{className:"row justify-content-center ml-sm-5 ml-xl-0 mt-5 mt-sm-0 "},l.a.createElement(y.a,{xs:12,sm:8,className:"mt-sm-2"},l.a.createElement(k.a,{className:"card_layout"},l.a.createElement(N.a,{variant:"dark",style:{borderRadius:"10px"},block:!0,className:"d-block d-sm-none",onClick:function(){return e.toggleCard("card1",!e.state.card1)}},l.a.createElement("h4",null,"About Me")),l.a.createElement(f.a,{isOpen:this.state.card1,className:"d-sm-block"},l.a.createElement(k.a.Body,{className:"text-left"},l.a.createElement("h1",{className:"d-none d-sm-block"},"About Me"),l.a.createElement("p",null,"I am a recent graduate student of UC Santa Cruz with a bachelor's in Computer Science and had acquired certifications for Front End Web Development. My focus lies in creating responsive websites that are user friendly. My future goals include gaining working experience in programming projects, advancing my skills in graphic design, and excelling in collaborating on large scale projects."))))),l.a.createElement(y.a,{xs:12,sm:8,className:"mt-sm-3"},l.a.createElement(k.a,{className:"card_layout"},l.a.createElement(N.a,{variant:"dark",style:{borderRadius:"10px"},block:!0,className:"d-block d-sm-none",onClick:function(){return e.toggleCard("card2",!e.state.card2)}},l.a.createElement("h4",null,"Skills")),l.a.createElement(f.a,{isOpen:this.state.card2,className:"d-sm-block"},l.a.createElement(k.a.Body,{className:"text-left"},l.a.createElement("h1",{className:"d-none d-sm-block"},"Skills"),l.a.createElement("h6",null,"(Languages, Libraries, Framework)"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"React.js"),l.a.createElement("li",null,"Bootstrap 4"),l.a.createElement("li",null,"JQuery")))))),l.a.createElement(y.a,{xs:12,sm:8,className:"mt-sm-3"},l.a.createElement(k.a,{className:"card_layout"},l.a.createElement(N.a,{variant:"dark",style:{borderRadius:"10px"},block:!0,className:"d-block d-sm-none",onClick:function(){return e.toggleCard("card3",!e.state.card3)}},l.a.createElement("h4",null,"Personality")),l.a.createElement(f.a,{isOpen:this.state.card3,className:"d-sm-block"},l.a.createElement(k.a.Body,{className:"text-left"},l.a.createElement("h1",{className:"d-none d-sm-block text-truncate"},"Personality"),l.a.createElement("ul",null,l.a.createElement("li",null,"Positive"),l.a.createElement("li",null,"Multitasker"),l.a.createElement("li",null,"Committed"),l.a.createElement("li",null,"Quick learner"),l.a.createElement("li",null,"Enjoy coding"),l.a.createElement("li",null,"Welcome to feedback")))))))),l.a.createElement(y.a,{xs:{span:12,order:1},sm:{span:6,order:1},className:"align-self-sm-center"},l.a.createElement(b.a,{className:"justify-content-sm-center mt-5 mt-sm-0"},l.a.createElement(y.a,{xs:12,sm:6,className:"ml-sm-5"},l.a.createElement("h1",{style:{fontSize:"80px",fontWeight:"bold"}},"Hello"))),l.a.createElement(b.a,{className:"justify-content-sm-center"},l.a.createElement(y.a,{xs:12,sm:6,className:"ml-sm-5"},l.a.createElement("h3",{style:{fontSize:"40px"}},"I'm An Tran."))),l.a.createElement(b.a,{className:"row justify-content-sm-center"},l.a.createElement(y.a,{xs:12,sm:6,className:"ml-sm-5"},l.a.createElement("h3",{style:{fontSize:"40px"}},"Front End Web Designer"))),l.a.createElement(b.a,{className:"mt-sm-5 mt-3 justify-content-sm-center"},l.a.createElement(y.a,{xs:12,sm:4,className:"ml-sm-5"},l.a.createElement("p",null,"Located in California."))),l.a.createElement(b.a,{className:"justify-content-sm-center"},l.a.createElement(y.a,{xs:12,sm:3,xl:3,className:"ml-sm-5"},l.a.createElement(N.a,{onClick:this.showModal},"Sample Projects"))),l.a.createElement(b.a,{className:"justify-content-sm-center"},l.a.createElement(y.a,{xs:12,sm:3,xl:2,className:"ml-sm-5 mt-3"},l.a.createElement("a",{href:"https://www.linkedin.com/in/an-tran-90495b1b7/"},l.a.createElement("i",{className:"fa fa-linkedin"})," An Tran"))),l.a.createElement(b.a,{className:"justify-content-sm-center"},l.a.createElement(y.a,{xs:12,sm:3,xl:2,className:"ml-sm-5 mt-2"},l.a.createElement("a",{href:t(68),download:!0},l.a.createElement(p.a,{icon:h.a,size:"lg"})," Resume"))))),l.a.createElement(v,{show:this.state.modal,onHide:this.showModal})))))}}]),n}(n.Component)),O=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/portfolio",component:function(){return l.a.createElement(C,null)}}),l.a.createElement(d.a,{to:"/portfolio"})))}}]),t}(n.Component),S=t(23);var _=function(){return l.a.createElement(S.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.0e0f052d.chunk.js.map