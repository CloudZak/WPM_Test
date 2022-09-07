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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var words = ['Lorem', 'ipsum,', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Commodi', 'at', 'aliquid', 'est', 'perspiciatis', 'porro', 'deleniti', 'recusandae', 'quis', 'ex', 'ab', 'iste', 'quasi', 'odio', 'ad,', 'eius', 'soluta', 'excepturi', 'illo', 'similique', 'magnam', 'fugiat.', 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur,', 'adipisicing', 'elit.', 'Suscipit,', 'dolores', 'ipsum', 'dignissimos', 'perspiciatis', 'nostrum', 'molestias,', 'eius', 'quam', 'quasi', 'commodi', 'sint', 'labore', 'mollitia', 'beatae', 'corporis', 'animi,', 'excepturi', 'aspernatur', 'exercitationem', 'rem!', 'Ex?'];
var wrapperForWords = document.querySelector('.wordsWrapper');

for (var i = 0; i < words[0].length; i++) {
  wrapperForWords.innerHTML += "<letter>".concat(words[0][i], "</letter>");
}

var letterTags = document.querySelectorAll('letter');
var letterNum = 0;
var letter = words[0][letterNum];
var typing = false;
var randomWNum = 0;
var timerId;
var timerIdOut;
var timer = document.querySelector('.timer');
var seconds;
var result = 0;
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    typing = true;
    seconds = 60;
    timerId = setInterval(function () {
      timer.textContent = "".concat(seconds, "s");
      seconds -= 1;
    }, 1000);
    timerIdOut = setTimeout(function () {
      clearInterval(timerId);
      typing = false;
      console.log("Typing ".concat(result, " symbols per 1min"));
    }, 60000);
  } else if (e.key === 'Escape') {
    typing = false;
    clearInterval(timerId);
    clearTimeout(timerIdOut);
  }

  if (typing) {
    if (e.key === ' ') {
      SwitchWord();
    } else if (e.keyCode <= 47) {
      null;
    } else {
      watchLetter(e);
      result += 1;
    }
  }
});

var watchLetter = function watchLetter(ki) {
  if (ki.key == letter) {
    letterTags[letterNum].classList.add('letterRight');
    letterNum += 1;
    letter = words[randomWNum][letterNum];
  } else if (ki.key != letter) {
    letterTags[letterNum].classList.add('letterWorth');
    letterNum += 1;
    letter = words[randomWNum][letterNum];
  }
};

var SwitchWord = function SwitchWord() {
  randomWNum = Math.floor(Math.random() * (words.length - 1 + 1));
  wrapperForWords.innerHTML = '';

  for (var _i = 0; _i < words[randomWNum].length; _i++) {
    wrapperForWords.innerHTML += "<letter>".concat(words[randomWNum][_i], "</letter>");
  }

  letterTags = document.querySelectorAll('letter');
  letterNum = 0;
  letter = words[randomWNum][letterNum];
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map