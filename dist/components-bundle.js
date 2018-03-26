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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components.js":
/*!***********************!*\
  !*** ./components.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_c1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/c1 */ \"./src/components/c1.js\");\n/* harmony import */ var _src_components_c2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/c2 */ \"./src/components/c2.js\");\n/* harmony import */ var _src_components_c3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/c3 */ \"./src/components/c3.js\");\n\r\n\r\n\r\n\r\nObject(_src_components_c1__WEBPACK_IMPORTED_MODULE_0__[\"c1\"])()\r\nObject(_src_components_c2__WEBPACK_IMPORTED_MODULE_1__[\"c2\"])()\r\nObject(_src_components_c3__WEBPACK_IMPORTED_MODULE_2__[\"c3\"])()\n\n//# sourceURL=webpack://operation/./components.js?");

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

/***/ "./src/components/c2.js":
/*!******************************!*\
  !*** ./src/components/c2.js ***!
  \******************************/
/*! exports provided: c2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c2\", function() { return c2; });\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/sub */ \"./src/modules/sub.js\");\n\r\n\r\n//import { Component } from 'preact';\r\n\r\n\r\nfunction c2() {\r\n  console.log(\"c2 :\" + Object(_modules_add__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(102,465), Object(_modules_sub__WEBPACK_IMPORTED_MODULE_1__[\"sub\"])(10,10))\r\n}\r\n\r\n\n\n//# sourceURL=webpack://operation/./src/components/c2.js?");

/***/ }),

/***/ "./src/components/c3.js":
/*!******************************!*\
  !*** ./src/components/c3.js ***!
  \******************************/
/*! exports provided: c3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c3\", function() { return c3; });\n/* harmony import */ var _modules_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_multi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/multi */ \"./src/modules/multi.js\");\n/* harmony import */ var _modules_divid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/divid */ \"./src/modules/divid.js\");\n\r\n\r\n\r\n\r\nfunction c3(){\r\n  console.log(\"c3: \" + Object(_modules_add__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(123,89), Object(_modules_multi__WEBPACK_IMPORTED_MODULE_1__[\"multi\"])(102,465), Object(_modules_divid__WEBPACK_IMPORTED_MODULE_2__[\"divid\"])(10,10));\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://operation/./src/components/c3.js?");

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

/***/ "./src/modules/divid.js":
/*!******************************!*\
  !*** ./src/modules/divid.js ***!
  \******************************/
/*! exports provided: divid, bake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divid\", function() { return divid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bake\", function() { return bake; });\nconst divid = function(num1, num2) {\r\n  return (num1/num2);\r\n}\r\nconst bake = () => console.log('bake');\r\n\r\n\n\n//# sourceURL=webpack://operation/./src/modules/divid.js?");

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

/***/ })

/******/ });