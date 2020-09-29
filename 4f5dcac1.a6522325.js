(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),s=(n(0),n(132)),o={id:"assets",title:"Assets",sidebar_label:"Assets"},c={unversionedId:"assets",id:"assets",isDocsHomePage:!1,title:"Assets",description:"The Asset system enables bundle authors to provide a means for end users to upload custom files from the dashboard",source:"@site/docs/assets.md",slug:"/assets",permalink:"/docs/assets",editUrl:"https://github.com/nodecg/docs/edit/master/docs/assets.md",version:"current",lastUpdatedBy:"Ewan Lyon",lastUpdatedAt:1601347023,sidebar_label:"Assets",sidebar:"mainSidebar",previous:{title:"Bundle Configuration",permalink:"/docs/bundle-configuration"},next:{title:"Sounds",permalink:"/docs/sounds"}},l=[],i={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The Asset system enables bundle authors to provide a means for end users to upload custom files from the dashboard\nfor use in the bundle. To enable the Asset system in a bundle, add code like the following to your bundle's ",Object(s.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "test-bundle",\n  "nodecg": {\n    "assetCategories": [\n      {\n        "name": "thumbnails",\n        "title": "Thumbnails",\n        "allowedTypes": ["jpg", "jpeg", "gif", "png"]\n      },\n      {\n        "name": "boxart",\n        "title": "Boxart",\n        "allowedTypes": ["jpg", "jpeg", "gif", "png"]\n      }\n    ]\n  }\n}\n')),Object(s.b)("video",{style:{width:"100%"},controls:!0,preload:!0},Object(s.b)("source",{src:"/vid/Assets.mp4",type:"video/mp4"})),Object(s.b)("p",null,"NodeCG will automatically create a Replicant for each ",Object(s.b)("inlineCode",{parentName:"p"},"assetCategory")," in a bundle. To access these asset Replicants,\ndeclare them as you would any other Replicant in your bundle. For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const thumbnails = nodecg.Replicant('assets:thumbnails');\nconst boxart = nodecg.Replicant('assets:boxart');\n")),Object(s.b)("p",null,"These Replicants are arrays. Each item in these arrays describes one of the uploaded files:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "base": "square.png",\n  "namespace": "test-bundle",\n  "category": "thumbnails",\n  "ext": ".png",\n  "name": "square",\n  "sum": "3f5828ff83eb099fe11a938f25e57afe8745efdc",\n  "url": "/assets/test-bundle/thumbnails/square.png"\n}\n')))}u.isMDXComponent=!0}}]);