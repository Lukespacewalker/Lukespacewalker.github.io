(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"56MY":function(e,t,n){"use strict";var r=n("q1tI"),o=n("9eSz"),i=n.n(o),a=n("B+IG"),s=n("OCm5"),l=n("ysz/"),c=n.n(l);class d extends r.Component{constructor(e){super(e)}render(){var{children:e,image:t,title:n}=this.props;return r.createElement(r.Fragment,null,r.createElement(a.a,null),r.createElement("div",{className:c.a.container},r.createElement("div",{className:c.a.titleSuperContainer},r.createElement(i.a,{fluid:t,alt:"background",className:c.a.image}),r.createElement("header",{className:"container "+c.a.titleContainer},r.createElement("h1",{className:c.a.title},n)))),r.createElement("main",{className:"container"},e),r.createElement(s.a,null))}}t.a=d},"6s9U":function(e,t,n){"use strict";n("4DPX"),n("rzGZ");var r=n("q1tI");n("q8oJ");var o=function(e,t){if(!e)throw new Error("Invariant failed")};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=new Map,c=new Map,d=new Map,u=0;function h(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,i=r.root,a=r.rootMargin,s=r.threshold;if(l.has(e)&&o(!1),e){var h=function(e){return e?d.has(e)?d.get(e):(u+=1,d.set(e,u.toString()),d.get(e)+"_"):""}(i)+(a?s.toString()+"_"+a:s.toString()),p=c.get(h);p||(p=new IntersectionObserver(f,n),h&&c.set(h,p));var m={callback:t,element:e,inView:!1,observerId:h,observer:p,thresholds:p.thresholds||(Array.isArray(s)?s:[s])};return l.set(e,m),p.observe(e),m}}function p(e){if(e){var t=l.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var i=!1,a=!1;n&&l.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,a=!0),t.observer.root===o&&(a=!0))})),!a&&o&&d.delete(o),r&&!i&&r.disconnect(),l.delete(e)}}}function f(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=l.get(r);if(o&&n>=0){var i=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}}))}var m=function(e){var t,n;function l(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return i(s(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),i(s(t),"node",null),i(s(t),"handleNode",(function(e){t.node&&(p(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),i(s(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=l.prototype;return c.componentDidMount=function(){this.node||o(!1)},c.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(p(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(p(this.node),this.node=null)},c.componentWillUnmount=function(){this.node&&(p(this.node),this.node=null)},c.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;h(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},c.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,i=o.children,s=o.as,l=o.tag,c=(o.triggerOnce,o.threshold,o.root,o.rootMargin,o.onChange,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(s||l||"div",a({ref:this.handleNode},c),i)},l}(r.Component);i(m,"displayName","InView"),i(m,"defaultProps",{threshold:0,triggerOnce:!1});n("SKSs");function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}class v extends r.Component{constructor(e){super(e),this.hasAlreadyShown=!1}render(){var e=this.props,{wide:t,side:n,transparent:o,sbs:i,children:a,style:s}=e,l=g(e,["wide","side","transparent","sbs","children","style"]),c=(o?"trans":"")+" "+(n?"":"no-aside"),d="article-container "+(t?"wide":"")+" ",u="inner-article-container "+(i?"sbs":"");return r.createElement(m,null,e=>{var{inView:t,ref:o,entry:i}=e;return this.hasAlreadyShown=t||this.hasAlreadyShown,r.createElement("div",Object.assign({ref:o,className:d+" "+(this.hasAlreadyShown||t?"show":"hide"),style:s},l),r.createElement("div",{className:u},n?r.createElement("aside",null,n):null,r.createElement("article",{style:s,className:c},a)))})}}t.a=v},IasJ:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var r=n("q1tI"),o=n("Wbzz"),i=n("9eSz"),a=n.n(i),s=n("56MY"),l=n("6s9U"),c=n("H8eV"),d=n("Tu4j"),u=n.n(d);class h extends r.Component{constructor(e){super(e)}navigationHandler(e){return t=>{Object(o.navigate)(e)}}itemRenderer(e){return e.map((e,t)=>{var{fields:{slug:n},frontmatter:{excerpt:i,date:s,title:c,attachments:d}}=e;return void 0!==d&&null!=d&&d.length>0?r.createElement(l.a,{style:{cursor:"pointer"},onClick:this.navigationHandler(n),key:t,sbs:!0,side:r.createElement(a.a,{style:{position:"absolute",width:"100%",height:"100%"},fluid:d[0].childImageSharp.fluid,alt:c})},r.createElement("h1",null,c),r.createElement("h3",null,s),r.createElement("p",null,i),r.createElement(o.Link,{to:n},"อ่านต่อ")):r.createElement(l.a,{key:t},r.createElement("p",null,i))})}render(){var{data:{articles:e,file:{publicURL:t,childImageSharp:{fluid:n}}}}=this.props;return r.createElement(s.a,{title:"Blogs",image:n},r.createElement(c.a,{title:"Blogs"}),r.createElement("div",{className:u.a.container},this.itemRenderer(e.nodes)))}}var p="12656908";t.default=h},SKSs:function(e,t,n){},Tu4j:function(e,t,n){e.exports={container:"index-module--container--2Vzzn"}},"ysz/":function(e,t,n){e.exports={container:"listlayout-module--container--TeSd-",titleSuperContainer:"listlayout-module--title-super-container--39P66",titleContainer:"listlayout-module--title-container--3J5bn",title:"listlayout-module--title--1wo3D",image:"listlayout-module--image--2XNd1"}}}]);