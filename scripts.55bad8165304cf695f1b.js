/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 75:
/***/ (function() {

eval(" // import $ from 'jquery' //Если она не нужна то закоммить====\n// =========================================================\n// const userStack = {\n// \tlanguage: 'JavaScript',\n// \tframework: 'Angular',\n// }\n// const user = {\n// \tname: 'Michael',\n// \tage: '30',\n// \t...userStack\n// }\n// console.log(user)\n// =========================================================\n// $('.jquery').html('jquery work!')\n// ### #toggle-menu\n\nwindow.onload = function () {\n  var menu = document.querySelector('#toggle-menu');\n  var navigation = document.querySelector('#navigation');\n  var main = document.querySelector('#main');\n  menu.addEventListener('click', function (e) {\n    // console.log(e.eventPhase + 'menu')\n    // if (e.eventPhase === 2) {\n    // console.log('menu')\n    // console.log(e.target)\n    // }\n    menu.classList.toggle('active');\n    navigation.classList.toggle('active');\n    main.classList.toggle('active');\n  }); // menu.click() //test\n  //   let svg = document.querySelector('#svg')\n  //   svg.addEventListener(\n  //     'click',\n  //     (e) => {\n  //       console.log(e.eventPhase + 'svg')\n  //       if (e.eventPhase === 2) {\n  //         console.log('svg')\n  //         console.log(e.target)\n  //       }\n  //     }\n  //   )\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrNS10YWlsd2luZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvaW5kZXgucGNzcydcblxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JyAvL9CV0YHQu9C4INC+0L3QsCDQvdC1INC90YPQttC90LAg0YLQviDQt9Cw0LrQvtC80LzQuNGC0Yw9PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gY29uc3QgdXNlclN0YWNrID0ge1xuLy8gXHRsYW5ndWFnZTogJ0phdmFTY3JpcHQnLFxuLy8gXHRmcmFtZXdvcms6ICdBbmd1bGFyJyxcbi8vIH1cbi8vIGNvbnN0IHVzZXIgPSB7XG4vLyBcdG5hbWU6ICdNaWNoYWVsJyxcbi8vIFx0YWdlOiAnMzAnLFxuLy8gXHQuLi51c2VyU3RhY2tcbi8vIH1cblxuLy8gY29uc29sZS5sb2codXNlcilcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gJCgnLmpxdWVyeScpLmh0bWwoJ2pxdWVyeSB3b3JrIScpXG5cbi8vICMjIyAjdG9nZ2xlLW1lbnVcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1tZW51JylcbiAgbGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbicpXG4gIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKVxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlLmV2ZW50UGhhc2UgKyAnbWVudScpXG4gICAgLy8gaWYgKGUuZXZlbnRQaGFzZSA9PT0gMikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdtZW51JylcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAvLyB9XG5cdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRcdG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblx0XHRtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gIH0pXG4gIC8vIG1lbnUuY2xpY2soKSAvL3Rlc3RcblxuICAvLyAgIGxldCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ZnJylcbiAgLy8gICBzdmcuYWRkRXZlbnRMaXN0ZW5lcihcbiAgLy8gICAgICdjbGljaycsXG4gIC8vICAgICAoZSkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhlLmV2ZW50UGhhc2UgKyAnc3ZnJylcbiAgLy8gICAgICAgaWYgKGUuZXZlbnRQaGFzZSA9PT0gMikge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdzdmcnKVxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///75\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[75]();
/******/ 	
/******/ })()
;