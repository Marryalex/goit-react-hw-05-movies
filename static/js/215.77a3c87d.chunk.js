"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{215:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,c,i,o=t(885),a=t(791),u=t(731),s=t(739),p=t(207),f=t(168),l=t(444),d=l.ZP.form(r||(r=(0,f.Z)(["\n   {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    background-color: #fff;\n  }\n"]))),h=l.ZP.button(c||(c=(0,f.Z)(["\n   {\n    display: inline-block;\n    width: 80px;\n    height: 40px;\n    border: 1px solid #aaa;\n    opacity: 0.6;\n    font-weight: 600;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n  &: hover {\n    opacity: 1;\n  }\n"]))),m=l.ZP.input(i||(i=(0,f.Z)(["\n   {\n    display: inline-block;\n    width: 300px;\n    height: 40px;\n    margin: 15px;\n    font: inherit;\n    font-size: 20px;\n    border: 1px solid #ccc;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  & :placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),x=t(184);function v(){var n=(0,a.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],c=(0,u.lr)(),i=(0,o.Z)(c,2),f=i[0],l=i[1],v=f.get("search"),g=(0,s.TH)();return(0,a.useEffect)((function(){v&&p.NV(v).then((function(n){var e=n.results;r(e)}))}),[v]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(d,{onSubmit:function(n){n.preventDefault();var e=n.target,t=e.elements[0].value;l({search:t}),e.reset()},children:[(0,x.jsx)(m,{type:"text",name:"movieName",autocomplete:"off",autoFocus:!0,placeholder:"Search movies "}),(0,x.jsx)(h,{type:"submit",children:"Search"})]}),(0,x.jsx)("ul",{children:t&&t.map((function(n){var e=n.title,t=n.id;return(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:g},children:e})},t)}))})]})}},207:function(n,e,t){t.d(e,{Hg:function(){return p},IQ:function(){return d},Jh:function(){return h},NV:function(){return f},yK:function(){return l}});var r=t(861),c=t(757),i=t.n(c),o="e42728a38336df3d5b4e4643fa430ed7",a="https://api.themoviedb.org/3";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var e,t,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function p(){return u("".concat(a,"/trending/movie/day?api_key=").concat(o))}function f(n){return u("".concat(a,"/search/movie?query=").concat(n,"&api_key=").concat(o,"&language=en-US&page=1&include_adult=false"))}function l(n){return u("".concat(a,"/movie/").concat(n,"?api_key=").concat(o))}function d(n){return u("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(o))}function h(n){return u("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=215.77a3c87d.chunk.js.map