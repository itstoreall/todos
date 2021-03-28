(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{128:function(e,t,n){},130:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(9),a=n.n(r),s=n(81),i=n(18),l=n(73),d=n.n(l),u=n(28),j=n(22),b=n(40),h=n(39),O=n(42),f=n.n(O),p=n(12),m=Object(p.b)("todos/fetchTodosRequest"),x=Object(p.b)("todos/fetchTodosSuccess"),g=Object(p.b)("todo/fetchTodosError"),v=Object(p.b)("todos/addTodoRequest"),y=Object(p.b)("todos/addTodoSuccess"),T=Object(p.b)("todo/addTodoError"),C=Object(p.b)("todos/deleteTodoRequest"),w=Object(p.b)("todos/deleteTodoSuccess"),k=Object(p.b)("todo/deleteTodoError"),_=Object(p.b)("todos/toggleCompletedRequest"),M=Object(p.b)("todos/toggleCompletedSuccess"),N=Object(p.b)("todo/toggleCompletedError"),S=(Object(p.b)("todos/delete"),Object(p.b)("todos/changeFilter"));Object(p.b)("todos/toggleCompleted");f.a.defaults.baseURL="http://localhost:2222";var L,E,R=function(e){e(m()),f.a.get("/todos").then((function(t){var n=t.data;return e(x(n))})).catch((function(t){return e(g(t))}))},D=function(e){return function(t){var n={text:e,completed:!1};t(v()),f.a.post("/todos",n).then((function(e){var n=e.data;return t(y(n))})).catch((function(e){return t(T(e))}))}},q=function(e){return function(t){t(C()),f.a.delete("/todos/".concat(e)).then((function(){return t(w(e))})).catch((function(e){return t(k(e))}))}},A=function(e){var t=e.id,n=e.completed;return function(e){var o={completed:n};e(_()),f.a.patch("/todos/".concat(t),o).then((function(t){var n=t.data;return e(M(n))})).catch((function(t){return e(N(t))}))}},F=n(2),K=Object(i.b)((function(e){return{total:e.todos.items.length,completed:(t=e.todos.items,t.reduce((function(e,t){return t.completed?e+1:e}),0))};var t}))((function(e){var t=e.total,n=e.completed;return Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{children:Object(F.jsxs)("span",{children:["Total: ",t]})}),Object(F.jsx)("p",{children:Object(F.jsxs)("span",{children:["Completed: ",n]})})]})})),P=n(74),U=n.n(P),J=n(166),B=n(78),I=n.n(B),z=n(169),W=(n(43),function(e){var t=e.text,n=e.completed,o=e.onToggleCompleted,c=e.onDelete;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("label",{children:Object(F.jsx)(z.a,{type:"checkbox",className:"TodoList__checkbox",checked:n,onChange:o,color:"primary",inputProps:{"aria-label":"secondary checkbox"}})}),Object(F.jsx)("p",{className:"TodoList__text",children:t}),Object(F.jsx)(J.a,{type:"button",className:"TodoList__btn",onClick:c,disabled:!n,color:"primary","aria-label":"delete todo",component:"span",children:Object(F.jsx)(I.a,{})})]})}),V=function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return Object(F.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,c=e.text,r=e.completed;return Object(F.jsx)("li",{className:U()("TodoList__item",{"TodoList__item--completed":r}),children:Object(F.jsx)(W,{text:c,completed:r,onToggleCompleted:function(){return o({id:t,completed:!r})},onDelete:function(){return n(t)}})},t)}))})},G=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.text.toLowerCase().includes(n)}))},H=Object(i.b)((function(e){var t=e.todos,n=t.items,o=t.filter;return{todos:G(n,o)}}),(function(e){return{onDeleteTodo:function(t){return e(q(t))},onToggleCompleted:function(t){return e(A(t))}}}))(V),Q=n(168),X=n(167),Y=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""!==e.state.message)return e.props.onSubmit(e.state.message),e.props.onCloseModal(),void e.setState({message:""});alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 Todo")},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(F.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(F.jsx)("label",{className:"TodoEditor__textarea-label",children:Object(F.jsx)(Q.a,{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange,id:"outlined-multiline-static",label:"Todo text",multiline:!0,rows:2,variant:"outlined"})}),Object(F.jsx)(X.a,{className:"TodoEditor__btn",variant:"contained",color:"primary",type:"submit",children:"Submit"})]})}}]),n}(o.Component),Z=Object(i.b)(null,(function(e){return{onSubmit:function(t){return e(D(t))}}}))(Y),$=Object(i.b)((function(e){return{value:e.todos.filter}}),(function(e){return{onChange:function(t){return e(S(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(F.jsx)("label",{className:"TodoFilter-label",children:Object(F.jsx)(Q.a,{type:"text",className:"TodoInput",value:t,onChange:n,id:"outlined-basic",label:"Filter by name"})})})),ee=n(79),te=n.n(ee),ne=(n(128),document.querySelector("#modal-root")),oe=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(F.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(F.jsx)("div",{className:"Modal__content",children:this.props.children})}),ne)}}]),n}(o.Component),ce=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this.state.showModal;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(K,{}),Object(F.jsx)(X.a,{className:"ModaOpen__btn",onClick:this.toggleModal,variant:"contained",color:"primary",type:"button",children:"+ Add Todo"}),e&&Object(F.jsxs)(oe,{onClose:this.toggleModal,children:[Object(F.jsx)("span",{className:"ModaClose__btn-wrap",children:Object(F.jsx)(J.a,{className:"ModaClose__btn",onClick:this.toggleModal,color:"primary","aria-label":"upload picture",component:"span",children:Object(F.jsx)(te.a,{})})}),Object(F.jsx)(Z,{onCloseModal:this.toggleModal})]}),Object(F.jsx)($,{}),Object(F.jsx)(H,{})]})}}]),n}(o.Component),re=Object(i.b)(null,(function(e){return{fetchTodos:function(){return e(R)}}}))(ce),ae=Object(i.b)((function(e){return{isLoadingTodos:e.todos.loading}}),null)((function(e){var t=e.isLoadingTodos;return Object(F.jsx)("section",{className:"section",children:Object(F.jsxs)("div",{className:"container",children:[Object(F.jsxs)("h1",{children:["Todos View Redux",t&&Object(F.jsx)("span",{className:"Loading",children:" Loading..."})]}),Object(F.jsx)(re,{}),Object(F.jsxs)("ul",{className:"UseList",children:[Object(F.jsx)("li",{children:"use React - Prop Types"}),Object(F.jsx)("li",{children:"use ESLint"}),Object(F.jsx)("li",{children:"use Prettier"}),Object(F.jsx)("li",{children:"use gh-pages"}),Object(F.jsx)("li",{children:"use Modern normalize"}),Object(F.jsx)("li",{children:"use Node Sass"}),Object(F.jsx)("li",{children:"use React JSS"}),Object(F.jsx)("li",{children:"use Redux"}),Object(F.jsx)("li",{children:"use React Redux"}),Object(F.jsx)("li",{children:"use Redux Devtools Extension"}),Object(F.jsx)("li",{children:"use Material-UI"}),Object(F.jsx)("li",{children:"use axios"}),Object(F.jsx)("li",{children:"use Classnames"}),Object(F.jsx)("li",{children:"use react-router-dom"}),Object(F.jsxs)("li",{children:["use shortid - id: ",d.a.generate()]}),Object(F.jsx)("li",{children:"use Redux Toolkit"}),Object(F.jsx)("li",{children:"use Logger for Redux"}),Object(F.jsx)("li",{children:"use Redux Persist"}),Object(F.jsx)("li",{children:"use JSON Server"})]})]})})})),se=n(21),ie=n(34),le=n(80),de=n.n(le),ue=n(11),je=n(17),be=Object(p.c)([],(L={},Object(ue.a)(L,x,(function(e,t){return t.payload})),Object(ue.a)(L,y,(function(e,t){var n=t.payload;return[].concat(Object(se.a)(e),[n])})),Object(ue.a)(L,w,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(ue.a)(L,M,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?n:e}))})),L)),he=Object(p.c)(!1,(E={},Object(ue.a)(E,m,(function(){return!0})),Object(ue.a)(E,x,(function(){return!1})),Object(ue.a)(E,g,(function(){return!1})),Object(ue.a)(E,v,(function(){return!0})),Object(ue.a)(E,y,(function(){return!1})),Object(ue.a)(E,T,(function(){return!1})),Object(ue.a)(E,C,(function(){return!0})),Object(ue.a)(E,w,(function(){return!1})),Object(ue.a)(E,k,(function(){return!1})),Object(ue.a)(E,_,(function(){return!0})),Object(ue.a)(E,M,(function(){return!1})),Object(ue.a)(E,N,(function(){return!1})),E)),Oe=Object(p.c)("",Object(ue.a)({},S,(function(e,t){return t.payload}))),fe=Object(je.c)({items:be,filter:Oe,loading:he}),pe=[].concat(Object(se.a)(Object(p.d)({serializableCheck:{ignoredActions:[ie.a,ie.f,ie.b,ie.c,ie.d,ie.e]}})),[de.a]),me=Object(p.a)({reducer:{todos:fe},middleware:pe,devTools:!1});n(129),n(130);a.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(i.a,{store:me,children:Object(F.jsx)(s.a,{children:Object(F.jsx)(ae,{})})})}),document.getElementById("root"))},43:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.efb0221d.chunk.js.map