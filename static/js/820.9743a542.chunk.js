"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{713:function(e,r,t){t.d(r,{Hx:function(){return v},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return s}});var n=t(861),a=t(757),c=t.n(a),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"99b8738aa775f3085ac0a8a731554e22"};var s=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day");case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?query=".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r));case 2:return t=e.sent,console.log("response from api",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/credits"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(r,"/reviews"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},645:function(e,r,t){t.d(r,{e:function(){return o}});var n="MovieList_movieList__uFrOZ",a=t(87),c="MovieListItem_movieItem__mZL09",u="MovieListItem_movieLink__QdmjJ",s=t(184),i=function(e){var r=e.id,t=e.title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(r),className:u,children:(0,s.jsx)("h3",{children:t})})})},o=function(e){var r=e.movies;return(0,s.jsx)("ul",{className:n,children:r.map((function(e){var r=e.id,t=e.title;return(0,s.jsx)(i,{id:r,title:t},r)}))})}},820:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(645),o=t(713),f=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],v=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wr)();case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){v()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{style:{textAlign:"center"},children:"Trending Movies"}),t.length&&(0,f.jsx)(i.e,{movies:t})]})}}}]);
//# sourceMappingURL=820.9743a542.chunk.js.map