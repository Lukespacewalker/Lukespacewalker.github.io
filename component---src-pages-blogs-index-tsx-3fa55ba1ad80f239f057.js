(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"56MY":function(e,t,n){"use strict";var r=n("q1tI"),i=n("9eSz"),o=n.n(i),a=n("B+IG"),s=n("OCm5"),l=n("ysz/"),c=n.n(l);class d extends r.Component{constructor(e){super(e)}render(){var{children:e,image:t,title:n}=this.props;return r.createElement(r.Fragment,null,r.createElement(a.a,null),r.createElement("div",{className:c.a.container},r.createElement("div",{className:c.a.titleSuperContainer},r.createElement(o.a,{fluid:t,alt:"background",className:c.a.image}),r.createElement("header",{className:"container "+c.a.titleContainer},r.createElement("h1",{className:c.a.title},n)))),r.createElement("main",{className:"container"},e),r.createElement(s.a,null))}}t.a=d},"6s9U":function(e,t,n){"use strict";var r=n("Ff2n"),i=n("q1tI");var o=function(e,t){if(!e)throw new Error("Invariant failed")};function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=new Map,d=new Map,h=new Map,u=0;function p(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,i=r.root,a=r.rootMargin,s=r.threshold;if(c.has(e)&&o(!1),e){var l=function(e){return e?h.has(e)?h.get(e):(u+=1,h.set(e,u.toString()),h.get(e)+"_"):""}(i)+(a?s.toString()+"_"+a:s.toString()),p=d.get(l);p||(p=new IntersectionObserver(f,n),l&&d.set(l,p));var m={callback:t,element:e,inView:!1,observerId:l,observer:p,thresholds:p.thresholds||(Array.isArray(s)?s:[s])};return c.set(e,m),p.observe(e),m}}function m(e){if(e){var t=c.get(e);if(t){var n=t.observerId,r=t.observer,i=r.root;r.unobserve(e);var o=!1,a=!1;n&&c.forEach((function(t,r){r!==e&&(t.observerId===n&&(o=!0,a=!0),t.observer.root===i&&(a=!0))})),!a&&i&&h.delete(i),r&&!o&&r.disconnect(),c.delete(e)}}}function f(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,i=c.get(r);if(i&&n>=0){var o=i.thresholds.some((function(e){return i.inView?n>e:n>=e}));void 0!==t&&(o=o&&t),i.inView=o,i.callback(o,e)}}))}var g=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a(l(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),a(l(t),"node",null),a(l(t),"handleNode",(function(e){t.node&&(m(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),a(l(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=r.prototype;return c.componentDidMount=function(){this.node||o(!1)},c.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(m(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(m(this.node),this.node=null)},c.componentWillUnmount=function(){this.node&&(m(this.node),this.node=null)},c.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;p(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},c.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var r=this.props,o=r.children,a=r.as,l=r.tag,c=(r.triggerOnce,r.threshold,r.root,r.rootMargin,r.onChange,function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(i.createElement)(a||l||"div",s({ref:this.handleNode},c),o)},r}(i.Component);a(g,"displayName","InView"),a(g,"defaultProps",{threshold:0,triggerOnce:!1});n("SKSs");class v extends i.Component{constructor(e){super(e),this.hasAlreadyShown=!1}render(){var e=this.props,{wide:t,side:n,transparent:o,sbs:a,children:s,style:l}=e,c=Object(r.a)(e,["wide","side","transparent","sbs","children","style"]),d=(o?"trans":"")+" "+(n?"":"no-aside"),h="article-container "+(t?"wide":"")+" ",u="inner-article-container "+(a?"sbs":"");return i.createElement(g,null,e=>{var{inView:t,ref:r,entry:o}=e;return this.hasAlreadyShown=t||this.hasAlreadyShown,i.createElement("div",Object.assign({ref:r,className:h+" "+(this.hasAlreadyShown||t?"show":"hide"),style:l},c),i.createElement("div",{className:u},n?i.createElement("aside",null,n):null,i.createElement("article",{style:l,className:d},s)))})}}t.a=v},IasJ:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var r=n("q1tI"),i=n("Wbzz"),o=n("9eSz"),a=n.n(o),s=n("56MY"),l=n("6s9U"),c=n("H8eV"),d=n("Tu4j"),h=n.n(d);class u extends r.Component{constructor(e){super(e)}navigationHandler(e){return t=>{Object(i.navigate)(e)}}itemRenderer(e){return e.map((e,t)=>{var{fields:{slug:n},frontmatter:{excerpt:o,date:s,title:c,attachments:d}}=e;return void 0!==d&&null!=d&&d.length>0?r.createElement(l.a,{style:{cursor:"pointer"},onClick:this.navigationHandler(n),key:t,sbs:!0,side:r.createElement(a.a,{style:{position:"absolute",width:"100%",height:"100%"},fluid:d[0].childImageSharp.fluid,alt:c})},r.createElement("h1",null,c),r.createElement("h3",null,s),r.createElement("p",null,o),r.createElement(i.Link,{to:n},"อ่านต่อ")):r.createElement(l.a,{key:t},r.createElement("p",null,o))})}render(){var{data:{articles:e,file:{publicURL:t,childImageSharp:{fluid:n}}}}=this.props;return r.createElement(s.a,{title:"Blogs",image:n},r.createElement(c.a,{title:"Blogs"}),r.createElement("div",{className:h.a.container},this.itemRenderer(e.nodes)))}}var p="12656908";t.default=u},SKSs:function(e,t,n){},Tu4j:function(e,t,n){e.exports={container:"index-module--container--2Vzzn"}},"ysz/":function(e,t,n){e.exports={container:"listlayout-module--container--TeSd-",titleSuperContainer:"listlayout-module--title-super-container--39P66",titleContainer:"listlayout-module--title-container--3J5bn",title:"listlayout-module--title--1wo3D",image:"listlayout-module--image--2XNd1"}}}]);