!function(){"use strict";var e,t,r,n,o={},u={};function i(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=o,e=[],i.O=function(t,r,n,o){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],n=e[f][1],o=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(i.O).every(function(e){return i.O[e](r[c])})?r.splice(c--,1):(a=!1,o<u&&(u=o));a&&(e.splice(f--,1),t=n())}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce(function(t,r){return i.f[r](e,t),t},[]))},i.u=function(e){return e+".bb8e34d562f202341710.js"},i.miniCssF=function(e){return"styles.6f5cd4e5a5850121538f.css"},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},r="MyMarks:",i.l=function(e,n,o,u){if(t[e])t[e].push(n);else{var a,c;if(void 0!==o)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",r+o),a.src=i.tu(e)),t[e]=[n];var s=function(r,n){a.onerror=a.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach(function(e){return e(n)}),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.tu=function(e){return void 0===n&&(n={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(n=trustedTypes.createPolicy("angular#bundler",n))),n.createScriptURL(e)},i.p="",function(){var e={666:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(666!=t){var o=new Promise(function(r,o){n=e[t]=[r,o]});r.push(n[2]=o);var u=i.p+i.u(t),a=new Error;i.l(u,function(r){if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",a.name="ChunkLoadError",a.type=o,a.request=u,n[1](a)}},"chunk-"+t,t)}else e[t]=0},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,u=r[0],a=r[1],c=r[2],f=0;for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var l=c(i);for(t&&t(r);f<u.length;f++)i.o(e,o=u[f])&&e[o]&&e[o][0](),e[u[f]]=0;return i.O(l)},r=self.webpackChunkMyMarks=self.webpackChunkMyMarks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();