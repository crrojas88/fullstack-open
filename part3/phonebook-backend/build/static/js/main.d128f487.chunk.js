(this["webpackJsonpthe-phonebook"]=this["webpackJsonpthe-phonebook"]||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(15),r=t.n(a),u=(t(20),t(6)),i=t(3),o=t(0),l=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"success",children:n})},s=function(e){var n=e.placeholder,t=e.searchField,c=e.handleChange;return Object(o.jsxs)("div",{children:["Search: ",Object(o.jsx)("input",{placeholder:n,name:"searchField",value:t,onChange:c})]})},d=function(e){var n=e.handleSubmit,t=e.newName,c=e.newNumber,a=e.handleChange;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["Name: ",Object(o.jsx)("input",{name:"newName",value:t,onChange:a})]}),Object(o.jsxs)("div",{children:["Number: ",Object(o.jsx)("input",{name:"newNumber",value:c,onChange:a})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"Add"})})]})})},j=function(e){var n=e.person,t=e.handleDelete;return Object(o.jsxs)("div",{children:[n.name," - ",n.number,Object(o.jsx)("button",{onClick:t,children:"Delete"})]})},h=function(e){var n=e.persons,t=e.handleDelete;return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(j,{person:e,handleDelete:function(){return t(e.id)}})},e.id)}))})})},b=t(4),f=t.n(b),m="/api/persons",O={create:function(e){return f.a.post(m,e).then((function(e){return e.data}))},getAll:function(){return f.a.get(m).then((function(e){return e.data}))},update:function(e,n){return f.a.put("".concat(m,"/").concat(n),e).then((function(e){return e.data}))},remove:function(e){return f.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))}},v=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),j=Object(i.a)(r,2),b=j[0],f=j[1],m=Object(c.useState)(""),v=Object(i.a)(m,2),p=v[0],x=v[1],w=Object(c.useState)(""),g=Object(i.a)(w,2),N=g[0],C=g[1],S=Object(c.useState)(null),D=Object(i.a)(S,2),k=D[0],y=D[1];Object(c.useEffect)((function(){O.getAll().then((function(e){a(e)}))}),[]);var A=function(e){var n=e.target.value;"newName"===e.target.name?f(n):"newNumber"===e.target.name?x(n):C(n)},F=t.filter((function(e){return e.name.toLowerCase().includes(N.toLocaleLowerCase())}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Phonebook"}),Object(o.jsx)(l,{message:k}),Object(o.jsx)(s,{placeholder:"Search Contacts",searchField:N,handleChange:A}),Object(o.jsx)("h2",{children:"Add New Contact"}),Object(o.jsx)(d,{handleSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name===b}))){var n=t.find((function(e){return e.name===b}));if(window.confirm("".concat(b," already exists. Replace old number with a new one?"))){var c=n.id,r=Object(u.a)(Object(u.a)({},n),{},{number:p});O.update(r,c).then((function(e){a(t.map((function(n){return n.id!==c?n:e})))}))}else a(t)}else!function(e){e.preventDefault();var n={name:b,number:p};O.create(n).then((function(e){a(t.concat(e)),y("".concat(b," has been added!")),setTimeout((function(){y(null)}),3e3)})),f(""),x("")}(e);f(""),x("")},newName:b,newNumber:p,handleChange:A}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(h,{persons:F,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&function(e){O.remove(e).catch((function(e){console.log(e)})).finally((function(){a(t.filter((function(n){return n.id!==e})))}))}(e)}})]})};r.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d128f487.chunk.js.map