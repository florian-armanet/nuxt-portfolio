import{e as H,r as D,f as q,g as U,w as W,a as n,h as G,u as y,i as C,o as c,c as u,d as e,t as i,j as K,k,l as J,m as L,v as z,T as Q,n as X,F as B,p as O,q as Z,s as E,x as N,b as F,y as R,z as ee,A as te,B as ae}from"./entry.13ce7475.js";const se=()=>null;function j(...d){var b,g,h,x,T,M,$,Y,V;const o=typeof d[d.length-1]=="string"?d.pop():void 0;typeof d[0]!="string"&&d.unshift(o);let[a,l,t={}]=d;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=(b=t.server)!=null?b:!0,t.default=(g=t.default)!=null?g:se,t.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),t.lazy=(x=(h=t.lazy)!=null?h:t.defer)!=null?x:!1,t.initialCache=(T=t.initialCache)!=null?T:!0,t.immediate=(M=t.immediate)!=null?M:!0;const s=H(),_=()=>(s.isHydrating||t.initialCache)&&s.payload.data[a]!==void 0;s._asyncData[a]||(s._asyncData[a]={data:D(_()?s.payload.data[a]:(Y=($=t.default)==null?void 0:$.call(t))!=null?Y:null),pending:D(!_()),error:D((V=s.payload._errors[a])!=null?V:null)});const r={...s._asyncData[a]};r.refresh=r.execute=(w={})=>{if(s._asyncDataPromises[a]){if(w.dedupe===!1)return s._asyncDataPromises[a];s._asyncDataPromises[a].cancelled=!0}if(w._initial&&_())return s.payload.data[a];r.pending.value=!0;const A=new Promise((v,P)=>{try{v(l(s))}catch(I){P(I)}}).then(v=>{if(A.cancelled)return s._asyncDataPromises[a];t.transform&&(v=t.transform(v)),t.pick&&(v=ne(v,t.pick)),r.data.value=v,r.error.value=null}).catch(v=>{var P,I;if(A.cancelled)return s._asyncDataPromises[a];r.error.value=v,r.data.value=n((I=(P=t.default)==null?void 0:P.call(t))!=null?I:null)}).finally(()=>{A.cancelled||(r.pending.value=!1,s.payload.data[a]=r.data.value,r.error.value&&(s.payload._errors[a]=!0),delete s._asyncDataPromises[a])});return s._asyncDataPromises[a]=A,s._asyncDataPromises[a]};const p=()=>r.refresh({_initial:!0}),f=t.server!==!1&&s.payload.serverRendered;{const w=G();if(w&&!w._nuxtOnBeforeMountCbs){w._nuxtOnBeforeMountCbs=[];const v=w._nuxtOnBeforeMountCbs;w&&(q(()=>{v.forEach(P=>{P()}),v.splice(0,v.length)}),U(()=>v.splice(0,v.length)))}f&&s.isHydrating&&a in s.payload.data?r.pending.value=!1:w&&(s.payload.serverRendered&&s.isHydrating||t.lazy)&&t.immediate?w._nuxtOnBeforeMountCbs.push(p):t.immediate&&p(),t.watch&&W(t.watch,()=>r.refresh());const A=s.hook("app:data:refresh",v=>{if(!v||v.includes(a))return r.refresh()});w&&U(A)}const m=Promise.resolve(s._asyncDataPromises[a]).then(()=>r);return Object.assign(m,r),m}function ne(d,o){const a={};for(const l of o)a[l]=d[l];return a}const S="http://localhost:1337/api/",oe={class:"js-appear-defer h-screen flex-flow-center flex-col max-w-md mx-auto"},le={class:"js-appear-defer-child font-bold text-5xl md:text-6xl lg:text-7xl text-tertiary-base sm-down:text-center sm-down:leading-none sm-down:mb-4"},re={class:"js-appear-defer-child text-2xl md:text-4xl lg:text-5xl font-heading text-tertiary-hover mb-8 sm-down:text-center"},ie={class:"js-appear-defer-child text-center text-tertiary-hover mb-8"},ce={class:"js-appear-defer-child"},de=["data-scroll-trigger"],_e={__name:"Header",async setup(d){let o,a;const{fetchDataIntroduction:l,getDataIntroduction:t}=y.introduction(),{getSectionsCode:s}=y.sections();return[o,a]=C(()=>j("introduction",()=>$fetch(S+"introduction")).then(_=>{l(_.data.value.data.attributes)})),await o,a(),(_,r)=>(c(),u("header",oe,[e("h1",le,i(n(t).title),1),e("h2",re,i(n(t).subtitle),1),e("p",ie,i(n(t).text),1),e("div",ce,[e("button",{class:"Button","data-scroll-trigger":n(s)[0]},i(n(t).label_button),9,de)])]))}},ue=(d,o)=>{const a=d.__vccOpts||d;for(const[l,t]of o)a[l]=t;return a},pe={name:"Skill",props:{skillName:String,skillValue:Number},setup(){return{tooltipOpened:D(!1),isMobile:K}}},me={class:"w-40 mr-4 sm:line-clamp-1 sm-down:w-full"},he=e("p",{class:"relative flex-1 mr-4 h-3"},[e("span",{class:"absolute top-0 left-0 bg-gradient-to-r from-primary-dark to-primary-base h-full w-0 js-score-value"})],-1),fe={class:""};function be(d,o,a,l,t,s){return c(),u("li",{onMouseenter:o[0]||(o[0]=_=>l.tooltipOpened=!0),onMouseleave:o[1]||(o[1]=_=>l.tooltipOpened=!1),class:"relative flex-flow-centerY mb-6"},[k(Q,{name:"Animation-fade"},{default:J(()=>[L(e("span",{class:"z-2 absolute top-0 bg-gradient-to-r from-primary-dark to-primary-hover text-secondary-base font-bold py-1 px-2 rounded"},i(a.skillName),513),[[z,l.tooltipOpened&&!l.isMobile()]])]),_:1}),e("p",me,i(a.skillName),1),he,e("span",fe,i(a.skillValue)+"%",1)],32)}const ge=ue(pe,[["render",be]]),ve=["data-scroll-target"],xe={class:"js-appear-opacity o-container o-container--lg"},ye={class:"flex-flow-centerY mb-8"},we={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},$e={class:"Title"},ke=e("span",{class:"Line"},null,-1),De={class:"font-highlight js-score-values"},Ce={key:1,class:"Loader-block h-80 mx-4 rounded"},je={__name:"Skills",async setup(d){let o,a;const{getDataSkills:l,getSectionSkills:t,fetchDataSkills:s}=y.skills(),_=D(!1),r=m=>Object.values(l.value)[m],p=()=>{N.to(".js-score-value",{duration:1,stagger:.15,width:m=>r(m)+"%"})},f=()=>{const m={root:null,rootMargin:"0px 0px -200px 0px"},b=document.querySelectorAll(".js-score-values");Z({callback:p,elementsObserved:b,options:m})};return X(()=>{f()}),[o,a]=C(()=>j("skill",()=>$fetch(S+"skill")).then(m=>{s(m.data.value.data.attributes.skills),_.value=!0})),await o,a(),(m,b)=>_.value?(c(),u("div",{key:0,"data-scroll-target":n(t).code||"skills",class:"text-tertiary-base mb-8 sm:mb-16 py-4 sm:py-8"},[e("div",xe,[e("div",ye,[e("span",we," 0"+i(n(t).position)+". ",1),e("h2",$e,i(n(t).value),1),ke]),e("ul",De,[(c(!0),u(B,null,O(n(l),(g,h)=>(c(),E(ge,{"skill-name":h,"skill-value":g},null,8,["skill-name","skill-value"]))),256))])])],8,ve)):(c(),u("div",Ce))}},Se={class:"o-container o-container--sm mb-12 sm:mb-24 lg:mb-40"},Te={class:"js-appear-opacity Title Title--2xl mb-4"},Me={class:"js-appear-stagger flex flex-wrap","data-stagger":"0.05"},Be={class:"js-appear-stagger-child px-2 py-1 mr-2 mb-2 border border-primary-base rounded"},Oe={__name:"Tools",async setup(d){let o,a;const{fetchDataTools:l,getDataTools:t}=y.tools();return[o,a]=C(()=>j("tool",()=>$fetch(S+"tool")).then(s=>{l(s.data.value.data.attributes)})),await o,a(),(s,_)=>(c(),u("div",Se,[e("h2",Te,i(n(t).title),1),e("ul",Me,[(c(!0),u(B,null,O(n(t).tools,r=>(c(),u("li",Be,i(r),1))),256))])]))}},Ae=["data-scroll-target"],Pe={class:"js-appear-defer o-container o-container--lg"},Re={class:"js-appear-defer-child flex-flow-centerY mb-8"},Ie={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},Le={class:"Title"},ze=e("span",{class:"Line"},null,-1),Ee={class:"js-appear-defer-child flex mb-8 overflow-x-auto Scrollbar Scrollbar--light md-down:pb-4"},Ne=["onClick"],Ye={class:"flex-flow-centerY mb-4"},Ve={class:"mr-4 text-xl font-bold text-tertiary-base"},Ue=["href","aria-label"],Fe={class:"flex-flow-centerY mb-4 lg:mb-2"},He=e("i",{class:"Icon-angle-right text-primary-base mr-3 text-xl"},null,-1),qe={class:"flex-1"},We={__name:"Experiences",async setup(d){let o,a;const{fetchDataExperiences:l,getDataExperiences:t,getCurrentExperience:s,getCurrentPosition:_,setCurrentPosition:r,getSectionExperiences:p}=y.experiences(),f=D(""),m=(b,g)=>{if(g===_.value||!f.value)return;const h=N.timeline({paused:!0}),x=()=>r(g);h.to(f.value,{opacity:0,duration:.25,onComplete:x}),h.to(f.value,{opacity:1,duration:.15}),h.play()};return[o,a]=C(()=>j("experiences",()=>$fetch(S+"experiences")).then(b=>{const g=b.data.value.data.map(({attributes:h})=>h).sort((h,x)=>h.position-x.position);l(g)})),await o,a(),(b,g)=>n(p)&&n(t).length&&n(s)?(c(),u("div",{key:0,"data-scroll-target":n(p).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",Pe,[e("div",Re,[e("span",Ie," 0"+i(n(p).position)+". ",1),e("h2",Le,i(n(p).value),1),ze]),e("div",Ee,[(c(!0),u(B,null,O(n(t),h=>(c(),u("button",{onClick:x=>m(x,h.position),class:R(["min-w-56 mx-2 font-bold py-2 md:py-3 px-4 md:px-6 transition-fast text-sm rounded md-down:leading-none",[h.position===n(_)?"bg-gradient-to-r from-primary-base to-primary-dark text-secondary-base":"text-primary-base hover:bg-primary-base/10"]])},i(h.date),11,Ne))),256))]),e("div",{class:"js-appear-defer-child",ref_key:"currentExperienceContent",ref:f},[e("div",Ye,[e("p",Ve,i(n(s).job),1),e("a",{href:n(s).link_location,class:"font-bold has-underline has-underline--primary text-primary-base",target:"_blank",rel:"noopener","aria-label":n(s).location_details},i(n(s).location_details),9,Ue)]),e("ul",null,[(c(!0),u(B,null,O(n(s).roles,h=>(c(),u("li",Fe,[He,e("span",qe,i(h),1)]))),256))])],512)])],8,Ae)):F("",!0)}},Ge=d=>d.getBoundingClientRect().top+window.scrollY,Ke=""+globalThis.__publicAssetsURL("loading.png"),Je={key:0,ref:"lastRealisation",class:"self-start"},Qe=["href"],Xe=["data-src","alt"],Ze=e("span",{class:"z-2 absolute inset-0 bg-secondary-base/10 group-hover:bg-secondary-base/0 transition-fast"},null,-1),et={class:"z-1 absolute top-0 right-0 bg-secondary-light px-2 py-1 leading-none"},tt={class:"js-slide-from-top lg-down:p-4 lg:p-10 bg-secondary-lighter lg:max-w-96 w-full"},at=["href"],st={class:"flex flex-wrap"},nt={class:"px-2 py-1 mr-2 mb-2 border border-primary-base rounded lg:text-sm"},ot=["href"],lt=e("span",{class:"Button-link-circle","aria-hidden":"true"},[e("span",{class:"Button-link-icon arrow"})],-1),rt={class:"Button-link-text"},it={__name:"Realisation",props:{realisation:Object,index:Number},setup(d){const o=d,{getDataRealisationsLimited:a}=y.realisations(),{getDataTranslations:l}=y.translations(),{realisation:t,index:s}=o;return(_,r)=>{var p,f,m,b;return c(),u(B,null,[n(s)===n(a).length-1?(c(),u("span",Je,null,512)):F("",!0),e("a",{href:n(t).url,class:"js-slide-from-bottom flex-1 max-h-[550px] h-full max-w-[940px] w-full z-0 relative overflow-hidden group",target:"_blank",rel:"noopener"},[e("img",{src:Ke,"data-src":(b=(m=(f=(p=n(t))==null?void 0:p.image)==null?void 0:f.data)==null?void 0:m.attributes)==null?void 0:b.caption,alt:n(t).name,class:"lazyload z-1 relative"},null,8,Xe),Ze,e("p",et,i(n(t).year),1)],8,Qe),e("div",{class:R(["transform",[n(s)%2===0?"lg:translate-x-16":"lg:-translate-x-16"]])},[e("div",tt,[e("a",{href:n(t).url,target:"_blank",class:"Title Title--2xl block mb-4 font-bold transition-fast hover:text-primary-hover"},i(n(t).name),9,at),e("ul",st,[(c(!0),u(B,null,O(n(t).tags.filter(g=>g),g=>(c(),u("li",nt,i(g),1))),256))]),e("a",{href:n(t).url,target:"_blank",class:"Button-link mt-4"},[lt,e("span",rt,i(n(l).see_website),1)],8,ot)])],2)],64)}}},ct=["data-scroll-target"],dt={class:"o-container o-container--lg"},_t={class:"js-appear flex-flow-centerY mb-8"},ut={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},pt={class:"Title"},mt=e("span",{class:"Line"},null,-1),ht={class:"flex-flow-center"},ft={__name:"Realisations",async setup(d){let o,a;const{fetchDataRealisations:l,getDataRealisationsLimited:t,getSectionRealisations:s,getLimit:_,limitUp:r,limitDown:p}=y.realisations(),{getDataTranslations:f}=y.translations(),m=D(4),b=D(),g=x=>{m.value>t.value.length||r()},h=x=>{m.value>=t.value.length||(p(),setTimeout(()=>{!b.value.length||window.scrollTo({top:Ge(b.value[0]),behavior:"smooth"})},50))};return ee(()=>{te(),ae()}),[o,a]=C(()=>j("realisations",()=>$fetch(S+"realisations?populate=image")).then(x=>{const T=x.data.value.data.map(({attributes:M})=>M).sort((M,$)=>M.position-$.position);l(T)})),await o,a(),(x,T)=>(c(),u("div",{"data-scroll-target":n(s).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",dt,[e("div",_t,[e("span",ut," 0"+i(n(s).position)+". ",1),e("h2",pt,i(n(s).value),1),mt])]),(c(!0),u(B,null,O(n(t),(M,$)=>(c(),u("div",{key:$,class:R(["flex lg-down:flex-col lg:flex-flow-center js-appear relative mb-12 lg:mb-24 lg-down:mx-4",{"lg:flex-row-reverse":$%2===0}])},[(c(),E(it,{realisation:M,index:$,key:$},null,8,["realisation","index"]))],2))),128)),e("div",ht,[L(e("button",{class:"m-4 Button Button--small",onClick:g},i(n(f).see_more),513),[[z,n(_)<=n(t).length]]),L(e("button",{class:"m-4 Button Button--small",onClick:h},i(n(f).see_less),513),[[z,n(t).length>m.value]])])],8,ct))}},bt=e("div",{class:"z-3 fixed top-4 left-4 lg:top-8 lg:left-8 w-8 h-8 flex-flow-center bg-secondary-base border-2 border-primary-base leading-none pt-1 font-bold transition-fast hover:rounded-lg"}," FA ",-1),gt=e("span",{class:"Menu-line"},null,-1),vt=e("span",{class:"Menu-line"},null,-1),xt=e("span",{class:"Menu-line"},null,-1),yt=[gt,vt,xt],wt={class:"Menu-items"},$t=["data-scroll-trigger"],kt={class:"mr-2"},Dt=e("li",{class:"Menu-item gsap-menu-item has-underline mt-16"},[e("a",{href:"/cv_armanet_florian.pdf",target:"_blank",rel:"noopener"},[e("i",{class:"Icon-download mr-4"}),e("span",null,"Mon CV")])],-1),Ct={__name:"Menu",setup(d){const{getDataSections:o}=y.sections(),a=D(!1),l=N.timeline({paused:!0}),t=(r,p)=>{r.to(p,{duration:.5,stagger:.1,transform:"translateY(0)",ease:"Power2.easeOut",opacity:1},"<0.5")},s=r=>{if(document.body.parentNode.classList.toggle("overflow-hidden"),!a.value){const p=document.querySelectorAll(".gsap-menu-item");t(l,p),a.value=!0,l.timeScale(1).play();return}l.timeScale(3).reverse(),l.eventCallback("onReverseComplete",()=>{a.value=!1})},_=r=>{document.body.parentNode.classList.toggle("overflow-hidden"),l.timeScale(4).reverse(),l.eventCallback("onReverseComplete",()=>{a.value=!1})};return(r,p)=>(c(),u("nav",null,[bt,e("div",{class:R(["Menu",{isActive:a.value}]),onClick:s},yt,2),e("div",{class:R(["Menu-content",{isActive:a.value}])},[e("ul",wt,[(c(!0),u(B,null,O(n(o),f=>(c(),u("li",{"data-scroll-trigger":f.code,onClick:_,class:"Menu-item gsap-menu-item has-underline"},[e("span",kt,"0"+i(f.position)+".",1),e("span",null,i(f.value),1)],8,$t))),256)),Dt])],2)]))}},jt=["data-scroll-target"],St={class:"js-appear-defer o-container o-container--lg"},Tt={class:"js-appear-defer-child flex-flow-centerY mb-4 sm:mb-8"},Mt={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},Bt={class:"Title"},Ot=e("span",{class:"Line"},null,-1),At={class:"o-grid sm:o-grid--loose md-down:items-center"},Pt={class:"js-appear-defer-child o-col-12 md:o-col-7 flex flex-col justify-center sm-down:order-2"},Rt={class:""},It={class:"js-appear-defer-child o-col-12 md:o-col-5 sm-down:flex-flow-center sm-down:mb-2 sm-down:order-1"},Lt=["data-src","alt"],zt={__name:"About",async setup(d){let o,a;const{fetchDataAbout:l,getDataAbout:t,getSectionAbout:s,getImageObject:_,setImageObject:r,setPdfObject:p}=y.about();return[o,a]=C(()=>j("about",()=>$fetch(S+"about?populate=image,pdf")).then(f=>{var m,b,g,h,x,T;l(f.data.value.data.attributes),r(((g=(b=(m=t.value)==null?void 0:m.image)==null?void 0:b.data)==null?void 0:g.attributes)||null),p(((T=(x=(h=t.value)==null?void 0:h.pdf)==null?void 0:x.data)==null?void 0:T.attributes)||null)})),await o,a(),(f,m)=>{var b,g;return c(),u("div",{"data-scroll-target":n(s).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",St,[e("div",Tt,[e("span",Mt," 0"+i(n(s).position)+". ",1),e("h2",Bt,i(n(s).value),1),Ot]),e("div",At,[e("div",Pt,[e("p",Rt,i(n(t).text),1)]),e("div",It,[e("img",{"data-src":(b=n(_))==null?void 0:b.caption,alt:(g=n(_))==null?void 0:g.name,class:"lazyload rounded-full border-4 border-primary-base w-32 md:w-64 h-32 md:h-64 mb-4"},null,8,Lt)])])])],8,jt)}}},Et=["data-scroll-target"],Nt={class:"o-container o-container--lg text-center mb-20"},Yt={class:"flex-flow-center mb-20"},Vt=["href"],Ut=e("i",{class:"Icon-linkedin text-3xl text-primary-base transition-fast transform hover:text-primary-hover"},null,-1),Ft=[Ut],Ht={class:"max-w-sm w-full mx-auto text-center p-4"},qt={__name:"Contact",async setup(d){let o,a;const{fetchDataContact:l,getDataContact:t,getSectionContact:s}=y.contact(),{getDataTranslations:_}=y.translations(),r=p=>window.location.href=`mailto:${t.value.mail}`;return[o,a]=C(()=>j("contact",()=>$fetch(S+"contact")).then(p=>{l(p.data.value.data.attributes)})),await o,a(),(p,f)=>(c(),u("div",{"data-scroll-target":n(s).code,class:"js-appear-opacity text-tertiary-base py-8","data-animation-spedd":"0.25"},[e("div",Nt,[e("button",{onClick:r,class:"Button"},i(n(s).value),1)]),e("div",Yt,[e("a",{href:n(t).linkedin,target:"_blank",class:"block transition-fast hover:-translate-y-1",rel:"noopener","aria-label":"Linkedin"},Ft,8,Vt)]),e("p",Ht,i(n(_).portfolio_development_details),1)],8,Et))}},Wt={__name:"Main",async setup(d){let o,a;const{fetchDataSections:l}=y.sections(),{fetchDataTranslations:t}=y.translations();return[o,a]=C(()=>j("section",()=>$fetch(S+"section")).then(s=>{l(s.data.value.data.attributes.sections)})),await o,a(),[o,a]=C(()=>j("translation",()=>$fetch(S+"translation")).then(s=>{t(s.data.value.data.attributes.translations)})),await o,a(),(s,_)=>(c(),u("div",null,[k(Ct),k(_e),e("main",null,[k(je),k(Oe),k(We),k(ft),k(zt),k(qt)])]))}},Kt={__name:"index",setup(d){return(o,a)=>(c(),E(n(Wt)))}};export{Kt as default};