"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7918],{6742:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3366),r=n(7294),i=n(3727),l=n(2263),o=n(3919),s=n(412),c=(0,r.createContext)({collectLink:function(){}}),u=n(4996),d=n(8780);var m=function(e){var t,n,m=e.isNavLink,v=e.to,f=e.href,h=e.activeClassName,p=e.isActive,E=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,b=void 0===g||g,_=(0,a.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),N=(0,l.Z)().siteConfig,k=N.trailingSlash,U=N.baseUrl,w=(0,u.C)().withBaseUrl,y=(0,r.useContext)(c),L=v||f,Z=(0,o.Z)(L),C=null==L?void 0:L.replace("pathname://",""),T=void 0!==C?(n=C,b&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0;T&&Z&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:k,baseUrl:U}));var A,O=(0,r.useRef)(!1),B=m?i.OL:i.rU,S=s.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!S&&Z&&null!=T&&window.docusaurus.prefetch(T),function(){S&&A&&A.disconnect()}}),[T,S,Z]);var M=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,I=!T||!Z||M;return T&&Z&&!M&&!E&&y.collectLink(T),I?r.createElement("a",Object.assign({href:T},L&&!Z&&{target:"_blank",rel:"noopener noreferrer"},_)):r.createElement(B,Object.assign({},_,{onMouseEnter:function(){O.current||null==T||(window.docusaurus.preload(T),O.current=!0)},innerRef:function(e){var t,n;S&&e&&Z&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(A=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),n())}))}))).observe(t))},to:T||""},m&&{isActive:p,activeClassName:h}))}},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(2263),r=n(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1264:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var a=n(7294),r=n(6010),i=n(907),l=n(3783),o=n(6742),s=n(4973);var c=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},u=n(2263),d=n(1773);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:r},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.versionMetadata,r=(0,u.Z)().siteConfig.title,l=(0,i.gA)({failfast:!0}).pluginId,o=(0,d.J)(l).savePreferredVersionName,s=(0,i.Jo)(l),c=s.latestDocSuggestion,m=s.latestVersionSuggestion,h=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:m.label,to:h.path,onClick:function(){return o(m.name)}})))}var p=function(e){var t=e.versionMetadata;return"none"===t.banner?a.createElement(a.Fragment,null):a.createElement(h,{versionMetadata:t})},E=n(1217);function g(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function b(e){var t=e.lastUpdatedBy;return a.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement(a.Fragment,null,a.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(b,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(7462),k=n(3366),U="iconEdit_2_ui",w=function(e){var t=e.className,n=(0,k.Z)(e,["className"]);return a.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(U,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function y(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(w,null),a.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var L=n(7211),Z="tags_2ga9",C="tag_11ep";function T(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:C},a.createElement(L.Z,{name:t,permalink:n}))}))))}var A="lastUpdated_13-_";function O(e){return a.createElement("div",{className:"row margin-bottom--sm"},a.createElement("div",{className:"col"},a.createElement(T,e)))}function B(e){var t=e.editUrl,n=e.lastUpdatedAt,i=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:"row"},a.createElement("div",{className:"col"},t&&a.createElement(y,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",A)},(n||i)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:i})))}function S(e){var t=e.content.metadata,n=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,l=t.lastUpdatedBy,o=t.tags,s=o.length>0,c=!!(n||r||l);return s||c?a.createElement("footer",{className:"docusaurus-mt-lg"},s&&a.createElement(O,{tags:o}),c&&a.createElement(B,{editUrl:n,lastUpdatedAt:r,lastUpdatedBy:l,formattedLastUpdatedAt:i})):a.createElement(a.Fragment,null)}function M(e){var t=e.getBoundingClientRect();return t.top===t.bottom?M(e.parentNode):t}function I(e){var t,n=e.anchorTopOffset,a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((function(e){return M(e).top>=n}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(M(r))?r:null!=(t=a[a.indexOf(r)-1])?t:null:a[a.length-1]}function x(){var e=(0,a.useRef)(0),t=(0,d.LU)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var D=function(e){var t=(0,a.useRef)(void 0),n=x();(0,a.useEffect)((function(){var a=e.linkClassName,r=e.linkActiveClassName;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=I({anchorTopOffset:n.current}),l=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===l)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])},R="tableOfContents_35-E",W="table-of-contents__link",P={linkClassName:W,linkActiveClassName:"table-of-contents__link--active"};function j(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:W,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(j,{isChild:!0,toc:e.children}))}))):null}var z=function(e){var t=e.toc;return D(P),a.createElement("div",{className:(0,r.Z)(R,"thin-scrollbar")},a.createElement(j,{toc:t}))},F="tocCollapsible_1PrD",V="tocCollapsibleButton_2O1e",q="tocCollapsibleContent_2Ydz",H="tocCollapsibleExpanded_3GYr";function J(e){var t,n=e.toc,i=e.className,l=(0,d.uR)({initialState:!0}),o=l.collapsed,c=l.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(F,(t={},t[H]=!o,t),i)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",V),onClick:c},a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(d.zF,{lazy:!0,className:q,collapsed:o},a.createElement(j,{toc:n})))}var Y=n(6159),G="docItemContainer_33ec",K="docItemCol_3FnS",Q="tocMobile_3Hoh";function X(e){var t,n=e.content,o=e.versionMetadata,s=n.metadata,u=n.frontMatter,d=u.image,m=u.keywords,v=u.hide_title,f=u.hide_table_of_contents,h=s.description,g=s.title,b=(0,i.gA)({failfast:!0}).pluginId,_=(0,i.gB)(b).length>1,N=!v&&void 0===n.contentTitle,k=(0,l.Z)(),U=!f&&n.toc&&n.toc.length>0,w=U&&("desktop"===k||"ssr"===k);return a.createElement(a.Fragment,null,a.createElement(E.Z,{title:g,description:h,keywords:m,image:d}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",(t={},t[K]=!f,t))},a.createElement(p,{versionMetadata:o}),a.createElement("div",{className:G},a.createElement("article",null,_&&a.createElement("span",{className:"badge badge--secondary"},"Version: ",o.label),U&&a.createElement(J,{toc:n.toc,className:Q}),a.createElement("div",{className:"markdown"},N&&a.createElement(Y.N,null,g),a.createElement(n,null)),a.createElement(S,e)),a.createElement(c,{metadata:s}))),w&&a.createElement("div",{className:"col col--3"},a.createElement(z,{toc:n.toc}))))}},6159:function(e,t,n){n.d(t,{N:function(){return d},Z:function(){return m}});var a=n(3366),r=n(7462),i=n(7294),l=n(6010),o=n(4973),s=n(1773),c="anchorWithStickyNavbar_31ik",u="anchorWithHideOnScrollNavbar_3R7-",d=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},m=function(e){return"h1"===e?d:(t=e,function(e){var n,r=e.id,d=(0,a.Z)(e,["id"]),m=(0,s.LU)().navbar.hideOnScroll;return r?i.createElement(t,d,i.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor","anchor__"+t,(n={},n[u]=m,n[c]=!m,n)),id:r}),d.children,i.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.createElement(t,d)});var t}},1217:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(9105),i=n(1773),l=n(4996);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=e.children,u=(0,i.pe)(t),d=(0,l.C)().withBaseUrl,m=s?d(s,{absolute:!0}):void 0;return a.createElement(r.Z,null,t&&a.createElement("title",null,u),t&&a.createElement("meta",{property:"og:title",content:u}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),m&&a.createElement("meta",{property:"og:image",content:m}),m&&a.createElement("meta",{name:"twitter:image",content:m}),c)}},7211:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(6010),i=n(6742),l="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,n=e.permalink,c=e.name,u=e.count;return a.createElement(i.Z,{href:n,className:(0,r.Z)(l,(t={},t[o]=!u,t[s]=u,t))},c,u&&a.createElement("span",null,u))}},3783:function(e,t,n){var a=n(7294),r=n(412),i="desktop",l="mobile",o="ssr";function s(){return r.Z.canUseDOM?window.innerWidth>996?i:l:o}t.Z=function(){var e=(0,a.useState)((function(){return s()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){function e(){n(s())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},8780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);