function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var r=l("eWCmQ");const i=document.querySelector(".form"),s=document.querySelector("button");let u=0;delay=0,step=0;const a=(e,t)=>new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}));s.addEventListener("click",(function(t){t.preventDefault(),console.log(`picker got values: amount: ${u}, delay: ${delay}, step: ${step}`);for(let t=0;t<u;t++){let o=t+1;console.log(`call ${t} times, position: ${o}, delay: ${delay}`),a(o,delay).then((({position:t,delay:o})=>{console.log(`✅ Fulfilled promise ${t} in ${o}ms`),e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:5e3,useIcon:!1})})).catch((({position:t,delay:o})=>{console.log(`❌ Rejected promise ${t} in ${o}ms`),e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{timeout:5e3,useIcon:!1})})),delay+=step}i.reset()})),i.addEventListener("input",(function(e){u=Number(e.currentTarget.elements.amount.value),delay=Number(e.currentTarget.elements.delay.value),step=Number(e.currentTarget.elements.step.value)}));
//# sourceMappingURL=03-promises.b35f84a8.js.map
