(function(t){function e(e){for(var o,s,a=e[0],c=e[1],u=e[2],p=0,f=[];p<a.length;p++)s=a[p],i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1fe9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{id:"app"}},[n("li",{staticClass:"item"},[n("h1",[t._v("位置")]),n("div",[n("button",{on:{click:t.top}},[t._v("top")]),n("button",{on:{click:t.center}},[t._v("center")]),n("button",{on:{click:t.bottom}},[t._v("bottom")])])]),n("li",{staticClass:"item"},[n("h1",[t._v("动画")]),n("div",[n("button",{on:{click:function(e){return t.$toast("fade")}}},[t._v("fade")]),n("button",{on:{click:t.zoom}},[t._v("zoom")]),n("button",{on:{click:t.none}},[t._v("none")])])])])},r=[],s={name:"app",methods:{top:function(){this.$toast({message:"顶部信息",position:"top"})},center:function(){this.$toast({message:"中间信息",position:"center"})},bottom:function(){this.$toast({message:"底部信息",position:"bottom"})},zoom:function(){this.$toast({message:"zoom",animate:"zoom"})},none:function(){this.$toast({message:"none",animate:"none"})}}},a=s,c=(n("7c55"),n("2877")),u=Object(c["a"])(a,i,r,!1,null,null,null),l=u.exports,p=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toast"},[n("transition",{attrs:{name:t.animate}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],class:[t.position,"toast_text"]},[t._v(t._s(t.message))])])],1)},b=[],m={data:function(){return{visible:!1}},props:{message:String,position:{type:String,default:"center"},animate:{type:String,default:"fade"}},mounted:function(){this.visible=!0}},d=m,v=(n("bbbb"),Object(c["a"])(d,f,b,!1,null,null,null)),g=v.exports;function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var O={},j=null,_=null,w={position:"center",message:"",duration:1e3,animate:"fade"};function P(t){var e=o["a"].extend(g),n=y({},w);"string"===typeof t?Object.assign(n,{message:t}):Object.assign(n,t),j?(j.visible=!1,clearTimeout(_),_=null,j.position=n.position,j.message=n.message,j.animate=n.animate,o["a"].nextTick(function(){return j.visible=!0})):(j=new e({propsData:{message:n.message,position:n.position,animate:n.animate}}),j.$mount(),document.body.appendChild(j.$el)),_||(_=setTimeout(function(){return j.visible=!1},n.duration))}O.install=function(t,e){t.prototype.$toast=function(t){var n=y({},w);Object.assign(n,e),"string"===typeof t?Object.assign(n,{message:t}):Object.assign(n,t),P(n)}},o["a"].use(O),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(l)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var o=n("5c48"),i=n.n(o);i.a},bbbb:function(t,e,n){"use strict";var o=n("1fe9"),i=n.n(o);i.a}});
//# sourceMappingURL=app.57531bb5.js.map