!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!O[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===b&&k()}(e,t),n&&n(e,t)};var t,r=!0,o="d847419f3826d09f99af",i=1e4,a={},c=[],s=[];function d(e){var n=A[e];if(!n)return D;var r=function(r){return n.hot.active?(A[r]?-1===A[r].parents.indexOf(e)&&A[r].parents.push(e):(c=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),D(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(n){D[e]=n}}};for(var i in D)Object.prototype.hasOwnProperty.call(D,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===l&&p("prepare"),b++,D.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===l&&(g[e]||E(e),0===b&&0===y&&k())}},r.t=function(e,n){return 1&n&&(e=r(e)),D.t(e,-2&n)},r}function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:_,status:function(e){if(!e)return l;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var n=f.indexOf(e);n>=0&&f.splice(n,1)},data:a[e]};return t=void 0,n}var f=[],l="idle";function p(e){l=e;for(var n=0;n<f.length;n++)f[n].call(null,e)}var h,v,m,y=0,b=0,g={},w={},O={};function x(e){return+e+""===e?+e:e}function j(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=D.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;w={},g={},O=e.c,m=e.h,p("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});v={};return E(0),"prepare"===l&&0===b&&0===y&&k(),n});var n}function E(e){O[e]?(w[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=D.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function k(){p("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return _(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(x(t));e.resolve(n)}}function _(n){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var t,r,i,s,d;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((s=A[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<s.parents.length;c++){var d=s.parents[c],u=A[d];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([d]),moduleId:i,parentId:d};-1===n.indexOf(d)&&(u.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),f(t[d],[i])):(delete t[d],n.push(d),r.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],b={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var j;d=x(w);var E=!1,k=!1,_=!1,U="";switch((j=v[w]?u(d):{type:"disposed",moduleId:w}).chain&&(U="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+j.moduleId+U));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+U));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(E=new Error("Aborted because "+d+" is not accepted"+U));break;case"accepted":n.onAccepted&&n.onAccepted(j),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),_=!0;break;default:throw new Error("Unexception type "+j.type)}if(E)return p("abort"),Promise.reject(E);if(k)for(d in b[d]=v[d],f(y,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(h[d]||(h[d]=[]),f(h[d],j.outdatedDependencies[d]));_&&(f(y,[j.moduleId]),b[d]=g)}var S,I=[];for(r=0;r<y.length;r++)d=y[r],A[d]&&A[d].hot._selfAccepted&&I.push({module:d,errorHandler:A[d].hot._selfAccepted});p("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete installedChunks[e]}(e)});for(var M,R,H=y.slice();H.length>0;)if(d=H.pop(),s=A[d]){var L={},P=s.hot._disposeHandlers;for(i=0;i<P.length;i++)(t=P[i])(L);for(a[d]=L,s.hot.active=!1,delete A[d],delete h[d],i=0;i<s.children.length;i++){var q=A[s.children[i]];q&&((S=q.parents.indexOf(d))>=0&&q.parents.splice(S,1))}}for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(s=A[d]))for(R=h[d],i=0;i<R.length;i++)M=R[i],(S=s.children.indexOf(M))>=0&&s.children.splice(S,1);for(d in p("apply"),o=m,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var C=null;for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(s=A[d])){R=h[d];var T=[];for(r=0;r<R.length;r++)if(M=R[r],t=s.hot._acceptedDependencies[M]){if(-1!==T.indexOf(t))continue;T.push(t)}for(r=0;r<T.length;r++){t=T[r];try{t(R)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:R[r],error:e}),n.ignoreErrored||C||(C=e)}}}for(r=0;r<I.length;r++){var N=I[r];d=N.module,c=[d];try{D(d)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||C||(C=t),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||C||(C=e)}}return C?(p("fail"),Promise.reject(C)):(p("idle"),new Promise(function(e){e(y)}))}var A={};function D(n){if(A[n])return A[n].exports;var t=A[n]={i:n,l:!1,exports:{},hot:u(n),parents:(s=c,c=[],s),children:[]};return e[n].call(t.exports,t,t.exports,d(n)),t.l=!0,t.exports}D.m=e,D.c=A,D.d=function(e,n,t){D.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,n){if(1&n&&(e=D(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(D.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)D.d(t,r,function(n){return e[n]}.bind(null,r));return t},D.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(n,"a",n),n},D.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},D.p="//say-healer.github.io/animation-demo/",D.h=function(){return o},d(1)(D.s=1)}([function(e,n,t){n=e.exports=t(4)(!1);var r=t(5)(t(6));n.push([e.i,'body {\n  background: linear-gradient(135deg, #c90015 0%, #c90014 100%) fixed;\n  background: rgba(0, 0, 0, 1);\n  font: 300 16px/1.5 "Open Sans", sans-serif;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\ndiv,\np,\nspan {\n  margin: 0;\n  padding: 0;\n}\n\n.fireworks {\n  width: 450px;\n  height: 450px;\n  background: url('+r+') no-repeat;\n  /* background: url("//res1.eqh5.com/o_1d1sab6n8s2hcpq1ek41qso154v1h.png") no-repeat; */\n  background-position: 0 0;\n  cursor: pointer;\n  /* transform: scale(.5); */\n  position: absolute;\n}\n\n.fireworks.is-active {\n  animation-name: inform;\n  animation-timing-function: steps(28);\n  animation-duration: 1.2s;\n  /* animation-delay: 3s; */\n  animation-iteration-count: infinite;\n\n}\n\n@keyframes inform {\n  0% {\n    background-position: 0 0;\n  }\n\n  100% {\n    background-position: -12600px 0;\n  }\n}',""])},function(e,n,t){e.exports=t(2)},function(e,n,t){"use strict";t.r(n);t(3);window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,400/60)};document.querySelector(".fireworks");const r=document.querySelector("body");function o(e,n){let t=document.createElement("div");t.className="fireworks is-active",t.style.left=e-225+"px",t.style.top=n-225+"px",t.style.transform=`scale(${function(){let e=Math.random();return e>7?e-2:e}()})`,r.appendChild(t)}o(200,200);r.addEventListener("click",function(e){o(e.pageX,e.pageY)})},function(e,n,t){var r=t(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=t(7)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var n=t(0);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),e.hot.dispose(function(){i()})},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||n?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,n,t){e.exports=t.p+"images/bigbang-d8a897a5.png"},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,d=0,u=[],f=t(8);function l(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],n))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(b(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function h(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,t);t.insertBefore(n,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return y(n,e.attrs),h(e,n),n}function y(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=d++;t=s||(s=m(n)),r=O.bind(null,t,a,!1),o=O.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(n,e.attrs),h(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,n),o=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){v(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return l(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(c=i[a.id]).refs--,r.push(c)}e&&l(p(e,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var g,w=(g=[],function(e,n){return g[e]=n,g.filter(Boolean).join("\n")});function O(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);
//# sourceMappingURL=main.bundle.js.map