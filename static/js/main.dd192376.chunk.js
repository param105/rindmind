(this.webpackJsonprindmind=this.webpackJsonprindmind||[]).push([[0],{125:function(e,t,a){e.exports=a(399)},129:function(e,t,a){},130:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),l=a.n(c),i=(a(129),a(65)),s=a.n(i),o=a(114),u=a(115),m=a(116),d=a(124),p=a(122);a(71);var h=function(){return r.a.createElement("nav",{class:"myNavBar"},r.a.createElement("div",null,r.a.createElement("header",{class:"App-header"}," ",r.a.createElement("span",null,"R"),"ind",r.a.createElement("span",null,"M"),"ind "),r.a.createElement("div",{class:"tagline"}," The Spiritual Technocrat ")),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://paramsir.github.io/"}," Recent Posts  ")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/parmeshwar-c-5aa39523/"}," About me")),r.a.createElement("li",null,r.a.createElement("a",{href:""}," Home ")))))},E=a(123),f=(a(130),a(117)),v=a.n(f);function g(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{class:e.class},r.a.createElement("div",{onClick:function(){return l(!0)}},r.a.createElement("h2",null,e.title," "),r.a.createElement("img",{src:e.img}),r.a.createElement("p",{class:"para"},e.para)),r.a.createElement("div",null,r.a.createElement(v.a,{isOpen:c,onRequestClose:function(){return l(!1)}},r.a.createElement("div",{style:{float:"right"}},r.a.createElement("button",{class:"dialog-close-btn",onClick:function(){return l(!1)}},"X")),r.a.createElement("div",{class:"dialog"},r.a.createElement("iframe",{class:"dialog",src:e.originUrl})))))}var b=function(e){var t,a=e.newsJsonSting;if(console.log("Data received is : "+a),null!=a)try{t=JSON.parse(a).articles.map((function(e){return r.a.createElement(g,{class:"col col-1",title:e.title,img:e.urlToImage,para:e.description,originUrl:e.url})}))}catch(n){}return r.a.createElement("div",null,r.a.createElement("main",{class:"myBody"},r.a.createElement("img",{src:"https://source.unsplash.com/1600x400/?laptop"}),r.a.createElement("div",{class:"grid-container"},t)))};var w=function(){return r.a.createElement("footer",{className:"myFooter"},"copyright 2020 @ RindMind.com | All rights reserved")},y=(a(142),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={newsData:[],isLoaded:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf",e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=de63571ebc714ae6828e37c65bb712bf");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({newsData:JSON.stringify(a)}),console.log(this.state.newsData);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(b,{newsJsonSting:this.state.newsData}),r.a.createElement(w,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.dd192376.chunk.js.map