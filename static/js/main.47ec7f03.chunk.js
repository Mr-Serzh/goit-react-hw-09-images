(this["webpackJsonpgoit-react-hw-09-images"]=this["webpackJsonpgoit-react-hw-09-images"]||[]).push([[0],{13:function(e,t,a){e.exports={item:"ImageGalleryItem_item__3IRXi",image:"ImageGalleryItem_image__1d5ba"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__37coq",modal:"Modal_modal__3v_gd"}},15:function(e,t,a){e.exports={wrapper:"Error_wrapper__1Am7e",text:"Error_text__3F-uk"}},27:function(e,t,a){e.exports={container:"Container_container__20aeI"}},28:function(e,t,a){e.exports={list:"ImageGallery_list__2vkvD"}},29:function(e,t,a){e.exports={btn:"Button_btn__1MLBs"}},31:function(e,t,a){e.exports={overlay:"Loader_overlay__3g8Mn"}},37:function(e,t,a){},7:function(e,t,a){e.exports={header:"Searchbar_header__2Y8uy",form:"Searchbar_form__fQb9-",btn:"Searchbar_btn__1jSBv",label:"Searchbar_label__2IVc7",input:"Searchbar_input__3Q0Ai"}},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(4),s=a.n(o),i=(a(37),a(6)),u=a.n(i),l=a(16),b=a(10),j=a(5),m=a(11),d=(a(17),a(26)),f=a.n(d),p=function(){var e=Object(b.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(a,"&key=").concat("19173841-1948c6c8698f2c876b72e0f5c","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),h=a(27),g=a.n(h);function O(e){var t=e.children;return Object(n.jsx)("div",{className:g.a.container,children:t})}var v=a(7),x=a.n(v);function _(e){var t=e.onHandleSubmit,a=Object(r.useState)(""),c=Object(j.a)(a,2),o=c[0],s=c[1];return Object(n.jsx)("header",{className:x.a.header,children:Object(n.jsxs)("form",{className:x.a.form,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return m.b.info("Please enter a value for search images!");t(o),s("")},children:[Object(n.jsx)("button",{type:"submit",className:x.a.btn,children:Object(n.jsx)("span",{className:x.a.label,children:"Search"})}),Object(n.jsx)("input",{className:x.a.input,type:"text",value:o,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target;return s(t.value)}})]})})}var w=a(13),y=a.n(w);function S(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,c=e.onOpenModal;return Object(n.jsx)("li",{className:y.a.item,children:Object(n.jsx)("img",{src:t,alt:r,"data-source":a,className:y.a.image,onClick:c})})}var I=a(28),N=a.n(I);function k(e){var t=e.images,a=e.onOpenModal;return Object(n.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL,o=e.tags;return Object(n.jsx)(S,{webformatURL:r,largeImageURL:c,tags:o,onOpenModal:a},t)}))})}var L=a(29),M=a.n(L);function E(e){var t=e.onLoadMore;return Object(n.jsx)("button",{type:"button",className:M.a.btn,onClick:t,children:"Load more"})}var R=a(30),U=a.n(R),C=(a(78),a(31)),B=a.n(C);function T(){return Object(n.jsx)("div",{className:B.a.overlay,children:Object(n.jsx)(U.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})})}var F=a(14),q=a.n(F),D=document.querySelector("#modal-root");function G(e){var t=e.largeImageURL,a=e.onToggleModal;Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return Object(o.createPortal)(Object(n.jsx)("div",{className:q.a.backdrop,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(n.jsx)("div",{className:q.a.modal,children:Object(n.jsx)("img",{src:t,alt:""})})}),D)}var H=a.p+"static/media/noImage.09ea9f6b.jpg",A=a(15),J=a.n(A);function P(e){var t=e.texterror;return Object(n.jsxs)("div",{role:"alert",className:J.a.wrapper,children:[Object(n.jsx)("img",{src:H,width:"350",alt:"noImage"}),Object(n.jsx)("p",{text:t,className:J.a.text,children:t})]})}function Q(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),s=Object(j.a)(o,2),i=s[0],d=s[1],f=Object(r.useState)(""),h=Object(j.a)(f,2),g=h[0],v=h[1],x=Object(r.useState)(1),w=Object(j.a)(x,2),y=w[0],S=w[1],I=Object(r.useState)(null),N=Object(j.a)(I,2),L=N[0],M=N[1],R=Object(r.useState)(!1),U=Object(j.a)(R,2),C=U[0],B=U[1],F=Object(r.useState)(!1),q=Object(j.a)(F,2),D=q[0],H=q[1];Object(r.useEffect)((function(){a&&function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(a,y);case 3:if(0!==(t=e.sent).length){e.next=6;break}return e.abrupt("return",M("No results were found for ".concat(a,"!")));case 6:d((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),M("Something went wrong. Try again.");case 12:return e.prev=12,B(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[y,a]);var A=function(){H(!D)},J=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),800)};return Object(n.jsxs)(O,{children:[Object(n.jsx)(_,{onHandleSubmit:function(e){c(e),d([]),S(1),M(null),B(!0)}}),L&&Object(n.jsx)(P,{texterror:L}),i.length>0&&!L&&Object(n.jsx)(k,{images:i,onOpenModal:function(e){v(e.target.dataset.source),A()}}),C&&Object(n.jsx)(T,{}),!C&&i.length>=12&&!L&&Object(n.jsx)(E,{onLoadMore:function(){B(!0),S((function(e){return e+1})),J()}}),D&&Object(n.jsx)(G,{onToggleModal:A,largeImageURL:g}),Object(n.jsx)(m.a,{autoClose:2700})]})}s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.47ec7f03.chunk.js.map