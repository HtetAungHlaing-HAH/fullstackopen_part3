(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(18),c=t.n(r),a=t(3),o=t(1),i=t(19),u=t(0),d=function(e){return Object(u.jsxs)("div",{children:[e.person.name," ",e.person.number,Object(u.jsx)("button",{onClick:function(){return e.deletePerson(e.person.id)},children:"delete"})]})},l=function(e){var n=Object(i.a)(e.persons);return Object(u.jsx)("div",{children:n.map((function(n){return Object(u.jsx)(d,{person:n,deletePerson:e.deleteHandler},n.id)}))})},s=function(e){return Object(u.jsxs)("div",{children:[e.text,Object(u.jsx)("input",{value:e.value,onChange:e.filterHandler})]})},j=function(e){return Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:e.name,onChange:e.nameHandler})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{value:e.number,onChange:e.numberHandler})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",onClick:e.addHandler,children:"add"})})]})},b=t(5),f=t.n(b),m="/api/persons",h={getAll:function(){return f.a.get(m).then((function(e){return e.data}))},add:function(e){return f.a.post(m,e).then((function(e){return e.data}))},deletePer:function(e){return f.a.delete("".concat(m,"/").concat(e))},replace:function(e,n){return f.a.put("".concat(m,"/").concat(n),e).then((function(e){return e.data}))}},O=function(e){var n=e.message,t=e.error;return null===n?null:!1===t?Object(u.jsx)("div",{className:"notification",children:n}):Object(u.jsx)("div",{className:"error",children:n})},p=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),i=Object(a.a)(c,2),d=i[0],b=i[1],f=Object(o.useState)(""),m=Object(a.a)(f,2),p=m[0],v=m[1],x=Object(o.useState)(""),g=Object(a.a)(x,2),w=g[0],H=g[1],k=Object(o.useState)(null),P=Object(a.a)(k,2),S=P[0],C=P[1],y=Object(o.useState)(!1),N=Object(a.a)(y,2),A=N[0],E=N[1];Object(o.useEffect)((function(){console.log("effect"),h.getAll().then((function(e){r(e)}))}),[]),console.log("render",t.length,"persons");var T=0===w.length?t:t.filter((function(e){return e.name.match(new RegExp(w,"i"))}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(O,{message:S,error:A}),Object(u.jsx)(s,{text:"filter shown with",value:w,filterHandler:function(e){H(e.target.value)}}),Object(u.jsx)("h3",{children:"add a new"}),Object(u.jsx)(j,{name:d,nameHandler:function(e){b(e.target.value)},number:p,numberHandler:function(e){v(e.target.value)},addHandler:function(e){e.preventDefault();var n={name:d,number:p};if(""===n.name||""===n.number)window.alert("Please enter name and number to add to phonebook!");else{var c=t.find((function(e){return e.name===n.name}));c?window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&h.replace(n,c.id).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),b(""),v(""),C("Updated ".concat(n.name,"'s Number")),setTimeout((function(){C(null)}),5e3)})).catch((function(e){E(!0),C("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){E(!1),C(null)}),5e3),r(t.filter((function(e){return e.id!==c.id}))),b(""),v("")})):h.add(n).then((function(e){r(t.concat(e)),b(""),v(""),C("Added ".concat(n.name)),setTimeout((function(){C(null)}),5e3)}))}}}),Object(u.jsx)("h3",{children:"Numbers"}),Object(u.jsx)(l,{persons:T,deleteHandler:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&h.deletePer(e).then(r(t.filter((function(n){return n.id!==e}))))}})]})};t(43);c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.46ff0c3d.chunk.js.map