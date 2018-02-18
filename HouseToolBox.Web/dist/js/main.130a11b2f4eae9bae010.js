webpackJsonp([1],{"./src/components/app/app.html":function(t,e){t.exports='<div>\n    <navbar :inverted="false"></navbar>\n    <router-view>loading...</router-view>\n</div>'},"./src/components/app/app.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r,o=n("./src/components/common/navbar/index.ts"),i=n("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js"),s=(n.n(i),n("./src/dependency-symbols.ts")),c=n("./src/dependency-config.ts"),a=n("./src/store/system/index.ts"),u=n("./src/util/http.ts"),l=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},p=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},d=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,c,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.beforeMount=function(){return p(this,void 0,void 0,function(){var t,e;return d(this,function(n){switch(n.label){case 0:return[4,Object(a.b)(this.$store)];case 1:return t=n.sent(),null!==t&&(Object(a.h)(this.$store,t),e=new u.a,e.setDefaultHeader("Authorization","Bearer "+t.access_token)),[2]}})})},e=f([Object(i.Component)({template:n("./src/components/app/app.html"),components:{navbar:o.NavbarComponent},provide:(r={},r[s.a.CONTAINER]=c.a,r)})],e)}(i.Vue)},"./src/components/app/index.ts":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("./src/components/app/app.ts");n.d(e,"AppComponent",function(){return r.a})},"./src/components/common/navbar/index.ts":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("./src/components/common/navbar/navbar.ts");n.d(e,"NavbarComponent",function(){return r.a})},"./src/components/common/navbar/link.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e){this.name=t,this.path=e}return t}()},"./src/components/common/navbar/navbar.html":function(t,e){t.exports='<nav class="navbar navbar-default navbar-fixed-top" v-bind:class="{\'navbar-inverse\' : inverted}">\n  <div class="container-fluid container">\n    \x3c!-- Brand and toggle get grouped for better mobile display --\x3e\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar" aria-expanded="false" aria-controls="navbar">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#"><img src="/assets/img/Vue.js_Logo.svg.png" style="width:32px;height:32px;"/></a>\n    </div>\n\n    \x3c!-- Collect the nav links, forms, and other content for toggling --\x3e\n    <collapse id="navbar" class="navbar-collapse" v-model="showNavbar">\n      <ul class="nav navbar-nav">\n        <li v-for="link in links" v-bind:class="{\'active\' : $route.path == link.path}">\n          <router-link v-bind:to="link.path">{{link.name}}</router-link>\n        </li>\n      </ul>\n      <ul v-if="IsUserLogged == null" class="nav navbar-nav navbar-right">\n        <li><a @click="register" href="#">Register</a></li>\n        <li><a @click="login" href="#">Log in</a></li>\n      </ul>\n      <ul v-if="IsUserLogged !== null" class="nav navbar-nav navbar-right">\n        <li><a @click="logout" href="#">Logout</a></li>\n      </ul>\n    </collapse>\n  </div>\n</nav>\n'},"./src/components/common/navbar/navbar.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n("./node_modules/uiv/dist/uiv.min.js"),o=(n.n(r),n("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js")),i=(n.n(o),n("./src/components/common/navbar/link.ts")),s=n("./src/util/log.ts"),c=n("./src/store/system/index.ts"),a=n("./src/store/techcommunity/index.ts"),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},d=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,c,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inverted=!0,e.showNavbar=!1,e.user=null,e.object={default:"Default object property!"},e.links=[new i.a("Home","/")],e}return u(e,t),e.prototype.login=function(){return p(this,void 0,void 0,function(){return d(this,function(t){switch(t.label){case 0:return[4,Object(c.a)(this.$store)];case 1:return t.sent(),[2]}})})},Object.defineProperty(e.prototype,"IsUserLogged",{get:function(){return Object(c.f)(this.$store)},enumerable:!0,configurable:!0}),e.prototype.logout=function(){return p(this,void 0,void 0,function(){var t;return d(this,function(e){switch(e.label){case 0:return[4,Object(c.c)(this.$store)];case 1:return t=e.sent(),[2]}})})},e.prototype.register=function(){return p(this,void 0,void 0,function(){var t;return d(this,function(e){return t=Object(a.b)(this.$store),window.location.href=t.authorityUri+"account/register?returnUrl="+window.location.href,[2]})})},e.prototype.pathChanged=function(){this.logger.info("Changed current path to: "+this.$route.path)},e.prototype.mounted=function(){var t=this;this.logger||(this.logger=new s.a),this.$nextTick(function(){return t.logger.info(t.object.default)})},l([Object(o.Watch)(""),Object(o.Watch)("$route.path"),f("design:type",Function),f("design:paramtypes",[]),f("design:returntype",void 0)],e.prototype,"pathChanged",null),e=l([Object(o.Component)({template:n("./src/components/common/navbar/navbar.html"),components:{collapse:r.Collapse}})],e)}(o.Vue)},"./src/components/home/home.html":function(t,e){t.exports='<div class="container content">\n  <div class="row">\n    <div class="content col-md-4">\n        <button class="btn btn-default" @click="register">REGISTER</button>\n        <button class="btn btn-default" @click="api">Test Api</button>\n    </div>\n    <div class="col-md-4">\n      {{ output }}\n    </div>\n  </div>\n</div>\n'},"./src/components/home/home.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n("./src/store/system/index.ts"),o=n("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js"),i=(n.n(o),n("./src/util/baseComponent.ts")),s=n("./src/store/techcommunity/index.ts"),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},f=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,c,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},p=function(t){function e(){var e=t.call(this)||this;return e.output="",e}return c(e,t),e.prototype.register=function(){return l(this,void 0,void 0,function(){var t;return f(this,function(e){switch(e.label){case 0:return[4,Object(r.b)(this.$store)];case 1:return t=e.sent(),this.output+=t.profile,[2]}})})},e.prototype.api=function(){return l(this,void 0,void 0,function(){var t;return f(this,function(e){switch(e.label){case 0:return[4,Object(s.a)(this.$store)];case 1:return t=e.sent(),this.output+=t.data,[2]}})})},e=a([Object(o.Component)({template:n("./src/components/home/home.html")}),u("design:paramtypes",[])],e)}(i.a)},"./src/components/oidc/signin-oidc/signin-oidc.html":function(t,e){t.exports=""},"./src/components/oidc/signin-oidc/signin-oidc.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("./src/store/system/index.ts"),o=n("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js"),i=(n.n(o),n("./src/util/baseComponent.ts")),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,c,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.mounted=function(){return a(this,void 0,void 0,function(){var t;return u(this,function(e){switch(e.label){case 0:return[4,Object(r.d)(this.$store)];case 1:return t=e.sent(),window.location.href="/",[2]}})})},e=c([Object(o.Component)({template:n("./src/components/oidc/signin-oidc/signin-oidc.html")})],e)}(i.a)},"./src/components/oidc/signout-oidc/signout-oidc.html":function(t,e){t.exports=""},"./src/components/oidc/signout-oidc/signout-oidc.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("./src/store/system/index.ts"),o=n("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js"),i=(n.n(o),n("./src/util/baseComponent.ts")),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,c,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.mounted=function(){return a(this,void 0,void 0,function(){var t;return u(this,function(e){switch(e.label){case 0:return[4,Object(r.e)(this.$store)];case 1:return t=e.sent(),window.location.href="/",[2]}})})},e=c([Object(o.Component)({template:n("./src/components/oidc/signout-oidc/signout-oidc.html")})],e)}(i.a)},"./src/dependency-config.ts":function(t,e,n){"use strict";var r=n("./node_modules/inversify/lib/inversify.js"),o=(n.n(r),n("./src/util/http.ts")),i=n("./node_modules/reflect-metadata/Reflect.js"),s=(n.n(i),n("./src/dependency-symbols.ts")),c=new r.Container;c.bind(s.a.HTTP).to(o.a),e.a=c},"./src/dependency-symbols.ts":function(t,e,n){"use strict";e.a={HTTP:Symbol("Axios"),CONTAINER:Symbol("Container")}},"./src/main.ts":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("./node_modules/vue/dist/vue.esm.js"),o=(n("./src/util/hot-reload.ts"),n("./src/router.ts")),i=n("./node_modules/vuex/dist/vuex.esm.js"),s=n("./src/store/index.ts"),c=n("./src/sass/main.scss"),a=(n.n(c),n("./src/components/app/index.ts"));r.default.use(i.b),new r.default({el:"#app-main",store:Object(s.a)(),router:Object(o.a)(),render:function(t){return t(a.AppComponent)}})},"./src/router.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("./node_modules/vue/dist/vue.esm.js"),o=n("./node_modules/vue-router/dist/vue-router.esm.js"),i=n("./src/components/oidc/signin-oidc/signin-oidc.ts"),s=n("./src/components/oidc/signout-oidc/signout-oidc.ts"),c=n("./src/components/home/home.ts");r.default.use(o.a);var a=function(){return[{path:"/",component:c.a},{path:"/signin-oidc",component:i.a},{path:"/signout-oidc",component:s.a}]},u=function(){var t=new o.a({mode:"history",routes:a()});return t.beforeEach(function(t,e,n){n()}),t}},"./src/sass/main.scss":function(t,e){},"./src/store/index.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("./src/store/techcommunity/index.ts"),o=n("./node_modules/vuex/dist/vuex.esm.js"),i=n("./src/store/system/index.ts"),s=function(){return new o.a({modules:{TechCommunityStore:r.c,SystemStore:i.i}})}},"./src/store/system/actions.ts":function(t,e,n){"use strict";var r=n("./node_modules/oidc-client/lib/oidc-client.min.js"),o=(n.n(r),n("./src/store/system/index.ts")),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,c,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c};e.a={challengeToken:function(t){return i(this,void 0,void 0,function(){var e,n;return s(this,function(i){return e=Object(o.g)(t),n=new r.UserManager(e),n.signinRedirect(),[2]})})},getCurrentUser:function(t){return i(this,void 0,void 0,function(){var e,n;return s(this,function(i){return e=Object(o.g)(t),n=new r.UserManager(e),[2,n.getUser()]})})},logout:function(t){return i(this,void 0,void 0,function(){var e,n,i;return s(this,function(s){switch(s.label){case 0:return e=Object(o.g)(t),n=new r.UserManager(e),[4,Object(o.b)(t)];case 1:return i=s.sent(),null!==i?[2,n.signoutRedirect()]:[2,Promise.resolve()]}})})},receiveSigninCallback:function(t){return i(this,void 0,void 0,function(){var e,n;return s(this,function(i){return e=Object(o.g)(t),n=new r.UserManager(e),[2,n.signinRedirectCallback()]})})},receiveSignoutCallback:function(t){return i(this,void 0,void 0,function(){var e,n;return s(this,function(i){return e=Object(o.g)(t),n=new r.UserManager(e),[2,Promise.resolve()]})})}}},"./src/store/system/getters.ts":function(t,e,n){"use strict";e.a={getOidcConfiguration:function(t){return{authority:"http://localhost:5000",client_id:"js",redirect_uri:"http://localhost:8080/signin-oidc",response_type:"id_token token",scope:"openid profile api1",post_logout_redirect_uri:"http://localhost:8080/signout-oidc",popupWindowFeatures:"menubar=yes,location=yes,toolbar=yes,width=1200,height=800,left=100,top=100;resizable=yes",loadUserInfo:!0,silent_redirect_uri:window.location.origin+"/silent.html",automaticSilentRenew:!0,revokeAccessTokenOnSignout:!0,filterProtocolClaims:!1}},getCurrentUser:function(t){return t.user}}},"./src/store/system/index.ts":function(t,e,n){"use strict";n.d(e,"i",function(){return a}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return h}),n.d(e,"d",function(){return b}),n.d(e,"e",function(){return y}),n.d(e,"b",function(){return v}),n.d(e,"h",function(){return m}),n.d(e,"g",function(){return g}),n.d(e,"f",function(){return _});var r=n("./src/store/system/mutations.ts"),o=n("./src/store/system/getters.ts"),i=n("./src/store/system/actions.ts"),s=n("./src/store/system/state.ts"),c=n("./node_modules/vuex-typescript/dist/index.js"),a=(n.n(c),{namespaced:!0,actions:i.a,getters:o.a,mutations:r.a,state:new s.a}),u=Object(c.getStoreAccessors)("SystemStore"),l=u.commit,f=u.read,p=u.dispatch,d=p(i.a.challengeToken),h=p(i.a.logout),b=p(i.a.receiveSigninCallback),y=p(i.a.receiveSignoutCallback),v=p(i.a.getCurrentUser),m=l(r.a.setUser),g=f(o.a.getOidcConfiguration),_=f(o.a.getCurrentUser)},"./src/store/system/mutations.ts":function(t,e,n){"use strict";e.a={setUser:function(t,e){t.user=e}}},"./src/store/system/state.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.user=null}return t}()},"./src/store/techcommunity/actions.ts":function(t,e,n){"use strict";var r=n("./src/util/http.ts"),o=n("./src/store/techcommunity/index.ts"),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){a.label=n[1];break}if(6===n[0]&&a.label<s[1]){a.label=s[1],s=n;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(n);break}s[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],i=0}finally{o=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,i,s,c,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c};e.a={fetchValues:function(t){return i(this,void 0,void 0,function(){var e;return s(this,function(n){switch(n.label){case 0:return e=new r.a,[4,e.get(Object(o.b)(t).apiUri+"/api/values")];case 1:return[2,n.sent()]}})})}}},"./src/store/techcommunity/getters.ts":function(t,e,n){"use strict";e.a={getConfiguration:function(t){return{apiUri:"http://localhost:5001/",authorityUri:"http://localhost:5000/"}}}},"./src/store/techcommunity/index.ts":function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"b",function(){return p}),n.d(e,"a",function(){return d});var r=n("./src/store/techcommunity/mutations.ts"),o=n("./src/store/techcommunity/getters.ts"),i=n("./src/store/techcommunity/actions.ts"),s=n("./src/store/techcommunity/state.ts"),c=n("./node_modules/vuex-typescript/dist/index.js"),a=(n.n(c),{namespaced:!0,actions:i.a,getters:o.a,mutations:r.a,state:new s.a}),u=Object(c.getStoreAccessors)("TechCommunityStore"),l=(u.commit,u.read),f=u.dispatch,p=l(o.a.getConfiguration),d=f(i.a.fetchValues)},"./src/store/techcommunity/mutations.ts":function(t,e,n){"use strict";e.a={}},"./src/store/techcommunity/state.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t}()},"./src/util/baseComponent.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js"),o=(n.n(r),n("./src/dependency-symbols.ts")),i=n("./node_modules/inversify/lib/inversify.js"),s=(n.n(i),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),c=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t){function e(){return t.call(this)||this}return s(e,t),e.prototype.beforeCreate=function(){this.axios=this._container.get(o.a.HTTP)},c([Object(r.Inject)(o.a.CONTAINER),a("design:type",i.Container)],e.prototype,"_container",void 0),e}(r.Vue)},"./src/util/hot-reload.ts":function(t,e,n){"use strict";var r=(n("./node_modules/vue/dist/vue.esm.js"),n("./node_modules/vue-hot-reload-api/dist/index.js"));n.n(r),this&&this.__awaiter,this&&this.__generator},"./src/util/http.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("./node_modules/inversify/lib/inversify.js"),o=(n.n(r),n("./node_modules/axios/index.js")),i=n.n(o),s=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},c=function(){function t(){this.get=i.a.get,this.post=i.a.post,this.delete=i.a.delete,this.head=i.a.head,this.put=i.a.put,this.patch=i.a.patch}return t.prototype.setDefaultHeader=function(t,e){i.a.defaults.headers.common[t]=e},t=s([Object(r.injectable)()],t)}()},"./src/util/log.ts":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t.prototype.info=function(t){console.info(t)},t.prototype.warn=function(t){console.warn(t)},t.prototype.error=function(t){console.error(t)},t}()}},["./src/main.ts"]);