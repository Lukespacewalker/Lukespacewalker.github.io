(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/uZM":function(e,t,n){e.exports={gradient:"layout-module--gradient--1mtcl",tall:"layout-module--tall--3Vmdz",bannerContainer:"layout-module--banner-container--1uLG6",titleContainer:"layout-module--title-container--3k1mW",title:"layout-module--title--1zX3e",by:"layout-module--by--3hWZp",layout:"layout-module--layout--2WlGA",childrenContainer:"layout-module--childrenContainer--2I7FT"}},"6s9U":function(e,t,n){"use strict";n("4DPX"),n("rzGZ");var r=n("q1tI"),a=n("xG6c"),o=n.n(a),i=(n("q8oJ"),!0),A="Invariant failed";var l=function(e,t){if(!e){if(i)throw new Error(A);throw new Error(A+": "+(t||""))}};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=new Map,h=new Map,p=new Map,f=0;function m(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,a=r.root,o=r.rootMargin,i=r.threshold;if(u.has(e)&&l(!1),e){var A=function(e){return e?p.has(e)?p.get(e):(f+=1,p.set(e,f.toString()),p.get(e)+"_"):""}(a)+(o?i.toString()+"_"+o:i.toString()),s=h.get(A);s||(s=new IntersectionObserver(b,n),A&&h.set(A,s));var c={callback:t,element:e,inView:!1,observerId:A,observer:s,thresholds:s.thresholds||(Array.isArray(i)?i:[i])};return u.set(e,c),s.observe(e),c}}function g(e){if(e){var t=u.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var o=!1,i=!1;n&&u.forEach((function(t,r){r!==e&&(t.observerId===n&&(o=!0,i=!0),t.observer.root===a&&(i=!0))})),!i&&a&&p.delete(a),r&&!o&&r.disconnect(),u.delete(e)}}}function b(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=u.get(r);if(a&&n>=0){var o=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(o=o&&t),a.inView=o,a.callback(o,e)}}))}var E=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return s(d(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),s(d(t),"node",null),s(d(t),"handleNode",(function(e){t.node&&(g(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),s(d(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){this.node||l(!1)},o.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(g(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(g(this.node),this.node=null)},o.componentWillUnmount=function(){this.node&&(g(this.node),this.node=null)},o.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;m(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},o.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var a=this.props,o=a.children,i=a.as,A=a.tag,l=(a.triggerOnce,a.threshold,a.root,a.rootMargin,a.onChange,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(i||A||"div",c({ref:this.handleNode},l),o)},a}(r.Component);s(E,"displayName","InView"),s(E,"defaultProps",{threshold:0,triggerOnce:!1});function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}class y extends r.Component{constructor(e){super(e),this.hasAlreadyShown=!1}render(){const e=this.props,{wide:t,side:n,transparent:a,sbs:i,children:A,style:l}=e,s=w(e,["wide","side","transparent","sbs","children","style"]),c=(a?o.a.trans:"")+" "+(n?"":o.a.noAside),d=o.a.articleContainer+" "+(t?o.a.wide:"")+" ",u=o.a.innerArticleContainer+" "+(i?o.a.sbs:"");return r.createElement(E,null,e=>{let{inView:t,ref:a,entry:i}=e;return this.hasAlreadyShown=t||this.hasAlreadyShown,r.createElement("div",Object.assign({ref:a,className:d+" "+(this.hasAlreadyShown||t?o.a.show:o.a.hide),style:l},s),r.createElement("div",{className:u},n?r.createElement("aside",null,n):null,r.createElement("article",{style:l,className:c},A)))})}}t.a=y},"9Dj+":function(e,t,n){"use strict";var r=n("9lqy"),a=n("q1tI"),o=n("9eSz"),i=n.n(o),A=n("B+IG"),l=n("OCm5"),s=n("/uZM"),c=n.n(s);class d extends a.Component{constructor(e){super(e)}render(){const{data:{site:e,file:t},title:n,type:r,date:o,customImage:s,bigSplash:d,children:u}=this.props;let h=null!==s?a.createElement(i.a,{fluid:s,alt:"background",style:{height:"100%",position:"absolute",zIndex:"-3",width:"100%"}}):a.createElement(i.a,{fluid:t.childImageSharp.fluid,alt:"background",style:{height:"100%",position:"absolute",zIndex:"-3",width:"100%"}});return a.createElement(a.Fragment,null,a.createElement("div",{className:c.a.bannerContainer+" "+(null!==s&&d?c.a.tall:"")},h,a.createElement("div",{className:c.a.gradient+" "+(null!==s&&d?c.a.tall:"")}),a.createElement(A.a,null),a.createElement("div",{className:c.a.titleContainer},a.createElement("h1",{className:c.a.title},n),null==o||"news"!==r&&"articles"!==r?"":a.createElement("div",{className:c.a.by},o))),a.createElement("div",{className:c.a.layout},a.createElement("main",{className:c.a.childrenContainer},u)),a.createElement(l.a,{author:e.siteMetadata.author}))}}d.defaultProps={customImage:null,bigSplash:!0,by:null};t.a=(e=>t=>{const n=r.data;return a.createElement(e,Object.assign({data:n},t))})(d)},"9K6k":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return h}));var r=n("q1tI"),a=n("Wbzz"),o=n("9eSz"),i=n.n(o),A=n("9Dj+"),l=n("6s9U"),s=n("H8eV"),c=n("KuFE"),d=n.n(c);class u extends r.Component{constructor(e){super(e)}navigationHandler(e){return t=>{Object(a.navigate)(e)}}itemRenderer(e){return e.map((e,t)=>{const{fields:{slug:n},frontmatter:{excerpt:o,date:A,title:s,attachments:c}}=e;return void 0!==c&&null!=c&&c.length>0?r.createElement(l.a,{style:{cursor:"pointer"},onClick:this.navigationHandler(n),key:t,sbs:!0,side:r.createElement(i.a,{style:{position:"absolute",width:"100%",height:"100%"},fluid:c[0].childImageSharp.fluid,alt:s})},r.createElement("h1",null,s),r.createElement("h3",null,A),r.createElement("p",null,o),r.createElement(a.Link,{to:n},"อ่านต่อ")):r.createElement(l.a,{key:t},r.createElement("p",null,o))})}render(){const{data:{articles:e,file:{publicURL:t,childImageSharp:{fluid:n}}}}=this.props;return r.createElement(A.a,{title:"Projects",customImage:n,bigSplash:!1},r.createElement(s.a,{title:"Projects"}),r.createElement("div",{className:d.a.container},this.itemRenderer(e.nodes)))}}const h="1156616938";t.default=u},"9lqy":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Out of box : Suttisak\'s Portfolio","author":"นพ. สุทธิศักดิ์ เด่นดวงใจ"}},"file":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAHNs8+yjkqIk1UH/8QAGxAAAwACAwAAAAAAAAAAAAAAAAECAxIhMUH/2gAIAQEAAQUCSkWJGVa2mVfFdnh//8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BY//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAECAQE/AUj/xAAYEAACAwAAAAAAAAAAAAAAAAABECAhMf/aAAgBAQAGPwLUQ7h//8QAHRABAAIBBQEAAAAAAAAAAAAAAQARMRAhYXGhwf/aAAgBAQABPyF3EOo0yS1AJQHsdBcS7ltafccz/9oADAMBAAIAAwAAABCwMDz/xAAXEQEAAwAAAAAAAAAAAAAAAAABABAR/9oACAEDAQE/EABF1v8A/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAgEBPxBFgYX/AP/EAB0QAQEAAwACAwAAAAAAAAAAAAERACExcYEQYZH/2gAIAQEAAT8QU4UbSrOYbm6KrA9ecZQCOmmzA6mnTpcDa1rzgZkAv1NYc/MhTNyX18X/2Q==","aspectRatio":1.0824524312896406,"src":"/static/d5984e8d9daf0dda385b672369eaf6f5/94971/article.jpg","srcSet":"/static/d5984e8d9daf0dda385b672369eaf6f5/61d2c/article.jpg 1024w,\\n/static/d5984e8d9daf0dda385b672369eaf6f5/94971/article.jpg 1623w","srcWebp":"/static/d5984e8d9daf0dda385b672369eaf6f5/b1fe6/article.webp","srcSetWebp":"/static/d5984e8d9daf0dda385b672369eaf6f5/b5e5f/article.webp 1024w,\\n/static/d5984e8d9daf0dda385b672369eaf6f5/b1fe6/article.webp 1623w","sizes":"(max-width: 1623px) 100vw, 1623px"}}}}}')},KuFE:function(e,t,n){e.exports={container:"index-module--container--3rZ9w"}},xG6c:function(e,t,n){e.exports={articleContainer:"paper-module--article-container--pIwES",articleAttachmentsContainer:"paper-module--article-attachments-container--3qWGJ",innerArticleContainer:"paper-module--inner-article-container--3yO_T",noAside:"paper-module--no-aside--3btW1",trans:"paper-module--trans--3qTDN",wide:"paper-module--wide--113T6",hide:"paper-module--hide--1KoyZ",show:"paper-module--show--3g6js",sbs:"paper-module--sbs--fAH-O",entryAnimation:"paper-module--entry-animation--10IxH"}}}]);