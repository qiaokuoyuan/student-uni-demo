(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-scroll-view-scroll-view"],{"087a":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(t){console.log(t)},lower:function(t){console.log(t)},scroll:function(t){console.log(t),this.old.scrollTop=t.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick(function(){this.scrollTop=0}),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}};i.default=e},"0ccb":function(t,i,n){"use strict";var e,l=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),n("v-uni-text",[t._v("\\n纵向滚动")])],1),n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){arguments[0]=i=t.$handleEvent(i),t.upper.apply(void 0,arguments)},scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),n("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),n("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),n("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[t._v("点击这里返回顶部")]),n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),n("v-uni-text",[t._v("\\n横向滚动")])],1),n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),n("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),n("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),n("v-uni-view",{staticClass:"uni-common-pb"})],1)],1)},o=[];n.d(i,"b",function(){return l}),n.d(i,"c",function(){return o}),n.d(i,"a",function(){return e})},"5f1e":function(t,i,n){"use strict";n.r(i);var e=n("087a"),l=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);i["default"]=l.a},"7cb0":function(t,i,n){var e=n("ba47");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var l=n("4f06").default;l("f4a7ef02",e,!0,{sourceMap:!1,shadowMode:!1})},a261:function(t,i,n){"use strict";var e=n("7cb0"),l=n.n(e);l.a},ba47:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".scroll-Y[data-v-0f462b98]{height:%?300?%}.scroll-view_H[data-v-0f462b98]{white-space:nowrap;width:100%}.scroll-view-item[data-v-0f462b98]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-0f462b98]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""])},ba5b:function(t,i,n){"use strict";n.r(i);var e=n("0ccb"),l=n("5f1e");for(var o in l)"default"!==o&&function(t){n.d(i,t,function(){return l[t]})}(o);n("a261");var s,c=n("f0c5"),a=Object(c["a"])(l["default"],e["b"],e["c"],!1,null,"0f462b98",null,!1,e["a"],s);i["default"]=a.exports}}]);