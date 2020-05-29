(this["webpackJsonpre-store"]=this["webpackJsonpre-store"]||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(0),o=a.n(r),c=a(15),l=a.n(c),i=a(7),s=a(16),u=a(8),m={books:[],loading:!0,error:null,cartItems:[{id:1,title:"TEST_BOOK_1",count:3,total:1500},{id:2,title:"TEST_BOOK_2",count:2,total:990}],orderTotal:2490},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{books:t.payload,loading:!1,error:null});case"FETCH_BOOKS_REQUEST":return Object(u.a)(Object(u.a)({},e),{},{books:[],loading:!0,error:null});case"FETCH_BOOKS_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{books:[],loading:!1,error:!0});default:return e}},f=Object(s.b)(E),d=a(2),b=(a(35),function(e){var t=e.numItems,a=e.total;return o.a.createElement("header",{className:"shop-header row"},o.a.createElement(i.b,{className:"logo text-dark",to:"/"},"ReStore"),o.a.createElement(i.b,{className:"shopping-cart",to:"/cart"},o.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," item ($",a,")"))}),h=a(10),p=a(11),v=a(18),g=a(17),O=function(e,t){return function(){e({type:"FETCH_BOOKS_REQUEST"}),t.getBooks().then((function(t){return e({type:"FETCH_BOOKS_SUCCESS",payload:t})})).catch((function(t){throw e({type:"FETCH_BOOKS_FAILURE",payload:t}),t}))}},k=o.a.createContext(),_=k.Provider,N=k.Consumer,S=function(){return function(e){return function(t){return o.a.createElement(N,null,(function(a){return o.a.createElement(e,Object.assign({},t,{bookstoreService:a}))}))}}},j=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},y=(a(37),function(e){var t=e.book,a=t.title,n=t.author,r=t.price,c=t.cover;return o.a.createElement("div",{className:"book-list-item"},o.a.createElement("div",{className:"book-cover"},o.a.createElement("img",{src:c,alt:"book cover"})),o.a.createElement("div",{className:"book-details"},o.a.createElement(i.b,{to:"/",className:"book-litle"},a),o.a.createElement("div",{className:"book-author"},n),o.a.createElement("div",{className:"book-price"},"$",r),o.a.createElement("button",{className:"add-to-cart btn btn-info"},"Add to cart")))}),C=(a(38),function(){return o.a.createElement("div",{className:"error-indicator"},o.a.createElement("h5",{className:"error-indicator__title"},"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."),o.a.createElement("i",{className:"error-indicator__icon fa fa-cloud-download"}),o.a.createElement("h6",{className:"error-indicator__subtitle"},"\u0421\u043a\u043e\u0440\u043e \u043c\u044b \u0432\u0441\u0435 \u043f\u043e\u0447\u0438\u043d\u0438\u043c :)"),o.a.createElement("span",{className:"error-indicator__text"},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u0441 \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u0438\u043b\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0436\u0435."))}),T=(a(39),function(){return o.a.createElement("div",{className:"spiner"},o.a.createElement("i",{className:"spiner__elem"}))}),w=(a(40),function(e){var t=e.books;return o.a.createElement("ul",{className:"book-list"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(y,{book:e}))})))}),B=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.loading,n=e.error;return a?o.a.createElement(T,null):n?o.a.createElement(C,null):o.a.createElement(w,{books:t})}}]),a}(r.Component),I=j(S(),Object(n.b)((function(e){return{books:e.books,loading:e.loading,error:e.error}}),(function(e,t){var a=t.bookstoreService;return{fetchBooks:O(e,a)}})))(B),F=(a(41),Object(n.b)((function(e){return{items:e.cartItems,total:e.orderTotal}}),(function(){return{onIncrease:function(e){console.log("Increased ".concat(e))},onDecrease:function(e){console.log("Decreased ".concat(e))},onDelete:function(e){console.log("Deleted ".concat(e))}}}))((function(e){var t=e.items,a=e.total,n=e.onDecrease,r=e.onIncrease,c=e.onDelete;return o.a.createElement("div",{className:"shopping-cart-table"},o.a.createElement("h2",null,"Your Order"),o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," #"),o.a.createElement("th",null,"Item"),o.a.createElement("th",null,"Count"),o.a.createElement("th",null,"Total"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,t.map((function(e,t){return function(e,t){var a=e.id,l=e.title,i=e.count,s=e.total;return o.a.createElement("tr",{key:a},o.a.createElement("th",null,t+1),o.a.createElement("td",null,l),o.a.createElement("td",null,i),o.a.createElement("td",null,"$",s),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return c(a)},className:"btn btn-outline-danger btn-sm float-right"},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{onClick:function(){return r(a)},className:"btn btn-outline-success btn-sm float-right"},o.a.createElement("i",{className:"fa fa-plus-circle"})),o.a.createElement("button",{onClick:function(){return n(a)},className:"btn btn-outline-warning btn-sm float-right"},o.a.createElement("i",{className:"fa fa-minus-circle"}))))}(e,t)})))),o.a.createElement("div",{className:"total"},"Total: $",a))}))),R=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(I,null),o.a.createElement(F,null))},x=function(){return o.a.createElement("h2",null,"Cart")},D=function(){return o.a.createElement("main",{role:"main",className:"container d-flex flex-column"},o.a.createElement(b,{numItems:2,total:243}),o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/home",component:R}),o.a.createElement(d.b,{path:"/cart",component:x}),o.a.createElement(d.a,{from:"/",to:"/home"})))},H=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(p.a)(a,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(C,null):this.props.children}}]),a}(o.a.Component),K=new(function(){function e(){Object(h.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:31.49,cover:"https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:30.21,cover:"https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg"}]}return Object(p.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,a){Math.round(100*Math.random())<86?setTimeout((function(){return t(e.data)}),700):setTimeout((function(){return a(new Error("Service is not avalible"))}),1e3)}))}}]),e}());console.log("Hello! Welcome to ReStore"),l.a.render(o.a.createElement(n.a,{store:f},o.a.createElement(H,null,o.a.createElement(_,{value:K},o.a.createElement(i.a,{basename:"/re-store/#/"},o.a.createElement(D,null))))),document.querySelector(".root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bf5926ee.chunk.js.map