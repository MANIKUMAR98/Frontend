"use strict";(self.webpackChunkMyPortfolio=self.webpackChunkMyPortfolio||[]).push([[9588],{9588:(w,m,s)=>{s.r(m),s.d(m,{ion_spinner:()=>h});var i=s(9725),d=s(4459),l=s(8653),u=s(2217);const h=class{constructor(r){(0,i.r)(this,r),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}getName(){const r=this.name||l.c.get("spinner"),n=(0,l.b)(this);return r||("ios"===n?"lines":"circular")}render(){var r;const n=this,c=(0,l.b)(n),o=n.getName(),e=null!==(r=u.S[o])&&void 0!==r?r:u.S.lines,f="number"==typeof n.duration&&n.duration>10?n.duration:e.dur,p=[];if(void 0!==e.circles)for(let a=0;a<e.circles;a++)p.push(y(e,f,a,e.circles));else if(void 0!==e.lines)for(let a=0;a<e.lines;a++)p.push(t(e,f,a,e.lines));return(0,i.h)(i.H,{key:"47cd6cd98e36e5b99fbe263a6a102610cae240c3",class:(0,d.c)(n.color,{[c]:!0,[`spinner-${o}`]:!0,"spinner-paused":n.paused||l.c.getBoolean("_testing")}),role:"progressbar",style:e.elmDuration?{animationDuration:f+"ms"}:{}},p)}},y=(r,n,c,o)=>{const e=r.fn(n,c,o);return e.style["animation-duration"]=n+"ms",(0,i.h)("svg",{viewBox:e.viewBox||"0 0 64 64",style:e.style},(0,i.h)("circle",{transform:e.transform||"translate(32,32)",cx:e.cx,cy:e.cy,r:e.r,style:r.elmDuration?{animationDuration:n+"ms"}:{}}))},t=(r,n,c,o)=>{const e=r.fn(n,c,o);return e.style["animation-duration"]=n+"ms",(0,i.h)("svg",{viewBox:e.viewBox||"0 0 64 64",style:e.style},(0,i.h)("line",{transform:"translate(32,32)",y1:e.y1,y2:e.y2}))};h.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},4459:(w,m,s)=>{s.d(m,{c:()=>u,g:()=>k,h:()=>l,o:()=>y});var d,i=s(5861);const l=(t,r)=>null!==r.closest(t),u=(t,r)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},r):r,k=t=>{const r={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(t).forEach(n=>r[n]=!0),r},h=/^[a-z][a-z0-9+\-.]*:/,y=function(r,n,c,o){return(d=d||(0,i.Z)(function*(e,f,p,a){if(null!=e&&"#"!==e[0]&&!h.test(e)){const b=document.querySelector("ion-router");if(b)return f?.preventDefault(),b.push(e,p,a)}return!1})).apply(this,arguments)}}}]);