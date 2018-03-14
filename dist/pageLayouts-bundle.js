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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./page-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./page-layout.js":
/*!************************!*\
  !*** ./page-layout.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const p1 = __webpack_require__(/*! ./src/page-layouts/p1 */ \"./src/page-layouts/p1.js\");\r\nconst p2 = __webpack_require__(/*! ./src/page-layouts/p2 */ \"./src/page-layouts/p2.js\");\r\n\n\n//# sourceURL=webpack:///./page-layout.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(num1, num2) {\r\n  return num1 + num2;\r\n}\n\n//# sourceURL=webpack:///./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/multi.js":
/*!******************************!*\
  !*** ./src/modules/multi.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(num1, num2) {\r\n  return (num1*num2);\r\n}\n\n//# sourceURL=webpack:///./src/modules/multi.js?");

/***/ }),

/***/ "./src/modules/sub.js":
/*!****************************!*\
  !*** ./src/modules/sub.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(num1, num2) {\r\n  return num1 - num2;\r\n}\n\n//# sourceURL=webpack:///./src/modules/sub.js?");

/***/ }),

/***/ "./src/page-layouts/p1.js":
/*!********************************!*\
  !*** ./src/page-layouts/p1.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const add = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\r\nconst sub = __webpack_require__(/*! ../modules/sub */ \"./src/modules/sub.js\");\r\n\r\n\r\nconsole.log(add(102,465), sub(10,10))\n\n//# sourceURL=webpack:///./src/page-layouts/p1.js?");

/***/ }),

/***/ "./src/page-layouts/p2.js":
/*!********************************!*\
  !*** ./src/page-layouts/p2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const add = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\r\nconst multi = __webpack_require__(/*! ../modules/multi */ \"./src/modules/multi.js\");\r\n\r\nconsole.log(add(4695,465), multi(102,465))\n\n//# sourceURL=webpack:///./src/page-layouts/p2.js?");

/***/ })

/******/ });