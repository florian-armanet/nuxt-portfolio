import{e as U,r as D,f as q,g as F,w as W,a as n,h as G,u as y,i as C,o as c,c as u,d as e,t as i,j as K,k,l as J,m as z,v as L,T as Q,n as X,F as O,p as A,q as Z,s as E,x as N,b as H,y as R,z as ee,A as te,B as ae}from"./entry.4ebc7c81.js";const se=()=>null;function j(...d){var f,g,h,x,T,M,$,Y,V;const l=typeof d[d.length-1]=="string"?d.pop():void 0;typeof d[0]!="string"&&d.unshift(l);let[t,o,a={}]=d;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=(f=a.server)!=null?f:!0,a.default=(g=a.default)!=null?g:se,a.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),a.lazy=(x=(h=a.lazy)!=null?h:a.defer)!=null?x:!1,a.initialCache=(T=a.initialCache)!=null?T:!0,a.immediate=(M=a.immediate)!=null?M:!0;const s=U(),_=()=>(s.isHydrating||a.initialCache)&&s.payload.data[t]!==void 0;s._asyncData[t]||(s._asyncData[t]={data:D(_()?s.payload.data[t]:(Y=($=a.default)==null?void 0:$.call(a))!=null?Y:null),pending:D(!_()),error:D((V=s.payload._errors[t])!=null?V:null)});const r={...s._asyncData[t]};r.refresh=r.execute=(w={})=>{if(s._asyncDataPromises[t]){if(w.dedupe===!1)return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if(w._initial&&_())return s.payload.data[t];r.pending.value=!0;const B=new Promise((v,P)=>{try{v(o(s))}catch(I){P(I)}}).then(v=>{if(B.cancelled)return s._asyncDataPromises[t];a.transform&&(v=a.transform(v)),a.pick&&(v=ne(v,a.pick)),r.data.value=v,r.error.value=null}).catch(v=>{var P,I;if(B.cancelled)return s._asyncDataPromises[t];r.error.value=v,r.data.value=n((I=(P=a.default)==null?void 0:P.call(a))!=null?I:null)}).finally(()=>{B.cancelled||(r.pending.value=!1,s.payload.data[t]=r.data.value,r.error.value&&(s.payload._errors[t]=!0),delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=B,s._asyncDataPromises[t]};const p=()=>r.refresh({_initial:!0}),b=a.server!==!1&&s.payload.serverRendered;{const w=G();if(w&&!w._nuxtOnBeforeMountCbs){w._nuxtOnBeforeMountCbs=[];const v=w._nuxtOnBeforeMountCbs;w&&(q(()=>{v.forEach(P=>{P()}),v.splice(0,v.length)}),F(()=>v.splice(0,v.length)))}b&&s.isHydrating&&t in s.payload.data?r.pending.value=!1:w&&(s.payload.serverRendered&&s.isHydrating||a.lazy)&&a.immediate?w._nuxtOnBeforeMountCbs.push(p):a.immediate&&p(),a.watch&&W(a.watch,()=>r.refresh());const B=s.hook("app:data:refresh",v=>{if(!v||v.includes(t))return r.refresh()});w&&F(B)}const m=Promise.resolve(s._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}function ne(d,l){const t={};for(const o of l)t[o]=d[o];return t}const S="http://localhost:1337/api/",oe={class:"js-appear-defer h-screen flex-flow-center flex-col max-w-md mx-auto"},le={class:"js-appear-defer-child font-bold text-5xl md:text-6xl lg:text-7xl text-tertiary-base sm-down:text-center sm-down:leading-none sm-down:mb-4"},re={class:"js-appear-defer-child text-2xl md:text-4xl lg:text-5xl font-heading text-tertiary-hover mb-8 sm-down:text-center"},ie={class:"js-appear-defer-child text-center text-tertiary-hover mb-8"},ce={class:"js-appear-defer-child"},de=["data-scroll-trigger"],_e={__name:"Header",async setup(d){let l,t;const{fetchDataIntroduction:o,getDataIntroduction:a}=y.introduction(),{getSectionsCode:s}=y.sections();return[l,t]=C(()=>j("introduction",()=>$fetch(S+"introduction")).then(_=>{o(_.data.value.data.attributes)})),await l,t(),(_,r)=>(c(),u("header",oe,[e("h1",le,i(n(a).title),1),e("h2",re,i(n(a).subtitle),1),e("p",ie,i(n(a).text),1),e("div",ce,[e("button",{class:"Button","data-scroll-trigger":n(s)[0]},i(n(a).label_button),9,de)])]))}},ue=(d,l)=>{const t=d.__vccOpts||d;for(const[o,a]of l)t[o]=a;return t},pe={name:"Skill",props:{skillName:String,skillValue:Number},setup(){return{tooltipOpened:D(!1),isMobile:K}}},me={class:"w-40 mr-4 sm:line-clamp-1 sm-down:w-full"},fe=e("p",{class:"relative flex-1 mr-4 h-3"},[e("span",{class:"absolute top-0 left-0 bg-gradient-to-r from-primary-dark to-primary-base h-full w-0 js-score-value"})],-1),he={class:""};function be(d,l,t,o,a,s){return c(),u("li",{onMouseenter:l[0]||(l[0]=_=>o.tooltipOpened=!0),onMouseleave:l[1]||(l[1]=_=>o.tooltipOpened=!1),class:"relative flex-flow-centerY mb-6"},[k(Q,{name:"Animation-fade"},{default:J(()=>[z(e("span",{class:"z-2 absolute top-0 bg-gradient-to-r from-primary-dark to-primary-hover text-secondary-base font-bold py-1 px-2 rounded"},i(t.skillName),513),[[L,o.tooltipOpened&&!o.isMobile()]])]),_:1}),e("p",me,i(t.skillName),1),fe,e("span",he,i(t.skillValue)+"%",1)],32)}const ge=ue(pe,[["render",be]]),ve=["data-scroll-target"],xe={class:"js-appear-opacity o-container o-container--lg"},ye={class:"flex-flow-centerY mb-8"},we={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},$e={class:"Title"},ke=e("span",{class:"Line"},null,-1),De={class:"font-highlight js-score-values"},Ce={key:1,class:"Loader-block h-80 mx-4 rounded"},je={__name:"Skills",async setup(d){let l,t;const{getDataSkills:o,getSectionSkills:a,fetchDataSkills:s}=y.skills(),_=D(!1),r=m=>Object.values(o.value)[m],p=()=>{N.to(".js-score-value",{duration:1,stagger:.15,width:m=>r(m)+"%"})},b=()=>{const m={root:null,rootMargin:"0px 0px -200px 0px"},f=document.querySelectorAll(".js-score-values");Z({callback:p,elementsObserved:f,options:m})};return X(()=>{b()}),[l,t]=C(()=>j("skill",()=>$fetch(S+"skill")).then(m=>{s(m.data.value.data.attributes.skills),_.value=!0})),await l,t(),(m,f)=>_.value?(c(),u("div",{key:0,"data-scroll-target":n(a).code||"skills",class:"text-tertiary-base mb-8 sm:mb-16 py-4 sm:py-8"},[e("div",xe,[e("div",ye,[e("span",we," 0"+i(n(a).position)+". ",1),e("h2",$e,i(n(a).value),1),ke]),e("ul",De,[(c(!0),u(O,null,A(n(o),(g,h)=>(c(),E(ge,{"skill-name":h,"skill-value":g},null,8,["skill-name","skill-value"]))),256))])])],8,ve)):(c(),u("div",Ce))}},Se={class:"o-container o-container--sm mb-12 sm:mb-24 lg:mb-40"},Te={class:"js-appear-opacity Title Title--2xl mb-4"},Me={class:"js-appear-stagger flex flex-wrap","data-stagger":"0.05"},Oe={class:"js-appear-stagger-child px-2 py-1 mr-2 mb-2 border border-primary-base rounded"},Ae={__name:"Tools",async setup(d){let l,t;const{fetchDataTools:o,getDataTools:a}=y.tools();return[l,t]=C(()=>j("tool",()=>$fetch(S+"tool")).then(s=>{o(s.data.value.data.attributes)})),await l,t(),(s,_)=>(c(),u("div",Se,[e("h2",Te,i(n(a).title),1),e("ul",Me,[(c(!0),u(O,null,A(n(a).tools,r=>(c(),u("li",Oe,i(r),1))),256))])]))}},Be=["data-scroll-target"],Pe={class:"js-appear-defer o-container o-container--lg"},Re={class:"js-appear-defer-child flex-flow-centerY mb-8"},Ie={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},ze={class:"Title"},Le=e("span",{class:"Line"},null,-1),Ee={class:"js-appear-defer-child flex mb-8 overflow-x-auto Scrollbar Scrollbar--light md-down:pb-4"},Ne=["onClick"],Ye={class:"flex-flow-centerY mb-4"},Ve={class:"mr-4 text-xl font-bold text-tertiary-base"},Fe=["href","aria-label"],He={class:"flex-flow-centerY mb-4 lg:mb-2"},Ue=e("i",{class:"Icon-angle-right text-primary-base mr-3 text-xl"},null,-1),qe={class:"flex-1"},We={__name:"Experiences",async setup(d){let l,t;const{fetchDataExperiences:o,getDataExperiences:a,getCurrentExperience:s,getCurrentPosition:_,setCurrentPosition:r,getSectionExperiences:p}=y.experiences(),b=D(""),m=(f,g)=>{if(g===_.value||!b.value)return;const h=N.timeline({paused:!0}),x=()=>r(g);h.to(b.value,{opacity:0,duration:.25,onComplete:x}),h.to(b.value,{opacity:1,duration:.15}),h.play()};return[l,t]=C(()=>j("experiences",()=>$fetch(S+"experiences")).then(f=>{const g=f.data.value.data.map(({attributes:h})=>h).sort((h,x)=>h.position-x.position);o(g)})),await l,t(),(f,g)=>n(p)&&n(a).length&&n(s)?(c(),u("div",{key:0,"data-scroll-target":n(p).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",Pe,[e("div",Re,[e("span",Ie," 0"+i(n(p).position)+". ",1),e("h2",ze,i(n(p).value),1),Le]),e("div",Ee,[(c(!0),u(O,null,A(n(a),h=>(c(),u("button",{onClick:x=>m(x,h.position),class:R(["min-w-56 mx-2 font-bold py-2 md:py-3 px-4 md:px-6 transition-fast text-sm rounded md-down:leading-none",[h.position===n(_)?"bg-gradient-to-r from-primary-base to-primary-dark text-secondary-base":"text-primary-base hover:bg-primary-base/10"]])},i(h.date),11,Ne))),256))]),e("div",{class:"js-appear-defer-child",ref_key:"currentExperienceContent",ref:b},[e("div",Ye,[e("p",Ve,i(n(s).job),1),e("a",{href:n(s).link_location,class:"font-bold has-underline has-underline--primary text-primary-base",target:"_blank",rel:"noopener","aria-label":n(s).location_details},i(n(s).location_details),9,Fe)]),e("ul",null,[(c(!0),u(O,null,A(n(s).roles,h=>(c(),u("li",He,[Ue,e("span",qe,i(h),1)]))),256))])],512)])],8,Be)):H("",!0)}},Ge=d=>d.getBoundingClientRect().top+window.scrollY,Ke={key:0,ref:"lastRealisation",class:"self-start"},Je=["href"],Qe=["data-src","alt"],Xe=e("span",{class:"z-2 absolute inset-0 bg-secondary-base/10 group-hover:bg-secondary-base/0 transition-fast"},null,-1),Ze={class:"z-1 absolute top-0 right-0 bg-secondary-light px-2 py-1 leading-none"},et={class:"js-slide-from-top lg-down:p-4 lg:p-10 bg-secondary-lighter lg:max-w-96 w-full"},tt=["href"],at={class:"flex flex-wrap"},st={class:"px-2 py-1 mr-2 mb-2 border border-primary-base rounded lg:text-sm"},nt={__name:"Realisation",props:{realisation:Object,index:Number},setup(d){const l=d,{getDataRealisationsLimited:t}=y.realisations(),{realisation:o,index:a}=l;return(s,_)=>{var r,p,b,m;return c(),u(O,null,[n(a)===n(t).length-1?(c(),u("span",Ke,null,512)):H("",!0),e("a",{href:n(o).url,class:"js-slide-from-bottom flex-1 max-h-[550px] h-full max-w-[940px] w-full z-0 relative overflow-hidden group",target:"_blank",rel:"noopener"},[e("img",{"data-src":(m=(b=(p=(r=n(o))==null?void 0:r.image)==null?void 0:p.data)==null?void 0:b.attributes)==null?void 0:m.caption,alt:n(o).name,class:"lazyload z-1 relative"},null,8,Qe),Xe,e("p",Ze,i(n(o).year),1)],8,Je),e("div",{class:R(["transform",[n(a)%2===0?"lg:translate-x-16":"lg:-translate-x-16"]])},[e("div",et,[e("a",{href:n(o).url,target:"_blank",class:"Title Title--2xl block mb-4 font-bold"},i(n(o).name),9,tt),e("ul",at,[(c(!0),u(O,null,A(n(o).tags.filter(f=>f),f=>(c(),u("li",st,i(f),1))),256))])])],2)],64)}}},ot=["data-scroll-target"],lt={class:"o-container o-container--lg"},rt={class:"js-appear flex-flow-centerY mb-8"},it={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},ct={class:"Title"},dt=e("span",{class:"Line"},null,-1),_t={class:"flex-flow-center"},ut={__name:"Realisations",async setup(d){let l,t;const{fetchDataRealisations:o,getDataRealisationsLimited:a,getSectionRealisations:s,getLimit:_,limitUp:r,limitDown:p}=y.realisations(),{getDataTranslations:b}=y.translations(),m=D(4),f=D(),g=x=>{m.value>a.value.length||r()},h=x=>{m.value>=a.value.length||(p(),setTimeout(()=>{!f.value.length||window.scrollTo({top:Ge(f.value[0]),behavior:"smooth"})},50))};return ee(()=>{te(),ae()}),[l,t]=C(()=>j("realisations",()=>$fetch(S+"realisations?populate=image")).then(x=>{const T=x.data.value.data.map(({attributes:M})=>M).sort((M,$)=>M.position-$.position);o(T)})),await l,t(),(x,T)=>(c(),u("div",{"data-scroll-target":n(s).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",lt,[e("div",rt,[e("span",it," 0"+i(n(s).position)+". ",1),e("h2",ct,i(n(s).value),1),dt])]),(c(!0),u(O,null,A(n(a),(M,$)=>(c(),u("div",{key:$,class:R(["flex lg-down:flex-col lg:flex-flow-center js-appear relative mb-12 lg:mb-24 lg-down:mx-4",{"lg:flex-row-reverse":$%2===0}])},[(c(),E(nt,{realisation:M,index:$,key:$},null,8,["realisation","index"]))],2))),128)),e("div",_t,[z(e("button",{class:"m-4 Button Button--small",onClick:g},i(n(b).see_more),513),[[L,n(_)<=n(a).length]]),z(e("button",{class:"m-4 Button Button--small",onClick:h},i(n(b).see_less),513),[[L,n(a).length>m.value]])])],8,ot))}},pt=e("div",{class:"z-3 fixed top-4 left-4 lg:top-8 lg:left-8 w-8 h-8 flex-flow-center bg-secondary-base border-2 border-primary-base leading-none pt-1 font-bold transition-fast hover:rounded-lg"}," FA ",-1),mt=e("span",{class:"Menu-line"},null,-1),ft=e("span",{class:"Menu-line"},null,-1),ht=e("span",{class:"Menu-line"},null,-1),bt=[mt,ft,ht],gt={class:"Menu-items"},vt=["data-scroll-trigger"],xt={class:"mr-2"},yt=e("li",{class:"Menu-item gsap-menu-item has-underline mt-16"},[e("a",{href:"/cv_armanet_florian.pdf",target:"_blank",rel:"noopener"},[e("i",{class:"Icon-download mr-4"}),e("span",null,"Mon CV")])],-1),wt={__name:"Menu",setup(d){const{getDataSections:l}=y.sections(),t=D(!1),o=N.timeline({paused:!0}),a=(r,p)=>{r.to(p,{duration:.5,stagger:.1,transform:"translateY(0)",ease:"Power2.easeOut",opacity:1},"<0.5")},s=r=>{if(document.body.parentNode.classList.toggle("overflow-hidden"),!t.value){const p=document.querySelectorAll(".gsap-menu-item");a(o,p),t.value=!0,o.timeScale(1).play();return}o.timeScale(3).reverse(),o.eventCallback("onReverseComplete",()=>{t.value=!1})},_=r=>{document.body.parentNode.classList.toggle("overflow-hidden"),o.timeScale(4).reverse(),o.eventCallback("onReverseComplete",()=>{t.value=!1})};return(r,p)=>(c(),u("nav",null,[pt,e("div",{class:R(["Menu",{isActive:t.value}]),onClick:s},bt,2),e("div",{class:R(["Menu-content",{isActive:t.value}])},[e("ul",gt,[(c(!0),u(O,null,A(n(l),b=>(c(),u("li",{"data-scroll-trigger":b.code,onClick:_,class:"Menu-item gsap-menu-item has-underline"},[e("span",xt,"0"+i(b.position)+".",1),e("span",null,i(b.value),1)],8,vt))),256)),yt])],2)]))}},$t=["data-scroll-target"],kt={class:"js-appear-defer o-container o-container--lg"},Dt={class:"js-appear-defer-child flex-flow-centerY mb-4 sm:mb-8"},Ct={class:"Title Title--6xl text-primary-base leading-none text-tertiary-hover mr-6"},jt={class:"Title"},St=e("span",{class:"Line"},null,-1),Tt={class:"o-grid sm:o-grid--loose md-down:items-center"},Mt={class:"js-appear-defer-child o-col-12 md:o-col-7 flex flex-col justify-center sm-down:order-2"},Ot={class:""},At={class:"js-appear-defer-child o-col-12 md:o-col-5 sm-down:flex-flow-center sm-down:mb-2 sm-down:order-1"},Bt=["data-src","alt"],Pt={__name:"About",async setup(d){let l,t;const{fetchDataAbout:o,getDataAbout:a,getSectionAbout:s,getImageObject:_,setImageObject:r,setPdfObject:p}=y.about();return[l,t]=C(()=>j("about",()=>$fetch(S+"about?populate=image,pdf")).then(b=>{var m,f,g,h,x,T;o(b.data.value.data.attributes),r(((g=(f=(m=a.value)==null?void 0:m.image)==null?void 0:f.data)==null?void 0:g.attributes)||null),p(((T=(x=(h=a.value)==null?void 0:h.pdf)==null?void 0:x.data)==null?void 0:T.attributes)||null)})),await l,t(),(b,m)=>{var f,g;return c(),u("div",{"data-scroll-target":n(s).code,class:"text-tertiary-base mb-12 sm:mb-24 lg:mb-40 py-8"},[e("div",kt,[e("div",Dt,[e("span",Ct," 0"+i(n(s).position)+". ",1),e("h2",jt,i(n(s).value),1),St]),e("div",Tt,[e("div",Mt,[e("p",Ot,i(n(a).text),1)]),e("div",At,[e("img",{"data-src":(f=n(_))==null?void 0:f.caption,alt:(g=n(_))==null?void 0:g.name,class:"lazyload rounded-full border-4 border-primary-base w-32 md:w-64 h-32 md:h-64 mb-4"},null,8,Bt)])])])],8,$t)}}},Rt=["data-scroll-target"],It={class:"o-container o-container--lg text-center mb-20"},zt={class:"flex-flow-center mb-20"},Lt=["href"],Et=e("i",{class:"Icon-linkedin text-3xl text-primary-base transition-fast transform hover:text-primary-hover"},null,-1),Nt=[Et],Yt={class:"max-w-sm w-full mx-auto text-center p-4"},Vt={__name:"Contact",async setup(d){let l,t;const{fetchDataContact:o,getDataContact:a,getSectionContact:s}=y.contact(),{getDataTranslations:_}=y.translations(),r=p=>window.location.href=`mailto:${a.value.mail}`;return[l,t]=C(()=>j("contact",()=>$fetch(S+"contact")).then(p=>{o(p.data.value.data.attributes)})),await l,t(),(p,b)=>(c(),u("div",{"data-scroll-target":n(s).code,class:"js-appear-opacity text-tertiary-base py-8","data-animation-spedd":"0.25"},[e("div",It,[e("button",{onClick:r,class:"Button"},i(n(s).value),1)]),e("div",zt,[e("a",{href:n(a).linkedin,target:"_blank",class:"block transition-fast hover:-translate-y-1",rel:"noopener","aria-label":"Linkedin"},Nt,8,Lt)]),e("p",Yt,i(n(_).portfolio_development_details),1)],8,Rt))}},Ft={__name:"Main",async setup(d){let l,t;const{fetchDataSections:o}=y.sections(),{fetchDataTranslations:a}=y.translations();return[l,t]=C(()=>j("section",()=>$fetch(S+"section")).then(s=>{o(s.data.value.data.attributes.sections)})),await l,t(),[l,t]=C(()=>j("translation",()=>$fetch(S+"translation")).then(s=>{a(s.data.value.data.attributes.translations)})),await l,t(),(s,_)=>(c(),u("div",null,[k(wt),k(_e),e("main",null,[k(je),k(Ae),k(We),k(ut),k(Pt),k(Vt)])]))}},Ut={__name:"index",setup(d){return(l,t)=>(c(),E(n(Ft)))}};export{Ut as default};
