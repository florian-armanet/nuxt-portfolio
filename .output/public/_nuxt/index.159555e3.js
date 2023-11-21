import{e as ae,r as T,f as se,g as H,w as ne,a as o,h as oe,u as j,i as S,o as u,c as p,d as e,t as d,j as le,k as C,l as Q,m as B,v as N,T as Z,n as re,F as M,p as E,q as ie,s as U,x as Y,b as z,y as P,z as ce,A as de,B as ue,S as W,C as J,D as q,E as K}from"./entry.d41bec43.js";const _e=()=>null;function O(...r){var h,g,y,w,f,D,L,k,$;const t=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(t);let[a,l,s={}]=r;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=(h=s.server)!=null?h:!0,s.default=(g=s.default)!=null?g:_e,s.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),s.lazy=(w=(y=s.lazy)!=null?y:s.defer)!=null?w:!1,s.initialCache=(f=s.initialCache)!=null?f:!0,s.immediate=(D=s.immediate)!=null?D:!0;const n=ae(),c=()=>(n.isHydrating||s.initialCache)&&n.payload.data[a]!==void 0;n._asyncData[a]||(n._asyncData[a]={data:T(c()?n.payload.data[a]:(k=(L=s.default)==null?void 0:L.call(s))!=null?k:null),pending:T(!c()),error:T(($=n.payload._errors[a])!=null?$:null)});const i={...n._asyncData[a]};i.refresh=i.execute=(x={})=>{if(n._asyncDataPromises[a]){if(x.dedupe===!1)return n._asyncDataPromises[a];n._asyncDataPromises[a].cancelled=!0}if(x._initial&&c())return n.payload.data[a];i.pending.value=!0;const I=new Promise((v,R)=>{try{v(l(n))}catch(V){R(V)}}).then(v=>{if(I.cancelled)return n._asyncDataPromises[a];s.transform&&(v=s.transform(v)),s.pick&&(v=pe(v,s.pick)),i.data.value=v,i.error.value=null}).catch(v=>{var R,V;if(I.cancelled)return n._asyncDataPromises[a];i.error.value=v,i.data.value=o((V=(R=s.default)==null?void 0:R.call(s))!=null?V:null)}).finally(()=>{I.cancelled||(i.pending.value=!1,n.payload.data[a]=i.data.value,i.error.value&&(n.payload._errors[a]=!0),delete n._asyncDataPromises[a])});return n._asyncDataPromises[a]=I,n._asyncDataPromises[a]};const _=()=>i.refresh({_initial:!0}),m=s.server!==!1&&n.payload.serverRendered;{const x=oe();if(x&&!x._nuxtOnBeforeMountCbs){x._nuxtOnBeforeMountCbs=[];const v=x._nuxtOnBeforeMountCbs;x&&(se(()=>{v.forEach(R=>{R()}),v.splice(0,v.length)}),H(()=>v.splice(0,v.length)))}m&&n.isHydrating&&a in n.payload.data?i.pending.value=!1:x&&(n.payload.serverRendered&&n.isHydrating||s.lazy)&&s.immediate?x._nuxtOnBeforeMountCbs.push(_):s.immediate&&_(),s.watch&&ne(s.watch,()=>i.refresh());const I=n.hook("app:data:refresh",v=>{if(!v||v.includes(a))return i.refresh()});x&&H(I)}const b=Promise.resolve(n._asyncDataPromises[a]).then(()=>i);return Object.assign(b,i),b}function pe(r,t){const a={};for(const l of t)a[l]=r[l];return a}const A="http://localhost:1337/api/",me={class:"js-appear-defer h-screen flex-flow-center flex-col max-w-md mx-auto"},fe={class:"js-appear-defer-child font-bold text-5xl md:text-6xl lg:text-7xl text-tertiary-base sm-down:text-center sm-down:leading-none sm-down:mb-4"},he={class:"js-appear-defer-child text-2xl md:text-4xl lg:text-5xl font-heading text-tertiary-hover mb-8 sm-down:text-center"},be={class:"js-appear-defer-child text-center text-tertiary-hover mb-8"},ve={class:"js-appear-defer-child"},ge=["data-scroll-trigger"],xe={__name:"Header",async setup(r){let t,a;const{fetchDataIntroduction:l,getDataIntroduction:s}=j.introduction(),{getSectionsCode:n}=j.sections(),{data:{value:{data:c}}}=([t,a]=S(()=>O("introduction",()=>$fetch(A+"introduction"))),t=await t,a(),t);return l(c.attributes),(i,_)=>(u(),p("header",me,[e("h1",fe,d(o(s).title),1),e("h2",he,d(o(s).subtitle),1),e("p",be,d(o(s).text),1),e("div",ve,[e("button",{class:"Button","data-scroll-trigger":o(n)[0]},d(o(s).label_button),9,ge)])]))}},ye=(r,t)=>{const a=r.__vccOpts||r;for(const[l,s]of t)a[l]=s;return a},we={name:"Skill",props:{skillName:String,skillValue:Number},setup(){return{tooltipOpened:T(!1),isMobile:le}}},$e={class:"w-40 mr-4 sm:line-clamp-1 sm-down:w-full"},ke=e("p",{class:"relative flex-1 mr-4 h-3"},[e("span",{class:"absolute top-0 left-0 bg-gradient-to-r from-primary-dark to-primary-base h-full w-0 js-score-value rounded-xl"})],-1),je={class:""};function De(r,t,a,l,s,n){return u(),p("li",{onMouseenter:t[0]||(t[0]=c=>l.tooltipOpened=!0),onMouseleave:t[1]||(t[1]=c=>l.tooltipOpened=!1),class:"relative flex-flow-centerY mb-6"},[C(Z,{name:"Animation-fade"},{default:Q(()=>[B(e("span",{class:"z-2 absolute top-0 bg-gradient-to-r from-primary-dark to-primary-hover text-secondary-base font-bold py-1 px-2 rounded"},d(a.skillName),513),[[N,l.tooltipOpened&&!l.isMobile()]])]),_:1}),e("p",$e,d(a.skillName),1),ke,e("span",je,d(a.skillValue)+"%",1)],32)}const Te=ye(we,[["render",De]]),Ce=["data-scroll-target"],Se={class:"js-appear-opacity o-container o-container--lg"},Me={class:"flex-flow-centerY mb-8"},Oe={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},Ae={class:"Title"},Ie=e("span",{class:"Line"},null,-1),Le={class:"font-highlight js-score-values"},Be={key:1,class:"Loader-block h-80 mx-4 rounded"},Ee={__name:"Skills",async setup(r){let t,a;const{getDataSkills:l,getSectionSkills:s,fetchDataSkills:n}=j.skills(),c=T(!1),i=h=>Object.values(l.value)[h],_=()=>{Y.to(".js-score-value",{duration:1,stagger:.15,width:h=>i(h)+"%"})},m=()=>{const h={root:null,rootMargin:"0px 0px -200px 0px"},g=document.querySelectorAll(".js-score-values");ie({callback:_,elementsObserved:g,options:h})};re(()=>{m()});const{data:{value:{data:b}}}=([t,a]=S(()=>O("skill",()=>$fetch(A+"skill"))),t=await t,a(),t);return n(b.attributes.skills),c.value=!0,(h,g)=>c.value?(u(),p("div",{key:0,"data-scroll-target":o(s).code||"skills",class:"text-tertiary-base mb-8 sm:mb-16 py-4 sm:py-8"},[e("div",Se,[e("div",Me,[e("span",Oe," 0"+d(o(s).position)+". ",1),e("h2",Ae,d(o(s).value),1),Ie]),e("ul",Le,[(u(!0),p(M,null,E(o(l),(y,w)=>(u(),U(Te,{"skill-name":w,"skill-value":y},null,8,["skill-name","skill-value"]))),256))])])],8,Ce)):(u(),p("div",Be))}},Pe={class:"o-container o-container--sm mb-12 sm:mb-24 lg:mb-40"},Re={class:"js-appear-opacity Title Title--2xl mb-4"},Ne={class:"js-appear-stagger flex flex-wrap","data-stagger":"0.05"},Fe={class:"js-appear-stagger-child px-2 py-1 mr-2 mb-2 border border-primary-base rounded"},Ve={__name:"Tools",async setup(r){let t,a;const{fetchDataTools:l,getDataTools:s}=j.tools(),{data:{value:{data:n}}}=([t,a]=S(()=>O("tool",()=>$fetch(A+"tool"))),t=await t,a(),t);return l(n.attributes),(c,i)=>(u(),p("div",Pe,[e("h2",Re,d(o(s).title),1),e("ul",Ne,[(u(!0),p(M,null,E(o(s).tools,_=>(u(),p("li",Fe,d(_),1))),256))])]))}},ze=["data-scroll-target"],qe={class:"js-appear-defer o-container o-container--lg"},Ue={class:"js-appear-defer-child flex-flow-centerY mb-8"},Ye={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},He={class:"Title"},We=e("span",{class:"Line"},null,-1),Je={class:"js-appear-defer-child flex mb-8 overflow-x-auto Scrollbar Scrollbar--light md-down:pb-4"},Ke=["onClick"],Xe={class:"flex-flow-centerY mb-4"},Ge={class:"mr-4 text-xl font-bold text-tertiary-base"},Qe=["href","aria-label"],Ze={class:"flex-flow-centerY mb-4 lg:mb-2"},et=e("i",{class:"Icon-angle-right text-primary-base mr-3 text-xl"},null,-1),tt={class:"flex-1"},at={__name:"Experiences",async setup(r){let t,a;const{fetchDataExperiences:l,getDataExperiences:s,getCurrentExperience:n,getCurrentPosition:c,setCurrentPosition:i,getSectionExperiences:_}=j.experiences(),m=T(""),b=(y,w)=>{if(w===c.value||!m.value)return;const f=Y.timeline({paused:!0}),D=()=>i(w);f.to(m.value,{opacity:0,duration:.25,onComplete:D}),f.to(m.value,{opacity:1,duration:.15}),f.play()},{data:{value:{data:h}}}=([t,a]=S(()=>O("experiences",()=>$fetch(A+"experiences"))),t=await t,a(),t),g=h.map(({attributes:y})=>y).sort((y,w)=>y.position-w.position);return l(g),(y,w)=>o(_)&&o(s).length&&o(n)?(u(),p("div",{key:0,"data-scroll-target":o(_).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",qe,[e("div",Ue,[e("span",Ye," 0"+d(o(_).position)+". ",1),e("h2",He,d(o(_).value),1),We]),e("div",Je,[(u(!0),p(M,null,E(o(s),f=>(u(),p("button",{onClick:D=>b(D,f.position),class:P(["min-w-56 mx-2 font-bold py-2 md:py-3 px-4 md:px-6 transition-fast text-sm rounded md-down:leading-none",[f.position===o(c)?"bg-gradient-to-r from-primary-base to-primary-dark text-secondary-base":"text-primary-base hover:bg-primary-base/10"]])},d(f.date),11,Ke))),256))]),e("div",{class:"js-appear-defer-child",ref_key:"currentExperienceContent",ref:m},[e("div",Xe,[e("p",Ge,d(o(n).job),1),e("a",{href:o(n).link_location,class:"font-bold has-underline has-underline--primary text-primary-base",target:"_blank",rel:"noopener","aria-label":o(n).location_details},d(o(n).location_details),9,Qe)]),e("ul",null,[(u(!0),p(M,null,E(o(n).roles,f=>(u(),p("li",Ze,[et,e("span",tt,d(f),1)]))),256))])],512)])],8,ze)):z("",!0)}},st=""+globalThis.__publicAssetsURL("loading.png"),nt=["href"],ot=["data-src","alt"],lt=e("span",{class:"z-2 absolute inset-0 bg-secondary-base/10 group-hover:bg-secondary-base/0 transition-fast"},null,-1),rt={class:"z-1 absolute top-0 right-0 bg-secondary-light px-2 py-1 leading-none"},it={class:"js-slide-from-top lg-down:p-4 lg:p-10 bg-secondary-lighter lg:max-w-96 w-full"},ct=["href"],dt={key:0,class:"flex flex-wrap"},ut={class:"px-2 py-1 mr-2 mb-2 border border-primary-base rounded lg:text-sm"},_t=["href"],pt=e("span",{class:"Button-link-circle","aria-hidden":"true"},[e("span",{class:"Button-link-icon arrow"})],-1),mt={class:"Button-link-text"},ft={__name:"Realisation",props:{realisation:Object,index:Number},setup(r){const t=r,{getDataTranslations:a}=j.translations(),{realisation:l,index:s}=t;return(n,c)=>{var i,_,m,b,h;return u(),p(M,null,[e("a",{href:o(l).url,class:"js-slide-from-bottom flex-1 max-h-[550px] h-full max-w-[940px] w-full z-0 relative overflow-hidden group",target:"_blank",rel:"noopener"},[e("img",{src:st,"data-src":(b=(m=(_=(i=o(l))==null?void 0:i.image)==null?void 0:_.data)==null?void 0:m.attributes)==null?void 0:b.caption,alt:o(l).name,class:"lazyload z-1 relative"},null,8,ot),lt,e("p",rt,d(o(l).year),1)],8,nt),e("div",{class:P(["transform",[o(s)%2===0?"lg:translate-x-16":"lg:-translate-x-16"]])},[e("div",it,[e("a",{href:o(l).url,target:"_blank",class:"Title Title--2xl block mb-4 font-bold transition-fast hover:text-primary-hover"},d(o(l).name),9,ct),((h=o(l))==null?void 0:h.tags)&&o(l).tags.length?(u(),p("ul",dt,[(u(!0),p(M,null,E(o(l).tags.filter(g=>g),g=>(u(),p("li",ut,d(g),1))),256))])):z("",!0),e("a",{href:o(l).url,target:"_blank",rel:"noopener",class:"Button-link mt-4"},[pt,e("span",mt,d(o(a).see_website),1)],8,_t)])],2)],64)}}},ht=["data-scroll-target"],bt={class:"o-container o-container--lg"},vt={class:"js-appear flex-flow-centerY mb-8"},gt={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},xt={class:"Title"},yt=e("span",{class:"Line"},null,-1),wt={class:"flex-flow-center"},$t={__name:"Realisations",async setup(r){let t,a;const{fetchDataRealisations:l,getDataRealisations:s,getDataRealisationsLimited:n,getSectionRealisations:c,getLimit:i,incrementLimit:_,decrementLimit:m}=j.realisations(),{getDataTranslations:b}=j.translations(),h=f=>{i.value>=s.value.length||_()},g=f=>{W>=n.value.length||m()};ce(()=>{de(),ue()});const{data:{value:{data:y}}}=([t,a]=S(()=>O("realisations",()=>$fetch(A+"realisations?populate=image"))),t=await t,a(),t),w=y.map(({attributes:f})=>f).sort((f,D)=>f.position-D.position);return l(w),(f,D)=>(u(),p("div",{"data-scroll-target":o(c).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",bt,[e("div",vt,[e("span",gt," 0"+d(o(c).position)+". ",1),e("h2",xt,d(o(c).value),1),yt])]),(u(!0),p(M,null,E(o(n),(L,k)=>(u(),p("div",{key:k,class:P(["flex lg-down:flex-col lg:flex-flow-center js-appear relative mb-12 lg:mb-24 lg-down:mx-4",{"lg:flex-row-reverse":k%2===0}])},[(u(),U(ft,{realisation:L,index:k,key:k},null,8,["realisation","index"]))],2))),128)),e("div",wt,[B(e("button",{class:"m-4 Button Button--small",onClick:h},d(o(b).see_more),513),[[N,o(i)<o(s).length]]),B(e("button",{class:"m-4 Button Button--small",onClick:g},d(o(b).see_less),513),[[N,o(n).length>o(W)]])])],8,ht))}},kt=e("div",{class:"z-3 fixed top-4 left-4 lg:top-8 lg:left-8 w-8 h-8 flex-flow-center bg-secondary-base border-2 border-primary-base leading-none pt-1 font-bold transition-fast hover:rounded-lg"}," FA ",-1),jt=e("span",{class:"Menu-line"},null,-1),Dt=e("span",{class:"Menu-line"},null,-1),Tt=e("span",{class:"Menu-line"},null,-1),Ct=[jt,Dt,Tt],St={class:"Menu-items"},Mt=["data-scroll-trigger"],Ot={class:"mr-2"},At=e("li",{class:"Menu-item gsap-menu-item has-underline mt-16"},[e("a",{href:"/cv_armanet_florian.pdf",target:"_blank",rel:"noopener"},[e("i",{class:"Icon-download mr-4"}),e("span",null,"Mon CV")])],-1),It={__name:"Menu",setup(r){const{getDataSections:t}=j.sections(),a=T(!1),l=Y.timeline({paused:!0}),s=(i,_)=>{i.to(_,{duration:.5,stagger:.1,transform:"translateY(0)",ease:"Power2.easeOut",opacity:1},"<0.5")},n=i=>{if(document.body.parentNode.classList.toggle("overflow-hidden"),!a.value){const _=document.querySelectorAll(".gsap-menu-item");s(l,_),a.value=!0,l.timeScale(1).play();return}l.timeScale(3).reverse(),l.eventCallback("onReverseComplete",()=>{a.value=!1})},c=i=>{document.body.parentNode.classList.toggle("overflow-hidden"),l.timeScale(4).reverse(),l.eventCallback("onReverseComplete",()=>{a.value=!1})};return(i,_)=>(u(),p("nav",null,[kt,e("div",{class:P(["Menu",{isActive:a.value}]),onClick:n},Ct,2),e("div",{class:P(["Menu-content",{isActive:a.value}])},[e("ul",St,[(u(!0),p(M,null,E(o(t),m=>(u(),p("li",{"data-scroll-trigger":m.code,onClick:c,class:"Menu-item gsap-menu-item has-underline"},[e("span",Ot,"0"+d(m.position)+".",1),e("span",null,d(m.value),1)],8,Mt))),256)),At])],2)]))}},Lt=["data-scroll-target"],Bt={class:"js-appear-defer o-container o-container--lg"},Et={class:"js-appear-defer-child flex-flow-centerY mb-4 sm:mb-8"},Pt={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},Rt={class:"Title"},Nt=e("span",{class:"Line"},null,-1),Ft={class:"o-grid sm:o-grid--loose md-down:items-center"},Vt={class:"js-appear-defer-child o-col-12 md:o-col-7 flex flex-col justify-center sm-down:order-2"},zt={class:""},qt={class:"js-appear-defer-child o-col-12 md:o-col-5 sm-down:flex-flow-center sm-down:mb-2 sm-down:order-1"},Ut=["data-src","alt"],Yt={__name:"About",async setup(r){var b,h,g,y,w,f;let t,a;const{fetchDataAbout:l,getDataAbout:s,getSectionAbout:n,getImageObject:c,setImageObject:i,setPdfObject:_}=j.about(),{data:{value:{data:m}}}=([t,a]=S(()=>O("about",()=>$fetch(A+"about?populate=image,pdf"))),t=await t,a(),t);return l(m.attributes),i(((g=(h=(b=s.value)==null?void 0:b.image)==null?void 0:h.data)==null?void 0:g.attributes)||null),_(((f=(w=(y=s.value)==null?void 0:y.pdf)==null?void 0:w.data)==null?void 0:f.attributes)||null),(D,L)=>{var k,$;return u(),p("div",{"data-scroll-target":o(n).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",Bt,[e("div",Et,[e("span",Pt," 0"+d(o(n).position)+". ",1),e("h2",Rt,d(o(n).value),1),Nt]),e("div",Ft,[e("div",Vt,[e("p",zt,d(o(s).text),1)]),e("div",qt,[e("img",{"data-src":(k=o(c))==null?void 0:k.caption,alt:($=o(c))==null?void 0:$.name,class:"lazyload rounded-full border-4 border-primary-base w-32 md:w-64 h-32 md:h-64 mb-4"},null,8,Ut)])])])],8,Lt)}}},F={_origin:"https://api.emailjs.com"},Ht=(r,t="https://api.emailjs.com")=>{F._userID=r,F._origin=t},ee=(r,t,a)=>{if(!r)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class X{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const te=(r,t,a={})=>new Promise((l,s)=>{const n=new XMLHttpRequest;n.addEventListener("load",({target:c})=>{const i=new X(c);i.status===200||i.text==="OK"?l(i):s(i)}),n.addEventListener("error",({target:c})=>{s(new X(c))}),n.open("POST",F._origin+r,!0),Object.keys(a).forEach(c=>{n.setRequestHeader(c,a[c])}),n.send(t)}),Wt=(r,t,a,l)=>{const s=l||F._userID;ee(s,r,t);const n={lib_version:"3.11.0",user_id:s,service_id:r,template_id:t,template_params:a};return te("/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})},Jt=r=>{let t;if(typeof r=="string"?t=document.querySelector(r):t=r,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Kt=(r,t,a,l)=>{const s=l||F._userID,n=Jt(a);ee(s,r,t);const c=new FormData(n);return c.append("lib_version","3.11.0"),c.append("service_id",r),c.append("template_id",t),c.append("user_id",s),te("/api/v1.0/email/send-form",c)},G={init:Ht,send:Wt,sendForm:Kt},Xt=["data-scroll-target"],Gt={class:"flex-flow-centerY sm:flex-flow-center mb-8"},Qt={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},Zt={class:"Title"},ea=e("span",{class:"Line"},null,-1),ta={key:0,class:"max-w-sm mx-auto bg-secondary-hover rounded p-8 mb-20 text-center text-primary-base font-bold"},aa={key:0,class:"max-w-sm mx-auto mb-20 flex flex-col"},sa={class:"flex-flow-center mt-8"},na={class:"flex-flow-center mb-20"},oa=["href"],la=e("i",{class:"Icon-linkedin text-3xl text-primary-base transition-fast transform hover:text-primary-hover"},null,-1),ra=[la],ia={__name:"Contact",async setup(r){var D,L;let t,a;const{fetchDataContact:l,getDataContact:s,getSectionContact:n}=j.contact(),{getDataTranslations:c}=j.translations(),i=T(""),_=T(""),m=T(""),b=T(!1),h=T(!1),g=J(()=>({name:i.value,email:_.value,message:m.value})),y=J(()=>Object.entries(g.value).every(([k,$])=>k&&$&&_.value.includes("@"))),{data:{value:{data:w}}}=([t,a]=S(()=>O(K,()=>$fetch(A+K),"$AXaQ0uWxTm")),t=await t,a(),t);l(w.attributes),G.init((L=(D=s.value)==null?void 0:D.emailjs)==null?void 0:L.public_key);const f=()=>{var k,$,x,I;!y.value||b.value||!(($=(k=s.value)==null?void 0:k.emailjs)!=null&&$.service_id)||!((I=(x=s.value)==null?void 0:x.emailjs)!=null&&I.template_id)||(b.value=!0,G.send(s.value.emailjs.service_id,s.value.emailjs.template_id,g.value).then(v=>{b.value=!1,h.value=!0}).catch(v=>console.log(v)))};return(k,$)=>(u(),p("div",{"data-scroll-target":o(n).code,class:"js-appear-opacity o-container o-container--lg text-tertiary-base py-8","data-animation-speed":"0.25"},[e("div",Gt,[e("span",Qt," 0"+d(o(n).position)+". ",1),e("h2",Zt,d(o(n).value),1),ea]),C(Z,{name:"Animation-opacity"},{default:Q(()=>[h.value?(u(),p("p",ta,d(o(c).sent),1)):z("",!0)]),_:1}),h.value?z("",!0):(u(),p("div",aa,[B(e("input",{type:"text",name:"name",placeholder:"Nom *",class:"Input","onUpdate:modelValue":$[0]||($[0]=x=>i.value=x)},null,512),[[q,i.value]]),B(e("input",{type:"email",name:"email",placeholder:"Email *",class:"Input","onUpdate:modelValue":$[1]||($[1]=x=>_.value=x)},null,512),[[q,_.value]]),B(e("textarea",{name:"message",placeholder:"Message *",rows:"6",class:"Input","onUpdate:modelValue":$[2]||($[2]=x=>m.value=x)},null,512),[[q,m.value]]),e("div",sa,[e("button",{onClick:f,class:P(["Button",{"Button--disabled":!o(y)}])},[B(e("span",null,d(o(c).sending),513),[[N,b.value]]),B(e("span",null,d(o(c).send),513),[[N,!b.value]])],2)])])),e("div",na,[e("a",{href:o(s).linkedin,target:"_blank",class:"block transition-fast hover:-translate-y-1",rel:"noopener","aria-label":"Linkedin"},ra,8,oa)])],8,Xt))}},ca=r=>r.charAt(0).toUpperCase()+r.slice(1),da={class:"max-w-sm w-full mx-auto text-center px-4 mb-8"},ua={class:"flex-flow-center mb-12"},_a=["href","aria-label"],pa={__name:"Footer",async setup(r){let t,a;const{fetchDataFooter:l,getDataFooter:s}=j.footer(),{data:{value:{data:n}}}=([t,a]=S(()=>O("footer",()=>$fetch(A+"footer"))),t=await t,a(),t);return l(n.attributes),(c,i)=>(u(),p(M,null,[e("p",da,d(o(s).text),1),e("ul",ua,[(u(!0),p(M,null,E(o(s).brands,(_,m)=>(u(),p("li",null,[e("a",{href:_,"aria-label":o(ca)(m),target:"_blank",rel:"noopener",class:"w-12 h-12 rounded-full bg-primary-base mx-2 flex-flow-center shadow-lg shadow-primary-base/50 transition-fast hover:shadow-md hover:shadow-sm"},[e("i",{class:P([[`Icon-${m}`],"text-4xl text-secondary-base leading-none"])},null,2)],8,_a)]))),256))])],64))}},ma={__name:"Main",async setup(r){let t,a;const{fetchDataSections:l}=j.sections(),{fetchDataTranslations:s}=j.translations(),{data:{value:{data:n}}}=([t,a]=S(()=>O("section",()=>$fetch(A+"section"))),t=await t,a(),t);l(n.attributes.sections);const{data:{value:{data:c}}}=([t,a]=S(()=>O("translation",()=>$fetch(A+"translation"))),t=await t,a(),t);return s(c.attributes.translations),(i,_)=>(u(),p("div",null,[C(It),C(xe),e("main",null,[C(Ee),C(Ve),C(at),C($t),C(Yt),C(ia),C(pa)])]))}},ha={__name:"index",setup(r){return(t,a)=>(u(),U(o(ma)))}};export{ha as default};
