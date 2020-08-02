(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6s9U":function(e,t,n){"use strict";var r=n("Ff2n"),a=n("q1tI");var i=function(e,t){if(!e)throw new Error("Invariant failed")};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=new Map,m=new Map,d=new Map,u=0;function h(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,a=r.root,l=r.rootMargin,o=r.threshold;if(c.has(e)&&i(!1),e){var s=function(e){return e?d.has(e)?d.get(e):(u+=1,d.set(e,u.toString()),d.get(e)+"_"):""}(a)+(l?o.toString()+"_"+l:o.toString()),h=m.get(s);h||(h=new IntersectionObserver(g,n),s&&m.set(s,h));var p={callback:t,element:e,inView:!1,observerId:s,observer:h,thresholds:h.thresholds||(Array.isArray(o)?o:[o])};return c.set(e,p),h.observe(e),p}}function p(e){if(e){var t=c.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var i=!1,l=!1;n&&c.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,l=!0),t.observer.root===a&&(l=!0))})),!l&&a&&d.delete(a),r&&!i&&r.disconnect(),c.delete(e)}}}function g(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=c.get(r);if(a&&n>=0){var i=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),a.inView=i,a.callback(i,e)}}))}var v=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return l(s(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),l(s(t),"node",null),l(s(t),"handleNode",(function(e){t.node&&(p(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),l(s(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=r.prototype;return c.componentDidMount=function(){this.node||i(!1)},c.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(p(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(p(this.node),this.node=null)},c.componentWillUnmount=function(){this.node&&(p(this.node),this.node=null)},c.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;h(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},c.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var r=this.props,i=r.children,l=r.as,s=r.tag,c=(r.triggerOnce,r.threshold,r.root,r.rootMargin,r.onChange,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(a.createElement)(l||s||"div",o({ref:this.handleNode},c),i)},r}(a.Component);l(v,"displayName","InView"),l(v,"defaultProps",{threshold:0,triggerOnce:!1});n("SKSs");class E extends a.Component{constructor(e){super(e),this.hasAlreadyShown=!1}render(){var e=this.props,{wide:t,side:n,transparent:i,sbs:l,children:o,style:s}=e,c=Object(r.a)(e,["wide","side","transparent","sbs","children","style"]),m=(i?"trans":"")+" "+(n?"":"no-aside"),d="article-container "+(t?"wide":"")+" ",u="inner-article-container "+(l?"sbs":"");return a.createElement(v,null,e=>{var{inView:t,ref:r,entry:i}=e;return this.hasAlreadyShown=t||this.hasAlreadyShown,a.createElement("div",Object.assign({ref:r,className:d+" "+(this.hasAlreadyShown||t?"show":"hide"),style:s},c),a.createElement("div",{className:u},n?a.createElement("aside",null,n):null,a.createElement("article",{style:s,className:m},o)))})}}t.a=E},"9lnf":function(e,t,n){e.exports={intro:"intro-module--intro--1pXa8",introText:"intro-module--intro-text--3hK_b",introImage:"intro-module--intro-image--33iIa",icon:"intro-module--icon--uW2iV"}},FBpB:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTI5IDEyOSI+DQogIDxnPg0KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJtNDAuNCwxMjEuM2MtMC44LDAuOC0xLjgsMS4yLTIuOSwxLjJzLTIuMS0wLjQtMi45LTEuMmMtMS42LTEuNi0xLjYtNC4yIDAtNS44bDUxLTUxLTUxLTUxYy0xLjYtMS42LTEuNi00LjIgMC01LjggMS42LTEuNiA0LjItMS42IDUuOCwwbDUzLjksNTMuOWMxLjYsMS42IDEuNiw0LjIgMCw1LjhsLTUzLjksNTMuOXoiLz4NCiAgPC9nPg0KPC9zdmc+DQo="},O1Q2:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOSAxMjkiPg0KICA8Zz4NCiAgICA8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0ibTg4LjYsMTIxLjNjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtNTEtNTEgNTEtNTFjMS42LTEuNiAxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC01NCw1My45Yy0xLjYsMS42LTEuNiw0LjIgMCw1LjhsNTQsNTMuOXoiLz4NCiAgPC9nPg0KPC9zdmc+DQo="},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return L}));var r=n("q1tI"),a=n("Wbzz"),i=n("OCm5"),l=n("H8eV"),o=n("B+IG"),s=n("6s9U"),c=n("9eSz"),m=n.n(c),d=n("O1Q2"),u=n.n(d),h=n("FBpB"),p=n.n(h),g=n("nyR9"),v=n.n(g);class E extends r.Component{constructor(e){super(e),this.myRef=r.createRef(),this.state={index:0},this.prev=this.prev.bind(this),this.next=this.next.bind(this)}prev(){var e=this.state.index-1;e<0&&(e=this.maxChildId),this.setState({index:e})}next(){var e=this.state.index+1;e>this.maxChildId&&(e=0),this.setState({index:e})}goTo(e){this.setState({index:e})}render(){for(var e=r.Children.map(this.props.children,(e,t)=>(this.maxChildId=t,r.cloneElement(e,{ref:t}))),t=[],n=0;n<=this.maxChildId;n++)this.state.index===n?t.push(r.createElement("b",{key:n,onClick:this.goTo.bind(this,n)},n+1)):t.push(r.createElement("span",{key:n,onClick:this.goTo.bind(this,n)},n+1));return r.createElement("div",{className:v.a.container+" "+(this.maxChildId>0?v.a.show:"")},r.createElement("div",{ref:this.myRef,className:v.a.childrenContainer},e),r.createElement("div",{className:v.a.back,onClick:this.prev},r.createElement("img",{src:u.a})),r.createElement("div",{className:v.a.next,onClick:this.next},r.createElement("img",{src:p.a})),r.createElement("div",{className:v.a.nav},t))}componentDidUpdate(){var e=this.refs[this.state.index],t=this.myRef.current;"undefined"!=typeof window&&/Edge/.test(navigator.userAgent)||t.scrollTo({left:e.offsetLeft,behavior:"smooth"}),e.scrollIntoView({behavior:"smooth",inline:"start"})}}var b=E,f=n("9lnf"),y=n.n(f),w=n("LG7E"),x=n("DTlq"),M=n.n(x),C=e=>r.createElement(a.StaticQuery,{query:"1119712590",render:e=>{var{authorimage:{childImageSharp:{fluid:t}}}=e;return r.createElement("div",{className:"two-asymmetrical-grid "+y.a.intro},r.createElement("div",{className:y.a.introText},r.createElement("h1",null,"Hi ! ผมชื่อ สุทธิศักดิ์"),r.createElement("p",null,"จบแพทย์จุฬาลงกรณ์มหาวิทยาลัย รุ่น 66"),r.createElement("p",null,r.createElement("b",null,"ปัจจุบัน")," ศึกษาต่อ แพทย์เฉพาะทางสาขาเวชศาสตร์ป้องกันแขนง",r.createElement("b",null,"อาชีวเวชศาสตร์")," ปี 2 ",r.createElement("br",null)," และปริญญาโท สาขาการวิจัยและการจัดการด้านสุขภาพ ภาควิชาเวชศาสตร์ป้องกันและสังคม จุฬาลงกรณ์มหาวิทยาลัย"),r.createElement("h2",null,"ชื่นชอบ"," ",r.createElement("a",{href:"#photography",onClick:w.a},"📸 การถ่ายภาพ")," ","และการท่องเที่ยว"),r.createElement("h3",null,r.createElement("a",{href:"#project",onClick:w.a},"💻 พัฒนาโปรแกรมและเว็บไซต์")),r.createElement("h3",null,r.createElement("a",{href:"#blogs",onClick:w.a},"✍ Blogs เกี่ยวกับการเรียนและคอมพิวเตอร์")),r.createElement("h3",null,r.createElement("a",{href:"#youtube",onClick:w.a},r.createElement("img",{src:M.a,style:{width:"40px"}})," คุย Com กับหมอต้น")),r.createElement("h4",null,"สามารถ ",r.createElement("a",{href:"#footer",onClick:w.a},"ติดตามผมได้ที่"))),r.createElement(m.a,{className:y.a.introImage,fluid:t,alt:"author"}))}}),S=n("rTvQ"),I=n.n(S);n("pxef");class N extends r.Component{navigationHandler(e){return t=>{Object(a.navigate)(e)}}renderArticles(e){return e.map((e,t)=>{var{fields:{slug:n},frontmatter:{excerpt:i,title:l,date:o,attachments:c}}=e;return void 0!==c&&null!=c&&c.length>0&&null!=c[0]?r.createElement(s.a,{style:{cursor:"pointer"},key:t,onClick:this.navigationHandler(n),side:r.createElement(m.a,{style:{height:"100%"},fluid:c[0].childImageSharp.fluid,alt:l})},r.createElement("h1",null,l),r.createElement("div",{className:"date"},o),r.createElement("p",null,i),r.createElement(a.Link,{to:n},"อ่านต่อ")):r.createElement(s.a,{key:t},r.createElement("h1",null,l),r.createElement("div",{className:"date"},o),r.createElement("p",null,i),r.createElement(a.Link,{to:n},"อ่านต่อ"))})}constructor(e){super(e)}render(){var{data:e}=this.props,{site:{siteMetadata:t}}=e,{blogs:{nodes:n},projects:{nodes:s}}=e,{ogimage:{ogimagePublicURL:c},authorimage:{childImageSharp:{fluid:d}}}=e,{banner1:{childImageSharp:{fluid:u}},banner2:{childImageSharp:{fluid:h}},banner3:{childImageSharp:{fluid:p}}}=e;return r.createElement(r.Fragment,null,r.createElement(l.a,{title:"",image:c,keywords:["Suttisak Denduangchai","สุทธิศักดิ์ เด่นดวงใจ","Out of the box"]}),r.createElement(o.a,{siteTitle:"",isFrontPage:!0}),r.createElement("div",{className:"container intro-container"},r.createElement(C,null),r.createElement("div",{style:{position:"absolute",bottom:"0.5em",left:"50%",transform:"translateX(-50%)"}},r.createElement("h4",null,"เลื่อนลงเลย!"))),r.createElement("div",{className:"container images-carousal"},r.createElement("h1",{id:"photography",style:{paddingTop:"0.5em"}},"Photography"),r.createElement("h3",null,"ภาพถ่าย ที่ท่องเที่ยวที่เคยไป ติดตามได้ที่"," ",r.createElement("a",{href:"https://500px.com/lukespacewalker"},r.createElement("svg",{style:{height:"25px",fill:"white"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 20"},r.createElement("title",null,"500px"),r.createElement("path",{d:"M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z",transform:"translate(0)"})))," ",r.createElement("a",{href:"https://www.instagram.com/lukesp763/"},r.createElement("img",{src:I.a,style:{height:"30px"}})))),r.createElement("div",{style:{position:"relative",width:"100vw",height:"100vh"}},r.createElement(b,null,r.createElement("div",{className:v.a.item},r.createElement(m.a,{imgStyle:{objectPosition:"center top"},style:{height:"100%"},fluid:u}),r.createElement("div",{className:v.a.bannerSource},r.createElement("b",null,"Jigokudani, Noboribetsu"),r.createElement("br",null),"2018 © Suttisak")),r.createElement("div",{className:v.a.item},r.createElement(m.a,{imgStyle:{objectPosition:"center top"},style:{height:"100%"},fluid:h}),r.createElement("div",{className:v.a.bannerSource},r.createElement("b",null,"Hokkaido Museum, Sapporo"),r.createElement("br",null),"2018 © Suttisak")),r.createElement("div",{className:v.a.item},r.createElement(m.a,{imgStyle:{objectPosition:"center top"},style:{height:"100%"},fluid:p}),r.createElement("div",{className:v.a.bannerSource},r.createElement("b",null,"A View from Sapporo TV tower, Sapporo"),r.createElement("br",null),"2018 © Suttisak")))),r.createElement("div",{className:"container"},r.createElement("div",{id:"youtube"},r.createElement("a",{href:"https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ"},r.createElement("img",{id:"youtube",src:M.a})),r.createElement("a",{href:"https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ"},r.createElement("h1",null,"คุย Com กับหมอต้น"))),r.createElement("div",{className:"youtube-grid"},r.createElement("div",{className:"youtube-container"},r.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kGMOd_cAIzg",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),r.createElement("div",null,r.createElement("h3",null,"Youtube Vanced"),r.createElement("p",null,"เป็นโปรแกรมที่ช่วยให้สามารถดู Youtube บนระบบ Android แบบไม่มีโฆษณามากวนใจ นอกจากนี้ยังมีฟีเจอร์เด็ดอีกคือ"),r.createElement("ul",null,r.createElement("li",null,"สามารถเล่น Video ต่อได้ แม้ว่าจะกดสลับโปรแกรมหรือปิดหน้าจอ"),r.createElement("li",null,"โหมด Picture-in-Picture ทำให้สามารถดู Video พร้อมกับใช้โปรแกรมอื่นได้"),r.createElement("li",null,"สามารถดาวน์โหลด Video (ที่ผู้สร้างอนุญาติให้เราดาวน์โหลด) มาเก็บไว้ในเครื่องได้"))))),r.createElement("div",{className:"container"},r.createElement("h1",{id:"blogs"},"Blogs",r.createElement(a.Link,{to:"/blogs"},r.createElement("span",{style:{fontSize:"0.6em"}}," ดูทั้งหมด"))," "),r.createElement("h3",null,"การเรียนและคอมพิวเตอร์"),r.createElement("div",{className:"two-grid"},this.renderArticles(n)),r.createElement("h1",{id:"project"},"Projects"," ",r.createElement(a.Link,{to:"/projects"},r.createElement("span",{style:{fontSize:"0.6em"}}," ดูทั้งหมด"))),r.createElement("h3",null,"โปรแกรมและเว็บไซต์ที่พัฒนา"),this.renderArticles(s)),r.createElement(i.a,{author:t.author}))}}var L="3140196413";t.default=N},SKSs:function(e,t,n){},nyR9:function(e,t,n){e.exports={container:"carousal-module--container--1WuyH",back:"carousal-module--back--2nn2W",next:"carousal-module--next--1Cs5y",nav:"carousal-module--nav--22Rg1",show:"carousal-module--show--3yNoz",edgeVideo:"carousal-module--edge-video--3doph",video:"carousal-module--video--304MO",childrenContainer:"carousal-module--children-container--q7Q3O",item:"carousal-module--item--AOAwj",bannerText:"carousal-module--banner-text--bAzco",bannerSource:"carousal-module--banner-source--2YhRT"}},pxef:function(e,t,n){}}]);