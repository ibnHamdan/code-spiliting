var operation =
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
/*! exports provided: p1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_page_layouts_p1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/page-layouts/p1 */ \"./src/page-layouts/p1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"p1\", function() { return _src_page_layouts_p1__WEBPACK_IMPORTED_MODULE_0__[\"p1\"]; });\n\n/* harmony import */ var _src_page_layouts_p2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/page-layouts/p2 */ \"./src/page-layouts/p2.js\");\n/* harmony import */ var _src_page_layouts_p3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/page-layouts/p3 */ \"./src/page-layouts/p3.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://operation/./page-layout.js?");

/***/ }),

/***/ "./src/components/c1.js":
/*!******************************!*\
  !*** ./src/components/c1.js ***!
  \******************************/
/*! exports provided: c1, c11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c1\", function() { return c1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c11\", function() { return c11; });\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/multi */ \"./src/modules/multi.js\");\n/* harmony import */ var _modules_sub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/sub */ \"./src/modules/sub.js\");\n\r\n\r\n\r\n\r\nconst c11 = 30;\r\n//const {operations} = require('../modules/operations')\r\n\r\nfunction c1() {\r\n  console.log(\"c1 :\" + Object(_modules_add__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(11,11) + \" multi: \" + Object(_modules_multi__WEBPACK_IMPORTED_MODULE_1__[\"multi\"])(11, 11)+ \" sub: \" + Object(_modules_sub__WEBPACK_IMPORTED_MODULE_2__[\"sub\"])(11, 11)\r\n)\r\n}\r\n\n\n//# sourceURL=webpack://operation/./src/components/c1.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nfunction add(num1, num2) {\r\n  return num1 + num2;\r\n}\n\n//# sourceURL=webpack://operation/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/multi.js":
/*!******************************!*\
  !*** ./src/modules/multi.js ***!
  \******************************/
/*! exports provided: multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multi\", function() { return multi; });\nfunction multi(num1, num2) {\r\n  return num2 * num1;\r\n}\n\n//# sourceURL=webpack://operation/./src/modules/multi.js?");

/***/ }),

/***/ "./src/modules/sub.js":
/*!****************************!*\
  !*** ./src/modules/sub.js ***!
  \****************************/
/*! exports provided: sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\nfunction sub(num1, num2) {\r\n  return num1 - num2;\r\n}\n\n//# sourceURL=webpack://operation/./src/modules/sub.js?");

/***/ }),

/***/ "./src/page-layouts/p1.js":
/*!********************************!*\
  !*** ./src/page-layouts/p1.js ***!
  \********************************/
/*! exports provided: p1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p1\", function() { return p1; });\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/sub */ \"./src/modules/sub.js\");\n/* harmony import */ var _components_c1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/c1 */ \"./src/components/c1.js\");\n\r\n\r\n\r\n\r\n\r\nfunction p1() {\r\n  console.log(\"p1: \"+Object(_modules_add__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(_components_c1__WEBPACK_IMPORTED_MODULE_2__[\"c11\"],465), Object(_modules_sub__WEBPACK_IMPORTED_MODULE_1__[\"sub\"])(10,10) )\r\n}\r\n\n\n//# sourceURL=webpack://operation/./src/page-layouts/p1.js?");

/***/ }),

/***/ "./src/page-layouts/p2.js":
/*!********************************!*\
  !*** ./src/page-layouts/p2.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/multi */ \"./src/modules/multi.js\");\n\r\n\r\n\r\nconsole.log(\"p2: \"+ Object(_modules_add__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(40,10), Object(_modules_multi__WEBPACK_IMPORTED_MODULE_1__[\"multi\"])(10,10))\r\nconst p2 =15\r\n\r\n\n\n//# sourceURL=webpack://operation/./src/page-layouts/p2.js?");

/***/ }),

/***/ "./src/page-layouts/p3.js":
/*!********************************!*\
  !*** ./src/page-layouts/p3.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//import { Component } from 'preact';\r\n//import { union } from 'lodash'\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"p3\");\n\n//# sourceURL=webpack://operation/./src/page-layouts/p3.js?");

/***/ })

/******/ });