(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0f98":function(e,A,t){e.exports={gradient:"banner-module--gradient--foljj",bannerContainer:"banner-module--banner-container--2646a",bannerText:"banner-module--banner-text--8gDl6",bannerSource:"banner-module--banner-source--3VSu8",bannerDisplay:"banner-module--banner-display--1HfRZ",fadein:"banner-module--fadein--2GWSx",specialBannerText:"banner-module--special-banner-text--1HJY6"}},"6s9U":function(e,A,t){"use strict";t("4DPX"),t("rzGZ");var a=t("q1tI"),n=t("xG6c"),i=t.n(n),r=(t("q8oJ"),!0),o="Invariant failed";var s=function(e,A){if(!e){if(r)throw new Error(o);throw new Error(o+": "+(A||""))}};function c(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function l(){return(l=Object.assign||function(e){for(var A=1;A<arguments.length;A++){var t=arguments[A];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=new Map,h=new Map,m=new Map,p=0;function f(e,A,t){void 0===t&&(t={}),t.threshold||(t.threshold=0);var a=t,n=a.root,i=a.rootMargin,r=a.threshold;if(u.has(e)&&s(!1),e){var o=function(e){return e?m.has(e)?m.get(e):(p+=1,m.set(e,p.toString()),m.get(e)+"_"):""}(n)+(i?r.toString()+"_"+i:r.toString()),c=h.get(o);c||(c=new IntersectionObserver(b,t),o&&h.set(o,c));var l={callback:A,element:e,inView:!1,observerId:o,observer:c,thresholds:c.thresholds||(Array.isArray(r)?r:[r])};return u.set(e,l),c.observe(e),l}}function E(e){if(e){var A=u.get(e);if(A){var t=A.observerId,a=A.observer,n=a.root;a.unobserve(e);var i=!1,r=!1;t&&u.forEach((function(A,a){a!==e&&(A.observerId===t&&(i=!0,r=!0),A.observer.root===n&&(r=!0))})),!r&&n&&m.delete(n),a&&!i&&a.disconnect(),u.delete(e)}}}function b(e){e.forEach((function(e){var A=e.isIntersecting,t=e.intersectionRatio,a=e.target,n=u.get(a);if(n&&t>=0){var i=n.thresholds.some((function(e){return n.inView?t>e:t>=e}));void 0!==A&&(i=i&&A),n.inView=i,n.callback(i,e)}}))}var g=function(e){var A,t;function n(){for(var A,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return c(d(A=e.call.apply(e,[this].concat(a))||this),"state",{inView:!1,entry:void 0}),c(d(A),"node",null),c(d(A),"handleNode",(function(e){A.node&&(E(A.node),e||A.props.triggerOnce||A.setState({inView:!1,entry:void 0})),A.node=e||null,A.observeNode()})),c(d(A),"handleChange",(function(e,t){(e!==A.state.inView||e)&&A.setState({inView:e,entry:t}),A.props.onChange&&A.props.onChange(e,t)})),A}t=e,(A=n).prototype=Object.create(t.prototype),A.prototype.constructor=A,A.__proto__=t;var i=n.prototype;return i.componentDidMount=function(){this.node||s(!1)},i.componentDidUpdate=function(e,A){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(E(this.node),this.observeNode()),A.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(E(this.node),this.node=null)},i.componentWillUnmount=function(){this.node&&(E(this.node),this.node=null)},i.observeNode=function(){if(this.node){var e=this.props,A=e.threshold,t=e.root,a=e.rootMargin;f(this.node,this.handleChange,{threshold:A,root:t,rootMargin:a})}},i.render=function(){var e=this.state,A=e.inView,t=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:A,entry:t,ref:this.handleNode});var n=this.props,i=n.children,r=n.as,o=n.tag,s=(n.triggerOnce,n.threshold,n.root,n.rootMargin,n.onChange,function(e,A){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(a.createElement)(r||o||"div",l({ref:this.handleNode},s),i)},n}(a.Component);c(g,"displayName","InView"),c(g,"defaultProps",{threshold:0,triggerOnce:!1});function w(e,A){if(null==e)return{};var t,a,n=function(e,A){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,A);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}class j extends a.Component{constructor(e){super(e),this.hasAlreadyShown=!1}render(){const e=this.props,{wide:A,side:t,transparent:n,sbs:r,children:o,style:s}=e,c=w(e,["wide","side","transparent","sbs","children","style"]),l=(n?i.a.trans:"")+" "+(t?"":i.a.noAside),d=i.a.articleContainer+" "+(A?i.a.wide:"")+" ",u=i.a.innerArticleContainer+" "+(r?i.a.sbs:"");return a.createElement(g,null,e=>{let{inView:A,ref:n,entry:r}=e;return this.hasAlreadyShown=A||this.hasAlreadyShown,a.createElement("div",Object.assign({ref:n,className:d+" "+(this.hasAlreadyShown||A?i.a.show:i.a.hide),style:s},c),a.createElement("div",{className:u},t?a.createElement("aside",null,t):null,a.createElement("article",{style:s,className:l},o)))})}}A.a=j},FBpB:function(e,A){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI5IDEyOSI+DQogIDxnPg0KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJtNDAuNCwxMjEuM2MtMC44LDAuOC0xLjgsMS4yLTIuOSwxLjJzLTIuMS0wLjQtMi45LTEuMmMtMS42LTEuNi0xLjYtNC4yIDAtNS44bDUxLTUxLTUxLTUxYy0xLjYtMS42LTEuNi00LjIgMC01LjggMS42LTEuNiA0LjItMS42IDUuOCwwbDUzLjksNTMuOWMxLjYsMS42IDEuNiw0LjIgMCw1LjhsLTUzLjksNTMuOXoiLz4NCiAgPC9nPg0KPC9zdmc+DQo="},O1Q2:function(e,A){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOSAxMjkiPg0KICA8Zz4NCiAgICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNiAxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiLz4NCiAgPC9nPg0KPC9zdmc+DQo="},QeBL:function(e,A,t){"use strict";t.r(A),t.d(A,"query",(function(){return v}));var a=t("q1tI"),n=t("Wbzz"),i=t("OCm5"),r=t("H8eV"),o=t("oG5Z"),s=t("9eSz"),c=t.n(s),l=t("B+IG"),d=t("O1Q2"),u=t.n(d),h=t("FBpB"),m=t.n(h),p=t("nyR9"),f=t.n(p);class E extends a.Component{constructor(e){super(e),this.state={index:0},this.prev=this.prev.bind(this),this.next=this.next.bind(this)}prev(){let e=this.state.index-1;e<0&&(e=this.maxChildId),this.setState({index:e})}next(){let e=this.state.index+1;e>this.maxChildId&&(e=0),this.setState({index:e})}goTo(e){this.setState({index:e})}render(){const e=a.Children.map(this.props.children,(e,A)=>(this.maxChildId=A,a.cloneElement(e,{ref:A}))),A=[];for(let t=0;t<=this.maxChildId;t++)this.state.index===t?A.push(a.createElement("b",{key:t,onClick:this.goTo.bind(this,t)},t+1)):A.push(a.createElement("span",{key:t,onClick:this.goTo.bind(this,t)},t+1));return a.createElement("div",{className:f.a.container},a.createElement("div",{className:f.a.childrenContainer},e),a.createElement("div",{className:f.a.back,onClick:this.prev},a.createElement("img",{src:u.a})),a.createElement("div",{className:f.a.next,onClick:this.next},a.createElement("img",{src:m.a})),a.createElement("div",{className:f.a.nav},A))}componentDidUpdate(){const e=this.refs[this.state.index];"undefined"!=typeof window&&/Edge/.test(navigator.userAgent)?e.scrollIntoView():e.scrollIntoView({behavior:"smooth",inline:"start"})}}var b=E,g=t("0f98"),w=t.n(g);class j extends a.Component{constructor(e){super(e)}render(){let e=f.a.video;"undefined"!=typeof window&&/Edge/.test(navigator.userAgent)&&(e=f.a.edgevideo);const{siteTitle:A,siteSubtitle:t,siteShortTitle:i}=this.props;return a.createElement(n.StaticQuery,{query:x,render:e=>{const{file:{childImageSharp:{fluid:A}},banner2:{childImageSharp:{fluid:t}},banner3:{childImageSharp:{fluid:n}}}=e;return a.createElement("div",{className:w.a.bannerContainer},a.createElement(b,null,a.createElement("div",{className:f.a.item},a.createElement(c.a,{imgStyle:{objectPosition:"center top"},style:{height:"100%"},fluid:A}),a.createElement("div",{className:w.a.bannerText},a.createElement("h1",{lang:"en",style:{fontSize:"2.5rem",fontWeight:"lighter"}},"A physician with an enthusiasm in"," ",a.createElement("span",{style:{fontWeight:"normal"}},"photography, coding, gaming"))),a.createElement("div",{className:w.a.bannerSource},a.createElement("b",null,"Jigokudani, Noboribetsu"),a.createElement("br",null),"2018 © Suttisak")),a.createElement("div",{className:f.a.item},a.createElement(c.a,{imgStyle:{objectPosition:"center top"},style:{height:"100%"},fluid:t}),a.createElement("div",{className:w.a.bannerSource},a.createElement("b",null,"Hokkaido Museum, Sapporo"),a.createElement("br",null),"2018 © Suttisak")),a.createElement("div",{className:f.a.item},a.createElement(c.a,{imgStyle:{objectPosition:"center top"},style:{height:"100%"},fluid:n}),a.createElement("div",{className:w.a.bannerSource},a.createElement("b",null,"A View from Sapporo TV tower, Sapporo"),a.createElement("br",null),"2018 © Suttisak"))),a.createElement("div",{className:w.a.gradient}),a.createElement(l.a,{siteTitle:i,isFrontPage:!0}))},data:o})}}j.defaultProps={siteTitle:"",siteSubtitle:""};var B=j;const x="3338340426";var N=t("6s9U");t("pxef");class S extends a.Component{navigationHandler(e){return A=>{Object(n.navigate)(e)}}renderArticles(e){return e.map((e,A)=>{const{fields:{slug:t},frontmatter:{excerpt:i,title:r,attachments:o}}=e;return void 0!==o&&null!=o&&o.length>0?a.createElement(N.a,{style:{cursor:"pointer"},key:A,onClick:this.navigationHandler(t),side:a.createElement(c.a,{style:{height:"100%"},fluid:o[0].childImageSharp.fluid,alt:r})},a.createElement("h1",null,r),a.createElement("p",null,i),a.createElement(n.Link,{to:t},"อ่านต่อ")):a.createElement(N.a,{key:A},a.createElement("p",null,i))})}constructor(e){super(e)}render(){const{data:e}=this.props,{site:{siteMetadata:A}}=e,{blogs:{nodes:t},projects:{nodes:o}}=e,{ogimage:{ogimagePublicURL:s},authorimage:{childImageSharp:{fluid:d}}}=e;return a.createElement(a.Fragment,null,a.createElement(r.a,{title:"หน้าแรก",image:s,keywords:["Suttisak Denduangchai","สุทธิศักดิ์ เด่นดวงใจ","Out of the box"]}),a.createElement(l.a,{siteTitle:"",isFrontPage:!0}),a.createElement("div",{className:"container"},a.createElement("main",{className:"paper-container"},a.createElement("h1",{style:{paddingTop:"1em"}},"ทำความรู้จัก"),a.createElement("div",{className:"two-asymmetrical-grid"},a.createElement(c.a,{style:{borderRadius:"50%",height:"240px",width:"240px",justifySelf:"center",marginBottom:"1em"},fluid:d,alt:"author"}),a.createElement("div",{style:{alignSelf:"center"}},a.createElement("p",null,"สวัสดี ผมชื่อ สุทธิศักดิ์ ผมจบจากคณะแพทย์จุฬาลงกรณ์มหาวิทยาลัย รุ่น 66 ตอนนี้กำลังเรียนต่อเฉพาะทางสาขาเวชศาสตร์ป้องกันแขนงอาชีวเวชศาสตร์ ปี 2"),a.createElement("p",null,"และกำลังเรียน ปริญญาโท สาขาการวิจัยและการจัดการด้านสุขภาพ ของภาควิชาเวชศาสตร์ป้องกันและสังคม จุฬาลงกรณ์มหาวิทยาลัย"),a.createElement("p",null,"มีความสนใจด้าน ",a.createElement("b",null,"การถ่ายภาพ การเขียนโปรแกรม และเล่นเกมคอมพิวเตอร์")),a.createElement("p",null,"เว็บไซต์นี้ มีเพื่อรวบรวมข้อมูลที่ผมสนใจที่อาจมีประโยชน์และนำเสนอผลงานที่ทำ"))))),a.createElement(B,{siteTitle:A.title,siteSubtitle:A.subtitle}),a.createElement("div",{className:"container home-container"},a.createElement("h1",null,"Youtube Channel"),a.createElement("h2",null,"คุย Com กับหมอต้น")),a.createElement("div",{className:"container"},a.createElement("h1",null,"Blogs ",a.createElement(n.Link,{to:"/blogs"},"ทั้งหมด")," "),a.createElement("div",{className:"two-grid"},this.renderArticles(t)),a.createElement("h1",null,"Projects ",a.createElement(n.Link,{to:"/projects"},"ทั้งหมด")),a.createElement("h2",null,"โปรแกรมและเว็บไซต์ที่พัฒนา"),this.renderArticles(o)),a.createElement(i.a,{author:A.author}))}}const v="1870550411";A.default=S},nyR9:function(e,A,t){e.exports={container:"carousal-module--container--1WuyH",back:"carousal-module--back--2nn2W",next:"carousal-module--next--1Cs5y",nav:"carousal-module--nav--22Rg1",edgeVideo:"carousal-module--edge-video--3doph",video:"carousal-module--video--304MO",childrenContainer:"carousal-module--children-container--q7Q3O",item:"carousal-module--item--AOAwj"}},oG5Z:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGtKZ0Q1F//xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIRIf/aAAgBAQABBQIrB8eFImG1/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAES/9oACAEDAQE/AYRKP//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwG1a//EABsQAAIBBQAAAAAAAAAAAAAAAAABERIhMVFx/9oACAEBAAY/AsF4Rs6STU0f/8QAGxAAAwACAwAAAAAAAAAAAAAAAAERIUFhgZH/2gAIAQEAAT8hSWoGR5c7FcFOhVWfAu1mkWs0f//aAAwDAQACAAMAAAAQ3+//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFB/9oACAEDAQE/EBGz5f/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/EFBD/8QAHhABAQABAwUAAAAAAAAAAAAAAREAITFBUWFxkcH/2gAIAQEAAT8Q6kUtDEARvynvNsYFSy+cENGriJkRWGonfCBC2Dbj5n//2Q==","aspectRatio":1.499267935578331,"src":"/static/1f0a36fcf312574deb4125dd4a7b54d8/cf7ae/main.jpg","srcSet":"/static/1f0a36fcf312574deb4125dd4a7b54d8/61d2c/main.jpg 1024w,\\n/static/1f0a36fcf312574deb4125dd4a7b54d8/9a860/main.jpg 2048w,\\n/static/1f0a36fcf312574deb4125dd4a7b54d8/cf7ae/main.jpg 4096w,\\n/static/1f0a36fcf312574deb4125dd4a7b54d8/30a63/main.jpg 6000w","srcWebp":"/static/1f0a36fcf312574deb4125dd4a7b54d8/0b0d3/main.webp","srcSetWebp":"/static/1f0a36fcf312574deb4125dd4a7b54d8/b5e5f/main.webp 1024w,\\n/static/1f0a36fcf312574deb4125dd4a7b54d8/e1841/main.webp 2048w,\\n/static/1f0a36fcf312574deb4125dd4a7b54d8/0b0d3/main.webp 4096w,\\n/static/1f0a36fcf312574deb4125dd4a7b54d8/3334f/main.webp 6000w","sizes":"(max-width: 4096px) 100vw, 4096px"}}},"banner2":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQABAv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABVwfs0lGxf//EABkQAAMBAQEAAAAAAAAAAAAAAAABAhETMf/aAAgBAQABBQJVoq06SL1mn//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAwEBPwGEY//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AaW//8QAGRAAAwADAAAAAAAAAAAAAAAAAAEhIDFx/9oACAEBAAY/ApR9NrD/xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMXH/2gAIAQEAAT8hI2jxOhRSIi0ydSm3chjk/9oADAMBAAIAAwAAABDw/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAABEFH/2gAIAQMBAT8Qcsv/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEXH/2gAIAQIBAT8Qyp//xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhQWEx/9oACAEBAAE/EI53q6RDsn7HP6Rwg3LA4uSS+09xPI3f/9k=","aspectRatio":1.499267935578331,"src":"/static/fd51278341271f9467c4b19f70eece91/cf7ae/2018_hokkaido_historicalmuseum.jpg","srcSet":"/static/fd51278341271f9467c4b19f70eece91/61d2c/2018_hokkaido_historicalmuseum.jpg 1024w,\\n/static/fd51278341271f9467c4b19f70eece91/9a860/2018_hokkaido_historicalmuseum.jpg 2048w,\\n/static/fd51278341271f9467c4b19f70eece91/cf7ae/2018_hokkaido_historicalmuseum.jpg 4096w,\\n/static/fd51278341271f9467c4b19f70eece91/94178/2018_hokkaido_historicalmuseum.jpg 5891w","srcWebp":"/static/fd51278341271f9467c4b19f70eece91/0b0d3/2018_hokkaido_historicalmuseum.webp","srcSetWebp":"/static/fd51278341271f9467c4b19f70eece91/b5e5f/2018_hokkaido_historicalmuseum.webp 1024w,\\n/static/fd51278341271f9467c4b19f70eece91/e1841/2018_hokkaido_historicalmuseum.webp 2048w,\\n/static/fd51278341271f9467c4b19f70eece91/0b0d3/2018_hokkaido_historicalmuseum.webp 4096w,\\n/static/fd51278341271f9467c4b19f70eece91/99466/2018_hokkaido_historicalmuseum.webp 5891w","sizes":"(max-width: 4096px) 100vw, 4096px"}}},"banner3":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQABA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFHBu9iEDH/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIDERITIf/aAAgBAQABBQLsh3JDuiN+Wk87f//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAAQMQJx/9oACAEBAAY/AlVjhT//xAAbEAADAAIDAAAAAAAAAAAAAAAAARExUSFBkf/aAAgBAQABPyFbxdW/BDKoyNCRrZenA1I5/9oADAMBAAIAAwAAABBD3//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EKf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPxCH/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8QSZognC8NLFwYS6WNlY0LHW4pCAHcHqJmXP/Z","aspectRatio":1.499267935578331,"src":"/static/d2f77777a4de3e17708d9ba42048c69c/cf7ae/2018-Mar-16-09-47-04-_DSC9517.jpg","srcSet":"/static/d2f77777a4de3e17708d9ba42048c69c/61d2c/2018-Mar-16-09-47-04-_DSC9517.jpg 1024w,\\n/static/d2f77777a4de3e17708d9ba42048c69c/9a860/2018-Mar-16-09-47-04-_DSC9517.jpg 2048w,\\n/static/d2f77777a4de3e17708d9ba42048c69c/cf7ae/2018-Mar-16-09-47-04-_DSC9517.jpg 4096w,\\n/static/d2f77777a4de3e17708d9ba42048c69c/30a63/2018-Mar-16-09-47-04-_DSC9517.jpg 6000w","srcWebp":"/static/d2f77777a4de3e17708d9ba42048c69c/0b0d3/2018-Mar-16-09-47-04-_DSC9517.webp","srcSetWebp":"/static/d2f77777a4de3e17708d9ba42048c69c/b5e5f/2018-Mar-16-09-47-04-_DSC9517.webp 1024w,\\n/static/d2f77777a4de3e17708d9ba42048c69c/e1841/2018-Mar-16-09-47-04-_DSC9517.webp 2048w,\\n/static/d2f77777a4de3e17708d9ba42048c69c/0b0d3/2018-Mar-16-09-47-04-_DSC9517.webp 4096w,\\n/static/d2f77777a4de3e17708d9ba42048c69c/3334f/2018-Mar-16-09-47-04-_DSC9517.webp 6000w","sizes":"(max-width: 4096px) 100vw, 4096px"}}}}}')},pxef:function(e,A,t){},xG6c:function(e,A,t){e.exports={articleContainer:"paper-module--article-container--pIwES",articleAttachmentsContainer:"paper-module--article-attachments-container--3qWGJ",innerArticleContainer:"paper-module--inner-article-container--3yO_T",noAside:"paper-module--no-aside--3btW1",trans:"paper-module--trans--3qTDN",wide:"paper-module--wide--113T6",hide:"paper-module--hide--1KoyZ",show:"paper-module--show--3g6js",sbs:"paper-module--sbs--fAH-O",entryAnimation:"paper-module--entry-animation--10IxH"}}}]);