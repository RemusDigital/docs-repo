"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[546],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"welcome",title:"Welcome",authors:["rj","camoster","rdm"],tags:["hello","docusaurus"]},l=void 0,i={permalink:"/docs-repo/blog/welcome",source:"@site/blog/2023-02-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2023-02-26T00:00:00.000Z",formattedDate:"February 26, 2023",tags:[{label:"hello",permalink:"/docs-repo/blog/tags/hello"},{label:"docusaurus",permalink:"/docs-repo/blog/tags/docusaurus"}],readingTime:.51,hasTruncateMarker:!1,authors:[{name:"RJ Barnhart",title:"Lead Engineer/Owner, Remus Digital Media",url:"https://remusdigitalmedia.cf",imageURL:"http://remusdigitalmedia.cf/wp-content/uploads/2020/01/Screen-Shot-2019-09-06-at-11.39.47-AM.png",key:"rj"},{name:"Cam Osterholt",title:"Camera Operator / Engineer in Training",url:"https://www.linkedin.com/in/camosterholt",imageURL:"https://remusdigitalmedia.cf/wp-content/uploads/2021/04/Cam3.jpg",key:"camoster"},{name:"Remus Digital Media",title:"Documentation maintainer",url:"https://github.com/remusdigital/",imageURL:"https://github.com/remusdigital.png",key:"rdm"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["rj","camoster","rdm"],tags:["hello","docusaurus"]},nextItem:{title:"MDX Blog Post",permalink:"/docs-repo/blog/mdx-blog-post"}},u={authorsImageUrls:[void 0,void 0,void 0]},s=[],c={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,o.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.kt)("p",null,"Regular blog authors can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,o.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,o.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:r(7142).Z,width:"1500",height:"500"})),(0,o.kt)("p",null,"The blog supports tags as well!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."),(0,o.kt)("p",null,"Congratulations, you have made your first post! 2"),(0,o.kt)("p",null,"Feel free to play around and edit this post as much you like."))}m.isMDXComponent=!0},7142:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);