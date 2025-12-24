import{I as z,c as J,r as Q,o as W,N as Y,i as L,F as Z,s as ee}from"./Footer.uysjqDA6.js";import{g as F,h as G,d as te,e as ae,o as re,a as p,q as oe,l as se,f as D,c as r,t as C,j as i,b as f,i as o,s as a,r as s,n as ne,k as P}from"./snippet.DAV2K58k.js";/* empty css                          */import{C as R}from"./chevron-right.DEUEjf-v.js";/* empty css                              */function le(h,d){G(d,!0);/**
 * @license @lucide/svelte v0.553.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let c=Q(d,["$$slots","$$events","$$legacy"]);const u=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];z(h,J({name:"download"},()=>c,{get iconNode(){return u},children:(n,l)=>{var v=te(),m=ae(v);re(m,()=>d.children??oe),p(n,v)},$$slots:{default:!0}})),F()}var ie=D('<p class="mt-4 text-rose-300 font-sans text-base svelte-ku671w"> </p>'),de=D('<a class="flex items-center justify-center gap-2 rounded-2xl border border-blue-500 bg-blue-600/80 px-6 py-2 font-sans text-white shadow-lg transition hover:bg-blue-500 svelte-ku671w" target="_blank" rel="noopener noreferrer">Open release notes</a>'),ce=D('<div class="svelte-ku671w"><!> <div class="aurora-container h-120 mb-50 svelte-ku671w"><div class="aurora-backdrop svelte-ku671w"></div> <div class="aurora-content flex flex-col justify-center items-center text-center pt-40 svelte-ku671w"><p class="text-white text-6xl font-bold svelte-ku671w">Thank you for downloading Atlas!</p> <p class="mt-6 text-white/80 font-sans text-lg svelte-ku671w"> </p> <!> <div class="mt-8 flex flex-col gap-3 sm:flex-row svelte-ku671w"><button class="flex items-center justify-center gap-2 rounded-2xl border border-cyan-500 bg-cyan-600/90 px-6 py-2 font-sans text-white shadow-lg transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 svelte-ku671w"><!> Download again</button> <!></div> <a href="/learn/first-project" class="mt-10 inline-flex items-center text-white font-sans text-xl hover:glow svelte-ku671w">Try out our starter guide <!></a> <a href="/overview/releases" class="mt-6 inline-flex items-center text-white font-sans text-xl hover:glow svelte-ku671w">Check other releases <!></a></div></div> <!></div>');function he(h,d){G(d,!0);let c=f("Preparing your download…"),u=f(null),n=f(null),l=f(null);const v=t=>{const e=document.createElement("a");e.href=t,e.download="atlas",e.rel="noopener",e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)},m=t=>t?t.find(e=>e.name.toLowerCase()==="atlas")??t.find(e=>e.name.toLowerCase().includes("atlas"))??null:null;W(async()=>{try{const t=await fetch("/releases.json");if(!t.ok)throw new Error("Unable to load releases configuration.");const e=await t.json(),k=e.latest,U=e.releases?.[k];if(!U)throw new Error("Latest release information is missing.");const M=await fetch(U.url,{headers:{Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"}});if(!M.ok)throw new Error("Unable to retrieve release details from GitHub.");const H=await M.json();i(l,H.html_url,!0);const j=m(H.assets);if(!j)throw new Error("No executable named 'atlas' was found in the latest release.");i(n,j.browser_download_url,!0),i(c,"Download should start automatically."),v(j.browser_download_url)}catch(t){console.error(t),i(u,t instanceof Error?t.message:"Something went wrong while preparing your download.",!0),i(c,"Unable to start download automatically."),o(l)||i(l,"/overview/releases")}});const I=()=>{o(n)&&v(o(n))};var g=ce(),E=r(g);Y(E,{});var b=a(E,2),$=a(r(b),2),x=a(r($),2),T=r(x,!0);s(x);var A=a(x,2);{var V=t=>{var e=ie(),k=r(e,!0);s(e),C(()=>P(k,o(u))),p(t,e)};L(A,t=>{o(u)&&t(V)})}var _=a(A,2),w=r(_);w.__click=I;var q=r(w);le(q,{class:"h-5 w-5"}),ne(),s(w);var B=a(w,2);{var K=t=>{var e=de();C(()=>ee(e,"href",o(l))),p(t,e)};L(B,t=>{o(l)&&t(K)})}s(_);var y=a(_,2),O=a(r(y));R(O,{}),s(y);var N=a(y,2),S=a(r(N));R(S,{}),s(N),s($),s(b);var X=a(b,2);Z(X),s(g),C(()=>{P(T,o(c)),w.disabled=!o(n)}),p(h,g),F()}se(["click"]);export{he as default};
