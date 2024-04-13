"use strict";(self.webpackChunkmy_first_project=self.webpackChunkmy_first_project||[]).push([[8484],{8484:(w,x,u)=>{u.r(x),u.d(x,{ion_accordion:()=>m,ion_accordion_group:()=>b});var l=u(5861),s=u(9725),h=u(2831),v=u(1076),g=u(8653),y=u(2400);const m=class{constructor(o){var t=this;(0,s.r)(this,o),this.updateListener=()=>this.updateState(!1),this.setItemDefaults=()=>{const e=this.getSlottedHeaderIonItem();e&&(e.button=!0,e.detail=!1,void 0===e.lines&&(e.lines="full"))},this.getSlottedHeaderIonItem=()=>{const{headerEl:e}=this;if(!e)return;const n=e.querySelector("slot");return n&&void 0!==n.assignedElements?n.assignedElements().find(i=>"ION-ITEM"===i.tagName):void 0},this.setAria=(e=!1)=>{const n=this.getSlottedHeaderIonItem();if(!n)return;const r=(0,h.g)(n).querySelector("button");r&&r.setAttribute("aria-expanded",`${e}`)},this.slotToggleIcon=()=>{const e=this.getSlottedHeaderIonItem();if(!e)return;const{toggleIconSlot:n,toggleIcon:i}=this;if(e.querySelector(".ion-accordion-toggle-icon"))return;const a=document.createElement("ion-icon");a.slot=n,a.lazy=!1,a.classList.add("ion-accordion-toggle-icon"),a.icon=i,a.setAttribute("aria-hidden","true"),e.appendChild(a)},this.expandAccordion=(e=!1)=>{const{contentEl:n,contentElWrapper:i}=this;e||void 0===n||void 0===i?this.state=4:4!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?(0,h.r)(()=>{this.state=8,this.currentRaf=(0,h.r)((0,l.Z)(function*(){const r=i.offsetHeight,a=(0,h.t)(n,2e3);n.style.setProperty("max-height",`${r}px`),yield a,t.state=4,n.style.removeProperty("max-height")}))}):this.state=4)},this.collapseAccordion=(e=!1)=>{const{contentEl:n}=this;e||void 0===n?this.state=1:1!==this.state&&(void 0!==this.currentRaf&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=(0,h.r)((0,l.Z)(function*(){n.style.setProperty("max-height",`${n.offsetHeight}px`),(0,h.r)((0,l.Z)(function*(){const r=(0,h.t)(n,2e3);t.state=2,yield r,t.state=1,n.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>!(typeof window>"u"||matchMedia("(prefers-reduced-motion: reduce)").matches||!g.c.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=(0,l.Z)(function*(e=!1){const n=t.accordionGroupEl,i=t.value;if(!n)return;const r=n.value;if(Array.isArray(r)?r.includes(i):r===i)t.expandAccordion(e),t.isNext=t.isPrevious=!1;else{t.collapseAccordion(e);const c=t.getNextSibling(),d=c?.value;void 0!==d&&(t.isPrevious=Array.isArray(r)?r.includes(d):r===d);const p=t.getPreviousSibling(),f=p?.value;void 0!==f&&(t.isNext=Array.isArray(r)?r.includes(f):r===f)}}),this.getNextSibling=()=>{if(!this.el)return;const e=this.el.nextElementSibling;return"ION-ACCORDION"===e?.tagName?e:void 0},this.getPreviousSibling=()=>{if(!this.el)return;const e=this.el.previousElementSibling;return"ION-ACCORDION"===e?.tagName?e:void 0},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value="ion-accordion-"+_++,this.disabled=!1,this.readonly=!1,this.toggleIcon=v.l,this.toggleIconSlot="end"}valueChanged(){this.updateState()}connectedCallback(){var o;const t=this.accordionGroupEl=null===(o=this.el)||void 0===o?void 0:o.closest("ion-accordion-group");t&&(this.updateState(!0),(0,h.a)(t,"ionValueChange",this.updateListener))}disconnectedCallback(){const o=this.accordionGroupEl;o&&(0,h.b)(o,"ionValueChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),(0,h.r)(()=>{this.setAria(4===this.state||8===this.state)})}toggleExpanded(){const{accordionGroupEl:o,disabled:t,readonly:e,value:n,state:i}=this;t||e||!o||o.requestAccordionToggle(n,1===i||2===i)}render(){const{disabled:o,readonly:t}=this,e=(0,g.b)(this),n=4===this.state||8===this.state,i=n?"header expanded":"header",r=n?"content expanded":"content";return this.setAria(n),(0,s.h)(s.H,{key:"073e1d02c18dcbc20c68648426e87c14750c031d",class:{[e]:!0,"accordion-expanding":8===this.state,"accordion-expanded":4===this.state,"accordion-collapsing":2===this.state,"accordion-collapsed":1===this.state,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":o,"accordion-readonly":t,"accordion-animated":this.shouldAnimate()}},(0,s.h)("div",{key:"9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc",onClick:()=>this.toggleExpanded(),id:"header",part:i,"aria-controls":"content",ref:a=>this.headerEl=a},(0,s.h)("slot",{key:"464c32a37f64655eacf4218284214f5f30b14a1e",name:"header"})),(0,s.h)("div",{key:"8bb52e6a62d7de0106b253201a89a32e79d9a594",id:"content",part:r,role:"region","aria-labelledby":"header",ref:a=>this.contentEl=a},(0,s.h)("div",{key:"1d9dfd952ad493754aaeea7a8f625b33c2dd90a0",id:"content-wrapper",ref:a=>this.contentElWrapper=a},(0,s.h)("slot",{key:"970dfbc55a612d739d0ca3b7b1a08e5c96d0c479",name:"content"}))))}static get delegatesFocus(){return!0}get el(){return(0,s.f)(this)}static get watchers(){return{value:["valueChanged"]}}};let _=0;m.style={ios:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",md:":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}"};const b=class{constructor(o){(0,s.r)(this,o),this.ionChange=(0,s.d)(this,"ionChange",7),this.ionValueChange=(0,s.d)(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){const{value:o,multiple:t}=this;!t&&Array.isArray(o)&&(0,y.p)(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: [${o.map(e=>`'${e}'`).join(", ")}]\n`,this.el),this.ionValueChange.emit({value:this.value})}disabledChanged(){var o=this;return(0,l.Z)(function*(){const{disabled:t}=o,e=yield o.getAccordions();for(const n of e)n.disabled=t})()}readonlyChanged(){var o=this;return(0,l.Z)(function*(){const{readonly:t}=o,e=yield o.getAccordions();for(const n of e)n.readonly=t})()}onKeydown(o){var t=this;return(0,l.Z)(function*(){const e=document.activeElement;if(!e||!e.closest('ion-accordion [slot="header"]'))return;const i="ION-ACCORDION"===e.tagName?e:e.closest("ion-accordion");if(!i||i.closest("ion-accordion-group")!==t.el)return;const a=yield t.getAccordions(),c=a.findIndex(p=>p===i);if(-1===c)return;let d;"ArrowDown"===o.key?d=t.findNextAccordion(a,c):"ArrowUp"===o.key?d=t.findPreviousAccordion(a,c):"Home"===o.key?d=a[0]:"End"===o.key&&(d=a[a.length-1]),void 0!==d&&d!==e&&d.focus()})()}componentDidLoad(){var o=this;return(0,l.Z)(function*(){o.disabled&&o.disabledChanged(),o.readonly&&o.readonlyChanged(),o.valueChanged()})()}setValue(o){const t=this.value=o;this.ionChange.emit({value:t})}requestAccordionToggle(o,t){var e=this;return(0,l.Z)(function*(){const{multiple:n,value:i,readonly:r,disabled:a}=e;if(!r&&!a)if(t)if(n){const c=i??[],d=Array.isArray(c)?c:[c];void 0===d.find(f=>f===o)&&void 0!==o&&e.setValue([...d,o])}else e.setValue(o);else if(n){const c=i??[],d=Array.isArray(c)?c:[c];e.setValue(d.filter(p=>p!==o))}else e.setValue(void 0)})()}findNextAccordion(o,t){const e=o[t+1];return void 0===e?o[0]:e}findPreviousAccordion(o,t){const e=o[t-1];return void 0===e?o[o.length-1]:e}getAccordions(){var o=this;return(0,l.Z)(function*(){return Array.from(o.el.querySelectorAll(":scope > ion-accordion"))})()}render(){const{disabled:o,readonly:t,expand:e}=this,n=(0,g.b)(this);return(0,s.h)(s.H,{key:"ac2e26ac91c95d08172bd2b51daa7a711c21db9e",class:{[n]:!0,"accordion-group-disabled":o,"accordion-group-readonly":t,[`accordion-group-expand-${e}`]:!0},role:"presentation"},(0,s.h)("slot",{key:"444adc2af5730897eba57095da046d6bdb5af70f"}))}get el(){return(0,s.f)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};b.style={ios:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",md:":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-previous){border-bottom-right-radius:6px;border-bottom-left-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}:host-context([dir=rtl]):host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next),:host-context([dir=rtl]).accordion-group-expand-inset ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}@supports selector(:dir(rtl)){:host(.accordion-group-expand-inset:dir(rtl)) ::slotted(ion-accordion.accordion-next){border-top-left-radius:6px;border-top-right-radius:6px}}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"}}}]);