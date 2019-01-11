window.onbeforeunload = function (){
	if(!'IntersectionObserver' in window){
		window.scrollTo(0,0);
	}
}


// Adds an click listener to certain elements in index page.
const serviceBoxes = document.getElementsByClassName('service-box');
const serviceBoxLinks = ['network-support.html', 'web-design.html', 'computer-repair.html', 'voice-and-data.html'];
for(let i=0;i<serviceBoxes.length;i++){
	serviceBoxes[i].addEventListener("click", function(){
		window.location.href=serviceBoxLinks[i];
	});
}


function toggleMenu(){
  let menuBtn = document.getElementById('menu-btn');
  let menu = document.getElementById('mobile-menu');
  menuBtn.classList.toggle("change");
  menu.classList.toggle("show");
  setTimeout(fadeUp, 100);
}

function toggle(){
	let sublinks = document.getElementsByClassName("sub-links");
	for(let i = 0; i< sublinks.length; i++){
		sublinks[i].classList.toggle('show');
	}
}
function fadeUp(){
	let arr = document.getElementById('list').children;
	for(let i=0;i<arr.length;i++){
		arr[i].classList.toggle('fadeUp');
	}
}

function mouseOver(x){
	x.getElementsByTagName('p')[0].style.color="white";
}

function mouseOut(x){
	x.getElementsByTagName('p')[0].style.color="rgba(1,1,1,0.5)";
}

let a = Array.from(document.getElementsByClassName('animate'));
// Create an intersection observer for each element with the class name animate

if('IntersectionObserver' in window){

let observers = [];

let observerOptions = {
	root: null, // bc we want root to be document's viewport
	rootMargin: '0px',
	threshold: 0.8 // triggered when whole element is in viewport
}

for(let i =0;i<a.length;i++){
	observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
	observers[i].observe(a[i]);
}

function intersectionCallback(entries){
	entries.forEach(function(entry){
		if(entry.isIntersecting){
			let el = entry.target;
			if(el.classList.contains('parallax-img')){
				el.classList.add('moveUp');
			}else{
				el.classList.add('doSomething');
			}
			/*observer.unobserve(el);*/
		}
	})
}

}else{
window.onscroll = function(e){
	if(a[0].getBoundingClientRect().height === 0)
		a.shift();
	
	if(a[0] && isVisible(a[0])){
		if(a[0].classList.contains('parallax-img')){
			/*alert('moveup');*/
			a[0].classList.toggle('moveUp');
		}else{
			/*alert('fade');*/
			a[0].classList.add('doSomething');
		}
		a.shift();
	}

	//arr[] if visible fadeIn
}

function isVisible(el){
	
	let screenH = window.screen.height;
	let rect = el.getBoundingClientRect().top;

	if(rect > 0 && rect < (screenH-(screenH/5))){
		return true;
	}else{
		return false;
	}
}

window.isVisible = isVisible;
}

window.toggleMenu = toggleMenu;
window.toggle = toggle;
window.fadeUp = fadeUp;
window.mouseOver = mouseOver;
window.mouseOut = mouseOut;
