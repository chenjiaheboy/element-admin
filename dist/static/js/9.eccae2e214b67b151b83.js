webpackJsonp([9],{FUhY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n("lbHh"),o=n.n(l),s={data:function(){return{}},computed:{isCollapse:function(){return this.$store.state.sys.isCollapse},menu:function(){return this.$store.state.sys.menu}},methods:{handlerIsCollapse:function(){this.$store.commit("IS_COLLAPSE")},handleOpen:function(e,t){console.log(e,t)},handleSelect:function(e){this.$router.push(e)},handleClose:function(e,t){console.log(e,t)},logout:function(){o.a.remove("userid"),window.location.reload()}},mounted:function(){}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-aside",{staticClass:"horizontal-collapse-transition",style:{width:e.isCollapse?"64px":"200px"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","default-active":"/index",collapse:e.isCollapse},on:{select:e.handleSelect,open:e.handleOpen,close:e.handleClose}},e._l(e.menu,function(t,l){return n("el-submenu",{key:l,attrs:{index:l+"@"}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("i",{staticClass:"el-icon iconfont",class:t.meta.icon}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))])]),e._v(" "),e._l(t.children,function(t){return e.menu?n("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v(e._s(t.meta.title))]):e._e()})],2)}))],1),e._v(" "),n("el-container",[n("el-header",[n("v-icon",{staticClass:"menu",attrs:{name:"icon-xuanxiang"},nativeOn:{click:function(t){return e.handlerIsCollapse(t)}}}),e._v(" "),n("v-icon",{staticClass:"logout",attrs:{name:"icon-tuichu1"},nativeOn:{click:function(t){return e.logout(t)}}})],1),e._v(" "),n("el-main",[n("router-view")],1),e._v(" "),n("el-footer",[e._v("Copyright © 2018 Artiely")])],1)],1)},staticRenderFns:[]};var a=n("VU/8")(s,i,!1,function(e){n("m2Hl")},null,null);t.default=a.exports},m2Hl:function(e,t){}});
//# sourceMappingURL=9.eccae2e214b67b151b83.js.map