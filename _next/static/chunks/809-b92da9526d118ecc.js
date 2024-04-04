"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{87464:function(n,e,a){var i=a(90626),t=a(92997),l=a.n(t);e.Z=n=>{let{breadcrumbData:e}=n;return(0,i.jsx)("div",{className:"horizontal-overflow",children:(0,i.jsxs)("ul",{className:"breadcrumb",children:[null==e?void 0:e.steps.map((n,e)=>n.path&&n.name&&(0,i.jsxs)("li",{children:[" ",(0,i.jsxs)(l(),{title:n.name,href:n.path,className:"link",children:["".concat(n.name," >"),"\xa0"]})]},"breadcrumb-".concat(e))),(0,i.jsx)("li",{children:null==e?void 0:e.activePage})]})})}},40709:function(n,e,a){a(90626),a(91569),a(92997)},30809:function(n,e,a){var i=a(90626),t=a(19516),l=a.n(t),c=a(92997),s=a.n(c),r=a(53084),o=a(91569),d=a(43602),m=a(9971),u=a(44252),x=a(15389),y=a(19884),h=a.n(y),g=a(46925),p=a(87464),v=a(61778),j=a(46373),f=a(41975),k=a(75799);a(40709);var N=a(7303);let b={bigDesktop:{breakpoint:{max:3e3,min:1200},items:7,partialVisibilityGutter:30},desktop:{breakpoint:{max:1199,min:673},items:7,partialVisibilityGutter:15},bigPhone:{breakpoint:{max:672,min:451},items:3.5,partialVisibilityGutter:0},smallMobile:{breakpoint:{max:450,min:0},items:3.5,partialVisibilityGutter:0}};e.Z=n=>{let{weekdays:e,activeDay:a,dayPlaybills:t,titlePrefix:c,metaTitle:y,metaDescription:z,pageTitle:I,breadcrumbData:T,breadcrumbMarkupData:F,isLoggedIn:V,channelListSsr:D}=n,[C,R]=(0,o.useState)("all-day"),w=(0,o.useRef)(),[Y,S]=(0,o.useState)([]),[Z,H]=(0,o.useState)(!1),[L,P]=(0,o.useState)(void 0),[M,_]=(0,o.useState)(0),G=(0,d.I0)(),A=(0,d.v9)(n=>n.reminderManagement.reminderQuery.reminderContents),O=(0,d.v9)(n=>n.recordReducer.recordedProgram),E=(0,r.useRouter)(),q="https://tvplus.com.tr".concat(E.asPath),J=n=>{let e={type:"1",contentID:null==n?void 0:n.id,contentType:"PROGRAM"};(null==A?void 0:A.find(e=>(null==e?void 0:e.contentID)===(null==n?void 0:n.id)))?G((0,m.rT)([e])):G((0,m.Fz)([e]))},W=n=>{let e=null==Y?void 0:Y.find(e=>e.programId===(null==n?void 0:n.id));H(!0),_(null==n?void 0:n.channo),P({...n,pvrTask:e})};return(0,o.useEffect)(()=>{V&&k.Z.getPVR({count:"-1",offset:"0",orderType:"10"}).then(n=>{S(null==n?void 0:n.pvrlist)})},[O,Z]),(0,o.useEffect)(()=>{let n=window.innerWidth;if(null==w?void 0:w.current){let e=0;6===a.index?e=3.5:a.index>3&&(e=3),w.current.goToSlide(n<673&&e)}V&&k.Z.getPVR({count:"-1",offset:"0",orderType:"10"}).then(n=>{S(null==n?void 0:n.pvrlist)})},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("title",{children:y||"".concat(a.dayFullName," Dizileri | ").concat(a.dayFullName," Yayın Akışı TV+")}),(0,i.jsx)("meta",{name:"description",content:z||"".concat(a.dayFullName," g\xfcn\xfc hangi diziler var? ").concat(a.dayFullName," g\xfcnleri yayınlanan dizilerin en heyecanlı anları TV+'ta! \xdcstelik ilk 7 g\xfcn \xfccretsiz.")}),(0,i.jsx)("link",{rel:"canonical",href:q}),(0,i.jsx)("meta",{property:"og:title",content:y||"".concat(a.dayFullName," Dizileri | ").concat(a.dayFullName," Yayın Akışı TV+")}),(0,i.jsx)("meta",{property:"og:description",content:z||"".concat(a.dayFullName," g\xfcn\xfc hangi diziler var? ").concat(a.dayFullName," g\xfcnleri yayınlanan dizilerin en heyecanlı anları TV+'ta! \xdcstelik ilk 7 g\xfcn \xfccretsiz.")}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@TurkcellTVPlus"}),(0,i.jsx)("meta",{name:"twitter:title",content:y||"".concat(a.dayFullName," Dizileri | ").concat(a.dayFullName," Yayın Akışı TV+")}),(0,i.jsx)("meta",{name:"twitter:description",content:z||"".concat(a.dayFullName," g\xfcn\xfc hangi diziler var? ").concat(a.dayFullName," g\xfcnleri yayınlanan dizilerin en heyecanlı anları TV+'ta! \xdcstelik ilk 7 g\xfcn \xfccretsiz.")}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"WebPage",name:y||"".concat(a.dayFullName," Dizileri | ").concat(a.dayFullName," Yayın Akışı TV+"),description:z||"".concat(a.dayFullName," g\xfcn\xfc hangi diziler var? ").concat(a.dayFullName," g\xfcnleri yayınlanan dizilerin en heyecanlı anları TV+'ta! \xdcstelik ilk 7 g\xfcn \xfccretsiz."),Publisher:{"@type":"Organization",name:"https://tvplus.com.tr"}})}}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(F)}})]}),(0,i.jsxs)("main",{className:"daily-epg-guide-container",children:[(0,i.jsx)("div",{className:"breadcrumb-container",children:(0,i.jsx)(p.Z,{breadcrumbData:T})}),(0,i.jsx)("h1",{className:"channel-title",children:I||"".concat(e.find(n=>n.activeDay).dayFullName," ").concat(c)}),(0,i.jsx)("h2",{className:"channel-subtitle",children:"".concat(a.day," ").concat(a.month," ").concat(a.year)}),(0,i.jsx)(j.default,{ref:w,responsive:b,ssr:!0,showDots:!1,infinite:!1,rewind:!0,containerClass:"daily-day-names-carousel",slidesToSlide:3.5,deviceType:"desktop",children:e.map((n,e)=>(0,i.jsxs)(s(),{href:n.path,title:"".concat(null==n?void 0:n.dayFullName," Dizileri"),className:"day-link ".concat(n.activeDay?"active":""),children:[(0,i.jsx)("div",{className:"date",children:(0,i.jsx)("span",{children:"".concat(n.day," ").concat(n.month)})}),(0,i.jsx)("div",{className:"day-name",children:(0,i.jsx)("span",{children:"".concat(null==n?void 0:n.dayFullName," Dizileri")})})]},"day-names-".concat(e)))}),a.isToday?(0,i.jsx)(N.default,{defaultValue:C,className:"active-day-content-dropdown",onChange:n=>{R(n)},options:[{value:"now-and-beyond",label:"G\xfcn\xfcn Kalanı"},{value:"all-day",label:"Hepsi"}]}):null,(0,i.jsx)("ul",{className:"playbill-list-container",children:t&&t.map(n=>(0,i.jsxs)("li",{className:"playbill-list-item".concat((0,g.iN)(n)?" active-item":"").concat(n.name?"":" disabled-playbill").concat(!a.isToday||"all-day"===C||(0,g.iN)(n)||(0,g.T8)(n)?"":" hide-playbill"),children:[V&&(null==n?void 0:n.isnpvr)==="1"&&(0,g.T8)(n)&&(0,i.jsxs)("span",{onClick:()=>J(n),className:"utility reminder icon icon-remind",children:[" ",A&&(null==A?void 0:A.find(e=>(null==e?void 0:e.contentID)===(null==n?void 0:n.id)))&&(0,i.jsx)("span",{className:"icon icon-check"})," "]}),V&&(0,i.jsxs)("span",{onClick:()=>W(n),className:"utility record icon icon-record",children:[" ",Y&&(null==Y?void 0:Y.find(e=>e.programId===(null==n?void 0:n.id)))&&(0,i.jsx)("span",{className:"icon icon-check"})," "]}),(0,i.jsxs)(s(),{href:(0,x.xw)("/program-izle",n.name,n.id),title:"".concat(n.name," İzle"),className:"playbill-link",children:[(0,i.jsx)("div",{title:"".concat(n.channelName," Yayın Akışı"),className:"channel-epg-link",children:(0,i.jsx)("img",{src:n.channelLogo,alt:"".concat(n.channelName," Logo")})}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"playbill-image",src:n.picture,alt:n.name})}),(0,i.jsx)("div",{className:"playbill-detail-container",children:n.name?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:n.name}),(0,i.jsx)("time",{children:"".concat(h()(n.starttime,"YYYY-MM-DD HH:mm:ss ZZ").format("HH:mm")," - ").concat(h()(n.endtime,"YYYY-MM-DD HH:mm:ss ZZ").format("HH:mm"))}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"channel-detail-link",title:"".concat(n.channelName," Canlı TV"),children:n.channelName}),(0,i.jsx)("p",{className:"introduce",children:(0,u.zk)(n.introduce,520,"")}),(0,i.jsx)("div",{className:"rtuk-icons-container",children:(0,i.jsx)(v.Z,{advisory:n.advisory,ratingid:n.ratingid})})]}):(0,i.jsx)("div",{className:"no-playbill",children:"Yayın i\xe7eriği sağlanamamaktadır."})})]})]},"daily-epg-item-".concat(n.id)))}),Z&&(0,i.jsx)(f.Z,{program:L,channelNo:M,channels:D})]})]})}},61778:function(n,e,a){var i=a(90626);e.Z=n=>{let e="/images/vodContentIcons";return(0,i.jsxs)("ul",{className:"vodContentIcons",children:[n.ratingid&&"1"===n.ratingid&&(0,i.jsx)("li",{children:(0,i.jsx)("img",{alt:"Rt\xfck +7 Icon",src:"".concat(n.useLargerIcons?e+"/icon-rtuk-7@2x.png":e+"/icon-rtuk-7.png")})}),n.ratingid&&"2"===n.ratingid&&(0,i.jsx)("li",{children:(0,i.jsx)("img",{alt:"Rt\xfck +13 Icon",src:"".concat(n.useLargerIcons?e+"/icon-rtuk-13@2x.png":e+"/icon-rtuk-13.png")})}),n.ratingid&&"3"===n.ratingid&&(0,i.jsx)("li",{children:(0,i.jsx)("img",{alt:"Rt\xfck +18 Icon",src:"".concat(n.useLargerIcons?e+"/icon-rtuk-18@2x.png":e+"/icon-rtuk-18.png")})}),n.advisory&&n.advisory.includes("SC")&&(0,i.jsx)("li",{children:(0,i.jsx)("img",{alt:"Rt\xfck Cinsellik Icon",src:"".concat(n.useLargerIcons?e+"/icon-rtuk-cinsellik@2x.png":e+"/icon-rtuk-cinsellik.png")})}),n.ratingid&&"0"===n.ratingid&&(0,i.jsx)("li",{children:(0,i.jsx)("img",{alt:"Rt\xfck Genel Icon",src:"".concat(n.useLargerIcons?e+"/icon-rtuk-genel@2x.png":e+"/icon-rtuk-genel.png")})}),n.advisory&&n.advisory.includes("VH")&&(0,i.jsx)("li",{children:(0,i.jsx)("img",{alt:"Rt\xfck Şiddet Icon",src:"".concat(n.useLargerIcons?e+"/icon-rtuk-siddet@2x.png":e+"/icon-rtuk-siddet.png")})}),n.advisory&&n.advisory.includes("IB")&&(0,i.jsx)("li",{children:(0,i.jsx)("img",{alt:"Rt\xfck Olumsuz İ\xe7erik Icon",src:"".concat(n.useLargerIcons?e+"/05@2x.png":e+"/05.png")})})]})}},75799:function(n,e,a){var i=a(40053),t=a.n(i);let l=t().V6.ContentService;e.Z={getFavoriteList:async n=>{try{return l.queryFavorite(n)}catch(n){}},getMyContent:async n=>{try{return l.queryMyContent(n)}catch(n){}},getContentDetail:async n=>{try{return l.getContentDetail(n)}catch(n){}},getPVR:async n=>{try{return l.queryPVR(n)}catch(n){}}}}}]);