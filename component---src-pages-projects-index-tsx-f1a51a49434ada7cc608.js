(self.webpackChunksuttisak_personal_site=self.webpackChunksuttisak_personal_site||[]).push([[845],{2008:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},8240:function(e,t,n){"use strict";var r=n(838),i=n(9496),o=n(9578),s=n(1386),a=n(8024),l=n(5941);let c=function(e){function t(t){return e.call(this,t)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const{children:e,image:t,title:n}=this.props;return i.createElement("div",{className:"root-container"},i.createElement(s.Z,null),i.createElement("div",{className:l.nC},i.createElement("div",{className:l.hk},i.createElement(o.G,{image:t,alt:"background",className:l.BH}),i.createElement("header",{className:"container "+l.jW},i.createElement("h1",{className:l.TN},n))),i.createElement("main",{className:"container"},e),i.createElement(a.Z,null)))},t}(i.Component);t.Z=c},1559:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2008),i=n(838),o=n(9496);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=new Map,l=new WeakMap,c=0;function u(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(l.has(n)||(c+=1,l.set(n,c.toString())),l.get(n)):"0":e[t]);var n})).toString()}function h(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=u(e),n=a.get(t);if(!n){var r,i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},a.set(t,n)}return n}(n),i=r.id,o=r.observer,s=r.elements,l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(i))}}function d(e){return"function"!=typeof e.children}var p=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),d(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=h(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o})}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!d(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,i=r.children,a=r.as,l=r.tag,c=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,o.createElement)(a||l||"div",s({ref:this.handleNode},c),i)},r}(o.Component);p.displayName="InView",p.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};const f=["wide","side","transparent","sbs","children","style"];var m=function(e){function t(t){var n;return(n=e.call(this,t)||this).hasAlreadyShown=!1,n}return(0,i.Z)(t,e),t.prototype.render=function(){const e=this.props,{wide:t,side:n,transparent:i,sbs:s,children:a,style:l}=e,c=(0,r.Z)(e,f),u=(i?"trans":"")+" "+(n?"":"no-aside"),h="article-container "+(t?"wide":"")+" ",d="inner-article-container "+(s?"sbs":"");return o.createElement(p,null,(e=>{let{inView:t,ref:r,entry:i}=e;return this.hasAlreadyShown=t||this.hasAlreadyShown,o.createElement("div",Object.assign({ref:r,className:h+" "+(this.hasAlreadyShown||t?"show":"hide"),style:l},c),o.createElement("div",{className:d},n?o.createElement("aside",null,n):null,o.createElement("article",{style:l,className:u},a)))}))},t}(o.Component)},4357:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(838),i=n(9496),o=n(5708),s=n(9578),a=n(8240),l=n(1559),c=n(5075);var u=function(e){function t(t){return e.call(this,t)||this}(0,r.Z)(t,e);var n=t.prototype;return n.navigationHandler=function(e){return t=>{(0,o.navigate)(e)}},n.itemRenderer=function(e){return e.map(((e,t)=>{const{fields:{slug:n},frontmatter:{excerpt:r,date:a,title:c,attachments:u}}=e;return void 0!==u&&null!=u&&u.length>0?i.createElement(l.Z,{style:{cursor:"pointer"},onClick:this.navigationHandler(n),key:t,sbs:!0,side:i.createElement(s.G,{image:u[0].childImageSharp.gatsbyImageData,style:{position:"absolute",width:"100%",height:"100%"},alt:c})},i.createElement("h1",null,c),i.createElement("h3",null,a),i.createElement("p",null,r),i.createElement(o.Link,{to:n},"อ่านต่อ")):i.createElement(l.Z,{key:t},i.createElement("p",null,r))}))},n.render=function(){const{data:{articles:e,file:{publicURL:t,childImageSharp:{gatsbyImageData:n}}}}=this.props;return i.createElement(a.Z,{title:"Projects",image:n},i.createElement(c.Z,{title:"Projects"}),i.createElement("div",{className:"index-module--container--15863"},this.itemRenderer(e.nodes)))},t}(i.Component)},5941:function(e,t,n){"use strict";n.d(t,{nC:function(){return r},hk:function(){return i},jW:function(){return o},TN:function(){return s},BH:function(){return a}});var r="listlayout-module--container--3At7B",i="listlayout-module--title-super-container--2PNMn",o="listlayout-module--title-container--1pzRu",s="listlayout-module--title--zP4tO",a="listlayout-module--image--3PxDv"}}]);