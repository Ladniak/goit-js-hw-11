import{i as d,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=r=>`
    <li class="gallery-card">
        <a href="${r.largeImageURL}">
            <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}">
        </a>
        <div class="info-div">
            <div class="info-one-template">
                <p class="name">Likes</p>
                <p>${r.likes}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Views</p>
                <p>${r.views}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Comments</p>
                <p>${r.comments}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Downloads</p>
                <p>${r.downloads}</p>
            </div>
        </div>
    </li>
    `,m="https://pixabay.com",h=r=>{const o=new URLSearchParams({key:"45500129-782b0efec7a4b6e4cb35c382f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},c=document.querySelector(".gallery"),a=document.querySelector(".search-form"),n=document.querySelector("span"),f=r=>{r.preventDefault(),n.classList.remove("is-hidden");const o=a.elements.user_query.value;if(o==""){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",a.reset(),n.classList.add("is-hidden");return}h(o).then(s=>{if(s.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",a.reset(),n.classList.add("is-hidden");return}const i=s.hits.map(t=>p(t)).join("");c.innerHTML=i;let e=new u(".gallery a");e.refresh(),e.on("show.simplelightbox",function(){})}).catch(s=>{console.log(s)}).finally(()=>{n.classList.add("is-hidden")}),a.reset()};a.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
