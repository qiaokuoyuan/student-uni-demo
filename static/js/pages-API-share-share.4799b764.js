(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-share-share"],{7955:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-title"},[e._v("分享内容")]),i("v-uni-view",{staticClass:"uni-textarea"},[i("v-uni-textarea",{staticClass:"textarea",model:{value:e.shareText,callback:function(t){e.shareText=t},expression:"shareText"}})],1),i("v-uni-view",{staticClass:"uni-title"},[e._v("分享图片：")]),i("v-uni-view",{staticClass:"uni-uploader",staticStyle:{padding:"15upx",background:"#FFF"}},[e.image?e._e():i("v-uni-view",{staticClass:"uni-uploader__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}}),e.image?i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:e.image}}):e._e()],1)],1)],1)},s=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return n})},a3bf:function(e,t,i){"use strict";i.r(t);var n=i("e3ef"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},d059:function(e,t,i){"use strict";i.r(t);var n=i("7955"),a=i("a3bf");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);var r,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"65fd33dc",null,!1,n["a"],r);t["default"]=u.exports},e3ef:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("f499"));i("a481");var s=n(i("795b")),r=n(i("e814"));i("96cf");var o=n(i("3b8d"));i("55dd");var u={data:function(){return{title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var e=this;uni.getProvider({service:"share",success:function(t){console.log("success",t);for(var i=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin",sort:0}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":i.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":i.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}e.providerList=i.sort(function(e,t){return e.sort-t.sort})},fail:function(e){console.log("获取分享通道失败",e),uni.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("分享通道:"+t.id+"； 分享类型:"+this.shareType),this.shareText||1!==this.shareType&&0!==this.shareType){e.next=4;break}return uni.showModal({content:"分享内容不能为空",showCancel:!1}),e.abrupt("return");case 4:if(this.image||2!==this.shareType&&0!==this.shareType){e.next=7;break}return uni.showModal({content:"分享图片不能为空",showCancel:!1}),e.abrupt("return");case 7:i={provider:t.id,scene:t.type&&"WXSenceTimeline"===t.type?"WXSenceTimeline":"WXSceneSession",type:this.shareType,success:function(e){console.log("success",e),uni.showModal({content:"已分享",showCancel:!1})},fail:function(e){console.log("fail",e),uni.showModal({content:e.errMsg,showCancel:!1})},complete:function(){console.log("分享操作结束!")}},e.t0=this.shareType,e.next=0===e.t0?11:1===e.t0?16:2===e.t0?18:5===e.t0?20:24;break;case 11:return i.summary=this.shareText,i.imageUrl=this.image,i.title="欢迎体验uniapp",i.href="https://uniapp.dcloud.io",e.abrupt("break",25);case 16:return i.summary=this.shareText,e.abrupt("break",25);case 18:return i.imageUrl=this.image,e.abrupt("break",25);case 20:return i.imageUrl=this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",i.title="欢迎体验uniapp",i.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},e.abrupt("break",25);case 24:return e.abrupt("break",25);case 25:if(0!==i.type||"iOS"!==plus.os.name){e.next=29;break}return e.next=28,this.compress();case 28:i.imageUrl=e.sent;case 29:1===i.type&&"qq"===i.provider&&(i.href="https://uniapp.dcloud.io",i.title="欢迎体验uniapp"),uni.share(i);case 31:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),radioChange:function(e){console.log("type:"+e.detail.value),this.shareType=(0,r.default)(e.detail.value)},chooseImage:function(){var e=this;uni.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(t){e.image=t.tempFilePaths[0]},fail:function(e){}})},compress:function(){console.log("开始压缩");var e=this.image;return new s.default(function(t){var i=plus.io.convertAbsoluteFileSystem(e.replace("file://",""));console.log("after"+i),plus.io.resolveLocalFileSystemURL(i,function(i){i.file(function(i){console.log("getFile:"+(0,a.default)(i)),i.size>20480&&plus.zip.compressImage({src:e,dst:e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(i){console.log("success zip****"+i.size);var n=e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");t(n)},function(e){uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(e){console.log("Resolve file URL failed: "+e.message),uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};t.default=u}}]);