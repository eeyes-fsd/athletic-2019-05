(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin-home"],{"8c6e":function(t,e,n){"use strict";var a=n("9d3c"),s=n.n(a);s.a},"9d3c":function(t,e,n){},c732:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[n("v-select",{attrs:{items:t.units,label:"选择单元"},on:{input:t.chooseUnit}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.games,"hide-actions":"","disable-initial-sort":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.id)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.name)+"\n      ")]),n("td",{staticClass:"text-xs-right column-begin-at"},[t._v("\n        "+t._s(e.item.begin_at)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.participants)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.groups)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[n("v-btn",{attrs:{color:"info"},on:{click:function(n){return t.handleEdit(e.item)}}},[t._v("\n          编辑\n        ")])],1)]}}])})],1)},s=[],i=(n("6b54"),n("96cf"),n("3b8d")),r=n("cebc"),c=n("365c"),u=n("1940"),l=n.n(u),o=n("db49"),d=n("2f62"),m={name:"Home",data:function(){return{units:o["a"],headers:[{text:"序号",align:"left",sortable:!1,value:"id"},{text:"项目名称",value:"name"},{text:"比赛时间",class:"column-begin-at",value:"begin_at"},{text:"人数",value:"participants"},{text:"组数",value:"groups"},{text:"操作",value:"operate"}],games:[]}},computed:{unitId:function(){var t=this.$route.query.unit;return t&&parseInt(t)||null}},mounted:function(){this.fetchGames(this.unitId)},methods:Object(r["a"])({},Object(d["b"])({setAdminEditGame:"setAdminEditGame"}),{fetchGames:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:null,t.prev=1,t.next=4,c["a"].getGameIndex(e);case 4:this.games=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.$handleError(t.t0);case 10:null===e?this.$router.push({name:"admin_index"}):this.$router.push({name:"admin_index",query:{unit:e.toString()}});case 11:case"end":return t.stop()}},t,this,[[1,7]])}));function e(){return t.apply(this,arguments)}return e}(),chooseUnit:function(t){var e=o["a"].indexOf(t);e>0?this.fetchGames(e):0===e?this.fetchGames(null):l()("错误","页面错误，请刷新重试","error")},handleEdit:function(t){this.setAdminEditGame(t);var e={game:t.id.toString()};this.$router.push({name:"admin",query:e})}})},h=m,f=(n("8c6e"),n("2877")),v=n("6544"),x=n.n(v),p=n("8336"),b=n("8fea"),g=n("0e8f"),_=n("b56d"),w=Object(f["a"])(h,a,s,!1,null,null,null);e["default"]=w.exports;x()(w,{VBtn:p["a"],VDataTable:b["a"],VFlex:g["a"],VSelect:_["a"]})}}]);