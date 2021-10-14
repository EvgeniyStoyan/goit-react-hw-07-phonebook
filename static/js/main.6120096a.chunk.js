(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,n,e){t.exports={contacts_list:"ContactList_contacts_list__1hciY",item:"ContactList_item__2dEqa",contact_text:"ContactList_contact_text__LFTj1"}},21:function(t,n,e){t.exports={label_filter:"Filter_label_filter__3x6MD",input_filter:"Filter_input_filter__1LFLP"}},37:function(t,n,e){},63:function(t,n,e){"use strict";e.r(n);var c={};e.r(c),e.d(c,"fetchContactsRequest",(function(){return m})),e.d(c,"fetchContactsSuccess",(function(){return C})),e.d(c,"fetchContactsError",(function(){return _})),e.d(c,"addContactRequest",(function(){return p})),e.d(c,"addContactSuccess",(function(){return x})),e.d(c,"addContactError",(function(){return g})),e.d(c,"deleteContactRequest",(function(){return v})),e.d(c,"deleteContactSuccess",(function(){return F})),e.d(c,"deleteContactError",(function(){return y})),e.d(c,"changeFilter",(function(){return L}));var r={};e.r(r),e.d(r,"fetchContacts",(function(){return N})),e.d(r,"addContact",(function(){return S})),e.d(r,"deleteContact",(function(){return w}));var a={};e.r(a),e.d(a,"getLoading",(function(){return q})),e.d(a,"getFilter",(function(){return D})),e.d(a,"getContacts",(function(){return E})),e.d(a,"getVisibleContacts",(function(){return R}));var o=e(0),u=e.n(o),i=e(12),s=e.n(i),l=(e(37),e(6)),b=e(20),f=e.n(b),d=e(31),j=e(9),O=e.n(j),h=e(2),m=Object(h.b)("contacts/fetchContactsRequest"),C=Object(h.b)("contacts/fetchContactsSuccess"),_=Object(h.b)("contacts/fetchContactsError"),p=Object(h.b)("contacts/addContactRequest"),x=Object(h.b)("contacts/addContactSuccess"),g=Object(h.b)("contacts/addContactError"),v=Object(h.b)("contacts/deleteContactRequest"),F=Object(h.b)("contacts/deleteContactSuccess"),y=Object(h.b)("contacts/deleteContactError"),L=Object(h.b)("contacts/changeFilter");O.a.defaults.baseURL="http://localhost:3004";var N=function(){return function(){var t=Object(d.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(m()),O.a.get("/contacts").then((function(t){var e=t.data;return n(C(e))})).catch((function(t){return n(_(t))}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},S=function(t,n){return function(e){var c={name:t,number:n};e(p()),O.a.post("/contacts",c).then((function(t){var n=t.data;return e(x(n))})).catch((function(t){return e(g(t))}))}},w=function(t){return function(n){n(v()),O.a.delete("/contacts/".concat(t)).then((function(){return n(F(t))})).catch((function(t){return n(y(t))}))}},k=e(13),q=function(t){return t.contacts.loading},D=function(t){return t.contacts.filter},E=function(t){return t.contacts.items},R=Object(k.a)([E,D],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),A=e(16),P=e.n(A),T=e(1),z=Object(l.b)((function(t){return{contacts:a.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(n){return t(r.deleteContact(n))},fetchContacts:function(){return t(r.fetchContacts())}}}))((function(t){var n=t.contacts,e=t.onDeleteContact;return Object(T.jsx)("div",{children:Object(T.jsx)("ul",{className:P.a.contacts_list,children:n.map((function(t){var n=t.id,c=t.name,r=t.number;return Object(T.jsxs)("li",{className:P.a.item,children:[Object(T.jsxs)("p",{className:P.a.contact_text,children:[c,": ",r]}),Object(T.jsx)("button",{type:"button",onClick:function(){return e(n)},children:"Delete"})]},n)}))})})})),M=e(22),B=e(7),J=e.n(B);var Z=Object(l.b)((function(t){return{contacts:a.getContacts(t),loading:a.getLoading(t)}}),(function(t){return{onSubmit:function(n,e){return t(r.addContact(n,e))}}}))((function(t){var n=t.onSubmit,e=(t.contacts,t.loading),c=Object(o.useState)(""),r=Object(M.a)(c,2),a=r[0],u=r[1],i=Object(o.useState)(""),s=Object(M.a)(i,2),l=s[0],b=s[1],f=function(t){var n=t.currentTarget,e=n.name,c=n.value;switch(e){case"name":u(c);break;case"number":b(c);break;default:return}},d=function(){u((function(t){return""})),b((function(t){return""}))};return Object(T.jsxs)("div",{className:J.a.container_form,children:[Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(a,l),d()},className:J.a.form,children:[Object(T.jsxs)("label",{className:J.a.label_text,children:["Name",Object(T.jsx)("input",{className:J.a.input_form,type:"text",value:a,onChange:f,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(T.jsxs)("label",{className:J.a.label_text,children:["Number",Object(T.jsx)("input",{className:J.a.input_form,type:"tel",value:l,onChange:f,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(T.jsx)("button",{type:"submit",className:J.a.button_form,children:"Add contact"})]}),e&&Object(T.jsx)("h2",{children:"Loading..."})]})})),I=e(21),Q=e.n(I),V=Object(l.b)((function(t){return{value:a.getFilter(t)}}),(function(t){return{onChange:function(n){return t(c.changeFilter(n.target.value))}}}))((function(t){var n=t.value,e=t.onChange;return Object(T.jsx)("div",{children:Object(T.jsxs)("label",{className:Q.a.label_filter,children:["Find contacts by name",Object(T.jsx)("input",{type:"text",value:n,onChange:e,className:Q.a.input_filter})]})})}));function K(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(Z,{}),Object(T.jsx)("h2",{children:"Contacts"}),Object(T.jsx)(V,{}),Object(T.jsx)(z,{})]})}var U,Y,$,G=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,64)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),c(t),r(t),a(t),o(t)}))},H=e(15),W=e(3),X=e(5),tt=Object(h.c)([],(U={},Object(W.a)(U,C,(function(t,n){return n.payload})),Object(W.a)(U,x,(function(t,n){var e=n.payload;return[].concat(Object(H.a)(t),[e])})),Object(W.a)(U,F,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),U)),nt=Object(h.c)(!1,(Y={},Object(W.a)(Y,m,(function(){return!0})),Object(W.a)(Y,C,(function(){return!1})),Object(W.a)(Y,_,(function(){return!1})),Object(W.a)(Y,p,(function(){return!0})),Object(W.a)(Y,x,(function(){return!1})),Object(W.a)(Y,g,(function(){return!1})),Object(W.a)(Y,v,(function(){return!0})),Object(W.a)(Y,F,(function(){return!1})),Object(W.a)(Y,y,(function(){return!1})),Y)),et=Object(h.c)("",Object(W.a)({},L,(function(t,n){return n.payload}))),ct=Object(h.c)(null,($={},Object(W.a)($,_,(function(t,n){return n.payload})),Object(W.a)($,g,(function(t,n){return n.payload})),Object(W.a)($,y,(function(t,n){return n.payload})),$)),rt=Object(X.b)({items:tt,isLoading:nt,filter:et,error:ct}),at=e(32),ot=e.n(at),ut=[].concat(Object(H.a)(Object(h.d)()),[ot.a]),it=Object(h.a)({reducer:{contacts:rt},middleware:ut,devTools:!1});s.a.render(Object(T.jsx)(u.a.StrictMode,{children:Object(T.jsx)(l.a,{store:it,children:Object(T.jsx)(K,{})})}),document.getElementById("root")),G()},7:function(t,n,e){t.exports={container_form:"ContactForm_container_form__2Mp8D",form:"ContactForm_form__3iK7Q",label_text:"ContactForm_label_text__CroP3",input_form:"ContactForm_input_form__3QDlC"}}},[[63,1,2]]]);
//# sourceMappingURL=main.6120096a.chunk.js.map