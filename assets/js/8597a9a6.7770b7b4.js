(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[7488],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return k},kt:function(){return u}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=d(a),u=l,g=N["".concat(m,".").concat(u)]||N[u]||o[u]||r;return a?n.createElement(g,i(i({ref:e},k),{},{components:a})):n.createElement(g,i({ref:e},k))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},8680:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i={title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",sidebar_label:"\u6a21\u62df\u7f51\u7edc\u6545\u969c"},p={unversionedId:"simulate-network-chaos-on-kubernetes",id:"version-2.0.1/simulate-network-chaos-on-kubernetes",isDocsHomePage:!1,title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u5229\u7528 NetworkChaos \u6a21\u62df\u7f51\u7edc\u6545\u969c\u3002",source:"@site/versioned_docs/version-2.0.1/simulate-network-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-network-chaos-on-kubernetes",permalink:"/website-zh/docs/simulate-network-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/versioned_docs/version-2.0.1/simulate-network-chaos-on-kubernetes.md",version:"2.0.1",sidebar_label:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",frontMatter:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",sidebar_label:"\u6a21\u62df\u7f51\u7edc\u6545\u969c"},sidebar:"version-2.0.1/docs",previous:{title:"\u6a21\u62df Pod \u6545\u969c",permalink:"/website-zh/docs/simulate-pod-chaos-on-kubernetes"},next:{title:"\u6a21\u62df\u538b\u529b\u573a\u666f",permalink:"/website-zh/docs/simulate-heavy-stress-on-kubernetes"}},m=[{value:"NetworkChaos \u4ecb\u7ecd",id:"networkchaos-\u4ecb\u7ecd",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[]},{value:"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[{value:"Net Emulation \u793a\u4f8b",id:"net-emulation-\u793a\u4f8b",children:[]},{value:"Partition \u793a\u4f8b",id:"partition-\u793a\u4f8b",children:[]},{value:"Bandwidth \u793a\u4f8b",id:"bandwidth-\u793a\u4f8b",children:[]}]},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[{value:"\u901a\u8fc7\u5b57\u6bb5\u8bf4\u660e",id:"\u901a\u8fc7\u5b57\u6bb5\u8bf4\u660e",children:[]},{value:"\u4e0e <code>action</code> \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e",id:"\u4e0e-action-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e",children:[]}]}],d={toc:m};function k(t){var e=t.components,i=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Chaos Mesh \u4e2d\u5229\u7528 NetworkChaos \u6a21\u62df\u7f51\u7edc\u6545\u969c\u3002"),(0,r.kt)("h2",{id:"networkchaos-\u4ecb\u7ecd"},"NetworkChaos \u4ecb\u7ecd"),(0,r.kt)("p",null,"NetworkChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\u3002\u901a\u8fc7\u521b\u5efa NetworkChaos \u7c7b\u578b\u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u96c6\u7fa4\u53d1\u751f\u7f51\u7edc\u6545\u969c\u7684\u573a\u666f\u3002\u76ee\u524d NetworkChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partition"),"\uff1a\u7f51\u7edc\u65ad\u5f00\u3001\u5206\u533a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Net Emulation"),"\uff1a\u7f51\u7edc\u72b6\u6001\u4e0d\u826f\uff0c\u6bd4\u5982\u9ad8\u5ef6\u8fdf\u3001\u9ad8\u4e22\u5305\u7387\u3001\u5305\u4e71\u5e8f\u7b49\u60c5\u51b5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bandwidth"),"\uff1a\u9650\u5236\u8282\u70b9\u4e4b\u95f4\u901a\u4fe1\u7684\u5e26\u5bbd\u3002")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u521b\u5efa NetworkChaos \u5b9e\u9a8c\u524d\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u6ce8\u5165\u7f51\u7edc\u6545\u969c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8bf7\u4fdd\u8bc1 Controller Manager \u4e0e Chaos Daemon \u4e4b\u95f4\u7684\u8fde\u63a5\u901a\u7545\uff0c\u5426\u5219\u6545\u969c\u5c06\u65e0\u6cd5\u6062\u590d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u6a21\u62df Net Emulation \u6545\u969c\uff0c\u8bf7\u786e\u4fdd Linux \u5185\u6838\u62e5\u6709 NET_SCH_NETEM \u6a21\u5757\u3002\u5bf9\u4e8e CentOS\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 kernel-modules-extra \u5305\u5b89\u88c5 NET_SCH_NETEM \u6a21\u5757\uff1b\u5bf9\u4e8e\u5927\u90e8\u5206\u5176\u4ed6\u53d1\u884c\u7248\uff0c\u5df2\u9ed8\u8ba4\u5b89\u88c5\u76f8\u5e94\u6a21\u5757\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u521b\u5efa\u5b9e\u9a8c",src:a(5259).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u5904\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u653b\u51fb"),"\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,r.kt)("strong",{parentName:"p"},"LOSS"),"\uff0c\u6700\u540e\u586b\u5199\u5177\u4f53\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"NetworkChaos \u5b9e\u9a8c",src:a(4768).Z})),(0,r.kt)("p",{parentName:"li"},"\u5177\u4f53\u914d\u7f6e\u7684\u586b\u5199\u65b9\u5f0f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u5b57\u6bb5\u8bf4\u660e"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"\u5b9e\u9a8c\u4fe1\u606f",src:a(478).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,r.kt)("h2",{id:"\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,r.kt)("h3",{id:"net-emulation-\u793a\u4f8b"},"Net Emulation \u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"network-delay.yaml")," \u6587\u4ef6\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: delay\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n")))),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u5c06\u4f7f\u76ee\u6807 Pod \u7684\u7f51\u7edc\u8fde\u63a5\u4ea7\u751f 10 \u6beb\u79d2\u7684\u5ef6\u8fdf\u3002\u9664\u4e86\u6ce8\u5165\u5ef6\u8fdf\u4ee5\u5916\uff0cChaos Mesh \u8fd8\u652f\u6301\u6ce8\u5165\u4e22\u5305\u3001\u4e71\u5e8f\u7b49\u529f\u80fd\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u5b57\u6bb5\u8bf4\u660e"),"\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./network-delay.yaml\n")))),(0,r.kt)("h3",{id:"partition-\u793a\u4f8b"},"Partition \u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"network-partition.yaml")," \u6587\u4ef6\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: partition\nspec:\n  action: partition\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  direction: to\n  target:\n    mode: all\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'app2'\n")))),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u5c06\u963b\u6b62\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"app1")," \u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"app2")," \u5efa\u7acb\u7684\u8fde\u63a5\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"direction")," \u5b57\u6bb5\u7684\u503c\u53ef\u4ee5\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"from")," \u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"both"),"\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u5b57\u6bb5\u8bf4\u660e"),"\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./network-partition.yaml\n")))),(0,r.kt)("h3",{id:"bandwidth-\u793a\u4f8b"},"Bandwidth \u793a\u4f8b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"network-bandwidth.yaml")," \u6587\u4ef6\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: bandwidth\nspec:\n  action: bandwidth\n  mode: all\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'app1'\n  bandwidth:\n    rate: '1mbps'\n")))),(0,r.kt)("p",null,"\u8be5\u914d\u7f6e\u5c06\u9650\u5236 ",(0,r.kt)("inlineCode",{parentName:"p"},"app1")," \u7684\u5e26\u5bbd\u4e3a 1 mbps\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./network-bandwidth.yaml\n")))),(0,r.kt)("h2",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u5b57\u6bb5\u8bf4\u660e"},"\u901a\u8fc7\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5177\u4f53\u7684\u6545\u969c\u7c7b\u578b\uff0c\u53ef\u8bbe\u7f6e\u7684\u7c7b\u578b\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"netem"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"delay"),"\uff08\u8868\u793a\u7f51\u7edc\u5ef6\u8fdf\u6545\u969c\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"loss"),"\uff08\u8868\u793a\u4e22\u5305\u6545\u969c\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"duplicate"),"\uff08\u8868\u793a\u5305\u91cd\u590d\u6545\u969c\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"corrupt"),"\uff08\u8868\u793a\u5305\u9519\u8bef\u6545\u969c\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"partition"),"\uff08\u8868\u793a\u7f51\u7edc\u5206\u533a\u6545\u969c\uff09\u3001\u6216",(0,r.kt)("inlineCode",{parentName:"td"},"bandwidth"),"\uff08\u8868\u793a\u5e26\u5bbd\u9650\u5236\u6545\u969c\uff09\u3002\u5f53\u6307\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"action")," \u5b57\u6bb5\u540e\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"#%E4%B8%8E-action-%E7%9B%B8%E5%85%B3%E7%9A%84%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E"},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"a"},"action")," \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e"),"\u914d\u7f6e\u5176\u4ed6\u9700\u8981\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"partition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"Selector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0e direction \u7ec4\u5408\u4f7f\u7528\uff0c\u4f7f Chaos \u53ea\u5bf9\u90e8\u5206\u5305\u751f\u6548"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direction"),(0,r.kt)("td",{parentName:"tr",align:null},"enum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"td"},"target")," \u5305\u7684\u65b9\u5411\uff0c\u53ef\u8bbe\u7f6e\u7684\u503c\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"td"},"from")," (\u8868\u793a\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"td"},"target")," \u7684\u5305\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"to"),"\uff08\u8868\u793a\u53d1\u5f80 ",(0,r.kt)("inlineCode",{parentName:"td"},"target")," \u7684\u5305\uff09\u3001 \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"both"),"\uff08\u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"td"},"target")," \u6536\u5230\u6216\u8005\u53d1\u51fa\u7684\u5305\uff09\uff0c\u4f7f Chaos \u53ea\u5bf9\u6307\u5b9a\u65b9\u5411\u7684\u5305\u751f\u6548\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"to"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"both")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,r.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u7684\u5bb9\u5668\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'["nginx"]')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selector"),(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"/website-zh/docs/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"\u4e0e-action-\u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e"},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"h3"},"action")," \u76f8\u5173\u7684\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("p",null,"\u5bf9\u4e8e Net Emulation \u7c7b\u578b\u548c Bandwidth \u7c7b\u578b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6309\u7167\u672c\u5c0f\u8282\u7684\u5b57\u6bb5\u8bf4\u660e\u8fdb\u4e00\u6b65\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Net Emulation \u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"delay"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"loss"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"duplicate"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"corrupt")),(0,r.kt)("li",{parentName:"ul"},"Bandwidth \u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"bandwidth"))),(0,r.kt)("h4",{id:"delay"},"delay"),(0,r.kt)("p",null,"\u5982\u679c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"delay"),"\uff0c\u8868\u793a\u6a21\u62df\u7f51\u7edc\u5ef6\u8fdf\u6545\u969c\u3002\u6b64\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"latency"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5ef6\u8fdf\u7684\u65f6\u95f4\u957f\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"2ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5ef6\u8fdf\u65f6\u95f4\u7684\u65f6\u95f4\u957f\u5ea6\u4e0e\u524d\u4e00\u6b21\u5ef6\u8fdf\u65f6\u957f\u7684\u76f8\u5173\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jitter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5ef6\u8fdf\u65f6\u95f4\u7684\u53d8\u5316\u8303\u56f4"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reorder"),(0,r.kt)("td",{parentName:"tr",align:null},"Reorder(#Reorder)"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7f51\u7edc\u5305\u4e71\u5e8f\u7684\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"correlation")," \u53c2\u6570\u7684\u8ba1\u7b97\u6a21\u578b\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u751f\u6210\u4e00\u4e2a\u5206\u5e03\u4e0e\u4e0a\u4e00\u4e2a\u503c\u6709\u5173\u7684\u968f\u673a\u6570\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"rnd = value * (1-corr) + last_rnd * corr\n")))),(0,r.kt)("p",null,"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"rnd")," \u4e3a\u8fd9\u4e00\u968f\u673a\u6570\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"corr")," \u4e3a\u586b\u5199\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"correlation"),"\u3002"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8fd9\u4e00\u968f\u673a\u6570\u51b3\u5b9a\u5f53\u524d\u5305\u7684\u5ef6\u8fdf\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"((rnd % (2 * sigma)) + mu) - sigma\n")),(0,r.kt)("p",{parentName:"li"},"\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"sigma")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"jitter"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"mu")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"latency"),"\u3002"))),(0,r.kt)("h4",{id:"reorder"},"reorder"),(0,r.kt)("p",null,"\u5982\u679c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"reorder"),"\uff0c\u8868\u793a\u6a21\u62df\u7f51\u7edc\u5305\u4e71\u5e8f\u7684\u6545\u969c\u3002\u6b64\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reorder"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u53d1\u751f\u91cd\u65b0\u6392\u5e8f\u7684\u6982\u7387"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u53d1\u751f\u91cd\u65b0\u6392\u5e8f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u7684\u76f8\u5173\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gap"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e71\u5e8f\u5c06\u5305\u63a8\u540e\u7684\u8ddd\u79bb"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"5")))),(0,r.kt)("h4",{id:"loss"},"loss"),(0,r.kt)("p",null,"\u5982\u679c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"loss"),"\uff0c\u8868\u793a\u6a21\u62df\u4e22\u5305\u6545\u969c\u3002\u6b64\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loss"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e22\u5305\u53d1\u751f\u7684\u6982\u7387"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e22\u5305\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")))),(0,r.kt)("h4",{id:"duplicate"},"duplicate"),(0,r.kt)("p",null,"\u5982\u679c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"duplicate"),"\uff0c\u8868\u793a\u6a21\u62df\u5305\u91cd\u590d\u6545\u969c\u3002\u6b64\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duplicate"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5305\u91cd\u590d\u53d1\u751f\u7684\u6982\u7387"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5305\u91cd\u590d\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")))),(0,r.kt)("h4",{id:"corrupt"},"corrupt"),(0,r.kt)("p",null,"\u5982\u679c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"corrupt"),"\uff0c\u8868\u793a\u6a21\u62df\u5305\u9519\u8bef\u7684\u60c5\u51b5\u3002\u6b64\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"corrupt"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5305\u9519\u8bef\u53d1\u751f\u7684\u6982\u7387"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5305\u9519\u8bef\u53d1\u751f\u7684\u6982\u7387\u4e0e\u524d\u4e00\u6b21\u662f\u5426\u53d1\u751f\u7684\u76f8\u5173\u6027"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")))),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"reorder"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"loss"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"duplicate"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"corrupt")," \u8fd9\u4e9b\u5076\u53d1\u4e8b\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"correlation")," \u5219\u66f4\u4e3a\u590d\u6742\u3002\u5177\u4f53\u6a21\u578b\u63cf\u8ff0\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"http://web.archive.org/web/20200120162102/http://netgroup.uniroma2.it/twiki/bin/view.cgi/Main/NetemCLG"},"NetemCLG")," \u3002"),(0,r.kt)("h4",{id:"bandwidth"},"bandwidth"),(0,r.kt)("p",null,"\u5982\u679c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"bandwidth"),"\uff0c\u8868\u793a\u6a21\u62df\u5e26\u5bbd\u9650\u5236\u7684\u6545\u969c\u3002\u6b64\u65f6\uff0c\u4f60\u8fd8\u9700\u8981\u8bbe\u7f6e\u4ee5\u4e0b\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rate"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5e26\u5bbd\u9650\u5236\u7684\u901f\u7387"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"1mbps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u7684\u5b57\u8282\u6570"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},"\u80fd\u591f\u77ac\u95f4\u53d1\u9001\u7684\u6700\u5927\u5b57\u8282\u6570"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"peakrate"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bucket")," \u7684\u6700\u5927\u6d88\u8017\u7387 \uff08\u901a\u5e38\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u8bbe\u7f6e\uff09"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minburst"),(0,r.kt)("td",{parentName:"tr",align:null},"uint32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"peakrate bucket")," \u7684\u5927\u5c0f \uff08\u901a\u5e38\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u8bbe\u7f6e\uff09"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u8fdb\u4e00\u6b65\u4e86\u89e3\u8fd9\u4e9b\u5b57\u6bb5\u7684\u542b\u4e49\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man8/tc-tbf.8.html"},"tc-tbf \u6587\u6863"),"\u3002"))}k.isMDXComponent=!0},5259:function(t,e,a){"use strict";e.Z=a.p+"assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png"},478:function(t,e,a){"use strict";e.Z=a.p+"assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png"},4768:function(t,e,a){"use strict";e.Z=a.p+"assets/images/networkchaos-exp-c54c3b4876b902f6bea24793aa23904c.png"}}]);