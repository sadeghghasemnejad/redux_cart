(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(t,e,c){t.exports={item:"ProductItem_item__23alD",price:"ProductItem_price__3Hf0I",actions:"ProductItem_actions__3viPk"}},23:function(t,e,c){t.exports={button:"CartButton_button__3-749",badge:"CartButton_badge__3UCcT"}},27:function(t,e,c){t.exports={card:"Card_card__3UYqu"}},28:function(t,e,c){t.exports={cart:"Cart_cart__gCliS"}},31:function(t,e,c){t.exports={header:"MainHeader_header__1LzMp"}},32:function(t,e,c){t.exports={products:"Products_products__r80rd"}},39:function(t,e,c){},46:function(t,e,c){"use strict";c.r(e);var n=c(26),a=c.n(n),i=(c(39),c(27)),r=c.n(i),s=c(0),o=function(t){return Object(s.jsx)("section",{className:"".concat(r.a.card," ").concat(t.className?t.className:""),children:t.children})},d=c(28),u=c.n(d),j=c(7),l=c.n(j),m=c(6),b=Object(m.b)({name:"cart",initialState:{amount:0,data:[]},reducers:{increment:function(t,e){if(0!==t.data.length&&t.data.some((function(t){return t.id===e.payload}))){var c=t.data.find((function(t){return t.id===e.payload}));console.log(e.payload),t.amount++,c.amount++}},decrement:function(t,e){if(0!==t.data.length&&t.data.some((function(t){return t.id===e.payload}))){var c=t.data.find((function(t){return t.id===e.payload}));0!==c.amount?(t.amount--,c.amount--):t.data.splice(t.data.indexOf(c),1)}},addtoCart:function(t,e){t.data.some((function(t){return t.id===e.payload.id}))||t.data.push(e.payload)}}}),h=b.actions,p=b.reducer,x=c(4),O=function(t){var e=Object(x.b)(),c=t.item,n=c.title,a=c.quantity,i=c.total,r=c.price,o=c.id;return Object(s.jsxs)("li",{className:l.a.item,children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:n}),Object(s.jsxs)("div",{className:l.a.price,children:["$",i.toFixed(2)," ",Object(s.jsxs)("span",{className:l.a.itemprice,children:["($",r.toFixed(2),"/item)"]})]})]}),Object(s.jsxs)("div",{className:l.a.details,children:[Object(s.jsxs)("div",{className:l.a.quantity,children:["x ",Object(s.jsx)("span",{children:a})]}),Object(s.jsxs)("div",{className:l.a.actions,children:[Object(s.jsx)("button",{onClick:function(){e(h.decrement(o))},children:"-"}),Object(s.jsx)("button",{onClick:function(){e(h.increment(o))},children:"+"})]})]})]})},f=function(t){var e=Object(x.c)((function(t){return t.cart.data}));return Object(s.jsxs)(o,{className:u.a.cart,children:[Object(s.jsx)("h2",{children:"Your Shopping Cart"}),Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)(O,{item:{id:t.id,title:t.name,quantity:t.amount,total:t.amount*t.price,price:t.price}},t.id)}))})]})},_=c(1),C=c(23),y=c.n(C),v=c(11),N=Object(m.b)({name:"showCart",initialState:{isShowCart:!1},reducers:{toogleShowCart:function(t){t.isShowCart=!t.isShowCart}}}),g=N.actions,k=N.reducer,w=function(t){var e=Object(v.b)(),c=Object(v.c)((function(t){return t.cart.amount}));return Object(s.jsxs)("button",{className:y.a.button,onClick:function(){e(g.toogleShowCart())},children:[Object(s.jsx)("span",{children:"My Cart"}),Object(s.jsx)("span",{className:y.a.badge,children:c})]})},I=c(31),S=c.n(I),q=function(t){return Object(s.jsxs)("header",{className:S.a.header,children:[Object(s.jsx)("h1",{children:"ReduxCart"}),Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:Object(s.jsx)("li",{children:Object(s.jsx)(w,{})})})})]})},P=function(t){return Object(s.jsxs)(_.Fragment,{children:[Object(s.jsx)(q,{}),Object(s.jsx)("main",{children:t.children})]})},B=c(18),F=c.n(B),M=function(t){var e=Object(x.b)(),c=t.title,n=t.price,a=t.description,i=t.id;return Object(s.jsx)("li",{className:F.a.item,children:Object(s.jsxs)(o,{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:c}),Object(s.jsxs)("div",{className:F.a.price,children:["$",n.toFixed(2)]})]}),Object(s.jsx)("p",{children:a}),Object(s.jsx)("div",{className:F.a.actions,children:Object(s.jsx)("button",{onClick:function(){e(h.addtoCart({id:i,name:c,price:n,description:a,amount:0})),e(h.increment(i))},children:"Add to Cart"})})]})})},U=c(32),A=c.n(U),D=function(t){var e=Object(x.c)((function(t){return t.amount.data}));return Object(s.jsxs)("section",{className:A.a.products,children:[Object(s.jsx)("h2",{children:"Buy your favorite products"}),Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)(M,{id:t.id,title:t.name,price:t.price,description:t.description},t.id)}))})]})};var Y=function(){var t=Object(x.c)((function(t){return t.showCart.isShowCart}));return Object(s.jsxs)(P,{children:[t&&Object(s.jsx)(f,{}),Object(s.jsx)(D,{})]})},$=Object(m.b)({name:"amount",initialState:{data:[{id:0,name:"my firts book",price:29,description:"this is my first book"},{id:1,name:"my second book",price:39,description:"this is my second book"}]},reducers:{}}),z=($.actions,$.reducer),H=Object(m.a)({reducer:{amount:z,showCart:k,cart:p}});a.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(x.a,{store:H,children:Object(s.jsx)(Y,{})}))},7:function(t,e,c){t.exports={item:"CartItem_item__3-h3A",details:"CartItem_details__1uXDA",quantity:"CartItem_quantity__mMZDc",price:"CartItem_price__2zb4X",itemprice:"CartItem_itemprice__2Uldk",actions:"CartItem_actions__2PUNY"}}},[[46,1,2]]]);
//# sourceMappingURL=main.1218f3ba.chunk.js.map