(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(e,t,r){const n=r("X8hv");e.exports={MDXRenderer:n}},QuL4:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return h}));r("ioFf"),r("rGqo");var n=r("q1tI"),o=r("9Dj+"),c=r("vrFN"),a=r("A2+M"),l=r("E/Ix"),i=r("9eSz"),u=r.n(i),s=r("T3Oq");r("vg9a"),r("njwq");function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}class f extends n.Component{constructor(e){super(e)}render(){const e=this.props,{children:t}=e,r=p(e,["children"]);return n.createElement("h1",r,n.createElement("a",{href:"#toc",className:"font-icon"},""),t)}}class m extends n.Component{constructor(e){super(e)}render(){const e=this.props,{children:t}=e,r=p(e,["children"]);return n.createElement("h2",r,n.createElement("a",{href:"#toc",className:"font-icon"},""),t)}}class d extends n.Component{constructor(e){super(e),this.useTOC=!1}renderAuthors(e){const t=e.map((e,t)=>{const r=e.position.map((e,t)=>n.createElement("div",{key:t},e));return n.createElement("div",{className:"author",key:t},n.createElement("div",{className:"image-container"},n.createElement(u.a,{style:{borderRadius:"50%"},fixed:e.avatar.childImageSharp.fixed,alt:e.name})),n.createElement("div",{className:"title-container"},e.name),n.createElement("div",{className:"positions-container"},r))});return n.createElement("div",{className:"author-container"},t)}renderTOCItem(e,t){void 0===t&&(t=0);const r=e.map((e,r)=>null!=e.items&&e.items.length>0?n.createElement("li",{key:t+r},n.createElement("a",{href:e.url},e.title),n.createElement("ul",null,this.renderTOCItem(e.items,100*r))):n.createElement("li",{key:t+r},n.createElement("a",{href:e.url},e.title)));return n.createElement("ul",null,r)}renderTOC(e){return e.length>3?(this.useTOC=!0,n.createElement("div",{id:"toc",className:"toc-container"},n.createElement("h1",null,"สารบัญ"),this.renderTOCItem(e))):""}render(){const{data:{mdx:{tableOfContents:{items:e},frontmatter:{title:t,type:r,attachments:i,date:u,authors:p,excerpt:d},body:h}}}=this.props;let y=p,O=e,b=null,E=null;return void 0!==i&&null!=i&&i.length>0&&(b=i[0].childImageSharp.fluid,i.forEach(e=>{-1!=e.name.indexOf("_bg")&&(b=e.childImageSharp.fluid)}),E=i[0].publicURL),n.createElement(o.a,{title:t,date:u,customImage:b,type:r},null!=d?n.createElement(c.a,{title:t,description:d,image:E}):"",null!=y?this.renderAuthors(y):"",n.createElement("div",{className:"MDXRenderer-container"},null!=O?this.renderTOC(O):"",n.createElement(l.MDXProvider,{components:{h1:f,h2:m,pre:s.a}},n.createElement(a.MDXRenderer,{images:i},h))))}}const h="3611672874";t.default=d},X8hv:function(e,t,r){function n(e,t,r){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var c=new(Function.bind.apply(e,n));return r&&o(c,r.prototype),c}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r("rE2o"),r("ioFf"),r("rGqo"),r("a1Th"),r("a1Th"),r("rE2o"),r("ioFf"),r("rGqo");const s=r("q1tI"),{useMDXComponents:p,mdx:f}=r("E/Ix"),{useMDXScope:m}=r("BfwJ");e.exports=function(e){let{scope:t,components:r,children:o}=e,a=u(e,["scope","components","children"]);const i=p(r),d=m(t),h=s.useMemo(()=>{if(!o)return null;const e=l({React:s,mdx:f},d),t=Object.keys(e),r=t.map(t=>e[t]);return n(Function,["_fn"].concat(c(t),[""+o])).apply(void 0,[{}].concat(c(r)))},[o,t]);return s.createElement(h,l({components:i},a))}}}]);