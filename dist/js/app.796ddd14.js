(function(e){function t(t){for(var r,o,l=t[0],u=t[1],i=t[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container"};function a(e,t,n,a,o,l){var u=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])("div",c,[Object(r["g"])(u)])}n("ac1f"),n("5319");var o=n("6c02"),l=n("2591"),u={setup:function(){var e=Object(o["d"])(),t=Object(o["c"])();Object(r["n"])((function(){l["a"].auth().onAuthStateChanged((function(n){n?"/login"!=t.path&&"/register"!=t.path||e.replace("/"):e.replace("/login")}))}))}},i=n("6b0d"),s=n.n(i);const b=s()(u,[["render",a]]);var d=b;n("b0c0");function m(e,t,n,c,a,o){var l=Object(r["w"])("UserCreate"),u=Object(r["w"])("UserList");return Object(r["r"])(),Object(r["d"])("div",null,[Object(r["e"])("h1",null,"welcome, "+Object(r["y"])(c.name),1),Object(r["e"])("button",{class:"logout",onClick:t[0]||(t[0]=function(){return c.Logout&&c.Logout.apply(c,arguments)})},"Logout"),Object(r["g"])(l),Object(r["g"])(u)])}n("1276");var p={class:"card card-body mt-4"},O={class:"form-group"},f=Object(r["e"])("label",null,"Marca",-1),j={class:"form-group mt-3"},v=Object(r["e"])("label",null,"Modelo",-1),h={class:"form-group mt-3"},g=Object(r["e"])("label",null,"Estado del servicio",-1),y={class:"form-group mt-3"},w=Object(r["e"])("label",null,"Codigo de gestion",-1),x=Object(r["e"])("button",{type:"submit",class:"btn btn-success mt-3"}," Create Solicitud de carro ",-1);function k(e,t,n,c,a,o){return Object(r["r"])(),Object(r["d"])("div",p,[Object(r["e"])("form",{onSubmit:t[4]||(t[4]=Object(r["E"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[Object(r["e"])("div",O,[f,Object(r["D"])(Object(r["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.brand=e}),class:"form-control",required:""},null,512),[[r["A"],c.form.brand]])]),Object(r["e"])("div",j,[v,Object(r["D"])(Object(r["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.model=e}),class:"form-control",type:"text",required:""},null,512),[[r["A"],c.form.model]])]),Object(r["e"])("div",h,[g,Object(r["D"])(Object(r["e"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.status=e}),class:"form-control",type:"text",required:""},null,512),[[r["A"],c.form.status]])]),Object(r["e"])("div",y,[w,Object(r["D"])(Object(r["e"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.form.code=e}),class:"form-control",type:"text",required:""},null,512),[[r["A"],c.form.code]])]),x],32)])}var E=n("5530"),S=n("1da1"),C=(n("96cf"),n("d81d"),{apiKey:"AIzaSyDHIcAeQwnS8suOfAj0THmYwhWFIyy0eMs",authDomain:"virtual-mechanical-eb0a0.firebaseapp.com",projectId:"virtual-mechanical-eb0a0",storageBucket:"virtual-mechanical-eb0a0.appspot.com",messagingSenderId:"795499254641",appId:"1:795499254641:web:c5ade65801a1f05cd7dcd0"}),A=l["a"].initializeApp(C),U=A.firestore(),I=U.collection("cars"),P=function(e){return I.add(e)},D=function(e){return I.doc(e).delete()},H=function(){var e=Object(r["u"])([]),t=I.onSnapshot((function(t){e.value=t.docs.map((function(e){return Object(E["a"])({id:e.id},e.data())}))}));return Object(r["q"])(t),e},L={setup:function(){var e=Object(r["t"])({brand:"",model:"",code:"",status:""}),t=function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P(Object(E["a"])({},e));case 2:e.brand="",e.model="",e.code="",e.status="";case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{form:e,onSubmit:t}}};const R=s()(L,[["render",k]]);var V=R,M={class:"card mt-4"},_={class:"table m-0"},q=Object(r["e"])("thead",null,[Object(r["e"])("tr",null,[Object(r["e"])("th",{scope:"col"},"Marca"),Object(r["e"])("th",{scope:"col"},"Modelo"),Object(r["e"])("th",{scope:"col"},"Estado de servicio"),Object(r["e"])("th",{scope:"col"},"Codigo de Gestion")])],-1),W=Object(r["e"])("button",{class:"btn btn-primary btn-sm me-2"}," Edit ",-1),N=["onClick"];function T(e,t,n,c,a,o){var l=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])("div",M,[Object(r["e"])("table",_,[q,Object(r["e"])("tbody",null,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.cars,(function(e){var t=e.id,n=e.brand,a=e.model,o=e.status,u=e.code;return Object(r["r"])(),Object(r["d"])("tr",{key:t},[Object(r["e"])("td",null,Object(r["y"])(n),1),Object(r["e"])("td",null,Object(r["y"])(a),1),Object(r["e"])("td",null,Object(r["y"])(o),1),Object(r["e"])("td",null,Object(r["y"])(u),1),Object(r["e"])("td",null,[Object(r["g"])(l,{to:"/edit/".concat(t)},{default:Object(r["C"])((function(){return[W]})),_:2},1032,["to"]),Object(r["e"])("button",{class:"btn btn-danger btn-sm",onClick:function(e){return c.deleteCar(t)}}," Delete ",8,N)])])})),128))])])])}var z={setup:function(){var e=H();return{cars:e,deleteCar:D}}};const J=s()(z,[["render",T]]);var B=J,F={setup:function(){var e=l["a"].auth().currentUser,t=Object(r["u"])("");Object(r["n"])((function(){e&&(t.value=e.email.split("@")[0])}));var n=function(){l["a"].auth().signOut().then((function(){return console.log("Signed out")})).catch((function(e){return alert(e.message)}))};return{name:t,Logout:n}},name:"Home",components:{UserCreate:V,UserList:B}};const G=s()(F,[["render",m]]);var K=G,Q={class:"card card-body mt-4"},Y=Object(r["e"])("h3",null,"Edit users",-1),X={class:"form-group"},Z=Object(r["e"])("label",null,"Name",-1),$={class:"form-group mt-3"},ee=Object(r["e"])("label",null,"Email",-1),te=Object(r["e"])("button",{type:"submit",class:"btn btn-primary mt-3"}," Update ",-1);function ne(e,t,n,c,a,o){return Object(r["r"])(),Object(r["d"])("div",Q,[Y,Object(r["e"])("form",{onSubmit:t[2]||(t[2]=Object(r["E"])((function(){return c.update&&c.update.apply(c,arguments)}),["prevent"]))},[Object(r["e"])("div",X,[Z,Object(r["D"])(Object(r["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.name=e}),class:"form-control",required:""},null,512),[[r["A"],c.form.name]])]),Object(r["e"])("div",$,[ee,Object(r["D"])(Object(r["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.email=e}),class:"form-control",type:"email",required:""},null,512),[[r["A"],c.form.email]])]),te],32)])}var re={setup:function(){var e=Object(o["d"])(),t=Object(o["c"])(),n=Object(r["b"])((function(){return t.params.id})),c=Object(r["t"])({name:"",email:""});Object(r["p"])(Object(S["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(void 0)(n.value);case 2:t=e.sent,console.log(t,n.value),c.name=t.name,c.email=t.email;case 6:case"end":return e.stop()}}),e)}))));var a=function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(void 0)(n.value,Object(E["a"])({},c));case 2:e.push("/"),c.name="",c.email="";case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{form:c,update:a}}};const ce=s()(re,[["render",ne]]);var ae=ce,oe=Object(r["e"])("h1",null,"Login",-1),le={class:"mb-3"},ue=Object(r["e"])("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),ie=Object(r["e"])("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1),se={class:"mb-3"},be=Object(r["e"])("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1),de=Object(r["e"])("div",{class:"mb-3 form-check"},[Object(r["e"])("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(r["e"])("label",{class:"form-check-label",for:"exampleCheck1"},"Employee access")],-1),me=Object(r["e"])("button",{type:"submit",class:"btn btn-primary",value:"Login"},"Submit",-1),pe={id:"emailHelp",class:"form-text"},Oe=Object(r["f"])("Need an account? "),fe=Object(r["f"])("Register Here");function je(e,t,n,c,a,o){var l=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])("section",null,[Object(r["e"])("form",{onSubmit:t[2]||(t[2]=Object(r["E"])((function(){return c.Login&&c.Login.apply(c,arguments)}),["prevent"]))},[oe,Object(r["e"])("div",le,[ue,Object(r["D"])(Object(r["e"])("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e})},null,512),[[r["A"],c.email]]),ie]),Object(r["e"])("div",se,[be,Object(r["D"])(Object(r["e"])("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e})},null,512),[[r["A"],c.password]])]),de,me,Object(r["e"])("div",pe,[Oe,Object(r["g"])(l,{to:"/register"},{default:Object(r["C"])((function(){return[fe]})),_:1})])],32)])}var ve={setup:function(){var e=Object(r["u"])(""),t=Object(r["u"])(""),n=function(){l["a"].auth().signInWithEmailAndPassword(e.value,t.value).then((function(e){return console.log(e)})).catch((function(e){return alert(e.message)}))};return{Login:n,email:e,password:t}}};const he=s()(ve,[["render",je]]);var ge=he,ye={class:"register"},we=Object(r["e"])("h1",null,"Register",-1),xe={class:"mb-3"},ke=Object(r["e"])("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),Ee=Object(r["e"])("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1),Se={class:"mb-3"},Ce=Object(r["e"])("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1),Ae=Object(r["e"])("div",{class:"mb-3 form-check"},[Object(r["e"])("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(r["e"])("label",{class:"form-check-label",for:"exampleCheck1"},"Employee access")],-1),Ue=Object(r["e"])("input",{type:"submit",class:"btn btn-primary",value:"Register"},null,-1),Ie={id:"emailHelp",class:"form-text"},Pe=Object(r["f"])("Have an account? "),De=Object(r["f"])("Login Here");function He(e,t,n,c,a,o){var l=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])("div",ye,[Object(r["e"])("section",null,[Object(r["e"])("form",{onSubmit:t[2]||(t[2]=Object(r["E"])((function(){return c.Register&&c.Register.apply(c,arguments)}),["prevent"]))},[we,Object(r["e"])("div",xe,[ke,Object(r["D"])(Object(r["e"])("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e})},null,512),[[r["A"],c.email]]),Ee]),Object(r["e"])("div",Se,[Ce,Object(r["D"])(Object(r["e"])("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e})},null,512),[[r["A"],c.password]])]),Ae,Ue,Object(r["e"])("div",Ie,[Pe,Object(r["g"])(l,{to:"/login"},{default:Object(r["C"])((function(){return[De]})),_:1})])],32)])])}var Le={setup:function(){var e=Object(r["u"])(""),t=Object(r["u"])(""),n=function(){l["a"].auth().createUserWithEmailAndPassword(e.value,t.value).then(alert("Now your register")).catch((function(e){return alert(e.message)}))};return{Register:n,email:e,password:t}}};const Re=s()(Le,[["render",He]]);var Ve=Re,Me=[{path:"/",name:"Home",component:K},{path:"/edit/:id",name:"Edit",component:ae},{path:"/login",name:"Login",component:ge},{path:"/register",name:"Register",component:Ve}],_e=Object(o["a"])({history:Object(o["b"])(),routes:Me}),qe=_e;Object(r["c"])(d).use(qe).mount("#app")}});
//# sourceMappingURL=app.796ddd14.js.map