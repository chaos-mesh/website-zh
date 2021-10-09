"use strict";(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[743],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"\u914d\u7f6e\u5f00\u53d1\u73af\u5883",sidebar_label:"\u914d\u7f6e\u5f00\u53d1\u73af\u5883"},p=void 0,s={unversionedId:"configure-development-environment",id:"version-2.0.2/configure-development-environment",isDocsHomePage:!1,title:"\u914d\u7f6e\u5f00\u53d1\u73af\u5883",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u642d\u5efa Chaos Mesh \u7684\u5f00\u53d1\u73af\u5883\u3002",source:"@site/versioned_docs/version-2.0.2/configure-development-environment.md",sourceDirName:".",slug:"/configure-development-environment",permalink:"/website-zh/docs/configure-development-environment",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/versioned_docs/version-2.0.2/configure-development-environment.md",tags:[],version:"2.0.2",frontMatter:{title:"\u914d\u7f6e\u5f00\u53d1\u73af\u5883",sidebar_label:"\u914d\u7f6e\u5f00\u53d1\u73af\u5883"},sidebar:"version-2.0.2/docs",previous:{title:"\u5f00\u53d1\u6307\u5357\u6982\u89c8",permalink:"/website-zh/docs/developer-guide-overview"},next:{title:"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b",permalink:"/website-zh/docs/add-new-chaos-experiment-type"}},c=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",children:[]},{value:"\u51c6\u5907\u5de5\u5177\u94fe",id:"\u51c6\u5907\u5de5\u5177\u94fe",children:[]},{value:"\u51c6\u5907\u90e8\u7f72\u73af\u5883",id:"\u51c6\u5907\u90e8\u7f72\u73af\u5883",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u642d\u5efa Chaos Mesh \u7684\u5f00\u53d1\u73af\u5883\u3002"),(0,o.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,o.kt)("p",null,"\u5b89\u88c5 Chaos Mesh \u6240\u9700\u7684\u5f00\u53d1\u5de5\u5177\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"golang")," \u7248\u672c\u4e0d\u4f4e\u4e8e v1.15"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/"},"gcc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")," \u7248\u672c\u4e0d\u4f4e\u4e8e v2.8.2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind"},"kind")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"nodejs")," \u548c ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/lang/en/"},"yarn")," (\u4ee5\u5f00\u53d1 Chaos Dashboard)")),(0,o.kt)("h2",{id:"\u51c6\u5907\u5de5\u5177\u94fe"},"\u51c6\u5907\u5de5\u5177\u94fe"),(0,o.kt)("p",null,"\u51c6\u5907\u597d\u4e0a\u8ff0\u73af\u5883\u540e\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u914d\u7f6e\u7528\u4e8e\u7f16\u8bd1 Chaos Mesh \u7684\u5de5\u5177\u94fe\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c06 Chaos Mesh \u9879\u76ee\u514b\u9686\u81f3\u672c\u5730\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5b89\u88c5 Kubernetes API \u5f00\u53d1\u6846\u67b6 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"kustomize"),"\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make ensure-all\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u786e\u4fdd\u4f60\u7684\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," \u5e76\u4e14\u6b63\u5728\u8fd0\u884c Docker\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u786e\u4fdd ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry")," \u6b63\u5728\u8fd0\u884c\u3002\u5c06\u73af\u5883\u53d8\u91cf ",(0,o.kt)("inlineCode",{parentName:"p"},"DOCKER_REGISTRY")," \u8bbe\u7f6e\u4e3a\u5176\u5730\u5740:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export DOCKER_REGISTRY=localhost:5000' >> ~/.bash_profile\nsource ~/.bash_profile\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u786e\u4fdd ",(0,o.kt)("inlineCode",{parentName:"p"},"${GOPATH}/bin")," \u5728\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," \u73af\u5883\u53d8\u91cf\u4e2d\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=$(go env GOPATH)/bin:${PATH}' >> ~/.bash_profile\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bash_profile\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u68c0\u67e5 Nodejs \u76f8\u5173\u73af\u5883\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," node -v\n yarn -v\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5c1d\u8bd5\u7f16\u8bd1 Chaos Mesh\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u62a5\u9519\uff0c\u90a3\u4e48\u5de5\u5177\u94fe\u5df2\u7ecf\u914d\u7f6e\u5b8c\u6bd5\u3002"))),(0,o.kt)("h2",{id:"\u51c6\u5907\u90e8\u7f72\u73af\u5883"},"\u51c6\u5907\u90e8\u7f72\u73af\u5883"),(0,o.kt)("p",null,"\u5728\u5de5\u5177\u94fe\u51c6\u5907\u5b8c\u4e4b\u540e\uff0c\u4f60\u8fd8\u9700\u8981\u542f\u52a8\u4e00\u4e2a\u672c\u5730\u7684 Kubernetes \u96c6\u7fa4\u7528\u4e8e\u90e8\u7f72 Chaos Mesh\u3002\u7531\u4e8e kind \u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u542f\u52a8\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"hack/kind-cluster-build.sh\n")),(0,o.kt)("p",null,"\u5f53\u4f60\u4e0d\u518d\u9700\u8981\u6b64\u96c6\u7fa4\uff0c\u5e0c\u671b\u5220\u9664\u5b83\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster --name=kind\n")),(0,o.kt)("p",null,"\u5982\u9700\u542f\u52a8 Chaos Dashboard\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ui && yarn\n# \u542f\u52a8\nyarn start:default # cross-env REACT_APP_API_URL=http://localhost:2333 BROWSER=none react-scripts start\n")),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"\u5728\u5b8c\u6210\u4e0a\u8ff0 Chaos Mesh \u5f00\u53d1\u7684\u51c6\u5907\u5de5\u4f5c\u540e\uff0c\u8bf7\u5c1d\u8bd5",(0,o.kt)("a",{parentName:"p",href:"/website-zh/docs/add-new-chaos-experiment-type"},"\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b"),"\u3002"))}u.isMDXComponent=!0}}]);