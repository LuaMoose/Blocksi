!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=531)}({531:function(e,t,n){e.exports=n(532)},532:function(e,t,n){"use strict";var o=JSON.parse(window.localStorage.getItem("textData"));document.getElementById("assessmentModeTitle")&&(document.getElementById("assessmentModeTitle").innerText=o.assessmentMode),document.getElementById("enforceModeTitle")&&(document.getElementById("enforceModeTitle").innerText=o.enforceMode),document.getElementById("enforceMode")&&(document.getElementById("enforceMode").innerText=o.enforceMode),document.getElementById("enforcePermission")&&(document.getElementById("enforcePermission").innerText=o.permissionForSites),document.getElementById("assessmentMode")&&(document.getElementById("assessmentMode").innerText=o.assessmentMode),document.getElementById("assessmentPermission")&&(document.getElementById("assessmentPermission").innerText=o.permissionForSites),function(e){const t=document.getElementById("urlList");e.forEach(e=>{const n=document.createElement("a"),o=e.indexOf("*")<0&&e.indexOf("http")<0?`http://${e}`:e;n.href=o.replace(/^\./,"").indexOf("*")<0?o:function(e){const t="*"===e[0]?e.substr(1):e;return`http://${0===t.indexOf(".")?`www.${t.substring(1)}`:t}`}(o),n.innerHTML=o,n.target="_self",t.appendChild(n)})}(function(e,t){const n=(t||window.location.href).split(`${e}=`)[1];return n?JSON.parse(decodeURIComponent(n)).urls:[]}("params",null))}});