  "use strict";
  class HeaderCaption extends HTMLDivElement {    // Tou can extend any other element or Class
   constructor() {super();}
   attachedCallback () {
     var div = document.createElement("div");
     div.style.flex = "auto";
     var sectionTitle = document.createElement("p");
     var sectionDesc = document.createElement("span");
     sectionTitle.innerHTML = this.innerHTML;
     sectionDesc.innerHTML = this.dataset.desc;
     this.innerHTML = "";
     this.parentNode.insertBefore(div,this.nextSibling);
     this.appendChild(sectionDesc);
     this.appendChild(sectionTitle);
   }
  }
  var galleryPosition;
  var target;
  var animatedFrameID = null;
   class ImageGallery extends HTMLDivElement{
       constructor() {super()}
       attachedCallback (){
           // Get Path to Thumnails
           
           
           // Get All <img> inside
            let imgTagsNode = this.querySelectorAll("img");
            var imageCollecton = new Array();
            let imgTags = Array.from(imgTagsNode);
            for (let img of imgTags){
                imageCollecton.push(img);
            }
           // Recreate Gallery
           this.innerHTML = `
           <style>
            x-gallery, gallery-group {display:block;}
            x-gallery{
            }
            .filmstrip img{
                transition:height 0.5s ease;
                height:20vh;
            }
            .filmstrip.small img{
                height:15vh;
            }
            
            .viewer{
                height:0;
                overflow-x:auto;
                overflow-y:hidden;
                -ms-overflow-style: none;
                display:flex;
                flex-wrap:nowrap;
                background-color:black;
            }
            .viewer.show{
                height:Calc(85vh - 73.6px);
            }
            .viewer::-webkit-scrollbar { width: 0 !important }
            .viewer div{
                width:100%;
                display:block;
                height:100%;
                background-position: center center;
                background-repeat: no-repeat;
                background-clip: border-box;
                background-size: contain;  
            }
           </style>
           <div class="filmstrip">
           </div>
           <div class="viewer">
           </div>
           `;
           let filmstrip = this.querySelector(".filmstrip");
           let viewer = this.querySelector(".viewer");
           for (let img of imageCollecton){
               let thumbimg = document.createElement("img");
               thumbimg.src = this.dataset.thumbnailpath+ img.parentNode.dataset.catpath +img.dataset.src;
               thumbimg.dataset.fullpath = this.dataset.fullpath + img.parentNode.dataset.catpath + img.dataset.src;
               filmstrip.appendChild(thumbimg);
           }
           let class_gallery = document.querySelector(".gallery");
           imageCollecton = null; 
           var currentImage = null;
           var isCollpase = true;
           var fullimg = document.createElement("div");
           viewer.appendChild(fullimg);
           filmstrip.addEventListener("click",function(evt){
               event.preventDefault();
               if(currentImage != event.target || isCollpase){
               currentImage = event.target;
               galleryPosition = class_gallery.getBoundingClientRect();
               target = window.pageYOffset + galleryPosition.top
               animatedFrameID = window.requestAnimationFrame(scroll);
               class_gallery.style.minHeight = "100vh";
               filmstrip.classList.add("small")
               setTimeout(function(){viewer.classList.add("show");isCollpase = false;},520);
               let fullpath = event.target.dataset.fullpath;
               if(fullpath != null || fullpath != undefined){
                   fullimg.style.backgroundImage = `url("`+fullpath+`")`;
               }
               
               }
               else{
               viewer.classList.remove("show");
               class_gallery.style.minHeight = "0vh";
               filmstrip.classList.remove("small")
               isCollpase = true;;
               }
           },false);
       }
   }

   var scrollStart = null;
   
   function scroll(timestamp){
       const animateTime = 1000;
       if(!scrollStart){scrollStart = timestamp;}
       let progress = timestamp - scrollStart;
       window.scrollTo(window.pageXOffset,window.pageYOffset + progress*(target-window.pageYOffset)/animateTime);
        if (progress < animateTime) {
    window.requestAnimationFrame(scroll);
  }else{
      window.cancelAnimationFrame(animatedFrameID);
      scrollStart = null;
  }
   }
   class ArticleGroup extends HTMLDivElement{
       constructor(){
           super();
       }
        attachedCallback (){
            this.style.display = "inline-block";
            // Get Articles Group Name
            let headerNode = this.parentNode.parentNode.querySelector("header");

            let navNode = headerNode.querySelector("nav");
            
            if(navNode==null){navNode = document.createElement("nav");}

            headerNode.appendChild(navNode);
            
            let buttonNode = document.createElement("button");
            buttonNode.textContent = this.dataset.name;
            navNode.appendChild(buttonNode);
        }
   }

  var x_caption = document.registerElement("x-caption", HeaderCaption);
  var x_logo = document.registerElement("x-logo", Object.create(HTMLDivElement.prototype));
  var intro_text = document.registerElement("intro-text", Object.create(HTMLDivElement.prototype));
  var x_gallery = document.registerElement("x-gallery",ImageGallery);
  var gallery_group = document.registerElement("gallery-group",Object.create(HTMLElement.prototype));
  var article_group = document.registerElement("article-group",ArticleGroup);
    var outer_container = document.registerElement("outer-container", Object.create(HTMLDivElement.prototype));

document.addEventListener("DOMContentLoaded",function(){
       let mainnav = document.querySelector("#mainnav");
       mainnav.addEventListener("click",function(evt){
           evt.preventDefault();
           let jumpTarget = evt.target.dataset.target;
           if(jumpTarget != null || jumpTarget != ""){
               let targetPosition = document.querySelector(jumpTarget);
               targetPosition = targetPosition.getBoundingClientRect();
               target = window.pageYOffset + targetPosition.top;
               animatedFrameID = window.requestAnimationFrame(scroll);
           }
       },false);
   });