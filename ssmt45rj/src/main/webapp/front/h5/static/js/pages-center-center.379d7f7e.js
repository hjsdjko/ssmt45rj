(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{2287:function(e,t,i){var r=i("6a65");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("d8cf08b4",r,!0,{sourceMap:!1,shadowMode:!1})},"27ae":function(e,t,i){"use strict";i.r(t);var r=i("55b4"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"38f1":function(e,t,i){"use strict";var r=i("2287"),n=i.n(r);n.a},"55b4":function(e,t,i){"use strict";var r=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var n=r(i("3b8d")),a=r(i("2971")),o={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:i=e.sent,this.user=i.data,this.tableName=t,r=a.default.list(),this.menuList=r;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:i=e.sent,this.user=i.data,this.tableName=t,r=a.default.list(),this.menuList=r;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{onPageTap:function(e){uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e})}})}}};t.default=o},"6a65":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-b915562e]{background-color:#f1f1f1}.content[data-v-b915562e]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.header[data-v-b915562e]{background-color:#ff6364;width:100%;height:30vw;padding:0 4%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header.status[data-v-b915562e]{padding-top:0}.header .userinfo[data-v-b915562e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .userinfo .face[data-v-b915562e]{-webkit-flex-shrink:0;flex-shrink:0;width:15vw;height:15vw;overflow:hidden}.header .userinfo .face uni-image[data-v-b915562e]{width:100%;height:100%}.header .userinfo .info[data-v-b915562e]{-webkit-flex-flow:wrap;flex-flow:wrap;padding-left:%?30?%}.header .userinfo .info .username[data-v-b915562e]{width:100%;color:#fff;font-size:%?40?%;margin:%?8?% 0}.header .userinfo .info .integral[data-v-b915562e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?8?%;color:#fff;background-color:rgba(0,0,0,.1);border-radius:%?20?%;font-size:%?24?%;margin:%?8?% 0}.header .setting[data-v-b915562e]{-webkit-flex-shrink:0;flex-shrink:0}.header .setting uni-image[data-v-b915562e]{width:100%;height:100%}.hover[data-v-b915562e]{background-color:#eee}.orders[data-v-b915562e]{background-color:#ff6364;width:100%;height:11vw;padding:0 4%;margin-bottom:calc(11vw + %?40?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;border-radius:0 0 100% 100%;margin-top:%?-1?%}.orders .box[data-v-b915562e]{width:100%;padding:0 1%;height:22vw;background-color:#fefefe;border-radius:%?24?%;box-shadow:0 0 %?20?% rgba(0,0,0,.15);margin-bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.orders .box .label[data-v-b915562e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-flow:wrap;flex-flow:wrap;width:100%;height:16vw;color:#666;font-size:%?26?%}.orders .box .label .icon[data-v-b915562e]{position:relative;width:7vw;height:7vw;margin:0 1vw}.orders .box .label .icon .badge[data-v-b915562e]{position:absolute;width:4vw;height:4vw;background-color:#ec6d2c;top:-1vw;right:-1vw;border-radius:100%;font-size:%?20?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:10}.orders .box .label .icon uni-image[data-v-b915562e]{width:7vw;height:7vw;z-index:9}.list[data-v-b915562e]{width:100%;border-bottom:solid %?26?% #f1f1f1}.list .li[data-v-b915562e]{width:100%;height:%?100?%;padding:0 4%;border-bottom:solid %?1?% #e7e7e7;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;font-size:%?33?%}.list .li.noborder[data-v-b915562e]{border-bottom:0}.list .li .icon[data-v-b915562e]{-webkit-flex-shrink:0;flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-b915562e]{width:%?50?%;height:%?50?%}.list .li .text[data-v-b915562e]{padding-left:%?20?%;width:100%;color:#666}.list .li .to[data-v-b915562e]{-webkit-flex-shrink:0;flex-shrink:0;width:%?40?%;height:%?40?%}body.?%PAGE?%[data-v-b915562e]{background-color:#f1f1f1}',""]),e.exports=t},d2c0:function(e,t,i){"use strict";i.r(t);var r=i("f1a0"),n=i("27ae");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("38f1");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"b915562e",null,!1,r["a"],o);t["default"]=l.exports},f1a0:function(e,t,i){"use strict";var r,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header",class:{status:e.isH5Plus},style:{backgroundColor:"rgba(102, 204, 204, 1)",height:"200rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../user-info/user-info")}}},["yonghu"==e.tableName?i("v-uni-view",{staticClass:"userinfo"},[i("v-uni-view",{staticClass:"face",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",height:"88rpx"}},[i("v-uni-image",{attrs:{src:e.user.touxiang?e.user.touxiang:"/static/center/face.jpeg"}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"username",style:{boxShadow:"0 0 16rpx rgba(255,255,255,0)",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(255,255,255,.3)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",textAlign:"left",borderWidth:"0",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[e._v(e._s(e.user.yonghuming))]),e.user.money?i("v-uni-view",{staticClass:"integral",style:{boxShadow:"0 0 16rpx rgba(255,255,255,.3)",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(255,255,255,.3)",borderRadius:"8rpx",color:"#fff",textAlign:"center",borderWidth:"2rpx",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[e._v("余额："+e._s(e.user.money))]):e._e(),e.user.jifen||0==e.user.jifen?i("v-uni-view",{staticClass:"integral",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"#fff",borderColor:"#ccc",borderRadius:"8rpx",color:"#333",textAlign:"left",borderWidth:"0",width:"240rpx",lineHeight:"36rpx",fontSize:"24rpx",borderStyle:"solid"}},[e._v("积分："+e._s(e.user.jifen))]):e._e()],1)],1):e._e(),i("v-uni-view",{staticClass:"setting",style:{color:"#fff",fontSize:"32rpx"}},[i("v-uni-view",{staticClass:"cuIcon-settings"})],1)],1),i("v-uni-view",{staticClass:"list"},[e._l(e.menuList,(function(t){return i("v-uni-view",{key:t.roleName},e._l(t.backMenu,(function(r,n){return e.role==t.roleName?i("v-uni-view",{key:n},e._l(r.child,(function(t,r){return i("v-uni-view",{key:r},["yifahuodingdan"!=t.tableName&&"yituikuandingdan"!=t.tableName&&"yiquxiaodingdan"!=t.tableName&&"weizhifudingdan"!=t.tableName&&"yizhifudingdan"!=t.tableName&&"yiwanchengdingdan"!=t.tableName?i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(204, 255, 255, 1)",borderColor:"rgba(198, 181, 181, 1)",lineHeight:"80rpx",borderStyle:"solid solid solid solid ",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onPageTap("../"+t.tableName+"/list?userid="+e.user.id)}}},[i("v-uni-view",{staticClass:"text",style:{color:"#333",fontSize:"28rpx"}},[e._v(e._s(t.menu))]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 0, 0, 1)",fontSize:"28rpx"}})],1):e._e()],1)})),1):e._e()})),1)})),i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(204, 255, 255, 1)",borderColor:"rgba(198, 181, 181, 1)",lineHeight:"80rpx",borderStyle:"solid solid solid solid ",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../shop-recharge/recharge")}}},[i("v-uni-view",{staticClass:"text",style:{color:"#333",fontSize:"28rpx"}},[e._v("用户充值")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 0, 0, 1)",fontSize:"28rpx"}})],1),i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(204, 255, 255, 1)",borderColor:"rgba(198, 181, 181, 1)",lineHeight:"80rpx",borderStyle:"solid solid solid solid ",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../chat/chat")}}},[i("v-uni-view",{staticClass:"text",style:{color:"#333",fontSize:"28rpx"}},[e._v("客服")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 0, 0, 1)",fontSize:"28rpx"}})],1),i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(204, 255, 255, 1)",borderColor:"rgba(198, 181, 181, 1)",lineHeight:"80rpx",borderStyle:"solid solid solid solid ",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../shop-cart/shop-cart")}}},[i("v-uni-view",{staticClass:"text",style:{color:"#333",fontSize:"28rpx"}},[e._v("购物车")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 0, 0, 1)",fontSize:"28rpx"}})],1),i("v-uni-view",{staticClass:"li",style:{backgroundColor:"rgba(204, 255, 255, 1)",borderColor:"rgba(198, 181, 181, 1)",lineHeight:"80rpx",borderStyle:"solid solid solid solid ",borderWidth:"2rpx 2rpx 2rpx 2rpx"},attrs:{"hover-class":"hover"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageTap("../shop-order/shop-order")}}},[i("v-uni-view",{staticClass:"text",style:{color:"#333",fontSize:"28rpx"}},[e._v("我的订单")]),i("v-uni-view",{staticClass:"cuIcon-right",style:{color:"rgba(0, 0, 0, 1)",fontSize:"28rpx"}})],1)],2)],1)},a=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}))}}]);