(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),c=a.n(r),o=a(13),l=a.n(o),i=a(7),s=a(14),m={books:[]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOKS_LOADED":return{books:t.payload};default:return e}},E=Object(s.b)(u),b=a(2),d=(a(34),function(e){var t=e.numItems,a=e.total;return c.a.createElement("header",{className:"shop-header row"},c.a.createElement(i.b,{className:"logo text-dark",to:"/"},"ReStore"),c.a.createElement(i.b,{className:"shopping-cart",to:"/cart"},c.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," item ($",a,")"))}),f=a(9),h=a(10),p=a(17),v=a(16),k=c.a.createContext(),g=k.Provider,N=k.Consumer,O=function(){return function(e){return function(t){return c.a.createElement(N,null,(function(a){return c.a.createElement(e,Object.assign({},t,{bookstoreService:a}))}))}}},y=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},_=(a(36),function(e){var t=e.book,a=t.title,n=t.author,r=t.price,o=t.cover;return c.a.createElement("div",{className:"book-list-item"},c.a.createElement("div",{className:"book-cover"},c.a.createElement("img",{src:o,alt:"book cover"})),c.a.createElement("div",{className:"book-details"},c.a.createElement(i.b,{to:"/",className:"book-litle"},a),c.a.createElement("div",{className:"book-author"},n),c.a.createElement("div",{className:"book-price"},"$",r),c.a.createElement("button",{className:"add-to-cart btn btn-info"},"Add to cart")))}),j=(a(37),function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.bookstoreService.getBooks();this.props.booksLoaded(e)}},{key:"render",value:function(){var e=this.props.books;return c.a.createElement("ul",{className:"book-list"},e.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(_,{book:e}))})))}}]),a}(r.Component)),S=y(O(),Object(n.b)((function(e){return{books:e.books}}),{booksLoaded:function(e){return{type:"BOOKS_LOADED",payload:e}}}))(j),w=(a(38),function(){return c.a.createElement("div",{className:"shopping-cart-table"},c.a.createElement("h2",null,"Your Order"),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," #"),c.a.createElement("th",null,"Item"),c.a.createElement("th",null,"Count"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"1"),c.a.createElement("td",null,"Site Reliability Engineering"),c.a.createElement("td",null,"2"),c.a.createElement("td",null,"$40"),c.a.createElement("td",null,c.a.createElement("button",{onClick:function(){},className:"btn btn-outline-danger btn-sm float-right"},c.a.createElement("i",{className:"fa fa-trash-o"})),c.a.createElement("button",{onClick:function(){},className:"btn btn-outline-success btn-sm float-right"},c.a.createElement("i",{className:"fa fa-plus-circle"})),c.a.createElement("button",{onClick:function(){},className:"btn btn-outline-warning btn-sm float-right"},c.a.createElement("i",{className:"fa fa-minus-circle"})))))),c.a.createElement("div",{className:"total"},"Total: $201"))}),C=function(){return c.a.createElement(r.Fragment,null,c.a.createElement(S,null),c.a.createElement(w,null))},A=function(){return c.a.createElement("h2",null,"Cart")},R=function(){return c.a.createElement("main",{role:"main",className:"container"},c.a.createElement(d,{numItems:2,total:243}),c.a.createElement(b.d,null,c.a.createElement(b.b,{exact:!0,path:"/home",component:C}),c.a.createElement(b.b,{path:"/cart",component:A}),c.a.createElement(b.a,{from:"/",to:"/home"})))},x=(a(39),function(){return c.a.createElement("div",{className:"error-indicator"},c.a.createElement("h5",{className:"error-indicator__title"},"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."),c.a.createElement("i",{className:"error-indicator__icon fa fa-cloud-download"}),c.a.createElement("h6",{className:"error-indicator__subtitle"},"\u0421\u043a\u043e\u0440\u043e \u043c\u044b \u0432\u0441\u0435 \u043f\u043e\u0447\u0438\u043d\u0438\u043c :)"),c.a.createElement("span",{className:"error-indicator__text"},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u0441 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0436\u0435."))}),B=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(h.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?c.a.createElement(x,null):this.props.children}}]),a}(c.a.Component),D=new(function(){function e(){Object(f.a)(this,e)}return Object(h.a)(e,[{key:"getBooks",value:function(){return[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:31.49,cover:"https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:30.21,cover:"https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg"}]}}]),e}());console.log("Hello! Welcome to ReStore"),l.a.render(c.a.createElement(n.a,{store:E},c.a.createElement(B,null,c.a.createElement(g,{value:D},c.a.createElement(i.a,{basename:"/re-store/#/"},c.a.createElement(R,null))))),document.querySelector(".root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.df1175e0.chunk.js.map