(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abfd0e24"],{"1dde":function(e,t,r){var a=r("d039"),l=r("b622"),c=r("2d00"),s=l("species");e.exports=function(e){return c>=51||!a((function(){var t=[],r=t.constructor={};return r[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,r){var a=r("861d"),l=r("e8b5"),c=r("b622"),s=c("species");e.exports=function(e,t){var r;return l(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!l(r.prototype)?a(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},8418:function(e,t,r){"use strict";var a=r("c04e"),l=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var s=a(t);s in e?l.f(e,s,c(0,r)):e[s]=r}},"99af":function(e,t,r){"use strict";var a=r("23e7"),l=r("d039"),c=r("e8b5"),s=r("861d"),o=r("7b0b"),n=r("50c4"),i=r("8418"),d=r("65f0"),u=r("1dde"),m=r("b622"),b=r("2d00"),f=m("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",O=b>=51||!l((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),j=u("concat"),v=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:c(e)},g=!O||!j;a({target:"Array",proto:!0,forced:g},{concat:function(e){var t,r,a,l,c,s=o(this),u=d(s,0),m=0;for(t=-1,a=arguments.length;t<a;t++)if(c=-1===t?s:arguments[t],v(c)){if(l=n(c.length),m+l>h)throw TypeError(p);for(r=0;r<l;r++,m++)r in c&&i(u,m,c[r])}else{if(m>=h)throw TypeError(p);i(u,m++,c)}return u.length=m,u}})},b0c0:function(e,t,r){var a=r("83ab"),l=r("9bf2").f,c=Function.prototype,s=c.toString,o=/^\s*function ([^ (]*)/,n="name";a&&!(n in c)&&l(c,n,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(e){return""}}})},cf2a:function(e,t,r){"use strict";r.r(t);r("b0c0");var a=r("7a23"),l={class:"container py-5"},c={class:"row"},s=Object(a["h"])("ol",{class:"form-row text-center pl-0 d-flex",style:{"list-style":"none"}},[Object(a["h"])("li",{class:"col-md-4"},[Object(a["h"])("div",{class:"alert alert-dark rounded-pill mb-0 ",role:"alert"}," 1.確認訂購商品 ")]),Object(a["h"])("li",{class:"col-md-4"},[Object(a["h"])("div",{class:"alert alert-info rounded-pill mb-0 ",role:"alert"}," 2.訂購人資訊填寫 ")]),Object(a["h"])("li",{class:"col-md-4"},[Object(a["h"])("div",{class:"alert alert-light rounded-pill mb-0",role:"alert"}," 3.完成 ")])],-1),o={class:"my-5 row justify-content-center"},n={class:"mb-3"},i=Object(a["h"])("label",{for:"email",class:"form-label"},[Object(a["g"])("Email"),Object(a["h"])("span",{class:"text-danger ms-2"},"(必填)")],-1),d={class:"mb-3"},u=Object(a["h"])("label",{for:"name",class:"form-label"},[Object(a["g"])("收件人姓名"),Object(a["h"])("span",{class:"text-danger ms-2"},"(必填)")],-1),m={class:"mb-3"},b=Object(a["h"])("label",{for:"tel",class:"form-label"},[Object(a["g"])("收件人電話"),Object(a["h"])("span",{class:"text-danger ms-2"},"(必填)")],-1),f={class:"mb-3"},h=Object(a["h"])("label",{for:"address",class:"form-label"},[Object(a["g"])("收件人地址"),Object(a["h"])("span",{class:"text-danger ms-2"},"(必填)")],-1),p={class:"mb-3"},O=Object(a["h"])("label",{for:"message",class:"form-label"},"留言",-1),j=Object(a["h"])("div",{class:"text-end"},[Object(a["h"])("button",{type:"submit",class:"btn btn-secondary"},"送出訂單")],-1);function v(e,t,r,v,g,y){var x=Object(a["A"])("Field"),w=Object(a["A"])("error-message"),V=Object(a["A"])("Form");return Object(a["t"])(),Object(a["e"])("div",l,[Object(a["h"])("div",c,[s,Object(a["h"])("div",o,[Object(a["h"])(V,{class:"col-md-6",ref:"form",onSubmit:y.sendOrder},{default:Object(a["K"])((function(e){var r=e.errors;return[Object(a["h"])("div",n,[i,Object(a["h"])(x,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":r["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:g.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.form.user.email=e})},null,8,["class","modelValue"]),Object(a["h"])(w,{name:"email",class:"invalid-feedback"})]),Object(a["h"])("div",d,[u,Object(a["h"])(x,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":r["姓名"]}],placeholder:"請輸入 姓名",rules:"required",modelValue:g.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.form.user.name=e})},null,8,["class","modelValue"]),Object(a["h"])(w,{name:"姓名",class:"invalid-feedback"})]),Object(a["h"])("div",m,[b,Object(a["h"])(x,{id:"tel",name:"電話",type:"text",class:["form-control",{"is-invalid":r["電話"]}],placeholder:"請輸入 手機號碼",rules:"required",modelValue:g.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.form.user.tel=e})},null,8,["class","modelValue"]),Object(a["h"])(w,{name:"電話",class:"invalid-feedback"})]),Object(a["h"])("div",f,[h,Object(a["h"])(x,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":r["地址"]}],placeholder:"請輸入 地址",rules:"required",modelValue:g.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return g.form.user.address=e})},null,8,["class","modelValue"]),Object(a["h"])(w,{name:"地址",class:"invalid-feedback"})]),Object(a["h"])("div",p,[O,Object(a["L"])(Object(a["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=function(e){return g.form.message=e})},null,512),[[a["G"],g.form.message]])]),j]})),_:1},8,["onSubmit"])])])])}r("99af");var g={data:function(){return{form:{user:{email:"",tel:"",address:""},message:""}}},methods:{sendOrder:function(){var e=this,t=this.form;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("akihico","/order"),{data:t}).then((function(t){t.data.success?(e.isLoading=!1,alert(t.data.message),e.$refs.form.resetForm()):alert(t.data.message)})).catch((function(e){console.log(e)}))}}};g.render=v;t["default"]=g},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}}}]);
//# sourceMappingURL=chunk-abfd0e24.0e16687f.js.map