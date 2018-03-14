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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const c1 = __webpack_require__(/*! ./src/components/c1 */ \"./src/components/c1.js\");\r\nconst c2 = __webpack_require__(/*! ./src/components/c2 */ \"./src/components/c2.js\");\r\nconst c3 = __webpack_require__(/*! ./src/components/c3 */ \"./src/components/c3.js\");\n\n//# sourceURL=webpack:///./components.js?");

/***/ }),

/***/ "./src/components/c1.js":
/*!******************************!*\
  !*** ./src/components/c1.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const add = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\r\nconst operations = __webpack_require__(/*! ../modules/operations */ \"./src/modules/operations.js\")\r\n\r\nconsole.log(add(10,87))\r\n\r\nconsole.log(operations.default(12,12))\r\n\n\n//# sourceURL=webpack:///./src/components/c1.js?");

/***/ }),

/***/ "./src/components/c2.js":
/*!******************************!*\
  !*** ./src/components/c2.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const add = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\r\nconst sub = __webpack_require__(/*! ../modules/sub */ \"./src/modules/sub.js\");\r\n\r\n\r\nconsole.log(add(102,465), sub(10,10))\n\n//# sourceURL=webpack:///./src/components/c2.js?");

/***/ }),

/***/ "./src/components/c3.js":
/*!******************************!*\
  !*** ./src/components/c3.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const add = __webpack_require__(/*! ../modules/add */ \"./src/modules/add.js\");\r\nconst multi = __webpack_require__(/*! ../modules/multi */ \"./src/modules/multi.js\");\r\nconst divid = __webpack_require__(/*! ../modules/divid */ \"./src/modules/divid.js\");\r\n\r\n\r\n  console.log(add(123,89), multi(102,465), divid(10,10))\r\n\n\n//# sourceURL=webpack:///./src/components/c3.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(num1, num2) {\r\n  return num1 + num2;\r\n}\n\n//# sourceURL=webpack:///./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/divid.js":
/*!******************************!*\
  !*** ./src/modules/divid.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(num1, num2) {\r\n  return (num1/num2);\r\n}\n\n//# sourceURL=webpack:///./src/modules/divid.js?");

/***/ }),

/***/ "./src/modules/multi.js":
/*!******************************!*\
  !*** ./src/modules/multi.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(num1, num2) {\r\n  return (num1*num2);\r\n}\n\n//# sourceURL=webpack:///./src/modules/multi.js?");

/***/ }),

/***/ "./src/modules/operations.js":
/*!***********************************!*\
  !*** ./src/modules/operations.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst add = __webpack_require__(/*! ./add */ \"./src/modules/add.js\");\r\nconst multi = __webpack_require__(/*! ./multi */ \"./src/modules/multi.js\");\r\nconst sub = __webpack_require__(/*! ./divid */ \"./src/modules/divid.js\");\r\n\r\n\r\n\r\nfunction operations(num1, num2) {\r\n  return console.log(\"sum: \" + add(num1, num2), \"multi: \" + multi(num1, num2), \"sub: \" + sub(num1, num2))\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (operations);\r\n//////\r\n// function chunks(arr, size) {\r\n//   let output = [];\r\n//   for (let i = 0; i < arr.length; i += size) {\r\n//     output.push(arr.slice(i, i + size));\r\n//   }\r\n//   return output;\r\n// }\r\n\r\n// chunks([1,2,3,4,5,6,7,8,9,10], 3);\r\n\r\n// function equals(arr1, arr2) {\r\n//   if (arr1.length !== arr2.length) return false;\r\n//   for (let i in arr1) {\r\n//     if (arr1[i] !== arr2[i]) return false;\r\n//   }\r\n//   return true;\r\n// }\r\n// equals([1,2,3,'hello'], [1,2,3,'hello']);\r\n\r\n// function max(arr, gt) {\r\n//   return arr.slice(1).reduce((max, cur) => gt(max, cur)?max:cur, arr[0]);\r\n// }\r\n// max([{i:0,v:1},{i:1,v:9},{i:2,v:-2}], (a, b) => a.v > b.v);\r\n\r\n\r\n// function shuffle(arr) {\r\n//   const a = arr.slice();\r\n//   for (let i = a.length; i; i--) {\r\n//     let j = Math.floor(Math.random() * i);\r\n//     [a[i - 1], a[j]] = [a[j], a[i - 1]];\r\n//   }\r\n//   return a;\r\n// }\r\n// shuffle([1, 2, 3, 4])\r\n// // might return [2, 4, 1, 3] (or something)\r\n\r\n// function takeWhile(arr, f) {\r\n//   let ok = true;\r\n//   return arr.filter(e => ok && (ok = f(e)));\r\n// }\r\n// takeWhile([1, 2, 3, 4], e => e < 3);\r\n// // returns [1, 2]\r\n\r\n// function unique(arr, f) {\r\n//   const vArr = arr.map(f);\r\n//   return arr.filter((_, i) => vArr.indexOf(vArr[i]) === i);\r\n// }\r\n// unique([{i:0,v:2},{i:1,v:3},{i:2,v:2}], e => e.v);\r\n// // returns [{i:0,v:2},{i:1,v:3}]\r\n\r\n// function zip(...arrs) {\r\n//   const resultLength = Math.min(...arrs.map(a => a.length));\r\n//   return new Array(resultLength)\r\n//     .fill(0)\r\n//     .map((_, i) => arrs.map(a => a[i]));\r\n// }\r\n// zip([1, 2, 3], [4, 5, 6], [7, 8, 9]);\r\n// // returns [[1,4,7], [2,5,8], [3,6,9]]\r\n\r\n// ///\r\n\n\n//# sourceURL=webpack:///./src/modules/operations.js?");

/***/ }),

/***/ "./src/modules/sub.js":
/*!****************************!*\
  !*** ./src/modules/sub.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(num1, num2) {\r\n  return num1 - num2;\r\n}\n\n//# sourceURL=webpack:///./src/modules/sub.js?");

/***/ })

/******/ });