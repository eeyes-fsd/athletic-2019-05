(function(t){function e(e){for(var r,a,u=e[0],o=e[1],c=e[2],l=0,p=[];l<u.length;l++)a=u[l],s[a]&&p.push(s[a][0]),s[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s={app:0},i=[];function u(t){return o.p+"js/"+({admin:"admin"}[t]||t)+"."+{admin:"ab03404c"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={admin:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({admin:"admin"}[t]||t)+"."+{admin:"51b66f1f"}[t]+".css",s=o.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===s))return e()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===r||l===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],m.parentNode.removeChild(m),n(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)}).then(function(){a[t]=0}));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=s[t]=[e,n]});e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=u(t),c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}s[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("1356"),a=n.n(r);a.a},1356:function(t,e,n){},"365c":function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"getGameIndex",function(){return u}),n.d(r,"getGameDetails",function(){return c}),n.d(r,"uploadGameDetails",function(){return p});n("96cf");var a=n("3b8d"),s=[{id:1,name:"game1",begin_at:"2019-05-19 10:00:00",participants:20,groups:5},{id:2,name:"game2",begin_at:"2019-05-19 13:00:00",participants:20,groups:5}],i=[{group:1,no:1940,group_rank:1,name:"AAA",team:"西安交通大学",performance:3.03,remarks:null},{group:2,no:1940,group_rank:1,name:"DDD",team:"西安交通大学",performance:3.04,remarks:null},{group:2,no:1941,group_rank:2,name:"BBB",team:"西安交通大学",performance:3.05,remarks:null},{group:2,no:1941,group_rank:2,name:"EEE",team:"西安交通大学",performance:3.06,remarks:null},{group:2,no:1939,group_rank:3,name:"CCC",team:"西安交通大学",performance:3.07,remarks:null},{group:2,no:1939,group_rank:3,name:"FFF",team:"西安交通大学",performance:3.08,remarks:null}];function u(){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=n.length>0&&void 0!==n[0]?n[0]:null,null!==e){t.next=5;break}return t.abrupt("return",s);case 5:return t.abrupt("return",s.filter(function(t){return t.id===e}));case 6:case"end":return t.stop()}},t)})),o.apply(this,arguments)}function c(t){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=r.length>1&&void 0!==r[1]?r[1]:null,null!==n){t.next=5;break}return t.abrupt("return",i);case 5:return t.abrupt("return",i.filter(function(t){return t.group===n}));case 6:case"end":return t.stop()}},t)})),l.apply(this,arguments)}function p(t){return new Promise(function(t){setTimeout(t,2500)})}e["a"]=r},"4e69":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("c3b0"),n("cd69"),n("da64");var r=n("2b0e"),a=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[n("v-select",{attrs:{items:t.units,label:"Standard"},on:{input:t.chooseUnit}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.games,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.id)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[n("router-link",{attrs:{to:{name:"game",params:{id:e.item.id},query:{groups:e.item.groups}}}},[t._v("\n          "+t._s(e.item.name)+"\n        ")])],1),n("td",{staticClass:"text-xs-right column-begin-at"},[t._v("\n        "+t._s(e.item.begin_at)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.participants)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.groups)+"\n      ")])]}}])})],1)},i=[],u=(n("6b54"),n("96cf"),n("3b8d")),o=n("365c"),c=n("1940"),l=n.n(c),p=["全部","第一单元","第二单元","第三单元"],m={name:"Home",data:function(){return{units:p,headers:[{text:"序号",align:"left",sortable:!1,value:"id"},{text:"项目名称",value:"name"},{text:"比赛时间",class:"column-begin-at",value:"begin_at"},{text:"人数",value:"participants"},{text:"组数",value:"groups"}],games:[]}},computed:{unitId:function(){var t=this.$route.query.unit;return t&&parseInt(t)||null}},mounted:function(){this.fetchGames(this.unitId)},methods:{fetchGames:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:null,t.next=3,o["a"].getGameIndex(e);case 3:this.games=t.sent,null===e?this.$router.push({name:"home"}):this.$router.push({name:"home",query:{unit:e.toString()}});case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),chooseUnit:function(t){var e=p.indexOf(t);e>0?this.fetchGames(e):0===e?this.fetchGames(null):l()("页面错误，请刷新重试")}}},f=m,d=(n("cccb"),n("2877")),h=n("6544"),g=n.n(h),v=n("8fea"),b=n("0e8f"),x=n("b56d"),_=Object(d["a"])(f,s,i,!1,null,null,null),y=_.exports;g()(_,{VDataTable:v["a"],VFlex:b["a"],VSelect:x["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[n("v-select",{attrs:{items:t.groupList,label:"Standard"},on:{input:t.chooseGroup}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.parsedDetails,"hide-actions":"","disable-initial-sort":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.group)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.no)+"\n      ")]),n("td",{staticClass:"text-xs-right column-begin-at"},[t._v("\n        "+t._s(e.item.re_rank)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.name)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.team)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.performance)+"\n      ")]),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.remarks)+"\n      ")])]}}])})],1)},w=[],C=n("cebc"),S={name:"Game",data:function(){return{headers:[{text:"组别",sortable:!1,value:"group"},{text:"编号",value:"no"},{text:"小组名次",value:"group_rank"},{text:"姓名",value:"name"},{text:"学校",value:"team"},{text:"成绩",value:"performance"},{text:"备注",value:"remarks"}],details:[]}},computed:{groupList:function(){for(var t=["全部"],e=this.groups||0,n=1;n<=e;n++)t.push(n.toString());return t},gameId:function(){var t=this.$route.params.id;return t&&parseInt(t)||null},groupId:function(){var t=this.$route.query.group;return t&&parseInt(t)||null},groups:function(){var t=this.$route.query.groups;return t&&parseInt(t)||null},parsedDetails:function(){for(var t=[],e=0;e<this.details.length;e++){var n=this.details[e],r=Object(C["a"])({},n);r.re_rank=e+1,t.push(r)}return t}},mounted:function(){this.fetchDetails(this.gameId,this.groupId)},methods:{fetchDetails:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,s=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:null,t.next=3,o["a"].getGameDetails(e,n);case 3:this.details=t.sent,r={id:e.toString()},a={},this.groups&&(a.groups=this.groups.toString()),null!==n&&(a.group=n.toString()),this.$router.push({name:"game",params:r,query:a});case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),chooseGroup:function(t){var e=this.groupList.indexOf(t);e>0?this.fetchDetails(this.gameId,e):0===e?this.fetchDetails(this.gameId,null):l()("页面错误，请刷新重试")}}},O=S,j=Object(d["a"])(O,k,w,!1,null,null,null),D=j.exports;g()(j,{VDataTable:v["a"],VFlex:b["a"],VSelect:x["a"]}),r["a"].use(a["a"]);var I=new a["a"]({routes:[{path:"/",name:"home",component:y},{path:"/game/:id",name:"game",component:D},{path:"/admin",name:"admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))}}]}),E=n("2f62");r["a"].use(E["a"]);var $=new E["a"].Store({state:{},mutations:{},actions:{}}),A=n("bb71"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{staticStyle:{width:"100vw"},attrs:{app:""}},[n("v-btn",{staticClass:"headline text-uppercase",attrs:{flat:""},on:{click:function(e){return t.$router.push({name:"home"})}}},[n("span",{staticClass:"mr-2"},[t._v("首页")])]),n("v-spacer"),n("v-btn",{attrs:{flat:""},on:{click:function(e){return t.$router.go(-1)}}},[n("span",{staticClass:"mr-2"},[t._v("返回")])])],1),n("v-content",[n("router-view")],1),n("v-footer",{staticClass:"app-footer"},[n("router-link",{attrs:{to:{name:"admin"}}},[t._v("\n      管理端入口\n    ")]),n("p",[t._v("Copyright©2002-2018 eeYes.net All Rights Reserved 版权所有 陕ICP备030061号")])],1)],1)},V=[],P={name:"App",data:function(){return{}}},T=P,R=(n("034f"),n("7496")),q=n("8336"),B=n("549c"),F=n("553a"),L=n("9910"),N=n("71d9"),M=Object(d["a"])(T,G,V,!1,null,null,null),U=M.exports;g()(M,{VApp:R["a"],VBtn:q["a"],VContent:B["a"],VFooter:F["a"],VSpacer:L["a"],VToolbar:N["a"]}),r["a"].use(A["a"],{iconfont:"md"}),new r["a"]({router:I,store:$,render:function(t){return t(U)}}).$mount("#app")},c3b0:function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("4e69"),a=n.n(r);a.a},cd69:function(t,e,n){}});
//# sourceMappingURL=app.0647c8bd.js.map