/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLEVBQUU7QUFDRjs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxHQUFHO0FBQ0gsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuXHRpZighJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpe1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLy8gQWRkcyBhbiBjbGljayBsaXN0ZW5lciB0byBjZXJ0YWluIGVsZW1lbnRzIGluIGluZGV4IHBhZ2UuXHJcbmNvbnN0IHNlcnZpY2VCb3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlcnZpY2UtYm94Jyk7XHJcbmNvbnN0IHNlcnZpY2VCb3hMaW5rcyA9IFsnbmV0d29yay1zdXBwb3J0Lmh0bWwnLCAnd2ViLWRlc2lnbi5odG1sJywgJ2NvbXB1dGVyLXJlcGFpci5odG1sJywgJ3ZvaWNlLWFuZC1kYXRhLmh0bWwnXTtcclxuZm9yKGxldCBpPTA7aTxzZXJ2aWNlQm94ZXMubGVuZ3RoO2krKyl7XHJcblx0c2VydmljZUJveGVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWY9c2VydmljZUJveExpbmtzW2ldO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpe1xyXG4gIGxldCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XHJcbiAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW1lbnUnKTtcclxuICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjaGFuZ2VcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICBzZXRUaW1lb3V0KGZhZGVVcCwgMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlKCl7XHJcblx0bGV0IHN1YmxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN1Yi1saW5rc1wiKTtcclxuXHRmb3IobGV0IGkgPSAwOyBpPCBzdWJsaW5rcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRzdWJsaW5rc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGZhZGVVcCgpe1xyXG5cdGxldCBhcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpLmNoaWxkcmVuO1xyXG5cdGZvcihsZXQgaT0wO2k8YXJyLmxlbmd0aDtpKyspe1xyXG5cdFx0YXJyW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2ZhZGVVcCcpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VPdmVyKHgpe1xyXG5cdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5zdHlsZS5jb2xvcj1cIndoaXRlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlT3V0KHgpe1xyXG5cdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5zdHlsZS5jb2xvcj1cInJnYmEoMSwxLDEsMC41KVwiO1xyXG59XHJcblxyXG5sZXQgYSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5pbWF0ZScpKTtcclxuLy8gQ3JlYXRlIGFuIGludGVyc2VjdGlvbiBvYnNlcnZlciBmb3IgZWFjaCBlbGVtZW50IHdpdGggdGhlIGNsYXNzIG5hbWUgYW5pbWF0ZVxyXG5cclxuaWYoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpe1xyXG5cclxubGV0IG9ic2VydmVycyA9IFtdO1xyXG5cclxubGV0IG9ic2VydmVyT3B0aW9ucyA9IHtcclxuXHRyb290OiBudWxsLCAvLyBiYyB3ZSB3YW50IHJvb3QgdG8gYmUgZG9jdW1lbnQncyB2aWV3cG9ydFxyXG5cdHJvb3RNYXJnaW46ICcwcHgnLFxyXG5cdHRocmVzaG9sZDogMC44IC8vIHRyaWdnZXJlZCB3aGVuIHdob2xlIGVsZW1lbnQgaXMgaW4gdmlld3BvcnRcclxufVxyXG5cclxuZm9yKGxldCBpID0wO2k8YS5sZW5ndGg7aSsrKXtcclxuXHRvYnNlcnZlcnNbaV0gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaW50ZXJzZWN0aW9uQ2FsbGJhY2ssIG9ic2VydmVyT3B0aW9ucyk7XHJcblx0b2JzZXJ2ZXJzW2ldLm9ic2VydmUoYVtpXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludGVyc2VjdGlvbkNhbGxiYWNrKGVudHJpZXMpe1xyXG5cdGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSl7XHJcblx0XHRpZihlbnRyeS5pc0ludGVyc2VjdGluZyl7XHJcblx0XHRcdGxldCBlbCA9IGVudHJ5LnRhcmdldDtcclxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXJhbGxheC1pbWcnKSl7XHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnbW92ZVVwJyk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2RvU29tZXRoaW5nJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0LypvYnNlcnZlci51bm9ic2VydmUoZWwpOyovXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxufWVsc2V7XHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKGUpe1xyXG5cdGlmKGFbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ID09PSAwKVxyXG5cdFx0YS5zaGlmdCgpO1xyXG5cdFxyXG5cdGlmKGFbMF0gJiYgaXNWaXNpYmxlKGFbMF0pKXtcclxuXHRcdGlmKGFbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXJhbGxheC1pbWcnKSl7XHJcblx0XHRcdC8qYWxlcnQoJ21vdmV1cCcpOyovXHJcblx0XHRcdGFbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnbW92ZVVwJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0LyphbGVydCgnZmFkZScpOyovXHJcblx0XHRcdGFbMF0uY2xhc3NMaXN0LmFkZCgnZG9Tb21ldGhpbmcnKTtcclxuXHRcdH1cclxuXHRcdGEuc2hpZnQoKTtcclxuXHR9XHJcblxyXG5cdC8vYXJyW10gaWYgdmlzaWJsZSBmYWRlSW5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNWaXNpYmxlKGVsKXtcclxuXHRcclxuXHRsZXQgc2NyZWVuSCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xyXG5cdGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuXHRpZihyZWN0ID4gMCAmJiByZWN0IDwgKHNjcmVlbkgtKHNjcmVlbkgvNSkpKXtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxud2luZG93LmlzVmlzaWJsZSA9IGlzVmlzaWJsZTtcclxufVxyXG5cclxud2luZG93LnRvZ2dsZU1lbnUgPSB0b2dnbGVNZW51O1xyXG53aW5kb3cudG9nZ2xlID0gdG9nZ2xlO1xyXG53aW5kb3cuZmFkZVVwID0gZmFkZVVwO1xyXG53aW5kb3cubW91c2VPdmVyID0gbW91c2VPdmVyO1xyXG53aW5kb3cubW91c2VPdXQgPSBtb3VzZU91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==