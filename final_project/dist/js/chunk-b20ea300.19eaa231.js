(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b20ea300"],{"057f":function(t,e,a){var i=a("fc6a"),o=a("241c").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],n=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?n(t):o(i(t))}},1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[t._v(" Previous ")])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[t._v(" Next ")])])],2)])},o=[],r={data:function(){return{}},props:["pages"],methods:{updatePage:function(t){this.$emit("update",t)}}},s=r,n=a("2877"),c=Object(n["a"])(s,i,o,!1,null,null,null);e["a"]=c.exports},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"61bc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-5"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("h3",[t._v("商品列表")]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 text-right"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.openModal("new")}}},[t._v(" 建立新的產品 ")])]),a("div",{staticClass:"col-12 my-2"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped text-center"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.category))]),a("td",{staticClass:"align-middle"},[a("img",{staticStyle:{"max-width":"80px"},attrs:{src:e.imageUrl[0],alt:e.title}})]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.origin_price))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.price))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.enabled))]),a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.openModal("edit",e)}}},[t._v(" 編輯 ")])]),a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.openModal("delete",e)}}},[t._v(" 刪除 ")])])])})),0)])])])]),a("div",{staticClass:"row justify-content-center"},[a("pagination",{staticClass:"mt-3",attrs:{pages:t.pagination},on:{update:t.getProducts}})],1),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl"},[a("div",{staticClass:"modal-content"},[t._m(1),a("form",[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[t._l(5,(function(e){return a("div",{key:"img"+e,staticClass:"form-group"},[a("label",{attrs:{for:"'img' + i"}},[t._v("請輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[e-1],expression:"tempProduct.imageUrl[i - 1]"}],attrs:{id:"img"+e,type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[e-1]},on:{input:function(a){a.target.composing||t.$set(t.tempProduct.imageUrl,e-1,a.target.value)}}})])})),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.status.fileUploading?a("img",{staticStyle:{width:"20px"},attrs:{src:"https://www.intogif.com/resource/image/loading/spin.gif",alt:""}}):t._e()]),a("input",{ref:"file",staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl[0],alt:""}})],2),a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-12 mb-3"},[a("label",{attrs:{for:"productTitle"}},[t._v("產品名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"productTitle",placeholder:"請輸入產品名稱"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"productCategory"}},[t._v("產品分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"productCategory",placeholder:"請輸入產品分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"productUnit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"productUnit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"productOriginPrice"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"productOriginPrice",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"productPrice"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"productPrice",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-12 mb-6"},[a("label",{attrs:{for:"productContent"}},[t._v("產品說明")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"productContent",placeholder:"請輸入產品說明"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"col-md-12 mb-6"},[a("label",{attrs:{for:"productDescription"}},[t._v("產品資訊")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"productDescription",placeholder:"請輸入產品產品資訊"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"invalidCheck2"},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,"")>-1:t.tempProduct.enabled},on:{change:function(e){var a=t.tempProduct.enabled,i=e.target,o=!!i.checked;if(Array.isArray(a)){var r="",s=t._i(a,r);i.checked?s<0&&t.$set(t.tempProduct,"enabled",a.concat([r])):s>-1&&t.$set(t.tempProduct,"enabled",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.tempProduct,"enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"invalidCheck2"}},[t._v(" 是否上架 ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v(t._s(t.isNew?"新增":"儲存"))])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl"},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("p",[t._v("是否刪除商品 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" （注意！商品刪除則無法復原）")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteProduct}},[t._v("確認刪除")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分類")]),a("th",[t._v("產品圖")]),a("th",[t._v("產品名稱")]),a("th",[t._v("原價")]),a("th",[t._v("售價")]),a("th",[t._v("是否上架")]),a("th",[t._v("編輯")]),a("th",[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary"},[a("h5",{staticClass:"modal-title text-white font-weight-bold",attrs:{id:"exampleModalLabel"}},[t._v("新增產品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger"},[a("h5",{staticClass:"modal-title text-white font-weight-bold",attrs:{id:"exampleModalLabel"}},[t._v("刪除產品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=(a("99af"),a("5530")),s=a("1799"),n={components:{Pagination:s["a"]},data:function(){return{products:[],pagination:{},tempProduct:{imageUrl:[],options:{}},isNew:!1,isLoading:!1,status:{fileUploading:!1}}},props:["token"],mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e3cf317a-b68f-4629-9716-f0f4ec843e36","/admin/ec/products?page=").concat(e);this.$http.get(a).then((function(e){t.isLoading=!1,t.products=e.data.data,t.pagination=e.data.meta.pagination})).catch((function(t){console.log(t)}))},openModal:function(t,e){switch(t){case"new":this.isNew=!0,$("#productModal").modal("show");break;case"edit":this.isNew=!1,this.getOneProduct(e.id);break;case"delete":this.isNew=!1,this.tempProduct=Object(r["a"])({},e),$("#deleteModal").modal("show");break;default:this.isLoading=!1;break}},getOneProduct:function(t){var e=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e3cf317a-b68f-4629-9716-f0f4ec843e36","/admin/ec/product/").concat(t);this.$http.get(a).then((function(t){e.isLoading=!1,e.tempProduct=t.data.data,$("#productModal").modal("show")})).catch((function(t){e.isLoading=!1,console.log(t),alert("無法取得資料！請稍後再試！")}))},updateProduct:function(){var t=this;this.isLoading=!0;var e,a="".concat("https://course-ec-api.hexschool.io/api","/").concat("e3cf317a-b68f-4629-9716-f0f4ec843e36","/admin/ec/product");this.isNew?e="post":(a+="/".concat(this.tempProduct.id),e="patch"),this.$http[e](a,this.tempProduct).then((function(e){t.isLoading=!1,$("#productModal").modal("hide"),t.getProducts()})).catch((function(t){console.log(t),alert("產品更新失敗！請稍後再試！")}))},uploadFile:function(){var t=this;this.isLoading=!0;var e=document.querySelector("#customFile").files[0],a=document.querySelector("#customFile"),i=new FormData;i.append("file",e);var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("e3cf317a-b68f-4629-9716-f0f4ec843e36","/admin/storage");this.status.fileUploading=!0,this.$http.post(o,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log("$htp post: ",e),t.isLoading=!1,t.status.fileUploading=!1,200===e.status&&t.tempProduct.imageUrl.push(e.data.data.path),a.value="",alert("圖片上傳成功！")})).catch((function(e){console.log(e.response),t.isLoading=!1,t.status.fileUploading=!1,alert("圖片上傳失敗！")}))},deleteProduct:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("e3cf317a-b68f-4629-9716-f0f4ec843e36","/admin/ec/product/").concat(this.tempProduct.id);this.$http.delete(e).then((function(e){$("#deleteModal").modal("hide"),t.getProducts()})).catch((function(t){$("#deleteModal").modal("hide"),alert(t)}))}}},c=n,l=a("2877"),d=Object(l["a"])(c,i,o,!1,null,null,null);e["default"]=d.exports},"746f":function(t,e,a){var i=a("428f"),o=a("5135"),r=a("e538"),s=a("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});o(e,t)||s(e,t,{value:r.f(t)})}},a4d3:function(t,e,a){"use strict";var i=a("23e7"),o=a("da84"),r=a("d066"),s=a("c430"),n=a("83ab"),c=a("4930"),l=a("fdbf"),d=a("d039"),u=a("5135"),p=a("e8b5"),f=a("861d"),m=a("825a"),g=a("7b0b"),v=a("fc6a"),b=a("c04e"),h=a("5c6c"),y=a("7c73"),P=a("df75"),C=a("241c"),_=a("057f"),w=a("7418"),O=a("06cf"),x=a("9bf2"),k=a("d1e7"),j=a("9112"),$=a("6eeb"),S=a("5692"),N=a("f772"),L=a("d012"),M=a("90e3"),U=a("b622"),D=a("e538"),E=a("746f"),F=a("d44e"),T=a("69f3"),A=a("b727").forEach,J=N("hidden"),q="Symbol",I="prototype",Q=U("toPrimitive"),W=T.set,z=T.getterFor(q),B=Object[I],G=o.Symbol,H=r("JSON","stringify"),K=O.f,R=x.f,V=_.f,X=k.f,Y=S("symbols"),Z=S("op-symbols"),tt=S("string-to-symbol-registry"),et=S("symbol-to-string-registry"),at=S("wks"),it=o.QObject,ot=!it||!it[I]||!it[I].findChild,rt=n&&d((function(){return 7!=y(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,a){var i=K(B,e);i&&delete B[e],R(t,e,a),i&&t!==B&&R(B,e,i)}:R,st=function(t,e){var a=Y[t]=y(G[I]);return W(a,{type:q,tag:t,description:e}),n||(a.description=e),a},nt=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,a){t===B&&ct(Z,e,a),m(t);var i=b(e,!0);return m(a),u(Y,i)?(a.enumerable?(u(t,J)&&t[J][i]&&(t[J][i]=!1),a=y(a,{enumerable:h(0,!1)})):(u(t,J)||R(t,J,h(1,{})),t[J][i]=!0),rt(t,i,a)):R(t,i,a)},lt=function(t,e){m(t);var a=v(e),i=P(a).concat(mt(a));return A(i,(function(e){n&&!ut.call(a,e)||ct(t,e,a[e])})),t},dt=function(t,e){return void 0===e?y(t):lt(y(t),e)},ut=function(t){var e=b(t,!0),a=X.call(this,e);return!(this===B&&u(Y,e)&&!u(Z,e))&&(!(a||!u(this,e)||!u(Y,e)||u(this,J)&&this[J][e])||a)},pt=function(t,e){var a=v(t),i=b(e,!0);if(a!==B||!u(Y,i)||u(Z,i)){var o=K(a,i);return!o||!u(Y,i)||u(a,J)&&a[J][i]||(o.enumerable=!0),o}},ft=function(t){var e=V(v(t)),a=[];return A(e,(function(t){u(Y,t)||u(L,t)||a.push(t)})),a},mt=function(t){var e=t===B,a=V(e?Z:v(t)),i=[];return A(a,(function(t){!u(Y,t)||e&&!u(B,t)||i.push(Y[t])})),i};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),a=function(t){this===B&&a.call(Z,t),u(this,J)&&u(this[J],e)&&(this[J][e]=!1),rt(this,e,h(1,t))};return n&&ot&&rt(B,e,{configurable:!0,set:a}),st(e,t)},$(G[I],"toString",(function(){return z(this).tag})),$(G,"withoutSetter",(function(t){return st(M(t),t)})),k.f=ut,x.f=ct,O.f=pt,C.f=_.f=ft,w.f=mt,D.f=function(t){return st(U(t),t)},n&&(R(G[I],"description",{configurable:!0,get:function(){return z(this).description}}),s||$(B,"propertyIsEnumerable",ut,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),A(P(at),(function(t){E(t)})),i({target:q,stat:!0,forced:!c},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var a=G(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!nt(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!n},{create:dt,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:pt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:d((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(g(t))}}),H){var gt=!c||d((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,a){var i,o=[t],r=1;while(arguments.length>r)o.push(arguments[r++]);if(i=e,(f(e)||void 0!==t)&&!nt(t))return p(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!nt(e))return e}),o[1]=e,H.apply(null,o)}})}G[I][Q]||j(G[I],Q,G[I].valueOf),F(G,q),L[J]=!0},dbb4:function(t,e,a){var i=a("23e7"),o=a("83ab"),r=a("56ef"),s=a("fc6a"),n=a("06cf"),c=a("8418");i({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,a,i=s(t),o=n.f,l=r(i),d={},u=0;while(l.length>u)a=o(i,e=l[u++]),void 0!==a&&c(d,e,a);return d}})},e439:function(t,e,a){var i=a("23e7"),o=a("d039"),r=a("fc6a"),s=a("06cf").f,n=a("83ab"),c=o((function(){s(1)})),l=!n||c;i({target:"Object",stat:!0,forced:l,sham:!n},{getOwnPropertyDescriptor:function(t,e){return s(r(t),e)}})},e538:function(t,e,a){var i=a("b622");e.f=i}}]);
//# sourceMappingURL=chunk-b20ea300.19eaa231.js.map