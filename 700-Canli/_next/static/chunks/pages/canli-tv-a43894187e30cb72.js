(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7855],{57761:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/canli-tv",function(){return l(80890)}])},25050:function(e,n,l){"use strict";var i=l(90626),a=l(89559),s=l(44252),t=l(55951),c=l(1920);n.Z=()=>{let{t:e}=(0,a.Z)();return!t.ZP.isChildProfile()&&(0,i.jsx)("div",{className:"container-fluid faqContainer",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:e("channels:faqTitle")}),(0,i.jsx)(c.Z,{question:e("channels:faqQ1"),answerData:(0,i.jsx)("p",{children:e("channels:faqA1")})},"faq-collapse-1}"),(0,i.jsx)(c.Z,{question:e("channels:faqQ2"),answerData:(0,i.jsx)("p",{children:e("channels:faqA2")})},"faq-collapse-2}"),(0,i.jsx)(c.Z,{question:e("channels:faqQ3"),answerData:(0,i.jsx)("p",{children:e("channels:faqA3")})},"faq-collapse-3}"),(0,i.jsx)(c.Z,{question:e("channels:faqQ4"),answerData:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:e("channels:faqA4_1")})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:e("channels:faqA4_2")})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:e("channels:faqA4_3")})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:e("channels:faqA4_4")})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:e("channels:faqA4_5")})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:(0,s.nW)(e("channels:faqA4_6"))})}),(0,i.jsx)("li",{children:(0,i.jsx)("p",{children:e("channels:faqA4_7")})})]})},"faq-collapse-4}"),(0,i.jsx)(c.Z,{question:e("channels:faqQ5"),answerData:(0,i.jsx)("p",{children:e("channels:faqA5")})},"faq-collapse-5}")]})})})}},1920:function(e,n,l){"use strict";var i=l(90626),a=l(91569);n.Z=e=>{let{answerData:n,question:l,active:s}=e,[t,c]=(0,a.useState)(s||!1);return n&&l&&(0,i.jsxs)("div",{className:"faq-collapse",children:[(0,i.jsx)("div",{className:"faq-collapse-header",onClick:()=>c(e=>!e),children:(0,i.jsx)("h3",{style:{opacity:t?1:.8},children:l})}),(0,i.jsx)("div",{className:"faq-collapse-content ".concat(t?"p-active":""),children:n}),(0,i.jsx)("div",{className:"arrow-container",onClick:()=>c(e=>!e),children:t?(0,i.jsx)("img",{alt:"Arrow Up Icon",src:"/images/landing/faq/collapseIconActive.png"}):(0,i.jsx)("img",{alt:"Arrow Down Icon",src:"/images/landing/faq/collapseIcon.png"})})]})}},58102:function(e,n,l){"use strict";var i=l(90626),a=l(91569),s=l(89559);let t=e=>{let{title:n,headTag:l,showMore:a}=e;switch(l){case 1:return(0,i.jsx)("h1",{className:a?"show":"hide",children:n});case 2:default:return(0,i.jsx)("h2",{className:a?"show":"hide",children:n});case 3:return(0,i.jsx)("h3",{className:a?"show":"hide",children:n});case 4:return(0,i.jsx)("h4",{className:a?"show":"hide",children:n});case 5:return(0,i.jsx)("h5",{className:a?"show":"hide",children:n});case 6:return(0,i.jsx)("h6",{className:a?"show":"hide",children:n})}};n.Z=e=>{var n,l,c;let{visibleH1:r,data:o}=e,[d,h]=(0,a.useState)(!1),{t:u}=(0,s.Z)();return(null==o?void 0:o.kpi)?(0,i.jsxs)("article",{className:"kpi-container",children:[null==o?void 0:null===(n=o.kpi)||void 0===n?void 0:n.map((e,n)=>{if(0===n)return(0,i.jsxs)(a.Fragment,{children:[r?(0,i.jsx)("h1",{children:e.title}):(0,i.jsx)("h2",{children:e.title}),e.text.map((e,n)=>(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e}},"kpi-text-first-".concat(n)))]},"kpi-header")}),null==o?void 0:null===(l=o.kpi)||void 0===l?void 0:l.map((e,n)=>{if(0!==n){if(e.text)return(0,i.jsxs)(a.Fragment,{children:[e.title?(0,i.jsx)(t,{title:e.title,headTag:e.headTag,showMore:d},"kpi-header-".concat(n)):null,e.text.map((e,n)=>(0,i.jsx)("p",{className:d?"show":"hide",dangerouslySetInnerHTML:{__html:e}},"kpi-text-index-".concat(n)))]},"kpi-".concat(n));if(e.ol)return(0,i.jsxs)(i.Fragment,{children:[e.title?(0,i.jsx)(t,{title:e.title,headTag:e.headTag,showMore:d},"kpi-header-".concat(n)):null,(0,i.jsx)("ol",{className:d?"show":"hide",dangerouslySetInnerHTML:{__html:e.ol}},"kpi-text-index-".concat(n))]});if(e.ul)return(0,i.jsxs)(i.Fragment,{children:[e.title?(0,i.jsx)(t,{title:e.title,headTag:e.headTag,showMore:d},"kpi-header-".concat(n)):null,(0,i.jsx)("ul",{className:d?"show":"hide",dangerouslySetInnerHTML:{__html:e.ul}},"kpi-text-index-".concat(n))]})}}),(null==o?void 0:null===(c=o.kpi)||void 0===c?void 0:c.length)>1&&(0,i.jsxs)("p",{className:"more-button",onClick:()=>h(!d),children:[u(d?"common:less":"common:more"),d?(0,i.jsx)("svg",{width:"14",height:"16",viewBox:"0 0 14 16",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{stroke:"#FAD701",strokeWidth:"2",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:(0,i.jsx)("path",{d:"M7 14.726V2.7M1 6.95 7 1M7 1l6 5.95"})})}):(0,i.jsx)("svg",{width:"15",height:"17",viewBox:"0 0 15 17",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{stroke:"#FAD701",strokeWidth:"2",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:(0,i.jsx)("path",{d:"M7.637 1.637v12.026M1.637 9.413l6 5.95M7.637 15.363l6-5.95"})})})]})]}):null}},80890:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSP:function(){return A}});var i=l(90626),a=l(89559),s=l(84340),t=l.n(s),c=l(19516),r=l.n(c),o=l(53084),d=l(91569),h=l(43602),u=l(34438),v=l(20929),x=l(52200),m=l(38613),p=l(15389),j=l(191),g=l(25050),f=l(58102),N=l(95279),w=l(55951),k=l(4114),_=l.n(k),q=l(5554),y=l.n(q),A=!0;n.default=e=>{var n,l,s,c,k,q,A,L,D,C,T,I,M,P,Z,S;let{channelListSsr:E,categoriesList:H,seoData:O,seoDataKpi:b,isLoggedIn:F,executionTime:V,seoTexts:B}=e,{t:X}=(0,a.Z)(),Q=(0,o.useRouter)(),W=window.innerWidth,z=(0,x.BV)(W),[R,K]=(0,d.useState)(!1),[J,U]=(0,d.useState)(null),[Y,$]=(0,d.useState)(E||[]),{allChannelList:G,filterText:ee}=(0,h.v9)(u.Vh),en="https://tvplus.com.tr".concat(Q.asPath),el=(0,h.I0)();(0,d.useEffect)(()=>{U(z),F?(w.ZP.isChildProfile()&&"/canli-tv"===Q.asPath&&Q.push("/canli-tv/kategori/cocuk"),$(y()(G,e=>(null==e?void 0:e.type)==="VIDEO_CHANNEL").map(e=>{var n;return{...e,urlName:null==e?void 0:e.name,name:null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.replace(" HD","")}}))):$(E)},[F]),(0,d.useEffect)(()=>{F&&$(y()(G,e=>(null==e?void 0:e.type)==="VIDEO_CHANNEL").map(e=>{var n;return{...e,urlName:null==e?void 0:e.name,name:null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.replace(" HD","")}}))},[G]);let ei=async(e,n,l)=>{let i=n.id;e.stopPropagation(),l?el((0,v.hq)(i,l)):el((0,v.kj)(i,l)),N.Z.getChannelList().then(e=>{let n=y()(e,e=>(null==e?void 0:e.type)==="VIDEO_CHANNEL").map(e=>{var n;return{...e,urlName:null==e?void 0:e.name,name:null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.replace(" HD","")}});$(n),el((0,u.VB)(n))})},ea=e=>{let n="1"===e.issubscribed,l="1"===e.isfavorited,a=null==e?void 0:e.id,s=null==e?void 0:e.name,c=null==e?void 0:e.urlName,r=F&&n?(0,i.jsxs)("a",{href:(0,p.xw)("/izle/kanal",a),className:"channelLink",title:"".concat(s," İzle"),children:[(0,i.jsx)("img",{src:(0,j._o)(e,"channelpic","XL")}),(0,i.jsx)("p",{className:"channelName",children:s})]}):(0,i.jsxs)(t(),{href:(0,p.xw)("/canli-tv",c,a),className:"channelLink",title:"".concat(s," İzle"),children:[(0,i.jsx)("img",{src:(0,j._o)(e,"channelpic","XL")}),(0,i.jsx)("p",{className:"channelName",children:s})]});return(""===ee||(0,x.fn)(s,ee))&&(0,i.jsx)("li",{className:"channelListItem",children:(0,i.jsxs)("div",{className:"channelItem",children:[(null==e?void 0:e.id)!=="177"&&F?(0,i.jsx)("div",{className:"favorite-icon",onClick:n=>ei(n,e,l),children:l?(0,i.jsx)("img",{src:"/images/iconsVisual/like-active.png",alt:"Favourite Active Icon"}):(0,i.jsx)("img",{src:"/images/iconsVisual/like-default.png",alt:"Favourite Passive Icon"})}):null,r]})},a)};return(0,i.jsxs)(i.Fragment,{children:[!_()(null==O?void 0:O.pages)&&(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"".concat(O&&(0,x.Xg)(null==O?void 0:null===(l=O.pages)||void 0===l?void 0:null===(n=l.canli)||void 0===n?void 0:n.title))}),(0,i.jsx)("meta",{name:"description",content:"".concat(O&&(0,x.OD)(null==O?void 0:null===(c=O.pages)||void 0===c?void 0:null===(s=c.canli)||void 0===s?void 0:s.description))}),(0,i.jsx)("meta",{property:"og:title",content:"".concat(O&&(0,x.Xg)(null==O?void 0:null===(q=O.pages)||void 0===q?void 0:null===(k=q.canli)||void 0===k?void 0:k.title))}),(0,i.jsx)("meta",{property:"og:description",content:"".concat(O&&(0,x.OD)(null==O?void 0:null===(L=O.pages)||void 0===L?void 0:null===(A=L.canli)||void 0===A?void 0:A.description))}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@TurkcellTVPlus"}),(0,i.jsx)("meta",{name:"twitter:title",content:"".concat(O&&(0,x.Xg)(null==O?void 0:null===(C=O.pages)||void 0===C?void 0:null===(D=C.canli)||void 0===D?void 0:D.title))}),(0,i.jsx)("meta",{name:"twitter:description",content:"".concat(O&&(0,x.OD)(null==O?void 0:null===(I=O.pages)||void 0===I?void 0:null===(T=I.canli)||void 0===T?void 0:T.description))}),(0,i.jsx)("link",{rel:"canonical",href:en}),(0,i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"WebPage",name:O&&(0,x.Xg)(null==O?void 0:null===(P=O.pages)||void 0===P?void 0:null===(M=P.canli)||void 0===M?void 0:M.title),description:O&&(0,x.OD)(null==O?void 0:null===(S=O.pages)||void 0===S?void 0:null===(Z=S.canli)||void 0===Z?void 0:Z.description),Publisher:{"@type":"Organization",name:"https://tvplus.com.tr"}})}})]}),(0,i.jsxs)("main",{className:"container",style:{marginTop:"80px"},children:[!w.ZP.isChildProfile()&&(0,i.jsx)("div",{className:"tv-home-banner channels-epg-link",children:(0,i.jsx)(t(),{className:"btn tv-home-banner__streaming",href:"/canli-tv/yayin-akisi",children:"Yayın Akışı"})}),(0,i.jsx)("h1",{className:"channelTitle",children:X("channels:title")}),(0,i.jsx)("div",{className:"channelSearchBar",children:(0,i.jsx)("input",{type:"text",placeholder:X("channels:searchBarPlaceholder"),value:ee,onChange:e=>{el((0,u.$Q)(e.target.value))}})}),(0,i.jsxs)("ul",{className:"channel-category-list-container",children:[(0,i.jsx)("li",{className:"list-item",children:(0,i.jsx)(t(),{href:"/canli-tv",className:"active",title:"B\xfct\xfcn Kanallar",children:"Hepsi"})}),H&&H.map((e,n)=>(0,i.jsx)("li",{className:"list-item",children:(0,i.jsx)(t(),{href:e.link,title:"".concat(e.name," Kategorisi"),children:e.name})},"tv-category-list-".concat(n)))]}),(0,i.jsxs)("div",{className:"channel-list-container",children:[(0,i.jsx)("ul",{className:"channelList ".concat(R&&"moreChannels"),children:Y&&Y.map(e=>ea(e))}),!R&&J&&(0,m.tq)()&&(0,i.jsxs)("p",{className:"moreChannelButton",onClick:()=>K(!0),children:[" ",X("channels:more"),(0,i.jsx)("svg",{width:"15",height:"17",viewBox:"0 0 15 17",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{stroke:"#FAD701",strokeWidth:"2",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:(0,i.jsx)("path",{d:"M7.637 1.637v12.026M1.637 9.413l6 5.95M7.637 15.363l6-5.95"})})})]})]}),(0,i.jsx)(g.Z,{}),(0,i.jsx)(f.Z,{data:B})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=57761)}),_N_E=e.O()}]);