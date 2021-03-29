(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{132:function(e,t,n){},134:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(9),a=n.n(r),s=n(84),i=n(18),l=n(76),d=n.n(l),u=n(29),b=n(22),j=n(41),h=n(40),p=n(28),O=n.n(p),f=n(46),m=n(43),x=n.n(m),g=n(12),v=Object(g.b)("todos/fetchTodosRequest"),T=Object(g.b)("todos/fetchTodosSuccess"),y=Object(g.b)("todo/fetchTodosError"),C=Object(g.b)("todos/addTodoRequest"),w=Object(g.b)("todos/addTodoSuccess"),k=Object(g.b)("todo/addTodoError"),_=Object(g.b)("todos/deleteTodoRequest"),L=Object(g.b)("todos/deleteTodoSuccess"),M=Object(g.b)("todo/deleteTodoError"),N=Object(g.b)("todos/toggleCompletedRequest"),S=Object(g.b)("todos/toggleCompletedSuccess"),E=Object(g.b)("todo/toggleCompletedError"),R=(Object(g.b)("todos/delete"),Object(g.b)("todos/changeFilter"));Object(g.b)("todos/toggleCompleted");x.a.defaults.baseURL="http://localhost:2222";var D,F,A={fetchTodos:function(){var e=Object(f.a)(O.a.mark((function e(t){var n,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.prev=1,e.next=4,x.a.get("/todos");case 4:n=e.sent,o=n.data,t(T(o)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(y(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),addTodo:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n){var o,c,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={text:e,completed:!1},n(C()),t.prev=2,t.next=5,x.a.post("/todos",o);case 5:c=t.sent,r=c.data,n(w(r)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n(k(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteTodo:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_()),t.prev=1,t.next=4,x.a.delete("/todos/".concat(e));case 4:n(L(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(M(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},toggleCompleted:function(e){var t=e.id,n=e.completed;return function(){var e=Object(f.a)(O.a.mark((function e(o){var c,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={completed:n},o(N()),e.prev=2,e.next=5,x.a.patch("/todos/".concat(t),c);case 5:r=e.sent,a=r.data,o(S(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),E(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},q=n(48),K=function(e){return e.todos.filter},P=function(e){return e.todos.items},U=Object(q.a)([P],(function(e){return console.log("\u0412\u044b\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u043d\u043e\u0432\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e Completed Todos "),e.reduce((function(e,t){return t.completed?e+1:e}),0)})),J=Object(q.a)([P,K],(function(e,t){var n=t.toLowerCase();return console.log("\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442 \u043d\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u0438\u0434\u0438\u043c\u044b\u0445 Todos"),e.filter((function(e){return e.text.toLowerCase().includes(n)}))})),B={getLoading:function(e){return e.todos.loading},getFilter:K,getAllTodos:P,getTotalTodoCount:function(e){return P(e).length},getCompletedTodoCount:U,getVisibleTodos:J},I=n(11),V=n(21),z=n(17),W=Object(g.c)([],(D={},Object(I.a)(D,T,(function(e,t){return t.payload})),Object(I.a)(D,w,(function(e,t){return[t.payload].concat(Object(V.a)(e))})),Object(I.a)(D,L,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(I.a)(D,S,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n.id?n:e}))})),D)),G=Object(g.c)(!1,(F={},Object(I.a)(F,v,(function(){return!0})),Object(I.a)(F,T,(function(){return!1})),Object(I.a)(F,y,(function(){return!1})),Object(I.a)(F,C,(function(){return!0})),Object(I.a)(F,w,(function(){return!1})),Object(I.a)(F,k,(function(){return!1})),Object(I.a)(F,_,(function(){return!0})),Object(I.a)(F,L,(function(){return!1})),Object(I.a)(F,M,(function(){return!1})),Object(I.a)(F,N,(function(){return!0})),Object(I.a)(F,S,(function(){return!1})),Object(I.a)(F,E,(function(){return!1})),F)),H=Object(g.c)("",Object(I.a)({},R,(function(e,t){return t.payload}))),Q=Object(z.c)({items:W,filter:H,loading:G}),X=n(2),Y=Object(i.b)((function(e){return{total:B.getTotalTodoCount(e),completed:B.getCompletedTodoCount(e)}}))((function(e){var t=e.total,n=e.completed;return Object(X.jsxs)("div",{children:[Object(X.jsx)("p",{children:Object(X.jsxs)("span",{children:["Total: ",t]})}),Object(X.jsx)("p",{children:Object(X.jsxs)("span",{children:["Completed: ",n]})})]})})),Z=n(78),$=n.n(Z),ee=n(170),te=n(81),ne=n.n(te),oe=n(173),ce=(n(44),function(e){var t=e.text,n=e.completed,o=e.onToggleCompleted,c=e.onDelete;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)("label",{children:Object(X.jsx)(oe.a,{type:"checkbox",className:"TodoList__checkbox",checked:n,onChange:o,color:"primary",inputProps:{"aria-label":"secondary checkbox"}})}),Object(X.jsx)("p",{className:"TodoList__text",children:t}),Object(X.jsx)(ee.a,{type:"button",className:"TodoList__btn",onClick:c,disabled:!n,color:"primary","aria-label":"delete todo",component:"span",children:Object(X.jsx)(ne.a,{})})]})}),re=function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return Object(X.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,c=e.text,r=e.completed;return Object(X.jsx)("li",{className:$()("TodoList__item",{"TodoList__item--completed":r}),children:Object(X.jsx)(ce,{text:c,completed:r,onToggleCompleted:function(){return o({id:t,completed:!r})},onDelete:function(){return n(t)}})},t)}))})},ae=Object(i.b)((function(e){return{todos:B.getVisibleTodos(e)}}),(function(e){return{onDeleteTodo:function(t){return e(A.deleteTodo(t))},onToggleCompleted:function(t){return e(A.toggleCompleted(t))}}}))(re),se=n(172),ie=n(171),le=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""!==e.state.message)return e.props.onSubmit(e.state.message),e.props.onCloseModal(),void e.setState({message:""});alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0442\u0435\u043a\u0441\u0442 Todo")},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(X.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(X.jsx)("label",{className:"TodoEditor__textarea-label",children:Object(X.jsx)(se.a,{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange,id:"outlined-multiline-static",label:"Todo text",multiline:!0,rows:2,variant:"outlined"})}),Object(X.jsx)(ie.a,{className:"TodoEditor__btn",variant:"contained",color:"primary",type:"submit",children:"Submit"})]})}}]),n}(o.Component),de=Object(i.b)(null,(function(e){return{onSubmit:function(t){return e(A.addTodo(t))}}}))(le),ue=Object(i.b)((function(e){return{value:B.getFilter(e)}}),(function(e){return{onChange:function(t){return e(R(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(X.jsx)("label",{className:"TodoFilter-label",children:Object(X.jsx)(se.a,{type:"text",className:"TodoInput",value:t,onChange:n,id:"outlined-basic",label:"Filter by name"})})})),be=n(82),je=n.n(be),he=(n(132),document.querySelector("#modal-root")),pe=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(X.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(X.jsx)("div",{className:"Modal__content",children:this.props.children})}),he)}}]),n}(o.Component),Oe=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this.state.showModal;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Y,{}),Object(X.jsx)(ie.a,{className:"ModaOpen__btn",onClick:this.toggleModal,variant:"contained",color:"primary",type:"button",children:"+ Add Todo"}),e&&Object(X.jsxs)(pe,{onClose:this.toggleModal,children:[Object(X.jsx)("span",{className:"ModaClose__btn-wrap",children:Object(X.jsx)(ee.a,{className:"ModaClose__btn",onClick:this.toggleModal,color:"primary","aria-label":"upload picture",component:"span",children:Object(X.jsx)(je.a,{})})}),Object(X.jsx)(de,{onCloseModal:this.toggleModal})]}),Object(X.jsx)(ue,{}),Object(X.jsx)(ae,{})]})}}]),n}(o.Component),fe=Object(i.b)((function(e){return{isLoadingTodos:B.getLoading(e)}}),(function(e){return{fetchTodos:function(){return e(A.fetchTodos)}}}))(Oe),me=Object(i.b)((function(e){return{isLoadingTodos:e.todos.loading}}),null)((function(e){var t=e.isLoadingTodos;return Object(X.jsx)("section",{className:"section",children:Object(X.jsxs)("div",{className:"container",children:[Object(X.jsxs)("h1",{children:["Todos View Redux",t&&Object(X.jsx)("span",{className:"Loading",children:" Loading..."})]}),Object(X.jsx)(fe,{}),Object(X.jsxs)("ul",{className:"UseList",children:[Object(X.jsx)("li",{children:"use React - Prop Types"}),Object(X.jsx)("li",{children:"use ESLint"}),Object(X.jsx)("li",{children:"use Prettier"}),Object(X.jsx)("li",{children:"use gh-pages"}),Object(X.jsx)("li",{children:"use Modern normalize"}),Object(X.jsx)("li",{children:"use Node Sass"}),Object(X.jsx)("li",{children:"use React JSS"}),Object(X.jsx)("li",{children:"use Redux"}),Object(X.jsx)("li",{children:"use React Redux"}),Object(X.jsx)("li",{children:"use Redux Devtools Extension"}),Object(X.jsx)("li",{children:"use Material-UI"}),Object(X.jsx)("li",{children:"use axios"}),Object(X.jsx)("li",{children:"use Classnames"}),Object(X.jsx)("li",{children:"use react-router-dom"}),Object(X.jsxs)("li",{children:["use shortid - id: ",d.a.generate()]}),Object(X.jsx)("li",{children:"use Redux Toolkit"}),Object(X.jsx)("li",{children:"use Logger for Redux"}),Object(X.jsx)("li",{children:"use Redux Persist"}),Object(X.jsx)("li",{children:"use JSON Server"}),Object(X.jsx)("li",{children:"use Reselect (from Toolkit)"})]})]})})})),xe=n(35),ge=n(83),ve=n.n(ge),Te=[].concat(Object(V.a)(Object(g.d)({serializableCheck:{ignoredActions:[xe.a,xe.f,xe.b,xe.c,xe.d,xe.e]}})),[ve.a]),ye=Object(g.a)({reducer:{todos:Q},middleware:Te,devTools:!1});n(133),n(134);a.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(i.a,{store:ye,children:Object(X.jsx)(s.a,{children:Object(X.jsx)(me,{})})})}),document.getElementById("root"))},44:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.41c236eb.chunk.js.map