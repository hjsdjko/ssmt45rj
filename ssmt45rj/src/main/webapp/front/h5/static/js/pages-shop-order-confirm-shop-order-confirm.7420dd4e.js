(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-order-confirm-shop-order-confirm"],{"0187":function(e,t,r){"use strict";var n=r("fb05"),s=r.n(n);s.a},"16e4":function(e,t,r){"use strict";var n,s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",[1!=e.seat?r("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddressTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title"},[e._v("地址")]),r("v-uni-view",[r("v-uni-view",[e._v(e._s(e.address.name)+" "+e._s(e.address.phone))]),r("v-uni-view",[e._v(e._s(e.address.address))])],1)],1):e._e(),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-view",{staticClass:"title"},[e._v("购买清单")])],1),e._l(e.orderGoods,(function(t,n){return r("v-uni-view",{key:n,staticClass:"cu-form-group"},[r("v-uni-image",{staticClass:"avator",attrs:{src:t.picture,mode:""}}),r("v-uni-view",{staticClass:"title"},[r("v-uni-view",[e._v(e._s(t.goodname))]),1!=e.seat?r("v-uni-view",[e._v("x"+e._s(t.buynumber)),1==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v("￥"+e._s(t.price))]):e._e(),2==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v(e._s(t.price)+"积分")]):e._e()],1):r("v-uni-view",[e._v(e._s(t.address)+"号"),1==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v("￥"+e._s(t.price))]):e._e(),2==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v(e._s(t.price)+"积分")]):e._e()],1)],1)],1)})),r("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onAddressTap.apply(void 0,arguments)}}},[1==e.type?r("v-uni-view",{staticClass:"title"},[e._v("总价")]):e._e(),2==e.type?r("v-uni-view",{staticClass:"title"},[e._v("总积分")]):e._e(),r("v-uni-view",[1==e.type?r("v-uni-text",[e._v("￥"+e._s(e.total))]):e._e(),2==e.type?r("v-uni-text",[e._v(e._s(e.total)+"积分")]):e._e()],1)],1)],2),r("v-uni-view",{staticClass:"padding",staticStyle:{"text-align":"center"}},[1==e.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap()}}},[e._v("确认支付")]):e._e(),2==e.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap()}}},[e._v("确认兑换")]):e._e()],1)],1)},a=[];r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))},"83fd":function(e,t,r){"use strict";r.r(t);var n=r("daab"),s=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},b1b8:function(e,t,r){"use strict";r.r(t);var n=r("16e4"),s=r("83fd");for(var a in s)"default"!==a&&function(e){r.d(t,e,(function(){return s[e]}))}(a);r("0187");var i,o=r("f0c5"),u=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"02ab9647",null,!1,n["a"],i);t["default"]=u.exports},d1d0:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.avator[data-v-02ab9647]{width:%?150?%;height:%?150?%;margin:%?20?% 0}',""]),e.exports=t},daab:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("28a5"),r("96cf");var s=n(r("3b8d")),a={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(){var e=(0,s.default)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.type=t.type,this.seat=t.seat,this.orderGoods=uni.getStorageSync("orderGoods"),1!=this.seat)for(r=0;r<this.orderGoods.length;r++)0==this.total?this.total=parseFloat(this.orderGoods[r].price)*this.orderGoods[r].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[r].price)*this.orderGoods[r].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onShow:function(){var e=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(r=e.sent,this.user=r.data,1==this.seat){e.next=15;break}if(n=uni.getStorageSync("address"),!n||this.user.id!=this.address.userid){e.next=11;break}this.address=uni.getStorageSync("address"),e.next=15;break;case 11:return e.next=13,this.$api.defaultAddress(this.user.id);case 13:r=e.sent,this.address=r.data;case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{onSubmitTap:function(){var e=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,r=uni.getStorageSync("nowTable"),uni.showModal({title:"提示",content:"是否确认支付",success:function(){var e=(0,s.default)(regeneratorRuntime.mark((function e(n){var s,a,i,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=42;break}if(s=t.type,a=!0,1!=s){e.next=10;break}if(!(t.user.money-t.total<0)){e.next=8;break}return t.$utils.msg("余额不足，请先充值"),a=!1,e.abrupt("return");case 8:e.next=15;break;case 10:if(2!=s){e.next=15;break}if(!(t.user.jifen-t.total<0)){e.next=15;break}return t.$utils.msg("积分不足，兑换商品失败"),a=!1,e.abrupt("return");case 15:i=0;case 16:if(!(i<t.orderGoods.length)){e.next=28;break}return o={orderid:t.$utils.genTradeNo(),tablename:t.orderGoods[i].tablename,userid:t.user.id,goodid:t.orderGoods[i].goodid,goodname:t.orderGoods[i].goodname,picture:t.orderGoods[i].picture,buynumber:t.orderGoods[i].buynumber,discountprice:t.orderGoods[i].price,price:t.orderGoods[i].price,total:t.orderGoods[i].price*t.orderGoods[i].buynumber,discounttotal:t.orderGoods[i].price*t.orderGoods[i].buynumber,type:s,address:t.address.address,status:"已支付"},1==t.seat&&(o["address"]=t.address,u=t.address.split(",").length,o["buynumber"]=u,o["total"]=t.orderGoods[i].price*u,o["discounttotal"]=t.orderGoods[i].price*u),e.next=21,t.$api.add("orders",o);case 21:if(!t.orderGoods[i].id){e.next=25;break}return e.next=24,t.$api.del("cart",JSON.stringify([t.orderGoods[i].id]));case 24:uni.removeStorageSync("cart".concat(t.orderGoods[i].goodid).concat(t.user.id));case 25:i++,e.next=16;break;case 28:if(!a){e.next=42;break}if(1!=s){e.next=37;break}return t.$utils.msgBack("支付成功"),t.user.money=t.user.money-t.total,(t.user.jifen||0==t.user.jifen)&&(t.user.jifen=parseFloat(t.user.jifen)+parseFloat(t.total)),e.next=35,t.$api.update(r,t.user);case 35:e.next=42;break;case 37:if(2!=s){e.next=42;break}return t.$utils.msgBack("兑换成功"),t.user.jifen=t.user.jifen-t.total,e.next=42,t.$api.update(r,t.user);case 42:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=a},fb05:function(e,t,r){var n=r("d1d0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=r("4f06").default;s("b812bcf6",n,!0,{sourceMap:!1,shadowMode:!1})}}]);