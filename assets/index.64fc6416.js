const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};d();const g=document.getElementById("sub"),p=document.getElementById("reset"),m=document.getElementById("add"),v=(o,r)=>o+r,b=({target:o})=>{const r=document.getElementById("counter"),a=o.textContent==="RESET"?0:v(+r.textContent,+o.textContent);r.textContent=a};[g,p,m].forEach(o=>o.addEventListener("click",b));const u=document.querySelector("form"),c=document.getElementById("todo-content");let i=[{key:"todo-0",content:"\uD14C\uC2A4\uD2B8"}];const s=()=>{c.replaceChildren();const o=i.map(({key:r,content:a})=>`
  <div class="row" key=${r}>
    <div class="todo-title">
      <span>${a}</span>
    </div>
    <div class="todo-action">
      <span class="complete">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-check">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="remove">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-trash-2">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </span>
    </div>
  </div>`).join("");c.insertAdjacentHTML("afterbegin",o)};u.addEventListener("submit",o=>{o.preventDefault();const r=Number(i.length===0?0:i.at(-1).key.split("-")[1])+1,{value:a}=o.target.elements["todo-input"];i.push({key:`todo-${r}`,content:a}),s(),o.target.elements["todo-input"].value=""});c.addEventListener("click",({target:o})=>{if(!o.matches("span"))return;console.log(o);const r=o.closest(".row"),a=r.getAttribute("key");o.matches(".complete")?r.classList.toggle("complete-todo"):o.matches(".remove")&&(i=i.filter(({key:n})=>n!==a),s())});
