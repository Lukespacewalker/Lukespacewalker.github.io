"use strict";

class HeaderCaption extends HTMLDivElement { // Tou can extend any other element or Class
    constructor() {
        super();
    }

    attachedCallback () {
        const div = document.createElement("div");
        div.style.flex = "auto";
        const sectionTitle = document.createElement("p");
        const sectionDesc = document.createElement("span");
        sectionTitle.innerHTML = this.innerHTML;
        sectionDesc.innerHTML = this.dataset.desc;
        this.innerHTML = "";
        this.parentNode.insertBefore(div, this.nextSibling);
        this.appendChild(sectionDesc);
        this.appendChild(sectionTitle);
    }
}

var galleryPosition;
var target;
var animatedFrameID = null;

class ImageGallery extends HTMLDivElement {
    constructor() {
        super();
    }

    attachedCallback () {
        // Get Path to Thumnails


        // Get All <img> inside
        const imgTagsNode = this.querySelectorAll("img");
        let imageCollecton = new Array();
        const imgTags = Array.from(imgTagsNode);
        for (let img of imgTags) {
            imageCollecton.push(img);
        }
        // Recreate Gallery
        this.innerHTML = `
           <div class="filmstrip">
           </div>
<div class="viewer">
</div>
           `;
        const filmstrip = this.querySelector(".filmstrip");
        const viewer = this.querySelector(".viewer");
        for (let img of imageCollecton) {
            const thumbimg = document.createElement("img");
            thumbimg.src = this.dataset.thumbnailpath + img.parentNode.dataset.catpath + img.dataset.src;
            thumbimg.dataset.fullpath = this.dataset.fullpath + img.parentNode.dataset.catpath + img.dataset.src;
            filmstrip.appendChild(thumbimg);
        }
        const classGallery = document.querySelector(".gallery");
        imageCollecton = null;
        var currentImage = null;
        var isCollpase = true;
        var fullimg = document.createElement("div");
        viewer.appendChild(fullimg);
        filmstrip.addEventListener("click",
            function(evt) {
                event.preventDefault();
                if (currentImage !== event.target || isCollpase) {
                    currentImage = event.target;
                    galleryPosition = classGallery.getBoundingClientRect();
                    target = window.pageYOffset + galleryPosition.top;
                    animatedFrameID = window.requestAnimationFrame(scroll);
                    classGallery.style.minHeight = "100vh";
                    filmstrip.classList.add("small");
                    setTimeout(function() {
                            viewer.classList.add("show");
                            isCollpase = false;
                        },
                        520);
                    const fullpath = event.target.dataset.fullpath;
                    if (fullpath !== null || fullpath !== undefined) {
                        fullimg.style.backgroundImage = `url("${fullpath}")`;
                    }

                } else {
                    viewer.classList.remove("show");
                    classGallery.style.minHeight = "0vh";
                    filmstrip.classList.remove("small");
                    isCollpase = true;;
                }
            },
            false);
    }
}

var scrollStart = null;

function scroll(timestamp) {
    const animateTime = 1000;
    if (!scrollStart) {
        scrollStart = timestamp;
    }
    const progress = timestamp - scrollStart;
    window.scrollTo(window.pageXOffset, window.pageYOffset + progress * (target - window.pageYOffset) / animateTime);
    if (progress < animateTime) {
        window.requestAnimationFrame(scroll);
    } else {
        window.cancelAnimationFrame(animatedFrameID);
        scrollStart = null;
    }
}

class ArticleGroup extends HTMLDivElement {
    constructor() {
        super();
    }

    attachedCallback () {
        this.style.display = "inline-block";
        // Get Articles Group Name
        const headerNode = this.parentNode.parentNode.querySelector("header");

        let navNode = headerNode.querySelector("nav");

        if (navNode === null) {
            navNode = document.createElement("nav");
        }

        headerNode.appendChild(navNode);

        const buttonNode = document.createElement("button");
        buttonNode.textContent = this.dataset.name;
        navNode.appendChild(buttonNode);
    }
}

var x_caption = document.registerElement("x-caption", HeaderCaption);
var x_logo = document.registerElement("x-logo", Object.create(HTMLDivElement.prototype));
var intro_text = document.registerElement("intro-text", Object.create(HTMLDivElement.prototype));
var x_gallery = document.registerElement("x-gallery", ImageGallery);
var gallery_group = document.registerElement("gallery-group", Object.create(HTMLElement.prototype));
var article_group = document.registerElement("article-group", ArticleGroup);
var outer_container = document.registerElement("outer-container", Object.create(HTMLDivElement.prototype));

document.addEventListener("DOMContentLoaded",
    function() {
        const mainnav = document.querySelector("#mainnav");
        mainnav.addEventListener("click",
            function(evt) {
                evt.preventDefault();
                const jumpTarget = evt.target.dataset.target;
                if (jumpTarget !== null && jumpTarget !== "") {
                    let targetPosition = document.querySelector(jumpTarget);
                    targetPosition = targetPosition.getBoundingClientRect();
                    target = window.pageYOffset + targetPosition.top;
                    animatedFrameID = window.requestAnimationFrame(scroll);
                }
            },
            false);
    });