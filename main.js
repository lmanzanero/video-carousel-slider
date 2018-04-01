//Will re-create all of this code so it works with the API
//more comments
/*
const current = document.querySelector("#current");  
const videoContainer = document.querySelector('.video-container'); 
const leftButton = document.querySelector('#arrow-left');
const rightButton = document.querySelector('#arrow-right'); 
const imgs = document.querySelectorAll(".videos video");
const imgsContainer = document.querySelector("#videos-container");
const turnDeviceNotification = document.querySelector('.turnDeviceNotification');
const mainBody = document.querySelector('.video-slider'); 
let currentImg = 0;
let iframe, player; 


// Set first img opacity
imgs[0].style.cssText = "border: 2px; border-style: solid; border-color: green; max-height: 63px; max-width: 122px; padding: 4px; background-color: transparent; border-radius: 10px;"; 



function leftArrow(){
if(currentImg === 0){
  currentImg = imgs.length;  
}
current.src = imgs[currentImg - 1].src; 
imgs.forEach(img => (img.style.cssText = "border: rgb(56, 55, 55) solid 1px; border-radius: 5px;"));
imgs[currentImg - 1 ].style.cssText = "border: 2px; border-style: solid; border-color: green; max-height: 63px; max-width: 122px; padding: 4px; background-color: transparent; border-radius: 10px;"; 
current.classList.add("bounceInRight");
  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("bounceInRight"), 1000);

currentImg --;
}

function rightArrow(){ 
if(currentImg === imgs.length - 1){
   currentImg = - 1; 
}
current.src = imgs[currentImg + 1].src;
iframe = current; 
imgs.forEach(img => (img.style.cssText = "border: rgb(56, 55, 55) solid 1px; border-radius: 5px;"));
imgs[currentImg + 1 ].style.cssText = "border: 2px; border-style: solid; border-color: green; max-height: 63px; max-width: 122px; padding: 4px; background-color: transparent; border-radius: 10px;"; 
current.classList.add("bounceInLeft");
// Remove fade-in class after .5 seconds
setTimeout(() => current.classList.remove("bounceInLeft"), 1000);
currentImg ++;
}

leftButton.addEventListener('click', leftArrow);
rightButton.addEventListener('click', rightArrow);

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
// Reset the opacity
imgs.forEach(img => (img.style.cssText = "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.4);border: rgb(56, 55, 55) solid 1px; border-radius: 5px;"));

// Change current image to src of clicked image
current.src = e.target.src;  
let index;
let nodeItem = imgs;
for(var key of imgs.keys()) { 
console.log(key); 
} 



// Add fade in class
current.classList.add("fadeInUp");

// Remove fade-in class after .5 seconds
setTimeout(() => current.classList.remove("fadeInUp"), 800);

// Change the opacity to opacity var
e.target.style.cssText = "border: 2px; border-style: solid; border-color: green; max-height: 63px; max-width: 122px; padding: 4px; background-color: transparent; border-radius: 10px;";
} 


// console.log(window.screen.orientation);

function changeOrientation() {
if(window.innerHeight > window.innerWidth){
turnDeviceNotification.style.display = "none"
}else {
turnDeviceNotification.style.display = "block";  
}
}
function checkOrientation(){
if(window.screen.orientation.type === "portrait-primary"){
  turnDeviceNotification.style.display = "block"; 
} else {
  turnDeviceNotification.style.display = "none"; 
}
}


window.addEventListener("load",  checkOrientation);
window.addEventListener("orientationchange",  changeOrientation); 
 

const topOfImgsContainer = imgsContainer.offsetHeight;
const topOfVideoContainer = videoContainer.offsetTop; 

function fixedImgsContainer(){ 
if(window.scrollY <= topOfImgsContainer && window.innerHeight < window.innerWidth){
  imgsContainer.style.position = "fixed"; 
  imgsContainer.style.background = "rgba(0,0,0,0.25)"; 
} else{
  imgsContainer.style.position = "relative"; 
  imgsContainer.style.background = "#2e2e2e";
} 
if(imgsContainer.style.position == "fixed"){
  // console.log("Imgs Container is fixed");
  imgsContainer.addEventListener('mouseenter', function() {
    imgsContainer.style.position = "fixed";
    //  console.log("Enter");
   }); 
   imgsContainer.addEventListener('mouseleave', function() {
    imgsContainer.style.position = "relative";
    //  console.log("leave");
   }); 
  } else {
    // console.log("Imgs Container is relative");
    //Need to add the event listener, or else the DOM become buggy and jumpy.
    imgsContainer.addEventListener('mouseenter', function() {
     imgsContainer.style.position = "relative";
   });
  }
} 

window.addEventListener('scroll', fixedImgsContainer, false);



iframe = current; 
player = new Vimeo.Player(iframe);

player.on('ended', function(event) {
console.log("Finished", event); 
  rightArrow();   
}); 

function openSlideMenu(){
document.getElementById('side-menu').style.width = '250px';
document.getElementById('main').style.marginLeft = '250px';
}

function closeSlideMenu(){
document.getElementById('side-menu').style.width = '0';
document.getElementById('main').style.marginLeft = '0';
} 
*/