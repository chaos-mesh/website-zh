(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[2907],{6871:function(e,a,t){"use strict";var n=t(1262),s=t(3148),o=t(7294),i=t(2263),c=t(8084);a.Z=function(e){var a=e.children,t=e.className,r=function(e){var a=e.children;return o.createElement("div",{style:{marginBottom:"1.25rem"}},o.createElement(s.Z,{className:t},a))};return o.createElement(n.Z,{fallback:o.createElement(r,null,a)},(function(){var e=function(){var e=(0,i.default)().siteConfig,a=window.location.pathname,t=window.localStorage.getItem("docs-preferred-version-default");if(a===e.baseUrl&&t)return"current"===t?"latest":t;if(a.includes("/docs/next"))return"latest";var n=(0,c.usePluginData)("docusaurus-plugin-content-docs").versions,s=n.filter((function(e){return e.isLast}))[0].name;return n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.name}))[0]||s}(),t="latest"===e?a:a.replace("latest","v"+e);return o.createElement(r,null,t)}))}},3148:function(e,a,t){"use strict";t.d(a,{Z:function(){return w}});var n=t(2122),s=t(7294),o=t(6010),i=t(4544),c=t(735),r=t(7594),l=t.n(r),h=t(3583),m=t(4973),d="codeBlockContainer_2gih",p="codeBlockContent_3z4W",u="codeBlockTitle_1Kb7",k="codeBlock_6upA",v="codeBlockWithTitle_xy-i",g="copyButton_2e3i",N="codeBlockLines_xlV7",f=t(6700),b=/{([\d,-]+)}/,M=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var a={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},t=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+a[e].start+"\\s*("+t+")\\s*"+a[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")};function w(e){var a=e.children,t=e.className,r=e.metastring,w=e.title,C=(0,f.LU)().prism,y=(0,s.useState)(!1),x=y[0],z=y[1],E=(0,s.useState)(!1),H=E[0],B=E[1];(0,s.useEffect)((function(){B(!0)}),[]);var D=(0,f.bc)(r)||w,R=(0,s.useRef)(null),Z=[],j=(0,h.Z)(),T=Array.isArray(a)?a.join(""):a;if(r&&b.test(r)){var _=r.match(b)[1];Z=l()(_).filter((function(e){return e>0}))}var A=t&&t.replace(/language-/,"");!A&&C.defaultLanguage&&(A=C.defaultLanguage);var L=T.replace(/\n$/,"");if(0===Z.length&&void 0!==A){for(var V,S="",P=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return M(["js","jsBlock"]);case"jsx":case"tsx":return M(["js","jsBlock","jsx"]);case"html":return M(["js","jsBlock","html"]);case"python":case"py":return M(["python"]);default:return M()}}(A),q=T.replace(/\n$/,"").split("\n"),I=0;I<q.length;){var U=I+1,X=q[I].match(P);if(null!==X){switch(X.slice(1).reduce((function(e,a){return e||a}),void 0)){case"highlight-next-line":S+=U+",";break;case"highlight-start":V=U;break;case"highlight-end":S+=V+"-"+(U-1)+","}q.splice(I,1)}else I+=1}Z=l()(S),L=q.join("\n")}var G=function(){(0,c.Z)(L),z(!0),setTimeout((function(){return z(!1)}),2e3)};return s.createElement(i.ZP,(0,n.Z)({},i.lG,{key:String(H),theme:j,code:L,language:A}),(function(e){var a,t=e.className,i=e.style,c=e.tokens,r=e.getLineProps,l=e.getTokenProps;return s.createElement("div",{className:d},D&&s.createElement("div",{style:i,className:u},D),s.createElement("div",{className:(0,o.Z)(p,A)},s.createElement("div",{tabIndex:0,className:(0,o.Z)(t,k,"thin-scrollbar",(a={},a[v]=D,a))},s.createElement("div",{className:N,style:i},c.map((function(e,a){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=r({line:e,key:a});return Z.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),s.createElement("div",(0,n.Z)({key:a},t),e.map((function(e,a){return s.createElement("span",(0,n.Z)({key:a},l({token:e,key:a})))})))})))),s.createElement("button",{ref:R,type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(g),onClick:G},x?s.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):s.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},752:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return r},default:function(){return h}});var n=t(2122),s=t(9756),o=(t(7294),t(3905)),i={},c={unversionedId:"common/quick-run",id:"version-2.0.1/common/quick-run",isDocsHomePage:!1,title:"quick-run",description:"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002",source:"@site/versioned_docs/version-2.0.1/common/quick-run.md",sourceDirName:"common",slug:"/common/quick-run",permalink:"/website-zh/docs/common/quick-run",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/versioned_docs/version-2.0.1/common/quick-run.md",version:"2.0.1",frontMatter:{}},r=[],l={toc:r};function h(e){var a=e.components,t=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9a8c\u8bc1\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e00\u4e2a Chaos \u5b9e\u9a8c\u6765\u4f53\u9a8c Chaos Mesh \u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/website-zh/docs/run-a-chaos-experiment"},"\u8fd0\u884c\u5b9e\u9a8c"),"\u8fdb\u884c\u521b\u5efa\u3002\u6210\u529f\u521b\u5efa\u5b9e\u9a8c\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Chaos Dashboard \u89c2\u5bdf\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u3002"))}h.isMDXComponent=!0},2892:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return r},default:function(){return h}});var n=t(2122),s=t(9756),o=(t(7294),t(3905)),i={},c={unversionedId:"common/verify-installation",id:"version-2.0.1/common/verify-installation",isDocsHomePage:!1,title:"verify-installation",description:"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",source:"@site/versioned_docs/version-2.0.1/common/verify-installation.md",sourceDirName:"common",slug:"/common/verify-installation",permalink:"/website-zh/docs/common/verify-installation",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/versioned_docs/version-2.0.1/common/verify-installation.md",version:"2.0.1",frontMatter:{}},r=[],l={toc:r};function h(e){var a=e.components,t=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get po -n chaos-testing\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"STATUS")," \u72b6\u6001\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-testing chaos-controller-manager-69fd5c46c8-xlqpc\n")))))}h.isMDXComponent=!0},3887:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},metadata:function(){return h},toc:function(){return m},default:function(){return p}});var n=t(2122),s=t(9756),o=(t(7294),t(3905)),i=t(6871),c=t(2892),r=t(752),l={title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09"},h={unversionedId:"production-installation-using-helm",id:"version-2.0.1/production-installation-using-helm",isDocsHomePage:!1,title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09",description:"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u5b89\u88c5 Chaos Mesh\u3002",source:"@site/versioned_docs/version-2.0.1/production-installation-using-helm.md",sourceDirName:".",slug:"/production-installation-using-helm",permalink:"/website-zh/docs/production-installation-using-helm",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/versioned_docs/version-2.0.1/production-installation-using-helm.md",version:"2.0.1",frontMatter:{title:"\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09"},sidebar:"version-2.0.1/docs",previous:{title:"\u5feb\u901f\u8bd5\u7528\uff08\u6d4b\u8bd5\u63a8\u8350\uff09",permalink:"/website-zh/docs/quick-start"},next:{title:"\u79bb\u7ebf\u5b89\u88c5",permalink:"/website-zh/docs/offline-installation"}},m=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u4f7f\u7528-helm-\u5b89\u88c5",children:[{value:"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93",id:"\u7b2c-1-\u6b65\uff1a\u6dfb\u52a0-chaos-mesh-\u4ed3\u5e93",children:[]},{value:"\u7b2c 2 \u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684 Chaos Mesh \u7248\u672c",id:"\u7b2c-2-\u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684-chaos-mesh-\u7248\u672c",children:[]},{value:"\u7b2c 3 \u6b65\uff1a\u521b\u5efa\u5b89\u88c5 Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4",id:"\u7b2c-3-\u6b65\uff1a\u521b\u5efa\u5b89\u88c5-chaos-mesh-\u7684\u547d\u540d\u7a7a\u95f4",children:[]},{value:"\u7b2c 4 \u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5",id:"\u7b2c-4-\u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5",children:[]}]},{value:"\u9a8c\u8bc1\u5b89\u88c5",id:"\u9a8c\u8bc1\u5b89\u88c5",children:[]},{value:"\u8fd0\u884c Chaos \u5b9e\u9a8c",id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c",children:[]},{value:"\u5347\u7ea7 Chaos Mesh",id:"\u5347\u7ea7-chaos-mesh",children:[]},{value:"\u5378\u8f7d Chaos Mesh",id:"\u5378\u8f7d-chaos-mesh",children:[]},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:[{value:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh",id:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684-chaos-mesh",children:[]},{value:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",id:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",children:[]}]}],d={toc:m};function p(e){var a=e.components,t=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u63cf\u8ff0\u5982\u4f55\u5728\u751f\u4ea7\u73af\u5883\u5b89\u88c5 Chaos Mesh\u3002"),(0,o.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm"),"\u3002"),(0,o.kt)("p",null,"\u5982\u8981\u67e5\u770b Helm \u662f\u5426\u5df2\u7ecf\u5b89\u88c5\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion:"go1.16.3"}\n')),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u4e00\u81f4\uff0c\u8868\u793a Helm \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6587\u4e2d\u7684\u547d\u4ee4\u5c06\u4f1a\u4f7f\u7528 Helm v3 \u6765\u64cd\u4f5c Chaos Mesh\u3002\u5982\u679c\u4f60\u7684\u73af\u5883\u4e2d Helm \u7684\u7248\u672c\u4e3a v2\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/v2_v3_migration/"},"\u5c06 Helm v2 \u8fc1\u79fb\u5230 v3"),"\u6216\u6309\u7167 v2 \u7684\u683c\u5f0f\u8fdb\u884c\u4fee\u6539\u3002"))),(0,o.kt)("h2",{id:"\u4f7f\u7528-helm-\u5b89\u88c5"},"\u4f7f\u7528 Helm \u5b89\u88c5"),(0,o.kt)("h3",{id:"\u7b2c-1-\u6b65\uff1a\u6dfb\u52a0-chaos-mesh-\u4ed3\u5e93"},"\u7b2c 1 \u6b65\uff1a\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93"),(0,o.kt)("p",null,"\u5728 Helm \u4ed3\u5e93\u4e2d\u6dfb\u52a0 Chaos Mesh \u4ed3\u5e93\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add chaos-mesh https://charts.chaos-mesh.org\n")),(0,o.kt)("h3",{id:"\u7b2c-2-\u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684-chaos-mesh-\u7248\u672c"},"\u7b2c 2 \u6b65\uff1a\u67e5\u770b\u53ef\u4ee5\u5b89\u88c5\u7684 Chaos Mesh \u7248\u672c"),(0,o.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u663e\u793a\u53ef\u4ee5\u5b89\u88c5\u7684 charts\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u547d\u4ee4\u4f1a\u8f93\u51fa\u6700\u65b0\u53d1\u5e03\u7684 chart\uff0c\u5982\u9700\u5b89\u88c5\u5386\u53f2\u7248\u672c\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u6240\u6709\u7684\u7248\u672c\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo chaos-mesh -l\n")))),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u547d\u4ee4\u5b8c\u6210\u540e\uff0c\u63a5\u4e0b\u6765\u5f00\u59cb\u5b89\u88c5 Chaos Mesh\u3002"),(0,o.kt)("h3",{id:"\u7b2c-3-\u6b65\uff1a\u521b\u5efa\u5b89\u88c5-chaos-mesh-\u7684\u547d\u540d\u7a7a\u95f4"},"\u7b2c 3 \u6b65\uff1a\u521b\u5efa\u5b89\u88c5 Chaos Mesh \u7684\u547d\u540d\u7a7a\u95f4"),(0,o.kt)("p",null,"\u63a8\u8350\u5c06 Chaos Mesh \u5b89\u88c5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-testing")," \u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4efb\u610f\u547d\u540d\u7a7a\u95f4\u5b89\u88c5 Chaos Mesh\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns chaos-testing\n")),(0,o.kt)("h3",{id:"\u7b2c-4-\u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"},"\u7b2c 4 \u6b65\uff1a\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"),(0,o.kt)("p",null,"\u7531\u4e8e\u4e0d\u540c\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u5b88\u62a4\u8fdb\u7a0b\u6240\u76d1\u542c\u7684 socket path \u4e0d\u540c\uff0c\u5728\u5b89\u88c5\u65f6\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684\u503c\uff0c\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u6765\u8fd0\u884c\u5982\u4e0b\u7684\u5b89\u88c5\u547d\u4ee4\u3002"),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4\u4e3a /var/run/docker.sock\nhelm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing\n")),(0,o.kt)("h4",{id:"containerd"},"containerd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock\n")),(0,o.kt)("h4",{id:"k3s"},"K3s"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u8981\u5b89\u88c5\u7279\u5b9a\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install")," \u540e\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--version xxx")," \u53c2\u6570\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"--version v2.0.0"),"\u3002"))),(0,o.kt)("h2",{id:"\u9a8c\u8bc1\u5b89\u88c5"},"\u9a8c\u8bc1\u5b89\u88c5"),(0,o.kt)(c.default,{mdxType:"VerifyInstallation"}),(0,o.kt)("h2",{id:"\u8fd0\u884c-chaos-\u5b9e\u9a8c"},"\u8fd0\u884c Chaos \u5b9e\u9a8c"),(0,o.kt)(r.default,{mdxType:"QuickRun"}),(0,o.kt)("h2",{id:"\u5347\u7ea7-chaos-mesh"},"\u5347\u7ea7 Chaos Mesh"),(0,o.kt)("p",null,"\u5982\u8981\u5347\u7ea7 Chaos Mesh\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u8981\u5347\u7ea7\u81f3\u7279\u5b9a\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u540e\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--version xxx")," \u53c2\u6570\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"--version v2.0.0"),"\u3002"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u5728\u975e Docker \u73af\u5883\u4e0b\u8fdb\u884c\u5347\u7ea7\uff0c\u9700\u5982",(0,o.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E4%B8%8D%E5%90%8C%E7%8E%AF%E5%A2%83%E4%B8%8B%E5%AE%89%E8%A3%85"},"\u5728\u4e0d\u540c\u73af\u5883\u4e0b\u5b89\u88c5"),"\u6240\u8ff0\u6dfb\u52a0\u76f8\u5e94\u7684\u53c2\u6570\u3002"))),(0,o.kt)("p",null,"\u5982\u8981\u4fee\u6539\u914d\u7f6e\uff0c\u8bf7\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u4e0d\u540c\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5982\u4e0b\u547d\u4ee4\u4f1a\u5347\u7ea7\u5e76\u5378\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"chaos-dashboard"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-testing --set dashboard.create=false\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u7684\u503c\u53ca\u5176\u76f8\u5173\u7684\u7528\u6cd5\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml"},"\u6240\u6709\u7684\u503c"),"\u3002"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u8b66\u544a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u76ee\u524d\uff0cHelm \u5728\u5347\u7ea7\u65f6\u4e0d\u4f1a\u5e94\u7528\u6700\u65b0\u7684 CustomResourceDefinition (CRD)\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u9519\u8bef\u7684\u53d1\u751f\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u624b\u52a8\u5e94\u7528\u6700\u65b0\u7684 CRD\uff1a"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"PickVersion"},"curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl apply -f -"))),(0,o.kt)("h2",{id:"\u5378\u8f7d-chaos-mesh"},"\u5378\u8f7d Chaos Mesh"),(0,o.kt)("p",null,"\u5982\u8981\u5378\u8f7d Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall chaos-mesh -n chaos-testing\n")),(0,o.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,o.kt)("h3",{id:"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684-chaos-mesh"},"\u5982\u4f55\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh"),(0,o.kt)("p",null,"Chaos Mesh \u4ed3\u5e93\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"helm/chaos-mesh/values.yaml")," \u5b9a\u4e49\u4e86\u6700\u65b0\u7248\u672c\uff08master \u5206\u652f\uff09\u7684\u955c\u50cf\u3002\u82e5\u60f3\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Chaos Mesh\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u514b\u9686\u4ed3\u5e93\ngit clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n\nhelm install chaos-mesh helm/chaos-mesh -n=chaos-testing\n")),(0,o.kt)("h3",{id:"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f"},"\u5982\u4f55\u5173\u95ed\u5b89\u5168\u6a21\u5f0f"),(0,o.kt)("p",null,"\u5b89\u5168\u6a21\u5f0f\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u3002\u5982\u9700\u5173\u95ed\uff0c\u8bf7\u5728\u5b89\u88c5\u6216\u5347\u7ea7\u65f6\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard.securityMode")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm install chaos-mesh helm/chaos-mesh -n=chaos-testing --set dashboard.securityMode=false\n")))}p.isMDXComponent=!0}}]);