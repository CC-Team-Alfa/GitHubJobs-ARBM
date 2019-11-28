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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/images/harry-potter-3670411_1920.png":
/*!**************************************************!*\
  !*** ./src/images/harry-potter-3670411_1920.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "17fc74caf963d9883cfc6b8bde64c3eb.png");

/***/ }),

/***/ "./src/js/generateCharacterEndpoint.js":
/*!*********************************************!*\
  !*** ./src/js/generateCharacterEndpoint.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// function that generates a link 
function generateCharacterEndpoint(parameters) {
  var url = 'https://www.potterapi.com/v1/characters';
  var apiKey = "key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm";
  var param = "";

  for (var key in parameters) {
    var value = parameters[key];
    param += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }

  if (param.length > 0) {
    param = param.substring(0, param.length - 1);
    url = url + "?" + apiKey + "&" + param;
  }

  return url;
}

/* harmony default export */ __webpack_exports__["default"] = (generateCharacterEndpoint); //example
//generateCharacterEndpoint({"bloodStatus":"pure-blood", "role":"student"})
// -> "https://www.potterapi.com/v1/characters?key=$2a$10$SryMGjiskclp/nFOsb29Gu1yA9lM2mQwurU8YYNVf7CbzBi0QDwnm&bloodStatus=pure-blood&role=student"

/***/ }),

/***/ "./src/js/getCharacters.js":
/*!*********************************!*\
  !*** ./src/js/getCharacters.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generateCharacterEndpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateCharacterEndpoint */ "./src/js/generateCharacterEndpoint.js");
 // function returns array of characters with specified parameters

function getCharacters(parameters) {
  return fetch(Object(_generateCharacterEndpoint__WEBPACK_IMPORTED_MODULE_0__["default"])(parameters)).then(function (response) {
    return response.json();
  });
} // example
// getCharacters({house:'Gryffindor'}).then(array => console.log(array))


/* harmony default export */ __webpack_exports__["default"] = (getCharacters);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_harry_potter_3670411_1920_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/harry-potter-3670411_1920.png */ "./src/images/harry-potter-3670411_1920.png");
/* harmony import */ var _generateCharacterEndpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateCharacterEndpoint */ "./src/js/generateCharacterEndpoint.js");
/* harmony import */ var _getCharacters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCharacters */ "./src/js/getCharacters.js");





var a = Object(_getCharacters__WEBPACK_IMPORTED_MODULE_3__["default"])({
  house: 'Gryffindor'
}).then(function (data) {
  return console.log(data);
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map