(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-649338e0"],{"1dde":function(t,e,c){var n=c("d039"),a=c("b622"),o=c("2d00"),r=a("species");t.exports=function(t){return o>=51||!n((function(){var e=[],c=e.constructor={};return c[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,c){var n=c("861d"),a=c("e8b5"),o=c("b622"),r=o("species");t.exports=function(t,e){var c;return a(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?n(c)&&(c=c[r],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var n=c("c04e"),a=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var r=n(e);r in t?a.f(t,r,o(0,c)):t[r]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),a=c("d039"),o=c("e8b5"),r=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),h=c("b622"),b=c("2d00"),p=h("isConcatSpreadable"),f=9007199254740991,O="Maximum allowed index exceeded",j=b>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=d("concat"),v=function(t){if(!r(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},m=!j||!g;n({target:"Array",proto:!0,forced:m},{concat:function(t){var e,c,n,a,o,r=i(this),d=u(r,0),h=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?r:arguments[e],v(o)){if(a=s(o.length),h+a>f)throw TypeError(O);for(c=0;c<a;c++,h++)c in o&&l(d,h,o[c])}else{if(h>=f)throw TypeError(O);l(d,h++,o)}return d.length=h,d}})},b789:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=Object(n["h"])("div",{class:"container py-5"},[Object(n["h"])("div",{class:"row"},[Object(n["h"])("ol",{class:"text-center pl-0 d-flex",style:{"list-style":"none"}},[Object(n["h"])("li",{class:"col-md-4"},[Object(n["h"])("div",{class:"alert alert-info rounded-pill mb-0 ",role:"alert"}," 1.確認訂購商品 ")]),Object(n["h"])("li",{class:"col-md-4"},[Object(n["h"])("div",{class:"alert alert-light rounded-pill mb-0 ",role:"alert"}," 2.訂購人資訊填寫 ")]),Object(n["h"])("li",{class:"col-md-4"},[Object(n["h"])("div",{class:"alert alert-light rounded-pill mb-0",role:"alert"}," 3.完成 ")])])])],-1),o=Object(n["h"])("h2",{class:"text-center mb-5"},"購物車列表",-1),r={class:"text-end"},i={class:"table align-middle"},s=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th"),Object(n["h"])("th",null,"品名"),Object(n["h"])("th",{style:{width:"150px"}},"數量/單位"),Object(n["h"])("th",null,"單價"),Object(n["h"])("th",{class:"text-end"},"小計")])],-1),l={class:"input-group input-group-sm "},u={class:"input-group-text",id:"basic-addon2"},d={class:"text-end"},h=Object(n["h"])("td",{colspan:"4",class:"text-end h6"},"總計",-1),b={class:"text-end h6"},p={class:"d-flex justify-content-end"};function f(t,e,c,f,O,j){var g=Object(n["A"])("loading");return Object(n["t"])(),Object(n["e"])(n["a"],null,[a,o,Object(n["h"])(g,{active:O.isLoading},null,8,["active"]),Object(n["h"])("div",r,[Object(n["h"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[1]||(e[1]=function(){return j.delCart&&j.delCart.apply(j,arguments)})},"清空購物車")]),Object(n["h"])("table",i,[s,Object(n["h"])("tbody",null,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(O.cart.carts,(function(t){return Object(n["t"])(),Object(n["e"])("tr",{key:t.id},[Object(n["h"])("td",null,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return j.delItem(t.id)}}," X ",8,["onClick"])]),Object(n["h"])("td",null,Object(n["D"])(t.product.title),1),Object(n["h"])("td",null,[Object(n["h"])("div",l,[Object(n["L"])(Object(n["h"])("input",{type:"number",min:"1",onChange:function(e){return j.updateCart(t)},"onUpdate:modelValue":function(e){return t.qty=e},class:"form-control"},null,40,["onChange","onUpdate:modelValue"]),[[n["G"],t.qty,void 0,{number:!0}]]),Object(n["h"])("span",u,Object(n["D"])(t.product.unit),1)])]),Object(n["h"])("td",null,Object(n["D"])(t.product.price),1),Object(n["h"])("td",d,Object(n["D"])(t.total),1)])})),128))]),Object(n["h"])("tfoot",null,[Object(n["h"])("tr",null,[h,Object(n["h"])("td",b,Object(n["D"])(O.cart.total),1)])])]),Object(n["h"])("div",p,[Object(n["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return j.toOder&&j.toOder.apply(j,arguments)})},"確認訂購")])],64)}c("99af");var O={data:function(){return{cart:[],isLoading:!1}},methods:{getCart:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("akihico","/cart")).then((function(e){e.data.success?(t.cart=e.data.data,t.isLoading=!1):alert(e.data.message)})).catch((function(t){console.log(t)}))},delItem:function(t){var e=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("akihico","/cart/").concat(t)).then((function(t){t.data.success?(e.isLoading=!1,alert(t.data.message),e.getCart()):alert(t.data.message)})).catch((function(t){console.log(t)}))},delCart:function(){var t=this;this.isLoading=!0,this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("akihico","/carts")).then((function(e){e.data.success?(t.isLoading=!1,alert(e.data.message),t.getCart()):alert(e.data.message)})).catch((function(t){console.log(t)}))},updateCart:function(t){var e=this,c={product_id:t.product.id,qty:t.qty};this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("akihico","/cart/").concat(t.id),{data:c}).then((function(t){t.data.success?(alert(t.data.message),e.getCart()):alert(t.data.message)})).catch((function(t){console.log(t)}))},toOder:function(){var t=this;if(0===this.cart.carts.length)return alert("購物車不能是空的！"),void setTimeout((function(){t.$router.push("/products")}),1e3);this.$router.push("/order")}},mounted:function(){this.getCart()}};O.render=f;e["default"]=O},e8b5:function(t,e,c){var n=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-649338e0.4839c29d.js.map