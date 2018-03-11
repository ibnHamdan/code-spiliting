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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(num1, num2) {
  return num1 + num2;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(num1, num2) {
  return (num1*num2);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(num1, num2) {
  return num1 - num2;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(num1, num2) {
  return (num1/num2);
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const add = __webpack_require__(0);
const multi = __webpack_require__(1);
const divid = __webpack_require__(3);


  console.log(add(123,89), multi(102,465), divid(10,10))


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const add = __webpack_require__(0);
const sub = __webpack_require__(2);


console.log(add(102,465), sub(10,10))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const add = __webpack_require__(0);
const multi = __webpack_require__(1);
const sub = __webpack_require__(3);



function operations(num1, num2) {
  return console.log("sum: " + add(num1, num2), "multi: " + multi(num1, num2), "sub: " + sub(num1, num2))
}


/* harmony default export */ __webpack_exports__["default"] = (operations);
//////
function chunks(arr, size) {
  let output = [];
  for (let i = 0; i < arr.length; i += size) {
    output.push(arr.slice(i, i + size));
  }
  return output;
}

// Example:
chunks([1,2,3,4,5,6,7,8,9,10], 3);
// returns [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

function equals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Example:
equals([1,2,3,'hello'], [1,2,3,'hello']);
// returns true

function max(arr, gt) {
  return arr.slice(1).reduce((max, cur) => gt(max, cur)?max:cur, arr[0]);
}

// Example:
max([{i:0,v:1},{i:1,v:9},{i:2,v:-2}], (a, b) => a.v > b.v);
// returns {i:1, v:9}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}

// Example:
shuffle([1, 2, 3, 4])
// might return [2, 4, 1, 3] (or something)

function takeWhile(arr, f) {
  let ok = true;
  return arr.filter(e => ok && (ok = f(e)));
}

// Example:
takeWhile([1, 2, 3, 4], e => e < 3);
// returns [1, 2]





/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const add = __webpack_require__(0);
const operations = __webpack_require__(9)

console.log(add(10,87))

console.log(operations.default(12,12))


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const c1 = __webpack_require__(10);
const c2 = __webpack_require__(8);
const c3 = __webpack_require__(7);

/***/ })
/******/ ]);