!function(e){var t={};function c(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=t,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){"use strict";c.r(t);var r=()=>{const e=document.querySelector(".goods");return fetch("../db/db.json").then(e=>{if(e.ok)return e.json();throw new Error(`Данные не были получены ${e.status}`)}).then(e=>e).catch(t=>{console.warn(t),e.innerHTML='<div style="font-size: 40px;">Упс..Что-то пошло не так!</div>'})};var n=e=>{const t=document.querySelector(".goods");e.goods.forEach(e=>{const c=document.createElement("div");c.className="col-12 col-md-6 col-lg-4 col-xl-3",c.innerHTML=`\n        <div class="card" data-category="${e.category}">\n          ${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n          <div class="card-img-wrapper">\n            <span class="card-img-top"\n              style="background-image: url('${e.img}')"></span>\n          </div>\n          <div class="card-body justify-content-between">\n            <div class="card-price" >\n            <span ${e.sale?'style="color:red;"':""}>\n            ${e.price}</span> ₽</div>\n            <h5 class="card-title">${e.title}</h5>\n            <button class="btn btn-primary">В корзину</button>\n          </div>\n        </div>\n      `,t.appendChild(c)})};var o=()=>{const e=document.querySelectorAll(".goods .card"),t=document.querySelectorAll(".filter-check_label")[0],c=document.querySelector("#min"),r=document.querySelector("#max"),n=document.querySelector(".catalog-list li.active");e.forEach(e=>{const o=e.querySelector(".card-price"),l=parseFloat(o.textContent),a=e.querySelector(".card-sale"),s=t.querySelectorAll(".filter-check_checkmark")[0];e.parentElement.style.display="block",l<c.value&&c.value||r.value&&l>r.value?e.parentElement.style.display="none":s.classList.contains("checked")&&!a?e.parentElement.style.display="none":n&&e.dataset.category!==n.textContent&&(e.parentElement.style.display="none")})};var l=()=>{const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".catalog"),c=t.querySelector(".catalog-list"),r=document.querySelector(".catalog-button"),n=new Set;e.forEach(e=>{n.add(e.dataset.category)}),n.forEach(e=>{const t=document.createElement("li");t.textContent=e,c.appendChild(t)});const l=c.querySelectorAll("li");r.addEventListener("click",e=>{"block"===t.style.display?t.style.display="none":t.style.display="block","LI"===e.target.tagName&&(l.forEach(t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")}),o())})};var a=()=>{document.querySelectorAll(".filter-check_label").forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector(".filter-check_checkmark");t.classList.contains("checked")?t.classList.remove("checked"):t.classList.add("checked")})})};var s=()=>{const e=document.querySelector("#cart"),t=document.querySelector(".cart"),c=t.querySelector(".cart-close");e.addEventListener("click",()=>{t.style.display="flex",document.body.style.overflow="hidden"}),c.addEventListener("click",()=>{t.style.display="none",document.body.style.overflow="visible"})};var d=()=>{const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".cart-wrapper"),c=document.querySelector(".counter"),r=document.querySelector("#cart-empty"),n=()=>{const e=t.querySelectorAll(".card"),n=t.querySelectorAll(".card-price"),o=document.querySelector(".cart-total span");c.textContent=e.length;let l=0;n.forEach(e=>{const t=parseFloat(e.textContent);l+=t}),o.textContent=l,0!==e.length?r.style.display="none":r.style.display="block"};e.forEach(e=>{e.querySelector("button").addEventListener("click",()=>{const c=e.cloneNode(!0);t.appendChild(c),n();const r=c.querySelector("button");r.textContent="Удалить из корзины",r.addEventListener("click",()=>{c.remove(),n()})})})};var i=()=>{const e=document.querySelectorAll(".goods .card"),t=document.querySelectorAll(".filter-check_label")[0],c=document.querySelector("#min"),r=document.querySelector("#max"),n=document.querySelector(".search-wrapper_input"),l=document.querySelector(".search-btn");t.addEventListener("click",o),c.addEventListener("change",o),r.addEventListener("change",o),l.addEventListener("click",()=>{const t=new RegExp(n.value.trim(),"i");e.forEach(e=>{const c=e.querySelector(".card-title");t.test(c.textContent)?e.parentElement.style.display="block":e.parentElement.style.display="none"}),n.value=""})};!async function(){const e=await r();n(e),l(),a(),s(),d(),i()}()}]);