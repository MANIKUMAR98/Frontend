"use strict";(self.webpackChunkmy_first_project=self.webpackChunkmy_first_project||[]).push([[3483],{3483:(A,m,a)=>{a.r(m),a.d(m,{ion_loading:()=>C});var p=a(5861),t=a(9725),g=a(8958),b=a(2831),y=a(9229),r=a(5044),_=a(4459),c=a(8653),n=a(1072);a(1848),a(1291);const k=i=>{const o=(0,n.c)(),e=(0,n.c)(),s=(0,n.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),o.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,s])},w=i=>{const o=(0,n.c)(),e=(0,n.c)(),s=(0,n.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),o.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,s])},h=i=>{const o=(0,n.c)(),e=(0,n.c)(),s=(0,n.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),s.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),o.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,s])},f=i=>{const o=(0,n.c)(),e=(0,n.c)(),s=(0,n.c)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),o.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,s])},C=class{constructor(i){(0,t.r)(this,i),this.didPresent=(0,t.d)(this,"ionLoadingDidPresent",7),this.willPresent=(0,t.d)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,t.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,t.d)(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=(0,t.d)(this,"didPresent",7),this.willPresentShorthand=(0,t.d)(this,"willPresent",7),this.willDismissShorthand=(0,t.d)(this,"willDismiss",7),this.didDismissShorthand=(0,t.d)(this,"didDismiss",7),this.delegateController=(0,r.d)(this),this.lockController=(0,y.c)(),this.triggerController=(0,r.e)(),this.customHTMLEnabled=c.c.get("innerHTMLTemplatesEnabled",g.E),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,r.B)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(i,o){!0===i&&!1===o?this.present():!1===i&&!0===o&&this.dismiss()}triggerChanged(){const{trigger:i,el:o,triggerController:e}=this;i&&e.addClickListener(o,i)}connectedCallback(){(0,r.j)(this.el),this.triggerChanged()}componentWillLoad(){if(void 0===this.spinner){const i=(0,c.b)(this);this.spinner=c.c.get("loadingSpinner",c.c.get("spinner","ios"===i?"lines":"crescent"))}(0,r.k)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,b.r)(()=>this.present()),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}present(){var i=this;return(0,p.Z)(function*(){const o=yield i.lockController.lock();yield i.delegateController.attachViewToDom(),yield(0,r.f)(i,"loadingEnter",k,h),i.duration>0&&(i.durationTimeout=setTimeout(()=>i.dismiss(),i.duration+10)),o()})()}dismiss(i,o){var e=this;return(0,p.Z)(function*(){const s=yield e.lockController.lock();e.durationTimeout&&clearTimeout(e.durationTimeout);const u=yield(0,r.g)(e,i,o,"loadingLeave",w,f);return u&&e.delegateController.removeViewFromDom(),s(),u})()}onDidDismiss(){return(0,r.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return(0,r.h)(this.el,"ionLoadingWillDismiss")}renderLoadingMessage(i){const{customHTMLEnabled:o,message:e}=this;return o?(0,t.h)("div",{class:"loading-content",id:i,innerHTML:(0,g.a)(e)}):(0,t.h)("div",{class:"loading-content",id:i},e)}render(){const{message:i,spinner:o,htmlAttributes:e,overlayIndex:s}=this,u=(0,c.b)(this),D=`loading-${s}-msg`;return(0,t.h)(t.H,Object.assign({key:"95123f54ba1db5e59563d79db075315b43ed20f7",role:"dialog","aria-modal":"true","aria-labelledby":void 0!==i?D:null,tabindex:"-1"},e,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,_.g)(this.cssClass)),{[u]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),(0,t.h)("ion-backdrop",{key:"e113bf123eaad38f2dafce8ea5d2ebef409d0c0f",visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,t.h)("div",{key:"1268c9480854383c7883a79d597350540ade93c2",tabindex:"0"}),(0,t.h)("div",{key:"e86fc71504ebd578117dea2232d9740a087d1249",class:"loading-wrapper ion-overlay-wrapper"},o&&(0,t.h)("div",{class:"loading-spinner"},(0,t.h)("ion-spinner",{name:o,"aria-hidden":"true"})),void 0!==i&&this.renderLoadingMessage(D)),(0,t.h)("div",{key:"3b91e2492e06aa65ebe77ed2b6ffb9d2f84bdd9c",tabindex:"0"}))}get el(){return(0,t.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}};C.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}"}},4459:(A,m,a)=>{a.d(m,{c:()=>b,g:()=>r,h:()=>g,o:()=>c});var t,p=a(5861);const g=(n,d)=>null!==d.closest(n),b=(n,d)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},d):d,r=n=>{const d={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(n).forEach(l=>d[l]=!0),d},_=/^[a-z][a-z0-9+\-.]*:/,c=function(d,l,k,w){return(t=t||(0,p.Z)(function*(h,f,E,x){if(null!=h&&"#"!==h[0]&&!_.test(h)){const v=document.querySelector("ion-router");if(v)return f?.preventDefault(),v.push(h,E,x)}return!1})).apply(this,arguments)}}}]);