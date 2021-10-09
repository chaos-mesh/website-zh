"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5488],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),k=o(n),u=r,N=k["".concat(m,".").concat(u)]||k[u]||d[u]||l;return n?a.createElement(N,i(i({ref:e},s),{},{components:n})):a.createElement(N,i({ref:e},s))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4463:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return s},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={title:"\u6a21\u62df\u538b\u529b\u573a\u666f",sidebar_label:"\u6a21\u62df\u538b\u529b\u573a\u666f"},m=void 0,o={unversionedId:"simulate-heavy-stress-on-kubernetes",id:"version-2.0.2/simulate-heavy-stress-on-kubernetes",isDocsHomePage:!1,title:"\u6a21\u62df\u538b\u529b\u573a\u666f",description:"StressChaos \u4ecb\u7ecd",source:"@site/versioned_docs/version-2.0.2/simulate-heavy-stress-on-kubernetes.md",sourceDirName:".",slug:"/simulate-heavy-stress-on-kubernetes",permalink:"/website-zh/docs/simulate-heavy-stress-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/versioned_docs/version-2.0.2/simulate-heavy-stress-on-kubernetes.md",tags:[],version:"2.0.2",frontMatter:{title:"\u6a21\u62df\u538b\u529b\u573a\u666f",sidebar_label:"\u6a21\u62df\u538b\u529b\u573a\u666f"},sidebar:"version-2.0.2/docs",previous:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/website-zh/docs/simulate-network-chaos-on-kubernetes"},next:{title:"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c",permalink:"/website-zh/docs/simulate-io-chaos-on-kubernetes"}},s=[{value:"StressChaos \u4ecb\u7ecd",id:"stresschaos-\u4ecb\u7ecd",children:[]},{value:"\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c",children:[]},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[]}]}],d={toc:s};function k(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"stresschaos-\u4ecb\u7ecd"},"StressChaos \u4ecb\u7ecd"),(0,l.kt)("p",null,"Chaos Mesh \u63d0\u4f9b\u7684 StressChaos \u5b9e\u9a8c\u7c7b\u578b\u53ef\u7528\u4e8e\u6a21\u62df\u5bb9\u5668\u5185\u538b\u529b\u7684\u573a\u666f\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa StressChaos \u5b9e\u9a8c\u4ee5\u53ca\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Chaos Dashboard \u4e2d\u521b\u5efa\u5b9e\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u201c",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u201d\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:n(2205).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u201c",(0,l.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u201d\u533a\u57df\u9009\u62e9\u201c",(0,l.kt)("strong",{parentName:"p"},"\u538b\u529b\u6d4b\u8bd5"),"\u201d\uff0c\u7136\u540e\u586b\u5199\u5b9e\u9a8c\u5185\u5bb9\uff0c\u914d\u7f6e\u5b57\u6bb5\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u914d\u7f6e\u8bf4\u660e"),"\u4e2d\u7684\u4ecb\u7ecd\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"StressChaos \u5b9e\u9a8c",src:n(3429).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u8ba1\u5212\u7684\u5b9e\u9a8c\u8fd0\u884c\u65f6\u95f4\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:n(4021).Z}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u672c\u6587\u6863\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"memory-stress.yaml")," \u6587\u4ef6\u4e3a\u4f8b\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: memory-stress-example\n  namespace: chaos-testing\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  stressors:\n    memory:\n      workers: 4\n      size: '256MB'\n")),(0,l.kt)("p",{parentName:"li"},"\u8be5\u5b9e\u9a8c\u914d\u7f6e\u4f1a\u5728\u9009\u4e2d\u5bb9\u5668\u4e2d\u521b\u5efa\u8fdb\u7a0b\uff0c\u4e0d\u65ad\u5206\u914d\u548c\u5728\u5185\u5b58\u4e2d\u8fdb\u884c\u8bfb\u5199\uff0c\u6700\u591a\u5360\u7528 256MB \u5185\u5b58\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u51c6\u5907\u597d\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f memory-stress.yaml\n")))),(0,l.kt)("h3",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,"\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30s"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stressors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#stressors"},"Stressors")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a CPU \u6216\u5185\u5b58\u538b\u529b\u7684\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stressngStressors"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a stress-ng \u7684\u53c2\u6570\u6765\u8fbe\u5230\u66f4\u4e30\u5bcc\u7684\u538b\u529b\u6ce8\u5165"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--clone 2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"one"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u7684\u5bb9\u5668\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'["nginx"]'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"/website-zh/docs/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"stressors"},"Stressors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#memorystressor"},"MemoryStressor")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5185\u5b58\u538b\u529b\u7684\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cpustressor"},"CPUStressor")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a CPU \u538b\u529b\u7684\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"memorystressor"},"MemoryStressor"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"workers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65bd\u52a0\u5185\u5b58\u538b\u529b\u7684\u7ebf\u7a0b\u4e2a\u6570"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u603b\u5171\u6700\u591a\u53ef\u4f7f\u7528\u7684\u5185\u5b58\u5927\u5c0f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256MB"))))),(0,l.kt)("h5",{id:"cpustressor"},"CPUStressor"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"workers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65bd\u52a0\u5185\u5b58\u538b\u529b\u7684\u7ebf\u7a0b\u4e2a\u6570"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5360\u636e CPU \u7684\u767e\u5206\u6bd4\u30020 \u610f\u5473\u7740\u7761\u7720\uff0c\u6beb\u65e0\u8d1f\u8f7d\uff1b100 \u610f\u5473\u7740\u6ee1\u8d1f\u8f7d"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50"))))))}k.isMDXComponent=!0},2205:function(t,e,n){e.Z=n.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},4021:function(t,e,n){e.Z=n.p+"assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png"},3429:function(t,e,n){e.Z=n.p+"assets/images/stresschaos-exp-935cd4e385b90abd7f04ed6e7b0c2b35.png"}}]);