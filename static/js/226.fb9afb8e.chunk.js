"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[226],{226:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(439),r=t(791),s=t(434),c=t(178),l=t(389),o=t(701),u=t(932),i={},h=t(329);var m=function(){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),t=n[0],m=n[1],d=(0,r.useState)(""),x=(0,a.Z)(d,2),f=x[0],j=x[1],v=(0,s.v9)(l.A),_=(0,s.I0)();(0,r.useEffect)((function(){_((0,c.CL)())}),[_]);var p=function(){m(""),j("")},b=function(e){var n=e.name,t=e.number;if(function(e){var n=v.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}));return n}(n))return alert("".concat(n," is already in contacts"));_((0,c.xe)({name:n,number:t}))},C=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":m(a);break;case"number":j(a);break;default:return}};return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b({name:t,number:f}),p()},className:i.form,children:[(0,h.jsx)("label",{children:(0,h.jsx)(o.Z,{onChange:C,type:"text",name:"name",value:t,placeholder:"Enter name"})}),(0,h.jsx)("label",{children:(0,h.jsx)(o.Z,{onChange:C,type:"tel",name:"number",value:f,placeholder:"Enter number"})}),(0,h.jsx)(u.Z,{name:"Add contact",type:"submit"})]})},d=t(478);var x=function(){var e=(0,s.I0)();return(0,h.jsx)("label",{children:(0,h.jsx)(o.Z,{onChange:function(n){var t=(0,d.W)(n.currentTarget.value);e(t)},type:"text",placeholder:"Find name"})})},f=function(e){return e.filter},j="Contacts_columb__N2GwO",v="Contacts_table__CPRk5",_="Contacts_text__JRArB";var p=function(){var e=(0,s.v9)(l.A),n=(0,s.v9)(f),t=(0,s.I0)(),a=n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e;return(0,h.jsx)(h.Fragment,{children:a.length>0?(0,h.jsxs)("table",{className:v,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{className:j,children:"N"}),(0,h.jsx)("th",{className:j,children:"Name"}),(0,h.jsx)("th",{className:j,children:"Tel"}),(0,h.jsx)("th",{className:j,children:"Delete"})]})}),(0,h.jsx)("tbody",{children:a.map((function(e,n){var a=e.id,r=e.name,s=e.number;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:_,children:n+1}),(0,h.jsx)("td",{className:_,children:r}),(0,h.jsx)("td",{className:_,children:s}),(0,h.jsx)("td",{children:(0,h.jsx)(u.Z,{onClick:function(){return e=a,void t((0,c.ze)(e));var e},name:"Delete",type:"button"})})]},a)}))})]}):(0,h.jsx)("p",{className:_,children:"No contacts"})})},b="PhoneBook_wrapper__v8Rrr",C="PhoneBook_title__v6WEu",N="PhoneBook_text__dcfIw PhoneBook_title__v6WEu";var k=function(){return(0,h.jsxs)("div",{className:b,children:[(0,h.jsx)("h1",{className:C,children:"PhoneBook"}),(0,h.jsx)(m,{}),(0,h.jsx)(x,{}),(0,h.jsx)("p",{className:N,children:"Contacts"}),(0,h.jsx)(p,{})]})}},701:function(e,n,t){t.d(n,{Z:function(){return s}});var a="Input_input__2SVdu",r=t(329);var s=function(e){var n=Object.assign({},e);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("input",{type:n.type,className:a,name:n.name,value:n.value,required:!0,placeholder:n.placeholder,onChange:n.onChange})})}}}]);
//# sourceMappingURL=226.fb9afb8e.chunk.js.map