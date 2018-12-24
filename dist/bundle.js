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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLEVBQUU7QUFDRjs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxHQUFHO0FBQ0gsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIndpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG5cdGlmKCEnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyl7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vLyBBZGRzIGFuIGNsaWNrIGxpc3RlbmVyIHRvIGNlcnRhaW4gZWxlbWVudHMgaW4gaW5kZXggcGFnZS5cclxuY29uc3Qgc2VydmljZUJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VydmljZS1ib3gnKTtcclxuY29uc3Qgc2VydmljZUJveExpbmtzID0gWyduZXR3b3JrLXN1cHBvcnQuaHRtbCcsICd3ZWItZGVzaWduLmh0bWwnLCAnY29tcHV0ZXItcmVwYWlyLmh0bWwnLCAndm9pY2UtYW5kLWRhdGEuaHRtbCddO1xyXG5mb3IobGV0IGk9MDtpPHNlcnZpY2VCb3hlcy5sZW5ndGg7aSsrKXtcclxuXHRzZXJ2aWNlQm94ZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZj1zZXJ2aWNlQm94TGlua3NbaV07XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNZW51KCl7XHJcbiAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcclxuICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpO1xyXG4gIG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIHNldFRpbWVvdXQoZmFkZVVwLCAxMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGUoKXtcclxuXHRsZXQgc3VibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3ViLWxpbmtzXCIpO1xyXG5cdGZvcihsZXQgaSA9IDA7IGk8IHN1YmxpbmtzLmxlbmd0aDsgaSsrKXtcclxuXHRcdHN1YmxpbmtzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gZmFkZVVwKCl7XHJcblx0bGV0IGFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JykuY2hpbGRyZW47XHJcblx0Zm9yKGxldCBpPTA7aTxhcnIubGVuZ3RoO2krKyl7XHJcblx0XHRhcnJbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnZmFkZVVwJyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBhID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbmltYXRlJykpO1xyXG4vLyBDcmVhdGUgYW4gaW50ZXJzZWN0aW9uIG9ic2VydmVyIGZvciBlYWNoIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgbmFtZSBhbmltYXRlXHJcblxyXG5pZignSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyl7XHJcblxyXG5sZXQgb2JzZXJ2ZXJzID0gW107XHJcblxyXG5sZXQgb2JzZXJ2ZXJPcHRpb25zID0ge1xyXG5cdHJvb3Q6IG51bGwsIC8vIGJjIHdlIHdhbnQgcm9vdCB0byBiZSBkb2N1bWVudCdzIHZpZXdwb3J0XHJcblx0cm9vdE1hcmdpbjogJzBweCcsXHJcblx0dGhyZXNob2xkOiAwLjggLy8gdHJpZ2dlcmVkIHdoZW4gd2hvbGUgZWxlbWVudCBpcyBpbiB2aWV3cG9ydFxyXG59XHJcblxyXG5mb3IobGV0IGkgPTA7aTxhLmxlbmd0aDtpKyspe1xyXG5cdG9ic2VydmVyc1tpXSA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihpbnRlcnNlY3Rpb25DYWxsYmFjaywgb2JzZXJ2ZXJPcHRpb25zKTtcclxuXHRvYnNlcnZlcnNbaV0ub2JzZXJ2ZShhW2ldKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW50ZXJzZWN0aW9uQ2FsbGJhY2soZW50cmllcyl7XHJcblx0ZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5KXtcclxuXHRcdGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcclxuXHRcdFx0bGV0IGVsID0gZW50cnkudGFyZ2V0O1xyXG5cdFx0XHRpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhcmFsbGF4LWltZycpKXtcclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdtb3ZlVXAnKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnZG9Tb21ldGhpbmcnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvKm9ic2VydmVyLnVub2JzZXJ2ZShlbCk7Ki9cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG59ZWxzZXtcclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oZSl7XHJcblx0aWYoYVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgPT09IDApXHJcblx0XHRhLnNoaWZ0KCk7XHJcblx0XHJcblx0aWYoYVswXSAmJiBpc1Zpc2libGUoYVswXSkpe1xyXG5cdFx0aWYoYVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhcmFsbGF4LWltZycpKXtcclxuXHRcdFx0LyphbGVydCgnbW92ZXVwJyk7Ki9cclxuXHRcdFx0YVswXS5jbGFzc0xpc3QudG9nZ2xlKCdtb3ZlVXAnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHQvKmFsZXJ0KCdmYWRlJyk7Ki9cclxuXHRcdFx0YVswXS5jbGFzc0xpc3QuYWRkKCdkb1NvbWV0aGluZycpO1xyXG5cdFx0fVxyXG5cdFx0YS5zaGlmdCgpO1xyXG5cdH1cclxuXHJcblx0Ly9hcnJbXSBpZiB2aXNpYmxlIGZhZGVJblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1Zpc2libGUoZWwpe1xyXG5cdFxyXG5cdGxldCBzY3JlZW5IID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XHJcblx0bGV0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG5cdGlmKHJlY3QgPiAwICYmIHJlY3QgPCAoc2NyZWVuSC0oc2NyZWVuSC81KSkpe1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcbndpbmRvdy5pc1Zpc2libGUgPSBpc1Zpc2libGU7XHJcblxyXG59XHJcblxyXG53aW5kb3cudG9nZ2xlTWVudSA9IHRvZ2dsZU1lbnU7XHJcbndpbmRvdy50b2dnbGUgPSB0b2dnbGU7XHJcbndpbmRvdy5mYWRlVXAgPSBmYWRlVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=