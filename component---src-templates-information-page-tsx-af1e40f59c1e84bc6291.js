(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"A2+M":function(e,t,r){const n=r("X8hv");e.exports={MDXRenderer:n}},QuL4:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return s}));var n=r("q1tI"),o=r("9Dj+"),c=r("vrFN"),a=r("A2+M"),i=r("9eSz"),u=r.n(i);r("njwq");class l extends n.Component{constructor(e){super(e)}renderAuthors(e){const t=e.map((e,t)=>{const r=e.position.map((e,t)=>n.createElement("div",{key:t},e));return n.createElement("div",{className:"author",key:t},n.createElement("div",{className:"image-container"},n.createElement(u.a,{style:{borderRadius:"50%"},fixed:e.avatar.childImageSharp.fixed,alt:e.name})),n.createElement("div",{className:"title-container"},e.name),n.createElement("div",{className:"positions-container"},r))});return n.createElement("div",{className:"author-container"},t)}render(){const{data:{mdx:{frontmatter:{title:e,type:t,attachments:r,date:i,authors:u,excerpt:l},body:s}}}=this.props;let p=u,f=null,m=null;return void 0!==r&&null!=r&&r.length>0&&(f=r[0].childImageSharp.fluid,r.forEach(e=>{-1!=e.name.indexOf("_bg")&&(f=e.childImageSharp.fluid)}),m=r[0].publicURL),n.createElement(o.a,{title:e,date:i,customImage:f,type:t},null!=l?n.createElement(c.a,{title:e,description:l,image:m}):"",null!=p?this.renderAuthors(p):"",n.createElement("div",{className:"MDXRenderer-container"},n.createElement(a.MDXRenderer,{images:r},s)))}}const s="3016158282";t.default=l},X8hv:function(e,t,r){function n(e,t,r){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var c=new(Function.bind.apply(e,n));return r&&o(c,r.prototype),c}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r("rE2o"),r("ioFf"),r("rGqo"),r("a1Th"),r("a1Th"),r("rE2o"),r("ioFf"),r("rGqo");const s=r("q1tI"),{useMDXComponents:p,mdx:f}=r("E/Ix"),{useMDXScope:m}=r("BfwJ");e.exports=function(e){let{scope:t,components:r,children:o}=e,a=l(e,["scope","components","children"]);const u=p(r),d=m(t),y=s.useMemo(()=>{if(!o)return null;const e=i({React:s,mdx:f},d),t=Object.keys(e),r=t.map(t=>e[t]);return n(Function,["_fn"].concat(c(t),[""+o])).apply(void 0,[{}].concat(c(r)))},[o,t]);return s.createElement(y,i({components:u},a))}}}]);