"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[761,905],{905:function(n,t,e){e.r(t),e.d(t,{default:function(){return c}});var r=e(184);function c(n){var t=n.msg;return(0,r.jsx)("h2",{children:t})}},761:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),c=e(791),o=e(739),u=e(207),i=e(905),a=e(184);function s(){var n=(0,o.UO)().movieId,t=(0,c.useState)([]),e=(0,r.Z)(t,2),s=e[0],f=e[1];return(0,c.useEffect)((function(){u.Jh(n).then((function(n){var t=n.results;f(t)}))}),[n]),(0,a.jsx)(a.Fragment,{children:s&&(0,a.jsx)(a.Fragment,{children:s.length>0?(0,a.jsx)("div",{children:s.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h3",{children:[e,":"]}),(0,a.jsxs)("p",{children:['"',r,'"']})]},t)}))}):(0,a.jsx)(i.default,{msg:"No Reviews on this movie..."})})})}},207:function(n,t,e){e.d(t,{Hg:function(){return f},IQ:function(){return v},Jh:function(){return l},NV:function(){return d},yK:function(){return h}});var r=e(861),c=e(757),o=e.n(c),u="e42728a38336df3d5b4e4643fa430ed7",i="https://api.themoviedb.org/3";function a(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function n(){var t,e,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return a("".concat(i,"/trending/movie/day?api_key=").concat(u))}function d(n){return a("".concat(i,"/search/movie?query=").concat(n,"&api_key=").concat(u,"&language=en-US&page=1&include_adult=false"))}function h(n){return a("".concat(i,"/movie/").concat(n,"?api_key=").concat(u))}function v(n){return a("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u))}function l(n){return a("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u))}},861:function(n,t,e){function r(n,t,e,r,c,o,u){try{var i=n[o](u),a=i.value}catch(s){return void e(s)}i.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var u=n.apply(t,e);function i(n){r(u,c,o,i,a,"next",n)}function a(n){r(u,c,o,i,a,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=761.3c5d5544.chunk.js.map