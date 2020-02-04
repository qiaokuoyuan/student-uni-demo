(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-voice-voice"],{"0eec":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[t.recording||t.playing||t.hasRecord?t._e():[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.startRecord.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/record.png"}})],1),i("v-uni-view",{staticClass:"page-body-button"})],1)],!0===t.recording?[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopRecord.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"button-stop-record"})],1),i("v-uni-view",{staticClass:"page-body-button"})],1)]:t._e(),!0===t.hasRecord&&!1===t.playing?[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))]),i("v-uni-text",{staticClass:"time-small"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.playVoice.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/play.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/trash.png"}})],1)],1)]:t._e(),!0===t.hasRecord&&!0===t.playing?[i("v-uni-view",{staticClass:"page-body-time"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))]),i("v-uni-text",{staticClass:"time-small"},[t._v(t._s(t.formatedRecordTime))])],1),i("v-uni-view",{staticClass:"page-body-buttons"},[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.stopVoice.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/stop.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"../../../static/trash.png"}})],1)],1)]:t._e()],2)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"316c":function(t,e,i){"use strict";i.r(e);var a=i("0eec"),n=i("d4b2");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("4c19");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4eeffcfb",null,!1,a["a"],r);e["default"]=c.exports},"49a9":function(t,e,i){var a=i("6b1e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("40ca55a6",a,!0,{sourceMap:!1,shadowMode:!1})},"4c19":function(t,e,i){"use strict";var a=i("49a9"),n=i.n(a);n.a},6236:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("3b8d")),o=i("b5c4"),r=null,s=null,c=null,l=null,u={data:function(){return{title:"start/stopRecord、play/stopVoice",recording:!1,playing:!1,hasRecord:!1,tempFilePath:"",recordTime:0,playTime:0,formatedRecordTime:"00:00:00",formatedPlayTime:"00:00:00"}},onUnload:function(){this.end()},onLoad:function(){var t=this;l=uni.createInnerAudioContext(),l.onEnded(function(){clearInterval(r);var e=0;console.log("play voice finished"),t.playing=!1,t.formatedPlayTime=o.formatTime(e),t.playTime=e}),c=uni.getRecorderManager(),c.onStart(function(){console.log("recorder start"),t.recording=!0,s=setInterval(function(){t.recordTime+=1,t.formatedRecordTime=o.formatTime(t.recordTime)},1e3)}),c.onStop(function(e){console.log("on stop"),l.src=e.tempFilePath,t.hasRecord=!0,t.recording=!1}),c.onError(function(){console.log("recorder onError")})},methods:{startRecord:function(){var t=(0,n.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:c.start({format:"mp3"});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),stopRecord:function(){c.stop(),clearInterval(s)},playVoice:function(){var t=this;console.log("play voice"),this.playing=!0,r=setInterval(function(){t.playTime+=1,t.formatedPlayTime=o.formatTime(t.playTime)},1e3),l.play()},stopVoice:function(){clearInterval(r),this.playing=!1,this.formatedPlayTime=o.formatTime(0),this.playTime=0,l.stop()},end:function(){l.stop(),c.stop(),clearInterval(s),clearInterval(r),this.recording=!1,this.playing=!1,this.hasRecord=!1,this.playTime=0,this.recordTime=0,this.formatedRecordTime="00:00:00",this.formatedRecordTime="00:00:00"},clear:function(){this.end()}}};e.default=u},"6b1e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-image[data-v-4eeffcfb]{width:%?150?%;height:%?150?%}.page-body-wrapper[data-v-4eeffcfb]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;margin-bottom:%?300?%}.page-body-time[data-v-4eeffcfb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.time-big[data-v-4eeffcfb]{font-size:%?60?%;margin:%?20?%}.time-small[data-v-4eeffcfb]{font-size:%?30?%}.page-body-buttons[data-v-4eeffcfb]{margin-top:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.page-body-button[data-v-4eeffcfb]{width:%?250?%;text-align:center}.button-stop-record[data-v-4eeffcfb]{width:%?110?%;height:%?110?%;border:%?20?% solid #fff;background-color:#f55c23;border-radius:%?130?%;margin:0 auto}",""])},b5c4:function(t,e,i){"use strict";var a=i("288e"),n=a(i("0a0d"));i("28a5");var o=a(i("59ad"));i("6b54");var r=a(i("e814"));function s(t){if("number"!==typeof t||t<0)return t;var e=(0,r.default)(t/3600);t%=3600;var i=(0,r.default)(t/60);t%=60;var a=t;return[e,i,a].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function c(t,e){return"string"===typeof t&&"string"===typeof e&&(t=(0,o.default)(t),e=(0,o.default)(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var l={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var i in this.UNITS)if(t>=this.UNITS[i]){e=Math.floor(t/this.UNITS[i])+i+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),i=(0,n.default)()-e.getTime();if(i<this.UNITS["天"])return this.humanize(i);var a=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+a(e.getMonth()+1)+"/"+a(e.getDate())+"-"+a(e.getHours())+":"+a(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:s,formatLocation:c,dateUtils:l}},d4b2:function(t,e,i){"use strict";i.r(e);var a=i("6236"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);