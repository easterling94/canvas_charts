/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dots-logic.ts":
/*!***************************!*\
  !*** ./src/dots-logic.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDots\": () => (/* binding */ createDots)\n/* harmony export */ });\nconst createDots = () => {\r\n    let testDotsArr;\r\n    const random = Math.random();\r\n    console.log(random);\r\n    testDotsArr = [\r\n        {\r\n            x: 1,\r\n            y: 10,\r\n        },\r\n        {\r\n            x: 2,\r\n            y: 10,\r\n        },\r\n        {\r\n            x: 3,\r\n            y: 40,\r\n        },\r\n        {\r\n            x: 4,\r\n            y: 15,\r\n        },\r\n        {\r\n            x: 5,\r\n            y: 10,\r\n        }\r\n    ];\r\n    return testDotsArr;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG90cy1sb2dpYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBTU8sTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO0lBQzdCLElBQUksV0FBd0IsQ0FBQztJQUM3QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixXQUFXLEdBQUc7UUFDWjtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLEVBQUU7U0FDTjtRQUNEO1lBQ0UsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsRUFBRTtTQUNOO1FBQ0Q7WUFDRSxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxFQUFFO1NBQ047UUFDRDtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLEVBQUU7U0FDTjtRQUNEO1lBQ0UsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsRUFBRTtTQUNOO0tBQ0YsQ0FBQztJQUNGLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMvLi9zcmMvZG90cy1sb2dpYy50cz8zZjk0Il0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJRG90cyB7XHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEb3RzID0gKCkgPT4ge1xyXG4gIGxldCB0ZXN0RG90c0FycjpBcnJheTxJRG90cz47XHJcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICBjb25zb2xlLmxvZyhyYW5kb20pO1xyXG4gIHRlc3REb3RzQXJyID0gW1xyXG4gICAge1xyXG4gICAgICB4OiAxLFxyXG4gICAgICB5OiAxMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHg6IDIsXHJcbiAgICAgIHk6IDEwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgeDogMyxcclxuICAgICAgeTogNDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB4OiA0LFxyXG4gICAgICB5OiAxNSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHg6IDUsXHJcbiAgICAgIHk6IDEwLFxyXG4gICAgfVxyXG4gIF07XHJcbiAgcmV0dXJuIHRlc3REb3RzQXJyO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dots-logic.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dots_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dots-logic */ \"./src/dots-logic.ts\");\n\r\nconsole.log((0,_dots_logic__WEBPACK_IMPORTED_MODULE_0__.createDots)());\r\nconst chart = document.getElementById(\"chart\");\r\nconsole.log(chart);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBVSxFQUFFLENBQUM7QUFFekIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbnZhcy8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURvdHMgfSBmcm9tICcuL2RvdHMtbG9naWMnOyBcclxuXHJcbmNvbnNvbGUubG9nKGNyZWF0ZURvdHMoKSlcclxuXHJcbmNvbnN0IGNoYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydFwiKTtcclxuY29uc29sZS5sb2coY2hhcnQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;