(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/covid19-global-hackathon-2020/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",dark:"",color:"primary"}},[n("div",{staticClass:"d-flex align-center"},[n("img",{attrs:{src:r("cf05"),width:"155",alt:"Created my free logo at LogoMakr.com",title:"Neighborhood Eats"},on:{click:function(t){return e.$router.push("/")}}})]),n("v-spacer"),e.isAuth?[n("v-icon",{staticClass:"mr-5",attrs:{large:""},on:{click:e.onProfile}},[e._v("mdi-account-circle")]),n("v-btn",{attrs:{outlined:""},on:{click:e.onLogout}},[e._v("log out")])]:n("h4",{staticClass:"font-weight-black"},[e._v(" Restaurant or business owners? Click "),n("router-link",{staticClass:"black--text",attrs:{to:"sign-up"}},[e._v("here")])],1)],2),n("v-content",[n("router-view")],1),n("v-footer",[n("v-spacer"),n("div",{staticClass:"caption"},[e._v("Created by Kou Lor © "+e._s(2020))])],1)],1)},s=[],i=(r("96cf"),r("1da1")),o=r("5530"),u=r("2f62"),c={name:"App",components:{},computed:Object(o["a"])({},Object(u["b"])(["isAuth","user"])),data:function(){return{}},methods:{onLogout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("LOG_OUT");case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()},onProfile:function(){this.$router.push("/profile/".concat(this.user.id))}}},l=c,d=r("2877"),p=r("6544"),m=r.n(p),f=r("7496"),v=r("40dc"),b=r("8336"),h=r("a75b"),g=r("553a"),w=r("132d"),x=r("2fa4"),k=Object(d["a"])(l,a,s,!1,null,null,null),S=k.exports;m()(k,{VApp:f["a"],VAppBar:v["a"],VBtn:b["a"],VContent:h["a"],VFooter:g["a"],VIcon:w["a"],VSpacer:x["a"]});var R=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container--fluid"},[r("v-col",{staticClass:"mt-10",attrs:{cols:"4"}},[r("label",[e._v("Enter Zip Code")]),r("v-text-field",{attrs:{label:"Solo",placeholder:"Zip Code",solo:""},on:{keyup:e.onZipCodeChange}}),r("p",{staticClass:"title"},[e._v("Found "),r("span",{staticClass:"headline",style:{color:e.allBus.length?"green":"red"}},[e._v(e._s(e.allBus.length))]),e._v(" result"+e._s(e.allBus.length>1?"s":""))])],1),r("v-col",{staticClass:"mt-10",attrs:{cols:"12"}},[r("list-view",{attrs:{items:e.allBus}})],1)],1)},_=[],E=r("b047"),O=r.n(E),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container--fluid"},[r("v-list",{attrs:{"three-line":"",subheader:""}},[e._l(e.items,(function(t,n){return[0===n?r("v-divider",{key:"start"+n}):e._e(),r("v-list-item",{key:t.id},[r("v-list-item-avatar",{staticClass:"mr-10",attrs:{size:"80"}},[r("v-img",{attrs:{src:e.processImg(t.logo)}})],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline",domProps:{textContent:e._s(t.name)}}),r("v-list-item-subtitle",[e._v(" Address: "+e._s(t.location.address)+" ")]),r("v-list-item-subtitle",[e._v(" Zip Code: "+e._s(t.location.zipCode)+" ")]),r("v-list-item-subtitle",[e._v(" Phone Number: "+e._s(t.phoneNum)+" ")]),r("v-list-item-subtitle",{staticClass:"font-weight-bold"},[e._v(" Opened from "+e._s(t.opHours.open)+"AM - "+e._s(t.opHours.close)+"PM ")]),r("v-list-item-subtitle",[e._v(" Last Updated "+e._s(new Date(t.updatedAt).toLocaleString())+" ")])],1),r("v-list-item-action",[r("span",{staticClass:"caption"},[e._v("("+e._s(t.active?"OPEN":"CLOSED")+")")]),e._v(" "),r("v-icon",{attrs:{color:t.active?"green":"red",size:"30"}},[e._v("mdi-circle")])],1)],1),r("v-divider",{key:"end"+n})]}))],2)],1)},j=[],I=function(e){return"data:image/jpeg;base64, ".concat(btoa(e))},M={name:"ListView",props:["items","filterKey"],methods:{processImg:I}},U=M,B=r("ce7e"),A=r("adda"),V=r("8860"),P=r("da13"),T=r("1800"),$=r("8270"),N=r("5d23"),L=Object(d["a"])(U,C,j,!1,null,"165d4af3",null),q=L.exports;m()(L,{VDivider:B["a"],VIcon:w["a"],VImg:A["a"],VList:V["a"],VListItem:P["a"],VListItemAction:T["a"],VListItemAvatar:$["a"],VListItemContent:N["a"],VListItemSubtitle:N["b"],VListItemTitle:N["c"]});var F={name:"Home",components:{ListView:q},data:function(){return{allBus:[]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.init();case 1:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("GET_ALL_BUS");case 2:r=t.sent,e.allBus=r;case 4:case"end":return t.stop()}}),t)})))()},onZipCodeChange:O()(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.target.value,e.next=3,this.$store.dispatch("SEARCH",r);case 3:n=e.sent,r?this.allBus=n:this.init();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),500)}},H=F,D=r("62ad"),G=r("8654"),z=Object(d["a"])(H,y,_,!1,null,null,null),K=z.exports;m()(z,{VCol:D["a"],VTextField:G["a"]});var Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container--fluid"},[r("v-col",{staticClass:"mt-10",attrs:{cols:"12",sm:"12",md:"4","offset-md":"4","offset-sm":"0"}},[r("h1",[e._v("To get started, please fill out the form")]),r("v-form",{ref:"form",staticClass:"d-flex flex-column mt-10",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.emptyRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{rules:e.emptyRules,label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{staticClass:"mt-10",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.validate}},[e._v(" Create Account ")]),r("p",{staticClass:"text-center mt-5"},[e._v(" or ")]),r("p",{staticClass:"text-center"},[r("router-link",{staticClass:"black--text",attrs:{to:"login"}},[e._v("Go to Sign In")])],1)],1)],1)],1)},J=[],Q=(r("b0c0"),r("ec26")),W={name:"SignUp",data:function(){return{valid:!0,name:"",password:null,email:"",emptyRules:[function(e){return!!e||"Field is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{validate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$refs.form.validate(),!r){t.next=6;break}return e.id=Object(Q["a"])(),t.next=5,e.$store.dispatch("CREATE_USER",{name:e.name,email:e.email,password:e.password,createdAt:Date.now(),id:e.id});case 5:e.$router.push("/profile/".concat(e.id));case 6:case"end":return t.stop()}}),t)})))()}}},X=W,Y=r("4bd4"),ee=Object(d["a"])(X,Z,J,!1,null,"40a51d1e",null),te=ee.exports;m()(ee,{VBtn:b["a"],VCol:D["a"],VForm:Y["a"],VTextField:G["a"]});var re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container--fluid"},[e.userModel?r("v-col",{attrs:{cols:"12",sm:"12",md:"4","offset-md":"4","offset-sm":"0"}},[r("v-form",{ref:"profileForm",staticClass:"mt-10",attrs:{"lazy-validation":""}},[r("h3",[e._v("Update Profile")]),r("v-text-field",{attrs:{disabled:"",value:e.userModel.email,rules:e.emailRules,label:"E-mail",required:""}}),r("v-text-field",{attrs:{rules:e.emptyRules,label:"Name",required:""},model:{value:e.userModel.name,callback:function(t){e.$set(e.userModel,"name",t)},expression:"userModel.name"}}),r("v-text-field",{attrs:{rules:e.emptyRules,label:"Password",required:""},model:{value:e.userModel.password,callback:function(t){e.$set(e.userModel,"password",t)},expression:"userModel.password"}}),r("v-btn",{staticClass:"mr-4 mt-10",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.validateProfile}},[e._v(" Update Profile ")])],1)],1):e._e(),r("v-col",{attrs:{cols:"12",sm:"12",md:"4","offset-md":"4","offset-sm":"0"}},[r("h3",[e._v("Update Business Info")]),r("v-form",{ref:"busForm",attrs:{"lazy-validation":""}},[r("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Item is required"}],label:"Business Type",required:""},model:{value:e.businessModel.type,callback:function(t){e.$set(e.businessModel,"type",t)},expression:"businessModel.type"}}),r("v-text-field",{attrs:{rules:e.emptyRules,label:"Business Name",required:""},model:{value:e.businessModel.name,callback:function(t){e.$set(e.businessModel,"name",t)},expression:"businessModel.name"}}),r("v-text-field",{attrs:{rules:e.emptyRules,label:"Business Address",required:""},model:{value:e.businessModel.location.address,callback:function(t){e.$set(e.businessModel.location,"address",t)},expression:"businessModel.location.address"}}),r("v-text-field",{attrs:{type:"number",rules:e.emptyRules,label:"Business ZipCode",required:""},model:{value:e.businessModel.location.zipCode,callback:function(t){e.$set(e.businessModel.location,"zipCode",t)},expression:"businessModel.location.zipCode"}}),r("v-text-field",{attrs:{type:"text",rules:e.emptyRules,label:"Business Phone Number",required:""},model:{value:e.businessModel.phoneNum,callback:function(t){e.$set(e.businessModel,"phoneNum",t)},expression:"businessModel.phoneNum"}}),r("div",{staticClass:"text-center"},[r("img",{staticStyle:{"max-height":"150px"},attrs:{src:e.processImg(e.businessModel.logo)}})]),r("v-file-input",{attrs:{label:"Upload Business Logo",outlined:"",dense:"",accept:"image/*"},on:{change:e.onFileChange}}),r("span",{staticClass:"font-weight-light"},[e._v("Office Hours:")]),r("div",{staticClass:"d-flex flex-row"},[r("v-select",{staticStyle:{width:"3rem"},attrs:{items:e.opHoursItems,rules:[function(e){return!!e||"Hour is required"}],label:"Open Hour (AM)",required:""},model:{value:e.businessModel.opHours["open"],callback:function(t){e.$set(e.businessModel.opHours,"open",t)},expression:"businessModel.opHours['open']"}}),r("v-select",{staticClass:"ml-10",staticStyle:{width:"3rem"},attrs:{items:e.opHoursItems,rules:[function(e){return!!e||"Hour is required"}],label:"Closing Hour (PM)",required:""},model:{value:e.businessModel.opHours["close"],callback:function(t){e.$set(e.businessModel.opHours,"close",t)},expression:"businessModel.opHours['close']"}})],1),r("v-switch",{attrs:{label:"Is Open: "+e.businessModel.active.toString()},model:{value:e.businessModel.active,callback:function(t){e.$set(e.businessModel,"active",t)},expression:"businessModel.active"}}),r("v-btn",{staticClass:"mr-4 mt-10",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.validateBus}},[e._v(" Update Business ")])],1)],1),r("v-snackbar",{attrs:{right:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarMsg)+" ")])],1)},ne=[],ae=(r("a630"),r("3ca3"),{name:"Profile",props:["id"],computed:Object(o["a"])({},Object(u["b"])(["user"])),data:function(){return{snackbar:!1,snackbarMsg:null,userModel:null,businessModel:{name:null,type:null,phoneNum:null,logo:null,location:{address:null,zipCode:null},opHours:{open:"",close:""},active:!1},img:null,valid:!0,emptyRules:[function(e){return!!e||"Field is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],select:null,items:["Restaurant","Other"],opHoursItems:Array.from({length:12},(function(e,t){return t+1}))}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("GET_USER",e.id);case 2:return e.userModel=e.user,t.next=5,e.$store.dispatch("GET_BUS",e.id);case 5:r=t.sent,r&&(e.businessModel=Object(o["a"])({},e.businessModel,{},r));case 7:case"end":return t.stop()}}),t)})))()},methods:{processImg:I,render:function(){this.img="data:image/jpeg;base64,"+btoa(this.user.logo.data)},onFileChange:function(e){var t=this;if(e){var r=new FileReader;r.readAsBinaryString(e),r.onload=function(e){t.businessModel.logo=e.target.result}}},validateProfile:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$refs.profileForm.validate(),!r){t.next=13;break}return t.prev=2,t.next=5,e.$store.dispatch("UPDATE_USER",e.userModel);case 5:e.snackbar=!0,e.snackbarMsg="Profile Updated",t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),e.snackbar=!0,e.snackbarMsg=t.t0.message||"Could not update Profile";case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()},validateBus:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$refs.busForm.validate(),!r){t.next=18;break}if(t.prev=2,!e.businessModel.id){t.next=8;break}return t.next=6,e.$store.dispatch("UPDATE_USER_BUS",Object(o["a"])({},e.businessModel,{},{updatedAt:Date.now()}));case 6:t.next=10;break;case 8:return t.next=10,e.$store.dispatch("UPDATE_USER_BUS",Object(o["a"])({},e.businessModel,{},{id:Object(Q["a"])(),userId:e.id,createdAt:Date.now(),updatedAt:Date.now()}));case 10:e.snackbar=!0,e.snackbarMsg="Business Profile Updated",t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](2),e.snackbar=!0,e.snackbarMsg=t.t0.message||"Could not update Profile";case 18:case"end":return t.stop()}}),t,null,[[2,14]])})))()}}}),se=ae,ie=r("23a7"),oe=r("b974"),ue=r("2db4"),ce=r("b73d"),le=Object(d["a"])(se,re,ne,!1,null,"013f9c7e",null),de=le.exports;m()(le,{VBtn:b["a"],VCol:D["a"],VFileInput:ie["a"],VForm:Y["a"],VSelect:oe["a"],VSnackbar:ue["a"],VSwitch:ce["a"],VTextField:G["a"]});var pe=r("0e44"),me=r("3f4f"),fe=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("indexedDB"in window){e.next=2;break}throw new Error("Browser does not support IndexedDB");case 2:return e.next=4,Object(me["a"])("covid_19_app_db",1,{upgrade:function(e){if(!e.objectStoreNames.contains("users")){var t=e.createObjectStore("users");t.createIndex("emailIndex","email",{unique:!0})}if(!e.objectStoreNames.contains("business")){var r=e.createObjectStore("business");r.createIndex("userIndex","userId",{unique:!0}),r.createIndex("zipcodeIndex","location.zipCode",{unique:!1})}}});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve={USERS:"users",BUSINESS:"business"},be=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,s,i,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t||r){e.next=2;break}throw new Error("Email or password cannot be empty");case 2:return e.next=4,fe();case 4:return n=e.sent,a=n.transaction(ve.USERS,"readonly"),s=a.objectStore(ve.USERS),i=s.index("emailIndex"),e.next=10,i.get(IDBKeyRange.only(t));case 10:if(o=e.sent,!o){e.next=22;break}return u=o.password===r,e.next=15,a.done;case 15:if(!u){e.next=19;break}return e.abrupt("return",o);case 19:throw new Error("Incorrect email or password. Please try again.");case 20:e.next=23;break;case 22:throw new Error("Incorrect email or password. Please try again.");case 23:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),he=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return r=e.sent,n=r.transaction(ve.USERS,"readwrite"),a=n.objectStore(ve.USERS),e.next=7,a.getKey(t.email);case 7:if(s=e.sent,s){e.next=11;break}return a.put(t,t.id),e.abrupt("return",n.done);case 11:throw new Error("Email already in use. Please try again.");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return r=e.sent,n=r.transaction(ve.USERS,"readwrite"),a=n.objectStore(ve.USERS),e.next=7,a.getKey(t.id);case 7:if(s=e.sent,!s){e.next=11;break}return a.put(t,t.id),e.abrupt("return",n.done);case 11:throw new Error("Failed to update user. Please contact support.");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return r=e.sent,n=r.transaction(ve.USERS,"readonly"),a=n.objectStore(ve.USERS),e.next=7,a.getKey(t);case 7:if(s=e.sent,!s){e.next=17;break}return e.next=11,a.get(t);case 11:return i=e.sent,e.next=14,n.done;case 14:return e.abrupt("return",i);case 17:throw new Error("Could not find user.");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return t=e.sent,r=t.transaction(ve.BUSINESS,"readonly"),n=r.objectStore(ve.BUSINESS),e.next=7,n.openCursor();case 7:a=e.sent,s=[];case 9:if(!a){e.next=16;break}return s.push(a.value),e.next=13,a.continue();case 13:a=e.sent,e.next=9;break;case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return r=e.sent,n=r.transaction(ve.BUSINESS,"readonly"),a=n.objectStore(ve.BUSINESS),s=a.index("userIndex"),e.next=8,s.get(IDBKeyRange.only(t));case 8:if(i=e.sent,!i){e.next=11;break}return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return r=e.sent,n=r.transaction(ve.BUSINESS,"readwrite"),a=n.objectStore(ve.BUSINESS),a.put(t,t.id),e.abrupt("return",n.done);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return r=e.sent,n=r.transaction(ve.BUSINESS,"readonly"),a=n.objectStore(ve.BUSINESS),s=a.index("zipcodeIndex"),e.next=8,s.openCursor(IDBKeyRange.bound(t,t+"￿"),"prev");case 8:i=e.sent,o=[];case 10:if(!i){e.next=17;break}return o.push(i.value),e.next=14,i.continue();case 14:i=e.sent,e.next=10;break;case 17:return e.abrupt("return",o);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n["a"].use(u["a"]);var ye=new u["a"].Store({state:{isAuth:null,user:null},mutations:{IS_LOGIN_STATE:function(e,t){return e.isAuth=t},SET_USER:function(e,t){return e.user=t}},actions:{LOG_IN:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.dispatch,a=r.email,s=r.password,e.prev=2,e.next=5,be(a,s);case 5:return i=e.sent,n("IS_LOGIN_STATE",!0),n("SET_USER",i),e.abrupt("return",i);case 11:throw e.prev=11,e.t0=e["catch"](2),new Error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));function t(t,r){return e.apply(this,arguments)}return t}(),LOG_OUT:function(e){var t=e.commit;e.dispatch;t("IS_LOGIN_STATE",!1),window.localStorage.removeItem("vuex")},CREATE_USER:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.dispatch,e.prev=1,e.next=4,he(r);case 4:n("IS_LOGIN_STATE",!0),e.next=10;break;case 7:throw e.prev=7,e.t0=e["catch"](1),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),UPDATE_USER:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,e.prev=1,e.next=4,ge(r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](1),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));function t(t,r){return e.apply(this,arguments)}return t}(),GET_USER:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.dispatch,e.prev=1,e.next=4,we(r);case 4:a=e.sent,n("SET_USER",a),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](1),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,r){return e.apply(this,arguments)}return t}(),GET_ALL_BUS:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,e.prev=1,e.next=4,xe();case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e["catch"](1),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}(),GET_BUS:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,e.prev=1,e.next=4,ke(r);case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e["catch"](1),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),UPDATE_USER_BUS:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,e.prev=1,e.next=4,Se(r);case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e["catch"](1),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),SEARCH:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,t.dispatch,e.prev=1,e.next=4,Re(r);case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e["catch"](1),new Error("Unable to search");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{isAuth:function(e){return e.isAuth},user:function(e){return e.user}},plugins:[Object(pe["a"])()],modules:{}}),_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container--fluid"},[r("v-col",{staticClass:"mt-10",attrs:{cols:"12",sm:"12",md:"4","offset-md":"4","offset-sm":"0"}},[r("h1",[e._v("Log In")]),r("v-form",{ref:"form",staticClass:"d-flex flex-column",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{rules:e.emptyRules,label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{staticClass:"mt-10",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.validate}},[e._v(" Sign In ")])],1)],1)],1)},Ee=[],Oe={name:"Login",data:function(){return{valid:!0,password:null,email:"",emptyRules:[function(e){return!!e||"Field is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{validate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$refs.form.validate(),!r){t.next=12;break}return t.prev=2,t.next=5,e.$store.dispatch("LOG_IN",{email:e.email,password:e.password});case 5:n=t.sent,e.$router.push("/profile/".concat(n.id)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),console.error("Invalid login");case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))()}}},Ce=Oe,je=Object(d["a"])(Ce,_e,Ee,!1,null,"485e6e13",null),Ie=je.exports;m()(je,{VBtn:b["a"],VCol:D["a"],VForm:Y["a"],VTextField:G["a"]}),n["a"].use(R["a"]);var Me=[{path:"/",name:"home",component:K},{path:"/sign-up",name:"sign-up",component:te},{path:"/login",name:"login",component:Ie},{path:"/profile/:id",name:"profile",component:de,props:!0,beforeEnter:function(e,t,r){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=ye.getters.isAuth,t?r():r("/");case 2:case"end":return e.stop()}}),e)})))()}}],Ue=new R["a"]({mode:"history",base:"/covid19-global-hackathon-2020/",routes:Me}),Be=Ue,Ae=r("9483");Object(Ae["a"])("".concat("/covid19-global-hackathon-2020/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Ve=r("f309");n["a"].use(Ve["a"]);var Pe=new Ve["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Be,store:ye,vuetify:Pe,render:function(e){return e(S)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.46af50b3.png"}});
//# sourceMappingURL=app.b2d8258e.js.map