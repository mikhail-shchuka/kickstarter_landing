parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
function e(e){return i(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.querySelector(".icon__slider--right"),c=document.querySelector(".icon__slider--left"),u=e(document.querySelectorAll(".aboutUs__card")),d=document.querySelector(".left"),a=document.querySelector(".video__file"),s=document.querySelector(".video__button--play"),y=document.querySelector(".video__button--stop"),f=document.querySelector(".features-left"),b=document.querySelector(".features-right"),v=e(document.querySelectorAll(".features__cards-card")),m=document.querySelector(".featuresCountLeft");y.style.visibility="hidden",l.addEventListener("click",q),c.addEventListener("click",L),c.disabled=!0;var p=0,S=0;function _(e,t,n,r,i,o){e[o].style.display="block",e[o-1].style.display="none",t.disabled=!1,o<r&&(i.innerHTML="0".concat(o+1)),o===e.length-1&&(n.disabled=!0)}function h(e,t,n,r,i,o){var l=+i.innerHTML[1];e[o].style.display="block",e[o+1].style.display="none",n.disabled=!1,o<r&&(i.innerHTML="0".concat(l-1)),0===o&&(t.disabled=!0)}function q(){return _(u,c,l,4,d,++p)}function L(){return h(u,c,l,3,d,--p)}function A(){y.style.visibility="visible",a.style.visibility="visible",a.play(),s.style.visibility="hidden"}function g(){a.pause(),y.style.visibility="hidden",s.style.visibility="visible"}function k(){return h(v,f,b,3,m,--S)}function E(){return _(v,f,b,3,m,++S)}s.addEventListener("click",A),y.addEventListener("click",g),f.addEventListener("click",k),b.addEventListener("click",E);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ffa3b253.js.map