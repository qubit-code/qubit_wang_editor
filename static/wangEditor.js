(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wangEditor"] = factory();
	else
		root["wangEditor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 146);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? DOM ??????
 * @wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _isArray = _interopRequireDefault(__webpack_require__(96));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _map = _interopRequireDefault(__webpack_require__(27));

var _trim = _interopRequireDefault(__webpack_require__(16));

var _map2 = _interopRequireDefault(__webpack_require__(125));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

var _splice = _interopRequireDefault(__webpack_require__(99));

var _filter = _interopRequireDefault(__webpack_require__(76));

var _includes = _interopRequireDefault(__webpack_require__(46));

var _bind = _interopRequireDefault(__webpack_require__(61));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.DomElement = void 0;

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var AGENT_EVENTS = [];
/**
 * ?????? html ??????????????? elem
 * @param {String} html html
 */

function _createElemByHTML(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  var elems = div.children;
  return util_1.toArray(elems);
}
/**
 * ??????????????? DOM List
 * @param selector DOM ???????????????
 */


function _isDOMList(selector) {
  if (!selector) {
    return false;
  }

  if (selector instanceof HTMLCollection || selector instanceof NodeList) {
    return true;
  }

  return false;
}
/**
 * ?????? querySelectorAll
 * @param selector css ?????????
 */


function _querySelectorAll(selector) {
  var elems = document.querySelectorAll(selector);
  return util_1.toArray(elems);
}
/**
 * ?????? _styleArrTrim
 * @param styleArr css
 */


function _styleArrTrim(style) {
  var styleArr = [];
  var resultArr = [];

  if (!(0, _isArray["default"])(style)) {
    // ??? style?????? style ?????? `;` ???????????????
    styleArr = style.split(';');
  } else {
    styleArr = style;
  }

  (0, _forEach["default"])(styleArr).call(styleArr, function (item) {
    var _context;

    // ???????????????????????? : ????????? key ??? value
    var arr = (0, _map["default"])(_context = item.split(':')).call(_context, function (i) {
      return (0, _trim["default"])(i).call(i);
    });

    if (arr.length === 2) {
      resultArr.push(arr[0] + ':' + arr[1]);
    }
  });
  return resultArr;
} // ????????????


var DomElement = function () {
  /**
   * ????????????
   * @param selector ????????????????????????
   */
  function DomElement(selector) {
    // ???????????????
    this.elems = [];
    this.length = this.elems.length;
    this.dataSource = new _map2["default"]();

    if (!selector) {
      return;
    } // ???????????? DomElement ????????????????????????


    if (selector instanceof DomElement) {
      return selector;
    }

    var selectorResult = []; // ??????????????????

    var nodeType = selector instanceof Node ? selector.nodeType : -1;
    this.selector = selector;

    if (nodeType === 1 || nodeType === 9) {
      selectorResult = [selector];
    } else if (_isDOMList(selector)) {
      // DOM List
      selectorResult = util_1.toArray(selector);
    } else if (selector instanceof Array) {
      // Element ?????????????????????????????????????????????
      selectorResult = selector;
    } else if (typeof selector === 'string') {
      var _context2;

      // ?????????
      var tmpSelector = (0, _trim["default"])(_context2 = selector.replace('/\n/mg', '')).call(_context2);

      if ((0, _indexOf["default"])(tmpSelector).call(tmpSelector, '<') === 0) {
        // ??? <div>
        selectorResult = _createElemByHTML(tmpSelector);
      } else {
        // ??? #id .class
        selectorResult = _querySelectorAll(tmpSelector);
      }
    }

    var length = selectorResult.length;

    if (!length) {
      // ?????????
      return this;
    } // ?????? DOM ??????


    var i = 0;

    for (; i < length; i++) {
      this.elems.push(selectorResult[i]);
    }

    this.length = length;
  }

  (0, _defineProperty["default"])(DomElement.prototype, "id", {
    /**
     * ???????????? id
     */
    get: function get() {
      return this.elems[0].id;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ???????????????????????????????????????
   * @param fn ????????????
   */

  DomElement.prototype.forEach = function (fn) {
    for (var i = 0; i < this.length; i++) {
      var elem = this.elems[i];
      var result = fn.call(elem, elem, i);

      if (result === false) {
        break;
      }
    }

    return this;
  };
  /**
   * ????????????
   * @param deep ??????????????????
   */


  DomElement.prototype.clone = function (deep) {
    var _context3;

    if (deep === void 0) {
      deep = false;
    }

    var cloneList = [];
    (0, _forEach["default"])(_context3 = this.elems).call(_context3, function (elem) {
      cloneList.push(elem.cloneNode(!!deep));
    });
    return $(cloneList);
  };
  /**
   * ?????????????????????
   * @param index index
   */


  DomElement.prototype.get = function (index) {
    if (index === void 0) {
      index = 0;
    }

    var length = this.length;

    if (index >= length) {
      index = index % length;
    }

    return $(this.elems[index]);
  };
  /**
   * ?????????????????????
   */


  DomElement.prototype.first = function () {
    return this.get(0);
  };
  /**
   * ????????????????????????
   */


  DomElement.prototype.last = function () {
    var length = this.length;
    return this.get(length - 1);
  };

  DomElement.prototype.on = function (type, selector, fn) {
    var _context4;

    if (!type) return this; // ?????? selector ????????? type ??? fn

    if (typeof selector === 'function') {
      fn = selector;
      selector = '';
    }

    return (0, _forEach["default"])(_context4 = this).call(_context4, function (elem) {
      // ??????????????????
      if (!selector) {
        // ?????????
        elem.addEventListener(type, fn);
        return;
      } // ???????????????


      var agentFn = function agentFn(e) {
        var target = e.target;

        if (target.matches(selector)) {
          ;
          fn.call(target, e);
        }
      };

      elem.addEventListener(type, agentFn); // ??????????????????

      AGENT_EVENTS.push({
        elem: elem,
        selector: selector,
        fn: fn,
        agentFn: agentFn
      });
    });
  };

  DomElement.prototype.off = function (type, selector, fn) {
    var _context5;

    if (!type) return this; // ?????? selector ????????? type ??? fn

    if (typeof selector === 'function') {
      fn = selector;
      selector = '';
    }

    return (0, _forEach["default"])(_context5 = this).call(_context5, function (elem) {
      // ??????????????????
      if (selector) {
        var idx = -1;

        for (var i = 0; i < AGENT_EVENTS.length; i++) {
          var item = AGENT_EVENTS[i];

          if (item.selector === selector && item.fn === fn && item.elem === elem) {
            idx = i;
            break;
          }
        }

        if (idx !== -1) {
          var agentFn = (0, _splice["default"])(AGENT_EVENTS).call(AGENT_EVENTS, idx, 1)[0].agentFn;
          elem.removeEventListener(type, agentFn);
        }
      } else {
        // @ts-ignore
        elem.removeEventListener(type, fn);
      }
    });
  };

  DomElement.prototype.attr = function (key, val) {
    var _context6;

    if (val == null) {
      // ????????????
      return this.elems[0].getAttribute(key) || '';
    } // ?????????????????????


    return (0, _forEach["default"])(_context6 = this).call(_context6, function (elem) {
      elem.setAttribute(key, val);
    });
  };
  /**
   * ?????? ??????
   * @param key key
   */


  DomElement.prototype.removeAttr = function (key) {
    var _context7;

    (0, _forEach["default"])(_context7 = this).call(_context7, function (elem) {
      elem.removeAttribute(key);
    });
  };
  /**
   * ?????? css class
   * @param className css class
   */


  DomElement.prototype.addClass = function (className) {
    var _context8;

    if (!className) {
      return this;
    }

    return (0, _forEach["default"])(_context8 = this).call(_context8, function (elem) {
      if (elem.className) {
        // ????????? class
        var arr = elem.className.split(/\s/);
        arr = (0, _filter["default"])(arr).call(arr, function (item) {
          return !!(0, _trim["default"])(item).call(item);
        }); // ?????? class

        if ((0, _indexOf["default"])(arr).call(arr, className) < 0) {
          arr.push(className);
        } // ?????? elem.class


        elem.className = arr.join(' ');
      } else {
        // ???????????? class
        elem.className = className;
      }
    });
  };
  /**
   * ?????? css class
   * @param className css class
   */


  DomElement.prototype.removeClass = function (className) {
    var _context9;

    if (!className) {
      return this;
    }

    return (0, _forEach["default"])(_context9 = this).call(_context9, function (elem) {
      if (!elem.className) {
        // ????????? class
        return;
      }

      var arr = elem.className.split(/\s/);
      arr = (0, _filter["default"])(arr).call(arr, function (item) {
        item = (0, _trim["default"])(item).call(item); // ?????? class

        if (!item || item === className) {
          return false;
        }

        return true;
      }); // ?????? elem.class

      elem.className = arr.join(' ');
    });
  };
  /**
   * ?????????????????? css class
   * @param className css class
   */


  DomElement.prototype.hasClass = function (className) {
    if (!className) {
      return false;
    }

    var elem = this.elems[0];

    if (!elem.className) {
      // ????????? class
      return false;
    }

    var arr = elem.className.split(/\s/);
    return (0, _includes["default"])(arr).call(arr, className); // ????????????
  };
  /**
   * ?????? css
   * @param key css key
   * @param val css value
   */
  // css(key: string): string


  DomElement.prototype.css = function (key, val) {
    var _context10;

    var currentStyle;

    if (val == '') {
      currentStyle = '';
    } else {
      currentStyle = key + ":" + val + ";";
    }

    return (0, _forEach["default"])(_context10 = this).call(_context10, function (elem) {
      var _context11;

      var style = (0, _trim["default"])(_context11 = elem.getAttribute('style') || '').call(_context11);

      if (style) {
        // ??? style?????? style ?????? `;` ???????????????
        var resultArr = _styleArrTrim(style); // ??????????????? style


        resultArr = (0, _map["default"])(resultArr).call(resultArr, function (item) {
          if ((0, _indexOf["default"])(item).call(item, key) === 0) {
            return currentStyle;
          } else {
            return item;
          }
        }); // ?????? style

        if (currentStyle != '' && (0, _indexOf["default"])(resultArr).call(resultArr, currentStyle) < 0) {
          resultArr.push(currentStyle);
        } // ?????? ??????


        if (currentStyle == '') {
          resultArr = _styleArrTrim(resultArr);
        } // ???????????? style


        elem.setAttribute('style', resultArr.join('; '));
      } else {
        // ???????????? style
        elem.setAttribute('style', currentStyle);
      }
    });
  };
  /**
   * ?????? getBoundingClientRect
   */


  DomElement.prototype.getBoundingClientRect = function () {
    var elem = this.elems[0];
    return elem.getBoundingClientRect();
  };
  /**
   * ??????
   */


  DomElement.prototype.show = function () {
    return this.css('display', 'block');
  };
  /**
   * ??????
   */


  DomElement.prototype.hide = function () {
    return this.css('display', 'none');
  };
  /**
   * ???????????????????????? DOM ?????????
   */


  DomElement.prototype.children = function () {
    var elem = this.elems[0];

    if (!elem) {
      return null;
    }

    return $(elem.children);
  };
  /**
   * ???????????????????????????????????????
   */


  DomElement.prototype.childNodes = function () {
    var elem = this.elems[0];

    if (!elem) {
      return null;
    }

    return $(elem.childNodes);
  };
  /**
   * ????????????????????????
   * @param $children ??????child??????
   */


  DomElement.prototype.replaceChildAll = function ($children) {
    var parent = this.getNode();
    var elem = this.elems[0];

    while (elem.hasChildNodes()) {
      parent.firstChild && elem.removeChild(parent.firstChild);
    }

    this.append($children);
  };
  /**
   * ???????????????
   * @param $children ?????????
   */


  DomElement.prototype.append = function ($children) {
    var _context12;

    return (0, _forEach["default"])(_context12 = this).call(_context12, function (elem) {
      (0, _forEach["default"])($children).call($children, function (child) {
        elem.appendChild(child);
      });
    });
  };
  /**
   * ??????????????????
   */


  DomElement.prototype.remove = function () {
    var _context13;

    return (0, _forEach["default"])(_context13 = this).call(_context13, function (elem) {
      if (elem.remove) {
        elem.remove();
      } else {
        var parent_1 = elem.parentElement;
        parent_1 && parent_1.removeChild(elem);
      }
    });
  };
  /**
   * ??????????????????????????????????????????
   * @param $child ?????????
   */


  DomElement.prototype.isContain = function ($child) {
    var elem = this.elems[0];
    var child = $child.elems[0];
    return elem.contains(child);
  };
  /**
   * ?????????????????? nodeName
   */


  DomElement.prototype.getNodeName = function () {
    var elem = this.elems[0];
    return elem.nodeName;
  };
  /**
   * ???????????????????????????????????????????????????0??????????????????
   * @param n ??????????????????
   */


  DomElement.prototype.getNode = function (n) {
    if (n === void 0) {
      n = 0;
    }

    var elem;
    elem = this.elems[n];
    return elem;
  };
  /**
   * ??????
   * @param selector css ?????????
   */


  DomElement.prototype.find = function (selector) {
    var elem = this.elems[0];
    return $(elem.querySelectorAll(selector));
  };

  DomElement.prototype.text = function (val) {
    if (!val) {
      // ?????? text
      var elem = this.elems[0];
      return elem.innerHTML.replace(/<[^>]+>/g, function () {
        return '';
      });
    } else {
      var _context14;

      // ?????? text
      return (0, _forEach["default"])(_context14 = this).call(_context14, function (elem) {
        elem.innerHTML = val;
      });
    }
  };

  DomElement.prototype.html = function (val) {
    var elem = this.elems[0];

    if (!val) {
      // ?????? html
      return elem.innerHTML;
    } else {
      // ?????? html
      elem.innerHTML = val;
      return this;
    }
  };
  /**
   * ???????????? value
   */


  DomElement.prototype.val = function () {
    var _context15;

    var elem = this.elems[0];
    return (0, _trim["default"])(_context15 = elem.value).call(_context15); // ?????? any
  };
  /**
   * focus ???????????????
   */


  DomElement.prototype.focus = function () {
    var _context16;

    return (0, _forEach["default"])(_context16 = this).call(_context16, function (elem) {
      elem.focus();
    });
  };
  /**
   * ?????????????????????????????????
   */


  DomElement.prototype.prev = function () {
    var elem = this.elems[0];
    return $(elem.previousElementSibling);
  };
  /**
   * ?????????????????????????????????
   * ???????????????????????????????????????
   */


  DomElement.prototype.next = function () {
    var elem = this.elems[0];
    return $(elem.nextElementSibling);
  };
  /**
   * ??????????????????????????????????????????
   * ??????????????????????????????????????????????????????????????????????????????
   */


  DomElement.prototype.getNextSibling = function () {
    var elem = this.elems[0];
    return $(elem.nextSibling);
  };
  /**
   * ???????????????
   */


  DomElement.prototype.parent = function () {
    var elem = this.elems[0];
    return $(elem.parentElement);
  };
  /**
   * ?????????????????????????????? selector ??????
   * @param selector css ?????????
   * @param curElem ???????????????????????????????????????????????????
   */


  DomElement.prototype.parentUntil = function (selector, curElem) {
    var elem = curElem || this.elems[0];

    if (elem.nodeName === 'BODY') {
      return null;
    }

    var parent = elem.parentElement;

    if (parent === null) {
      return null;
    }

    if (parent.matches(selector)) {
      // ??????????????????
      return $(parent);
    } // ?????????????????????


    return this.parentUntil(selector, parent);
  };
  /**
   * ?????????????????????????????? selector ??????,?????? ?????? ???????????????????????????????????????
   * @param selector css ?????????
   * @param curElem ???????????????????????????????????????????????????
   */


  DomElement.prototype.parentUntilEditor = function (selector, editor, curElem) {
    var elem = curElem || this.elems[0];

    if ($(elem).equal(editor.$textContainerElem) || $(elem).equal(editor.$toolbarElem)) {
      return null;
    }

    var parent = elem.parentElement;

    if (parent === null) {
      return null;
    }

    if (parent.matches(selector)) {
      // ??????????????????
      return $(parent);
    } // ?????????????????????


    return this.parentUntilEditor(selector, editor, parent);
  };
  /**
   * ??????????????????
   * @param $elem ??????
   */


  DomElement.prototype.equal = function ($elem) {
    if ($elem instanceof DomElement) {
      return this.elems[0] === $elem.elems[0];
    } else if ($elem instanceof HTMLElement) {
      return this.elems[0] === $elem;
    } else {
      return false;
    }
  };
  /**
   * ???????????????????????????????????????
   * @param selector css ?????????
   */


  DomElement.prototype.insertBefore = function (selector) {
    var _context17;

    var $referenceNode = $(selector);
    var referenceNode = $referenceNode.elems[0];

    if (!referenceNode) {
      return this;
    }

    return (0, _forEach["default"])(_context17 = this).call(_context17, function (elem) {
      var parent = referenceNode.parentNode;
      parent === null || parent === void 0 ? void 0 : parent.insertBefore(elem, referenceNode);
    });
  };
  /**
   * ?????????????????????selector????????????
   * @param selector css ?????????
   */


  DomElement.prototype.insertAfter = function (selector) {
    var _context18;

    var $referenceNode = $(selector);
    var referenceNode = $referenceNode.elems[0];
    var anchorNode = referenceNode && referenceNode.nextSibling;

    if (!referenceNode) {
      return this;
    }

    return (0, _forEach["default"])(_context18 = this).call(_context18, function (elem) {
      var parent = referenceNode.parentNode;

      if (anchorNode) {
        parent.insertBefore(elem, anchorNode);
      } else {
        parent.appendChild(elem);
      }
    });
  };
  /**
   * ??????/?????? ??????
   * @param key key
   * @param value value
   */


  DomElement.prototype.data = function (key, value) {
    if (value != null) {
      // ????????????
      this.dataSource.set(key, value);
    } else {
      // ????????????
      return this.dataSource.get(key);
    }
  };
  /**
   * ???????????????????????????(??????)
   * @param editor ???????????????
   */


  DomElement.prototype.getNodeTop = function (editor) {
    // ????????????????????? DomElement ????????????
    if (this.length < 1) {
      return this;
    } // ??????????????????????????????????????? ????????????
    // ??????????????????????????????


    var $parent = this.parent(); // fix????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

    if (editor.$textElem.equal(this) || editor.$textElem.equal($parent)) {
      return this;
    } // ??????????????????????????????????????????????????????
    // ???????????????????????????????????? prior ?????????
    // ???????????? ?????? ?????????
    // ?????????ul ol ?????????
    // ???????????????????????? li ???????????? ul ol ???????????????????????????
    // ???????????????????????? ?????? ????????????????????????


    $parent.prior = this;
    return $parent.getNodeTop(editor);
  };
  /**
   * ???????????? ?????? ??????????????????????????????????????????????????????????????????
   * @param editor ???????????????
   */


  DomElement.prototype.getOffsetData = function () {
    var $node = this.elems[0];
    return {
      top: $node.offsetTop,
      left: $node.offsetLeft,
      width: $node.offsetWidth,
      height: $node.offsetHeight,
      parent: $node.offsetParent
    };
  };
  /**
   * ????????????????????????
   * @param top ????????????
   */


  DomElement.prototype.scrollTop = function (top) {
    var $node = this.elems[0];
    $node.scrollTo({
      top: top
    });
  };

  return DomElement;
}();

exports.DomElement = DomElement; // new ????????????

function $() {
  var arg = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arg[_i] = arguments[_i];
  }

  return new ((0, _bind["default"])(DomElement).apply(DomElement, tslib_1.__spreadArray([void 0], arg)))();
}

exports["default"] = $;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(77).f;
var isForced = __webpack_require__(109);
var path = __webpack_require__(11);
var bind = __webpack_require__(40);
var createNonEnumerableProperty = __webpack_require__(19);
var has = __webpack_require__(17);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(100));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _parseInt2 = _interopRequireDefault(__webpack_require__(271));

var _slice = _interopRequireDefault(__webpack_require__(47));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(48));

var _isArray = _interopRequireDefault(__webpack_require__(96));

var _map = _interopRequireDefault(__webpack_require__(27));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.hexToRgb = exports.getRandomCode = exports.toArray = exports.deepClone = exports.isFunction = exports.debounce = exports.throttle = exports.arrForEach = exports.forEach = exports.replaceSpecialSymbol = exports.replaceHtmlSymbol = exports.getRandom = exports.UA = void 0;

var tslib_1 = __webpack_require__(2);

var NavUA = function () {
  function NavUA() {
    this._ua = navigator.userAgent;

    var math = this._ua.match(/(Edge?)\/(\d+)/);

    this.isOldEdge = math && math[1] == 'Edge' && (0, _parseInt2["default"])(math[2]) < 19 ? true : false;
    this.isFirefox = /Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua) ? true : false;
  } // ????????? IE


  NavUA.prototype.isIE = function () {
    return 'ActiveXObject' in window;
  }; // ????????? webkit


  NavUA.prototype.isWebkit = function () {
    return /webkit/i.test(this._ua);
  };

  return NavUA;
}(); // ??? UA ???????????????


exports.UA = new NavUA();
/**
 * ??????????????????
 * @param prefix ??????
 */

function getRandom(prefix) {
  var _context;

  if (prefix === void 0) {
    prefix = '';
  }

  return prefix + (0, _slice["default"])(_context = Math.random().toString()).call(_context, 2);
}

exports.getRandom = getRandom;
/**
 * ?????? html ????????????
 * @param html html ?????????
 */

function replaceHtmlSymbol(html) {
  return html.replace(/</gm, '&lt;').replace(/>/gm, '&gt;').replace(/"/gm, '&quot;').replace(/(\r\n|\r|\n)/g, '<br/>');
}

exports.replaceHtmlSymbol = replaceHtmlSymbol;

function replaceSpecialSymbol(value) {
  return value.replace(/&lt;/gm, '<').replace(/&gt;/gm, '>').replace(/&quot;/gm, '"');
}

exports.replaceSpecialSymbol = replaceSpecialSymbol;

function forEach(obj, fn) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var result = fn(key, obj[key]);

      if (result === false) {
        // ??????????????????
        break;
      }
    }
  }
}

exports.forEach = forEach;
/**
 * ???????????????
 * @param fakeArr ?????????
 * @param fn ????????????
 */

function arrForEach(fakeArr, fn) {
  var i, item, result;
  var length = fakeArr.length || 0;

  for (i = 0; i < length; i++) {
    item = fakeArr[i];
    result = fn.call(fakeArr, item, i);

    if (result === false) {
      break;
    }
  }
}

exports.arrForEach = arrForEach;
/**
 * ??????
 * @param fn ??????
 * @param interval ?????????????????????
 */

function throttle(fn, interval) {
  if (interval === void 0) {
    interval = 200;
  }

  var flag = false;
  return function () {
    var _this = this;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!flag) {
      flag = true;
      (0, _setTimeout2["default"])(function () {
        flag = false;
        fn.call.apply(fn, tslib_1.__spreadArray([_this], args)); // this ???????????????????????? null
      }, interval);
    }
  };
}

exports.throttle = throttle;
/**
 * ??????
 * @param fn ??????
 * @param delay ?????????????????????
 */

function debounce(fn, delay) {
  if (delay === void 0) {
    delay = 200;
  }

  var lastFn = 0;
  return function () {
    var _this = this;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (lastFn) {
      window.clearTimeout(lastFn);
    }

    lastFn = (0, _setTimeout2["default"])(function () {
      lastFn = 0;
      fn.call.apply(fn, tslib_1.__spreadArray([_this], args)); // this ???????????????????????? null
    }, delay);
  };
}

exports.debounce = debounce;
/**
 * isFunction ???????????????
 * @param fn ??????
 */

function isFunction(fn) {
  return typeof fn === 'function';
}

exports.isFunction = isFunction;
/**
 * ????????????????????? ???????????????
 * @param data
 */

function deepClone(data) {
  if ((0, _typeof2["default"])(data) !== 'object' || typeof data == 'function' || data === null) {
    return data;
  }

  var item;

  if ((0, _isArray["default"])(data)) {
    item = [];
  }

  if (!(0, _isArray["default"])(data)) {
    item = {};
  }

  for (var i in data) {
    if (Object.prototype.hasOwnProperty.call(data, i)) {
      item[i] = deepClone(data[i]);
    }
  }

  return item;
}

exports.deepClone = deepClone;
/**
 * ????????????????????????????????????
 * @param data ??????????????????
 */

function toArray(data) {
  return (0, _slice["default"])(Array.prototype).call(data);
}

exports.toArray = toArray;
/**
 * ??????id??????
 * @param length ???????????????
 */

function getRandomCode() {
  var _context2;

  return (0, _slice["default"])(_context2 = Math.random().toString(36)).call(_context2, -5);
}

exports.getRandomCode = getRandomCode;
/**
 * hex color ????????? rgb
 * @param hex string
 */

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result == null) return null;
  var colors = (0, _map["default"])(result).call(result, function (i) {
    return (0, _parseInt2["default"])(i, 16);
  });
  var r = colors[1];
  var g = colors[2];
  var b = colors[3];
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

exports.hexToRgb = hexToRgb;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.EMPTY_P_REGEX = exports.EMPTY_P_LAST_REGEX = exports.EMPTY_P = exports.urlRegex = exports.EMPTY_FN = void 0;

function EMPTY_FN() {}

exports.EMPTY_FN = EMPTY_FN; //?????????????????????url???????????????

exports.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/; // ?????????????????????????????????/??????????????? ????????????????????????

exports.EMPTY_P = '<p data-we-empty-p=""><br></p>'; // ????????????dom????????? ??????????????????????????????????????????

exports.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim; // ????????????dom????????? ??????????????????????????????????????????

exports.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(150)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var shared = __webpack_require__(80);
var has = __webpack_require__(17);
var uid = __webpack_require__(67);
var NATIVE_SYMBOL = __webpack_require__(79);
var USE_SYMBOL_AS_UID = __webpack_require__(107);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(11);
var has = __webpack_require__(17);
var wrappedWellKnownSymbolModule = __webpack_require__(101);
var defineProperty = __webpack_require__(18).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(11);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(26);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(108);
var anObject = __webpack_require__(20);
var toPropertyKey = __webpack_require__(64);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var definePropertyModule = __webpack_require__(18);
var createPropertyDescriptor = __webpack_require__(38);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? Class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var Menu_1 = tslib_1.__importDefault(__webpack_require__(103));

var BtnMenu = function (_super) {
  tslib_1.__extends(BtnMenu, _super);

  function BtnMenu($elem, editor) {
    return _super.call(this, $elem, editor) || this;
  }

  return BtnMenu;
}(Menu_1["default"]);

exports["default"] = BtnMenu;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? Class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(48));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Menu_1 = tslib_1.__importDefault(__webpack_require__(103));

var DropList_1 = tslib_1.__importDefault(__webpack_require__(138));

var DropListMenu = function (_super) {
  tslib_1.__extends(DropListMenu, _super);

  function DropListMenu($elem, editor, conf) {
    var _this = _super.call(this, $elem, editor) || this; // ?????????


    conf.title = editor.i18next.t("menus.dropListMenu." + conf.title); // ?????????????????? ??? icon ?????????????????????

    var className = editor.config.lang === 'zh-CN' ? '' : 'w-e-drop-list-tl';

    if (className !== '' && conf.type === 'list') {
      var _context;

      (0, _forEach["default"])(_context = conf.list).call(_context, function (item) {
        var $elem = item.$elem;
        var $children = dom_core_1["default"]($elem.children());

        if ($children.length > 0) {
          var nodeName = $children === null || $children === void 0 ? void 0 : $children.getNodeName();

          if (nodeName && nodeName === 'I') {
            $elem.addClass(className);
          }
        }
      });
    } // ????????? dropList


    var dropList = new DropList_1["default"](_this, conf);
    _this.dropList = dropList; // ????????????

    $elem.on('click', function () {
      var _context2;

      if (editor.selection.getRange() == null) {
        return;
      }

      $elem.css('z-index', editor.zIndex.get('menu')); // ?????? droplist ????????????

      (0, _forEach["default"])(_context2 = editor.txt.eventHooks.dropListMenuHoverEvents).call(_context2, function (fn) {
        return fn();
      }); // ??????

      dropList.show();
    }).on('mouseleave', function () {
      $elem.css('z-index', 'auto'); // ??????

      dropList.hideTimeoutId = (0, _setTimeout2["default"])(function () {
        dropList.hide();
      });
    });
    return _this;
  }

  return DropListMenu;
}(Menu_1["default"]);

exports["default"] = DropListMenu;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(11);
var global = __webpack_require__(8);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(51);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(199);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(78);
var requireObjectCoercible = __webpack_require__(51);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(65);

module.exports = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(40);
var IndexedObject = __webpack_require__(78);
var toObject = __webpack_require__(26);
var toLength = __webpack_require__(35);
var arraySpeciesCreate = __webpack_require__(95);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(298);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description panel class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _find = _interopRequireDefault(__webpack_require__(32));

var _set = _interopRequireDefault(__webpack_require__(136));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var const_1 = __webpack_require__(7);

var Panel = function () {
  function Panel(menu, conf) {
    this.menu = menu;
    this.conf = conf;
    this.$container = dom_core_1["default"]('<div class="w-e-panel-container"></div>'); // ?????? panel

    var editor = menu.editor;
    editor.txt.eventHooks.clickEvents.push(Panel.hideCurAllPanels);
    editor.txt.eventHooks.toolbarClickEvents.push(Panel.hideCurAllPanels);
    editor.txt.eventHooks.dropListMenuHoverEvents.push(Panel.hideCurAllPanels);
  }
  /**
   * ??????????????? panel
   */


  Panel.prototype.create = function () {
    var _this = this;

    var menu = this.menu;

    if (Panel.createdMenus.has(menu)) {
      // ????????????
      return;
    }

    var conf = this.conf; // panel ?????????

    var $container = this.$container;
    var width = conf.width || 300; // ?????? 300px

    var rect = menu.editor.$toolbarElem.getBoundingClientRect();
    var menuRect = menu.$elem.getBoundingClientRect();
    var top = rect.height + rect.top - menuRect.top;
    var left = (rect.width - width) / 2 + rect.left - menuRect.left;
    var offset = 300; // icon???panel??????????????????????????? 300

    if (Math.abs(left) > offset) {
      // panel??????????????????icon???????????????panel???????????????icon??????????????????????????????
      if (menuRect.left < document.documentElement.clientWidth / 2) {
        // icon?????????
        left = -menuRect.width / 2;
      } else {
        // icon?????????
        left = -width + menuRect.width / 2;
      }
    }

    $container.css('width', width + 'px').css('margin-top', top + "px").css('margin-left', left + "px").css('z-index', menu.editor.zIndex.get('panel')); // ??????????????????

    var $closeBtn = dom_core_1["default"]('<i class="w-e-icon-close w-e-panel-close"></i>');
    $container.append($closeBtn);
    $closeBtn.on('click', function () {
      _this.remove();
    }); // ?????? tabs ??????

    var $tabTitleContainer = dom_core_1["default"]('<ul class="w-e-panel-tab-title"></ul>');
    var $tabContentContainer = dom_core_1["default"]('<div class="w-e-panel-tab-content"></div>');
    $container.append($tabTitleContainer).append($tabContentContainer); // ????????????

    var height = conf.height; // height: 0 ???????????????

    if (height) {
      $tabContentContainer.css('height', height + 'px').css('overflow-y', 'auto');
    } // tabs


    var tabs = conf.tabs || [];
    var tabTitleArr = [];
    var tabContentArr = [];
    (0, _forEach["default"])(tabs).call(tabs, function (tab, tabIndex) {
      if (!tab) {
        return;
      }

      var title = tab.title || '';
      var tpl = tab.tpl || ''; // ????????? DOM

      var $title = dom_core_1["default"]("<li class=\"w-e-item\">" + title + "</li>");
      $tabTitleContainer.append($title);
      var $content = dom_core_1["default"](tpl);
      $tabContentContainer.append($content); // ???????????????

      tabTitleArr.push($title);
      tabContentArr.push($content); // ?????? active ???

      if (tabIndex === 0) {
        $title.data('active', true);
        $title.addClass('w-e-active');
      } else {
        $content.hide();
      } // ?????? tab ?????????


      $title.on('click', function () {
        if ($title.data('active')) {
          return;
        } // ??????????????? tab


        (0, _forEach["default"])(tabTitleArr).call(tabTitleArr, function ($title) {
          $title.data('active', false);
          $title.removeClass('w-e-active');
        });
        (0, _forEach["default"])(tabContentArr).call(tabContentArr, function ($content) {
          $content.hide();
        }); // ??????????????? tab

        $title.data('active', true);
        $title.addClass('w-e-active');
        $content.show();
      });
    }); // ??????????????????

    $container.on('click', function (e) {
      // ?????????????????????
      e.stopPropagation();
    }); // ????????? DOM

    menu.$elem.append($container); // ?????? conf events ??????????????????????????? DOM ????????????????????????

    (0, _forEach["default"])(tabs).call(tabs, function (tab, index) {
      if (!tab) {
        return;
      }

      var events = tab.events || [];
      (0, _forEach["default"])(events).call(events, function (event) {
        var _a;

        var selector = event.selector;
        var type = event.type;
        var fn = event.fn || const_1.EMPTY_FN;
        var $content = tabContentArr[index];
        var bindEnter = (_a = event.bindEnter) !== null && _a !== void 0 ? _a : false;

        var doneFn = function doneFn(e) {
          return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var needToHide;
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  e.stopPropagation();
                  return [4
                  /*yield*/
                  , fn(e) // ??????????????????????????????????????? panel
                  ];

                case 1:
                  needToHide = _a.sent(); // ??????????????????????????????????????? panel

                  if (needToHide) {
                    this.remove();
                  }

                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }; // ??????????????????????????????


        (0, _find["default"])($content).call($content, selector).on(type, doneFn); // ??????enter????????????

        if (bindEnter && type === 'click') {
          $content.on('keyup', function (e) {
            if (e.keyCode == 13) {
              doneFn(e);
            }
          });
        }
      });
    }); // focus ????????? elem

    var $inputs = (0, _find["default"])($container).call($container, 'input[type=text],textarea');

    if ($inputs.length) {
      $inputs.get(0).focus();
    } // ???????????? panel


    Panel.hideCurAllPanels(); // ????????? menu ??????????????? panel

    menu.setPanel(this);
    Panel.createdMenus.add(menu);
  };
  /**
   * ?????? penal
   */


  Panel.prototype.remove = function () {
    var menu = this.menu;
    var $container = this.$container;

    if ($container) {
      $container.remove();
    } // ?????? menu ???????????????


    Panel.createdMenus["delete"](menu);
  };
  /**
   * ????????????????????? panel
   */


  Panel.hideCurAllPanels = function () {
    var _context;

    if (Panel.createdMenus.size === 0) {
      return;
    }

    (0, _forEach["default"])(_context = Panel.createdMenus).call(_context, function (menu) {
      var panel = menu.panel;
      panel && panel.remove();
    });
  }; // ???????????????????????? panelMenu


  Panel.createdMenus = new _set["default"]();
  return Panel;
}();

exports["default"] = Panel;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(70);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Modal ?????? Class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var Menu_1 = tslib_1.__importDefault(__webpack_require__(103));

var PanelMenu = function (_super) {
  tslib_1.__extends(PanelMenu, _super);

  function PanelMenu($elem, editor) {
    return _super.call(this, $elem, editor) || this;
  }
  /**
   * ??? menu ?????? panel
   * @param panel panel ??????
   */


  PanelMenu.prototype.setPanel = function (panel) {
    this.panel = panel;
  };

  return PanelMenu;
}(Menu_1["default"]);

exports["default"] = PanelMenu;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Tooltip class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _bind = _interopRequireDefault(__webpack_require__(61));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Tooltip = function () {
  function Tooltip(editor, $elem, conf) {
    this.editor = editor;
    this.$targetElem = $elem;
    this.conf = conf;
    this._show = false;
    this._isInsertTextContainer = false; // ?????? container

    var $container = dom_core_1["default"]('<div></div>');
    $container.addClass('w-e-tooltip');
    this.$container = $container;
  }
  /**
   * ?????? tooltip ??????
   */


  Tooltip.prototype.getPositionData = function () {
    var $container = this.$container;
    var top = 0;
    var left = 0; // tooltip ?????????

    var tooltipHeight = 20; // ????????? scrollTop

    var pageScrollTop = document.documentElement.scrollTop; // ??????????????? rect

    var targetElemRect = this.$targetElem.getBoundingClientRect(); // ??????????????? rect

    var textElemRect = this.editor.$textElem.getBoundingClientRect(); // ???????????? textContainerElem ??? ????????????

    var targetOffset = this.$targetElem.getOffsetData();
    var targetParentElem = dom_core_1["default"](targetOffset.parent); // ?????? ??????????????????????????????

    var scrollTop = this.editor.$textElem.elems[0].scrollTop; // ???????????? textContainer ???

    this._isInsertTextContainer = targetParentElem.equal(this.editor.$textContainerElem);

    if (this._isInsertTextContainer) {
      // ??????????????????
      var targetParentElemHeight = targetParentElem.getBoundingClientRect().height; // ?????????????????????????????????

      var offsetTop = targetOffset.top,
          offsetLeft = targetOffset.left,
          offsetHeight = targetOffset.height; // ???????????????????????? ??????top??????

      var absoluteTop = offsetTop - scrollTop;

      if (absoluteTop > tooltipHeight + 5) {
        // ???????????????????????????????????????
        top = absoluteTop - tooltipHeight - 15;
        $container.addClass('w-e-tooltip-up');
      } else if (absoluteTop + offsetHeight + tooltipHeight < targetParentElemHeight) {
        // ???????????????????????????????????????
        top = absoluteTop + offsetHeight + 10;
        $container.addClass('w-e-tooltip-down');
      } else {
        // ???????????????tooltip ???????????????????????????
        top = (absoluteTop > 0 ? absoluteTop : 0) + tooltipHeight + 10;
        $container.addClass('w-e-tooltip-down');
      } // ?????? left


      if (offsetLeft < 0) {
        left = 0;
      } else {
        left = offsetLeft;
      }
    } else {
      if (targetElemRect.top < tooltipHeight) {
        // ??????????????????????????????????????????????????????????????????tooltip ???????????????????????????
        top = targetElemRect.bottom + pageScrollTop + 5; // 5px ??????

        $container.addClass('w-e-tooltip-down');
      } else if (targetElemRect.top - textElemRect.top < tooltipHeight) {
        // ?????????????????????????????????????????????????????????????????????tooltip ???????????????????????????
        top = targetElemRect.bottom + pageScrollTop + 5; // 5px ??????

        $container.addClass('w-e-tooltip-down');
      } else {
        // ???????????????tooltip ????????????????????????
        top = targetElemRect.top + pageScrollTop - tooltipHeight - 15; // ?????? toolbar ?????????????????? 15px ??????

        $container.addClass('w-e-tooltip-up');
      } // ?????? left


      if (targetElemRect.left < 0) {
        left = 0;
      } else {
        left = targetElemRect.left;
      }
    } // ????????????


    return {
      top: top,
      left: left
    };
  };
  /**
   * ?????? tooltip ??????
   */


  Tooltip.prototype.appendMenus = function () {
    var _this = this;

    var conf = this.conf;
    var editor = this.editor;
    var $targetElem = this.$targetElem;
    var $container = this.$container;
    (0, _forEach["default"])(conf).call(conf, function (item, index) {
      // ????????????
      var $elem = item.$elem;
      var $wrapper = dom_core_1["default"]('<div></div>');
      $wrapper.addClass('w-e-tooltip-item-wrapper ');
      $wrapper.append($elem);
      $container.append($wrapper); // ??????????????????

      $elem.on('click', function (e) {
        e.preventDefault();
        var res = item.onClick(editor, $targetElem);
        if (res) _this.remove();
      });
    });
  };
  /**
   * ?????? tooltip
   */


  Tooltip.prototype.create = function () {
    var _context, _context2;

    var editor = this.editor;
    var $container = this.$container; // ?????? container ?????????

    this.appendMenus(); // ????????????

    var _a = this.getPositionData(),
        top = _a.top,
        left = _a.left;

    $container.css('top', top + "px");
    $container.css('left', left + "px"); // ?????? z-index

    $container.css('z-index', editor.zIndex.get('tooltip')); // ????????? DOM

    if (this._isInsertTextContainer) {
      this.editor.$textContainerElem.append($container);
    } else {
      dom_core_1["default"]('body').append($container);
    }

    this._show = true;
    editor.beforeDestroy((0, _bind["default"])(_context = this.remove).call(_context, this));
    editor.txt.eventHooks.onBlurEvents.push((0, _bind["default"])(_context2 = this.remove).call(_context2, this));
  };
  /**
   * ????????? tooltip
   */


  Tooltip.prototype.remove = function () {
    this.$container.remove();
    this._show = false;
  };

  (0, _defineProperty["default"])(Tooltip.prototype, "isShow", {
    /**
     * ????????????
     */
    get: function get() {
      return this._show;
    },
    enumerable: false,
    configurable: true
  });
  return Tooltip;
}();

exports["default"] = Tooltip;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(34);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var isArrayIteratorMethod = __webpack_require__(112);
var toLength = __webpack_require__(35);
var bind = __webpack_require__(40);
var getIteratorMethod = __webpack_require__(113);
var iteratorClose = __webpack_require__(114);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(176);
var global = __webpack_require__(8);
var isObject = __webpack_require__(13);
var createNonEnumerableProperty = __webpack_require__(19);
var objectHas = __webpack_require__(17);
var shared = __webpack_require__(81);
var sharedKey = __webpack_require__(68);
var hiddenKeys = __webpack_require__(54);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(88);
var defineProperty = __webpack_require__(18).f;
var createNonEnumerableProperty = __webpack_require__(19);
var has = __webpack_require__(17);
var toString = __webpack_require__(178);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
var DOMIterables = __webpack_require__(189);
var global = __webpack_require__(8);
var classof = __webpack_require__(71);
var createNonEnumerableProperty = __webpack_require__(19);
var Iterators = __webpack_require__(42);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(276);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(280);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.createElementFragment = exports.createDocumentFragment = exports.createElement = exports.insertBefore = exports.getEndPoint = exports.getStartPoint = exports.updateRange = exports.filterSelectionNodes = void 0;

var tslib_1 = __webpack_require__(2);

var _1 = __webpack_require__(142);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ?????? ????????? node ??????
 * @returns { DomElement[] } DomElement[]
 */


function filterSelectionNodes($nodes) {
  var $listHtml = [];
  (0, _forEach["default"])($nodes).call($nodes, function ($node) {
    var targerName = $node.getNodeName();

    if (targerName !== _1.ListType.OrderedList && targerName !== _1.ListType.UnorderedList) {
      // ?????????
      $listHtml.push($node);
    } else {
      // ??????
      if ($node.prior) {
        $listHtml.push($node.prior);
      } else {
        var $children = $node.children();
        $children === null || $children === void 0 ? void 0 : (0, _forEach["default"])($children).call($children, function ($li) {
          $listHtml.push(dom_core_1["default"]($li));
        });
      }
    }
  });
  return $listHtml;
}

exports.filterSelectionNodes = filterSelectionNodes;
/**
 * ????????????
 * @param $node
 */

function updateRange(editor, $node, collapsed) {
  var selection = editor.selection;
  var range = document.createRange(); // ===============================
  // length ?????? 1
  // ?????????????????????????????????????????????
  // ===============================

  if ($node.length > 1) {
    range.setStart($node.elems[0], 0);
    range.setEnd($node.elems[$node.length - 1], $node.elems[$node.length - 1].childNodes.length);
  } // ===============================
  // ???????????? ??? ?????????
  // ===============================
  else {
    range.selectNodeContents($node.elems[0]);
  } // ===============================
  // collapsed ??? true ???????????????
  // ===============================


  collapsed && range.collapse(false);
  selection.saveRange(range);
  selection.restoreSelection();
}

exports.updateRange = updateRange;
/**
 * ??????????????????
 * @param $startElem ??????????????????
 */

function getStartPoint($startElem) {
  var _a;

  return $startElem.prior ? $startElem.prior // ??? prior ????????????????????????
  : dom_core_1["default"]((_a = $startElem.children()) === null || _a === void 0 ? void 0 : _a.elems[0]); // ???????????????????????????
}

exports.getStartPoint = getStartPoint;
/**
 * ??????????????????
 * @param $endElem ??????????????????
 */

function getEndPoint($endElem) {
  var _a;

  return $endElem.prior ? $endElem.prior // ??? prior ????????????????????????
  : dom_core_1["default"]((_a = $endElem.children()) === null || _a === void 0 ? void 0 : _a.last().elems[0]); // ???????????????????????????
}

exports.getEndPoint = getEndPoint;
/**
 * ??????????????????????????????????????????????????????????????????
 * @param { DomElement } $node ????????????
 * @param { ContainerFragment } newNode ?????????????????????
 * @param { Node | null } existingNode ???????????????
 */

function insertBefore($node, newNode, existingNode) {
  if (existingNode === void 0) {
    existingNode = null;
  }

  $node.parent().elems[0].insertBefore(newNode, existingNode);
}

exports.insertBefore = insertBefore;
/**
 * ??????????????? element ??????
 */

function createElement(target) {
  return document.createElement(target);
}

exports.createElement = createElement;
/**
 * ??????????????????
 */

function createDocumentFragment() {
  return document.createDocumentFragment();
}

exports.createDocumentFragment = createDocumentFragment;
/**
 * ?????? li ??????????????????????????? $fragment ????????????
 * @param { DomElement[] } $nodes ??????????????? li ??? dom ????????????
 * @param { ContainerFragment } $fragment ????????????????????? li ?????????????????????
 */

function createElementFragment($nodes, $fragment, tag) {
  if (tag === void 0) {
    tag = 'li';
  }

  (0, _forEach["default"])($nodes).call($nodes, function ($node) {
    var $list = createElement(tag);
    $list.innerHTML = $node.html();
    $fragment.appendChild($list);
    $node.remove();
  });
  return $fragment;
}

exports.createElementFragment = createElementFragment;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(25);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(110);
var enumBugKeys = __webpack_require__(87);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(29);
var addToUnscopables = __webpack_require__(89);
var Iterators = __webpack_require__(42);
var InternalStateModule = __webpack_require__(43);
var defineIterator = __webpack_require__(90);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(19);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(188).charAt;
var toString = __webpack_require__(30);
var InternalStateModule = __webpack_require__(43);
var defineIterator = __webpack_require__(90);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(50);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(9);
var V8_VERSION = __webpack_require__(66);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(233);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.ListHandle = void 0;

var tslib_1 = __webpack_require__(2);

var SelectionRangeElem_1 = tslib_1.__importDefault(__webpack_require__(388));

var ListHandle = function () {
  function ListHandle(options) {
    this.options = options;
    this.selectionRangeElem = new SelectionRangeElem_1["default"]();
  }

  return ListHandle;
}();

exports.ListHandle = ListHandle;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(151);
var isSymbol = __webpack_require__(65);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(25);
var USE_SYMBOL_AS_UID = __webpack_require__(107);

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var userAgent = __webpack_require__(52);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(80);
var uid = __webpack_require__(67);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(20);
var defineProperties = __webpack_require__(175);
var enumBugKeys = __webpack_require__(87);
var hiddenKeys = __webpack_require__(54);
var html = __webpack_require__(111);
var documentCreateElement = __webpack_require__(82);
var sharedKey = __webpack_require__(68);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(88);
var classofRaw = __webpack_require__(50);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(34);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(12);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(64);
var definePropertyModule = __webpack_require__(18);
var createPropertyDescriptor = __webpack_require__(38);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var propertyIsEnumerableModule = __webpack_require__(63);
var createPropertyDescriptor = __webpack_require__(38);
var toIndexedObject = __webpack_require__(29);
var toPropertyKey = __webpack_require__(64);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(108);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var classof = __webpack_require__(50);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(66);
var fails = __webpack_require__(12);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(39);
var store = __webpack_require__(81);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.16.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '?? 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var setGlobal = __webpack_require__(153);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var isObject = __webpack_require__(13);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toObject = __webpack_require__(26);
var sharedKey = __webpack_require__(68);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(173);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(20);
var aPossiblePrototype = __webpack_require__(174);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(29);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(86);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(70);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var createIteratorConstructor = __webpack_require__(177);
var getPrototypeOf = __webpack_require__(83);
var setPrototypeOf = __webpack_require__(84);
var setToStringTag = __webpack_require__(44);
var createNonEnumerableProperty = __webpack_require__(19);
var redefine = __webpack_require__(56);
var wellKnownSymbol = __webpack_require__(9);
var IS_PURE = __webpack_require__(39);
var Iterators = __webpack_require__(42);
var IteratorsCore = __webpack_require__(116);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(50);
var global = __webpack_require__(8);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????? class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);

var config_1 = tslib_1.__importDefault(__webpack_require__(282));

var selection_1 = tslib_1.__importDefault(__webpack_require__(295));

var command_1 = tslib_1.__importDefault(__webpack_require__(296));

var index_1 = tslib_1.__importDefault(__webpack_require__(297));

var index_2 = tslib_1.__importDefault(__webpack_require__(316));

var init_dom_1 = tslib_1.__importStar(__webpack_require__(432));

var init_selection_1 = tslib_1.__importDefault(__webpack_require__(433));

var bind_event_1 = tslib_1.__importDefault(__webpack_require__(434));

var i18next_init_1 = tslib_1.__importDefault(__webpack_require__(435));

var set_full_screen_1 = tslib_1.__importStar(__webpack_require__(436));

var scroll_to_head_1 = tslib_1.__importDefault(__webpack_require__(439));

var z_index_1 = tslib_1.__importDefault(__webpack_require__(440));

var index_3 = tslib_1.__importDefault(__webpack_require__(441));

var index_4 = tslib_1.__importDefault(__webpack_require__(443));

var disable_1 = tslib_1.__importDefault(__webpack_require__(453));

var selection_change_1 = tslib_1.__importDefault(__webpack_require__(456));

var plugins_1 = tslib_1.__importStar(__webpack_require__(457));

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var DropList_1 = tslib_1.__importDefault(__webpack_require__(138));

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(36));

var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(37));

var EDITOR_ID = 1;

var Editor = function () {
  /**
   * ????????????
   * @param toolbarSelector ????????? DOM selector
   * @param textSelector ???????????? DOM selector
   */
  function Editor(toolbarSelector, textSelector) {
    this.pluginsFunctionList = {}; // ??????????????????????????????????????????

    this.beforeDestroyHooks = []; // id???????????????????????????????????????????????????

    this.id = "wangEditor-" + EDITOR_ID++;
    this.toolbarSelector = toolbarSelector;
    this.textSelector = textSelector;
    init_dom_1.selectorValidator(this); // ?????????????????????????????????????????????
    // ???????????? - ??????????????????????????????????????????????????? JS ?????????(????????????)??????????????????????????? config ????????????????????????????????? ???????????? ????????????

    this.config = util_1.deepClone(config_1["default"]);
    this.$toolbarElem = dom_core_1["default"]('<div></div>');
    this.$textContainerElem = dom_core_1["default"]('<div></div>');
    this.$textElem = dom_core_1["default"]('<div></div>');
    this.toolbarElemId = '';
    this.textElemId = '';
    this.isFocus = false;
    this.isComposing = false;
    this.isCompatibleMode = false;
    this.selection = new selection_1["default"](this);
    this.cmd = new command_1["default"](this);
    this.txt = new index_1["default"](this);
    this.menus = new index_2["default"](this);
    this.zIndex = new z_index_1["default"]();
    this.change = new index_3["default"](this);
    this.history = new index_4["default"](this);
    this.onSelectionChange = new selection_change_1["default"](this);

    var _a = disable_1["default"](this),
        disable = _a.disable,
        enable = _a.enable;

    this.disable = disable;
    this.enable = enable;
    this.isEnable = true;
  }
  /**
   * ???????????????
   * @param newLine ????????????
   */


  Editor.prototype.initSelection = function (newLine) {
    init_selection_1["default"](this, newLine);
  };
  /**
   * ?????????????????????
   */


  Editor.prototype.create = function () {
    // ????????? ZIndex
    this.zIndex.init(this); // ?????????????????????????????????

    this.isCompatibleMode = this.config.compatibleMode(); // ????????????????????????????????????

    if (!this.isCompatibleMode) {
      this.config.onchangeTimeout = 30;
    } // ????????? ????????????????????????????????? ??????????????? ?????????


    i18next_init_1["default"](this); // ????????? DOM

    init_dom_1["default"](this); // ????????? text

    this.txt.init(); // ???????????????

    this.menus.init(); // ?????????????????????

    set_full_screen_1["default"](this); // ????????????????????????????????????????????????

    this.initSelection(true); // ????????????

    bind_event_1["default"](this); // ???????????????????????????

    this.change.observe();
    this.history.observe(); // ???????????????

    plugins_1["default"](this);
  };
  /**
   * ?????????????????????????????????????????????
   * @param fn ????????????
   */


  Editor.prototype.beforeDestroy = function (fn) {
    this.beforeDestroyHooks.push(fn);
    return this;
  };
  /**
   * ???????????????????????????
   */


  Editor.prototype.destroy = function () {
    var _context;

    var _this = this; // ??????????????????


    (0, _forEach["default"])(_context = this.beforeDestroyHooks).call(_context, function (fn) {
      return fn.call(_this);
    }); // ?????? DOM ??????

    this.$toolbarElem.remove();
    this.$textContainerElem.remove();
  };
  /**
   * ???????????????????????????
   */


  Editor.prototype.fullScreen = function () {
    set_full_screen_1.setFullScreen(this);
  };
  /**
   * ????????????????????????
   */


  Editor.prototype.unFullScreen = function () {
    set_full_screen_1.setUnFullScreen(this);
  };
  /**
   * ???????????????????????????
   * @param id ????????????id
   */


  Editor.prototype.scrollToHead = function (id) {
    scroll_to_head_1["default"](this, id);
  };
  /**
   * ?????????????????????
   * @param key ?????? key
   * @param Menu ??????????????????
   */


  Editor.registerMenu = function (key, Menu) {
    if (!Menu || typeof Menu !== 'function') return;
    Editor.globalCustomMenuConstructorList[key] = Menu;
  };
  /**
   * ?????????????????????
   * @param { string } name ???????????????
   * @param { RegisterOptions } options ???????????????
   */


  Editor.prototype.registerPlugin = function (name, options) {
    plugins_1.registerPlugin(name, options, this.pluginsFunctionList);
  };
  /**
   * ?????????????????????
   * @param { string } name ???????????????
   * @param { RegisterOptions } options ???????????????
   */


  Editor.registerPlugin = function (name, options) {
    plugins_1.registerPlugin(name, options, Editor.globalPluginsFunctionList);
  }; // ?????? $


  Editor.$ = dom_core_1["default"];
  Editor.BtnMenu = BtnMenu_1["default"];
  Editor.DropList = DropList_1["default"];
  Editor.DropListMenu = DropListMenu_1["default"];
  Editor.Panel = Panel_1["default"];
  Editor.PanelMenu = PanelMenu_1["default"];
  Editor.Tooltip = Tooltip_1["default"];
  Editor.globalCustomMenuConstructorList = {};
  Editor.globalPluginsFunctionList = {};
  return Editor;
}();

exports["default"] = Editor;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(195);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(196);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(51);
var toString = __webpack_require__(30);
var whitespaces = __webpack_require__(74);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(110);
var enumBugKeys = __webpack_require__(87);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(216);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(238);

var _Symbol$iterator = __webpack_require__(267);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

exports.f = wellKnownSymbol;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(321);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Menu class ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var Menu = function () {
  function Menu($elem, editor) {
    var _this = this;

    this.$elem = $elem;
    this.editor = editor;
    this._active = false; // ????????????????????????

    $elem.on('click', function (e) {
      var _context;

      Panel_1["default"].hideCurAllPanels(); // ????????????????????? Panel
      // ???????????????????????????

      (0, _forEach["default"])(_context = editor.txt.eventHooks.menuClickEvents).call(_context, function (fn) {
        return fn();
      });
      e.stopPropagation();

      if (editor.selection.getRange() == null) {
        return;
      }

      _this.clickHandler(e);
    });
  }
  /**
   * ????????????????????????????????????
   * @param e event
   */


  Menu.prototype.clickHandler = function (e) {};
  /**
   * ???????????????????????????
   */


  Menu.prototype.active = function () {
    this._active = true;
    this.$elem.addClass('w-e-active');
  };
  /**
   * ?????????????????????????????????
   */


  Menu.prototype.unActive = function () {
    this._active = false;
    this.$elem.removeClass('w-e-active');
  };

  (0, _defineProperty["default"])(Menu.prototype, "isActive", {
    /**
     * ????????????????????????
     */
    get: function get() {
      return this._active;
    },
    enumerable: false,
    configurable: true
  });
  return Menu;
}();

exports["default"] = Menu;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _bind = _interopRequireDefault(__webpack_require__(61));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var upload_core_1 = tslib_1.__importDefault(__webpack_require__(140));

var progress_1 = tslib_1.__importDefault(__webpack_require__(141));

var UploadImg = function () {
  function UploadImg(editor) {
    this.editor = editor;
  }
  /**
   * ???????????????????????????
   * @param src ????????????
   */


  UploadImg.prototype.insertImg = function (src, alt, href) {
    var editor = this.editor;
    var config = editor.config;
    var i18nPrefix = 'validate.';

    var t = function t(text, prefix) {
      if (prefix === void 0) {
        prefix = i18nPrefix;
      }

      return editor.i18next.t(prefix + text);
    }; // ????????????alt


    var altText = alt ? "alt=\"" + alt + "\" " : '';
    var hrefText = href ? "data-href=\"" + encodeURIComponent(href) + "\" " : ''; // ???????????????????????????????????????

    editor.cmd["do"]('insertHTML', "<img src=\"" + src + "\" " + altText + hrefText + "style=\"max-width:100%;\" contenteditable=\"false\"/>"); // ??????????????????

    config.linkImgCallback(src, alt, href); // ????????????

    var img = document.createElement('img');

    img.onload = function () {
      img = null;
    };

    img.onerror = function () {
      config.customAlert(t('??????????????????'), 'error', "wangEditor: " + t('??????????????????') + "\uFF0C" + t('????????????') + " \"" + src + "\"\uFF0C" + t('??????????????????'));
      img = null;
    };

    img.onabort = function () {
      return img = null;
    };

    img.src = src;
  };
  /**
   * ????????????
   * @param files ????????????
   */


  UploadImg.prototype.uploadImg = function (files) {
    var _this_1 = this;

    if (!files.length) {
      return;
    }

    var editor = this.editor;
    var config = editor.config; // ------------------------------ i18next ------------------------------

    var i18nPrefix = 'validate.';

    var t = function t(text) {
      return editor.i18next.t(i18nPrefix + text);
    }; // ------------------------------ ?????????????????? ------------------------------
    // ???????????????


    var uploadImgServer = config.uploadImgServer; // base64 ??????

    var uploadImgShowBase64 = config.uploadImgShowBase64; // ??????????????????

    var maxSize = config.uploadImgMaxSize;
    var maxSizeM = maxSize / 1024 / 1024; // ??????????????????????????????

    var maxLength = config.uploadImgMaxLength; // ????????? fileName

    var uploadFileName = config.uploadFileName; // ???????????????

    var uploadImgParams = config.uploadImgParams; // ??????????????? url ???

    var uploadImgParamsWithUrl = config.uploadImgParamsWithUrl; // ????????? header

    var uploadImgHeaders = config.uploadImgHeaders; // ????????????

    var hooks = config.uploadImgHooks; // ????????????????????????

    var timeout = config.uploadImgTimeout; // ????????? cookie

    var withCredentials = config.withCredentials; // ?????????????????????

    var customUploadImg = config.customUploadImg;

    if (!customUploadImg) {
      // ?????? customUploadImg ?????????????????????????????????????????????????????????????????????
      if (!uploadImgServer && !uploadImgShowBase64) {
        return;
      }
    } // ------------------------------ ?????????????????? ------------------------------


    var resultFiles = [];
    var errInfos = [];
    util_1.arrForEach(files, function (file) {
      // chrome ????????? ??????????????????files??? [null, File]
      if (!file) return;
      var name = file.name || file.type.replace('/', '.'); // ???????????????chrome ??????name

      var size = file.size; // chrome ????????? name === undefined

      if (!name || !size) {
        return;
      } // ???uploadImgAccept???????????????????????????


      var imgType = editor.config.uploadImgAccept.join('|');
      var imgTypeRuleStr = ".(" + imgType + ")$";
      var uploadImgAcceptRule = new RegExp(imgTypeRuleStr, 'i');

      if (uploadImgAcceptRule.test(name) === false) {
        // ?????????????????????????????????
        errInfos.push("\u3010" + name + "\u3011" + t('????????????'));
        return;
      }

      if (maxSize < size) {
        // ??????????????????
        errInfos.push("\u3010" + name + "\u3011" + t('??????') + " " + maxSizeM + "M");
        return;
      } // ?????????????????????????????????


      resultFiles.push(file);
    }); // ??????????????????

    if (errInfos.length) {
      config.customAlert(t('?????????????????????') + ": \n" + errInfos.join('\n'), 'warning');
      return;
    } // ?????????????????????????????????????????????


    if (resultFiles.length === 0) {
      config.customAlert(t('????????????????????????'), 'warning');
      return;
    }

    if (resultFiles.length > maxLength) {
      config.customAlert(t('??????????????????') + maxLength + t('?????????'), 'warning');
      return;
    } // ------------------------------ ??????????????? ------------------------------


    if (customUploadImg && typeof customUploadImg === 'function') {
      var _context;

      customUploadImg(resultFiles, (0, _bind["default"])(_context = this.insertImg).call(_context, this)); // ??????????????????????????????????????????

      return;
    } // ------------------------------ ???????????? ------------------------------
    // ??????????????????


    var formData = new FormData();
    (0, _forEach["default"])(resultFiles).call(resultFiles, function (file, index) {
      var name = uploadFileName || file.name;

      if (resultFiles.length > 1) {
        // ??????????????????filename ????????????
        name = name + (index + 1);
      }

      formData.append(name, file);
    });

    if (uploadImgServer) {
      // ?????????????????????
      var uploadImgServerArr = uploadImgServer.split('#');
      uploadImgServer = uploadImgServerArr[0];
      var uploadImgServerHash = uploadImgServerArr[1] || '';
      (0, _forEach["default"])(util_1).call(util_1, uploadImgParams, function (key, val) {
        // ???????????????????????????????????????????????? encode ?????? v3.1.1 ?????????????????????
        // val = encodeURIComponent(val)
        // ??????????????????????????? url ???
        if (uploadImgParamsWithUrl) {
          if ((0, _indexOf["default"])(uploadImgServer).call(uploadImgServer, '?') > 0) {
            uploadImgServer += '&';
          } else {
            uploadImgServer += '?';
          }

          uploadImgServer = uploadImgServer + key + '=' + val;
        } // ??????????????????????????? formData ???


        formData.append(key, val);
      });

      if (uploadImgServerHash) {
        uploadImgServer += '#' + uploadImgServerHash;
      } // ????????????


      var xhr = upload_core_1["default"](uploadImgServer, {
        timeout: timeout,
        formData: formData,
        headers: uploadImgHeaders,
        withCredentials: !!withCredentials,
        beforeSend: function beforeSend(xhr) {
          if (hooks.before) return hooks.before(xhr, editor, resultFiles);
        },
        onTimeout: function onTimeout(xhr) {
          config.customAlert(t('??????????????????'), 'error');
          if (hooks.timeout) hooks.timeout(xhr, editor);
        },
        onProgress: function onProgress(percent, e) {
          var progressBar = new progress_1["default"](editor);

          if (e.lengthComputable) {
            percent = e.loaded / e.total;
            progressBar.show(percent);
          }
        },
        onError: function onError(xhr) {
          config.customAlert(t('??????????????????'), 'error', t('??????????????????') + "\uFF0C" + t('?????????????????????') + ": " + xhr.status);
          if (hooks.error) hooks.error(xhr, editor);
        },
        onFail: function onFail(xhr, resultStr) {
          config.customAlert(t('??????????????????'), 'error', t('??????????????????????????????') + ("\uFF0C" + t('????????????') + ": ") + resultStr);
          if (hooks.fail) hooks.fail(xhr, editor, resultStr);
        },
        onSuccess: function onSuccess(xhr, result) {
          if (hooks.customInsert) {
            var _context2;

            // ?????????????????????
            hooks.customInsert((0, _bind["default"])(_context2 = _this_1.insertImg).call(_context2, _this_1), result, editor);
            return;
          }

          if (result.errno != '0') {
            // ?????????????????????????????? { errno: 0, data: [...] }
            config.customAlert(t('??????????????????'), 'error', t('??????????????????????????????') + "\uFF0C" + t('????????????') + " errno=" + result.errno);
            if (hooks.fail) hooks.fail(xhr, editor, result);
            return;
          } // ?????????????????????


          var data = result.data;
          (0, _forEach["default"])(data).call(data, function (link) {
            if (typeof link === 'string') {
              _this_1.insertImg(link);
            } else {
              _this_1.insertImg(link.url, link.alt, link.href);
            }
          }); // ????????????

          if (hooks.success) hooks.success(xhr, editor, result);
        }
      });

      if (typeof xhr === 'string') {
        // ???????????????
        config.customAlert(xhr, 'error');
      } // ??????????????????????????????????????????


      return;
    } // ------------------------------ ?????? base64 ?????? ------------------------------


    if (uploadImgShowBase64) {
      util_1.arrForEach(files, function (file) {
        var _this = _this_1;
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
          if (!this.result) return;
          var imgLink = this.result.toString();

          _this.insertImg(imgLink, imgLink);
        };
      });
    }
  };

  return UploadImg;
}();

exports["default"] = UploadImg;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _every = _interopRequireDefault(__webpack_require__(426));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _slice = _interopRequireDefault(__webpack_require__(47));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.dealTextNode = exports.isAllTodo = exports.isTodo = exports.getCursorNextNode = void 0;
/**
 * ????????????????????????????????????????????????todo
 * @param editor ???????????????
 */

function isTodo($topSelectElem) {
  if ($topSelectElem.length) {
    return $topSelectElem.attr('class') === 'w-e-todo';
  }

  return false;
}

exports.isTodo = isTodo;
/**
 * ????????????????????????????????????todo
 * @param editor ???????????????
 */

function isAllTodo(editor) {
  var $topSelectElems = editor.selection.getSelectionRangeTopNodes(); // ?????????[]?????????

  if ($topSelectElems.length === 0) return;
  return (0, _every["default"])($topSelectElems).call($topSelectElems, function ($topSelectElem) {
    return isTodo($topSelectElem);
  });
}

exports.isAllTodo = isAllTodo;
/**
 * ??????????????????????????????????????????????????????????????????????????????????????????
 * @param node ????????????
 * @param textNode ???????????????????????????
 * @param pos ??????????????????????????????
 */

function getCursorNextNode(node, textNode, pos) {
  var _context;

  if (!node.hasChildNodes()) return;
  var newNode = node.cloneNode(); // ???????????????????????????

  var end = false;

  if (textNode.nodeValue === '') {
    end = true;
  }

  var delArr = [];
  (0, _forEach["default"])(_context = node.childNodes).call(_context, function (v) {
    //??????????????????
    if (!isContains(v, textNode) && end) {
      newNode.appendChild(v.cloneNode(true));

      if (v.nodeName !== 'BR') {
        delArr.push(v);
      }
    } // ?????????????????????


    if (isContains(v, textNode)) {
      if (v.nodeType === 1) {
        var childNode = getCursorNextNode(v, textNode, pos);
        if (childNode && childNode.textContent !== '') newNode === null || newNode === void 0 ? void 0 : newNode.appendChild(childNode);
      }

      if (v.nodeType === 3) {
        if (textNode.isEqualNode(v)) {
          var textContent = dealTextNode(v, pos);
          newNode.textContent = textContent;
        }
      }

      end = true;
    }
  }); // ??????????????????????????????

  (0, _forEach["default"])(delArr).call(delArr, function (v) {
    var node = v;
    node.remove();
  });
  return newNode;
}

exports.getCursorNextNode = getCursorNextNode;
/**
 * ??????otherNode???????????????node???
 * @param node ?????????
 * @param otherNode ???????????????????????????????????????
 */

function isContains(node, otherNode) {
  // ??????ie11???textNode?????????contains??????
  if (node.nodeType === 3) {
    return node.nodeValue === otherNode.nodeValue;
  }

  return node.contains(otherNode);
}
/**
 * ????????????????????????
 * @param node ????????????????????????
 * @param pos  ????????????????????????????????????
 * @param start ?????????true???????????????????????????????????????????????????false????????????????????????
 */


function dealTextNode(node, pos, start) {
  if (start === void 0) {
    start = true;
  }

  var content = node.nodeValue;
  var oldContent = content === null || content === void 0 ? void 0 : (0, _slice["default"])(content).call(content, 0, pos);
  content = content === null || content === void 0 ? void 0 : (0, _slice["default"])(content).call(content, pos); // start???false?????????content???oldContent

  if (!start) {
    var temp = content;
    content = oldContent;
    oldContent = temp;
  }

  node.nodeValue = oldContent;
  return content;
}

exports.dealTextNode = dealTextNode;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????????????????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var stack_1 = __webpack_require__(446);

var Cache = function () {
  function Cache(maxSize) {
    this.maxSize = maxSize;
    /**
     * ???????????????????????? ??????/??????
     */

    this.isRe = false;
    this.data = new stack_1.CeilStack(maxSize);
    this.revokeData = new stack_1.CeilStack(maxSize);
  }

  (0, _defineProperty["default"])(Cache.prototype, "size", {
    /**
     * ????????????????????????????????????????????????[??????????????????????????????????????????????????????]
     */
    get: function get() {
      return [this.data.size, this.revokeData.size];
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ?????????????????????????????????????????????????????????
   */

  Cache.prototype.resetMaxSize = function (maxSize) {
    this.data.resetMax(maxSize);
    this.revokeData.resetMax(maxSize);
  };
  /**
   * ????????????
   */


  Cache.prototype.save = function (data) {
    if (this.isRe) {
      this.revokeData.clear();
      this.isRe = false;
    }

    this.data.instack(data);
    return this;
  };
  /**
   * ??????
   * @param fn ???????????????????????????????????????????????????
   */


  Cache.prototype.revoke = function (fn) {
    !this.isRe && (this.isRe = true);
    var data = this.data.outstack();

    if (data) {
      this.revokeData.instack(data);
      fn(data);
      return true;
    }

    return false;
  };
  /**
   * ??????
   * @param fn ???????????????????????????????????????????????????
   */


  Cache.prototype.restore = function (fn) {
    !this.isRe && (this.isRe = true);
    var data = this.revokeData.outstack();

    if (data) {
      this.data.instack(data);
      fn(data);
      return true;
    }

    return false;
  };

  return Cache;
}();

exports["default"] = Cache;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(79);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var fails = __webpack_require__(12);
var createElement = __webpack_require__(82);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIndexedObject = __webpack_require__(29);
var indexOf = __webpack_require__(85).indexOf;
var hiddenKeys = __webpack_require__(54);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(25);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);
var Iterators = __webpack_require__(42);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(71);
var Iterators = __webpack_require__(42);
var wellKnownSymbol = __webpack_require__(9);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(81);

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(12);
var getPrototypeOf = __webpack_require__(83);
var createNonEnumerableProperty = __webpack_require__(19);
var has = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(9);
var IS_PURE = __webpack_require__(39);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);

module.exports = global.Promise;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(56);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(25);
var definePropertyModule = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(15);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var aFunction = __webpack_require__(34);
var wellKnownSymbol = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var fails = __webpack_require__(12);
var bind = __webpack_require__(40);
var html = __webpack_require__(111);
var createElement = __webpack_require__(82);
var IS_IOS = __webpack_require__(123);
var IS_NODE = __webpack_require__(92);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var argumentsLength = arguments.length;
    var i = 1;
    while (argumentsLength > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(52);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var isObject = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(72);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(208);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var global = __webpack_require__(8);
var InternalMetadataModule = __webpack_require__(127);
var fails = __webpack_require__(12);
var createNonEnumerableProperty = __webpack_require__(19);
var iterate = __webpack_require__(41);
var anInstance = __webpack_require__(91);
var isObject = __webpack_require__(13);
var setToStringTag = __webpack_require__(44);
var defineProperty = __webpack_require__(18).f;
var forEach = __webpack_require__(31).forEach;
var DESCRIPTORS = __webpack_require__(15);
var InternalStateModule = __webpack_require__(43);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS || typeof NativeConstructor != 'function'
    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Constructor.prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var hiddenKeys = __webpack_require__(54);
var isObject = __webpack_require__(13);
var has = __webpack_require__(17);
var defineProperty = __webpack_require__(18).f;
var getOwnPropertyNamesModule = __webpack_require__(98);
var getOwnPropertyNamesExternalModule = __webpack_require__(128);
var uid = __webpack_require__(67);
var FREEZING = __webpack_require__(211);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = [].splice;
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice.call(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var toIndexedObject = __webpack_require__(29);
var $getOwnPropertyNames = __webpack_require__(98).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(18).f;
var create = __webpack_require__(69);
var redefineAll = __webpack_require__(118);
var bind = __webpack_require__(40);
var anInstance = __webpack_require__(91);
var iterate = __webpack_require__(41);
var defineIterator = __webpack_require__(90);
var setSpecies = __webpack_require__(119);
var DESCRIPTORS = __webpack_require__(15);
var fastKey = __webpack_require__(127).fastKey;
var InternalStateModule = __webpack_require__(43);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(283);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  zIndex: 10000
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????????
 * @author xiaokyo
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  focus: true,
  height: 300,
  placeholder: '???????????????',
  zIndexFullScreen: 10002,
  showFullScreen: true
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.getPasteImgs = exports.getPasteHtml = exports.getPasteText = void 0;

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var parse_html_1 = tslib_1.__importDefault(__webpack_require__(307));
/**
 * ????????????????????????
 * @param e Event ??????
 */


function getPasteText(e) {
  // const clipboardData = e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData)
  var clipboardData = e.clipboardData; // ???????????? originalEvent ?????????

  var pasteText = '';

  if (clipboardData == null) {
    pasteText = window.clipboardData && window.clipboardData.getData('text');
  } else {
    pasteText = clipboardData.getData('text/plain');
  }

  return util_1.replaceHtmlSymbol(pasteText);
}

exports.getPasteText = getPasteText;
/**
 * ??????????????? html ?????????
 * @param e Event ??????
 * @param filterStyle ???????????? style ??????
 * @param ignoreImg ???????????? img ??????
 */

function getPasteHtml(e, filterStyle, ignoreImg) {
  if (filterStyle === void 0) {
    filterStyle = true;
  }

  if (ignoreImg === void 0) {
    ignoreImg = false;
  }

  var clipboardData = e.clipboardData; // ???????????? originalEvent ?????????

  var pasteHtml = '';

  if (clipboardData) {
    pasteHtml = clipboardData.getData('text/html');
  } // ???????????? 'text/html' ???????????? html?????????????????? text


  if (!pasteHtml) {
    var text = getPasteText(e);

    if (!text) {
      return ''; // ????????????????????????????????????
    }

    pasteHtml = "<p>" + text + "</p>";
  } // ??????<1?????????????????????????????? &lt;1


  pasteHtml = pasteHtml.replace(/<(\d)/gm, function (_, num) {
    return '&lt;' + num;
  }); // pdf?????????????????????meta?????????parseHtml????????????meta?????????????????????????????????

  pasteHtml = pasteHtml.replace(/<(\/?meta.*?)>/gim, ''); // ??????????????????????????????

  pasteHtml = parse_html_1["default"](pasteHtml, filterStyle, ignoreImg);
  return pasteHtml;
}

exports.getPasteHtml = getPasteHtml;
/**
 * ???????????????????????????
 * @param e Event ??????
 */

function getPasteImgs(e) {
  var _a;

  var result = [];
  var txt = getPasteText(e);

  if (txt) {
    // ???????????????????????????
    return result;
  }

  var items = (_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.items;
  if (!items) return result;
  (0, _forEach["default"])(util_1).call(util_1, items, function (key, value) {
    var type = value.type;

    if (/image/i.test(type)) {
      result.push(value.getAsFile());
    }
  });
  return result;
}

exports.getPasteImgs = getPasteImgs;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(309);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(325);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? class
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(48));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var const_1 = __webpack_require__(7);

var DropList = function () {
  function DropList(menu, conf) {
    var _this = this;

    this.hideTimeoutId = 0;
    this.menu = menu;
    this.conf = conf; // ??????

    var $container = dom_core_1["default"]('<div class="w-e-droplist"></div>'); // ??????

    var $title = dom_core_1["default"]("<p>" + conf.title + "</p>");
    $title.addClass('w-e-dp-title');
    $container.append($title); // ???????????????

    var list = conf.list || [];
    var type = conf.type || 'list'; // item ???????????????

    var clickHandler = conf.clickHandler || const_1.EMPTY_FN; // ?????? DOM ???????????????

    var $list = dom_core_1["default"]('<ul class="' + (type === 'list' ? 'w-e-list' : 'w-e-block') + '"></ul>');
    (0, _forEach["default"])(list).call(list, function (item) {
      var $elem = item.$elem;
      var value = item.value;
      var $li = dom_core_1["default"]('<li class="w-e-item"></li>');

      if ($elem) {
        $li.append($elem);
        $list.append($li);
        $li.on('click', function (e) {
          clickHandler(value); // ????????????

          e.stopPropagation(); // item ????????????????????? list

          _this.hideTimeoutId = (0, _setTimeout2["default"])(function () {
            _this.hide();
          });
        });
      }
    });
    $container.append($list); // ??????????????????

    $container.on('mouseleave', function () {
      _this.hideTimeoutId = (0, _setTimeout2["default"])(function () {
        _this.hide();
      });
    }); // ????????????

    this.$container = $container;
    this.rendered = false;
    this._show = false;
  }
  /**
   * ?????? DropList
   */


  DropList.prototype.show = function () {
    if (this.hideTimeoutId) {
      // ???????????????????????????
      clearTimeout(this.hideTimeoutId);
    }

    var menu = this.menu;
    var $menuELem = menu.$elem;
    var $container = this.$container;

    if (this._show) {
      return;
    }

    if (this.rendered) {
      // ??????
      $container.show();
    } else {
      // ?????? DOM ?????????????????????
      var menuHeight = $menuELem.getBoundingClientRect().height || 0;
      var width = this.conf.width || 100; // ????????? 100

      $container.css('margin-top', menuHeight + 'px').css('width', width + 'px'); // ????????? DOM

      $menuELem.append($container);
      this.rendered = true;
    } // ????????????


    this._show = true;
  };
  /**
   * ?????? DropList
   */


  DropList.prototype.hide = function () {
    var $container = this.$container;

    if (!this._show) {
      return;
    } // ?????????????????????


    $container.hide();
    this._show = false;
  };

  (0, _defineProperty["default"])(DropList.prototype, "isShow", {
    get: function get() {
      return this._show;
    },
    enumerable: false,
    configurable: true
  });
  return DropList;
}();

exports["default"] = DropList;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????????????????????????????????????? active
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function isActive(editor) {
  var $selectionELem = editor.selection.getSelectionContainerElem();

  if (!($selectionELem === null || $selectionELem === void 0 ? void 0 : $selectionELem.length)) {
    return false;
  }

  if ($selectionELem.getNodeName() === 'A') {
    return true;
  } else {
    return false;
  }
}

exports["default"] = isActive;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(100));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(6);
/**
 * ?????? post ??????????????????????????????
 * @param url url
 * @param option ?????????
 */


function post(url, option) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url); // ??????????????? 10s

  xhr.timeout = option.timeout || 10 * 1000;

  xhr.ontimeout = function () {
    console.error('wangEditor - ????????????');
    option.onTimeout && option.onTimeout(xhr);
  }; // ??????


  if (xhr.upload) {
    xhr.upload.onprogress = function (e) {
      var percent = e.loaded / e.total;
      option.onProgress && option.onProgress(percent, e);
    };
  } // ????????? header


  if (option.headers) {
    (0, _forEach["default"])(util_1).call(util_1, option.headers, function (key, val) {
      xhr.setRequestHeader(key, val);
    });
  } // ????????? cookie


  xhr.withCredentials = !!option.withCredentials; // ????????????????????????????????? xhr.send() ????????????

  if (option.beforeSend) {
    var beforeResult = option.beforeSend(xhr);

    if (beforeResult && (0, _typeof2["default"])(beforeResult) === 'object') {
      if (beforeResult.prevent) {
        // ???????????????????????? {prevent: true, msg: 'xxxx'} ???????????????????????????
        return beforeResult.msg;
      }
    }
  } // ?????????????????????


  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    var status = xhr.status;
    if (status < 200) return; // ????????????????????????????????????

    if (status >= 300 && status < 400) return; // ?????????

    if (status >= 400) {
      // 40x 50x ??????
      console.error('wangEditor - XHR ?????????????????? ' + status);
      if (option.onError) option.onError(xhr); // ??????????????? onError ????????????

      return;
    } // status = 200 ???????????????


    var resultStr = xhr.responseText;
    var result;

    if ((0, _typeof2["default"])(resultStr) !== 'object') {
      try {
        result = JSON.parse(resultStr);
      } catch (ex) {
        console.error('wangEditor - ?????????????????? JSON ??????', resultStr);
        if (option.onFail) option.onFail(xhr, resultStr);
        return;
      }
    } else {
      result = resultStr;
    }

    option.onSuccess(xhr, result);
  }; // ????????????


  xhr.send(option.formData || null);
  return xhr;
}

exports["default"] = post;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _now = _interopRequireDefault(__webpack_require__(357));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(48));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Progress = function () {
  function Progress(editor) {
    this.editor = editor;
    this.$textContainer = editor.$textContainerElem;
    this.$bar = dom_core_1["default"]('<div class="w-e-progress"></div>');
    this.isShow = false;
    this.time = 0;
    this.timeoutId = 0;
  }
  /**
   * ???????????????
   * @param progress ???????????????
   */


  Progress.prototype.show = function (progress) {
    var _this = this; // ??????????????????


    if (this.isShow) {
      return;
    }

    this.isShow = true; // ?????? $bar

    var $bar = this.$bar;
    var $textContainer = this.$textContainer;
    $textContainer.append($bar); // ???????????????????????????100ms ???????????????

    if ((0, _now["default"])() - this.time > 100) {
      if (progress <= 1) {
        $bar.css('width', progress * 100 + '%');
        this.time = (0, _now["default"])();
      }
    } // 500ms ????????????


    var timeoutId = this.timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    this.timeoutId = (0, _setTimeout2["default"])(function () {
      _this.hide();
    }, 500);
  };
  /**
   * ??????
   */


  Progress.prototype.hide = function () {
    var $bar = this.$bar;
    $bar.remove();
    this.isShow = false;
    this.time = 0;
    this.timeoutId = 0;
  };

  return Progress;
}();

exports["default"] = Progress;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????/????????????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.ListType = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var utils_1 = __webpack_require__(49);

var ListHandle_1 = tslib_1.__importStar(__webpack_require__(386));
/**
 * ???????????????
 */


var ListType;

(function (ListType) {
  ListType["OrderedList"] = "OL";
  ListType["UnorderedList"] = "UL";
})(ListType = exports.ListType || (exports.ListType = {}));

var List = function (_super) {
  tslib_1.__extends(List, _super);

  function List(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u5E8F\u5217\">\n                <i class=\"w-e-icon-list2\"></i>\n            </div>");
    var dropListConf = {
      width: 130,
      title: '??????',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]("\n                        <p>\n                            <i class=\"w-e-icon-list2 w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.list.????????????') + "\n                        <p>"),
        value: ListType.UnorderedList
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-list-numbered w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.list.????????????') + "\n                        <p>"),
        value: ListType.OrderedList
      }],
      clickHandler: function clickHandler(value) {
        // ?????? this ?????????????????? List ??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    return _this;
  }

  List.prototype.command = function (type) {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionContainerElem(); // ??????????????? DOM ?????????????????????????????????

    if ($selectionElem === undefined) return; // ?????????????????????????????? DOM ??????

    this.handleSelectionRangeNodes(type); // ????????????

    this.tryChangeActive();
  };

  List.prototype.validator = function ($startElem, $endElem, $textElem) {
    if (!$startElem.length || !$endElem.length || $textElem.equal($startElem) || $textElem.equal($endElem)) {
      return false;
    }

    return true;
  };

  List.prototype.handleSelectionRangeNodes = function (listType) {
    var editor = this.editor;
    var selection = editor.selection; // ?????? ????????????

    var listTarget = listType.toLowerCase(); // ?????????????????? ????????????

    var $selectionElem = selection.getSelectionContainerElem();
    var $startElem = selection.getSelectionStartElem().getNodeTop(editor);
    var $endElem = selection.getSelectionEndElem().getNodeTop(editor); // ?????????????????? ????????????

    if (!this.validator($startElem, $endElem, editor.$textElem)) {
      return;
    } // ????????????


    var _range = selection.getRange();

    var _collapsed = _range === null || _range === void 0 ? void 0 : _range.collapsed; // ?????????????????????????????????


    if (!editor.$textElem.equal($selectionElem)) {
      $selectionElem = $selectionElem.getNodeTop(editor);
    }

    var options = {
      editor: editor,
      listType: listType,
      listTarget: listTarget,
      $selectionElem: $selectionElem,
      $startElem: $startElem,
      $endElem: $endElem
    };
    var classType; // =====================================
    // ??? selectionElem ???????????????????????????
    // ?????????????????????????????????????????????????????????
    // =====================================

    if (this.isOrderElem($selectionElem)) {
      classType = ListHandle_1.ClassType.Wrap;
    } // =====================================
    // ??? startElem ??? endElem ???????????????????????????
    // ?????????????????????????????????????????????????????????(??????????????????)
    // =====================================
    else if (this.isOrderElem($startElem) && this.isOrderElem($endElem)) {
      classType = ListHandle_1.ClassType.Join;
    } // =====================================
    // ????????????????????? ?????? ?????????
    // =====================================
    else if (this.isOrderElem($startElem)) {
      classType = ListHandle_1.ClassType.StartJoin;
    } // =====================================
    // ????????????????????? ?????? ?????????
    // =====================================
    else if (this.isOrderElem($endElem)) {
      classType = ListHandle_1.ClassType.EndJoin;
    } // =====================================
    // ???????????????????????????????????????????????????????????????
    // ??????????????????????????????????????????
    // ????????? ???????????? ?????????
    // =====================================
    else {
      classType = ListHandle_1.ClassType.Other;
    }

    var listHandleCmd = new ListHandle_1["default"](ListHandle_1.createListHandle(classType, options, _range)); // ????????????

    utils_1.updateRange(editor, listHandleCmd.getSelectionRangeElem(), !!_collapsed);
  };
  /**
   * ??????????????????????????? UL and OL
   * @param $node
   */


  List.prototype.isOrderElem = function ($node) {
    var nodeName = $node.getNodeName();

    if (nodeName === ListType.OrderedList || nodeName === ListType.UnorderedList) {
      return true;
    }

    return false;
  };

  List.prototype.tryChangeActive = function () {};

  return List;
}(DropListMenu_1["default"]);

exports["default"] = List;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(410);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????????????????????????????????????? active
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function isActive(editor) {
  var $selectionELem = editor.selection.getSelectionContainerElem();

  if (!($selectionELem === null || $selectionELem === void 0 ? void 0 : $selectionELem.length)) {
    return false;
  }

  if ($selectionELem.getNodeName() == 'CODE' || $selectionELem.getNodeName() == 'PRE' || $selectionELem.parent().getNodeName() == 'CODE' || $selectionELem.parent().getNodeName() == 'PRE' || /hljs/.test($selectionELem.parent().attr('class'))) {
    return true;
  } else {
    return false;
  }
}

exports["default"] = isActive;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _find = _interopRequireDefault(__webpack_require__(32));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.todo = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var todo = function () {
  function todo($orginElem) {
    var _a;

    this.template = "<ul class=\"w-e-todo\"><li><span contenteditable=\"false\"><input type=\"checkbox\"></span></li></ul>";
    this.checked = false;
    this.$todo = dom_core_1["default"](this.template);
    this.$child = (_a = $orginElem === null || $orginElem === void 0 ? void 0 : $orginElem.childNodes()) === null || _a === void 0 ? void 0 : _a.clone(true);
  }

  todo.prototype.init = function () {
    var $child = this.$child;
    var $inputContainer = this.getInputContainer();

    if ($child) {
      $child.insertAfter($inputContainer);
    }
  };

  todo.prototype.getInput = function () {
    var $todo = this.$todo;
    var $input = (0, _find["default"])($todo).call($todo, 'input');
    return $input;
  };

  todo.prototype.getInputContainer = function () {
    var $inputContainer = this.getInput().parent();
    return $inputContainer;
  };

  todo.prototype.getTodo = function () {
    return this.$todo;
  };

  return todo;
}();

exports.todo = todo;

function createTodo($orginElem) {
  var t = new todo($orginElem);
  t.init();
  return t;
}

exports["default"] = createTodo;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

__webpack_require__(154);

__webpack_require__(156);

__webpack_require__(160);

__webpack_require__(162);

__webpack_require__(164);

__webpack_require__(166);

__webpack_require__(168);

var index_1 = tslib_1.__importDefault(__webpack_require__(94));

tslib_1.__exportStar(__webpack_require__(458), exports); // ???????????????????????????


try {
  document;
} catch (ex) {
  throw new Error('??????????????????????????????');
}

exports["default"] = index_1["default"];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(148);

module.exports = parent;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var path = __webpack_require__(11);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(15);
var objectDefinePropertyModile = __webpack_require__(18);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 150 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isSymbol = __webpack_require__(65);
var ordinaryToPrimitive = __webpack_require__(152);
var wellKnownSymbol = __webpack_require__(9);

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(155);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-toolbar,\n.w-e-text-container,\n.w-e-menu-panel {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: #fff;\n  /*??????????????????*/\n  /*???????????????*/\n}\n.w-e-toolbar h1,\n.w-e-text-container h1,\n.w-e-menu-panel h1 {\n  font-size: 32px !important;\n}\n.w-e-toolbar h2,\n.w-e-text-container h2,\n.w-e-menu-panel h2 {\n  font-size: 24px !important;\n}\n.w-e-toolbar h3,\n.w-e-text-container h3,\n.w-e-menu-panel h3 {\n  font-size: 18.72px !important;\n}\n.w-e-toolbar h4,\n.w-e-text-container h4,\n.w-e-menu-panel h4 {\n  font-size: 16px !important;\n}\n.w-e-toolbar h5,\n.w-e-text-container h5,\n.w-e-menu-panel h5 {\n  font-size: 13.28px !important;\n}\n.w-e-toolbar p,\n.w-e-text-container p,\n.w-e-menu-panel p {\n  font-size: 16px !important;\n}\n.w-e-toolbar .eleImg,\n.w-e-text-container .eleImg,\n.w-e-menu-panel .eleImg {\n  cursor: pointer;\n  display: inline-block;\n  font-size: 18px;\n  padding: 0 3px;\n}\n.w-e-toolbar *,\n.w-e-text-container *,\n.w-e-menu-panel * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.w-e-toolbar hr,\n.w-e-text-container hr,\n.w-e-menu-panel hr {\n  cursor: pointer;\n  display: block;\n  height: 0px;\n  border: 0;\n  border-top: 3px solid #ccc;\n  margin: 20px 0;\n}\n.w-e-clear-fix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.w-e-drop-list-item {\n  position: relative;\n  top: 1px;\n  padding-right: 7px;\n  color: #333 !important;\n}\n.w-e-drop-list-tl {\n  padding-left: 10px;\n  text-align: left;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(157);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(158);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(159);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'w-e-icon';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"w-e-icon-\"],\n[class*=\" w-e-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'w-e-icon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.w-e-icon-close:before {\n  content: \"\\f00d\";\n}\n.w-e-icon-upload2:before {\n  content: \"\\e9c6\";\n}\n.w-e-icon-trash-o:before {\n  content: \"\\f014\";\n}\n.w-e-icon-header:before {\n  content: \"\\f1dc\";\n}\n.w-e-icon-pencil2:before {\n  content: \"\\e906\";\n}\n.w-e-icon-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.w-e-icon-image:before {\n  content: \"\\e90d\";\n}\n.w-e-icon-play:before {\n  content: \"\\e912\";\n}\n.w-e-icon-location:before {\n  content: \"\\e947\";\n}\n.w-e-icon-undo:before {\n  content: \"\\e965\";\n}\n.w-e-icon-redo:before {\n  content: \"\\e966\";\n}\n.w-e-icon-quotes-left:before {\n  content: \"\\e977\";\n}\n.w-e-icon-list-numbered:before {\n  content: \"\\e9b9\";\n}\n.w-e-icon-list2:before {\n  content: \"\\e9bb\";\n}\n.w-e-icon-link:before {\n  content: \"\\e9cb\";\n}\n.w-e-icon-happy:before {\n  content: \"\\e9df\";\n}\n.w-e-icon-bold:before {\n  content: \"\\ea62\";\n}\n.w-e-icon-underline:before {\n  content: \"\\ea63\";\n}\n.w-e-icon-italic:before {\n  content: \"\\ea64\";\n}\n.w-e-icon-strikethrough:before {\n  content: \"\\ea65\";\n}\n.w-e-icon-table2:before {\n  content: \"\\ea71\";\n}\n.w-e-icon-paragraph-left:before {\n  content: \"\\ea77\";\n}\n.w-e-icon-paragraph-center:before {\n  content: \"\\ea78\";\n}\n.w-e-icon-paragraph-right:before {\n  content: \"\\ea79\";\n}\n.w-e-icon-paragraph-justify:before {\n  content: \"\\ea7a\";\n}\n.w-e-icon-terminal:before {\n  content: \"\\f120\";\n}\n.w-e-icon-page-break:before {\n  content: \"\\ea68\";\n}\n.w-e-icon-cancel-circle:before {\n  content: \"\\ea0d\";\n}\n.w-e-icon-font:before {\n  content: \"\\ea5c\";\n}\n.w-e-icon-text-heigh:before {\n  content: \"\\ea5f\";\n}\n.w-e-icon-paint-format:before {\n  content: \"\\e90c\";\n}\n.w-e-icon-indent-increase:before {\n  content: \"\\ea7b\";\n}\n.w-e-icon-indent-decrease:before {\n  content: \"\\ea7c\";\n}\n.w-e-icon-row-height:before {\n  content: \"\\e9be\";\n}\n.w-e-icon-fullscreen_exit:before {\n  content: \"\\e900\";\n}\n.w-e-icon-fullscreen:before {\n  content: \"\\e901\";\n}\n.w-e-icon-split-line:before {\n  content: \"\\ea0b\";\n}\n.w-e-icon-checkbox-checked:before {\n  content: \"\\ea52\";\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(161);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-toolbar {\n  display: flex;\n  padding: 0 6px;\n  flex-wrap: wrap;\n  position: relative;\n  /* ???????????? */\n}\n.w-e-toolbar .w-e-menu {\n  position: relative;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n.w-e-toolbar .w-e-menu i {\n  color: #999;\n}\n.w-e-toolbar .w-e-menu:hover {\n  background-color: #F6F6F6;\n}\n.w-e-toolbar .w-e-menu:hover i {\n  color: #333;\n}\n.w-e-toolbar .w-e-active i {\n  color: #1e88e5;\n}\n.w-e-toolbar .w-e-active:hover i {\n  color: #1e88e5;\n}\n.w-e-menu-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-menu-tooltip-up::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-menu-tooltip-down::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-menu-tooltip-item-wrapper {\n  font-size: 14px;\n  margin: 0 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(163);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-text-container {\n  position: relative;\n  height: 100%;\n}\n.w-e-text-container .w-e-progress {\n  position: absolute;\n  background-color: #1e88e5;\n  top: 0;\n  left: 0;\n  height: 1px;\n}\n.w-e-text-container .placeholder {\n  color: #D4D4D4;\n  position: absolute;\n  font-size: 11pt;\n  line-height: 22px;\n  left: 10px;\n  top: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: -1;\n}\n.w-e-text {\n  padding: 0 10px;\n  overflow-y: auto;\n}\n.w-e-text p,\n.w-e-text h1,\n.w-e-text h2,\n.w-e-text h3,\n.w-e-text h4,\n.w-e-text h5,\n.w-e-text table,\n.w-e-text pre {\n  margin: 10px 0;\n  line-height: 1.5;\n}\n.w-e-text ul,\n.w-e-text ol {\n  margin: 10px 0 10px 20px;\n}\n.w-e-text blockquote {\n  display: block;\n  border-left: 8px solid #d0e5f2;\n  padding: 5px 10px;\n  margin: 10px 0;\n  line-height: 1.4;\n  font-size: 100%;\n  background-color: #f1f1f1;\n}\n.w-e-text code {\n  display: inline-block;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 3px 5px;\n  margin: 0 3px;\n}\n.w-e-text pre code {\n  display: block;\n}\n.w-e-text table {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n}\n.w-e-text table td,\n.w-e-text table th {\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 3px 5px;\n  min-height: 30px;\n}\n.w-e-text table th {\n  border-bottom: 2px solid #ccc;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n.w-e-text:focus {\n  outline: none;\n}\n.w-e-text img {\n  cursor: pointer;\n}\n.w-e-text img:hover {\n  box-shadow: 0 0 5px #333;\n}\n.w-e-text .w-e-todo {\n  margin: 0 0 0 20px;\n}\n.w-e-text .w-e-todo li {\n  list-style: none;\n  font-size: 1em;\n}\n.w-e-text .w-e-todo li span:nth-child(1) {\n  position: relative;\n  left: -18px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input {\n  position: absolute;\n  margin-right: 3px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {\n  top: 50%;\n  margin-top: -6px;\n}\n.w-e-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-tooltip-up::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-down::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-item-wrapper {\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0 5px;\n}\n.w-e-tooltip-item-wrapper:hover {\n  color: #ccc;\n  text-decoration: underline;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(165);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-menu .w-e-panel-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border: 1px solid #ccc;\n  border-top: 0;\n  box-shadow: 1px 1px 2px #ccc;\n  color: #333;\n  background-color: #fff;\n  text-align: left;\n  /* ??? emotion panel ??????????????? */\n  /* ?????????????????????????????? panel ???????????? */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  margin: 2px 5px 0 0;\n  cursor: pointer;\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close:hover {\n  color: #333;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title {\n  list-style: none;\n  display: flex;\n  font-size: 14px;\n  margin: 2px 10px 0 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {\n  padding: 3px 5px;\n  color: #999;\n  cursor: pointer;\n  margin: 0 3px;\n  position: relative;\n  top: 1px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {\n  color: #333;\n  border-bottom: 1px solid #333;\n  cursor: default;\n  font-weight: 700;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content {\n  padding: 10px 15px 10px 15px;\n  font-size: 16px;\n  /* ?????????????????? */\n  /* ??????????????? */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {\n  outline: none;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  margin-top: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {\n  border-color: #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 14px;\n  height: 20px;\n  color: #333;\n  text-align: left;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {\n  width: 30px;\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {\n  border-bottom: 2px solid #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {\n  font-size: 14px;\n  color: #1e88e5;\n  border: none;\n  padding: 5px 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {\n  float: left;\n  margin-right: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {\n  float: right;\n  margin-left: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {\n  color: #c24f4a;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {\n  background-color: #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 3px;\n  display: inline-block;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container,\n.w-e-menu .w-e-panel-container .w-e-up-video-container {\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {\n  display: inline-block;\n  color: #999;\n  cursor: pointer;\n  font-size: 60px;\n  line-height: 1;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {\n  color: #333;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(167);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-toolbar .w-e-droplist {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  border: 1px solid #f1f1f1;\n  border-right-color: #ccc;\n  border-bottom-color: #ccc;\n}\n.w-e-toolbar .w-e-droplist .w-e-dp-title {\n  text-align: center;\n  color: #999;\n  line-height: 2;\n  border-bottom: 1px solid #f1f1f1;\n  font-size: 13px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list {\n  list-style: none;\n  line-height: 1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {\n  color: #333;\n  padding: 5px 0;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block {\n  list-style: none;\n  text-align: left;\n  padding: 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {\n  display: inline-block;\n  padding: 3px 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description polyfill ????????????js ??????????????????????????? babel transform runtime ?????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _promise = _interopRequireDefault(__webpack_require__(169));

if (!Element.prototype.matches) {
  Element.prototype.matches = function (s) {
    var matches = this.ownerDocument.querySelectorAll(s);
    var i = matches.length;

    for (i; i >= 0; i--) {
      if (matches.item(i) === this) break;
    }

    return i > -1;
  };
} // ?????????????????????????????? Promise ?????? IE11 ??????????????? Promise ????????????


if (!_promise["default"]) {
  window.Promise = _promise["default"];
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(170);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(171);
__webpack_require__(45);

module.exports = parent;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172);
__webpack_require__(55);
__webpack_require__(57);
__webpack_require__(179);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(58);
var path = __webpack_require__(11);

module.exports = path.Promise;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var getPrototypeOf = __webpack_require__(83);
var setPrototypeOf = __webpack_require__(84);
var create = __webpack_require__(69);
var createNonEnumerableProperty = __webpack_require__(19);
var createPropertyDescriptor = __webpack_require__(38);
var iterate = __webpack_require__(41);
var toString = __webpack_require__(30);

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    // eslint-disable-next-line unicorn/error-message -- expected
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', toString(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var definePropertyModule = __webpack_require__(18);
var anObject = __webpack_require__(20);
var objectKeys = __webpack_require__(53);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var inspectSource = __webpack_require__(115);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(116).IteratorPrototype;
var create = __webpack_require__(69);
var createPropertyDescriptor = __webpack_require__(38);
var setToStringTag = __webpack_require__(44);
var Iterators = __webpack_require__(42);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(88);
var classof = __webpack_require__(71);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var IS_PURE = __webpack_require__(39);
var global = __webpack_require__(8);
var getBuiltIn = __webpack_require__(25);
var NativePromise = __webpack_require__(117);
var redefine = __webpack_require__(56);
var redefineAll = __webpack_require__(118);
var setPrototypeOf = __webpack_require__(84);
var setToStringTag = __webpack_require__(44);
var setSpecies = __webpack_require__(119);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(34);
var anInstance = __webpack_require__(91);
var inspectSource = __webpack_require__(115);
var iterate = __webpack_require__(41);
var checkCorrectnessOfIteration = __webpack_require__(120);
var speciesConstructor = __webpack_require__(121);
var task = __webpack_require__(122).set;
var microtask = __webpack_require__(180);
var promiseResolve = __webpack_require__(124);
var hostReportErrors = __webpack_require__(183);
var newPromiseCapabilityModule = __webpack_require__(72);
var perform = __webpack_require__(93);
var InternalStateModule = __webpack_require__(43);
var isForced = __webpack_require__(109);
var wellKnownSymbol = __webpack_require__(9);
var IS_BROWSER = __webpack_require__(184);
var IS_NODE = __webpack_require__(92);
var V8_VERSION = __webpack_require__(66);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromiseConstructorPrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructorPrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromiseConstructorPrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          nativeThen.call(that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(77).f;
var macrotask = __webpack_require__(122).set;
var IS_IOS = __webpack_require__(123);
var IS_IOS_PEBBLE = __webpack_require__(181);
var IS_WEBOS_WEBKIT = __webpack_require__(182);
var IS_NODE = __webpack_require__(92);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(52);
var global = __webpack_require__(8);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(52);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = typeof window == 'object';


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var aFunction = __webpack_require__(34);
var newPromiseCapabilityModule = __webpack_require__(72);
var perform = __webpack_require__(93);
var iterate = __webpack_require__(41);

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var aFunction = __webpack_require__(34);
var getBuiltIn = __webpack_require__(25);
var newPromiseCapabilityModule = __webpack_require__(72);
var perform = __webpack_require__(93);
var iterate = __webpack_require__(41);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var IS_PURE = __webpack_require__(39);
var NativePromise = __webpack_require__(117);
var fails = __webpack_require__(12);
var getBuiltIn = __webpack_require__(25);
var speciesConstructor = __webpack_require__(121);
var promiseResolve = __webpack_require__(124);
var redefine = __webpack_require__(56);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && typeof NativePromise == 'function') {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method) {
    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(70);
var toString = __webpack_require__(30);
var requireObjectCoercible = __webpack_require__(51);

// `String.prototype.codePointAt` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 189 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
var forEach = __webpack_require__(191);
var classof = __webpack_require__(71);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins -- safe
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(192);

module.exports = parent;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(193);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var forEach = __webpack_require__(194);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(31).forEach;
var arrayMethodIsStrict = __webpack_require__(73);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(59);
var wellKnownSymbol = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(197);

module.exports = parent;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
var path = __webpack_require__(11);

module.exports = path.Array.isArray;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var isArray = __webpack_require__(59);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(200);

module.exports = parent;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(201);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(202);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var $map = __webpack_require__(31).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(60);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(204);

module.exports = parent;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(205);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.trim) ? trim : own;
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(206);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('String').trim;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var $trim = __webpack_require__(97).trim;
var forcedStringTrimMethod = __webpack_require__(207);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var whitespaces = __webpack_require__(74);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(209);
__webpack_require__(45);

module.exports = parent;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(210);
__webpack_require__(57);
__webpack_require__(58);
var path = __webpack_require__(11);

module.exports = path.Map;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(126);
var collectionStrong = __webpack_require__(129);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(213);

module.exports = parent;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(214);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(215);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(5);
var $indexOf = __webpack_require__(85).indexOf;
var arrayMethodIsStrict = __webpack_require__(73);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(217);

module.exports = parent;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var splice = __webpack_require__(218);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.splice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.splice) ? splice : own;
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(219);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').splice;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var toAbsoluteIndex = __webpack_require__(86);
var toInteger = __webpack_require__(70);
var toLength = __webpack_require__(35);
var toObject = __webpack_require__(26);
var arraySpeciesCreate = __webpack_require__(95);
var createProperty = __webpack_require__(75);
var arrayMethodHasSpeciesSupport = __webpack_require__(60);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(221);

module.exports = parent;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(222);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(223);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var $filter = __webpack_require__(31).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(60);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(225);

module.exports = parent;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(226);
var stringIncludes = __webpack_require__(228);

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(227);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').includes;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var $includes = __webpack_require__(85).includes;
var addToUnscopables = __webpack_require__(89);

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(229);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('String').includes;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var notARegExp = __webpack_require__(230);
var requireObjectCoercible = __webpack_require__(51);
var toString = __webpack_require__(30);
var correctIsRegExpLogic = __webpack_require__(232);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~toString(requireObjectCoercible(this))
      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(231);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var classof = __webpack_require__(50);
var wellKnownSymbol = __webpack_require__(9);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(234);

module.exports = parent;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(235);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;
};


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(236);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Function').bind;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var bind = __webpack_require__(237);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(34);
var isObject = __webpack_require__(13);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(240);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
// TODO: Remove from `core-js@4`
__webpack_require__(265);
// TODO: Remove from `core-js@4`
__webpack_require__(266);

module.exports = parent;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(241);
__webpack_require__(45);

module.exports = parent;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(242);
__webpack_require__(57);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(131);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
var path = __webpack_require__(11);

module.exports = path.Symbol;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var fails = __webpack_require__(12);
var isArray = __webpack_require__(59);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(26);
var toLength = __webpack_require__(35);
var createProperty = __webpack_require__(75);
var arraySpeciesCreate = __webpack_require__(95);
var arrayMethodHasSpeciesSupport = __webpack_require__(60);
var wellKnownSymbol = __webpack_require__(9);
var V8_VERSION = __webpack_require__(66);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var global = __webpack_require__(8);
var getBuiltIn = __webpack_require__(25);
var IS_PURE = __webpack_require__(39);
var DESCRIPTORS = __webpack_require__(15);
var NATIVE_SYMBOL = __webpack_require__(79);
var fails = __webpack_require__(12);
var has = __webpack_require__(17);
var isArray = __webpack_require__(59);
var isObject = __webpack_require__(13);
var isSymbol = __webpack_require__(65);
var anObject = __webpack_require__(20);
var toObject = __webpack_require__(26);
var toIndexedObject = __webpack_require__(29);
var toPropertyKey = __webpack_require__(64);
var $toString = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(38);
var nativeObjectCreate = __webpack_require__(69);
var objectKeys = __webpack_require__(53);
var getOwnPropertyNamesModule = __webpack_require__(98);
var getOwnPropertyNamesExternal = __webpack_require__(128);
var getOwnPropertySymbolsModule = __webpack_require__(130);
var getOwnPropertyDescriptorModule = __webpack_require__(77);
var definePropertyModule = __webpack_require__(18);
var propertyIsEnumerableModule = __webpack_require__(63);
var createNonEnumerableProperty = __webpack_require__(19);
var redefine = __webpack_require__(56);
var shared = __webpack_require__(80);
var sharedKey = __webpack_require__(68);
var hiddenKeys = __webpack_require__(54);
var uid = __webpack_require__(67);
var wellKnownSymbol = __webpack_require__(9);
var wrappedWellKnownSymbolModule = __webpack_require__(101);
var defineWellKnownSymbol = __webpack_require__(10);
var setToStringTag = __webpack_require__(44);
var InternalStateModule = __webpack_require__(43);
var $forEach = __webpack_require__(31).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 245 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var setToStringTag = __webpack_require__(44);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 258 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 259 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('matcher');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol('metadata');


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(10);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(268);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(269);

module.exports = parent;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(270);
__webpack_require__(45);

module.exports = parent;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(131);
var WrappedWellKnownSymbolModule = __webpack_require__(101);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(272);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(273);

module.exports = parent;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(274);
var path = __webpack_require__(11);

module.exports = path.parseInt;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var parseIntImplementation = __webpack_require__(275);

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var toString = __webpack_require__(30);
var trim = __webpack_require__(97).trim;
var whitespaces = __webpack_require__(74);

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(277);

module.exports = parent;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(278);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(279);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').slice;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var isObject = __webpack_require__(13);
var isArray = __webpack_require__(59);
var toAbsoluteIndex = __webpack_require__(86);
var toLength = __webpack_require__(35);
var toIndexedObject = __webpack_require__(29);
var createProperty = __webpack_require__(75);
var wellKnownSymbol = __webpack_require__(9);
var arrayMethodHasSpeciesSupport = __webpack_require__(60);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(281);
var path = __webpack_require__(11);

module.exports = path.setTimeout;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var global = __webpack_require__(8);
var userAgent = __webpack_require__(52);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _assign = _interopRequireDefault(__webpack_require__(132));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var menus_1 = tslib_1.__importDefault(__webpack_require__(287));

var events_1 = tslib_1.__importDefault(__webpack_require__(288));

var style_1 = tslib_1.__importDefault(__webpack_require__(133));

var paste_1 = tslib_1.__importDefault(__webpack_require__(289));

var cmd_1 = tslib_1.__importDefault(__webpack_require__(290));

var image_1 = tslib_1.__importDefault(__webpack_require__(291));

var text_1 = tslib_1.__importDefault(__webpack_require__(134));

var lang_1 = tslib_1.__importDefault(__webpack_require__(292));

var history_1 = tslib_1.__importDefault(__webpack_require__(293));

var video_1 = tslib_1.__importDefault(__webpack_require__(294)); // ???????????????????????????


var defaultConfig = (0, _assign["default"])({}, menus_1["default"], events_1["default"], style_1["default"], cmd_1["default"], paste_1["default"], image_1["default"], text_1["default"], lang_1["default"], history_1["default"], video_1["default"], //???????????????????????????
{
  linkCheck: function linkCheck(text, link) {
    return true;
  }
});
exports["default"] = defaultConfig;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(284);

module.exports = parent;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(285);
var path = __webpack_require__(11);

module.exports = path.Object.assign;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var assign = __webpack_require__(286);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(15);
var fails = __webpack_require__(12);
var objectKeys = __webpack_require__(53);
var getOwnPropertySymbolsModule = __webpack_require__(130);
var propertyIsEnumerableModule = __webpack_require__(63);
var toObject = __webpack_require__(26);
var IndexedObject = __webpack_require__(78);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/*??????????????????????????????END*/

exports["default"] = {
  menus: ['head', 'bold', 'fontSize', // 'customFontSize',
  'fontName', 'italic', 'underline', 'strikeThrough', 'indent', 'lineHeight', 'foreColor', 'backColor', 'link', 'list', 'todo', 'justify', 'quote', 'emoticon', 'image', 'video', 'table', 'code', 'splitLine', 'undo', 'redo'],
  fontNames: ['??????', '??????', '??????', '?????????', '????????????', '????????????', '??????', '????????????', 'Arial', 'Tahoma', 'Verdana', 'Times New Roman', 'Courier New'],
  //  fontNames: [{ name: '??????', value: '??????' }],
  fontSizes: {
    'x-small': {
      name: '10px',
      value: '1'
    },
    small: {
      name: '13px',
      value: '2'
    },
    normal: {
      name: '16px',
      value: '3'
    },
    large: {
      name: '18px',
      value: '4'
    },
    'x-large': {
      name: '24px',
      value: '5'
    },
    'xx-large': {
      name: '32px',
      value: '6'
    },
    'xxx-large': {
      name: '48px',
      value: '7'
    }
  },
  // customFontSize: [ // ????????????????????? - ????????? 20200924
  //     { value: '9px', text: '9' },
  //     { value: '10px', text: '10' },
  //     { value: '12px', text: '12' },
  //     { value: '14px', text: '14' },
  //     { value: '16px', text: '16' },
  //     { value: '20px', text: '20' },
  //     { value: '42px', text: '42' },
  //     { value: '72px', text: '72' },
  // ],
  colors: ['#000000', '#ffffff', '#eeece0', '#1c487f', '#4d80bf', '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b'],
  //????????????????????????
  languageType: ['Bash', 'C', 'C#', 'C++', 'CSS', 'Java', 'JavaScript', 'JSON', 'TypeScript', 'Plain text', 'Html', 'XML', 'SQL', 'Go', 'Kotlin', 'Lua', 'Markdown', 'PHP', 'Python', 'Shell Session', 'Ruby'],
  languageTab: '????????????',

  /**
   * ??????????????????
   * ?????????emoji??????????????????????????????
   * emoticon:Array<EmotionsType>
   */
  emotions: [{
    // tab ?????????
    title: '??????',
    // type -> 'emoji' / 'image'
    type: 'emoji',
    // content -> ??????
    content: '???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ???? ????'.split(/\s/)
  }, {
    // tab ?????????
    title: '??????',
    // type -> 'emoji' / 'image'
    type: 'emoji',
    // content -> ??????
    content: '???? ???? ???? ???? ???? ???? ???? ??? ???? ???? ???? ?????? ???? ???? ???? ???? ???? ???? ?????? ??? ???? ???? ???? ???? ???? ???? ???? ?????? ????'.split(/\s/)
  }],
  lineHeights: ['1', '1.15', '1.6', '2', '2.5', '3'],
  undoLimit: 20,
  indentation: '2em',
  showMenuTooltips: true,
  // ?????????tooltip?????????????????????
  menuTooltipPosition: 'up'
};

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var const_1 = __webpack_require__(7);
/**
 * ????????????
 * @param alertInfo alert info
 * @param alertType ??????????????????
 * @param debugInfo debug info
 */


function customAlert(alertInfo, alertType, debugInfo) {
  window.alert(alertInfo);

  if (debugInfo) {
    console.error('wangEditor: ' + debugInfo);
  }
}

exports["default"] = {
  onchangeTimeout: 200,
  onchange: null,
  onfocus: const_1.EMPTY_FN,
  onblur: const_1.EMPTY_FN,
  onCatalogChange: null,
  customAlert: customAlert
};

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  // ?????????????????????????????????
  pasteFilterStyle: true,
  // ?????????????????????????????????????????????
  pasteIgnoreImg: false,
  // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  // IE ???????????????
  pasteTextHandle: function pasteTextHandle(content) {
    // content ???????????????????????????html ??? ???????????????????????????????????????????????????
    return content;
  }
};

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  styleWithCSS: false // ?????? false

};

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var const_1 = __webpack_require__(7);

exports["default"] = {
  // ?????????????????????????????????
  linkImgCheck: function linkImgCheck(src, alt, href) {
    return true;
  },
  // ??????????????????????????????
  showLinkImg: true,
  // ?????????????????????alt???
  showLinkImgAlt: true,
  // ?????????????????????href???
  showLinkImgHref: true,
  // ???????????????????????????????????????
  linkImgCallback: const_1.EMPTY_FN,
  // accept
  uploadImgAccept: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
  // ???????????????
  uploadImgServer: '',
  // ?????? base64 ????????????
  uploadImgShowBase64: false,
  // ???????????????????????????????????? 5M
  uploadImgMaxSize: 5 * 1024 * 1024,
  // ?????????????????????????????????
  uploadImgMaxLength: 100,
  // ??????????????????????????????
  uploadFileName: '',
  // ???????????????????????????
  uploadImgParams: {},
  // ???????????????????????? url ???
  uploadImgParamsWithUrl: false,
  // ????????????????????? header
  uploadImgHeaders: {},
  // ????????????
  uploadImgHooks: {},
  // ???????????????????????? ms
  uploadImgTimeout: 10 * 1000,
  // ????????? cookie
  withCredentials: false,
  // ???????????????
  customUploadImg: null,
  // ??????????????????
  uploadImgFromMedia: null
};

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  lang: 'zh-CN',
  languages: {
    'zh-CN': {
      wangEditor: {
        ??????: '??????',
        ??????: '??????',
        ??????: '??????',
        ??????: '??????',
        ??????: '??????',
        ???: '???',
        ???????????????: '???????????????',
        menus: {
          title: {
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ?????????: '?????????',
            ?????????: '?????????',
            ??????: '??????',
            ??????: '??????',
            ????????????: '????????????',
            ?????????: '?????????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ?????????: '?????????',
            ??????: '??????',
            ??????: '??????',
            ??????: '??????',
            ????????????: '????????????',
            ????????????: '????????????'
          },
          dropListMenu: {
            ????????????: '????????????',
            ????????????: '????????????',
            ????????????: '????????????',
            ????????????: '????????????',
            ????????????: '????????????',
            ????????????: '????????????',
            ????????????: '????????????',
            ????????????: '????????????',
            ??????: '??????',
            head: {
              ??????: '??????'
            },
            indent: {
              ????????????: '????????????',
              ????????????: '????????????'
            },
            justify: {
              ??????: '??????',
              ??????: '??????',
              ??????: '??????',
              ??????: '??????'
            },
            list: {
              ????????????: '????????????',
              ????????????: '????????????'
            }
          },
          panelMenus: {
            emoticon: {
              ??????: '??????',
              ??????: '??????',
              emoji: 'emoji',
              ??????: '??????'
            },
            image: {
              ????????????: '????????????',
              ????????????: '????????????',
              ????????????: '????????????',
              ??????????????????: '??????????????????',
              ????????????: '????????????'
            },
            link: {
              ??????: '??????',
              ????????????: '????????????',
              ????????????: '????????????',
              ????????????: '????????????'
            },
            video: {
              ????????????: '????????????',
              ????????????: '????????????'
            },
            table: {
              ???: '???',
              ???: '???',
              ???: '???',
              ??????: '??????',
              ?????????: '?????????',
              ?????????: '?????????',
              ?????????: '?????????',
              ?????????: '?????????',
              ????????????: '????????????',
              ????????????: '????????????',
              ????????????: '????????????',
              ????????????: '????????????'
            },
            code: {
              ????????????: '????????????',
              ????????????: '????????????',
              ????????????: '????????????'
            }
          }
        },
        validate: {
          ?????????: '?????????',
          ??????: '??????',
          ????????????: '????????????',
          ????????????: '????????????',
          ????????????: '????????????',
          ??????????????????: '??????????????????',
          ??????????????????: '??????????????????',
          ??????????????????: '??????????????????',
          ??????????????????: '??????????????????',
          ??????????????????: '??????????????????',
          ??????????????????: '??????????????????',
          ?????????????????????: '?????????????????????',
          ?????????????????????: '?????????????????????',
          ??????????????????????????????: '??????????????????????????????',
          ?????????????????????????????????: '?????????????????????????????????',
          ????????????????????????????????????: '????????????????????????????????????',
          ??????????????????????????????????????????????????????: '??????????????????????????????????????????????????????',
          ??????????????????: '??????????????????',
          ????????????: '????????????',
          ????????????: '????????????',
          ?????????????????????: '?????????????????????',
          ?????????: '?????????',
          ??????????????????: '??????????????????',
          ??????????????????: '??????????????????',
          ??????????????????: '??????????????????',
          ??????????????????????????????: '??????????????????????????????'
        }
      }
    },
    en: {
      wangEditor: {
        ??????: 'reset',
        ??????: 'insert',
        ??????: 'default',
        ??????: 'create',
        ??????: 'edit',
        ???: 'like',
        ???????????????: 'please enter the text',
        menus: {
          title: {
            ??????: 'head',
            ??????: 'bold',
            ??????: 'font size',
            ??????: 'font family',
            ??????: 'italic',
            ?????????: 'underline',
            ?????????: 'strikethrough',
            ??????: 'indent',
            ??????: 'line heihgt',
            ????????????: 'font color',
            ?????????: 'background',
            ??????: 'link',
            ??????: 'numbered list',
            ??????: 'align',
            ??????: 'quote',
            ??????: 'emoticons',
            ??????: 'image',
            ??????: 'media',
            ??????: 'table',
            ??????: 'code',
            ?????????: 'split line',
            ??????: 'undo',
            ??????: 'redo',
            ??????: 'fullscreen',
            ????????????: 'cancel fullscreen',
            ????????????: 'todo'
          },
          dropListMenu: {
            ????????????: 'title',
            ????????????: 'background',
            ????????????: 'font color',
            ????????????: 'font size',
            ????????????: 'font family',
            ????????????: 'indent',
            ????????????: 'align',
            ????????????: 'line heihgt',
            ??????: 'list',
            head: {
              ??????: 'text'
            },
            indent: {
              ????????????: 'indent',
              ????????????: 'outdent'
            },
            justify: {
              ??????: 'left',
              ??????: 'center',
              ??????: 'right',
              ??????: 'justify'
            },
            list: {
              ????????????: 'unordered',
              ????????????: 'ordered'
            }
          },
          panelMenus: {
            emoticon: {
              ??????: 'emoji',
              ??????: 'gesture'
            },
            image: {
              ????????????: 'upload image',
              ????????????: 'network image',
              ????????????: 'image link',
              ??????????????????: 'image alt',
              ????????????: 'hyperlink'
            },
            link: {
              ??????: 'link',
              ????????????: 'link text',
              ????????????: 'unlink',
              ????????????: 'view links'
            },
            video: {
              ????????????: 'insert video',
              ????????????: 'upload local video'
            },
            table: {
              ???: 'rows',
              ???: 'columns',
              ???: ' ',
              ??????: 'table',
              ?????????: 'insert row',
              ?????????: 'delete row',
              ?????????: 'insert column',
              ?????????: 'delete column',
              ????????????: 'set header',
              ????????????: 'cancel header',
              ????????????: 'insert table',
              ????????????: 'delete table'
            },
            code: {
              ????????????: 'delete code',
              ????????????: 'edit code',
              ????????????: 'insert code'
            }
          }
        },
        validate: {
          ?????????: 'images',
          ??????: 'greater than',
          ????????????: 'image link',
          ????????????: 'is not image',
          ????????????: 'return results',
          ??????????????????: 'upload image timeout',
          ??????????????????: 'upload image error',
          ??????????????????: 'upload image failed',
          ??????????????????: 'insert image error',
          ??????????????????: 'once most at upload',
          ??????????????????: 'download link failed',
          ?????????????????????: 'image validate failed',
          ?????????????????????: 'server return status',
          ??????????????????????????????: 'upload image return results error',
          ?????????????????????????????????: 'please replace with a supported image type',
          ????????????????????????????????????: 'the network picture you inserted is not recognized',
          ??????????????????????????????????????????????????????: 'the image link you just inserted did not pass the editor verification',
          ??????????????????: 'insert video error',
          ????????????: 'video link',
          ????????????: 'is not video',
          ?????????????????????: 'video validate failed',
          ?????????: 'videos',
          ??????????????????: 'upload video timeout',
          ??????????????????: 'upload video error',
          ??????????????????: 'upload video failed',
          ??????????????????????????????: 'upload video return results error'
        }
      }
    }
  }
};

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? - ?????????????????????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(6);
/**
 * ?????????????????????????????? true ?????????????????????????????????????????????????????????????????????????????????????????????
 */


function compatibleMode() {
  if (util_1.UA.isIE() || util_1.UA.isOldEdge) {
    return true;
  }

  return false;
}

exports["default"] = {
  compatibleMode: compatibleMode,
  historyMaxSize: 30
};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author hutianhao
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var const_1 = __webpack_require__(7);

exports["default"] = {
  // ????????????????????????????????????
  onlineVideoCheck: function onlineVideoCheck(video) {
    return true;
  },
  // ?????????????????????????????????????????????
  onlineVideoCallback: const_1.EMPTY_FN,
  // ????????????????????????
  showLinkVideo: true,
  // accept
  uploadVideoAccept: ['mp4'],
  // ???????????????
  uploadVideoServer: '',
  // ???????????????????????????????????? 1024M
  uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
  // ?????????????????????????????????
  // uploadVideoMaxLength: 2,
  // ??????????????????????????????
  uploadVideoName: '',
  // ???????????????????????????
  uploadVideoParams: {},
  // ???????????????????????? url ???
  uploadVideoParamsWithUrl: false,
  // ????????????????????? header
  uploadVideoHeaders: {},
  // ????????????
  uploadVideoHooks: {},
  // ???????????????????????? ms ??????2?????????
  uploadVideoTimeout: 1000 * 60 * 60 * 2,
  // ????????? cookie
  withVideoCredentials: false,
  // ???????????????
  customUploadVideo: null,
  // ?????????????????????
  customInsertVideo: null
};

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description selection range API
 * @author wangfupeng
 */


var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);

var const_1 = __webpack_require__(7);

var SelectionAndRange = function () {
  function SelectionAndRange(editor) {
    this._currentRange = null;
    this.editor = editor;
  }
  /**
   * ???????????? range
   */


  SelectionAndRange.prototype.getRange = function () {
    return this._currentRange;
  };
  /**
   * ??????????????????
   * @param _range ????????????
   */


  SelectionAndRange.prototype.saveRange = function (_range) {
    if (_range) {
      // ??????????????????
      this._currentRange = _range;
      return;
    } // ?????????????????????


    var selection = window.getSelection();

    if (selection.rangeCount === 0) {
      return;
    }

    var range = selection.getRangeAt(0); // ????????????????????? DOM ??????

    var $containerElem = this.getSelectionContainerElem(range);

    if (!($containerElem === null || $containerElem === void 0 ? void 0 : $containerElem.length)) {
      // ??? ????????????????????? DOM?????? ?????????
      return;
    }

    if ($containerElem.attr('contenteditable') === 'false' || $containerElem.parentUntil('[contenteditable=false]')) {
      // ????????????????????????????????????
      // ?????? ???????????? ??? contenteditable?????? ????????? true
      return;
    }

    var editor = this.editor;
    var $textElem = editor.$textElem;

    if ($textElem.isContain($containerElem)) {
      if ($textElem.elems[0] === $containerElem.elems[0]) {
        var _context;

        if ((0, _trim["default"])(_context = $textElem.html()).call(_context) === const_1.EMPTY_P) {
          var $children = $textElem.children();
          var $last = $children === null || $children === void 0 ? void 0 : $children.last();
          editor.selection.createRangeByElem($last, true, true);
          editor.selection.restoreSelection();
        }
      } // ????????????????????????


      this._currentRange = range;
    }
  };
  /**
   * ??????????????????
   * @param toStart true ???????????????false ????????????
   */


  SelectionAndRange.prototype.collapseRange = function (toStart) {
    if (toStart === void 0) {
      toStart = false;
    }

    var range = this._currentRange;

    if (range) {
      range.collapse(toStart);
    }
  };
  /**
   * ??????????????????????????????
   */


  SelectionAndRange.prototype.getSelectionText = function () {
    var range = this._currentRange;

    if (range) {
      return range.toString();
    } else {
      return '';
    }
  };
  /**
   * ????????????????????? DOM ??????
   * @param range ????????????
   */


  SelectionAndRange.prototype.getSelectionContainerElem = function (range) {
    var r;
    r = range || this._currentRange;
    var elem;

    if (r) {
      elem = r.commonAncestorContainer;
      return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
    }
  };
  /**
   * ????????????????????? DOM ??????
   * @param range ????????????
   */


  SelectionAndRange.prototype.getSelectionStartElem = function (range) {
    var r;
    r = range || this._currentRange;
    var elem;

    if (r) {
      elem = r.startContainer;
      return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
    }
  };
  /**
   * ????????????????????? DOM ??????
   * @param range ????????????
   */


  SelectionAndRange.prototype.getSelectionEndElem = function (range) {
    var r;
    r = range || this._currentRange;
    var elem;

    if (r) {
      elem = r.endContainer;
      return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
    }
  };
  /**
   * ??????????????????????????????????????????
   */


  SelectionAndRange.prototype.isSelectionEmpty = function () {
    var range = this._currentRange;

    if (range && range.startContainer) {
      if (range.startContainer === range.endContainer) {
        if (range.startOffset === range.endOffset) {
          return true;
        }
      }
    }

    return false;
  };
  /**
   * ??????????????????
   */


  SelectionAndRange.prototype.restoreSelection = function () {
    var selection = window.getSelection();
    var r = this._currentRange;

    if (selection && r) {
      selection.removeAllRanges();
      selection.addRange(r);
    }
  };
  /**
   * ???????????????????????? &#8203 ???????????????
   */


  SelectionAndRange.prototype.createEmptyRange = function () {
    var editor = this.editor;
    var range = this.getRange();
    var $elem;

    if (!range) {
      // ????????? range
      return;
    }

    if (!this.isSelectionEmpty()) {
      // ???????????????????????????????????????????????????????????? return
      return;
    }

    try {
      // ??????????????? webkit ??????
      if (util_1.UA.isWebkit()) {
        // ?????? &#8203
        editor.cmd["do"]('insertHTML', '&#8203;'); // ?????? offset ??????

        range.setEnd(range.endContainer, range.endOffset + 1); // ??????

        this.saveRange(range);
      } else {
        $elem = dom_core_1["default"]('<strong>&#8203;</strong>');
        editor.cmd["do"]('insertElem', $elem);
        this.createRangeByElem($elem, true);
      }
    } catch (ex) {// ???????????????????????????????????????
    }
  };
  /**
   * ??????????????????
   * @param startDom ?????????????????????
   * @param endDom ?????????????????????
   */


  SelectionAndRange.prototype.createRangeByElems = function (startDom, endDom) {
    var selection = window.getSelection ? window.getSelection() : document.getSelection(); //?????????????????????

    selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
    var range = document.createRange();
    range.setStart(startDom, 0); // ????????????????????????????????????????????????h????????????b???font???????????????range???????????????

    range.setEnd(endDom, endDom.childNodes.length || 1); // ????????????????????????

    this.saveRange(range); //????????????

    this.restoreSelection();
  };
  /**
   * ?????? DOM ??????????????????
   * @param $elem DOM ??????
   * @param toStart true ???????????????false ????????????
   * @param isContent ???????????? $elem ?????????
   */


  SelectionAndRange.prototype.createRangeByElem = function ($elem, toStart, isContent) {
    if (!$elem.length) {
      return;
    }

    var elem = $elem.elems[0];
    var range = document.createRange();

    if (isContent) {
      range.selectNodeContents(elem);
    } else {
      // ???????????????????????? isContent ???????????????????????? false
      range.selectNode(elem);
    }

    if (toStart != null) {
      // ????????? toStart ??????????????????????????????????????? toStart ???????????????????????????
      range.collapse(toStart);

      if (!toStart) {
        this.saveRange(range);
        this.editor.selection.moveCursor(elem);
      }
    } // ?????? range


    this.saveRange(range);
  };
  /**
   * ?????? ?????? ??????????????? ??????(??????) ??????
   * @param $editor
   */


  SelectionAndRange.prototype.getSelectionRangeTopNodes = function () {
    var _a, _b; // ???????????????????????????


    var $nodeList;
    var $startElem = (_a = this.getSelectionStartElem()) === null || _a === void 0 ? void 0 : _a.getNodeTop(this.editor);
    var $endElem = (_b = this.getSelectionEndElem()) === null || _b === void 0 ? void 0 : _b.getNodeTop(this.editor);
    $nodeList = this.recordSelectionNodes(dom_core_1["default"]($startElem), dom_core_1["default"]($endElem));
    return $nodeList;
  };
  /**
   * ??????????????????,????????????????????????
   * ????????????????????????firefox???????????????????????????????????????br??????????????????????????????
   * ????????????????????????firefox????????????????????????????????????br??????
   * @param {Node} node ????????????
   * @param {number} position ???????????????
   */


  SelectionAndRange.prototype.moveCursor = function (node, position) {
    var _a;

    var range = this.getRange(); //???????????????????????????

    var len = node.nodeType === 3 ? (_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.length : node.childNodes.length;

    if ((util_1.UA.isFirefox || util_1.UA.isIE()) && len !== 0) {
      // firefox?????????????????????????????????????????????????????????????????????????????????
      if (node.nodeType === 3 || node.childNodes[len - 1].nodeName === 'BR') {
        len = len - 1;
      }
    }

    var pos = position !== null && position !== void 0 ? position : len;

    if (!range) {
      return;
    }

    if (node) {
      range.setStart(node, pos);
      range.setEnd(node, pos);
      this.restoreSelection();
    }
  };
  /**
   * ????????????????????????????????????
   */


  SelectionAndRange.prototype.getCursorPos = function () {
    var selection = window.getSelection();
    return selection === null || selection === void 0 ? void 0 : selection.anchorOffset;
  };
  /**
   * ?????????????????????Range,notice:?????????????????????Range
   */


  SelectionAndRange.prototype.clearWindowSelectionRange = function () {
    var selection = window.getSelection();

    if (selection) {
      selection.removeAllRanges();
    }
  };
  /**
   * ???????????? - ??????????????????????????? ??????????????????????????????????????????
   * @param $node ??????
   */


  SelectionAndRange.prototype.recordSelectionNodes = function ($node, $endElem) {
    var $list = [];
    var isEnd = true;
    /**
    @author:lw
    @description ??????ctrl+a???????????????bug $elem.getNodeName()???????????????$elem[0]?????????
    **/

    try {
      var $NODE = $node;
      var $textElem = this.editor.$textElem; // $NODE????????????????????????????????????

      while (isEnd) {
        var $elem = $NODE === null || $NODE === void 0 ? void 0 : $NODE.getNodeTop(this.editor);
        if ($elem.getNodeName() === 'BODY') isEnd = false; // ??????

        if ($elem.length > 0) {
          $list.push(dom_core_1["default"]($NODE)); // ?????????????????????
          // 1. ?????????????????????????????????????????????
          // 2. ?????????????????????????????????????????????????????????????????????????????????????????????placeholder?????????

          if (($endElem === null || $endElem === void 0 ? void 0 : $endElem.equal($elem)) || $textElem.equal($elem)) {
            isEnd = false;
          } else {
            $NODE = $elem.getNextSibling();
          }
        }
      }
    } catch (e) {
      isEnd = false;
    }

    return $list;
  };
  /**
   * ????????? range ????????? node ????????????????????????
   * ?????????????????????????????????????????????????????????
   * @param node ????????????
   */


  SelectionAndRange.prototype.setRangeToElem = function (node) {
    var range = this.getRange();
    range === null || range === void 0 ? void 0 : range.setStart(node, 0);
    range === null || range === void 0 ? void 0 : range.setEnd(node, 0);
  };

  return SelectionAndRange;
}();

exports["default"] = SelectionAndRange;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? document.execCommand
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Command = function () {
  function Command(editor) {
    this.editor = editor;
  }
  /**
   * ??????????????????????????????
   * @param name name
   * @param value value
   */


  Command.prototype["do"] = function (name, value) {
    var editor = this.editor;

    if (editor.config.styleWithCSS) {
      document.execCommand('styleWithCSS', false, 'true');
    }

    var selection = editor.selection; // ????????????????????????

    if (!selection.getRange()) {
      return;
    } // ????????????


    selection.restoreSelection(); // ??????

    switch (name) {
      case 'insertHTML':
        this.insertHTML(value);
        break;

      case 'insertElem':
        this.insertElem(value);
        break;

      default:
        // ?????? command
        this.execCommand(name, value);
        break;
    } // ??????????????????


    editor.menus.changeActive(); // ?????????????????????????????????????????????????????????

    selection.saveRange();
    selection.restoreSelection();
  };
  /**
   * ?????? html
   * @param html html ?????????
   */


  Command.prototype.insertHTML = function (html) {
    var editor = this.editor;
    var range = editor.selection.getRange();
    if (range == null) return;

    if (this.queryCommandSupported('insertHTML')) {
      // W3C
      this.execCommand('insertHTML', html);
    } else if (range.insertNode) {
      // IE
      range.deleteContents();

      if (dom_core_1["default"](html).elems.length > 0) {
        range.insertNode(dom_core_1["default"](html).elems[0]);
      } else {
        var newNode = document.createElement('p');
        newNode.appendChild(document.createTextNode(html));
        range.insertNode(newNode);
      }

      editor.selection.collapseRange();
    } // else if (range.pasteHTML) {
    //     // IE <= 10
    //     range.pasteHTML(html)
    // }

  };
  /**
   * ?????? DOM ??????
   * @param $elem DOM ??????
   */


  Command.prototype.insertElem = function ($elem) {
    var editor = this.editor;
    var range = editor.selection.getRange();
    if (range == null) return;

    if (range.insertNode) {
      range.deleteContents();
      range.insertNode($elem.elems[0]);
    }
  };
  /**
   * ?????? document.execCommand
   * @param name name
   * @param value value
   */


  Command.prototype.execCommand = function (name, value) {
    document.execCommand(name, false, value);
  };
  /**
   * ?????? document.queryCommandValue
   * @param name name
   */


  Command.prototype.queryCommandValue = function (name) {
    return document.queryCommandValue(name);
  };
  /**
   * ?????? document.queryCommandState
   * @param name name
   */


  Command.prototype.queryCommandState = function (name) {
    return document.queryCommandState(name);
  };
  /**
   * ?????? document.queryCommandSupported
   * @param name name
   */


  Command.prototype.queryCommandSupported = function (name) {
    return document.queryCommandSupported(name);
  };

  return Command;
}();

exports["default"] = Command;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _find = _interopRequireDefault(__webpack_require__(32));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _trim = _interopRequireDefault(__webpack_require__(16));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(48));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var index_1 = tslib_1.__importDefault(__webpack_require__(302));

var util_1 = __webpack_require__(6);

var getChildrenJSON_1 = tslib_1.__importDefault(__webpack_require__(314));

var getHtmlByNodeList_1 = tslib_1.__importDefault(__webpack_require__(315));

var const_1 = __webpack_require__(7);

var Text = function () {
  function Text(editor) {
    this.editor = editor;
    this.eventHooks = {
      onBlurEvents: [],
      changeEvents: [],
      dropEvents: [],
      clickEvents: [],
      keydownEvents: [],
      keyupEvents: [],
      tabUpEvents: [],
      tabDownEvents: [],
      enterUpEvents: [],
      enterDownEvents: [],
      deleteUpEvents: [],
      deleteDownEvents: [],
      pasteEvents: [],
      linkClickEvents: [],
      codeClickEvents: [],
      textScrollEvents: [],
      toolbarClickEvents: [],
      imgClickEvents: [],
      imgDragBarMouseDownEvents: [],
      tableClickEvents: [],
      menuClickEvents: [],
      dropListMenuHoverEvents: [],
      splitLineEvents: [],
      videoClickEvents: []
    };
  }
  /**
   * ?????????
   */


  Text.prototype.init = function () {
    // ????????????????????????
    this._saveRange(); // ????????????


    this._bindEventHooks(); // ????????? text ??????????????????


    index_1["default"](this);
  };
  /**
   * ??????placeholder
   */


  Text.prototype.togglePlaceholder = function () {
    var _context;

    var html = this.html();
    var $placeholder = (0, _find["default"])(_context = this.editor.$textContainerElem).call(_context, '.placeholder');
    $placeholder.hide();
    if (this.editor.isComposing) return;
    if (!html || html === ' ') $placeholder.show();
  };
  /**
   * ????????????
   */


  Text.prototype.clear = function () {
    this.html(const_1.EMPTY_P);
  };
  /**
   * ??????/?????? html
   * @param val html ?????????
   */


  Text.prototype.html = function (val) {
    var editor = this.editor;
    var $textElem = editor.$textElem; // ?????? val ??????????????? html

    if (val == null) {
      var html_1 = $textElem.html(); // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? &#8203 ??????????????????

      html_1 = html_1.replace(/\u200b/gm, ''); // ????????????

      html_1 = html_1.replace(/<p><\/p>/gim, ''); // ??????????????? ?????????

      html_1 = html_1.replace(const_1.EMPTY_P_LAST_REGEX, ''); // ????????????????????????????????????EMPTY_P?????????????????????, ????????????????????????, ????????????p????????????data-we-empty-p??????

      html_1 = html_1.replace(const_1.EMPTY_P_REGEX, '<p>');
      /**
       * ??????????????????????????????????????????????????????,???????????????????????????????????????????????????
       * html()?????????????????????,EMPTY_P???pr????????????,?????????<p>,????????????,????????????????????????
       * ??????????????????????????????????????????????????????????????????,?????????????????????????????????????????????
       * ????????????, ??????????????????????????????
       */
      // html = html.replace(/><br>(?!<)/gi, '>') // ?????? <p><br>??????</p> ??????br
      // html = html.replace(/(?!>)<br></gi, '<') // ?????? <p>??????<br></p> ??????br

      /**
       * pre???????????????
       * html()????????????????????????????????????????????????,????????????????????????html??????????????????????????????
       * ????????????hljs?????????,????????????????????????,??????????????????????????????????????????hljs????????????
       * ???????????????
       */
      // html = formatCodeHtml(editor, html)
      // ?????????????????????????????????????????????

      var selfCloseHtmls = html_1.match(/<(img|br|hr|input)[^>]*>/gi);

      if (selfCloseHtmls !== null) {
        (0, _forEach["default"])(selfCloseHtmls).call(selfCloseHtmls, function (item) {
          if (!item.match(/\/>/)) {
            html_1 = html_1.replace(item, item.substring(0, item.length - 1) + '/>');
          }
        });
      }

      return html_1;
    } // ??? val ??????????????? html


    val = (0, _trim["default"])(val).call(val);

    if (val === '') {
      val = const_1.EMPTY_P;
    }

    if ((0, _indexOf["default"])(val).call(val, '<') !== 0) {
      // ????????? p ????????????
      val = "<p>" + val + "</p>";
    }

    $textElem.html(val); // ????????????????????????????????????????????????

    editor.initSelection();
  };
  /**
   * ???json?????????html????????????
   * @param nodeList json??????
   */


  Text.prototype.setJSON = function (nodeList) {
    var html = getHtmlByNodeList_1["default"](nodeList).children();
    var editor = this.editor;
    var $textElem = editor.$textElem; // ??????????????????????????????

    if (!html) return; // ????????????????????????????????????

    $textElem.replaceChildAll(html);
  };
  /**
   * ?????? json ???????????????
   */


  Text.prototype.getJSON = function () {
    var editor = this.editor;
    var $textElem = editor.$textElem;
    return getChildrenJSON_1["default"]($textElem);
  };

  Text.prototype.text = function (val) {
    var editor = this.editor;
    var $textElem = editor.$textElem; // ?????? val ???????????? text

    if (val == null) {
      var text = $textElem.text(); // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????? &#8203 ??????????????????

      text = text.replace(/\u200b/gm, '');
      return text;
    } // ??? val ??????????????? text


    $textElem.text("<p>" + val + "</p>"); // ????????????????????????????????????????????????

    editor.initSelection();
  };
  /**
   * ?????? html ??????
   * @param html html ?????????
   */


  Text.prototype.append = function (html) {
    var editor = this.editor;

    if ((0, _indexOf["default"])(html).call(html, '<') !== 0) {
      // ????????????????????? <p> ??????
      html = "<p>" + html + "</p>";
    }

    this.html(this.html() + html); // ????????????????????????????????????????????????

    editor.initSelection();
  };
  /**
   * ?????????????????????????????????????????????
   */


  Text.prototype._saveRange = function () {
    var editor = this.editor;
    var $textElem = editor.$textElem;
    var $document = dom_core_1["default"](document); // ?????????????????????

    function saveRange() {
      // ??????????????????
      editor.selection.saveRange(); // ???????????? active ??????

      editor.menus.changeActive();
    } // ???????????????


    $textElem.on('keyup', saveRange); // ?????????????????????????????????????????????????????????????????????????????? click ?????????????????????

    function onceClickSaveRange() {
      saveRange();
      $textElem.off('click', onceClickSaveRange);
    }

    $textElem.on('click', onceClickSaveRange);

    function handleMouseUp() {
      // ????????????????????????????????????????????????????????????????????????????????????????????????????????????
      saveRange();
      $document.off('mouseup', handleMouseUp);
    }

    function listenMouseLeave() {
      // ??????????????????????????????????????????????????????
      $document.on('mouseup', handleMouseUp); // ????????????????????????leave???????????????????????????????????????????????????handleMouseUp

      $textElem.off('mouseleave', listenMouseLeave);
    }

    $textElem.on('mousedown', function () {
      // mousedown ??????????????????????????????????????????????????????
      $textElem.on('mouseleave', listenMouseLeave);
    });
    $textElem.on('mouseup', function (e) {
      // ????????????$textElem???mouseleave??????, ??????????????????
      $textElem.off('mouseleave', listenMouseLeave); // fix?????????????????????????????????????????????????????????????????????????????????selection?????????issue#3096

      (0, _setTimeout2["default"])(function () {
        var selection = editor.selection;
        var range = selection.getRange();
        if (range === null) return;
        saveRange();
      }, 0);
    });
  };
  /**
   * ??????????????????????????????????????????
   */


  Text.prototype._bindEventHooks = function () {
    var editor = this.editor;
    var $textElem = editor.$textElem;
    var eventHooks = this.eventHooks; // click hooks

    $textElem.on('click', function (e) {
      var clickEvents = eventHooks.clickEvents;
      (0, _forEach["default"])(clickEvents).call(clickEvents, function (fn) {
        return fn(e);
      });
    }); // enter ??? up ?????? hooks

    $textElem.on('keyup', function (e) {
      if (e.keyCode !== 13) return;
      var enterUpEvents = eventHooks.enterUpEvents;
      (0, _forEach["default"])(enterUpEvents).call(enterUpEvents, function (fn) {
        return fn(e);
      });
    }); // ?????? up ?????? hooks

    $textElem.on('keyup', function (e) {
      var keyupEvents = eventHooks.keyupEvents;
      (0, _forEach["default"])(keyupEvents).call(keyupEvents, function (fn) {
        return fn(e);
      });
    }); // ?????? down ?????? hooks

    $textElem.on('keydown', function (e) {
      var keydownEvents = eventHooks.keydownEvents;
      (0, _forEach["default"])(keydownEvents).call(keydownEvents, function (fn) {
        return fn(e);
      });
    }); // delete ??? up ??? hooks

    $textElem.on('keyup', function (e) {
      if (e.keyCode !== 8 && e.keyCode !== 46) return;
      var deleteUpEvents = eventHooks.deleteUpEvents;
      (0, _forEach["default"])(deleteUpEvents).call(deleteUpEvents, function (fn) {
        return fn(e);
      });
    }); // delete ??? down ??? hooks

    $textElem.on('keydown', function (e) {
      if (e.keyCode !== 8 && e.keyCode !== 46) return;
      var deleteDownEvents = eventHooks.deleteDownEvents;
      (0, _forEach["default"])(deleteDownEvents).call(deleteDownEvents, function (fn) {
        return fn(e);
      });
    }); // ??????

    $textElem.on('paste', function (e) {
      if (util_1.UA.isIE()) return; // IE ?????????
      // ??????????????????????????? execCommand ???????????????

      e.preventDefault();
      var pasteEvents = eventHooks.pasteEvents;
      (0, _forEach["default"])(pasteEvents).call(pasteEvents, function (fn) {
        return fn(e);
      });
    }); // ??????/?????? ?????????

    $textElem.on('keydown', function (e) {
      if ( // ?????????????????????????????????????????????????????? || ?????????????????????????????????????????????/???????????????????????????????????????????????????????????????????????????/?????????
      (editor.isFocus || editor.isCompatibleMode) && (e.ctrlKey || e.metaKey) && e.keyCode === 90) {
        // ??????????????????
        e.preventDefault(); // ????????????

        if (e.shiftKey) {
          // ??????
          editor.history.restore();
        } else {
          // ??????
          editor.history.revoke();
        }
      }
    }); // tab up

    $textElem.on('keyup', function (e) {
      if (e.keyCode !== 9) return;
      e.preventDefault();
      var tabUpEvents = eventHooks.tabUpEvents;
      (0, _forEach["default"])(tabUpEvents).call(tabUpEvents, function (fn) {
        return fn(e);
      });
    }); // tab down

    $textElem.on('keydown', function (e) {
      if (e.keyCode !== 9) return;
      e.preventDefault();
      var tabDownEvents = eventHooks.tabDownEvents;
      (0, _forEach["default"])(tabDownEvents).call(tabDownEvents, function (fn) {
        return fn(e);
      });
    }); // ?????????????????? ???????????????

    $textElem.on('scroll', // ????????????
    util_1.throttle(function (e) {
      var textScrollEvents = eventHooks.textScrollEvents;
      (0, _forEach["default"])(textScrollEvents).call(textScrollEvents, function (fn) {
        return fn(e);
      });
    }, 100)); // ?????????????????????

    function preventDefault(e) {
      // ?????? document ????????????
      e.preventDefault();
    }

    dom_core_1["default"](document).on('dragleave', preventDefault).on('drop', preventDefault).on('dragenter', preventDefault).on('dragover', preventDefault); // ?????????????????????????????????????????????????????????

    editor.beforeDestroy(function () {
      dom_core_1["default"](document).off('dragleave', preventDefault).off('drop', preventDefault).off('dragenter', preventDefault).off('dragover', preventDefault);
    });
    $textElem.on('drop', function (e) {
      e.preventDefault();
      var events = eventHooks.dropEvents;
      (0, _forEach["default"])(events).call(events, function (fn) {
        return fn(e);
      });
    }); // link click

    $textElem.on('click', function (e) {
      // ??????????????????
      var $link = null;
      var target = e.target;
      var $target = dom_core_1["default"](target);

      if ($target.getNodeName() === 'A') {
        // ?????????????????????????????????
        $link = $target;
      } else {
        // ????????????????????????????????????
        var $parent = $target.parentUntil('a');

        if ($parent != null) {
          // ?????????
          $link = $parent;
        }
      }

      if (!$link) return; // ??????????????????????????????

      var linkClickEvents = eventHooks.linkClickEvents;
      (0, _forEach["default"])(linkClickEvents).call(linkClickEvents, function (fn) {
        return fn($link);
      });
    }); // img click

    $textElem.on('click', function (e) {
      // ??????????????????
      var $img = null;
      var target = e.target;
      var $target = dom_core_1["default"](target); //?????????????????? ?????????emoji???????????????

      if ($target.getNodeName() === 'IMG' && !$target.elems[0].getAttribute('data-emoji')) {
        // ?????????????????????img
        e.stopPropagation();
        $img = $target;
      }

      if (!$img) return; // ??????????????????????????????

      var imgClickEvents = eventHooks.imgClickEvents;
      (0, _forEach["default"])(imgClickEvents).call(imgClickEvents, function (fn) {
        return fn($img);
      });
    }); // code click

    $textElem.on('click', function (e) {
      // ??????????????????
      var $code = null;
      var target = e.target;
      var $target = dom_core_1["default"](target);

      if ($target.getNodeName() === 'PRE') {
        // ?????????????????????????????????
        $code = $target;
      } else {
        // ????????????????????????????????????
        var $parent = $target.parentUntil('pre');

        if ($parent !== null) {
          // ?????????
          $code = $parent;
        }
      }

      if (!$code) return;
      var codeClickEvents = eventHooks.codeClickEvents;
      (0, _forEach["default"])(codeClickEvents).call(codeClickEvents, function (fn) {
        return fn($code);
      });
    }); // splitLine click

    $textElem.on('click', function (e) {
      // ?????????????????????
      var $splitLine = null;
      var target = e.target;
      var $target = dom_core_1["default"](target); // ????????????????????????

      if ($target.getNodeName() === 'HR') {
        $splitLine = $target;
      } else {
        $target == null;
      }

      if (!$splitLine) return; // ?????????????????????????????????
      // ?????????????????????

      editor.selection.createRangeByElem($splitLine);
      editor.selection.restoreSelection();
      var splitLineClickEvents = eventHooks.splitLineEvents;
      (0, _forEach["default"])(splitLineClickEvents).call(splitLineClickEvents, function (fn) {
        return fn($splitLine);
      });
    }); // ??????????????????

    editor.$toolbarElem.on('click', function (e) {
      var toolbarClickEvents = eventHooks.toolbarClickEvents;
      (0, _forEach["default"])(toolbarClickEvents).call(toolbarClickEvents, function (fn) {
        return fn(e);
      });
    }); //mousedown??????

    editor.$textContainerElem.on('mousedown', function (e) {
      var target = e.target;
      var $target = dom_core_1["default"](target);

      if ($target.hasClass('w-e-img-drag-rb')) {
        // ???????????????????????????????????????????????? bar
        var imgDragBarMouseDownEvents = eventHooks.imgDragBarMouseDownEvents;
        (0, _forEach["default"])(imgDragBarMouseDownEvents).call(imgDragBarMouseDownEvents, function (fn) {
          return fn();
        });
      }
    }); //table click

    $textElem.on('click', function (e) {
      // ????????????
      var $dom = null;
      var target = e.target; //?????????????????????

      $dom = dom_core_1["default"](target).parentUntilEditor('TABLE', editor, target); // ??????table?????????????????????

      if (!$dom) return;
      var tableClickEvents = eventHooks.tableClickEvents;
      (0, _forEach["default"])(tableClickEvents).call(tableClickEvents, function (fn) {
        return fn($dom, e);
      });
    }); // enter ??? down

    $textElem.on('keydown', function (e) {
      if (e.keyCode !== 13) return;
      var enterDownEvents = eventHooks.enterDownEvents;
      (0, _forEach["default"])(enterDownEvents).call(enterDownEvents, function (fn) {
        return fn(e);
      });
    }); // ?????? click

    $textElem.on('click', function (e) {
      // ????????????
      var $video = null;
      var target = e.target;
      var $target = dom_core_1["default"](target); //?????????????????? ?????????video ??????

      if ($target.getNodeName() === 'VIDEO') {
        // ???????????????????????????
        e.stopPropagation();
        $video = $target;
      }

      if (!$video) return; // ??????????????????????????????

      var videoClickEvents = eventHooks.videoClickEvents;
      (0, _forEach["default"])(videoClickEvents).call(videoClickEvents, function (fn) {
        return fn($video);
      });
    });
  };

  return Text;
}();

exports["default"] = Text;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(299);

module.exports = parent;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var find = __webpack_require__(300);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(301);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').find;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var $find = __webpack_require__(31).find;
var addToUnscopables = __webpack_require__(89);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Text ?????????????????????Text ???????????????????????????????????????
 * @wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var enter_to_create_p_1 = tslib_1.__importDefault(__webpack_require__(303));

var del_to_keep_p_1 = tslib_1.__importStar(__webpack_require__(304));

var tab_to_space_1 = tslib_1.__importDefault(__webpack_require__(305));

var paste_text_html_1 = tslib_1.__importDefault(__webpack_require__(306));

var img_click_active_1 = tslib_1.__importDefault(__webpack_require__(313));
/**
 * ????????? text ??????????????????
 * @param text text ??????
 */


function initTextHooks(text) {
  var editor = text.editor;
  var eventHooks = text.eventHooks; // ?????????????????????????????? <p> ??????

  enter_to_create_p_1["default"](editor, eventHooks.enterUpEvents, eventHooks.enterDownEvents); // ?????????????????? EMPTY_P

  del_to_keep_p_1["default"](editor, eventHooks.deleteUpEvents, eventHooks.deleteDownEvents); // ?????????, ??????p

  del_to_keep_p_1.cutToKeepP(editor, eventHooks.keyupEvents); // tab ???????????????

  tab_to_space_1["default"](editor, eventHooks.tabDownEvents); // ?????? text html

  paste_text_html_1["default"](editor, eventHooks.pasteEvents); // img click active

  img_click_active_1["default"](editor, eventHooks.imgClickEvents);
}

exports["default"] = initTextHooks;

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????????????? <p> ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var const_1 = __webpack_require__(7);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ?????????????????????????????? <p> ??????
 * @param editor ???????????????
 * @param enterUpEvents enter ??? up ?????? hooks
 * @param enterDownEvents enter ??? down ?????? hooks
 */


function enterToCreateP(editor, enterUpEvents, enterDownEvents) {
  function insertEmptyP($selectionElem) {
    var _context;

    var $p = dom_core_1["default"](const_1.EMPTY_P);
    $p.insertBefore($selectionElem);

    if ((0, _indexOf["default"])(_context = $selectionElem.html()).call(_context, '<img') >= 0) {
      // ??????????????????????????????
      $p.remove();
      return;
    }

    editor.selection.createRangeByElem($p, true, true);
    editor.selection.restoreSelection();
    $selectionElem.remove();
  } // enter up ???


  function fn() {
    var $textElem = editor.$textElem;
    var $selectionElem = editor.selection.getSelectionContainerElem();
    var $parentElem = $selectionElem.parent();

    if ($parentElem.html() === '<code><br></code>') {
      // ?????????????????????????????? <p><code>.....</code></p> ????????????????????????????????? <p><code><br></code></p>
      // ?????????????????????????????????????????????????????????
      insertEmptyP($parentElem);
      return;
    }

    if ($selectionElem.getNodeName() === 'FONT' && $selectionElem.text() === '' && $selectionElem.attr('face') === 'monospace') {
      // ??????code????????????????????????<font face="monospace"><br></font>?????????????????????
      insertEmptyP($parentElem);
      return;
    }

    if (!$parentElem.equal($textElem)) {
      // ??????????????????
      return;
    }

    var nodeName = $selectionElem.getNodeName();

    if (nodeName === 'P' && $selectionElem.attr('data-we-empty-p') === null) {
      // ?????????????????? P ????????? editor ????????????????????? p ????????????????????????
      return;
    }

    if ($selectionElem.text()) {
      // ????????????????????????
      return;
    } // ?????? <p> ???????????????????????? <p>?????????????????????


    insertEmptyP($selectionElem);
  }

  enterUpEvents.push(fn); // enter down ???

  function createPWhenEnterText(e) {
    var _a; // selection??????range??????????????????,???????????????,??????????????????range,??????enter???bug


    editor.selection.saveRange((_a = getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0));
    var $selectElem = editor.selection.getSelectionContainerElem();

    if ($selectElem.id === editor.textElemId) {
      // ??????????????????????????? text ??????????????? p ??????????????????????????????????????? $textElem
      // ????????????????????? table ????????????????????????????????????????????????
      e.preventDefault();
      editor.cmd["do"]('insertHTML', '<p><br></p>');
    }
  }

  enterDownEvents.push(createPWhenEnterText);
}

exports["default"] = enterToCreateP;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????? EMPTY_P
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _trim = _interopRequireDefault(__webpack_require__(16));

var _includes = _interopRequireDefault(__webpack_require__(46));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.cutToKeepP = void 0;

var tslib_1 = __webpack_require__(2);

var const_1 = __webpack_require__(7);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ??????????????? EMPTY_P
 * @param editor ???????????????
 * @param deleteUpEvents delete ??? up ?????? hooks
 * @param deleteDownEvents delete ??? down ?????? hooks
 */


function deleteToKeepP(editor, deleteUpEvents, deleteDownEvents) {
  function upFn() {
    var $textElem = editor.$textElem;
    var html = editor.$textElem.html();
    var text = editor.$textElem.text();
    var txtHtml = (0, _trim["default"])(html).call(html);
    /**
      @description
        ?????????????????????????????????????????????????????????????????????????????????????????????????????????'<p data-we-empty-p=""></p>'
        ??????????????????????????????
    **/

    var emptyTags = ['<p><br></p>', '<br>', '<p data-we-empty-p=""></p>', const_1.EMPTY_P]; // ????????????????????????""??????????????????????????????

    if (/^\s*$/.test(text) && (!txtHtml || (0, _includes["default"])(emptyTags).call(emptyTags, txtHtml))) {
      // ????????????
      $textElem.html(const_1.EMPTY_P);
      editor.selection.createRangeByElem($textElem, false, true);
      editor.selection.restoreSelection(); // ????????????????????????????????????firebox???????????????
      // ???????????????end?????????????????????

      editor.selection.moveCursor($textElem.getNode(), 0);
    }
  }

  deleteUpEvents.push(upFn);

  function downFn(e) {
    var _context;

    var $textElem = editor.$textElem;
    var txtHtml = (0, _trim["default"])(_context = $textElem.html().toLowerCase()).call(_context);

    if (txtHtml === const_1.EMPTY_P) {
      // ?????????????????????????????????????????????
      e.preventDefault();
      return;
    }
  }

  deleteDownEvents.push(downFn);
}
/**
 * ??????????????? EMPTY_P
 * @param editor ???????????????
 * @param cutEvents keydown hooks
 */


function cutToKeepP(editor, cutEvents) {
  function upFn(e) {
    var _context2;

    if (e.keyCode !== 88) {
      return;
    }

    var $textElem = editor.$textElem;
    var txtHtml = (0, _trim["default"])(_context2 = $textElem.html().toLowerCase()).call(_context2); // firefox ?????? txtHtml === '<br>' ?????????????????? !txtHtml ??????

    if (!txtHtml || txtHtml === '<br>') {
      // ????????????
      var $p = dom_core_1["default"](const_1.EMPTY_P);
      $textElem.html(' '); // ?????????????????????????????? firefox ????????????

      $textElem.append($p);
      editor.selection.createRangeByElem($p, false, true);
      editor.selection.restoreSelection(); // ????????????????????????????????????firebox???????????????
      // ???????????????end?????????????????????

      editor.selection.moveCursor($p.getNode(), 0);
    }
  }

  cutEvents.push(upFn);
}

exports.cutToKeepP = cutToKeepP;
exports["default"] = deleteToKeepP;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? tab ???????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * ???????????? tab ?????????????????????????????????
 * @param editor ???????????????
 * @param tabDownEvents tab down ????????????
 */

function tabHandler(editor, tabDownEvents) {
  // ????????????
  function fn() {
    if (!editor.cmd.queryCommandSupported('insertHTML')) {
      // ?????????????????? insertHTML ??????
      return;
    }

    var $selectionElem = editor.selection.getSelectionContainerElem();

    if (!$selectionElem) {
      return;
    }

    var $parentElem = $selectionElem.parent();
    var selectionNodeName = $selectionElem.getNodeName();
    var parentNodeName = $parentElem.getNodeName();

    if (selectionNodeName == 'CODE' || parentNodeName === 'CODE' || parentNodeName === 'PRE' || /hljs/.test(parentNodeName)) {
      // <pre><code> ??????
      editor.cmd["do"]('insertHTML', editor.config.languageTab);
    } else {
      // ????????????
      editor.cmd["do"]('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  } // ????????????


  tabDownEvents.push(fn);
}

exports["default"] = tabHandler;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? text html
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var paste_event_1 = __webpack_require__(135);

var util_1 = __webpack_require__(6);

var const_1 = __webpack_require__(7);
/**
 * ?????????html
 * @param val ?????????html
 * @author Gavin
 * @description
    ?????????html?????????????????????
    ?????????
        1. ???htmlText??????div???????????????p??????
        2. ???????????????htmlText????????????????????????dom????????????P???????????????

    ????????????
        ??????P????????????p????????????????????????????????????<p><p>xx</p></p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
 */


function formatHtml(htmlText) {
  var _context;

  var paste = (0, _trim["default"])(_context = htmlText.replace(/<div>/gim, '<p>') // div ??????????????? p ??????
  .replace(/<\/div>/gim, '</p>')).call(_context); // ??????''
  // ?????????????????????dom???

  var tempContainer = document.createElement('div');
  tempContainer.innerHTML = paste;
  return tempContainer.innerHTML.replace(/<p><\/p>/gim, ''); // ???????????????p???????????????
}
/**
 * ?????????html
 * @param val ?????????html
 * @author liuwei
 */


function formatCode(val) {
  var pasteText = val.replace(/<br>|<br\/>/gm, '\n').replace(/<[^>]+>/gm, '');
  return pasteText;
}
/**
 * ??????html????????????P????????????
 * @param html ?????????html
 * @author luochao
 */


function isParagraphHtml(html) {
  var _a;

  if (html === '') return false;
  var container = document.createElement('div');
  container.innerHTML = html;
  return ((_a = container.firstChild) === null || _a === void 0 ? void 0 : _a.nodeName) === 'P';
}
/**
 * ????????????????????????????????????
 * @param topElem ??????????????????
 * @author luochao
 */


function isEmptyParagraph(topElem) {
  if (!(topElem === null || topElem === void 0 ? void 0 : topElem.length)) return false;
  var dom = topElem.elems[0];
  return dom.nodeName === 'P' && dom.innerHTML === '<br>';
}
/**
 * ??????????????? html
 * @param editor ???????????????
 * @param pasteEvents ??????????????????
 */


function pasteTextHtml(editor, pasteEvents) {
  function fn(e) {
    // ????????????
    var config = editor.config;
    var pasteFilterStyle = config.pasteFilterStyle;
    var pasteIgnoreImg = config.pasteIgnoreImg;
    var pasteTextHandle = config.pasteTextHandle; // ?????????????????????

    var pasteHtml = paste_event_1.getPasteHtml(e, pasteFilterStyle, pasteIgnoreImg);
    var pasteText = paste_event_1.getPasteText(e);
    pasteText = pasteText.replace(/\n/gm, '<br>'); // ????????????????????? DOM ??????

    var $selectionElem = editor.selection.getSelectionContainerElem();

    if (!$selectionElem) {
      return;
    }

    var nodeName = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeName();
    var $topElem = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeTop(editor); // ??????????????????????????????

    var topNodeName = '';

    if ($topElem.elems[0]) {
      topNodeName = $topElem === null || $topElem === void 0 ? void 0 : $topElem.getNodeName();
    } // code ????????????????????????


    if (nodeName === 'CODE' || topNodeName === 'PRE') {
      if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
        // ???????????????????????????????????????
        pasteText = '' + (pasteTextHandle(pasteText) || '');
      }

      editor.cmd["do"]('insertHTML', formatCode(pasteText));
      return;
    } // ????????????????????????????????????????????????????????????url????????????????????? ???????????????
    //  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


    if (const_1.urlRegex.test(pasteText) && pasteFilterStyle) {
      //??????????????????????????????????????????????????????????????????????????????????????????
      if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
        // ???????????????????????????????????????
        pasteText = '' + (pasteTextHandle(pasteText) || ''); // html
      }

      var insertUrl = const_1.urlRegex.exec(pasteText)[0];
      var otherText = pasteText.replace(const_1.urlRegex, '');
      return editor.cmd["do"]('insertHTML', "<a href=\"" + insertUrl + "\" target=\"_blank\">" + insertUrl + "</a>" + otherText); // html
    } // table ??????td???th????????????????????????


    if (!pasteHtml) {
      return;
    }

    try {
      // firefox ??????????????? pasteHtml ??????????????? <ul> ????????? <li>
      // ???????????? insertHTML ?????????
      if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
        // ???????????????????????????????????????
        pasteHtml = '' + (pasteTextHandle(pasteHtml) || ''); // html
      } // ?????????html????????????css???style??????


      var isCssStyle = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(pasteHtml); // eslint-disable-line
      // ????????????????????????????????????css???????????????????????????text

      if (isCssStyle && pasteFilterStyle) {
        editor.cmd["do"]('insertHTML', "" + formatHtml(pasteText)); // text
      } else {
        var html = formatHtml(pasteHtml); // ?????????????????????????????? firefox ??? chrome????????????????????????

        if (isParagraphHtml(html)) {
          var $textEl = editor.$textElem;
          editor.cmd["do"]('insertHTML', html); // ????????????????????????????????????

          if ($textEl.equal($selectionElem)) {
            // ????????????
            editor.selection.createEmptyRange();
            return;
          } // ??????????????????????????????????????????


          if (isEmptyParagraph($topElem)) {
            $topElem.remove();
          }
        } else {
          // ??????????????????????????????????????????????????????????????????img????????????src???http??????
          // ??? https://github.com/wangeditor-team/wangEditor/issues/3119
          // ?????????????????????????????????????????????
          var isHasOnlyImgEleReg = /^<img [^>]*src=['"]([^'"]+)[^>]*>$/g;

          if (!isHasOnlyImgEleReg.test(html)) {
            editor.cmd["do"]('insertHTML', html);
          }
        }
      }
    } catch (ex) {
      // ???????????? pasteText ???????????????
      if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
        // ???????????????????????????????????????
        pasteText = '' + (pasteTextHandle(pasteText) || '');
      }

      editor.cmd["do"]('insertHTML', "" + formatHtml(pasteText)); // text
    }
  }

  pasteEvents.push(fn);
}

exports["default"] = pasteTextHtml;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? html ??????????????????????????????????????? html ?????????????????????????????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _trim = _interopRequireDefault(__webpack_require__(16));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _includes = _interopRequireDefault(__webpack_require__(46));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var tags_1 = __webpack_require__(308);

var simplehtmlparser_js_1 = tslib_1.__importDefault(__webpack_require__(312));
/**
 * ???????????? span
 * @param html html
 */


function filterEmptySpan(html) {
  var regForReplace = /<span>.*?<\/span>/gi;
  var regForMatch = /<span>(.*?)<\/span>/;
  return html.replace(regForReplace, function (s) {
    // s ????????? span ?????? <span>??????</span>
    var result = s.match(regForMatch);
    if (result == null) return '';
    return result[1];
  });
}
/**
 * ??????????????????
 * @param tag tag
 * @param ignoreImg ???????????? img ??????
 */


function isIgnoreTag(tag, ignoreImg) {
  var _context;

  tag = (0, _trim["default"])(_context = tag.toLowerCase()).call(_context); // ???????????????

  if (tags_1.IGNORE_TAGS.has(tag)) {
    return true;
  } // ??????????????????


  if (ignoreImg) {
    if (tag === 'img') {
      return true;
    }
  }

  return false;
}
/**
 * ??? tag ?????? html ????????????????????????
 * @param tag tag
 * @param attrs ??????
 */


function genStartHtml(tag, attrs) {
  var result = ''; // tag < ??????

  result = "<" + tag; // ????????????

  var attrStrArr = [];
  (0, _forEach["default"])(attrs).call(attrs, function (attr) {
    attrStrArr.push(attr.name + "=\"" + attr.value + "\"");
  });

  if (attrStrArr.length > 0) {
    result = result + ' ' + attrStrArr.join(' ');
  } // tag > ??????


  var isEmpty = tags_1.EMPTY_TAGS.has(tag); // ??????????????????????????????????????? img

  result = result + (isEmpty ? '/' : '') + '>';
  return result;
}
/**
 * ??? tag ?????? html ????????????????????????
 * @param tag tag
 */


function genEndHtml(tag) {
  return "</" + tag + ">";
}
/**
 * ??????????????? html
 * @param html html ?????????
 * @param filterStyle ???????????? style ??????
 * @param ignoreImg ???????????? img ??????
 */


function parseHtml(html, filterStyle, ignoreImg) {
  if (filterStyle === void 0) {
    filterStyle = true;
  }

  if (ignoreImg === void 0) {
    ignoreImg = false;
  }

  var resultArr = []; // ??????????????????????????????????????? join
  // ????????????????????????????????????????????????????????????

  var CUR_TAG = '';

  function markTagStart(tag) {
    tag = (0, _trim["default"])(tag).call(tag);
    if (!tag) return;
    if (tags_1.EMPTY_TAGS.has(tag)) return; // ??????????????????????????? img ???????????????

    CUR_TAG = tag;
  }

  function markTagEnd() {
    CUR_TAG = '';
  } // ????????? 'text/html' ???????????? html


  var htmlParser = new simplehtmlparser_js_1["default"]();
  htmlParser.parse(html, {
    startElement: function startElement(tag, attrs) {
      // ?????????????????????
      markTagStart(tag); // ???????????????

      if (isIgnoreTag(tag, ignoreImg)) {
        return;
      } // ?????????????????????????????????????????????????????????


      var necessaryAttrKeys = tags_1.NECESSARY_ATTRS.get(tag) || [];
      var attrsForTag = [];
      (0, _forEach["default"])(attrs).call(attrs, function (attr) {
        // ?????????
        var name = attr.name; // style ????????????

        if (name === 'style') {
          // ?????? style ??????
          if (!filterStyle) {
            attrsForTag.push(attr);
          }

          return;
        } // ?????? style ?????????????????????


        if ((0, _includes["default"])(necessaryAttrKeys).call(necessaryAttrKeys, name) === false) {
          // ??????????????????????????????
          return;
        }

        attrsForTag.push(attr);
      }); // ????????? HTML ??????

      var html = genStartHtml(tag, attrsForTag);
      resultArr.push(html);
    },
    characters: function characters(str) {
      if (!str) {
        return;
      } // ???????????????


      if (isIgnoreTag(CUR_TAG, ignoreImg)) return;
      resultArr.push(str);
    },
    endElement: function endElement(tag) {
      // ???????????????
      if (isIgnoreTag(tag, ignoreImg)) {
        return;
      } // ????????? HTML ??????


      var html = genEndHtml(tag);
      resultArr.push(html); // ?????????????????????

      markTagEnd();
    },
    comment: function comment(str) {
      /* ????????????????????? */
      markTagStart(str);
    }
  });
  var result = resultArr.join(''); // ??????????????????
  // ???????????? span ??????

  result = filterEmptySpan(result);
  return result;
}

exports["default"] = parseHtml;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????? tags
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _set = _interopRequireDefault(__webpack_require__(136));

var _map = _interopRequireDefault(__webpack_require__(125));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.TOP_LEVEL_TAGS = exports.EMPTY_TAGS = exports.NECESSARY_ATTRS = exports.IGNORE_TAGS = void 0; // ???????????????

exports.IGNORE_TAGS = new _set["default"](['doctype', '!doctype', 'html', 'head', 'meta', 'body', 'script', 'style', 'link', 'frame', 'iframe', 'title', 'svg', 'center', 'o:p' // ?????? word ???????????? o:p ??????
]); // ???????????????????????????

exports.NECESSARY_ATTRS = new _map["default"]([['img', ['src', 'alt']], ['a', ['href', 'target']], ['td', ['colspan', 'rowspan']], ['th', ['colspan', 'rowspan']]]); // ?????????????????????????????????

exports.EMPTY_TAGS = new _set["default"](['area', 'base', 'basefont', 'br', 'col', 'hr', 'img', 'input', 'isindex', 'embed']); // ????????????????????????

exports.TOP_LEVEL_TAGS = new _set["default"](['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'ul', 'ol', 'table', 'blockquote', 'pre', 'hr', 'form']);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(310);
__webpack_require__(45);

module.exports = parent;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(57);
__webpack_require__(311);
__webpack_require__(58);
var path = __webpack_require__(11);

module.exports = path.Set;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(126);
var collectionStrong = __webpack_require__(129);

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 312 */
/***/ (function(module, exports) {

// Copyright 2004 Erik Arvidsson. All Rights Reserved.
//
// This code is triple licensed using Apache Software License 2.0,
// Mozilla Public License or GNU Public License
//
///////////////////////////////////////////////////////////////////////////////
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License.  You may obtain a copy
// of the License at http://www.apache.org/licenses/LICENSE-2.0
//
///////////////////////////////////////////////////////////////////////////////
//
// The contents of this file are subject to the Mozilla Public License
// Version 1.1 (the "License"); you may not use this file except in
// compliance with the License. You may obtain a copy of the License at
// http://www.mozilla.org/MPL/
//
// Software distributed under the License is distributed on an "AS IS"
// basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
// License for the specific language governing rights and limitations
// under the License.
//
// The Original Code is Simple HTML Parser.
//
// The Initial Developer of the Original Code is Erik Arvidsson.
// Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
// Reserved.
//
///////////////////////////////////////////////////////////////////////////////
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
///////////////////////////////////////////////////////////////////////////////

/*
var handler ={
	startElement:   function (sTagName, oAttrs) {},
	endElement:     function (sTagName) {},
    characters:		function (s) {},
    comment:		function (s) {}
};
*/

function SimpleHtmlParser() {}

SimpleHtmlParser.prototype = {
    handler: null,

    // regexps

    startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
    endTagRe: /^<\/([^>\s]+)[^>]*>/m,
    attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,

    parse: function (s, oHandler) {
        if (oHandler) this.contentHandler = oHandler

        var i = 0
        var res, lc, lm, rc, index
        var treatAsChars = false
        var oThis = this
        while (s.length > 0) {
            // Comment
            if (s.substring(0, 4) == '<!--') {
                index = s.indexOf('-->')
                if (index != -1) {
                    this.contentHandler.comment(s.substring(4, index))
                    s = s.substring(index + 3)
                    treatAsChars = false
                } else {
                    treatAsChars = true
                }
            }

            // end tag
            else if (s.substring(0, 2) == '</') {
                if (this.endTagRe.test(s)) {
                    lc = RegExp.leftContext
                    lm = RegExp.lastMatch
                    rc = RegExp.rightContext

                    lm.replace(this.endTagRe, function () {
                        return oThis.parseEndTag.apply(oThis, arguments)
                    })

                    s = rc
                    treatAsChars = false
                } else {
                    treatAsChars = true
                }
            }
            // start tag
            else if (s.charAt(0) == '<') {
                if (this.startTagRe.test(s)) {
                    lc = RegExp.leftContext
                    lm = RegExp.lastMatch
                    rc = RegExp.rightContext

                    lm.replace(this.startTagRe, function () {
                        return oThis.parseStartTag.apply(oThis, arguments)
                    })

                    s = rc
                    treatAsChars = false
                } else {
                    treatAsChars = true
                }
            }

            if (treatAsChars) {
                index = s.indexOf('<')
                if (index == -1) {
                    this.contentHandler.characters(s)
                    s = ''
                } else {
                    this.contentHandler.characters(s.substring(0, index))
                    s = s.substring(index)
                }
            }

            treatAsChars = true
        }
    },

    parseStartTag: function (sTag, sTagName, sRest) {
        var attrs = this.parseAttributes(sTagName, sRest)
        this.contentHandler.startElement(sTagName, attrs)
    },

    parseEndTag: function (sTag, sTagName) {
        this.contentHandler.endElement(sTagName)
    },

    parseAttributes: function (sTagName, s) {
        var oThis = this
        var attrs = []
        s.replace(this.attrRe, function (a0, a1, a2, a3, a4, a5, a6, a7) {
            attrs.push(oThis.parseAttribute(sTagName, a0, a1, a2, a3, a4, a5, a6, a7))
        })
        return attrs
    },

    parseAttribute: function (sTagName, sAttribute, sName) {
        var value = ''
        if (arguments[7]) value = arguments[8]
        else if (arguments[5]) value = arguments[6]
        else if (arguments[3]) value = arguments[4]

        var empty = !value && !arguments[3]
        return { name: sName, value: empty ? null : value }
    },
}

// export default SimpleHtmlParser
module.exports = SimpleHtmlParser


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????????????????????img?????????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * ??????????????????????????????img?????????
 * @param editor ???????????????
 * @param imgClickEvents delete ??? up ?????? hooks
 */

function imgClickActive(editor, imgClickEvents) {
  function clickFn($img) {
    editor.selection.createRangeByElem($img);
    editor.selection.restoreSelection();
  }

  imgClickEvents.push(clickFn);
}

exports["default"] = imgClickActive;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????? JSON ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ?????????????????? JSON ????????????
 * @param $elem DOM ??????
 */


function getChildrenJSON($elem) {
  var result = []; // ????????????

  var $children = $elem.childNodes() || []; // ?????? childNodes() ????????????????????????

  (0, _forEach["default"])($children).call($children, function (curElem) {
    var elemResult;
    var nodeType = curElem.nodeType; // ????????????

    if (nodeType === 3) {
      elemResult = curElem.textContent || '';
      elemResult = util_1.replaceHtmlSymbol(elemResult);
    } // ?????? DOM ??????


    if (nodeType === 1) {
      elemResult = {};
      elemResult = elemResult; // tag

      elemResult.tag = curElem.nodeName.toLowerCase(); // attr

      var attrData = [];
      var attrList = curElem.attributes;
      var attrListLength = attrList.length || 0;

      for (var i = 0; i < attrListLength; i++) {
        var attr = attrList[i];
        attrData.push({
          name: attr.name,
          value: attr.value
        });
      }

      elemResult.attrs = attrData; // children????????????

      elemResult.children = getChildrenJSON(dom_core_1["default"](curElem));
    }

    if (elemResult) {
      result.push(elemResult);
    }
  });
  return result;
}

exports["default"] = getChildrenJSON;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???nodeList json?????????????????????dom??????
 * @author zhengwenjian
 */

var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(100));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

function getHtmlByNodeList(nodeList, parent) {
  if (parent === void 0) {
    parent = document.createElement('div');
  } // ??????????????????????????????????????????


  var root = parent; // ????????????JSON

  (0, _forEach["default"])(nodeList).call(nodeList, function (item) {
    var elem; // ?????????????????????

    if (typeof item === 'string') {
      elem = document.createTextNode(item);
    } // ?????????????????????


    if ((0, _typeof2["default"])(item) === 'object') {
      var _context;

      elem = document.createElement(item.tag);
      (0, _forEach["default"])(_context = item.attrs).call(_context, function (attr) {
        dom_core_1["default"](elem).attr(attr.name, attr.value);
      }); // ???????????????????????????????????????????????????

      if (item.children && item.children.length > 0) {
        getHtmlByNodeList(item.children, elem.getRootNode());
      }
    }

    elem && root.appendChild(elem);
  });
  return dom_core_1["default"](root);
}

exports["default"] = getHtmlByNodeList;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Menus ????????? ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _isArray = _interopRequireDefault(__webpack_require__(96));

var _filter = _interopRequireDefault(__webpack_require__(76));

var _includes = _interopRequireDefault(__webpack_require__(46));

var _keys = _interopRequireDefault(__webpack_require__(317));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _entries = _interopRequireDefault(__webpack_require__(102));

var _some = _interopRequireDefault(__webpack_require__(137));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(48));

var _bind = _interopRequireDefault(__webpack_require__(61));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var index_1 = tslib_1.__importDefault(__webpack_require__(94));

var menu_list_1 = tslib_1.__importDefault(__webpack_require__(329));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3)); // import { MenuActive } from './menu-constructors/Menu'


var Menus = function () {
  function Menus(editor) {
    this.editor = editor;
    this.menuList = [];
    this.constructorList = menu_list_1["default"]; // ?????????????????????????????????
  }
  /**
   * ?????????????????????
   * @param key ?????? key ?????? editor.config.menus ??????
   * @param Menu ??????????????????
   */


  Menus.prototype.extend = function (key, Menu) {
    if (!Menu || typeof Menu !== 'function') return;
    this.constructorList[key] = Menu;
  }; // ???????????????


  Menus.prototype.init = function () {
    var _context, _context2;

    var _this = this; // ?????????????????? menus ???????????????????????????????????????


    var config = this.editor.config; // ??????exclude???????????????

    var excludeMenus = config.excludeMenus;
    if ((0, _isArray["default"])(excludeMenus) === false) excludeMenus = [];
    config.menus = (0, _filter["default"])(_context = config.menus).call(_context, function (key) {
      return (0, _includes["default"])(excludeMenus).call(excludeMenus, key) === false;
    }); // ??????????????????exclude???????????????

    var CustomMenuKeysList = (0, _keys["default"])(index_1["default"].globalCustomMenuConstructorList);
    CustomMenuKeysList = (0, _filter["default"])(CustomMenuKeysList).call(CustomMenuKeysList, function (key) {
      return (0, _includes["default"])(excludeMenus).call(excludeMenus, key);
    });
    (0, _forEach["default"])(CustomMenuKeysList).call(CustomMenuKeysList, function (key) {
      delete index_1["default"].globalCustomMenuConstructorList[key];
    });
    (0, _forEach["default"])(_context2 = config.menus).call(_context2, function (menuKey) {
      var MenuConstructor = _this.constructorList[menuKey]; // ?????? any ??????????????????

      _this._initMenuList(menuKey, MenuConstructor);
    }); // ????????????

    for (var _i = 0, _a = (0, _entries["default"])(index_1["default"].globalCustomMenuConstructorList); _i < _a.length; _i++) {
      var _b = _a[_i],
          menuKey = _b[0],
          menuFun = _b[1];
      var MenuConstructor = menuFun; // ?????? any ??????????????????

      this._initMenuList(menuKey, MenuConstructor);
    } // ?????? DOM


    this._addToToolbar();

    if (config.showMenuTooltips) {
      // ???????????????tooltips
      this._bindMenuTooltips();
    }
  };
  /**
   * ?????? menu ?????????????????? menuList ???
   * @param menuKey ?????? key ?????? editor.config.menus ??????
   * @param MenuConstructor ??????????????????
   */


  Menus.prototype._initMenuList = function (menuKey, MenuConstructor) {
    var _context3;

    if (MenuConstructor == null || typeof MenuConstructor !== 'function') {
      // ????????? class
      return;
    }

    if ((0, _some["default"])(_context3 = this.menuList).call(_context3, function (menu) {
      return menu.key === menuKey;
    })) {
      console.warn('??????????????????:' + menuKey);
    } else {
      var m = new MenuConstructor(this.editor);
      m.key = menuKey;
      this.menuList.push(m);
    }
  }; // ???????????????tooltips


  Menus.prototype._bindMenuTooltips = function () {
    var editor = this.editor;
    var $toolbarElem = editor.$toolbarElem;
    var config = editor.config; // ???isTooltipShowTop???true?????????????????????????????????????????????

    var menuTooltipPosition = config.menuTooltipPosition;
    var $tooltipEl = dom_core_1["default"]("<div class=\"w-e-menu-tooltip w-e-menu-tooltip-" + menuTooltipPosition + "\">\n            <div class=\"w-e-menu-tooltip-item-wrapper\">\n              <div></div>\n            </div>\n          </div>");
    $tooltipEl.css('visibility', 'hidden');
    $toolbarElem.append($tooltipEl); // ?????? z-index

    $tooltipEl.css('z-index', editor.zIndex.get('tooltip'));
    var showTimeoutId = 0; // ??????????????????200ms??????tooltips
    // ???????????????

    function clearShowTimeoutId() {
      if (showTimeoutId) {
        clearTimeout(showTimeoutId);
      }
    } // ??????tooltip


    function hide() {
      clearShowTimeoutId();
      $tooltipEl.css('visibility', 'hidden');
    } // ????????????


    $toolbarElem.on('mouseover', function (e) {
      var target = e.target;
      var $target = dom_core_1["default"](target);
      var title;
      var $menuEl;

      if ($target.isContain($toolbarElem)) {
        hide();
        return;
      }

      if ($target.parentUntil('.w-e-droplist') != null) {
        // ??????droplist????????????
        hide();
      } else {
        if ($target.attr('data-title')) {
          title = $target.attr('data-title');
          $menuEl = $target;
        } else {
          var $parent = $target.parentUntil('.w-e-menu');

          if ($parent != null) {
            title = $parent.attr('data-title');
            $menuEl = $parent;
          }
        }
      }

      if (title && $menuEl) {
        clearShowTimeoutId();
        var targetOffset = $menuEl.getOffsetData();
        $tooltipEl.text(editor.i18next.t('menus.title.' + title));
        var tooltipOffset = $tooltipEl.getOffsetData();
        var left = targetOffset.left + targetOffset.width / 2 - tooltipOffset.width / 2;
        $tooltipEl.css('left', left + "px"); // 2. ????????????

        if (menuTooltipPosition === 'up') {
          $tooltipEl.css('top', targetOffset.top - tooltipOffset.height - 8 + "px");
        } else if (menuTooltipPosition === 'down') {
          $tooltipEl.css('top', targetOffset.top + targetOffset.height + 8 + "px");
        }

        showTimeoutId = (0, _setTimeout2["default"])(function () {
          $tooltipEl.css('visibility', 'visible');
        }, 200);
      } else {
        hide();
      }
    }).on('mouseleave', function () {
      hide();
    });
  }; // ??????????????????


  Menus.prototype._addToToolbar = function () {
    var _context4;

    var editor = this.editor;
    var $toolbarElem = editor.$toolbarElem; // ??????????????? DOM

    (0, _forEach["default"])(_context4 = this.menuList).call(_context4, function (menu) {
      var $elem = menu.$elem;

      if ($elem) {
        $toolbarElem.append($elem);
      }
    });
  };
  /**
   * ??????????????????
   * @param ???????????? ??????
   * @return Menus ????????????
   */


  Menus.prototype.menuFind = function (key) {
    var menuList = this.menuList;

    for (var i = 0, l = menuList.length; i < l; i++) {
      if (menuList[i].key === key) return menuList[i];
    }

    return menuList[0];
  };
  /**
   * @description ????????????????????????
   */


  Menus.prototype.changeActive = function () {
    var _context5;

    (0, _forEach["default"])(_context5 = this.menuList).call(_context5, function (menu) {
      var _context6;

      (0, _setTimeout2["default"])((0, _bind["default"])(_context6 = menu.tryChangeActive).call(_context6, menu), 100); // ?????? any ??????????????????
    });
  };

  return Menus;
}();

exports["default"] = Menus;

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(319);

module.exports = parent;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(320);
var path = __webpack_require__(11);

module.exports = path.Object.keys;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var toObject = __webpack_require__(26);
var nativeKeys = __webpack_require__(53);
var fails = __webpack_require__(12);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(322);

module.exports = parent;


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(323);
var path = __webpack_require__(11);

module.exports = path.Object.entries;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var $entries = __webpack_require__(324).entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(15);
var objectKeys = __webpack_require__(53);
var toIndexedObject = __webpack_require__(29);
var propertyIsEnumerable = __webpack_require__(63).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(326);

module.exports = parent;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var some = __webpack_require__(327);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.some;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.some) ? some : own;
};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(328);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').some;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var $some = __webpack_require__(31).some;
var arrayMethodIsStrict = __webpack_require__(73);

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var index_1 = tslib_1.__importDefault(__webpack_require__(330));

var index_2 = tslib_1.__importDefault(__webpack_require__(331));

var index_3 = tslib_1.__importDefault(__webpack_require__(336));

var index_4 = tslib_1.__importDefault(__webpack_require__(341));

var index_5 = tslib_1.__importDefault(__webpack_require__(342));

var index_6 = tslib_1.__importDefault(__webpack_require__(343));

var index_7 = tslib_1.__importDefault(__webpack_require__(344));

var font_size_1 = tslib_1.__importDefault(__webpack_require__(346));

var index_8 = tslib_1.__importDefault(__webpack_require__(348));

var index_9 = tslib_1.__importDefault(__webpack_require__(349));

var index_10 = tslib_1.__importDefault(__webpack_require__(352));

var index_11 = tslib_1.__importDefault(__webpack_require__(353));

var index_12 = tslib_1.__importDefault(__webpack_require__(354));

var index_13 = tslib_1.__importDefault(__webpack_require__(365));

var index_14 = tslib_1.__importDefault(__webpack_require__(380));

var index_15 = tslib_1.__importDefault(__webpack_require__(384));

var index_16 = tslib_1.__importDefault(__webpack_require__(142));

var index_17 = tslib_1.__importDefault(__webpack_require__(393));

var index_18 = tslib_1.__importDefault(__webpack_require__(395));

var index_19 = tslib_1.__importDefault(__webpack_require__(396));

var index_20 = tslib_1.__importDefault(__webpack_require__(397));

var code_1 = tslib_1.__importDefault(__webpack_require__(417));

var index_21 = tslib_1.__importDefault(__webpack_require__(422));

var todo_1 = tslib_1.__importDefault(__webpack_require__(425));

exports["default"] = {
  bold: index_1["default"],
  head: index_2["default"],
  italic: index_4["default"],
  link: index_3["default"],
  underline: index_5["default"],
  strikeThrough: index_6["default"],
  fontName: index_7["default"],
  fontSize: font_size_1["default"],
  justify: index_8["default"],
  quote: index_9["default"],
  backColor: index_10["default"],
  foreColor: index_11["default"],
  video: index_12["default"],
  image: index_13["default"],
  indent: index_14["default"],
  emoticon: index_15["default"],
  list: index_16["default"],
  lineHeight: index_17["default"],
  undo: index_18["default"],
  redo: index_19["default"],
  table: index_20["default"],
  code: code_1["default"],
  splitLine: index_21["default"],
  todo: todo_1["default"]
};

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Bold = function (_super) {
  tslib_1.__extends(Bold, _super);

  function Bold(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u52A0\u7C97\">\n                <i class=\"w-e-icon-bold\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * ????????????
   */


  Bold.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // ?????????????????????????????????????????????????????????
      editor.selection.createEmptyRange();
    } // ?????? bold ??????


    editor.cmd["do"]('bold');

    if (isSelectEmpty) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   */


  Bold.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('bold')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Bold;
}(BtnMenu_1["default"]);

exports["default"] = Bold;

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

var _find = _interopRequireDefault(__webpack_require__(32));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _stringify = _interopRequireDefault(__webpack_require__(332));

var _includes = _interopRequireDefault(__webpack_require__(46));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);

var const_1 = __webpack_require__(7);

var Head = function (_super) {
  tslib_1.__extends(Head, _super);

  function Head(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="??????"><i class="w-e-icon-header"></i></div>');
    var dropListConf = {
      width: 100,
      title: '????????????',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]('<h1>H1</h1>'),
        value: '<h1>'
      }, {
        $elem: dom_core_1["default"]('<h2>H2</h2>'),
        value: '<h2>'
      }, {
        $elem: dom_core_1["default"]('<h3>H3</h3>'),
        value: '<h3>'
      }, {
        $elem: dom_core_1["default"]('<h4>H4</h4>'),
        value: '<h4>'
      }, {
        $elem: dom_core_1["default"]('<h5>H5</h5>'),
        value: '<h5>'
      }, {
        $elem: dom_core_1["default"]("<p>" + editor.i18next.t('menus.dropListMenu.head.??????') + "</p>"),
        value: '<p>'
      }],
      clickHandler: function clickHandler(value) {
        // ?????? this ?????????????????? Head ??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    var onCatalogChange = editor.config.onCatalogChange; // ???????????????change????????????????????????????????????

    if (onCatalogChange) {
      _this.oldCatalogs = [];

      _this.addListenerCatalog(); // ???????????????????????????????????????


      _this.getCatalogs(); // ?????????????????????????????????????????????

    }

    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  Head.prototype.command = function (value) {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionContainerElem();

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      // ?????????????????????????????????????????????????????????
      // ?????????????????? <p>xxx</p><p>yyy</p> ??????????????????????????????????????? <h1>xxx<br>yyy</h1> ???????????????
      this.setMultilineHead(value);
    } else {
      var _context;

      // ???????????????????????????code?????????????????????????????????
      if ((0, _indexOf["default"])(_context = ['OL', 'UL', 'LI', 'TABLE', 'TH', 'TR', 'CODE', 'HR']).call(_context, dom_core_1["default"]($selectionElem).getNodeName()) > -1) {
        return;
      }

      editor.cmd["do"]('formatBlock', value);
    } // ???????????????????????????<p>???????????????????????????id


    value !== '<p>' && this.addUidForSelectionElem();
  };
  /**
   * ?????????????????????
   */


  Head.prototype.addUidForSelectionElem = function () {
    var editor = this.editor;
    var tag = editor.selection.getSelectionContainerElem();
    var id = util_1.getRandomCode(); // ???????????????id

    dom_core_1["default"](tag).attr('id', id);
  };
  /**
   * ??????change???????????????????????????
   */


  Head.prototype.addListenerCatalog = function () {
    var _this = this;

    var editor = this.editor;
    editor.txt.eventHooks.changeEvents.push(function () {
      _this.getCatalogs();
    });
  };
  /**
   * ??????????????????
   */


  Head.prototype.getCatalogs = function () {
    var editor = this.editor;
    var $textElem = this.editor.$textElem;
    var onCatalogChange = editor.config.onCatalogChange;
    var elems = (0, _find["default"])($textElem).call($textElem, 'h1,h2,h3,h4,h5');
    var catalogs = [];
    (0, _forEach["default"])(elems).call(elems, function (elem, index) {
      var $elem = dom_core_1["default"](elem);
      var id = $elem.attr('id');
      var tag = $elem.getNodeName();
      var text = $elem.text();

      if (!id) {
        id = util_1.getRandomCode();
        $elem.attr('id', id);
      } // ????????????????????????????????????


      if (!text) return;
      catalogs.push({
        tag: tag,
        id: id,
        text: text
      });
    }); // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

    if ((0, _stringify["default"])(this.oldCatalogs) !== (0, _stringify["default"])(catalogs)) {
      this.oldCatalogs = catalogs;
      onCatalogChange && onCatalogChange(catalogs);
    }
  };
  /**
   * ???????????????????????????
   * @param value  ????????????????????????
   */


  Head.prototype.setMultilineHead = function (value) {
    var _this = this;

    var _a, _b;

    var editor = this.editor;
    var $selection = editor.selection; // ????????????????????????

    var containerElem = (_a = $selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0]; // ???????????????????????????????????????????????????????????????

    var _WHITE_LIST = ['IMG', 'VIDEO', 'TABLE', 'TH', 'TR', 'UL', 'OL', 'PRE', 'HR', 'BLOCKQUOTE']; // ??????????????????????????????

    var startElem = dom_core_1["default"]($selection.getSelectionStartElem());
    var endElem = dom_core_1["default"]($selection.getSelectionEndElem()); // ?????????????????????????????????????????????????????????????????????endElem?????????????????????

    if (endElem.elems[0].outerHTML === dom_core_1["default"](const_1.EMPTY_P).elems[0].outerHTML && !endElem.elems[0].nextSibling) {
      endElem = endElem.prev();
    } // ???????????????????????????


    var cacheDomList = [];
    cacheDomList.push(startElem.getNodeTop(editor)); // ???????????????????????????????????????

    var indexList = []; // ??????????????????????????????????????????

    var childList = (_b = $selection.getRange()) === null || _b === void 0 ? void 0 : _b.commonAncestorContainer.childNodes; // ???????????????????????????????????????????????????????????????

    childList === null || childList === void 0 ? void 0 : (0, _forEach["default"])(childList).call(childList, function (item, index) {
      if (item === cacheDomList[0].getNode()) {
        indexList.push(index);
      }

      if (item === endElem.getNodeTop(editor).getNode()) {
        indexList.push(index);
      }
    }); // ??????????????????????????????????????????dom

    var i = 0; // ????????????????????????????????????????????????????????????????????????????????????

    while (cacheDomList[i].getNode() !== endElem.getNodeTop(editor).getNode()) {
      // ????????????????????????????????????
      if (!cacheDomList[i].elems[0]) return;
      var d = dom_core_1["default"](cacheDomList[i].next().getNode());
      cacheDomList.push(d);
      i++;
    } // ???????????????????????????????????????????????????????????????


    cacheDomList === null || cacheDomList === void 0 ? void 0 : (0, _forEach["default"])(cacheDomList).call(cacheDomList, function (_node, index) {
      // ???????????????????????????????????????????????????
      if (!_this.hasTag(_node, _WHITE_LIST)) {
        var $h = dom_core_1["default"](value);

        var $parentNode = _node.parent().getNode(); // ??????????????????


        $h.html("" + _node.html()); // ????????????????????????

        $parentNode.insertBefore($h.getNode(), _node.getNode()); // ?????????????????????

        _node.remove();
      }
    }); // ???????????????????????????????????????????????????

    $selection.createRangeByElems(containerElem.children[indexList[0]], containerElem.children[indexList[1]]);
  };
  /**
   * ?????????????????????
   * @param elem ?????????????????????
   * @param whiteList ?????????
   */


  Head.prototype.hasTag = function (elem, whiteList) {
    var _this = this;

    var _a;

    if (!elem) return false;
    if ((0, _includes["default"])(whiteList).call(whiteList, elem === null || elem === void 0 ? void 0 : elem.getNodeName())) return true;
    var _flag = false;
    (_a = elem.children()) === null || _a === void 0 ? void 0 : (0, _forEach["default"])(_a).call(_a, function (child) {
      _flag = _this.hasTag(dom_core_1["default"](child), whiteList);
    });
    return _flag;
  };
  /**
   * ??????????????????????????????????????????
   */


  Head.prototype.tryChangeActive = function () {
    var editor = this.editor;
    var reg = /^h/i;
    var cmdValue = editor.cmd.queryCommandValue('formatBlock');

    if (reg.test(cmdValue)) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Head;
}(DropListMenu_1["default"]);

exports["default"] = Head;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(333);

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(334);

module.exports = parent;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(335);
var core = __webpack_require__(11);

// eslint-disable-next-line es/no-json -- safe
if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars -- required for `.length`
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var getBuiltIn = __webpack_require__(25);
var fails = __webpack_require__(12);

var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);
  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
    return '\\u' + match.charCodeAt(0).toString(16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(36));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(337));

var is_active_1 = tslib_1.__importDefault(__webpack_require__(139));

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var index_1 = tslib_1.__importDefault(__webpack_require__(339));

var const_1 = __webpack_require__(7);

var Link = function (_super) {
  tslib_1.__extends(Link, _super);

  function Link(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="??????"><i class="w-e-icon-link"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // ??????????????????????????????????????????????????????

    index_1["default"](editor);
    return _this;
  }
  /**
   * ??????????????????
   */


  Link.prototype.clickHandler = function () {
    var editor = this.editor;
    var $linkElem;
    /**
        @author:Gavin
        @description
            ????????????????????????????????????????????????????????????????????????(?????????????????????)
          
    **/

    var $selectionElem = editor.selection.getSelectionContainerElem();
    var $textElem = editor.$textElem;
    var html = $textElem.html();
    var $txtHtml = (0, _trim["default"])(html).call(html);

    if ($txtHtml === const_1.EMPTY_P) {
      var $emptyChild = $textElem.children(); // ????????????

      editor.selection.createRangeByElem($emptyChild, true, true); // ??????????????????

      $selectionElem = editor.selection.getSelectionContainerElem();
    } // ????????????????????? ??????????????? ?????????????????????


    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      return;
    }

    if (this.isActive) {
      // ??????????????????????????????????????????
      $linkElem = editor.selection.getSelectionContainerElem();

      if (!$linkElem) {
        return;
      } // ?????? panel


      this.createPanel($linkElem.text(), $linkElem.attr('href'));
    } else {
      // ????????????????????????????????????????????????
      if (editor.selection.isSelectionEmpty()) {
        // ?????????????????????????????????
        this.createPanel('', '');
      } else {
        // ???????????????
        this.createPanel(editor.selection.getSelectionText(), '');
      }
    }
  };
  /**
   * ?????? panel
   * @param text ??????
   * @param link ??????
   */


  Link.prototype.createPanel = function (text, link) {
    var conf = create_panel_conf_1["default"](this.editor, text, link);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * ?????????????????? active ??????
   */


  Link.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (is_active_1["default"](editor)) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Link;
}(PanelMenu_1["default"]);

exports["default"] = Link;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description link ?????? panel tab ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var is_active_1 = tslib_1.__importDefault(__webpack_require__(139));

var util_2 = __webpack_require__(338);

function default_1(editor, text, link) {
  // panel ??????????????????id
  var inputLinkId = util_1.getRandom('input-link');
  var inputTextId = util_1.getRandom('input-text');
  var btnOkId = util_1.getRandom('btn-ok');
  var btnDelId = util_1.getRandom('btn-del'); // ??????????????????????????????

  var delBtnDisplay = is_active_1["default"](editor) ? 'inline-block' : 'none';
  var $selectedLink;
  /**
   * ????????????????????????
   */

  function selectLinkElem() {
    if (!is_active_1["default"](editor)) return;
    var $linkElem = editor.selection.getSelectionContainerElem();
    if (!$linkElem) return;
    editor.selection.createRangeByElem($linkElem);
    editor.selection.restoreSelection();
    $selectedLink = $linkElem; // ??????????????????????????????
  }
  /**
   * ????????????
   * @param text ??????
   * @param link ??????
   */


  function insertLink(text, link) {
    // fix: ?????????????????????????????????????????????(??????????????????????????????)
    var subStr = new RegExp(/(<\/*ul>)|(<\/*li>)|(<\/*ol>)/g);
    text = text.replace(subStr, '');

    if (is_active_1["default"](editor)) {
      // ????????????????????????????????????????????????????????? insertHTML
      selectLinkElem();
      editor.cmd["do"]('insertHTML', "<a href=\"" + link + "\" target=\"_blank\">" + text + "</a>");
    } else {
      // ?????????????????????????????????????????????
      editor.cmd["do"]('insertHTML', "<a href=\"" + link + "\" target=\"_blank\">" + text + "</a>");
    }
  }
  /**
   * ????????????
   */


  function delLink() {
    if (!is_active_1["default"](editor)) {
      return;
    } // ??????????????????


    selectLinkElem(); // ?????????????????????

    var selectionText = $selectedLink.text();
    editor.cmd["do"]('insertHTML', '<span>' + selectionText + '</span>');
  }
  /**
   * ????????????????????????
   * @param link ??????
   */


  function checkLink(text, link) {
    //??????????????????????????????????????????
    var check = editor.config.linkCheck(text, link);

    if (check === undefined) {//?????????????????????????????????????????????????????????????????????????????????
    } else if (check === true) {
      //?????????????????????????????????
      return true;
    } else {
      //?????????????????????????????????????????????????????????????????????????????????
      editor.config.customAlert(check, 'warning');
    }

    return false;
  }

  var conf = {
    width: 300,
    height: 0,
    // panel ?????????????????? tab
    tabs: [{
      // tab ?????????
      title: editor.i18next.t('menus.panelMenus.link.??????'),
      // ??????
      tpl: "<div>\n                        <input\n                            id=\"" + inputTextId + "\"\n                            type=\"text\"\n                            class=\"block\"\n                            value=\"" + text + "\"\n                            placeholder=\"" + editor.i18next.t('menus.panelMenus.link.????????????') + "\"/>\n                        </td>\n                        <input\n                            id=\"" + inputLinkId + "\"\n                            type=\"text\"\n                            class=\"block\"\n                            value=\"" + link + "\"\n                            placeholder=\"" + editor.i18next.t('???') + " https://...\"/>\n                        </td>\n                        <div class=\"w-e-button-container\">\n                            <button type=\"button\" id=\"" + btnOkId + "\" class=\"right\">\n                                " + editor.i18next.t('??????') + "\n                            </button>\n                            <button type=\"button\" id=\"" + btnDelId + "\" class=\"gray right\" style=\"display:" + delBtnDisplay + "\">\n                                " + editor.i18next.t('menus.panelMenus.link.????????????') + "\n                            </button>\n                        </div>\n                    </div>",
      // ????????????
      events: [// ????????????
      {
        selector: '#' + btnOkId,
        type: 'click',
        fn: function fn() {
          var _context, _context2;

          var _a, _b; // ????????????


          editor.selection.restoreSelection();
          var topNode = editor.selection.getSelectionRangeTopNodes()[0].getNode();
          var selection = window.getSelection(); // ??????????????????

          var $link = dom_core_1["default"]('#' + inputLinkId);
          var $text = dom_core_1["default"]('#' + inputTextId);
          var link = (0, _trim["default"])(_context = $link.val()).call(_context);
          var text = (0, _trim["default"])(_context2 = $text.val()).call(_context2);
          var html = '';
          if (selection && !(selection === null || selection === void 0 ? void 0 : selection.isCollapsed)) html = (_a = util_2.insertHtml(selection, topNode)) === null || _a === void 0 ? void 0 : (0, _trim["default"])(_a).call(_a); // ??????html???tag??????

          var htmlText = html === null || html === void 0 ? void 0 : html.replace(/<.*?>/g, '');
          var htmlTextLen = (_b = htmlText === null || htmlText === void 0 ? void 0 : htmlText.length) !== null && _b !== void 0 ? _b : 0; // ???input??????text???????????????????????????????????????
          // ????????????????????????????????????text??????????????????
          // ??????????????????????????????????????????????????????????????????input????????????

          if (htmlTextLen <= text.length) {
            var startText = text.substring(0, htmlTextLen);
            var endText = text.substring(htmlTextLen);

            if (htmlText === startText) {
              text = html + endText;
            }
          } // ???????????????????????????


          if (!link) return; // ?????????????????????????????????

          if (!text) text = link; // ??????????????????????????????????????????????????????????????????

          if (!checkLink(text, link)) return;
          insertLink(text, link); // ?????? true????????????????????????????????????panel ?????????????????? panel ????????????

          return true;
        },
        bindEnter: true
      }, // ????????????
      {
        selector: '#' + btnDelId,
        type: 'click',
        fn: function fn() {
          // ??????????????????
          delLink(); // ?????? true????????????????????????????????????panel ?????????????????? panel ????????????

          return true;
        }
      }]
    } // tab end
    ] // tabs end

  };
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.insertHtml = exports.createPartHtml = exports.makeHtmlString = exports.getTopNode = void 0;
/**
 * ??????????????????????????????????????????Node
 * @param node ?????????node????????????childNode
 * @param topText ?????????node???????????????
 */

function getTopNode(node, topText) {
  var pointerNode = node;
  var topNode = node;

  do {
    if (pointerNode.textContent === topText) break;
    topNode = pointerNode;

    if (pointerNode.parentNode) {
      pointerNode = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.parentNode;
    }
  } while ((pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.nodeName) !== 'P');

  return topNode;
}

exports.getTopNode = getTopNode;
/**
 * ??????html???string??????
 * @param tagName ?????????
 * @param content ?????????????????????
 */

function makeHtmlString(node, content) {
  var tagName = node.nodeName;
  var attr = '';

  if (node.nodeType === 3 || /^(h|H)[1-6]$/.test(tagName)) {
    return content;
  }

  if (node.nodeType === 1) {
    var style = node.getAttribute('style');
    var face = node.getAttribute('face');
    var color = node.getAttribute('color');
    if (style) attr = attr + (" style=\"" + style + "\"");
    if (face) attr = attr + (" face=\"" + face + "\"");
    if (color) attr = attr + (" color=\"" + color + "\"");
  }

  tagName = tagName.toLowerCase();
  return "<" + tagName + attr + ">" + content + "</" + tagName + ">";
}

exports.makeHtmlString = makeHtmlString;
/**
 * ?????????????????????????????????html????????????
 * @param topText ?????????????????????????????????
 * @param node ???????????????node??????
 * @param startPos node?????????????????????????????????
 * @param endPos node?????????????????????????????????
 */

function createPartHtml(topText, node, startPos, endPost) {
  var _a;

  var selectionContent = (_a = node.textContent) === null || _a === void 0 ? void 0 : _a.substring(startPos, endPost);
  var pointerNode = node;
  var content = '';

  do {
    content = makeHtmlString(pointerNode, selectionContent !== null && selectionContent !== void 0 ? selectionContent : '');
    selectionContent = content;
    pointerNode = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.parentElement;
  } while (pointerNode && pointerNode.textContent !== topText);

  return content;
}

exports.createPartHtml = createPartHtml;
/**
 * ?????????????????????html????????????????????????
 * @param selection ????????????
 * @param topNode ????????????????????????node??????
 */

function insertHtml(selection, topNode) {
  var _a, _b, _c, _d, _e;

  var anchorNode = selection.anchorNode,
      focusNode = selection.focusNode,
      anchorPos = selection.anchorOffset,
      focusPos = selection.focusOffset;
  var topText = (_a = topNode.textContent) !== null && _a !== void 0 ? _a : '';
  var TagArr = getContainerTag(topNode);
  var content = '';
  var startContent = '';
  var middleContent = '';
  var endContent = '';
  var startNode = anchorNode;
  var endNode = focusNode; // ???????????? anchorNode??????p???????????????

  var pointerNode = anchorNode; // ???????????????????????????

  if (anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.isEqualNode(focusNode !== null && focusNode !== void 0 ? focusNode : null)) {
    var innerContent = createPartHtml(topText, anchorNode, anchorPos, focusPos);
    innerContent = addContainer(TagArr, innerContent);
    return innerContent;
  } // ?????????????????????????????????


  if (anchorNode) startContent = createPartHtml(topText, anchorNode, anchorPos !== null && anchorPos !== void 0 ? anchorPos : 0); // ???????????????????????????

  if (focusNode) endContent = createPartHtml(topText, focusNode, 0, focusPos); // ?????????????????????????????????????????????

  if (anchorNode) {
    // ??????start??????p??????node
    startNode = getTopNode(anchorNode, topText);
  }

  if (focusNode) {
    // ??????end??????p??????node
    endNode = getTopNode(focusNode, topText);
  } // ?????????????????????????????????????????????????????????


  pointerNode = (_b = startNode === null || startNode === void 0 ? void 0 : startNode.nextSibling) !== null && _b !== void 0 ? _b : anchorNode;

  while (!(pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.isEqualNode(endNode !== null && endNode !== void 0 ? endNode : null))) {
    var pointerNodeName = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.nodeName;

    if (pointerNodeName === '#text') {
      middleContent = middleContent + (pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.textContent);
    } else {
      var htmlString = (_d = (_c = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.firstChild) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.innerHTML;
      if (pointerNode) middleContent = middleContent + makeHtmlString(pointerNode, htmlString !== null && htmlString !== void 0 ? htmlString : '');
    } // ??????????????????????????????????????????????????????, ?????????endNode === pointerNode??????


    var nextPointNode = (_e = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.nextSibling) !== null && _e !== void 0 ? _e : pointerNode;
    if (nextPointNode === pointerNode) break;
    pointerNode = nextPointNode;
  }

  content = "" + startContent + middleContent + endContent; // ???????????????????????????

  content = addContainer(TagArr, content);
  return content;
}

exports.insertHtml = insertHtml;
/**
 * ??????????????????????????????p Node tagName ??????
 * @param node ??????????????????node??????
 */

function getContainerTag(node) {
  var _a;

  var topText = (_a = node.textContent) !== null && _a !== void 0 ? _a : '';
  var tagArr = [];

  while ((node === null || node === void 0 ? void 0 : node.textContent) === topText) {
    if (node.nodeName !== 'P') {
      tagArr.push(node);
    }

    node = node.childNodes[0];
  }

  return tagArr;
}
/**
 * ???????????????????????????
 * @param tagArr ??????????????????tag?????????????????????tag????????????
 * @param content tag??????????????????
 */


function addContainer(tagArr, content) {
  (0, _forEach["default"])(tagArr).call(tagArr, function (v) {
    content = makeHtmlString(v, content);
  });
  return content;
}

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????????????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(340));
/**
 * ????????????
 * @param editor ???????????????
 */


function bindEvent(editor) {
  // tooltip ??????
  tooltip_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(37));
/**
 * ?????? Tooltip ?????????????????????
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * ?????? tooltip
   * @param $link ????????????
   */

  function showLinkTooltip($link) {
    var conf = [{
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('menus.panelMenus.link.????????????') + "</span>"),
      onClick: function onClick(editor, $link) {
        var link = $link.attr('href');
        window.open(link, '_target'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('menus.panelMenus.link.????????????') + "</span>"),
      onClick: function onClick(editor, $link) {
        var _a, _b; // ??????????????????


        editor.selection.createRangeByElem($link);
        editor.selection.restoreSelection();
        var $childNodes = $link.childNodes(); // ?????????????????????

        if (($childNodes === null || $childNodes === void 0 ? void 0 : $childNodes.getNodeName()) === 'IMG') {
          // ?????????????????????
          var $selectIMG = (_b = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.children()) === null || _b === void 0 ? void 0 : _b.elems[0].children[0]; // ????????????

          editor.cmd["do"]('insertHTML', "<img \n                                src=" + ($selectIMG === null || $selectIMG === void 0 ? void 0 : $selectIMG.getAttribute('src')) + " \n                                style=" + ($selectIMG === null || $selectIMG === void 0 ? void 0 : $selectIMG.getAttribute('style')) + ">");
        } else {
          // ????????????????????????
          var selectionText = $link.text();
          editor.cmd["do"]('insertHTML', '<span>' + selectionText + '</span>');
        } // ?????? true????????????????????????????????? tooltip?????????????????????


        return true;
      }
    }]; // ?????? tooltip

    tooltip = new Tooltip_1["default"](editor, $link, conf);
    tooltip.create();
  }
  /**
   * ?????? tooltip
   */


  function hideLinkTooltip() {
    // ?????? tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showLinkTooltip: showLinkTooltip,
    hideLinkTooltip: hideLinkTooltip
  };
}
/**
 * ?????? tooltip ??????
 * @param editor ???????????????
 */


function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showLinkTooltip = _a.showLinkTooltip,
      hideLinkTooltip = _a.hideLinkTooltip; // ?????????????????????????????? tooltip


  editor.txt.eventHooks.linkClickEvents.push(showLinkTooltip); // ????????????????????????????????????????????? tooltip

  editor.txt.eventHooks.clickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideLinkTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????
 * @author liuwei
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Italic = function (_super) {
  tslib_1.__extends(Italic, _super);

  function Italic(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u659C\u4F53\">\n                <i class=\"w-e-icon-italic\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * ????????????
   */


  Italic.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // ?????????????????????????????????????????????????????????
      editor.selection.createEmptyRange();
    } // ?????? italic ??????


    editor.cmd["do"]('italic');

    if (isSelectEmpty) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   */


  Italic.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('italic')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Italic;
}(BtnMenu_1["default"]);

exports["default"] = Italic;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????? underline
 * @author dyl
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Underline = function (_super) {
  tslib_1.__extends(Underline, _super);

  function Underline(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u4E0B\u5212\u7EBF\">\n                <i class=\"w-e-icon-underline\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * ????????????
   */


  Underline.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // ?????????????????????????????????????????????????????????
      editor.selection.createEmptyRange();
    } // ?????? Underline ??????


    editor.cmd["do"]('underline');

    if (isSelectEmpty) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   */


  Underline.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('underline')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Underline;
}(BtnMenu_1["default"]);

exports["default"] = Underline;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var StrikeThrough = function (_super) {
  tslib_1.__extends(StrikeThrough, _super);

  function StrikeThrough(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u5220\u9664\u7EBF\">\n                <i class=\"w-e-icon-strikethrough\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * ????????????
   */


  StrikeThrough.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // ?????????????????????????????????????????????????????????
      editor.selection.createEmptyRange();
    } // ?????? strikeThrough ??????


    editor.cmd["do"]('strikeThrough');

    if (isSelectEmpty) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   */


  StrikeThrough.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('strikeThrough')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return StrikeThrough;
}(BtnMenu_1["default"]);

exports["default"] = StrikeThrough;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? FontStyle
 * @author dyl
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var FontStyleList_1 = tslib_1.__importDefault(__webpack_require__(345));

var FontStyle = function (_super) {
  tslib_1.__extends(FontStyle, _super);

  function FontStyle(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u5B57\u4F53\">\n                <i class=\"w-e-icon-font\"></i>\n            </div>");
    var fontStyleList = new FontStyleList_1["default"](editor.config.fontNames);
    var fontListConf = {
      width: 100,
      title: '????????????',
      type: 'list',
      list: fontStyleList.getItemList(),
      clickHandler: function clickHandler(value) {
        // this ?????????????????? FontStyle ??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, fontListConf) || this;
    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  FontStyle.prototype.command = function (value) {
    var _a;

    var editor = this.editor;
    var isEmptySelection = editor.selection.isSelectionEmpty();
    var $selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
    if ($selectionElem == null) return;
    var isFont = ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.nodeName.toLowerCase()) !== 'p';
    var isSameValue = ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getAttribute('face')) === value;

    if (isEmptySelection) {
      if (isFont && !isSameValue) {
        var $elems = editor.selection.getSelectionRangeTopNodes();
        editor.selection.createRangeByElem($elems[0]);
        editor.selection.moveCursor($elems[0].elems[0]);
      }

      editor.selection.setRangeToElem($selectionElem); // ??????????????????

      editor.selection.createEmptyRange();
    }

    editor.cmd["do"]('fontName', value);

    if (isEmptySelection) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   * ???????????????????????????????????????????????
   */


  FontStyle.prototype.tryChangeActive = function () {// const editor = this.editor
    // const cmdValue = editor.cmd.queryCommandValue('fontName')
    // if (menusConfig.fontNames.indexOf(cmdValue) >= 0) {
    //     this.active()
    // } else {
    //     this.unActive()
    // }
  };

  return FontStyle;
}(DropListMenu_1["default"]);

exports["default"] = FontStyle;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description ?????? class
 * @author dyl
 */


var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ??????????????????????????????????????????????????????,
 * ??????????????????constructor?????????,?????????????????????,??????????????????????????????,
 * ????????????constructor??????????????????,????????????????????????????????????,
 * ??????,???????????????????????????ts,???????????????????????????
 */


var FontStyleList = function () {
  function FontStyleList(list) {
    var _this = this;

    this.itemList = [];
    (0, _forEach["default"])(list).call(list, function (fontValue) {
      // fontValue 2??????????????????string???????????????value?????????font-family
      // Object??????value???font-family name???ui????????????
      var fontFamily = typeof fontValue === 'string' ? fontValue : fontValue.value;
      var fontName = typeof fontValue === 'string' ? fontValue : fontValue.name;

      _this.itemList.push({
        $elem: dom_core_1["default"]("<p style=\"font-family:'" + fontFamily + "'\">" + fontName + "</p>"),
        value: fontName
      });
    });
  }

  FontStyleList.prototype.getItemList = function () {
    return this.itemList;
  };

  return FontStyleList;
}();

exports["default"] = FontStyleList;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? FontSize
 * @author lkw
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var FontSizeList_1 = tslib_1.__importDefault(__webpack_require__(347));

var FontSize = function (_super) {
  tslib_1.__extends(FontSize, _super);

  function FontSize(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u5B57\u53F7\">\n                <i class=\"w-e-icon-text-heigh\"></i>\n            </div>");
    var fontStyleList = new FontSizeList_1["default"](editor.config.fontSizes);
    var fontListConf = {
      width: 160,
      title: '????????????',
      type: 'list',
      list: fontStyleList.getItemList(),
      clickHandler: function clickHandler(value) {
        // this ?????????????????? FontSize ??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, fontListConf) || this;
    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  FontSize.prototype.command = function (value) {
    var _a;

    var editor = this.editor;
    var isEmptySelection = editor.selection.isSelectionEmpty();
    var selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
    if (selectionElem == null) return;
    editor.cmd["do"]('fontSize', value);

    if (isEmptySelection) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   * ???????????????????????????????????????????????
   */


  FontSize.prototype.tryChangeActive = function () {};

  return FontSize;
}(DropListMenu_1["default"]);

exports["default"] = FontSize;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description ?????? class
 * @author lkw
 */


var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * FontSizeList ??????????????????
 */


var FontSizeList = function () {
  function FontSizeList(list) {
    this.itemList = [];

    for (var key in list) {
      var item = list[key];
      this.itemList.push({
        $elem: dom_core_1["default"]("<p style=\"font-size:" + key + "\">" + item.name + "</p>"),
        value: item.value
      });
    }
  }

  FontSizeList.prototype.getItemList = function () {
    return this.itemList;
  };

  return FontSizeList;
}();

exports["default"] = FontSizeList;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author liuwei
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var SPECIAL_NODE_LIST = ['LI'];
var SPECIAL_TOP_NODE_LIST = ['UL', 'BLOCKQUOTE'];

var Justify = function (_super) {
  tslib_1.__extends(Justify, _super);

  function Justify(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="??????"><i class="w-e-icon-paragraph-left"></i></div>');
    var dropListConf = {
      width: 100,
      title: '????????????',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-left w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.??????') + "\n                        </p>"),
        value: 'left'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-center w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.??????') + "\n                        </p>"),
        value: 'center'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-right w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.??????') + "\n                        </p>"),
        value: 'right'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-justify w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.??????') + "\n                        </p>"),
        value: 'justify'
      }],
      clickHandler: function clickHandler(value) {
        // ???????????????value??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  Justify.prototype.command = function (value) {
    var editor = this.editor;
    var selection = editor.selection;
    var $selectionElem = selection.getSelectionContainerElem(); // ????????????

    selection.saveRange(); // ??????????????????

    var $elems = editor.selection.getSelectionRangeTopNodes();

    if ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.length) {
      // list ???chrome???????????????????????? p??????????????????????????????????????????????????????????????????
      if (this.isSpecialNode($selectionElem, $elems[0]) || this.isSpecialTopNode($elems[0])) {
        var el = this.getSpecialNodeUntilTop($selectionElem, $elems[0]);
        if (el == null) return;
        dom_core_1["default"](el).css('text-align', value);
      } else {
        (0, _forEach["default"])($elems).call($elems, function (el) {
          el.css('text-align', value);
        });
      }
    } //????????????


    selection.restoreSelection();
  };
  /**
   * ???????????????????????????????????????????????????????????????????????????????????????
   * @param el DomElement
   * @param topEl DomElement
   */


  Justify.prototype.getSpecialNodeUntilTop = function (el, topEl) {
    var parentNode = el.elems[0];
    var topNode = topEl.elems[0]; // ?????????????????????????????????????????????????????????????????????????????????

    while (parentNode != null) {
      if ((0, _indexOf["default"])(SPECIAL_NODE_LIST).call(SPECIAL_NODE_LIST, parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeName) !== -1) {
        return parentNode;
      } // ???????????? top ?????????????????????????????????????????????????????????


      if (parentNode.parentNode === topNode) {
        return parentNode;
      }

      parentNode = parentNode.parentNode;
    }

    return parentNode;
  };
  /**
   * ????????????????????????????????????????????????????????????????????????????????????????????????????????????
   * @param el DomElement
   * @param topEl DomElement
   */


  Justify.prototype.isSpecialNode = function (el, topEl) {
    // ??????????????????????????????????????????????????????????????????????????????
    var parentNode = this.getSpecialNodeUntilTop(el, topEl);
    if (parentNode == null) return false;
    return (0, _indexOf["default"])(SPECIAL_NODE_LIST).call(SPECIAL_NODE_LIST, parentNode.nodeName) !== -1;
  };
  /**
   * ????????? top ?????????????????????????????????????????????????????????????????????????????????
   * @param el DomElement
   */


  Justify.prototype.isSpecialTopNode = function (topEl) {
    var _a;

    if (topEl == null) return false;
    return (0, _indexOf["default"])(SPECIAL_TOP_NODE_LIST).call(SPECIAL_TOP_NODE_LIST, (_a = topEl.elems[0]) === null || _a === void 0 ? void 0 : _a.nodeName) !== -1;
  };
  /**
   * ??????????????????????????????????????????
   * ???????????????,??????????????????????????????active??????????????????unActive
   * ??????????????????? ??????????????????????????????????????????
   */


  Justify.prototype.tryChangeActive = function () {};

  return Justify;
}(DropListMenu_1["default"]);

exports["default"] = Justify;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var bind_event_1 = tslib_1.__importDefault(__webpack_require__(350));

var create_quote_node_1 = tslib_1.__importDefault(__webpack_require__(351));

var const_1 = __webpack_require__(7);

var Quote = function (_super) {
  tslib_1.__extends(Quote, _super);

  function Quote(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u5F15\u7528\">\n                <i class=\"w-e-icon-quotes-left\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    bind_event_1["default"](editor);
    return _this;
  }
  /**
   * ????????????
   */


  Quote.prototype.clickHandler = function () {
    var _a, _b;

    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();
    var topNodeElem = editor.selection.getSelectionRangeTopNodes();
    var $topNodeElem = topNodeElem[topNodeElem.length - 1];
    var nodeName = this.getTopNodeName(); // IE ???????????? formatBlock <BLOCKQUOTE> ???????????????????????????
    // ??????firefox????????????blockquote?????????

    if (nodeName === 'BLOCKQUOTE') {
      // ?????? quote
      var $targetELem = dom_core_1["default"]($topNodeElem.childNodes());
      var len = $targetELem.length;
      var $middle_1 = $topNodeElem;
      (0, _forEach["default"])($targetELem).call($targetELem, function (elem) {
        var $elem = dom_core_1["default"](elem);
        $elem.insertAfter($middle_1);
        $middle_1 = $elem;
      });
      $topNodeElem.remove();
      editor.selection.moveCursor($targetELem.elems[len - 1]); // ????????????btn??????

      this.tryChangeActive();
    } else {
      // ??? P ????????? quote

      /**
      @author:gavin
      @description
          1. ??????ctrl+a??????????????????????????????????????????
          2. ??????????????????????????????????????????????????????
           ??????topNodeElem?????????????????????????????????????????????dom????????????quote???????????????????????????
      **/
      var $quote = create_quote_node_1["default"](topNodeElem); //???????????????????????????????????????????????????????????????????????????

      if (editor.$textElem.equal($topNodeElem)) {
        var containerElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
        editor.selection.createRangeByElems(containerElem.children[0], containerElem.children[0]);
        topNodeElem = editor.selection.getSelectionRangeTopNodes();
        $quote = create_quote_node_1["default"](topNodeElem);
        $topNodeElem.append($quote);
      } else {
        $quote.insertAfter($topNodeElem);
      }

      this.delSelectNode(topNodeElem);
      var moveNode = (_b = $quote.childNodes()) === null || _b === void 0 ? void 0 : _b.last().getNode();
      if (moveNode == null) return; // ??????firefox???firefox??????????????????????????????br????????????????????????????????????

      moveNode.textContent ? editor.selection.moveCursor(moveNode) : editor.selection.moveCursor(moveNode, 0); // ????????????btn??????

      this.tryChangeActive(); // ??????????????????????????????

      dom_core_1["default"](const_1.EMPTY_P).insertAfter($quote);
      return;
    }

    if (isSelectEmpty) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   */


  Quote.prototype.tryChangeActive = function () {
    var _a;

    var editor = this.editor;
    var cmdValue = (_a = editor.selection.getSelectionRangeTopNodes()[0]) === null || _a === void 0 ? void 0 : _a.getNodeName();

    if (cmdValue === 'BLOCKQUOTE') {
      this.active();
    } else {
      this.unActive();
    }
  };
  /**
   * ?????????????????????????????????(??????????????????????????????)
   * @param selectionElem ???????????????
   * @returns {string} ??????????????????????????????
   */


  Quote.prototype.getTopNodeName = function () {
    var editor = this.editor;
    var $topNodeElem = editor.selection.getSelectionRangeTopNodes()[0];
    var nodeName = $topNodeElem === null || $topNodeElem === void 0 ? void 0 : $topNodeElem.getNodeName();
    return nodeName;
  };
  /**
   * ?????????????????????
   * @param selectElem ???????????????????????????
   */


  Quote.prototype.delSelectNode = function (selectElem) {
    (0, _forEach["default"])(selectElem).call(selectElem, function (node) {
      node.remove();
    });
  };

  return Quote;
}(BtnMenu_1["default"]);

exports["default"] = Quote;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var const_1 = __webpack_require__(7);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

function bindEvent(editor) {
  function quoteEnter(e) {
    var _a;

    var $selectElem = editor.selection.getSelectionContainerElem();
    var $topSelectElem = editor.selection.getSelectionRangeTopNodes()[0]; // ???quote???enter??????????????????
    //?????????????????????????????????????????????blockquote

    if (($topSelectElem === null || $topSelectElem === void 0 ? void 0 : $topSelectElem.getNodeName()) === 'BLOCKQUOTE') {
      // firefox???????????????????????????????????????<blockquote></blockquote>
      if ($selectElem.getNodeName() === 'BLOCKQUOTE') {
        var selectNode = (_a = $selectElem.childNodes()) === null || _a === void 0 ? void 0 : _a.getNode();
        editor.selection.moveCursor(selectNode);
      }

      if ($selectElem.text() === '') {
        e.preventDefault();
        $selectElem.remove();
        var $newLine = dom_core_1["default"](const_1.EMPTY_P);
        $newLine.insertAfter($topSelectElem); // ???????????????br??????

        editor.selection.moveCursor($newLine.getNode(), 0);
      } // ???blockQuote??????????????????????????????blockquote


      if ($topSelectElem.text() === '') {
        $topSelectElem.remove();
      }
    }
  }

  editor.txt.eventHooks.enterDownEvents.push(quoteEnter);
}

exports["default"] = bindEvent;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ????????????blockquote????????????
 * @param editor ???????????????
 */


function createQuote($childElem) {
  var $targetElem = dom_core_1["default"]("<blockquote></blockquote>");
  (0, _forEach["default"])($childElem).call($childElem, function (node) {
    $targetElem.append(node.clone(true));
  });
  return $targetElem;
}

exports["default"] = createQuote;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? BackColor
 * @author lkw
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _map = _interopRequireDefault(__webpack_require__(27));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);

var BackColor = function (_super) {
  tslib_1.__extends(BackColor, _super);

  function BackColor(editor) {
    var _context;

    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u80CC\u666F\u8272\">\n                <i class=\"w-e-icon-paint-brush\"></i>\n            </div>");
    var colorListConf = {
      width: 120,
      title: '????????????',
      // droplist ????????? block ????????????
      type: 'inline-block',
      list: (0, _map["default"])(_context = editor.config.colors).call(_context, function (color) {
        return {
          $elem: dom_core_1["default"]("<i style=\"color:" + color + ";\" class=\"w-e-icon-paint-brush\"></i>"),
          value: color
        };
      }),
      clickHandler: function clickHandler(value) {
        // this ?????????????????? BackColor ??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, colorListConf) || this;
    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  BackColor.prototype.command = function (value) {
    var _a;

    var editor = this.editor;
    var isEmptySelection = editor.selection.isSelectionEmpty();
    var $selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
    if ($selectionElem == null) return;
    var isSpan = ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.nodeName.toLowerCase()) !== 'p';
    var bgColor = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.style.backgroundColor;
    var isSameColor = util_1.hexToRgb(value) === bgColor;

    if (isEmptySelection) {
      if (isSpan && !isSameColor) {
        var $elems = editor.selection.getSelectionRangeTopNodes();
        editor.selection.createRangeByElem($elems[0]);
        editor.selection.moveCursor($elems[0].elems[0]);
      } // ??????????????????


      editor.selection.createEmptyRange();
    }

    editor.cmd["do"]('backColor', value);

    if (isEmptySelection) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   */


  BackColor.prototype.tryChangeActive = function () {};

  return BackColor;
}(DropListMenu_1["default"]);

exports["default"] = BackColor;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? FontColor
 * @author lkw
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _map = _interopRequireDefault(__webpack_require__(27));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var FontColor = function (_super) {
  tslib_1.__extends(FontColor, _super);

  function FontColor(editor) {
    var _context;

    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u6587\u5B57\u989C\u8272\">\n                <i class=\"w-e-icon-pencil2\"></i>\n            </div>");
    var colorListConf = {
      width: 120,
      title: '????????????',
      // droplist ????????? block ????????????
      type: 'inline-block',
      list: (0, _map["default"])(_context = editor.config.colors).call(_context, function (color) {
        return {
          $elem: dom_core_1["default"]("<i style=\"color:" + color + ";\" class=\"w-e-icon-pencil2\"></i>"),
          value: color
        };
      }),
      clickHandler: function clickHandler(value) {
        // this ?????????????????? BackColor ??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, colorListConf) || this;
    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  FontColor.prototype.command = function (value) {
    var _a;

    var editor = this.editor;
    var isEmptySelection = editor.selection.isSelectionEmpty();
    var $selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
    if ($selectionElem == null) return; // ???????????????????????????

    var $selectionText = editor.selection.getSelectionText(); // ?????????????????? a ???????????????????????????????????????????????????????????????????????????
    // ???????????????a?????????????????????????????????????????????????????????????????????????????????????????????

    if ($selectionElem.nodeName === 'A' && $selectionElem.textContent === $selectionText) {
      // ????????????????????????????????????
      var _payloadElem = dom_core_1["default"]('<span>&#8203;</span>').getNode(); // ?????????a????????????


      $selectionElem.appendChild(_payloadElem);
    }

    editor.cmd["do"]('foreColor', value);

    if (isEmptySelection) {
      // ?????????????????????????????????
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * ??????????????????????????????
   */


  FontColor.prototype.tryChangeActive = function () {};

  return FontColor;
}(DropListMenu_1["default"]);

exports["default"] = FontColor;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? ??????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(36));

var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(355));

var index_1 = tslib_1.__importDefault(__webpack_require__(361));

var Video = function (_super) {
  tslib_1.__extends(Video, _super);

  function Video(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u89C6\u9891\">\n                <i class=\"w-e-icon-play\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this; // ???????????? tootip

    index_1["default"](editor);
    return _this;
  }
  /**
   * ??????????????????
   */


  Video.prototype.clickHandler = function () {
    // ?????? panel
    this.createPanel('');
  };
  /**
   * ?????? panel
   * @param link ??????
   */


  Video.prototype.createPanel = function (iframe) {
    var conf = create_panel_conf_1["default"](this.editor, iframe);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * ?????????????????? active ??????
   */


  Video.prototype.tryChangeActive = function () {};

  return Video;
}(PanelMenu_1["default"]);

exports["default"] = Video;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description video ?????? panel tab ??????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var upload_video_1 = tslib_1.__importDefault(__webpack_require__(356));

var const_1 = __webpack_require__(7);

function default_1(editor, video) {
  var config = editor.config;
  var uploadVideo = new upload_video_1["default"](editor); // panel ??????????????????id

  var inputIFrameId = util_1.getRandom('input-iframe');
  var btnOkId = util_1.getRandom('btn-ok');
  var inputUploadId = util_1.getRandom('input-upload');
  var btnStartId = util_1.getRandom('btn-local-ok');
  /**
   * ????????????
   * @param iframe html??????
   */

  function insertVideo(video) {
    editor.cmd["do"]('insertHTML', video + const_1.EMPTY_P); // video??????????????????

    editor.config.onlineVideoCallback(video);
  }
  /**
   * ????????????????????????
   * @param video ??????????????????
   */


  function checkOnlineVideo(video) {
    // ??????????????????????????????????????????
    var check = editor.config.onlineVideoCheck(video);

    if (check === true) {
      return true;
    }

    if (typeof check === 'string') {
      //?????????????????????????????????????????????????????????????????????????????????
      editor.config.customAlert(check, 'error');
    }

    return false;
  } // tabs??????
  // const fileMultipleAttr = config.uploadVideoMaxLength === 1 ? '' : 'multiple="multiple"'


  var tabsConf = [{
    // tab ?????????
    title: editor.i18next.t('menus.panelMenus.video.????????????'),
    tpl: "<div class=\"w-e-up-video-container\">\n                    <div id=\"" + btnStartId + "\" class=\"w-e-up-btn\">\n                        <i class=\"w-e-icon-upload2\"></i>\n                    </div>\n                    <div style=\"display:none;\">\n                        <input id=\"" + inputUploadId + "\" type=\"file\" accept=\"video/*\"/>\n                    </div>\n                 </div>",
    events: [// ??????????????????
    {
      selector: '#' + btnStartId,
      type: 'click',
      fn: function fn() {
        var $file = dom_core_1["default"]('#' + inputUploadId);
        var fileElem = $file.elems[0];

        if (fileElem) {
          fileElem.click();
        } else {
          // ?????? true ????????? panel
          return true;
        }
      }
    }, // ??????????????????
    {
      selector: '#' + inputUploadId,
      type: 'change',
      fn: function fn() {
        var $file = dom_core_1["default"]('#' + inputUploadId);
        var fileElem = $file.elems[0];

        if (!fileElem) {
          // ?????? true ????????? panel
          return true;
        } // ??????????????? file ????????????


        var fileList = fileElem.files;

        if (fileList.length) {
          uploadVideo.uploadVideo(fileList);
        } // ?????? true ????????? panel


        return true;
      }
    }]
  }, {
    // tab ?????????
    title: editor.i18next.t('menus.panelMenus.video.????????????'),
    // ??????
    tpl: "<div>\n                    <input \n                        id=\"" + inputIFrameId + "\" \n                        type=\"text\" \n                        class=\"block\" \n                        placeholder=\"" + editor.i18next.t('???') + "\uFF1A<iframe src=... ></iframe>\"/>\n                    </td>\n                    <div class=\"w-e-button-container\">\n                        <button type=\"button\" id=\"" + btnOkId + "\" class=\"right\">\n                            " + editor.i18next.t('??????') + "\n                        </button>\n                    </div>\n                </div>",
    // ????????????
    events: [// ????????????
    {
      selector: '#' + btnOkId,
      type: 'click',
      fn: function fn() {
        var _context;

        // ??????????????????
        var $video = dom_core_1["default"]('#' + inputIFrameId);
        var video = (0, _trim["default"])(_context = $video.val()).call(_context); // ???????????????????????????

        if (!video) return; // ????????????????????????????????????????????????????????????????????????false??????????????????

        if (!checkOnlineVideo(video)) return;
        insertVideo(video); // ?????? true????????????????????????????????????panel ?????????????????? panel ????????????

        return true;
      },
      bindEnter: true
    }]
  } // tab end
  ];
  var conf = {
    width: 300,
    height: 0,
    // panel ?????????????????? tab
    tabs: [] // tabs end

  }; // ????????????????????????

  if (window.FileReader && (config.uploadVideoServer || config.customUploadVideo)) {
    conf.tabs.push(tabsConf[0]);
  } // ????????????????????????


  if (config.showLinkVideo) {
    conf.tabs.push(tabsConf[1]);
  }

  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _some = _interopRequireDefault(__webpack_require__(137));

var _bind = _interopRequireDefault(__webpack_require__(61));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var upload_core_1 = tslib_1.__importDefault(__webpack_require__(140));

var progress_1 = tslib_1.__importDefault(__webpack_require__(141));

var const_1 = __webpack_require__(7);

var util_2 = __webpack_require__(6);

var UploadVideo = function () {
  function UploadVideo(editor) {
    this.editor = editor;
  }
  /**
   * ????????????
   * @param files ????????????
   */


  UploadVideo.prototype.uploadVideo = function (files) {
    var _this = this;

    if (!files.length) {
      return;
    }

    var editor = this.editor;
    var config = editor.config; // ------------------------------ i18next ------------------------------

    var i18nPrefix = 'validate.';

    var t = function t(text) {
      return editor.i18next.t(i18nPrefix + text);
    }; // ------------------------------ ?????????????????? ------------------------------
    // ???????????????


    var uploadVideoServer = config.uploadVideoServer; // ???????????????????????????????????? 1024M

    var maxSize = config.uploadVideoMaxSize;
    var uploadVideoMaxSize = maxSize / 1024; // ?????????????????????????????????
    // const uploadVideoMaxLength = config.uploadVideoMaxLength
    // ??????????????????????????????

    var uploadVideoName = config.uploadVideoName; // ???????????????????????????

    var uploadVideoParams = config.uploadVideoParams; // ???????????????????????? url ???

    var uploadVideoParamsWithUrl = config.uploadVideoParamsWithUrl; // ????????????????????? header

    var uploadVideoHeaders = config.uploadVideoHeaders; // ????????????

    var uploadVideoHooks = config.uploadVideoHooks; // ???????????????????????? ms ??????2?????????

    var uploadVideoTimeout = config.uploadVideoTimeout; // ????????? cookie

    var withVideoCredentials = config.withVideoCredentials; // ???????????????

    var customUploadVideo = config.customUploadVideo; // ????????????

    var uploadVideoAccept = config.uploadVideoAccept; // ------------------------------ ?????????????????? ------------------------------

    var resultFiles = [];
    var errInfos = [];
    util_1.arrForEach(files, function (file) {
      var name = file.name;
      var size = file.size / 1024 / 1024; // chrome ????????? name === undefined

      if (!name || !size) {
        return;
      }

      if (!(uploadVideoAccept instanceof Array)) {
        // ??????????????????
        errInfos.push("\u3010" + uploadVideoAccept + "\u3011" + t('uploadVideoAccept ??????Array'));
        return;
      }

      if (!(0, _some["default"])(uploadVideoAccept).call(uploadVideoAccept, function (item) {
        return item === name.split('.')[name.split('.').length - 1];
      })) {
        // ?????????????????????????????????
        errInfos.push("\u3010" + name + "\u3011" + t('????????????'));
        return;
      }

      if (uploadVideoMaxSize < size) {
        // ??????????????????
        errInfos.push("\u3010" + name + "\u3011" + t('??????') + " " + uploadVideoMaxSize + "M");
        return;
      } //?????????????????????????????????


      resultFiles.push(file);
    }); // ??????????????????

    if (errInfos.length) {
      config.customAlert(t('?????????????????????') + ": \n" + errInfos.join('\n'), 'warning');
      return;
    } // ?????????????????????????????????????????????


    if (resultFiles.length === 0) {
      config.customAlert(t('????????????????????????'), 'warning');
      return;
    } // ------------------------------ ??????????????? ------------------------------


    if (customUploadVideo && typeof customUploadVideo === 'function') {
      var _context;

      customUploadVideo(resultFiles, (0, _bind["default"])(_context = this.insertVideo).call(_context, this));
      return;
    } // ??????????????????


    var formData = new FormData();
    (0, _forEach["default"])(resultFiles).call(resultFiles, function (file, index) {
      var name = uploadVideoName || file.name;

      if (resultFiles.length > 1) {
        // ??????????????????filename ????????????
        name = name + (index + 1);
      }

      formData.append(name, file);
    }); // ------------------------------ ???????????? ------------------------------
    //?????????????????????  ????????????????????????????????????

    if (uploadVideoServer) {
      // ?????????????????????
      var uploadVideoServerArr = uploadVideoServer.split('#');
      uploadVideoServer = uploadVideoServerArr[0];
      var uploadVideoServerHash = uploadVideoServerArr[1] || '';
      (0, _forEach["default"])(util_1).call(util_1, uploadVideoParams, function (key, val) {
        // ???????????????????????????????????????????????? encode ?????? v3.1.1 ?????????????????????
        // val = encodeURIComponent(val)
        // ??????????????????????????? url ???
        if (uploadVideoParamsWithUrl) {
          if ((0, _indexOf["default"])(uploadVideoServer).call(uploadVideoServer, '?') > 0) {
            uploadVideoServer += '&';
          } else {
            uploadVideoServer += '?';
          }

          uploadVideoServer = uploadVideoServer + key + '=' + val;
        } // ??????????????????????????? formData ???


        formData.append(key, val);
      });

      if (uploadVideoServerHash) {
        uploadVideoServer += '#' + uploadVideoServerHash;
      } // ????????????


      var xhr = upload_core_1["default"](uploadVideoServer, {
        timeout: uploadVideoTimeout,
        formData: formData,
        headers: uploadVideoHeaders,
        withCredentials: !!withVideoCredentials,
        beforeSend: function beforeSend(xhr) {
          if (uploadVideoHooks.before) return uploadVideoHooks.before(xhr, editor, resultFiles);
        },
        onTimeout: function onTimeout(xhr) {
          config.customAlert(t('??????????????????'), 'error');
          if (uploadVideoHooks.timeout) uploadVideoHooks.timeout(xhr, editor);
        },
        onProgress: function onProgress(percent, e) {
          var progressBar = new progress_1["default"](editor);

          if (e.lengthComputable) {
            percent = e.loaded / e.total;
            progressBar.show(percent);
          }
        },
        onError: function onError(xhr) {
          config.customAlert(t('??????????????????'), 'error', t('??????????????????') + "\uFF0C" + t('?????????????????????') + ": " + xhr.status);
          if (uploadVideoHooks.error) uploadVideoHooks.error(xhr, editor);
        },
        onFail: function onFail(xhr, resultStr) {
          config.customAlert(t('??????????????????'), 'error', t('??????????????????????????????') + ("\uFF0C" + t('????????????') + ": ") + resultStr);
          if (uploadVideoHooks.fail) uploadVideoHooks.fail(xhr, editor, resultStr);
        },
        onSuccess: function onSuccess(xhr, result) {
          if (uploadVideoHooks.customInsert) {
            var _context2;

            // ?????????????????????
            uploadVideoHooks.customInsert((0, _bind["default"])(_context2 = _this.insertVideo).call(_context2, _this), result, editor);
            return;
          }

          if (result.errno != '0') {
            // ?????????????????????????????? { errno: 0, data: [...] }
            config.customAlert(t('??????????????????'), 'error', t('??????????????????????????????') + "\uFF0C" + t('????????????') + " errno=" + result.errno);
            if (uploadVideoHooks.fail) uploadVideoHooks.fail(xhr, editor, result);
            return;
          } // ?????????????????????


          var data = result.data;

          _this.insertVideo(data.url); // ????????????


          if (uploadVideoHooks.success) uploadVideoHooks.success(xhr, editor, result);
        }
      });

      if (typeof xhr === 'string') {
        // ???????????????
        config.customAlert(xhr, 'error');
      }
    }
  };
  /**
   * ??????????????????????????????
   * @param url ??????????????????
   */


  UploadVideo.prototype.insertVideo = function (url) {
    var editor = this.editor;
    var config = editor.config;
    var i18nPrefix = 'validate.';

    var t = function t(text, prefix) {
      if (prefix === void 0) {
        prefix = i18nPrefix;
      }

      return editor.i18next.t(prefix + text);
    }; // ???????????????????????????????????????


    if (!config.customInsertVideo) {
      if (util_2.UA.isFirefox) {
        editor.cmd["do"]('insertHTML', "<p data-we-video-p=\"true\"><video src=\"" + url + "\" controls=\"controls\" style=\"max-width:100%\"></video></p><p>&#8203</p>");
      } else {
        editor.cmd["do"]('insertHTML', "<video src=\"" + url + "\" controls=\"controls\" style=\"max-width:100%\"></video>" + const_1.EMPTY_P);
      }
    } else {
      config.customInsertVideo(url);
      return;
    } // ????????????


    var video = document.createElement('video');

    video.onload = function () {
      video = null;
    };

    video.onerror = function () {
      config.customAlert(t('??????????????????'), 'error', "wangEditor: " + t('??????????????????') + "\uFF0C" + t('????????????') + " \"" + url + "\"\uFF0C" + t('??????????????????'));
      video = null;
    };

    video.onabort = function () {
      return video = null;
    };

    video.src = url;
  };

  return UploadVideo;
}();

exports["default"] = UploadVideo;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(359);

module.exports = parent;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(360);
var path = __webpack_require__(11);

module.exports = path.Date.now;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);

// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(362));

var keyboard_1 = tslib_1.__importDefault(__webpack_require__(364));
/**
 * ????????????
 * @param editor ???????????????
 */


function bindEvent(editor) {
  //Tooltip
  tooltip_event_1["default"](editor);
  keyboard_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip ??????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.createShowHideFn = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(37));

var video_alignment_1 = tslib_1.__importDefault(__webpack_require__(363));
/**
 * ?????? Tooltip ?????????????????????
 */


function createShowHideFn(editor) {
  var tooltip;

  var t = function t(text, prefix) {
    if (prefix === void 0) {
      prefix = '';
    }

    return editor.i18next.t(prefix + text);
  };
  /**
   * ?????? tooltip
   * @param $node ????????????
   */


  function showVideoTooltip($node) {
    var conf = [{
      $elem: dom_core_1["default"]("<span class='w-e-icon-trash-o'></span>"),
      onClick: function onClick(editor, $node) {
        // ??????video?????? ??????
        $node.remove(); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>100%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '100%');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>50%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '50%');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>30%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '30%');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('??????') + "</span>"),
      onClick: function onClick(editor, $node) {
        $node.removeAttr('width');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('menus.justify.??????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        video_alignment_1["default"]($node, 'left'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('menus.justify.??????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        video_alignment_1["default"]($node, 'center'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('menus.justify.??????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        video_alignment_1["default"]($node, 'right'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }];
    tooltip = new Tooltip_1["default"](editor, $node, conf);
    tooltip.create();
  }
  /**
   * ?????? tooltip
   */


  function hideVideoTooltip() {
    // ?????? tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showVideoTooltip: showVideoTooltip,
    hideVideoTooltip: hideVideoTooltip
  };
}

exports.createShowHideFn = createShowHideFn;
/**
 * ?????? tooltip ??????
 * @param editor ???????????????
 */

function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showVideoTooltip = _a.showVideoTooltip,
      hideVideoTooltip = _a.hideVideoTooltip; // ?????????????????????????????? tooltip


  editor.txt.eventHooks.videoClickEvents.push(showVideoTooltip); // ????????????????????????????????????????????? tooltip

  editor.txt.eventHooks.clickEvents.push(hideVideoTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideVideoTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideVideoTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideVideoTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideVideoTooltip); // change ?????????

  editor.txt.eventHooks.changeEvents.push(hideVideoTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? ??????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _includes = _interopRequireDefault(__webpack_require__(46));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3)); // ??????????????????


function setAlignment($node, value) {
  // ????????????????????????
  var NODENAME = ['P']; // ???????????????????????????

  var topNode = getSelectedTopNode($node, NODENAME); // ??????????????????

  if (topNode) {
    dom_core_1["default"](topNode).css('text-align', value);
  }
}

exports["default"] = setAlignment;
/**
 * ????????????????????????????????????
 * @params el ???????????????
 * @params tag ????????????????????? ??? P LI ....
 */

function getSelectedTopNode(el, tag) {
  var _a;

  var parentNode = el.elems[0]; // ???????????????????????????????????????????????????????????????????????????????????????

  while (parentNode != null) {
    if ((0, _includes["default"])(tag).call(tag, parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeName)) {
      return parentNode;
    } // ?????? body


    if (((_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName) === 'BODY') {
      return null;
    }

    parentNode = parentNode.parentNode;
  }

  return parentNode;
}

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(6);

function bindEventKeyboardEvent(editor) {
  if (!util_1.UA.isFirefox) return;
  var txt = editor.txt,
      selection = editor.selection;
  var keydownEvents = txt.eventHooks.keydownEvents;
  keydownEvents.push(function (e) {
    // ??????????????????
    // editor.selection.saveRange()
    var $selectionContainerElem = selection.getSelectionContainerElem();

    if ($selectionContainerElem) {
      var $topElem = $selectionContainerElem.getNodeTop(editor);
      var $preElem = $topElem.length ? $topElem.prev().length ? $topElem.prev() : null : null;

      if ($preElem && $preElem.attr('data-we-video-p')) {
        // ????????????????????????
        if (selection.getCursorPos() === 0) {
          // ???????????????dom?????????video??? ???????????????video????????????
          if (e.keyCode === 8) {
            $preElem.remove();
          }
        }
      }
    }
  });
}

exports["default"] = bindEventKeyboardEvent;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _map = _interopRequireDefault(__webpack_require__(27));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var const_1 = __webpack_require__(7);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(36));

var index_1 = tslib_1.__importDefault(__webpack_require__(366));

var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(379));

var Image = function (_super) {
  tslib_1.__extends(Image, _super);

  function Image(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="??????"><i class="w-e-icon-image"></i></div>');
    var imgPanelConfig = create_panel_conf_1["default"](editor);

    if (imgPanelConfig.onlyUploadConf) {
      var _context;

      $elem = imgPanelConfig.onlyUploadConf.$elem;
      (0, _map["default"])(_context = imgPanelConfig.onlyUploadConf.events).call(_context, function (event) {
        var type = event.type;
        var fn = event.fn || const_1.EMPTY_FN;
        $elem.on(type, function (e) {
          e.stopPropagation();
          fn(e);
        });
      });
    }

    _this = _super.call(this, $elem, editor) || this;
    _this.imgPanelConfig = imgPanelConfig; // ??????????????????????????????

    index_1["default"](editor);
    return _this;
  }
  /**
   * ??????????????????
   */


  Image.prototype.clickHandler = function () {
    if (!this.imgPanelConfig.onlyUploadConf) {
      this.createPanel();
    }
  };
  /**
   * ?????? panel
   */


  Image.prototype.createPanel = function () {
    var conf = this.imgPanelConfig;
    var panel = new Panel_1["default"](this, conf);
    this.setPanel(panel);
    panel.create();
  };
  /**
   * ?????????????????? active ??????
   */


  Image.prototype.tryChangeActive = function () {};

  return Image;
}(PanelMenu_1["default"]);

exports["default"] = Image;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var paste_img_1 = tslib_1.__importDefault(__webpack_require__(367));

var drop_img_1 = tslib_1.__importDefault(__webpack_require__(368));

var drag_size_1 = tslib_1.__importDefault(__webpack_require__(369));

var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(377));

var keyboard_event_1 = tslib_1.__importDefault(__webpack_require__(378));
/**
 * ????????????
 * @param editor ???????????????
 */


function bindEvent(editor) {
  // ????????????
  paste_img_1["default"](editor); // ????????????

  drop_img_1["default"](editor); // ????????????????????????...????????? tooltip ???
  // ??????????????????

  drag_size_1["default"](editor); //Tooltip

  tooltip_event_1["default"](editor);
  keyboard_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var paste_event_1 = __webpack_require__(135);

var upload_img_1 = tslib_1.__importDefault(__webpack_require__(104));
/**
 * ?????????????????? text ?????? html ???
 * @param editor ???????????????
 * @param e ??????????????????
 */


function _haveTextOrHtml(editor, e) {
  var config = editor.config;
  var pasteFilterStyle = config.pasteFilterStyle;
  var pasteIgnoreImg = config.pasteIgnoreImg;
  var pasteHtml = paste_event_1.getPasteHtml(e, pasteFilterStyle, pasteIgnoreImg);
  if (pasteHtml) return true;
  var pasteText = paste_event_1.getPasteText(e);
  if (pasteText) return true;
  return false; // text html ????????????????????? false
}
/**
 * ?????????????????? Files
 * @param editor ???????????????
 * @param e ??????????????????
 */


function _haveFiles(editor, e) {
  var _a;

  var types = ((_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.types) || [];

  for (var i = 0; i < types.length; i++) {
    var type = types[i];

    if (type === 'Files') {
      return true;
    }
  }

  return false;
}
/**
 * ????????????????????????
 * @param e ????????????
 */


function pasteImgHandler(e, editor) {
  // ????????????????????? file ???????????? text ?????? html
  if (!_haveFiles(editor, e)) {
    if (_haveTextOrHtml(editor, e)) {
      // ?????????????????? text ?????? html ?????????????????????????????????
      return;
    }
  } // ???????????????????????????


  var pastedFiles = paste_event_1.getPasteImgs(e);

  if (!pastedFiles.length) {
    return;
  } // code ???????????????????????????
  // ????????????


  var uploadImg = new upload_img_1["default"](editor);
  uploadImg.uploadImg(pastedFiles);
}
/**
 * ????????????
 * @param editor ???????????????
 * @param pasteEvents ??????????????????
 */


function bindPasteImg(editor) {
  /**
   * ?????? paste ??????
   * ???????????????unshift????????????push
   * ????????????????????????pasteImgHandler???????????????????????????window.getSelection().removeAllRanges()
   * ??????????????????????????????????????????????????????????????????100+ms?????????????????????
   * ????????????demo??????div??????????????????????????????getData??????????????????
   * <html>
   *     <div id="a" contenteditable="true"></div>
   *     <script>
   *         const div = document.getElementById('a')
   *         div.addEventListener('paste', (e) => {
   *             window.getSelection().removeAllRanges()
   *             e.clipboardData.getData('text/html')
   *         })
   *     </script>
   * </html>
   * ????????????unshift????????????pasteImgHandler????????????????????????
   */
  editor.txt.eventHooks.pasteEvents.unshift(function (e) {
    pasteImgHandler(e, editor);
  });
}

exports["default"] = bindPasteImg;

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var upload_img_1 = tslib_1.__importDefault(__webpack_require__(104));

function bindDropImg(editor) {
  /**
   * ?????????????????????
   * @param e ????????????
   */
  function dropImgHandler(e) {
    var files = e.dataTransfer && e.dataTransfer.files;

    if (!files || !files.length) {
      return;
    } // ????????????


    var uploadImg = new upload_img_1["default"](editor);
    uploadImg.uploadImg(files);
  } // ?????? drop ??????


  editor.txt.eventHooks.dropEvents.push(dropImgHandler);
}

exports["default"] = bindDropImg;

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????????????????
 * @author xiaokyo
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _find = _interopRequireDefault(__webpack_require__(32));

var _parseFloat2 = _interopRequireDefault(__webpack_require__(370));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.createShowHideFn = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

__webpack_require__(375);

var util_1 = __webpack_require__(6);
/**
 * ??????????????????rect
 * @param $drag drag Dom
 * @param width ??????????????????
 * @param height ??????????????????
 * @param left ??????????????????
 * @param top ????????????????????????
 */


function setDragStyle($drag, width, height, left, top) {
  $drag.attr('style', "width:" + width + "px; height:" + height + "px; left:" + left + "px; top:" + top + "px;");
}
/**
 * ??????????????????????????????????????????
 * @param editor ???????????????
 * @param $textContainerElem ???????????????
 */


function createDragBox(editor, $textContainerElem) {
  var $drag = dom_core_1["default"]("<div class=\"w-e-img-drag-mask\">\n            <div class=\"w-e-img-drag-show-size\"></div>\n            <div class=\"w-e-img-drag-rb\"></div>\n         </div>");
  $drag.hide();
  $textContainerElem.append($drag);
  return $drag;
}
/**
 * ??????????????????????????????
 * @param $textContainerElem ???????????????
 * @param $drag ???????????????
 */


function showDargBox($textContainerElem, $drag, $img) {
  var boxRect = $textContainerElem.getBoundingClientRect();
  var rect = $img.getBoundingClientRect();
  var rectW = rect.width.toFixed(2);
  var rectH = rect.height.toFixed(2);
  (0, _find["default"])($drag).call($drag, '.w-e-img-drag-show-size').text(rectW + "px * " + rectH + "px");
  setDragStyle($drag, (0, _parseFloat2["default"])(rectW), (0, _parseFloat2["default"])(rectH), rect.left - boxRect.left, rect.top - boxRect.top);
  $drag.show();
}
/**
 * ???????????????????????? ??????/?????? ??????
 */


function createShowHideFn(editor) {
  var $textContainerElem = editor.$textContainerElem;
  var $imgTarget; // ???????????????

  var $drag = createDragBox(editor, $textContainerElem);
  /**
   * ??????????????????
   * @param $drag ????????????domElement
   * @param $textContainerElem ???????????????
   */

  function bindDragEvents($drag, $container) {
    $drag.on('click', function (e) {
      e.stopPropagation();
    });
    $drag.on('mousedown', '.w-e-img-drag-rb', function (e) {
      // e.stopPropagation()
      e.preventDefault();
      if (!$imgTarget) return;
      var firstX = e.clientX;
      var firstY = e.clientY;
      var boxRect = $container.getBoundingClientRect();
      var imgRect = $imgTarget.getBoundingClientRect();
      var width = imgRect.width;
      var height = imgRect.height;
      var left = imgRect.left - boxRect.left;
      var top = imgRect.top - boxRect.top;
      var ratio = width / height;
      var setW = width;
      var setH = height;
      var $document = dom_core_1["default"](document);

      function offEvents() {
        $document.off('mousemove', mouseMoveHandler);
        $document.off('mouseup', mouseUpHandler);
      }

      function mouseMoveHandler(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        setW = width + (ev.clientX - firstX);
        setH = height + (ev.clientY - firstY); // ????????????

        if (setW / setH != ratio) {
          setH = setW / ratio;
        }

        setW = (0, _parseFloat2["default"])(setW.toFixed(2));
        setH = (0, _parseFloat2["default"])(setH.toFixed(2));
        (0, _find["default"])($drag).call($drag, '.w-e-img-drag-show-size').text(setW.toFixed(2).replace('.00', '') + "px * " + setH.toFixed(2).replace('.00', '') + "px");
        setDragStyle($drag, setW, setH, left, top);
      }

      $document.on('mousemove', mouseMoveHandler);

      function mouseUpHandler() {
        $imgTarget.attr('width', setW + '');
        $imgTarget.attr('height', setH + '');
        var newImgRect = $imgTarget.getBoundingClientRect();
        setDragStyle($drag, setW, setH, newImgRect.left - boxRect.left, newImgRect.top - boxRect.top); // ????????????

        offEvents();
      }

      $document.on('mouseup', mouseUpHandler); // ????????????

      $document.on('mouseleave', offEvents);
    });
  } // ???????????????


  function showDrag($target) {
    if (util_1.UA.isIE()) return false;

    if ($target) {
      $imgTarget = $target;
      showDargBox($textContainerElem, $drag, $imgTarget);
    }
  } // ???????????????


  function hideDrag() {
    (0, _find["default"])($textContainerElem).call($textContainerElem, '.w-e-img-drag-mask').hide();
  } // ????????????


  bindDragEvents($drag, $textContainerElem); // ???????????? blur ??????

  dom_core_1["default"](document).on('click', hideDrag);
  editor.beforeDestroy(function () {
    dom_core_1["default"](document).off('click', hideDrag);
  });
  return {
    showDrag: showDrag,
    hideDrag: hideDrag
  };
}

exports.createShowHideFn = createShowHideFn;
/**
 * ??????????????????
 * @param editor ???????????????
 */

function bindDragImgSize(editor) {
  var _a = createShowHideFn(editor),
      showDrag = _a.showDrag,
      hideDrag = _a.hideDrag; // ???????????????


  editor.txt.eventHooks.imgClickEvents.push(showDrag); // ???????????????

  editor.txt.eventHooks.textScrollEvents.push(hideDrag);
  editor.txt.eventHooks.keyupEvents.push(hideDrag);
  editor.txt.eventHooks.toolbarClickEvents.push(hideDrag);
  editor.txt.eventHooks.menuClickEvents.push(hideDrag);
  editor.txt.eventHooks.changeEvents.push(hideDrag);
}

exports["default"] = bindDragImgSize;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(372);

module.exports = parent;


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(373);
var path = __webpack_require__(11);

module.exports = path.parseFloat;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var parseFloatImplementation = __webpack_require__(374);

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var toString = __webpack_require__(30);
var trim = __webpack_require__(97).trim;
var whitespaces = __webpack_require__(74);

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(376);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-text-container {\n  overflow: hidden;\n}\n.w-e-img-drag-mask {\n  position: absolute;\n  z-index: 1;\n  border: 1px dashed #ccc;\n  box-sizing: border-box;\n}\n.w-e-img-drag-mask .w-e-img-drag-rb {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #ccc;\n  cursor: se-resize;\n}\n.w-e-img-drag-mask .w-e-img-drag-show-size {\n  min-width: 110px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 14px;\n  color: #999;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #999;\n  color: #fff;\n  border-radius: 2px;\n  padding: 0 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip ??????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.createShowHideFn = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(37));
/**
 * ?????? Tooltip ?????????????????????
 */


function createShowHideFn(editor) {
  var tooltip;

  var t = function t(text, prefix) {
    if (prefix === void 0) {
      prefix = '';
    }

    return editor.i18next.t(prefix + text);
  };
  /**
   * ?????? tooltip
   * @param $node ????????????
   */


  function showImgTooltip($node) {
    var conf = [{
      $elem: dom_core_1["default"]("<span class='w-e-icon-trash-o'></span>"),
      onClick: function onClick(editor, $node) {
        // ??????img??????
        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('delete'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>30%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '30%');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>50%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '50%');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>100%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '100%');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }];
    conf.push({
      $elem: dom_core_1["default"]("<span>" + t('??????') + "</span>"),
      onClick: function onClick(editor, $node) {
        $node.removeAttr('width');
        $node.removeAttr('height'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    });

    if ($node.attr('data-href')) {
      conf.push({
        $elem: dom_core_1["default"]("<span>" + t('????????????') + "</span>"),
        onClick: function onClick(editor, $node) {
          var link = $node.attr('data-href');

          if (link) {
            link = decodeURIComponent(link);
            window.open(link, '_target');
          } // ?????? true????????????????????????????????? tooltip?????????????????????


          return true;
        }
      });
    }

    tooltip = new Tooltip_1["default"](editor, $node, conf);
    tooltip.create();
  }
  /**
   * ?????? tooltip
   */


  function hideImgTooltip() {
    // ?????? tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showImgTooltip: showImgTooltip,
    hideImgTooltip: hideImgTooltip
  };
}

exports.createShowHideFn = createShowHideFn;
/**
 * ?????? tooltip ??????
 * @param editor ???????????????
 */

function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showImgTooltip = _a.showImgTooltip,
      hideImgTooltip = _a.hideImgTooltip; // ?????????????????????????????? tooltip


  editor.txt.eventHooks.imgClickEvents.push(showImgTooltip); // ????????????????????????????????????????????? tooltip

  editor.txt.eventHooks.clickEvents.push(hideImgTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideImgTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideImgTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideImgTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideImgTooltip);
  editor.txt.eventHooks.imgDragBarMouseDownEvents.push(hideImgTooltip); // change ?????????

  editor.txt.eventHooks.changeEvents.push(hideImgTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function bindEventKeyboardEvent(editor) {
  var txt = editor.txt,
      selection = editor.selection;
  var keydownEvents = txt.eventHooks.keydownEvents;
  keydownEvents.push(function (e) {
    // ??????????????????????????????????????????bug??????????????????????????????????????????????????????????????????????????????
    var $selectionContainerElem = selection.getSelectionContainerElem();
    var range = selection.getRange();

    if (!range || !$selectionContainerElem || e.keyCode !== 8 || !selection.isSelectionEmpty()) {
      return;
    }

    var startContainer = range.startContainer,
        startOffset = range.startOffset; // ??????????????????????????????

    var prevNode = null;

    if (startOffset === 0) {
      // ?????????????????????????????????previousSibling??????
      while (startContainer !== $selectionContainerElem.elems[0] && $selectionContainerElem.elems[0].contains(startContainer) && startContainer.parentNode && !prevNode) {
        if (startContainer.previousSibling) {
          prevNode = startContainer.previousSibling;
          break;
        }

        startContainer = startContainer.parentNode;
      }
    } else if (startContainer.nodeType !== 3) {
      // ??????????????????????????????????????????p
      prevNode = startContainer.childNodes[startOffset - 1];
    }

    if (!prevNode) {
      return;
    }

    var lastChildNodeInPrevNode = prevNode; // ???????????????????????????

    while (lastChildNodeInPrevNode.childNodes.length) {
      lastChildNodeInPrevNode = lastChildNodeInPrevNode.childNodes[lastChildNodeInPrevNode.childNodes.length - 1];
    }

    if (lastChildNodeInPrevNode instanceof HTMLElement && lastChildNodeInPrevNode.tagName === 'IMG') {
      lastChildNodeInPrevNode.remove();
      e.preventDefault();
    }
  });
}

exports["default"] = bindEventKeyboardEvent;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description image ?????? panel tab ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _map = _interopRequireDefault(__webpack_require__(27));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);

var upload_img_1 = tslib_1.__importDefault(__webpack_require__(104));

function default_1(editor) {
  var _context;

  var config = editor.config;
  var uploadImg = new upload_img_1["default"](editor); // panel ??????????????????id

  var upTriggerId = util_1.getRandom('up-trigger-id');
  var upFileId = util_1.getRandom('up-file-id');
  var linkUrlId = util_1.getRandom('input-link-url');
  var linkUrlAltId = util_1.getRandom('input-link-url-alt');
  var linkUrlHrefId = util_1.getRandom('input-link-url-href');
  var linkBtnId = util_1.getRandom('btn-link');
  var i18nPrefix = 'menus.panelMenus.image.';

  var t = function t(text, prefix) {
    if (prefix === void 0) {
      prefix = i18nPrefix;
    }

    return editor.i18next.t(prefix + text);
  };
  /**
   * ????????????????????????????????????
   * @param linkImg ??????????????????
   */


  function checkLinkImg(src, linkUrlAltText, linkUrlHrefText) {
    //??????????????????????????????????????????
    var check = config.linkImgCheck(src);

    if (check === true) {
      return true;
    } else if (typeof check === 'string') {
      //?????????????????????????????????????????????????????????????????????????????????
      config.customAlert(check, 'error');
    }

    return false;
  } // tabs ?????? -----------------------------------------


  var fileMultipleAttr = config.uploadImgMaxLength === 1 ? '' : 'multiple="multiple"';
  var accepts = (0, _map["default"])(_context = config.uploadImgAccept).call(_context, function (item) {
    return "image/" + item;
  }).join(',');
  /**
   * ????????????????????????icon??????
   * w-e-menu?????????button???????????????
   * w-e-up-img-container?????????panel??????????????????????????????
   * @param containerClass ????????????????????????
   * @param iconClass ?????????icon?????????
   * @param titleName ???????????????????????? ??????????????????????????????????????????
   */

  var getUploadImgTpl = function getUploadImgTpl(containerClass, iconClass, titleName) {
    return "<div class=\"" + containerClass + "\" data-title=\"" + titleName + "\">\n            <div id=\"" + upTriggerId + "\" class=\"w-e-up-btn\">\n                <i class=\"" + iconClass + "\"></i>\n            </div>\n            <div style=\"display:none;\">\n                <input id=\"" + upFileId + "\" type=\"file\" " + fileMultipleAttr + " accept=\"" + accepts + "\"/>\n            </div>\n        </div>";
  };

  var uploadEvents = [// ??????????????????
  {
    selector: '#' + upTriggerId,
    type: 'click',
    fn: function fn() {
      var uploadImgFromMedia = config.uploadImgFromMedia;

      if (uploadImgFromMedia && typeof uploadImgFromMedia === 'function') {
        uploadImgFromMedia();
        return true;
      }

      var $file = dom_core_1["default"]('#' + upFileId);
      var fileElem = $file.elems[0];

      if (fileElem) {
        fileElem.click();
      } else {
        // ?????? true ????????? panel
        return true;
      }
    }
  }, // ??????????????????
  {
    selector: '#' + upFileId,
    type: 'change',
    fn: function fn() {
      var $file = dom_core_1["default"]('#' + upFileId);
      var fileElem = $file.elems[0];

      if (!fileElem) {
        // ?????? true ????????? panel
        return true;
      } // ??????????????? file ????????????


      var fileList = fileElem.files;

      if (fileList === null || fileList === void 0 ? void 0 : fileList.length) {
        uploadImg.uploadImg(fileList);
      } // ???????????????????????????input????????????????????????????????????????????????????????????????????????????????????change??????
      // input??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


      if (fileElem) {
        fileElem.value = '';
      } // ?????? true ????????? panel


      return true;
    }
  }];
  var linkImgInputs = ["<input\n            id=\"" + linkUrlId + "\"\n            type=\"text\"\n            class=\"block\"\n            placeholder=\"" + t('????????????') + "\"/>"];

  if (config.showLinkImgAlt) {
    linkImgInputs.push("\n        <input\n            id=\"" + linkUrlAltId + "\"\n            type=\"text\"\n            class=\"block\"\n            placeholder=\"" + t('??????????????????') + "\"/>");
  }

  if (config.showLinkImgHref) {
    linkImgInputs.push("\n        <input\n            id=\"" + linkUrlHrefId + "\"\n            type=\"text\"\n            class=\"block\"\n            placeholder=\"" + t('????????????') + "\"/>");
  }

  var tabsConf = [// first tab
  {
    // ??????
    title: t('????????????'),
    // ??????
    tpl: getUploadImgTpl('w-e-up-img-container', 'w-e-icon-upload2', ''),
    // ????????????
    events: uploadEvents
  }, // second tab
  {
    title: t('????????????'),
    tpl: "<div>\n                    " + linkImgInputs.join('') + "\n                    <div class=\"w-e-button-container\">\n                        <button type=\"button\" id=\"" + linkBtnId + "\" class=\"right\">" + t('??????', '') + "</button>\n                    </div>\n                </div>",
    events: [{
      selector: '#' + linkBtnId,
      type: 'click',
      fn: function fn() {
        var _context2;

        var $linkUrl = dom_core_1["default"]('#' + linkUrlId);
        var url = (0, _trim["default"])(_context2 = $linkUrl.val()).call(_context2); //??????url?????????????????????

        if (!url) return;
        var linkUrlAltText;

        if (config.showLinkImgAlt) {
          var _context3;

          linkUrlAltText = (0, _trim["default"])(_context3 = dom_core_1["default"]('#' + linkUrlAltId).val()).call(_context3);
        }

        var linkUrlHrefText;

        if (config.showLinkImgHref) {
          var _context4;

          linkUrlHrefText = (0, _trim["default"])(_context4 = dom_core_1["default"]('#' + linkUrlHrefId).val()).call(_context4);
        } //???????????????????????????????????????


        if (!checkLinkImg(url, linkUrlAltText, linkUrlHrefText)) return; //????????????url

        uploadImg.insertImg(url, linkUrlAltText, linkUrlHrefText); // ?????? true ???????????????????????????????????? panel

        return true;
      },
      bindEnter: true
    }]
  } // second tab end
  ]; // tabs end
  // ??????????????? -----------------------------------------

  var conf = {
    width: 300,
    height: 0,
    tabs: [],
    onlyUploadConf: {
      $elem: dom_core_1["default"](getUploadImgTpl('w-e-menu', 'w-e-icon-image', '??????')),
      events: uploadEvents
    }
  }; // ????????????????????????

  if (window.FileReader && (config.uploadImgShowBase64 || config.uploadImgServer || config.customUploadImg || config.uploadImgFromMedia)) {
    conf.tabs.push(tabsConf[0]);
  } // ??????????????????????????????


  if (config.showLinkImg) {
    conf.tabs.push(tabsConf[1]);
    conf.onlyUploadConf = undefined;
  }

  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????/????????????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var operate_element_1 = tslib_1.__importDefault(__webpack_require__(381));

var Indent = function (_super) {
  tslib_1.__extends(Indent, _super);

  function Indent(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u7F29\u8FDB\">\n                <i class=\"w-e-icon-indent-increase\"></i>\n            </div>");
    var dropListConf = {
      width: 130,
      title: '????????????',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-indent-increase w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.indent.????????????') + "\n                        <p>"),
        value: 'increase'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-indent-decrease w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.indent.????????????') + "\n                        <p>"),
        value: 'decrease'
      }],
      clickHandler: function clickHandler(value) {
        // ?????? this ?????????????????? Indent ??????
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  Indent.prototype.command = function (value) {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionContainerElem(); // ?????? ??????????????? textElem ???

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      // ??? ???????????? ?????? textElem ???
      // ?????? ???????????? ???????????????????????????????????????????????????????????????
      var $elems = editor.selection.getSelectionRangeTopNodes();

      if ($elems.length > 0) {
        (0, _forEach["default"])($elems).call($elems, function (item) {
          operate_element_1["default"](dom_core_1["default"](item), value, editor);
        });
      }
    } else {
      // ??? ???????????? ????????? textElem ???
      // ?????? ??????????????????????????????????????????????????????????????????
      if ($selectionElem && $selectionElem.length > 0) {
        (0, _forEach["default"])($selectionElem).call($selectionElem, function (item) {
          operate_element_1["default"](dom_core_1["default"](item), value, editor);
        });
      }
    } // ????????????


    editor.selection.restoreSelection();
    this.tryChangeActive();
  };
  /**
   * ??????????????????????????????????????????
   */


  Indent.prototype.tryChangeActive = function () {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionStartElem();
    var $selectionStartElem = dom_core_1["default"]($selectionElem).getNodeTop(editor);
    if ($selectionStartElem.length <= 0) return;

    if ($selectionStartElem.elems[0].style['paddingLeft'] != '') {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Indent;
}(DropListMenu_1["default"]);

exports["default"] = Indent;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????? ?????? ????????????
 *                  ???????????????????????????
 *                  ??????type?????????????????????????????????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _slice = _interopRequireDefault(__webpack_require__(47));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var increase_indent_style_1 = tslib_1.__importDefault(__webpack_require__(382));

var decrease_indent_style_1 = tslib_1.__importDefault(__webpack_require__(383));

var lengthRegex = /^(\d+)(\w+)$/;
var percentRegex = /^(\d+)%$/;

function parseIndentation(editor) {
  var indentation = editor.config.indentation;

  if (typeof indentation === 'string') {
    if (lengthRegex.test(indentation)) {
      var _context;

      var _a = (0, _slice["default"])(_context = (0, _trim["default"])(indentation).call(indentation).match(lengthRegex)).call(_context, 1, 3),
          value = _a[0],
          unit = _a[1];

      return {
        value: Number(value),
        unit: unit
      };
    } else if (percentRegex.test(indentation)) {
      return {
        value: Number((0, _trim["default"])(indentation).call(indentation).match(percentRegex)[1]),
        unit: '%'
      };
    }
  } else if (indentation.value !== void 0 && indentation.unit) {
    return indentation;
  }

  return {
    value: 2,
    unit: 'em'
  };
}

function operateElement($node, type, editor) {
  var $elem = $node.getNodeTop(editor);
  var reg = /^(P|H[0-9]*)$/;

  if (reg.test($elem.getNodeName())) {
    if (type === 'increase') increase_indent_style_1["default"]($elem, parseIndentation(editor));else if (type === 'decrease') decrease_indent_style_1["default"]($elem, parseIndentation(editor));
  }
}

exports["default"] = operateElement;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _slice = _interopRequireDefault(__webpack_require__(47));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function increaseIndentStyle($node, options) {
  var $elem = $node.elems[0];

  if ($elem.style['paddingLeft'] === '') {
    $node.css('padding-left', options.value + options.unit);
  } else {
    var oldPL = $elem.style['paddingLeft'];
    var oldVal = (0, _slice["default"])(oldPL).call(oldPL, 0, oldPL.length - options.unit.length);
    var newVal = Number(oldVal) + options.value;
    $node.css('padding-left', "" + newVal + options.unit);
  }
}

exports["default"] = increaseIndentStyle;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _slice = _interopRequireDefault(__webpack_require__(47));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function decreaseIndentStyle($node, options) {
  var $elem = $node.elems[0];

  if ($elem.style['paddingLeft'] !== '') {
    var oldPL = $elem.style['paddingLeft'];
    var oldVal = (0, _slice["default"])(oldPL).call(oldPL, 0, oldPL.length - options.unit.length);
    var newVal = Number(oldVal) - options.value;

    if (newVal > 0) {
      $node.css('padding-left', "" + newVal + options.unit);
    } else {
      $node.css('padding-left', '');
    }
  }
}

exports["default"] = decreaseIndentStyle;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description ????????????
 * @author liuwe
 */


var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(36));

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(385));

var Emoticon = function (_super) {
  tslib_1.__extends(Emoticon, _super);

  function Emoticon(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u8868\u60C5\">\n                <i class=\"w-e-icon-happy\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * ?????? panel
   */


  Emoticon.prototype.createPanel = function () {
    var conf = create_panel_conf_1["default"](this.editor);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * ????????????????????????
   */


  Emoticon.prototype.clickHandler = function () {
    this.createPanel();
  };

  Emoticon.prototype.tryChangeActive = function () {};

  return Emoticon;
}(PanelMenu_1["default"]);

exports["default"] = Emoticon;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description  ???????????? panel??????
 * @author liuwei
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _map = _interopRequireDefault(__webpack_require__(27));

var _filter = _interopRequireDefault(__webpack_require__(76));

var _trim = _interopRequireDefault(__webpack_require__(16));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

function default_1(editor) {
  // ??????emotions????????????
  var emotions = editor.config.emotions;
  /* tabs????????? ==================================================================*/
  // ?????????????????? TODO jele type???????????????

  function GenerateExpressionStructure(ele) {
    // ???????????????????????????
    var res = []; // ??????type???image?????????????????????img??????

    if (ele.type == 'image') {
      var _context;

      res = (0, _map["default"])(_context = ele.content).call(_context, function (con) {
        if (typeof con == 'string') return '';
        return "<span  title=\"" + con.alt + "\">\n                    <img class=\"eleImg\" data-emoji=\"" + con.alt + "\" style src=\"" + con.src + "\" alt=\"[" + con.alt + "]\">\n                </span>";
      });
      res = (0, _filter["default"])(res).call(res, function (s) {
        return s !== '';
      });
    } //???????????????????????????
    else {
      var _context2;

      res = (0, _map["default"])(_context2 = ele.content).call(_context2, function (con) {
        return "<span class=\"eleImg\" title=\"" + con + "\">" + con + "</span>";
      });
    }

    return res.join('').replace(/&nbsp;/g, '');
  }

  var tabsConf = (0, _map["default"])(emotions).call(emotions, function (ele) {
    return {
      title: editor.i18next.t("menus.panelMenus.emoticon." + ele.title),
      // ??????type???????????????image??????img??????????????????????????????
      tpl: "<div>" + GenerateExpressionStructure(ele) + "</div>",
      events: [{
        selector: '.eleImg',
        type: 'click',
        fn: function fn(e) {
          // e???????????????
          var $target = dom_core_1["default"](e.target);
          var nodeName = $target.getNodeName();
          var insertHtml;

          if (nodeName === 'IMG') {
            var _context3;

            // ????????????
            insertHtml = (0, _trim["default"])(_context3 = $target.parent().html()).call(_context3);
          } else {
            // ?????? emoji
            insertHtml = '<span>' + $target.html() + '</span>';
          }

          editor.cmd["do"]('insertHTML', insertHtml); // ????????????????????????????????? panel

          return true;
        }
      }]
    };
  });
  /* tabs????????? =================================================================end*/
  // ??????????????? -----------------------------------------

  var conf = {
    width: 300,
    height: 230,
    tabs: tabsConf
  };
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.createListHandle = exports.ClassType = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var WrapListHandle_1 = tslib_1.__importDefault(__webpack_require__(387));

var JoinListHandle_1 = tslib_1.__importDefault(__webpack_require__(389));

var StartJoinListHandle_1 = tslib_1.__importDefault(__webpack_require__(390));

var EndJoinListHandle_1 = tslib_1.__importDefault(__webpack_require__(391));

var OtherListHandle_1 = tslib_1.__importDefault(__webpack_require__(392));

var ClassType;

(function (ClassType) {
  ClassType["Wrap"] = "WrapListHandle";
  ClassType["Join"] = "JoinListHandle";
  ClassType["StartJoin"] = "StartJoinListHandle";
  ClassType["EndJoin"] = "EndJoinListHandle";
  ClassType["Other"] = "OtherListHandle";
})(ClassType = exports.ClassType || (exports.ClassType = {}));

var handle = {
  WrapListHandle: WrapListHandle_1["default"],
  JoinListHandle: JoinListHandle_1["default"],
  StartJoinListHandle: StartJoinListHandle_1["default"],
  EndJoinListHandle: EndJoinListHandle_1["default"],
  OtherListHandle: OtherListHandle_1["default"]
};

function createListHandle(classType, options, range) {
  if (classType === ClassType.Other && range === undefined) {
    throw new Error('other ??????????????? range');
  }

  return classType !== ClassType.Other ? new handle[classType](options) : new handle[classType](options, range);
}

exports.createListHandle = createListHandle;
/**
 * ?????????????????????
 */

var ListHandleCommand = function () {
  function ListHandleCommand(handle) {
    this.handle = handle;
    this.handle.exec();
  }

  ListHandleCommand.prototype.getSelectionRangeElem = function () {
    return dom_core_1["default"](this.handle.selectionRangeElem.get());
  };

  return ListHandleCommand;
}();

exports["default"] = ListHandleCommand;

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var ListHandle_1 = __webpack_require__(62);

var utils_1 = __webpack_require__(49);
/**
 * ???????????????????????????
 */


var WrapListHandle = function (_super) {
  tslib_1.__extends(WrapListHandle, _super);

  function WrapListHandle(options) {
    return _super.call(this, options) || this;
  }

  WrapListHandle.prototype.exec = function () {
    var _a = this.options,
        listType = _a.listType,
        listTarget = _a.listTarget,
        $selectionElem = _a.$selectionElem,
        $startElem = _a.$startElem,
        $endElem = _a.$endElem;
    var $containerFragment; // ?????? - HTML ????????????

    var $nodes = []; // ?????????????????????
    // ?????? selectionElem ????????????

    var containerNodeName = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeName(); // ??????????????????????????? li ??????

    var $start = $startElem.prior;
    var $end = $endElem.prior; // =====================================
    // ??? ???????????? ??? ???????????? ?????? prior
    // ?????? ???????????? ???????????????????????????
    // ?????? ???????????? ???????????????????????????
    // ????????? ????????????
    // =====================================

    if (!$startElem.prior && !$endElem.prior || !($start === null || $start === void 0 ? void 0 : $start.prev().length) && !($end === null || $end === void 0 ? void 0 : $end.next().length)) {
      var _context;

      // ?????????????????????????????? li ??????
      ;
      (0, _forEach["default"])(_context = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.children()).call(_context, function ($node) {
        $nodes.push(dom_core_1["default"]($node));
      }); // =====================================
      // ??? selectionElem ??????????????????????????? ?????? ?????????
      // ??????????????????????????? ?????? ??????
      // =====================================

      if (containerNodeName === listType) {
        // ?????????????????????(p)?????????????????????????????????????????????????????? li
        $containerFragment = utils_1.createElementFragment($nodes, utils_1.createDocumentFragment(), // ?????? ????????????
        'p');
      } // =====================================
      // ??? selectionElem ??????????????????????????? ????????? ?????????
      // ??????????????????????????? ?????? ??????
      // =====================================
      else {
        // ?????? ????????????
        $containerFragment = utils_1.createElement(listTarget); // ???????????????????????? li ????????????????????????

        (0, _forEach["default"])($nodes).call($nodes, function ($node) {
          $containerFragment.appendChild($node.elems[0]);
        });
      } // ??? ???????????? ??? ???????????? ????????? selectionElem ?????????


      this.selectionRangeElem.set($containerFragment); // ????????? $selectionElem ??????

      utils_1.insertBefore($selectionElem, $containerFragment, $selectionElem.elems[0]); // ??????????????? selectionElem ?????????????????????

      $selectionElem.remove();
    } // =====================================
    // ?????????????????????????????????????????????????????????(??????)
    // ????????????????????????
    // =====================================
    else {
      // ?????????????????????
      var $startDom = $start;

      while ($startDom.length) {
        $nodes.push($startDom);
        ($end === null || $end === void 0 ? void 0 : $end.equal($startDom)) ? $startDom = dom_core_1["default"](undefined) : $startDom = $startDom.next(); // ??????
      } // ??????????????????????????????????????????


      var $prveDom = $start.prev(); // ??????????????????????????????????????????

      var $nextDom = $end.next(); // =====================================
      // ??? selectionElem ??????????????????????????????????????????
      // ??????????????????????????? ?????? ??????
      // =====================================

      if (containerNodeName === listType) {
        // ?????????????????????(p)?????????????????????????????????????????????????????? li
        $containerFragment = utils_1.createElementFragment($nodes, utils_1.createDocumentFragment(), // ?????? ????????????
        'p');
      } // =====================================
      // ??? selectionElem ?????????????????????????????????????????????
      // ??????????????????????????? ?????? ??????
      // =====================================
      else {
        // ?????? ????????????
        $containerFragment = utils_1.createElement(listTarget); // ???????????????????????? li ????????????????????????

        (0, _forEach["default"])($nodes).call($nodes, function ($node) {
          $containerFragment.append($node.elems[0]);
        });
      } // =====================================
      // ??? prveDom ??? nextDom ??????????????????
      // ??????????????????????????????????????????
      // ??????????????? ???????????? ???????????? li ?????????????????????????????? ??????
      // =====================================


      if ($prveDom.length && $nextDom.length) {
        // ?????????????????????
        var $tailDomArr = [];

        while ($nextDom.length) {
          $tailDomArr.push($nextDom);
          $nextDom = $nextDom.next();
        } // ?????? ??????????????????


        var $tailDocFragment_1 = utils_1.createElement(containerNodeName); // ???????????????????????????????????????????????????

        (0, _forEach["default"])($tailDomArr).call($tailDomArr, function ($node) {
          $tailDocFragment_1.append($node.elems[0]);
        }); // ?????????????????????????????? selectionElem ?????????

        dom_core_1["default"]($tailDocFragment_1).insertAfter($selectionElem); // =====================================
        // ???????????????????????????????????????????????????????????????
        // ???????????? selectionElem ?????????????????????????????????
        // ??????????????????????????????????????? selectionElem ????????????????????????
        // ?????????????????????????????????????????? ???????????? ??????
        // =====================================

        this.selectionRangeElem.set($containerFragment);
        var $selectionNextDom = $selectionElem.next();
        $selectionNextDom.length ? utils_1.insertBefore($selectionElem, $containerFragment, $selectionNextDom.elems[0]) : $selectionElem.parent().elems[0].append($containerFragment);
      } // =====================================
      // ????????? ?????? ?????? ?????? ???????????????????????????
      //
      // prveDom.length ?????? 0 ?????????????????? selectionElem ?????????????????????
      // ??????????????? li ??????
      // =====================================
      else if (!$prveDom.length) {
        // ????????????????????? selectionElem ??????
        this.selectionRangeElem.set($containerFragment);
        utils_1.insertBefore($selectionElem, $containerFragment, $selectionElem.elems[0]);
      } // =====================================
      // ????????? ?????? ?????? ?????? ???????????????????????????
      //
      // nextDom.length ?????? 0 ?????????????????? selectionElem ?????????????????????
      // ??????????????? li ??????  if (!$nextDom.length)
      // =====================================
      else {
        // ????????????????????? selectionElem ??????
        this.selectionRangeElem.set($containerFragment);
        var $selectionNextDom = $selectionElem.next();
        $selectionNextDom.length ? utils_1.insertBefore($selectionElem, $containerFragment, $selectionNextDom.elems[0]) : $selectionElem.parent().elems[0].append($containerFragment);
      }
    }
  };

  return WrapListHandle;
}(ListHandle_1.ListHandle);

exports["default"] = WrapListHandle;

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description ????????? Element
 * @author tonghan
 */

var SelectionRangeElem = function () {
  function SelectionRangeElem() {
    this._element = null;
  }
  /**
   * ?????? SelectionRangeElem ??????
   * @param { SetSelectionRangeType } data
   */


  SelectionRangeElem.prototype.set = function (data) {
    //
    if (data instanceof DocumentFragment) {
      var _context;

      var childNode_1 = [];
      (0, _forEach["default"])(_context = data.childNodes).call(_context, function ($node) {
        childNode_1.push($node);
      });
      data = childNode_1;
    }

    this._element = data;
  };
  /**
   * ?????? SelectionRangeElem ??????
   * @returns { SelectionRangeType } Elem
   */


  SelectionRangeElem.prototype.get = function () {
    return this._element;
  };
  /**
   * ?????? SelectionRangeElem ??????
   */


  SelectionRangeElem.prototype.clear = function () {
    this._element = null;
  };

  return SelectionRangeElem;
}();

exports["default"] = SelectionRangeElem;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var ListHandle_1 = __webpack_require__(62);

var utils_1 = __webpack_require__(49);

var JoinListHandle = function (_super) {
  tslib_1.__extends(JoinListHandle, _super);

  function JoinListHandle(options) {
    return _super.call(this, options) || this;
  }

  JoinListHandle.prototype.exec = function () {
    var _a, _b, _c, _d, _e, _f, _g;

    var _h = this.options,
        editor = _h.editor,
        listType = _h.listType,
        listTarget = _h.listTarget,
        $startElem = _h.$startElem,
        $endElem = _h.$endElem; // ?????? - HTML ????????????

    var $containerFragment; // ?????????????????????

    var $nodes = editor.selection.getSelectionRangeTopNodes(); // ????????????????????????????????? ?????????

    var startNodeName = $startElem === null || $startElem === void 0 ? void 0 : $startElem.getNodeName();
    var endNodeName = $endElem === null || $endElem === void 0 ? void 0 : $endElem.getNodeName(); // =====================================
    // ????????????????????????????????????
    // ???????????? ??? ???????????????????????????????????????
    // =====================================

    if (startNodeName === endNodeName) {
      // =====================================
      // ???????????? ??? ???????????? ????????????????????????????????????
      // =====================================
      if ($nodes.length > 2) {
        // ?????? ?????? ??? ??????
        $nodes.shift();
        $nodes.pop(); // ??????????????????????????????????????? li ???????????????????????????????????????

        $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), // ?????? $nodes ??????????????????????????????????????????
        utils_1.createDocumentFragment() // ?????? ????????????
        ); // =====================================
        // ?????????????????? ??? ??????????????????????????????????????????????????????????????????
        // ?????????????????????????????????????????? ?????? ?????????
        // ???????????????????????? ???????????? ?????????
        // =====================================

        if (startNodeName === listType) {
          // ?????????????????? li ??????????????? ???????????????
          (_a = $endElem.children()) === null || _a === void 0 ? void 0 : (0, _forEach["default"])(_a).call(_a, function ($list) {
            $containerFragment.append($list);
          }); // ????????????????????????????????????????????????

          $endElem.remove(); // ???????????????????????? ????????????

          this.selectionRangeElem.set($containerFragment);
          $startElem.elems[0].append($containerFragment);
        } // =====================================
        // ?????????????????? ??? ??????????????????????????????????????????????????????????????????
        // ?????????????????????????????????????????? ????????? ?????????
        // ???????????????????????? ???????????? ?????????
        // =====================================
        else {
          // ?????? ??????????????????????????????????????????
          var $startFragment = document.createDocumentFragment();
          var $endFragment_1 = document.createDocumentFragment(); // ??????????????????

          var $startDom = utils_1.getStartPoint($startElem); // ??????????????????????????????????????????????????????????????????

          while ($startDom.length) {
            var _element = $startDom.elems[0];
            $startDom = $startDom.next();
            $startFragment.append(_element);
          } // ??????????????????


          var $endDom = utils_1.getEndPoint($endElem); // ????????????????????????????????????

          var domArr = [];

          while ($endDom.length) {
            domArr.unshift($endDom.elems[0]);
            $endDom = $endDom.prev();
          } // ????????????????????????


          (0, _forEach["default"])(domArr).call(domArr, function ($node) {
            $endFragment_1.append($node);
          }); // ??????????????????

          var $orderFragment = utils_1.createElement(listTarget);
          $orderFragment.append($startFragment);
          $orderFragment.append($containerFragment);
          $orderFragment.append($endFragment_1);
          $containerFragment = $orderFragment; // ??????

          this.selectionRangeElem.set($containerFragment);
          dom_core_1["default"]($orderFragment).insertAfter($startElem); // ????????????????????????????????????????????????

          !((_b = $startElem.children()) === null || _b === void 0 ? void 0 : _b.length) && $startElem.remove();
          !((_c = $endElem.children()) === null || _c === void 0 ? void 0 : _c.length) && $endElem.remove();
        }
      } // =====================================
      // ???????????? ??? ???????????? ???????????????????????????
      // =====================================
      else {
        $nodes.length = 0; // ??????????????????

        var $startDom = utils_1.getStartPoint($startElem); // ????????????????????????????????????

        while ($startDom.length) {
          $nodes.push($startDom);
          $startDom = $startDom.next();
        } // ??????????????????


        var $endDom = utils_1.getEndPoint($endElem); // ????????????????????????????????????

        var domArr = []; // ????????????????????????????????????

        while ($endDom.length) {
          domArr.unshift($endDom);
          $endDom = $endDom.prev();
        } // ????????????


        $nodes.push.apply($nodes, domArr); // =====================================
        // ?????????????????? ??? ??????????????????????????????????????????????????????????????????
        // ?????????????????????????????????????????? ?????? ?????????
        // ???????????????????????? ???????????? ?????????
        // =====================================

        if (startNodeName === listType) {
          // ?????? ????????????
          // ??? li ????????? p ??????
          $containerFragment = utils_1.createElementFragment($nodes, utils_1.createDocumentFragment(), 'p'); // ????????? endElem ???

          this.selectionRangeElem.set($containerFragment);
          utils_1.insertBefore($startElem, $containerFragment, $endElem.elems[0]);
        } // =====================================
        // ?????????????????? ??? ??????????????????????????????????????????????????????????????????
        // ?????????????????????????????????????????? ????????? ?????????
        // ???????????????????????? ???????????? ?????????
        // =====================================
        else {
          // ?????? ????????????
          $containerFragment = utils_1.createElement(listTarget); // li ??????????????? ???????????? ???

          (0, _forEach["default"])($nodes).call($nodes, function ($list) {
            $containerFragment.append($list.elems[0]);
          }); // ????????? startElem ??????

          this.selectionRangeElem.set($containerFragment);
          dom_core_1["default"]($containerFragment).insertAfter($startElem);
        } // ????????????????????????????????????????????????


        !((_d = $startElem.children()) === null || _d === void 0 ? void 0 : _d.length) && $endElem.remove();
        !((_e = $endElem.children()) === null || _e === void 0 ? void 0 : _e.length) && $endElem.remove();
      }
    } // =====================================
    // ?????????????????? ??? ?????????????????????????????????
    // =====================================
    else {
      // ?????????????????????
      var lowerListElems = []; // ??????????????????

      var $endDom = utils_1.getEndPoint($endElem); // ????????????????????????????????????

      while ($endDom.length) {
        lowerListElems.unshift($endDom);
        $endDom = $endDom.prev();
      } // ?????????????????????


      var upperListElems = []; // ??????????????????

      var $startDom = utils_1.getStartPoint($startElem); // ??????????????????????????????????????????????????????????????????

      while ($startDom.length) {
        upperListElems.push($startDom);
        $startDom = $startDom.next();
      } // ?????? ????????????


      $containerFragment = utils_1.createDocumentFragment(); // ??????????????????????????????

      $nodes.shift();
      $nodes.pop(); // ???????????????????????????????????????????????????

      (0, _forEach["default"])(upperListElems).call(upperListElems, function ($list) {
        return $containerFragment.append($list.elems[0]);
      }); // ?????? li ???????????????????????? ????????????????????????????????????

      $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), // ????????????????????? - ??????????????????
      $containerFragment); // ???????????????????????????????????????????????????

      (0, _forEach["default"])(lowerListElems).call(lowerListElems, function ($list) {
        return $containerFragment.append($list.elems[0]);
      }); // ??????

      this.selectionRangeElem.set($containerFragment); // =====================================
      // ???????????? ??? ????????????????????????
      // =====================================

      if (startNodeName === listType) {
        // ????????? ?????????????????????(???????????????)
        $startElem.elems[0].append($containerFragment); // ????????????????????????????????????????????????

        !((_f = $endElem.children()) === null || _f === void 0 ? void 0 : _f.length) && $endElem.remove();
      } // =====================================
      // ???????????? ??? ????????????????????????
      // =====================================
      else {
        // ??????????????????????????????(???????????????)
        if ((_g = $endElem.children()) === null || _g === void 0 ? void 0 : _g.length) {
          var $endElemChild = $endElem.children();
          utils_1.insertBefore($endElemChild, $containerFragment, $endElemChild.elems[0]);
        } else {
          $endElem.elems[0].append($containerFragment);
        }
      }
    }
  };

  return JoinListHandle;
}(ListHandle_1.ListHandle);

exports["default"] = JoinListHandle;

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var ListHandle_1 = __webpack_require__(62);

var utils_1 = __webpack_require__(49);

var StartJoinListHandle = function (_super) {
  tslib_1.__extends(StartJoinListHandle, _super);

  function StartJoinListHandle(options) {
    return _super.call(this, options) || this;
  }

  StartJoinListHandle.prototype.exec = function () {
    var _a;

    var _b = this.options,
        editor = _b.editor,
        listType = _b.listType,
        listTarget = _b.listTarget,
        $startElem = _b.$startElem; // ?????? - HTML ????????????

    var $containerFragment; // ?????????????????????

    var $nodes = editor.selection.getSelectionRangeTopNodes(); // ???????????????????????????

    var startNodeName = $startElem === null || $startElem === void 0 ? void 0 : $startElem.getNodeName(); // ?????? ????????????

    $nodes.shift(); // ?????????????????????

    var upperListElems = []; // ??????????????????

    var $startDom = utils_1.getStartPoint($startElem); // ??????????????????????????????????????????????????????????????????

    while ($startDom.length) {
      upperListElems.push($startDom);
      $startDom = $startDom.next();
    } // =====================================
    // ?????????????????????????????????????????? ??????
    // ????????????????????? ??????(???????????????????????????????????????) ?????????
    // =====================================


    if (startNodeName === listType) {
      $containerFragment = utils_1.createDocumentFragment();
      (0, _forEach["default"])(upperListElems).call(upperListElems, function ($list) {
        return $containerFragment.append($list.elems[0]);
      }); // ?????? li ??????????????????

      $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), // ????????????????????????
      $containerFragment); // ???????????????????????????

      this.selectionRangeElem.set($containerFragment); // this.selectionRangeElem.set($startElem.elems[0])

      $startElem.elems[0].append($containerFragment);
    } // =====================================
    // ?????????????????????????????????????????? ?????????
    // ????????????????????? ???????????? ?????????
    // =====================================
    else {
      // ?????? ????????????
      $containerFragment = utils_1.createElement(listTarget);
      (0, _forEach["default"])(upperListElems).call(upperListElems, function ($list) {
        return $containerFragment.append($list.elems[0]);
      }); // ?????? li ????????????????????? ???????????? ???????????????????????????

      $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), // ??????????????????
      $containerFragment); // ?????????????????????

      this.selectionRangeElem.set($containerFragment);
      dom_core_1["default"]($containerFragment).insertAfter($startElem); // ????????????????????????????????????????????????

      !((_a = $startElem.children()) === null || _a === void 0 ? void 0 : _a.length) && $startElem.remove();
    }
  };

  return StartJoinListHandle;
}(ListHandle_1.ListHandle);

exports["default"] = StartJoinListHandle;

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var ListHandle_1 = __webpack_require__(62);

var utils_1 = __webpack_require__(49);

var EndJoinListHandle = function (_super) {
  tslib_1.__extends(EndJoinListHandle, _super);

  function EndJoinListHandle(options) {
    return _super.call(this, options) || this;
  }

  EndJoinListHandle.prototype.exec = function () {
    var _a, _b;

    var _c = this.options,
        editor = _c.editor,
        listType = _c.listType,
        listTarget = _c.listTarget,
        $endElem = _c.$endElem; // ?????? - HTML ????????????

    var $containerFragment; // ?????????????????????

    var $nodes = editor.selection.getSelectionRangeTopNodes(); // ???????????????????????????

    var endNodeName = $endElem === null || $endElem === void 0 ? void 0 : $endElem.getNodeName(); // ?????? ????????????

    $nodes.pop(); // ?????????????????????

    var lowerListElems = []; // ??????????????????

    var $endDom = utils_1.getEndPoint($endElem); // ????????????????????????????????????

    while ($endDom.length) {
      lowerListElems.unshift($endDom);
      $endDom = $endDom.prev();
    } // =====================================
    // ?????????????????????????????????????????? ??????
    // ????????????????????? ??????(???????????????????????????????????????) ?????????
    // =====================================


    if (endNodeName === listType) {
      // ?????? li ??????????????????????????? dom ??????
      $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), // ????????????????????????
      utils_1.createDocumentFragment() // ?????? ????????????
      );
      (0, _forEach["default"])(lowerListElems).call(lowerListElems, function ($list) {
        return $containerFragment.append($list.elems[0]);
      }); // ???????????????????????????

      this.selectionRangeElem.set($containerFragment);

      if ((_a = $endElem.children()) === null || _a === void 0 ? void 0 : _a.length) {
        var $endElemChild = $endElem.children();
        utils_1.insertBefore($endElemChild, $containerFragment, $endElemChild.elems[0]);
      } else {
        $endElem.elems[0].append($containerFragment);
      }
    } // =====================================
    // ?????????????????????????????????????????? ?????????
    // ????????????????????? ???????????? ?????????
    // =====================================
    else {
      // ????????????????????????
      var $selectionNodes = utils_1.filterSelectionNodes($nodes); // ?????????????????????????????????????????????

      $selectionNodes.push.apply($selectionNodes, lowerListElems); // ?????? li ???????????????????????????????????????????????????

      $containerFragment = utils_1.createElementFragment($selectionNodes, utils_1.createElement(listTarget) // ?????? ????????????
      ); // ???????????????????????????

      this.selectionRangeElem.set($containerFragment);
      dom_core_1["default"]($containerFragment).insertBefore($endElem); // ????????????????????????????????????????????????

      !((_b = $endElem.children()) === null || _b === void 0 ? void 0 : _b.length) && $endElem.remove();
    }
  };

  return EndJoinListHandle;
}(ListHandle_1.ListHandle);

exports["default"] = EndJoinListHandle;

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var ListHandle_1 = __webpack_require__(62);

var utils_1 = __webpack_require__(49);

var OtherListHandle = function (_super) {
  tslib_1.__extends(OtherListHandle, _super);

  function OtherListHandle(options, range) {
    var _this = _super.call(this, options) || this;

    _this.range = range;
    return _this;
  }

  OtherListHandle.prototype.exec = function () {
    var _a = this.options,
        editor = _a.editor,
        listTarget = _a.listTarget; // ?????????????????????

    var $nodes = editor.selection.getSelectionRangeTopNodes(); // ?????? li ???????????????????????????????????????????????????

    var $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), // ?????????????????????
    utils_1.createElement(listTarget) // ?????? ????????????
    ); // ?????????????????????

    this.selectionRangeElem.set($containerFragment);
    this.range.insertNode($containerFragment);
  };

  return OtherListHandle;
}(ListHandle_1.ListHandle);

exports["default"] = OtherListHandle;

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? LineHeight
 * @author lichunlin
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var lineHeightList_1 = tslib_1.__importDefault(__webpack_require__(394));

var util_1 = __webpack_require__(6);

var LineHeight = function (_super) {
  tslib_1.__extends(LineHeight, _super);

  function LineHeight(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u884C\u9AD8\">\n                    <i class=\"w-e-icon-row-height\"></i>\n                </div>");
    var lineHeightMenu = new lineHeightList_1["default"](editor, editor.config.lineHeights);
    var DropListMenu = {
      width: 100,
      title: '????????????',
      type: 'list',
      list: lineHeightMenu.getItemList(),
      clickHandler: function clickHandler(value) {
        //????????????
        editor.selection.saveRange();

        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, DropListMenu) || this;
    return _this;
  }
  /**
   * ????????????
   * @param value value
   */


  LineHeight.prototype.command = function (value) {
    var _this = this;

    var _a;

    var selection = window.getSelection ? window.getSelection() : document.getSelection(); //????????????dom

    var allowArray = ['P'];
    var editor = this.editor;
    var st = ''; //????????????

    editor.selection.restoreSelection();
    var $selectionElem = dom_core_1["default"](editor.selection.getSelectionContainerElem());
    if (!($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.length)) return;
    var $selectionAll = dom_core_1["default"](editor.selection.getSelectionContainerElem()); // let dom:HTMLElement= $selectionElem.elems[0]

    var dom = dom_core_1["default"](editor.selection.getSelectionStartElem()).elems[0]; //???????????????style

    var style = '';
    var styleList = []; //???????????????????????????line-height?????? ??????????????? style

    var styleStr = ''; //??????????????????

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      var isIE_1 = util_1.UA.isIE(); //??????range ???????????????dom??? ?????????????????????

      var indexStore_1 = [];
      var arrayDom_a = [];
      var arrayDom_b = []; //??????range ???????????????dom

      var StartElem_1 = dom_core_1["default"](editor.selection.getSelectionStartElem());
      var EndElem_1 = dom_core_1["default"](editor.selection.getSelectionEndElem());
      var childList = (_a = editor.selection.getRange()) === null || _a === void 0 ? void 0 : _a.commonAncestorContainer.childNodes;
      arrayDom_a.push(this.getDom(StartElem_1.elems[0]));
      childList === null || childList === void 0 ? void 0 : (0, _forEach["default"])(childList).call(childList, function (item, index) {
        if (item === _this.getDom(StartElem_1.elems[0])) {
          indexStore_1.push(index);
        }

        if (item === _this.getDom(EndElem_1.elems[0])) {
          indexStore_1.push(index);
        }
      }); //?????? ?????????????????????dom??????

      var i = 0;
      var d = void 0;
      arrayDom_b.push(this.getDom(StartElem_1.elems[0]));

      while (arrayDom_a[i] !== this.getDom(EndElem_1.elems[0])) {
        d = dom_core_1["default"](arrayDom_a[i].nextElementSibling).elems[0];

        if ((0, _indexOf["default"])(allowArray).call(allowArray, dom_core_1["default"](d).getNodeName()) !== -1) {
          arrayDom_b.push(d);
          arrayDom_a.push(d);
        } else {
          arrayDom_a.push(d);
        }

        i++;
      } //?????????????????? ??????


      if (dom_core_1["default"](arrayDom_a[0]).getNodeName() !== 'P') {
        i = 0; //???????????????????????????p???????????????

        for (var k = 0; k < arrayDom_a.length; k++) {
          if (dom_core_1["default"](arrayDom_a[k]).getNodeName() === 'P') {
            i = k;
            break;
          }
        } //i===0 ?????????????????????p??????


        if (i === 0) {
          return;
        }

        var _i = 0;

        while (_i !== i) {
          arrayDom_a.shift();
          _i++;
        }
      } //?????????????????????


      this.setRange(arrayDom_a[0], arrayDom_a[arrayDom_a.length - 1]); //??????innerHtml html?????????

      (0, _forEach["default"])(arrayDom_a).call(arrayDom_a, function (item) {
        style = item.getAttribute('style');
        styleList = style ? style.split(';') : [];
        styleStr = _this.styleProcessing(styleList);

        if (dom_core_1["default"](item).getNodeName() === 'P') {
          //???????????? ????????????
          if (value) {
            styleStr += value ? "line-height:" + value + ";" : '';
          }
        }

        if (!isIE_1) {
          st += "<" + dom_core_1["default"](item).getNodeName().toLowerCase() + " style=\"" + styleStr + "\">" + item.innerHTML + "</" + dom_core_1["default"](item).getNodeName().toLowerCase() + ">";
        } else {
          dom_core_1["default"](item).css('line-height', value);
        }
      });

      if (st) {
        this.action(st, editor);
      } //????????????????????????


      dom = $selectionAll.elems[0];
      this.setRange(dom.children[indexStore_1[0]], dom.children[indexStore_1[1]]);
      return;
    } //??????dom ?????????????????? ??????contenteditable?????????div??????


    dom = this.getDom(dom); //????????????lineheight????????????

    if ((0, _indexOf["default"])(allowArray).call(allowArray, dom_core_1["default"](dom).getNodeName()) === -1) {
      return;
    }

    style = dom.getAttribute('style');
    styleList = style ? style.split(';') : []; //?????? dom??????????????????

    selection === null || selection === void 0 ? void 0 : selection.selectAllChildren(dom); //??????range

    editor.selection.saveRange(); //??????????????????value ?????? ??????line-height

    if (!value) {
      if (style) {
        styleStr = this.styleProcessing(styleList); //???????????????????????? ????????? ???style??? ????????????

        if (styleStr === '') {
          st = "<" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">" + dom.innerHTML + "</" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">";
        } else {
          st = "<" + dom_core_1["default"](dom).getNodeName().toLowerCase() + " style=\"" + styleStr + "\">" + dom.innerHTML + "</" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">";
        }

        this.action(st, editor);
      }

      return;
    }

    if (style) {
      //??????style ????????????style??????
      styleStr = this.styleProcessing(styleList) + ("line-height:" + value + ";");
    } else {
      styleStr = "line-height:" + value + ";";
    }

    st = "<" + dom_core_1["default"](dom).getNodeName().toLowerCase() + " style=\"" + styleStr + "\">" + dom.innerHTML + "</" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">"; //??????BLOCKQUOTE?????? or IE?????????P??????????????????

    if (dom_core_1["default"](dom).getNodeName() === 'BLOCKQUOTE' || util_1.UA.isIE()) {
      dom_core_1["default"](dom).css('line-height', value);
    } else {
      this.action(st, editor);
    }
  };
  /**
   * ??????dom ?????????????????? ??????contenteditable?????????div??????
   *
   */


  LineHeight.prototype.getDom = function (dom) {
    var DOM = dom_core_1["default"](dom).elems[0];

    if (!DOM.parentNode) {
      return DOM;
    }

    function getParentNode($node, editor) {
      var $parent = dom_core_1["default"]($node.parentNode);

      if (editor.$textElem.equal($parent)) {
        return $node;
      } else {
        return getParentNode($parent.elems[0], editor);
      }
    }

    DOM = getParentNode(DOM, this.editor);
    return DOM;
  };
  /**
   * ?????? document.execCommand
   *
   */


  LineHeight.prototype.action = function (html_str, editor) {
    editor.cmd["do"]('insertHTML', html_str);
  };
  /**
   * style ??????
   */


  LineHeight.prototype.styleProcessing = function (styleList) {
    var styleStr = '';
    (0, _forEach["default"])(styleList).call(styleList, function (item) {
      item !== '' && (0, _indexOf["default"])(item).call(item, 'line-height') === -1 ? styleStr = styleStr + item + ';' : '';
    });
    return styleStr;
  };
  /**
   * ???????????? ???????????????11??????111
   */


  LineHeight.prototype.setRange = function (startDom, endDom) {
    var editor = this.editor;
    var selection = window.getSelection ? window.getSelection() : document.getSelection(); //?????????????????????

    selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
    var range = document.createRange();
    var star = startDom;
    var end = endDom;
    range.setStart(star, 0);
    range.setEnd(end, 1);
    selection === null || selection === void 0 ? void 0 : selection.addRange(range); //????????????????????????

    editor.selection.saveRange(); //?????????????????????

    selection === null || selection === void 0 ? void 0 : selection.removeAllRanges(); //????????????

    editor.selection.restoreSelection();
  };
  /**
   * ??????????????????????????????
   */


  LineHeight.prototype.tryChangeActive = function () {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionContainerElem();

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      //????????????????????????
      return;
    }

    var dom = dom_core_1["default"](editor.selection.getSelectionStartElem()); // ??????????????? dom ???????????????????????????????????????

    if (dom.length === 0) return;
    dom = this.getDom(dom.elems[0]);
    var style = dom.getAttribute('style') ? dom.getAttribute('style') : ''; //??????????????????????????????line-height??????

    if (style && (0, _indexOf["default"])(style).call(style, 'line-height') !== -1) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return LineHeight;
}(DropListMenu_1["default"]);

exports["default"] = LineHeight;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description ?????? ??????
 * @author lichunlin
 */


var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var lineHeightList = function () {
  function lineHeightList(editor, list) {
    var _this = this;

    this.itemList = [{
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('??????') + "</span>"),
      value: ''
    }];
    (0, _forEach["default"])(list).call(list, function (item) {
      _this.itemList.push({
        $elem: dom_core_1["default"]("<span>" + item + "</span>"),
        value: item
      });
    });
  }

  lineHeightList.prototype.getItemList = function () {
    return this.itemList;
  };

  return lineHeightList;
}();

exports["default"] = lineHeightList;

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var Undo = function (_super) {
  tslib_1.__extends(Undo, _super);

  function Undo(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u64A4\u9500\">\n                <i class=\"w-e-icon-undo\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * ????????????
   */


  Undo.prototype.clickHandler = function () {
    var editor = this.editor;
    editor.history.revoke(); // ???????????? range????????????????????????????????????API????????????????????????range ??????????????????????????????

    var children = editor.$textElem.children();
    if (!(children === null || children === void 0 ? void 0 : children.length)) return;
    var $last = children.last();
    editor.selection.createRangeByElem($last, false, true);
    editor.selection.restoreSelection();
  };
  /**
   * ??????????????????????????????
   */


  Undo.prototype.tryChangeActive = function () {
    // ??????????????????????????????
    if (!this.editor.isCompatibleMode) {
      if (this.editor.history.size[0]) {
        this.active();
      } else {
        this.unActive();
      }
    }
  };

  return Undo;
}(BtnMenu_1["default"]);

exports["default"] = Undo;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var Redo = function (_super) {
  tslib_1.__extends(Redo, _super);

  function Redo(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u6062\u590D\">\n                <i class=\"w-e-icon-redo\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * ????????????
   */


  Redo.prototype.clickHandler = function () {
    var editor = this.editor;
    editor.history.restore(); // ???????????? range????????????????????????????????????API????????????????????????range ??????????????????????????????

    var children = editor.$textElem.children();
    if (!(children === null || children === void 0 ? void 0 : children.length)) return;
    var $last = children.last();
    editor.selection.createRangeByElem($last, false, true);
    editor.selection.restoreSelection();
  };
  /**
   * ??????????????????????????????
   */


  Redo.prototype.tryChangeActive = function () {
    // ??????????????????????????????
    if (!this.editor.isCompatibleMode) {
      if (this.editor.history.size[1]) {
        this.active();
      } else {
        this.unActive();
      }
    }
  };

  return Redo;
}(BtnMenu_1["default"]);

exports["default"] = Redo;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????table
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(36));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(398));

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var index_1 = tslib_1.__importDefault(__webpack_require__(407));

var Table = function (_super) {
  tslib_1.__extends(Table, _super);

  function Table(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="??????"><i class="w-e-icon-table2"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // ????????????

    index_1["default"](editor);
    return _this;
  }
  /**
   * ??????????????????
   */


  Table.prototype.clickHandler = function () {
    this.createPanel();
  };
  /**
   * ?????? panel
   */


  Table.prototype.createPanel = function () {
    var conf = create_panel_conf_1["default"](this.editor);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * ?????????????????? active ??????
   */


  Table.prototype.tryChangeActive = function () {};

  return Table;
}(PanelMenu_1["default"]);

exports["default"] = Table;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description table ?????? panel tab ??????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _isInteger = _interopRequireDefault(__webpack_require__(399));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

__webpack_require__(404);

var create_table_1 = tslib_1.__importDefault(__webpack_require__(406));
/**
 * ????????????????????????????????????
 * @param { number } n ???????????????
 */


function isPositiveInteger(n) {
  //??????????????????
  return n > 0 && (0, _isInteger["default"])(n);
}

function default_1(editor) {
  var createTable = new create_table_1["default"](editor); // panel ??????????????????id

  var colId = util_1.getRandom('w-col-id');
  var rowId = util_1.getRandom('w-row-id');
  var insertBtnId = util_1.getRandom('btn-link');
  var i18nPrefix = 'menus.panelMenus.table.';

  var t = function t(text) {
    return editor.i18next.t(text);
  }; // tabs ?????? -----------------------------------------


  var tabsConf = [{
    title: t(i18nPrefix + "\u63D2\u5165\u8868\u683C"),
    tpl: "<div>\n                    <div class=\"w-e-table\">\n                        <span>" + t('??????') + "</span>\n                        <input id=\"" + rowId + "\"  type=\"text\" class=\"w-e-table-input\" value=\"5\"/></td>\n                        <span>" + t(i18nPrefix + "\u884C") + "</span>\n                        <input id=\"" + colId + "\" type=\"text\" class=\"w-e-table-input\" value=\"5\"/></td>\n                        <span>" + (t(i18nPrefix + "\u5217") + t(i18nPrefix + "\u7684") + t(i18nPrefix + "\u8868\u683C")) + "</span>\n                    </div>\n                    <div class=\"w-e-button-container\">\n                        <button type=\"button\" id=\"" + insertBtnId + "\" class=\"right\">" + t('??????') + "</button>\n                    </div>\n                </div>",
    events: [{
      selector: '#' + insertBtnId,
      type: 'click',
      fn: function fn() {
        var colValue = Number(dom_core_1["default"]('#' + colId).val());
        var rowValue = Number(dom_core_1["default"]('#' + rowId).val()); //??????????????????

        if (isPositiveInteger(rowValue) && isPositiveInteger(colValue)) {
          createTable.createAction(rowValue, colValue);
          return true;
        } else {
          editor.config.customAlert('??????????????????????????????', 'warning');
          return false;
        } // ?????? true ???????????????????????????????????? panel

      },
      bindEnter: true
    }]
  }]; // tabs end
  // ??????????????? -----------------------------------------

  var conf = {
    width: 330,
    height: 0,
    tabs: []
  };
  conf.tabs.push(tabsConf[0]);
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(401);

module.exports = parent;


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(402);
var path = __webpack_require__(11);

module.exports = path.Number.isInteger;


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var isInteger = __webpack_require__(403);

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.es/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(405);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-table {\n  display: flex;\n}\n.w-e-table .w-e-table-input {\n  width: 40px;\n  text-align: center!important;\n  margin: 0 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????tabel
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var const_1 = __webpack_require__(7);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var CreateTable = function () {
  function CreateTable(editor) {
    this.editor = editor;
  }
  /**
   * ????????????
   * @param rowValue ??????
   * @param colValue ??????
   */


  CreateTable.prototype.createAction = function (rowValue, colValue) {
    var editor = this.editor; //?????????????????????????????????table

    var $selectionElem = dom_core_1["default"](editor.selection.getSelectionContainerElem());
    var $ul = dom_core_1["default"]($selectionElem.elems[0]).parentUntilEditor('UL', editor);
    var $ol = dom_core_1["default"]($selectionElem.elems[0]).parentUntilEditor('OL', editor);

    if ($ul || $ol) {
      return;
    }

    var tableDom = this.createTableHtml(rowValue, colValue);
    editor.cmd["do"]('insertHTML', tableDom);
  };
  /**
   * ??????table????????????
   * @param rowValue ??????
   * @param colValue ??????
   */


  CreateTable.prototype.createTableHtml = function (rowValue, colValue) {
    var rowStr = '';
    var colStr = '';

    for (var i = 0; i < rowValue; i++) {
      colStr = '';

      for (var j = 0; j < colValue; j++) {
        if (i === 0) {
          colStr = colStr + '<th></th>';
        } else {
          colStr = colStr + '<td></td>';
        }
      }

      rowStr = rowStr + '<tr>' + colStr + '</tr>';
    }

    var tableDom = "<table border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\"><tbody>" + rowStr + ("</tbody></table>" + const_1.EMPTY_P);
    return tableDom;
  };

  return CreateTable;
}();

exports["default"] = CreateTable;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(408));

var table_event_1 = __webpack_require__(416);
/**
 * ????????????
 * @param editor ???????????????
 */


function bindEvent(editor) {
  //Tooltip
  tooltip_event_1["default"](editor);
  table_event_1.bindEventKeyboardEvent(editor);
  table_event_1.bindClickEvent(editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip ??????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(37)); //????????????


var operating_event_1 = tslib_1.__importDefault(__webpack_require__(409));

var getNode_1 = tslib_1.__importDefault(__webpack_require__(415));

var const_1 = __webpack_require__(7);
/**
 * ?????? Tooltip ?????????????????????
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * ?????? tooltip
   * @param  table??????
   */

  function showTableTooltip($node) {
    var getnode = new getNode_1["default"](editor);
    var i18nPrefix = 'menus.panelMenus.table.';

    var t = function t(text, prefix) {
      if (prefix === void 0) {
        prefix = i18nPrefix;
      }

      return editor.i18next.t(prefix + text);
    };

    var conf = [{
      // $elem: $("<span class='w-e-icon-trash-o'></span>"),
      $elem: dom_core_1["default"]("<span>" + t('????????????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????img??????
        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', const_1.EMPTY_P); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('?????????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //????????????


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //?????????

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //??????????????????index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow)); //??????????????????html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //????????????table

        var newdom = getnode.getTableHtml(operating_event_1["default"].ProcessingRow(dom_core_1["default"](htmlStr), index).elems[0]);
        newdom = _isEmptyP($node, newdom); // ??????table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('?????????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //????????????


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //?????????

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //??????????????????index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow)); //??????????????????html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //??????????????????table ???????????????????????????????????? ??? ????????????table

        var trLength = operating_event_1["default"].DeleteRow(dom_core_1["default"](htmlStr), index).elems[0].children[0].children.length; //????????????table

        var newdom = ''; // ??????table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();

        if (trLength === 0) {
          newdom = const_1.EMPTY_P;
        } else {
          newdom = getnode.getTableHtml(operating_event_1["default"].DeleteRow(dom_core_1["default"](htmlStr), index).elems[0]);
        }

        newdom = _isEmptyP($node, newdom);
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('?????????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //????????????


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //????????????index

        var index = getnode.getCurrentColIndex(selectDom.elems[0]); //??????????????????html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //????????????table

        var newdom = getnode.getTableHtml(operating_event_1["default"].ProcessingCol(dom_core_1["default"](htmlStr), index).elems[0]);
        newdom = _isEmptyP($node, newdom); // ??????table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('?????????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //????????????


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //????????????index

        var index = getnode.getCurrentColIndex(selectDom.elems[0]); //??????????????????html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //??????????????????table ???????????????????????????????????? ??? ????????????table

        var newDom = operating_event_1["default"].DeleteCol(dom_core_1["default"](htmlStr), index); // ????????????????????????

        var tdLength = newDom.elems[0].children[0].children[0].children.length; //????????????table

        var newdom = ''; // ??????table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection(); // ?????????????????? ??????????????????

        if (tdLength === 0) {
          newdom = const_1.EMPTY_P;
        } else {
          newdom = getnode.getTableHtml(newDom.elems[0]);
        }

        newdom = _isEmptyP($node, newdom);
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('????????????') + "</span>"),
      onClick: function onClick(editor, $node) {
        // ??????????????????
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //????????????


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //?????????

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //??????????????????index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow));

        if (index !== 0) {
          //?????????table????????????
          index = 0;
        } //??????????????????html


        var htmlStr = getnode.getTableHtml($node.elems[0]); //????????????table

        var newdom = getnode.getTableHtml(operating_event_1["default"].setTheHeader(dom_core_1["default"](htmlStr), index, 'th').elems[0]);
        newdom = _isEmptyP($node, newdom); // ??????table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('????????????') + "</span>"),
      onClick: function onClick(editor, $node) {
        //????????????
        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //?????????

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //??????????????????index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow));

        if (index !== 0) {
          //?????????table????????????
          index = 0;
        } //??????????????????html


        var htmlStr = getnode.getTableHtml($node.elems[0]); //????????????table

        var newdom = getnode.getTableHtml(operating_event_1["default"].setTheHeader(dom_core_1["default"](htmlStr), index, 'td').elems[0]);
        newdom = _isEmptyP($node, newdom); // ??????table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }];
    tooltip = new Tooltip_1["default"](editor, $node, conf);
    tooltip.create();
  }
  /**
   * ?????? tooltip
   */


  function hideTableTooltip() {
    // ?????? tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showTableTooltip: showTableTooltip,
    hideTableTooltip: hideTableTooltip
  };
}
/**
 * ?????????????????????
 */


function isMoreRowAction(editor) {
  var $startElem = editor.selection.getSelectionStartElem();
  var $endElem = editor.selection.getSelectionEndElem();

  if (($startElem === null || $startElem === void 0 ? void 0 : $startElem.elems[0]) !== ($endElem === null || $endElem === void 0 ? void 0 : $endElem.elems[0])) {
    return true;
  } else {
    return false;
  }
}
/**
 * ?????? tooltip ??????
 * @param editor ???????????????
 */


function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showTableTooltip = _a.showTableTooltip,
      hideTableTooltip = _a.hideTableTooltip; // ??????table?????????????????? tooltip


  editor.txt.eventHooks.tableClickEvents.push(showTableTooltip); // ????????????????????????????????????????????? tooltip

  editor.txt.eventHooks.clickEvents.push(hideTableTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideTableTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideTableTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideTableTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideTableTooltip);
}

exports["default"] = bindTooltipEvent;
/**
 * ?????????????????????????????????????????????
 */

function _isEmptyP($node, newdom) {
  // ??????????????????????????????????????????????????? newdom ????????? EMPTY_P
  var nextNode = $node.elems[0].nextSibling;

  if (!nextNode || nextNode.innerHTML === '<br>') {
    newdom += "" + const_1.EMPTY_P;
  }

  return newdom;
}

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _slice = _interopRequireDefault(__webpack_require__(47));

var _splice = _interopRequireDefault(__webpack_require__(99));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _from = _interopRequireDefault(__webpack_require__(143));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ??????????????????
 * @param $node ??????table
 * @param _index ??????inde
 */


function ProcessingRow($node, _index) {
  //????????????tbody??????
  var $dom = generateDomAction($node); //??????????????????

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children); //????????????

  var childrenLength = domArray[0].children.length; //?????????tr

  var tr = document.createElement('tr');

  for (var i = 0; i < childrenLength; i++) {
    var td = document.createElement('td');
    tr.appendChild(td);
  } //???????????????


  (0, _splice["default"])(domArray).call(domArray, _index + 1, 0, tr); //???????????????????????????

  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * ??????????????????
 * @param $node ??????table
 * @param _index ??????inde
 */


function ProcessingCol($node, _index) {
  //????????????tbody??????
  var $dom = generateDomAction($node); //??????????????????

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children);

  var _loop_1 = function _loop_1(i) {
    var _context;

    var cArray = []; //??????????????????

    (0, _forEach["default"])(_context = (0, _from["default"])(domArray[i].children)).call(_context, function (item) {
      cArray.push(item);
    }); //???????????????????????????

    while (domArray[i].children.length !== 0) {
      domArray[i].removeChild(domArray[i].children[0]);
    } //??????th td


    var td = dom_core_1["default"](cArray[0]).getNodeName() !== 'TH' ? document.createElement('td') : document.createElement('th'); // let td = document.createElement('td')

    (0, _splice["default"])(cArray).call(cArray, _index + 1, 0, td); //?????????????????????

    for (var j = 0; j < cArray.length; j++) {
      domArray[i].appendChild(cArray[j]);
    }
  }; //??????td


  for (var i = 0; i < domArray.length; i++) {
    _loop_1(i);
  } //???????????????????????????


  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * ???????????????
 * @param $node  ??????table
 * @param _index  ??????inde
 */


function DeleteRow($node, _index) {
  //????????????tbody??????
  var $dom = generateDomAction($node); //??????????????????

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children); //?????????

  (0, _splice["default"])(domArray).call(domArray, _index, 1); //???????????????????????????

  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * ???????????????
 * @param $node
 * @param _index
 */


function DeleteCol($node, _index) {
  //????????????tbody??????
  var $dom = generateDomAction($node); //??????????????????

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children);

  var _loop_2 = function _loop_2(i) {
    var _context2;

    var cArray = []; //??????????????????

    (0, _forEach["default"])(_context2 = (0, _from["default"])(domArray[i].children)).call(_context2, function (item) {
      cArray.push(item);
    }); //???????????????????????????

    while (domArray[i].children.length !== 0) {
      domArray[i].removeChild(domArray[i].children[0]);
    }

    (0, _splice["default"])(cArray).call(cArray, _index, 1); //?????????????????????

    for (var j = 0; j < cArray.length; j++) {
      domArray[i].appendChild(cArray[j]);
    }
  }; //??????td


  for (var i = 0; i < domArray.length; i++) {
    _loop_2(i);
  } //???????????????????????????


  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * ????????????/????????????
 * @param $node
 * @param _index
 * @type ??????????????? th??????td
 */


function setTheHeader($node, _index, type) {
  // ????????????tbody??????
  var $dom = generateDomAction($node); // ??????????????????

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children); // ????????????

  var cols = domArray[_index].children; // ?????????tr

  var tr = document.createElement('tr');

  var _loop_3 = function _loop_3(i) {
    var _context3;

    // ??????type(td ?????? th)???????????????el
    var el = document.createElement(type);
    var col = cols[i];
    /**
     * ????????????children??????????????????????????????children????????????????????????????????????????????????xxx<br>?????????children????????????br
     * ????????????childNodes?????????????????????????????????????????????????????????????????????????????????????????????????????????
     */

    (0, _forEach["default"])(_context3 = (0, _from["default"])(col.childNodes)).call(_context3, function (item) {
      el.appendChild(item);
    });
    tr.appendChild(el);
  };

  for (var i = 0; i < cols.length; i++) {
    _loop_3(i);
  } //???????????????


  (0, _splice["default"])(domArray).call(domArray, _index, 1, tr); //???????????????????????????

  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * ?????????????????????????????????
 * @param $dom tbody??????
 * @param domArray  ????????????
 */


function removeAndInsertAction($dom, domArray) {
  //??????????????????????????????
  while ($dom.children.length !== 0) {
    $dom.removeChild($dom.children[0]);
  } //?????????????????????


  for (var i = 0; i < domArray.length; i++) {
    $dom.appendChild(domArray[i]);
  }
}
/**
 * ??????????????????tbody??????
 * ?????????table ??????????????????<colgroup> ???????????????<tbody>
 * @param dom
 */


function generateDomAction($node) {
  var $dom = $node.elems[0].children[0];

  if ($dom.nodeName === 'COLGROUP') {
    $dom = $node.elems[0].children[$node.elems[0].children.length - 1];
  }

  return $dom;
}

exports["default"] = {
  ProcessingRow: ProcessingRow,
  ProcessingCol: ProcessingCol,
  DeleteRow: DeleteRow,
  DeleteCol: DeleteCol,
  setTheHeader: setTheHeader
};

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(411);

module.exports = parent;


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(412);
var path = __webpack_require__(11);

module.exports = path.Array.from;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(5);
var from = __webpack_require__(413);
var checkCorrectnessOfIteration = __webpack_require__(120);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(40);
var toObject = __webpack_require__(26);
var callWithSafeIterationClosing = __webpack_require__(414);
var isArrayIteratorMethod = __webpack_require__(112);
var toLength = __webpack_require__(35);
var createProperty = __webpack_require__(75);
var getIteratorMethod = __webpack_require__(113);

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var iteratorClose = __webpack_require__(114);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????dom??????
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _from = _interopRequireDefault(__webpack_require__(143));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var getNode = function () {
  function getNode(editor) {
    this.editor = editor;
  }
  /**
   * ?????????????????????
   * @param $node ??????table
   */


  getNode.prototype.getRowNode = function ($node) {
    var _a;

    var DOM = dom_core_1["default"]($node).elems[0];

    if (!DOM.parentNode) {
      return DOM;
    }

    DOM = (_a = dom_core_1["default"](DOM).parentUntil('TR', DOM)) === null || _a === void 0 ? void 0 : _a.elems[0];
    return DOM;
  };
  /**
   * ????????????????????????
   * @param $node ??????table
   * @param $dmo ???????????????
   */


  getNode.prototype.getCurrentRowIndex = function ($node, $dom) {
    var _context;

    var _index = 0;
    var $nodeChild = $node.children[0]; //?????????table ????????????????????????tbody

    if ($nodeChild.nodeName === 'COLGROUP') {
      $nodeChild = $node.children[$node.children.length - 1];
    }

    (0, _forEach["default"])(_context = (0, _from["default"])($nodeChild.children)).call(_context, function (item, index) {
      item === $dom ? _index = index : '';
    });
    return _index;
  };
  /**
   * ????????????????????????
   * @param $node ??????????????????
   */


  getNode.prototype.getCurrentColIndex = function ($node) {
    var _context2;

    var _a; //?????????


    var _index = 0; //??????????????? td???th

    var rowDom = dom_core_1["default"]($node).getNodeName() === 'TD' || dom_core_1["default"]($node).getNodeName() === 'TH' ? $node : (_a = dom_core_1["default"]($node).parentUntil('TD', $node)) === null || _a === void 0 ? void 0 : _a.elems[0];
    var colDom = dom_core_1["default"](rowDom).parent();
    (0, _forEach["default"])(_context2 = (0, _from["default"])(colDom.elems[0].children)).call(_context2, function (item, index) {
      item === rowDom ? _index = index : '';
    });
    return _index;
  };
  /**
   * ????????????html?????????
   * @param $node
   */


  getNode.prototype.getTableHtml = function ($node) {
    var htmlStr = "<table border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">" + dom_core_1["default"]($node).html() + "</table>";
    return htmlStr;
  };

  return getNode;
}();

exports["default"] = getNode;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.bindEventKeyboardEvent = exports.bindClickEvent = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * @description ???????????????
 * @param topElem
 */


function isEmptyLine(topElem) {
  if (!topElem.length) {
    return false;
  }

  var dom = topElem.elems[0];
  return dom.nodeName === 'P' && dom.innerHTML === '<br>';
}

function bindClickEvent(editor) {
  function handleTripleClick($dom, e) {
    // ?????????????????????????????????????????????table???????????????
    if (e.detail >= 3) {
      var selection = window.getSelection();

      if (selection) {
        var focusNode = selection.focusNode,
            anchorNode = selection.anchorNode;
        var $anchorNode = dom_core_1["default"](anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.parentElement); // ???focusNode?????????table

        if (!$dom.isContain(dom_core_1["default"](focusNode))) {
          var $td = $anchorNode.elems[0].tagName === 'TD' ? $anchorNode : $anchorNode.parentUntilEditor('td', editor);

          if ($td) {
            var range = editor.selection.getRange();
            range === null || range === void 0 ? void 0 : range.setEnd($td.elems[0], $td.elems[0].childNodes.length);
            editor.selection.restoreSelection();
          }
        }
      }
    }
  }

  editor.txt.eventHooks.tableClickEvents.push(handleTripleClick);
}

exports.bindClickEvent = bindClickEvent;

function bindEventKeyboardEvent(editor) {
  var txt = editor.txt,
      selection = editor.selection;
  var keydownEvents = txt.eventHooks.keydownEvents;
  keydownEvents.push(function (e) {
    // ??????????????????
    editor.selection.saveRange();
    var $selectionContainerElem = selection.getSelectionContainerElem();

    if ($selectionContainerElem) {
      var $topElem = $selectionContainerElem.getNodeTop(editor);
      var $preElem = $topElem.length ? $topElem.prev().length ? $topElem.prev() : null : null; // ???????????????????????????table???????????????????????????????????????????????????

      if ($preElem && $preElem.getNodeName() === 'TABLE' && selection.isSelectionEmpty() && selection.getCursorPos() === 0 && e.keyCode === 8) {
        var $nextElem = $topElem.next();
        var hasNext = !!$nextElem.length;
        /**
         * ???????????????????????????????????????????????????????????????????????????
         * ????????????????????????????????????????????????<br>??????
         * ???????????????????????????????????????
         */

        if (hasNext && isEmptyLine($topElem)) {
          $topElem.remove();
          editor.selection.setRangeToElem($nextElem.elems[0]);
        }

        e.preventDefault();
      }
    }
  });
}

exports.bindEventKeyboardEvent = bindEventKeyboardEvent;

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? ??????
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _map = _interopRequireDefault(__webpack_require__(27));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.formatCodeHtml = void 0;

var tslib_1 = __webpack_require__(2);

var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(36));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);

var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(418));

var is_active_1 = tslib_1.__importDefault(__webpack_require__(144));

var Panel_1 = tslib_1.__importDefault(__webpack_require__(33));

var index_1 = tslib_1.__importDefault(__webpack_require__(419));

function formatCodeHtml(editor, html) {
  if (!html) return html;
  html = deleteHighlightCode(html);
  html = formatEnterCode(html);
  html = util_1.replaceSpecialSymbol(html);
  return html; // ???????????????????????????code??????

  function formatEnterCode(html) {
    var preArr = html.match(/<pre[\s|\S]+?\/pre>/g);
    if (preArr === null) return html;
    (0, _map["default"])(preArr).call(preArr, function (item) {
      //????????????code????????????\n??????
      html = html.replace(item, item.replace(/<\/code><code>/g, '\n').replace(/<br>/g, ''));
    });
    return html;
  } // highlight???????????????


  function deleteHighlightCode(html) {
    var _context;

    // ????????????hljs??????
    var m = html.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm); // ?????????????????????????????????
    // @ts-ignore

    if (!m || !m.length) return html; // ??????????????????

    var r = (0, _map["default"])(_context = util_1.deepClone(m)).call(_context, function (i) {
      i = i.replace(/<span\sclass="hljs[^>]+>/, '');
      return i.replace(/<\/span>/, '');
    }); // @ts-ignore

    for (var i = 0; i < m.length; i++) {
      html = html.replace(m[i], r[i]);
    }

    return deleteHighlightCode(html);
  }
}

exports.formatCodeHtml = formatCodeHtml;

var Code = function (_super) {
  tslib_1.__extends(Code, _super);

  function Code(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="??????"><i class="w-e-icon-terminal"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // ??????????????????????????????????????????????????????

    index_1["default"](editor);
    return _this;
  }
  /**
   * ??????????????????
   * @param text
   * @return null
   */


  Code.prototype.insertLineCode = function (text) {
    var editor = this.editor; // ??????????????????

    var $code = dom_core_1["default"]("<code>" + text + "</code>");
    editor.cmd["do"]('insertElem', $code);
    editor.selection.createRangeByElem($code, false);
    editor.selection.restoreSelection();
  };
  /**
   * ??????????????????
   */


  Code.prototype.clickHandler = function () {
    var editor = this.editor;
    var selectionText = editor.selection.getSelectionText();

    if (this.isActive) {
      return;
    } else {
      // ????????????????????????????????????????????????
      if (editor.selection.isSelectionEmpty()) {
        // ?????????????????????????????????
        this.createPanel('', '');
      } else {
        // ?????????????????? ????????????????????????
        this.insertLineCode(selectionText);
      }
    }
  };
  /**
   * ?????? panel
   * @param text ????????????
   * @param languageType ????????????
   */


  Code.prototype.createPanel = function (text, languageType) {
    var conf = create_panel_conf_1["default"](this.editor, text, languageType);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * ?????????????????? active ??????
   */


  Code.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (is_active_1["default"](editor)) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Code;
}(PanelMenu_1["default"]);

exports["default"] = Code;

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description code ?????? panel tab ??????
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _map = _interopRequireDefault(__webpack_require__(27));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var util_1 = __webpack_require__(6);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var is_active_1 = tslib_1.__importDefault(__webpack_require__(144));

var const_1 = __webpack_require__(7);

function default_1(editor, text, languageType) {
  var _context;

  // panel ??????????????????id
  var inputIFrameId = util_1.getRandom('input-iframe');
  var languageId = util_1.getRandom('select');
  var btnOkId = util_1.getRandom('btn-ok');
  /**
   * ???????????????
   * @param text ??????
   */

  function insertCode(text) {
    var _a; // ????????????????????????????????????????????????????????? insertHTML


    var active = is_active_1["default"](editor);

    if (active) {
      selectCodeElem();
    }

    var content = (_a = editor.selection.getSelectionStartElem()) === null || _a === void 0 ? void 0 : _a.elems[0].innerHTML;

    if (content) {
      editor.cmd["do"]('insertHTML', const_1.EMPTY_P);
    }

    editor.cmd["do"]('insertHTML', text);
    var $code = editor.selection.getSelectionStartElem();
    var $codeElem = $code === null || $code === void 0 ? void 0 : $code.getNodeTop(editor); // ??????dom????????????????????????

    if (($codeElem === null || $codeElem === void 0 ? void 0 : $codeElem.getNextSibling().elems.length) === 0) {
      // @ts-ignore
      dom_core_1["default"](const_1.EMPTY_P).insertAfter($codeElem);
    }
  }
  /**
   * ????????????????????????
   */


  function selectCodeElem() {
    if (!is_active_1["default"](editor)) return; // eslint-disable-next-line @typescript-eslint/no-unused-vars

    var $selectedCode;
    var $code = editor.selection.getSelectionStartElem();
    var $codeElem = $code === null || $code === void 0 ? void 0 : $code.getNodeTop(editor);
    if (!$codeElem) return;
    editor.selection.createRangeByElem($codeElem);
    editor.selection.restoreSelection();
    $selectedCode = $codeElem; // ??????????????????????????????
  }

  var t = function t(text) {
    return editor.i18next.t(text);
  }; // @ts-ignore


  var conf = {
    width: 500,
    height: 0,
    // panel ?????????????????? tab
    tabs: [{
      // tab ?????????
      title: t('menus.panelMenus.code.????????????'),
      // ??????
      tpl: "<div>\n                        <select name=\"\" id=\"" + languageId + "\">\n                            " + (0, _map["default"])(_context = editor.config.languageType).call(_context, function (language) {
        return '<option ' + (languageType == language ? 'selected' : '') + ' value ="' + language + '">' + language + '</option>';
      }) + "\n                        </select>\n                        <textarea id=\"" + inputIFrameId + "\" type=\"text\" class=\"wang-code-textarea\" placeholder=\"\" style=\"height: 160px\">" + text.replace(/&quot;/g, '"') + "</textarea>\n                        <div class=\"w-e-button-container\">\n                            <button type=\"button\" id=\"" + btnOkId + "\" class=\"right\">" + (is_active_1["default"](editor) ? t('??????') : t('??????')) + "</button>\n                        </div>\n                    </div>",
      // ????????????
      events: [// ????????????
      {
        selector: '#' + btnOkId,
        type: 'click',
        fn: function fn() {
          var formatCode, codeDom;
          var $code = document.getElementById(inputIFrameId);
          var $select = dom_core_1["default"]('#' + languageId);
          var languageType = $select.val(); // @ts-ignore

          var code = $code.value; // ????????????

          if (editor.highlight) {
            formatCode = editor.highlight.highlightAuto(code).value;
          } else {
            formatCode = "<xmp>" + code + "</xmp>";
          } // ???????????????????????????


          if (!code) return; //????????????

          if (is_active_1["default"](editor)) {
            return false;
          } else {
            //??????pre??????
            codeDom = "<pre><code class=\"" + languageType + "\">" + formatCode + "</code></pre>"; // @ts-ignore

            insertCode(codeDom);
          } // ?????? true????????????????????????????????????panel ?????????????????? panel ????????????


          return true;
        }
      }]
    } // tab end
    ] // tabs end

  };
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????????????????????????????
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(420));

var jump_code_block_down_1 = tslib_1.__importDefault(__webpack_require__(421));
/**
 * ????????????
 * @param editor ???????????????
 */


function bindEvent(editor) {
  // tooltip ??????
  tooltip_event_1["default"](editor); // ???????????????????????????????????????

  jump_code_block_down_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip ??????
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.createShowHideFn = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(37));
/**
 * ?????? Tooltip ?????????????????????
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * ?????? tooltip
   * @param $code ????????????
   */

  function showCodeTooltip($code) {
    var i18nPrefix = 'menus.panelMenus.code.';

    var t = function t(text, prefix) {
      if (prefix === void 0) {
        prefix = i18nPrefix;
      }

      return editor.i18next.t(prefix + text);
    };

    var conf = [{
      $elem: dom_core_1["default"]("<span>" + t('????????????') + "</span>"),
      onClick: function onClick(editor, $code) {
        //dom????????????
        $code.remove(); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }]; // ?????? tooltip

    tooltip = new Tooltip_1["default"](editor, $code, conf);
    tooltip.create();
  }
  /**
   * ?????? tooltip
   */


  function hideCodeTooltip() {
    // ?????? tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showCodeTooltip: showCodeTooltip,
    hideCodeTooltip: hideCodeTooltip
  };
}

exports.createShowHideFn = createShowHideFn;
/**
 * preEnterListener???????????????????????? ???pre????????????enter????????????????????????
 * ?????????????????????, ????????????????????????Firefox???ie??????????????????????????? ????????????
 * pre????????????????????????
 * @param e
 * @param editor
 */

/* istanbul ignore next */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

function preEnterListener(e, editor) {
  // ????????????????????????
  var $selectionElem = editor.selection.getSelectionContainerElem(); // ???????????????????????????????????????

  var $topElem = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeTop(editor); // ???????????????????????????

  var topNodeName = $topElem === null || $topElem === void 0 ? void 0 : $topElem.getNodeName(); // ???pre????????????

  if (topNodeName !== 'PRE') return; // ??????????????????

  e.preventDefault(); // ????????????

  editor.cmd["do"]('insertHTML', '\n\r');
}
/**
 * ?????? tooltip ??????
 * @param editor ???????????????
 */


function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showCodeTooltip = _a.showCodeTooltip,
      hideCodeTooltip = _a.hideCodeTooltip; // ?????????????????????????????? tooltip


  editor.txt.eventHooks.codeClickEvents.push(showCodeTooltip); // ????????????????????????????????????????????? tooltip

  editor.txt.eventHooks.clickEvents.push(hideCodeTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideCodeTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideCodeTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideCodeTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description ??????????????????????????????????????????????????????
 * @author zhengwenjian
 */


var const_1 = __webpack_require__(7);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
/**
 * ???????????????????????? ???????????????????????????????????????
 * @param editor ???????????????
 */


function bindEventJumpCodeBlock(editor) {
  var $textElem = editor.$textElem,
      selection = editor.selection,
      txt = editor.txt;
  var keydownEvents = txt.eventHooks.keydownEvents;
  keydownEvents.push(function (e) {
    var _a; // 40 ???????????????????????????


    if (e.keyCode !== 40) return;
    var node = selection.getSelectionContainerElem();
    var $lastNode = (_a = $textElem.children()) === null || _a === void 0 ? void 0 : _a.last();

    if ((node === null || node === void 0 ? void 0 : node.elems[0].tagName) === 'XMP' && ($lastNode === null || $lastNode === void 0 ? void 0 : $lastNode.elems[0].tagName) === 'PRE') {
      // ????????????????????????????????????????????????p?????????????????????p
      var $emptyP = dom_core_1["default"](const_1.EMPTY_P);
      $textElem.append($emptyP);
    }
  }); // fix: ?????????????????????????????????????????????????????????????????????????????????

  keydownEvents.push(function (e) {
    // ??????????????????
    editor.selection.saveRange();
    var $selectionContainerElem = selection.getSelectionContainerElem();

    if ($selectionContainerElem) {
      var $topElem = $selectionContainerElem.getNodeTop(editor); // ???????????????????????????????????????

      var $preElem = $topElem === null || $topElem === void 0 ? void 0 : $topElem.prev(); // ??????????????????????????????????????????
      // ???????????????????????????

      var $nextElem = $topElem === null || $topElem === void 0 ? void 0 : $topElem.getNextSibling();

      if ($preElem.length && ($preElem === null || $preElem === void 0 ? void 0 : $preElem.getNodeName()) === 'PRE' && $nextElem.length === 0) {
        // ????????????????????????
        if (selection.getCursorPos() === 0) {
          // ??????delete????????????????????????
          if (e.keyCode === 8) {
            var $emptyP = dom_core_1["default"](const_1.EMPTY_P);
            $textElem.append($emptyP);
          }
        }
      }
    }
  });
}

exports["default"] = bindEventJumpCodeBlock;

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description ?????????
 * @author wangqiaoling
 */


var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var index_1 = tslib_1.__importDefault(__webpack_require__(423));

var util_1 = __webpack_require__(6);

var const_1 = __webpack_require__(7);

var splitLine = function (_super) {
  tslib_1.__extends(splitLine, _super);

  function splitLine(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="?????????"><i class="w-e-icon-split-line"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // ????????????

    index_1["default"](editor);
    return _this;
  }
  /**
   * ??????????????????
   */


  splitLine.prototype.clickHandler = function () {
    var editor = this.editor;
    var range = editor.selection.getRange();
    var $selectionElem = editor.selection.getSelectionContainerElem();
    if (!($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.length)) return;
    var $DomElement = dom_core_1["default"]($selectionElem.elems[0]);
    var $tableDOM = $DomElement.parentUntil('TABLE', $selectionElem.elems[0]);
    var $imgDOM = $DomElement.children(); // ????????????????????????????????????

    if ($DomElement.getNodeName() === 'CODE') return; // ?????????????????????????????????

    if ($tableDOM && dom_core_1["default"]($tableDOM.elems[0]).getNodeName() === 'TABLE') return; // ?????????????????????????????????

    if ($imgDOM && $imgDOM.length !== 0 && dom_core_1["default"]($imgDOM.elems[0]).getNodeName() === 'IMG' && !(range === null || range === void 0 ? void 0 : range.collapsed) // ??????????????? img ???????????????
    ) {
      return;
    }

    this.createSplitLine();
  };
  /**
   * ?????? splitLine
   */


  splitLine.prototype.createSplitLine = function () {
    // ???????????????????????????????????????????????????
    var splitLineDOM = "<hr/>" + const_1.EMPTY_P; // ????????????????????????br????????????

    if (util_1.UA.isFirefox) {
      splitLineDOM = '<hr/><p></p>';
    }

    this.editor.cmd["do"]('insertHTML', splitLineDOM);
  };
  /**
   * ??????????????????????????????
   */


  splitLine.prototype.tryChangeActive = function () {};

  return splitLine;
}(BtnMenu_1["default"]);

exports["default"] = splitLine;

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(424));
/**
 * ????????????
 * @param editor ???????????????
 */


function bindEvent(editor) {
  // ???????????? tooltip ??????
  tooltip_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);
/**
 * @description tooltip ??????
 * @author wangqiaoling
 */


var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(37));
/**
 * ?????? Tooltip ?????????????????????
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * ?????????????????? tooltip
   * @param $splitLine ???????????????
   */

  function showSplitLineTooltip($splitLine) {
    // ?????? splitLine tooltip ??????
    var conf = [{
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('menus.panelMenus.??????') + "</span>"),
      onClick: function onClick(editor, $splitLine) {
        // ?????? ????????? ??????
        editor.selection.createRangeByElem($splitLine);
        editor.selection.restoreSelection();
        editor.cmd["do"]('delete'); // ?????? true????????????????????????????????? tooltip?????????????????????

        return true;
      }
    }]; // ????????? tooltip

    tooltip = new Tooltip_1["default"](editor, $splitLine, conf); // ?????? tooltip

    tooltip.create();
  }
  /**
   * ?????????????????? tooltip
   */


  function hideSplitLineTooltip() {
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showSplitLineTooltip: showSplitLineTooltip,
    hideSplitLineTooltip: hideSplitLineTooltip
  };
}

function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showSplitLineTooltip = _a.showSplitLineTooltip,
      hideSplitLineTooltip = _a.hideSplitLineTooltip; // ??????????????????????????? tooltip


  editor.txt.eventHooks.splitLineEvents.push(showSplitLineTooltip); // ??????????????????????????????????????????keyup??????????????? tooltip

  editor.txt.eventHooks.clickEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideSplitLineTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));

var util_1 = __webpack_require__(105);

var bind_event_1 = tslib_1.__importDefault(__webpack_require__(431));

var todo_1 = tslib_1.__importDefault(__webpack_require__(145));

var Todo = function (_super) {
  tslib_1.__extends(Todo, _super);

  function Todo(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u5F85\u529E\u4E8B\u9879\">\n                    <i class=\"w-e-icon-checkbox-checked\"></i>\n                </div>");
    _this = _super.call(this, $elem, editor) || this;
    bind_event_1["default"](editor);
    return _this;
  }
  /**
   * ????????????
   */


  Todo.prototype.clickHandler = function () {
    var editor = this.editor;

    if (!util_1.isAllTodo(editor)) {
      // ??????todolist
      this.setTodo();
    } else {
      // ????????????todolist
      this.cancelTodo();
      this.tryChangeActive();
    }
  };

  Todo.prototype.tryChangeActive = function () {
    if (util_1.isAllTodo(this.editor)) {
      this.active();
    } else {
      this.unActive();
    }
  };
  /**
   * ??????todo
   */


  Todo.prototype.setTodo = function () {
    var editor = this.editor;
    var topNodeElem = editor.selection.getSelectionRangeTopNodes();
    (0, _forEach["default"])(topNodeElem).call(topNodeElem, function ($node) {
      var _a;

      var nodeName = $node === null || $node === void 0 ? void 0 : $node.getNodeName();

      if (nodeName === 'P') {
        var todo = todo_1["default"]($node);
        var todoNode = todo.getTodo();
        var child = (_a = todoNode.children()) === null || _a === void 0 ? void 0 : _a.getNode();
        todoNode.insertAfter($node);
        editor.selection.moveCursor(child);
        $node.remove();
      }
    });
    this.tryChangeActive();
  };
  /**
   * ????????????todo
   */


  Todo.prototype.cancelTodo = function () {
    var editor = this.editor;
    var $topNodeElems = editor.selection.getSelectionRangeTopNodes();
    (0, _forEach["default"])($topNodeElems).call($topNodeElems, function ($topNodeElem) {
      var _a, _b, _c;

      var content = (_b = (_a = $topNodeElem.childNodes()) === null || _a === void 0 ? void 0 : _a.childNodes()) === null || _b === void 0 ? void 0 : _b.clone(true);
      var $p = dom_core_1["default"]("<p></p>");
      $p.append(content);
      $p.insertAfter($topNodeElem); // ??????input

      (_c = $p.childNodes()) === null || _c === void 0 ? void 0 : _c.get(0).remove();
      editor.selection.moveCursor($p.getNode());
      $topNodeElem.remove();
    });
  };

  return Todo;
}(BtnMenu_1["default"]);

exports["default"] = Todo;

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(427);

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(428);

module.exports = parent;


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

var every = __webpack_require__(429);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.every;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.every) ? every : own;
};


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(430);
var entryVirtual = __webpack_require__(14);

module.exports = entryVirtual('Array').every;


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(5);
var $every = __webpack_require__(31).every;
var arrayMethodIsStrict = __webpack_require__(73);

var STRICT_METHOD = arrayMethodIsStrict('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(105);

var todo_1 = tslib_1.__importDefault(__webpack_require__(145));

var util_2 = __webpack_require__(105);

var const_1 = __webpack_require__(7);
/**
 * todolist ????????????
 * @param editor
 */


function bindEvent(editor) {
  /**
   * todo????????????????????????
   * @param e ????????????
   */
  function todoEnter(e) {
    var _a, _b; // ???????????????todo??????


    if (util_1.isAllTodo(editor)) {
      e.preventDefault();
      var selection = editor.selection;
      var $topSelectElem = selection.getSelectionRangeTopNodes()[0];
      var $li = (_a = $topSelectElem.childNodes()) === null || _a === void 0 ? void 0 : _a.get(0);
      var selectionNode = (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.anchorNode;
      var range = selection.getRange();

      if (!(range === null || range === void 0 ? void 0 : range.collapsed)) {
        var rangeChildNodes = range === null || range === void 0 ? void 0 : range.commonAncestorContainer.childNodes;
        var startContainer_1 = range === null || range === void 0 ? void 0 : range.startContainer;
        var endContainer_1 = range === null || range === void 0 ? void 0 : range.endContainer;
        var startPos = range === null || range === void 0 ? void 0 : range.startOffset;
        var endPos = range === null || range === void 0 ? void 0 : range.endOffset;
        var startElemIndex_1 = 0;
        var endElemIndex_1 = 0;
        var delList_1 = []; // ??????startContainer???endContainer???rangeChildNodes????????????

        rangeChildNodes === null || rangeChildNodes === void 0 ? void 0 : (0, _forEach["default"])(rangeChildNodes).call(rangeChildNodes, function (v, i) {
          if (v.contains(startContainer_1)) startElemIndex_1 = i;
          if (v.contains(endContainer_1)) endElemIndex_1 = i;
        }); // ??????????????????????????????

        if (endElemIndex_1 - startElemIndex_1 > 1) {
          rangeChildNodes === null || rangeChildNodes === void 0 ? void 0 : (0, _forEach["default"])(rangeChildNodes).call(rangeChildNodes, function (v, i) {
            if (i <= startElemIndex_1) return;
            if (i >= endElemIndex_1) return;
            delList_1.push(v);
          });
          (0, _forEach["default"])(delList_1).call(delList_1, function (v) {
            v.remove();
          });
        } // ????????????????????????????????????


        util_2.dealTextNode(startContainer_1, startPos);
        util_2.dealTextNode(endContainer_1, endPos, false);
        editor.selection.moveCursor(endContainer_1, 0);
      } // ???????????????????????????????????????


      if ($topSelectElem.text() === '') {
        var $p = dom_core_1["default"](const_1.EMPTY_P);
        $p.insertAfter($topSelectElem);
        selection.moveCursor($p.getNode());
        $topSelectElem.remove();
        return;
      }

      var pos = selection.getCursorPos();
      var CursorNextNode = util_1.getCursorNextNode($li === null || $li === void 0 ? void 0 : $li.getNode(), selectionNode, pos);
      var todo = todo_1["default"](dom_core_1["default"](CursorNextNode));
      var $inputcontainer = todo.getInputContainer();
      var todoLiElem = $inputcontainer.parent().getNode();
      var $newTodo = todo.getTodo();
      var contentSection = $inputcontainer.getNode().nextSibling; // ?????????????????????????????????input??????????????????

      if (($li === null || $li === void 0 ? void 0 : $li.text()) === '') {
        $li === null || $li === void 0 ? void 0 : $li.append(dom_core_1["default"]("<br>"));
      }

      $newTodo.insertAfter($topSelectElem); // ?????????google???????????????????????????input??????????????????(??????????????????????????????)

      if (!contentSection || (contentSection === null || contentSection === void 0 ? void 0 : contentSection.textContent) === '') {
        // ????????????br???????????????
        if ((contentSection === null || contentSection === void 0 ? void 0 : contentSection.nodeName) !== 'BR') {
          var $br = dom_core_1["default"]("<br>");
          $br.insertAfter($inputcontainer);
        }

        selection.moveCursor(todoLiElem, 1);
      } else {
        selection.moveCursor(todoLiElem);
      }
    }
  }
  /**
   * ????????????????????????????????????????????????????????????input???????????????
   */


  function delDown(e) {
    var _a, _b;

    if (util_1.isAllTodo(editor)) {
      var selection = editor.selection;
      var $topSelectElem = selection.getSelectionRangeTopNodes()[0];
      var $li = (_a = $topSelectElem.childNodes()) === null || _a === void 0 ? void 0 : _a.getNode();
      var $p = dom_core_1["default"]("<p></p>");
      var p_1 = $p.getNode();
      var selectionNode = (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.anchorNode;
      var pos = selection.getCursorPos();
      var prevNode = selectionNode.previousSibling; // ???????????????????????????

      if ($topSelectElem.text() === '') {
        e.preventDefault();
        var $newP = dom_core_1["default"](const_1.EMPTY_P);
        $newP.insertAfter($topSelectElem);
        $topSelectElem.remove();
        selection.moveCursor($newP.getNode(), 0);
        return;
      } // ????????????????????????????????????????????????


      if ((prevNode === null || prevNode === void 0 ? void 0 : prevNode.nodeName) === 'SPAN' && prevNode.childNodes[0].nodeName === 'INPUT' && pos === 0) {
        var _context;

        e.preventDefault();
        $li === null || $li === void 0 ? void 0 : (0, _forEach["default"])(_context = $li.childNodes).call(_context, function (v, index) {
          if (index === 0) return;
          p_1.appendChild(v.cloneNode(true));
        });
        $p.insertAfter($topSelectElem);
        $topSelectElem.remove();
      }
    }
  }
  /**
   * ??????????????????up??????
   */


  function deleteUp() {
    var selection = editor.selection;
    var $topSelectElem = selection.getSelectionRangeTopNodes()[0];

    if ($topSelectElem && util_2.isTodo($topSelectElem)) {
      if ($topSelectElem.text() === '') {
        dom_core_1["default"](const_1.EMPTY_P).insertAfter($topSelectElem);
        $topSelectElem.remove();
      }
    }
  }
  /**
   * input ?????????????????? input ?????????????????? attribute ????????? ???
   * @param e ????????????
   */


  function inputClick(e) {
    if (e && e.target instanceof HTMLInputElement) {
      if (e.target.type === 'checkbox') {
        if (e.target.checked) {
          e.target.setAttribute('checked', 'true');
        } else {
          e.target.removeAttribute('checked');
        }
      }
    }
  }

  editor.txt.eventHooks.enterDownEvents.push(todoEnter);
  editor.txt.eventHooks.deleteUpEvents.push(deleteUp);
  editor.txt.eventHooks.deleteDownEvents.push(delDown);
  editor.txt.eventHooks.clickEvents.push(inputClick);
}

exports["default"] = bindEvent;

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????? DOM ??????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.selectorValidator = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);

var const_1 = __webpack_require__(7);

var text_1 = tslib_1.__importDefault(__webpack_require__(134));

var styleSettings = {
  border: '1px solid #c9d8db',
  toolbarBgColor: '#FFF',
  toolbarBottomBorder: '1px solid #EEE'
};

function default_1(editor) {
  var toolbarSelector = editor.toolbarSelector;
  var $toolbarSelector = dom_core_1["default"](toolbarSelector);
  var textSelector = editor.textSelector;
  var config = editor.config;
  var height = config.height;
  var i18next = editor.i18next;
  var $toolbarElem = dom_core_1["default"]('<div></div>');
  var $textContainerElem = dom_core_1["default"]('<div></div>');
  var $textElem;
  var $children;
  var $subChildren = null;

  if (textSelector == null) {
    // ????????????????????????????????????????????????
    $children = $toolbarSelector.children(); // ????????? DOM ?????????

    $toolbarSelector.append($toolbarElem).append($textContainerElem); // ?????????????????????????????????????????????

    $toolbarElem.css('background-color', styleSettings.toolbarBgColor).css('border', styleSettings.border).css('border-bottom', styleSettings.toolbarBottomBorder);
    $textContainerElem.css('border', styleSettings.border).css('border-top', 'none').css('height', height + "px");
  } else {
    // toolbarSelector ??? textSelector ??????
    $toolbarSelector.append($toolbarElem); // ??????????????????????????????????????????

    $subChildren = dom_core_1["default"](textSelector).children();
    dom_core_1["default"](textSelector).append($textContainerElem); // ????????????????????????????????????????????????

    $children = $textContainerElem.children();
  } // ????????????


  $textElem = dom_core_1["default"]('<div></div>');
  $textElem.attr('contenteditable', 'true').css('width', '100%').css('height', '100%'); // ?????? placeholder

  var $placeholder;
  var placeholder = editor.config.placeholder;

  if (placeholder !== text_1["default"].placeholder) {
    $placeholder = dom_core_1["default"]("<div>" + placeholder + "</div>");
  } else {
    $placeholder = dom_core_1["default"]("<div>" + i18next.t(placeholder) + "</div>");
  }

  $placeholder.addClass('placeholder'); // ???????????????????????????

  if ($children && $children.length) {
    $textElem.append($children); // ????????????????????????????????????placeholder

    $placeholder.hide();
  } else {
    $textElem.append(dom_core_1["default"](const_1.EMPTY_P)); // ?????????????????????????????????
  } // ????????????????????????????????????????????????????????????


  if ($subChildren && $subChildren.length) {
    $textElem.append($subChildren); // ????????????????????????????????????placeholder

    $placeholder.hide();
  } // ??????????????????DOM


  $textContainerElem.append($textElem); // ??????placeholder

  $textContainerElem.append($placeholder); // ??????????????? class

  $toolbarElem.addClass('w-e-toolbar').css('z-index', editor.zIndex.get('toolbar'));
  $textContainerElem.addClass('w-e-text-container');
  $textContainerElem.css('z-index', editor.zIndex.get());
  $textElem.addClass('w-e-text'); // ?????? ID

  var toolbarElemId = util_1.getRandom('toolbar-elem');
  $toolbarElem.attr('id', toolbarElemId);
  var textElemId = util_1.getRandom('text-elem');
  $textElem.attr('id', textElemId); // ??????????????????????????????????????????

  var textContainerCliheight = $textContainerElem.getBoundingClientRect().height;
  var textElemClientHeight = $textElem.getBoundingClientRect().height;

  if (textContainerCliheight !== textElemClientHeight) {
    $textElem.css('min-height', textContainerCliheight + 'px');
  } // ????????????


  editor.$toolbarElem = $toolbarElem;
  editor.$textContainerElem = $textContainerElem;
  editor.$textElem = $textElem;
  editor.toolbarElemId = toolbarElemId;
  editor.textElemId = textElemId;
}

exports["default"] = default_1;
/**
 * ?????????/???????????? DOM selector ???????????????
 * @param editor ???????????????
 */

function selectorValidator(editor) {
  var name = 'data-we-id';
  var regexp = /^wangEditor-\d+$/;
  var textSelector = editor.textSelector,
      toolbarSelector = editor.toolbarSelector;
  var $el = {
    bar: dom_core_1["default"]('<div></div>'),
    text: dom_core_1["default"]('<div></div>')
  };

  if (toolbarSelector == null) {
    throw new Error('????????????????????????????????????????????????????????????????????????');
  } else {
    $el.bar = dom_core_1["default"](toolbarSelector);

    if (!$el.bar.elems.length) {
      throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + toolbarSelector);
    }

    if (regexp.test($el.bar.attr(name))) {
      throw new Error('?????????????????????????????????????????????????????????????????????');
    }
  }

  if (textSelector) {
    $el.text = dom_core_1["default"](textSelector);

    if (!$el.text.elems.length) {
      throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + textSelector);
    }

    if (regexp.test($el.text.attr(name))) {
      throw new Error('?????????????????????????????????????????????????????????????????????');
    }
  } // ?????????????????????


  $el.bar.attr(name, editor.id);
  $el.text.attr(name, editor.id); // ?????????????????????????????????

  editor.beforeDestroy(function () {
    $el.bar.removeAttr(name);
    $el.text.removeAttr(name);
  });
}

exports.selectorValidator = selectorValidator;

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????????????????????????????????????????
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var const_1 = __webpack_require__(7);
/**
 * ?????????????????????????????????????????????????????????
 * @param editor ???????????????
 * @param newLine ??????????????????
 */


function initSelection(editor, newLine) {
  var $textElem = editor.$textElem;
  var $children = $textElem.children();

  if (!$children || !$children.length) {
    // ????????????????????????????????????????????????????????????????????????
    $textElem.append(dom_core_1["default"](const_1.EMPTY_P));
    initSelection(editor);
    return;
  }

  var $last = $children.last();

  if (newLine) {
    // ??????????????????
    var html = $last.html().toLowerCase();
    var nodeName = $last.getNodeName();

    if (html !== '<br>' && html !== '<br/>' || nodeName !== 'P') {
      // ???????????????????????? ???????????????????????????????????????????????????
      $textElem.append(dom_core_1["default"](const_1.EMPTY_P));
      initSelection(editor);
      return;
    }
  }

  editor.selection.createRangeByElem($last, false, true);

  if (editor.config.focus) {
    editor.selection.restoreSelection();
  } else {
    // ??????focus=false?????????????????????
    editor.selection.clearWindowSelectionRange();
  }
}

exports["default"] = initSelection;

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????????????? change blur focus
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

function bindEvent(editor) {
  // ?????? change ??????
  _bindChange(editor); // ?????? focus blur ??????


  _bindFocusAndBlur(editor); // ?????? input ??????


  _bindInput(editor);
}
/**
 * ?????? change ??????
 * @param editor ???????????????
 */


function _bindChange(editor) {
  editor.txt.eventHooks.changeEvents.push(function () {
    var onchange = editor.config.onchange;

    if (onchange) {
      var html = editor.txt.html() || ''; // onchange???????????????focus???????????????https://github.com/wangeditor-team/wangEditor/issues/3034

      editor.isFocus = true;
      onchange(html);
    }

    editor.txt.togglePlaceholder();
  });
}
/**
 * ?????? focus blur ??????
 * @param editor ???????????????
 */


function _bindFocusAndBlur(editor) {
  // ????????????????????????????????????
  editor.isFocus = false;

  function listener(e) {
    var target = e.target;
    var $target = dom_core_1["default"](target);
    var $textElem = editor.$textElem;
    var $toolbarElem = editor.$toolbarElem; //?????????????????????????????????????????????

    var isChild = $textElem.isContain($target); //??????????????????????????????????????????

    var isToolbar = $toolbarElem.isContain($target);
    var isMenu = $toolbarElem.elems[0] == e.target ? true : false;

    if (!isChild) {
      // ??????????????????????????????????????????????????? blur ??????
      if (isToolbar && !isMenu || !editor.isFocus) {
        return;
      }

      _blurHandler(editor);

      editor.isFocus = false;
    } else {
      if (!editor.isFocus) {
        _focusHandler(editor);
      }

      editor.isFocus = true;
    }
  } // fix: ??????????????????????????????????????????isFocus=false?????????????????????????????????????????????????????????blur???????????????


  if (document.activeElement === editor.$textElem.elems[0] && editor.config.focus) {
    _focusHandler(editor);

    editor.isFocus = true;
  } // ??????????????????


  dom_core_1["default"](document).on('click', listener); // ?????????????????????????????????????????????????????????

  editor.beforeDestroy(function () {
    dom_core_1["default"](document).off('click', listener);
  });
}
/**
 * ?????? input ??????
 * @param editor ???????????????
 */


function _bindInput(editor) {
  // ??????????????????
  editor.$textElem.on('compositionstart', function () {
    editor.isComposing = true;
    editor.txt.togglePlaceholder();
  }).on('compositionend', function () {
    editor.isComposing = false;
    editor.txt.togglePlaceholder();
  });
}
/**
 * blur ??????
 * @param editor ???????????????
 */


function _blurHandler(editor) {
  var _context;

  var config = editor.config;
  var onblur = config.onblur;
  var currentHtml = editor.txt.html() || '';
  (0, _forEach["default"])(_context = editor.txt.eventHooks.onBlurEvents).call(_context, function (fn) {
    return fn();
  });
  onblur(currentHtml);
}
/**
 * focus ??????
 * @param editor ???????????????
 */


function _focusHandler(editor) {
  var config = editor.config;
  var onfocus = config.onfocus;
  var currentHtml = editor.txt.html() || '';
  onfocus(currentHtml);
}

exports["default"] = bindEvent;

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????? ?????????
 * @author tonghan
 * i18next ????????? JavaScript ????????????????????????
 * i18next ??????????????????i18n????????????????????????????????????????????????????????????
 * i18next ??????????????? https://www.i18next.com/overview/getting-started
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function i18nextInit(editor) {
  var _a = editor.config,
      lang = _a.lang,
      languages = _a.languages;

  if (editor.i18next != null) {
    try {
      editor.i18next.init({
        ns: 'wangEditor',
        lng: lang,
        defaultNS: 'wangEditor',
        resources: languages
      });
    } catch (error) {
      throw new Error('i18next:' + error);
    }

    return;
  } // ???????????? i18next ????????????


  editor.i18next = {
    t: function t(str) {
      var strArr = str.split('.');
      return strArr[strArr.length - 1];
    }
  };
}

exports["default"] = i18nextInit;

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author xiaokyo
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _find = _interopRequireDefault(__webpack_require__(32));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.setUnFullScreen = exports.setFullScreen = void 0;

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

__webpack_require__(437);

var iconFullScreenText = 'w-e-icon-fullscreen'; // ??????icon class

var iconExitFullScreenText = 'w-e-icon-fullscreen_exit'; // ????????????icon class

var classfullScreenEditor = 'w-e-full-screen-editor'; // ???????????????????????????class

/**
 * ????????????
 * @param editor ???????????????
 */

var setFullScreen = function setFullScreen(editor) {
  var $editorParent = dom_core_1["default"](editor.toolbarSelector);
  var $textContainerElem = editor.$textContainerElem;
  var $toolbarElem = editor.$toolbarElem;
  var $iconElem = (0, _find["default"])($toolbarElem).call($toolbarElem, "i." + iconFullScreenText);
  var config = editor.config;
  $iconElem.removeClass(iconFullScreenText);
  $iconElem.addClass(iconExitFullScreenText);
  $editorParent.addClass(classfullScreenEditor);
  $editorParent.css('z-index', config.zIndexFullScreen);
  var bar = $toolbarElem.getBoundingClientRect();
  $textContainerElem.css('height', "calc(100% - " + bar.height + "px)");
};

exports.setFullScreen = setFullScreen;
/**
 * ????????????
 * @param editor ???????????????
 */

var setUnFullScreen = function setUnFullScreen(editor) {
  var $editorParent = dom_core_1["default"](editor.toolbarSelector);
  var $textContainerElem = editor.$textContainerElem;
  var $toolbarElem = editor.$toolbarElem;
  var $iconElem = (0, _find["default"])($toolbarElem).call($toolbarElem, "i." + iconExitFullScreenText);
  var config = editor.config;
  $iconElem.removeClass(iconExitFullScreenText);
  $iconElem.addClass(iconFullScreenText);
  $editorParent.removeClass(classfullScreenEditor);
  $editorParent.css('z-index', 'auto');
  $textContainerElem.css('height', config.height + 'px');
};

exports.setUnFullScreen = setUnFullScreen;
/**
 * ?????????????????????
 * @param editor ???????????????
 */

var initFullScreen = function initFullScreen(editor) {
  // ???textSelector????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????
  if (editor.textSelector) return;
  if (!editor.config.showFullScreen) return;
  var $toolbarElem = editor.$toolbarElem;
  var $elem = dom_core_1["default"]("<div class=\"w-e-menu\" data-title=\"\u5168\u5C4F\">\n            <i class=\"" + iconFullScreenText + "\"></i>\n        </div>");
  $elem.on('click', function (e) {
    var _context;

    var $elemIcon = (0, _find["default"])(_context = dom_core_1["default"](e.currentTarget)).call(_context, 'i');

    if ($elemIcon.hasClass(iconFullScreenText)) {
      $elem.attr('data-title', '????????????');
      exports.setFullScreen(editor);
    } else {
      $elem.attr('data-title', '??????');
      exports.setUnFullScreen(editor);
    }
  });
  $toolbarElem.append($elem);
};

exports["default"] = initFullScreen;

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(438);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-full-screen-editor {\n  position: fixed;\n  width: 100%!important;\n  height: 100%!important;\n  left: 0;\n  top: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????????????????????
 * @author zhengwenjian
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _find = _interopRequireDefault(__webpack_require__(32));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * ??????????????????????????????
 * @param editor ???????????????
 * @param id ????????????id
 */

var scrollToHead = function scrollToHead(editor, id) {
  var _context;

  var $textElem = editor.isEnable ? editor.$textElem : (0, _find["default"])(_context = editor.$textContainerElem).call(_context, '.w-e-content-mantle');
  var $targetHead = (0, _find["default"])($textElem).call($textElem, "[id='" + id + "']");
  var targetTop = $targetHead.getOffsetData().top;
  $textElem.scrollTop(targetTop);
};

exports["default"] = scrollToHead;

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var style_1 = tslib_1.__importDefault(__webpack_require__(133));

var tier = {
  menu: 2,
  panel: 2,
  toolbar: 1,
  tooltip: 1,
  textContainer: 1 // ????????????

};

var ZIndex = function () {
  function ZIndex() {
    // ????????????
    this.tier = tier; // ?????????

    this.baseZIndex = style_1["default"].zIndex;
  } // ?????? tierName ????????? z-index ??????????????? tierName ??????????????????????????? z-index ???


  ZIndex.prototype.get = function (tierName) {
    if (tierName && this.tier[tierName]) {
      return this.baseZIndex + this.tier[tierName];
    }

    return this.baseZIndex;
  }; // ?????????


  ZIndex.prototype.init = function (editor) {
    if (this.baseZIndex == style_1["default"].zIndex) {
      this.baseZIndex = editor.config.zIndex;
    }
  };

  return ZIndex;
}();

exports["default"] = ZIndex;

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????? change ??????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _filter = _interopRequireDefault(__webpack_require__(76));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var mutation_1 = tslib_1.__importDefault(__webpack_require__(442));

var util_1 = __webpack_require__(6);

var const_1 = __webpack_require__(7);
/**
 * ???????????????????????? attribute ??????????????? contenteditable ??????
 * @param mutations MutationRecord[]
 * @param tar ?????????????????? DOM ??????
 */


function mutationsFilter(mutations, tar) {
  // ???????????????????????? attribute ??????????????? contenteditable ??????
  return (0, _filter["default"])(mutations).call(mutations, function (_a) {
    var type = _a.type,
        target = _a.target,
        attributeName = _a.attributeName;
    return type != 'attributes' || type == 'attributes' && (attributeName == 'contenteditable' || target != tar);
  });
}
/**
 * Change ??????
 */


var Change = function (_super) {
  tslib_1.__extends(Change, _super);

  function Change(editor) {
    var _this = _super.call(this, function (mutations, observer) {
      var _a; // ????????????


      mutations = mutationsFilter(mutations, observer.target); // ????????????

      (_a = _this.data).push.apply(_a, mutations); // ???????????????


      if (!editor.isCompatibleMode) {
        // ?????????????????????????????????????????????
        if (!editor.isComposing) {
          return _this.asyncSave();
        }
      } // ???????????????
      else {
        _this.asyncSave();
      }
    }) || this;

    _this.editor = editor;
    /**
     * ?????????????????????
     */

    _this.data = [];
    /**
     * ??????????????????
     */

    _this.asyncSave = const_1.EMPTY_FN;
    return _this;
  }
  /**
   * ?????????????????????????????? change event
   */


  Change.prototype.save = function () {
    // ?????????
    if (this.data.length) {
      // ??????????????????
      this.editor.history.save(this.data); // ????????????

      this.data.length = 0;
      this.emit();
    }
  };
  /**
   * ?????? change event
   */


  Change.prototype.emit = function () {
    var _context;

    // ?????? onchange ??????
    (0, _forEach["default"])(_context = this.editor.txt.eventHooks.changeEvents).call(_context, function (fn) {
      return fn();
    });
  }; // ?????? observe


  Change.prototype.observe = function () {
    var _this = this;

    _super.prototype.observe.call(this, this.editor.$textElem.elems[0]);

    var timeout = this.editor.config.onchangeTimeout;
    this.asyncSave = util_1.debounce(function () {
      _this.save();
    }, timeout);

    if (!this.editor.isCompatibleMode) {
      this.editor.$textElem.on('compositionend', function () {
        _this.asyncSave();
      });
    }
  };

  return Change;
}(mutation_1["default"]);

exports["default"] = Change;

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? MutationObserver
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * ?????? MutationObserver?????????????????????
 */

var Mutation = function () {
  /**
   * ?????????
   * @param fn ????????????????????????????????????
   * @param options ??????????????????
   */
  function Mutation(fn, options) {
    var _this = this;
    /**
     * ????????? MutationObserverInit ??????
     */


    this.options = {
      subtree: true,
      childList: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true
    };

    this.callback = function (mutations) {
      fn(mutations, _this);
    };

    this.observer = new MutationObserver(this.callback);
    options && (this.options = options);
  }

  (0, _defineProperty["default"])(Mutation.prototype, "target", {
    get: function get() {
      return this.node;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ??????????????????????????????????????????
   * @param node ????????????????????????
   */

  Mutation.prototype.observe = function (node) {
    if (!(this.node instanceof Node)) {
      this.node = node;
      this.connect();
    }
  };
  /**
   * ?????????????????????????????????
   */


  Mutation.prototype.connect = function () {
    if (this.node) {
      this.observer.observe(this.node, this.options);
      return this;
    }

    throw new Error('???????????????????????????????????????????????? Node ??????');
  };
  /**
   * ?????????????????????????????????
   */


  Mutation.prototype.disconnect = function () {
    var list = this.observer.takeRecords();
    list.length && this.callback(list);
    this.observer.disconnect();
  };

  return Mutation;
}();

exports["default"] = Mutation;

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var content_1 = tslib_1.__importDefault(__webpack_require__(444));

var scroll_1 = tslib_1.__importDefault(__webpack_require__(451));

var range_1 = tslib_1.__importDefault(__webpack_require__(452));
/**
 * ?????????????????????????????????
 */


var History = function () {
  function History(editor) {
    this.editor = editor;
    this.content = new content_1["default"](editor);
    this.scroll = new scroll_1["default"](editor);
    this.range = new range_1["default"](editor);
  }

  (0, _defineProperty["default"])(History.prototype, "size", {
    /**
     *  ?????????????????????????????????????????????[??????????????????????????????????????????????????????]
     */
    get: function get() {
      return this.scroll.size;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ????????????????????? editor.create() ???????????????
   */

  History.prototype.observe = function () {
    this.content.observe();
    this.scroll.observe(); // ???????????????????????????????????????

    !this.editor.isCompatibleMode && this.range.observe();
  };
  /**
   * ????????????
   */


  History.prototype.save = function (mutations) {
    if (mutations.length) {
      this.content.save(mutations);
      this.scroll.save(); // ??????????????????????????????

      !this.editor.isCompatibleMode && this.range.save();
    }
  };
  /**
   * ??????
   */


  History.prototype.revoke = function () {
    this.editor.change.disconnect();
    var res = this.content.revoke();

    if (res) {
      this.scroll.revoke(); // ????????????????????????

      if (!this.editor.isCompatibleMode) {
        this.range.revoke();
        this.editor.$textElem.focus();
      }
    }

    this.editor.change.connect(); // ??????????????? onchange ?????????????????????DOM?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? onchange ?????????????????????

    res && this.editor.change.emit();
  };
  /**
   * ??????
   */


  History.prototype.restore = function () {
    this.editor.change.disconnect();
    var res = this.content.restore();

    if (res) {
      this.scroll.restore(); // ????????????????????????

      if (!this.editor.isCompatibleMode) {
        this.range.restore();
        this.editor.$textElem.focus();
      }
    }

    this.editor.change.connect(); // ??? revoke ??????

    res && this.editor.change.emit();
  };

  return History;
}();

exports["default"] = History;

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ??????????????????????????????????????????????????????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var node_1 = tslib_1.__importDefault(__webpack_require__(445));

var html_1 = tslib_1.__importDefault(__webpack_require__(449));

var ContentCache = function () {
  function ContentCache(editor) {
    this.editor = editor;
  }
  /**
   * ???????????????
   */


  ContentCache.prototype.observe = function () {
    if (this.editor.isCompatibleMode) {
      // ??????????????????????????????
      this.cache = new html_1["default"](this.editor);
    } else {
      // ???????????????????????????/???????????????
      this.cache = new node_1["default"](this.editor);
    }

    this.cache.observe();
  };
  /**
   * ??????
   */


  ContentCache.prototype.save = function (mutations) {
    if (this.editor.isCompatibleMode) {
      ;
      this.cache.save();
    } else {
      ;
      this.cache.compile(mutations);
    }
  };
  /**
   * ??????
   */


  ContentCache.prototype.revoke = function () {
    var _a;

    return (_a = this.cache) === null || _a === void 0 ? void 0 : _a.revoke();
  };
  /**
   * ??????
   */


  ContentCache.prototype.restore = function () {
    var _a;

    return (_a = this.cache) === null || _a === void 0 ? void 0 : _a.restore();
  };

  return ContentCache;
}();

exports["default"] = ContentCache;

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var cache_1 = tslib_1.__importDefault(__webpack_require__(106));

var compile_1 = tslib_1.__importDefault(__webpack_require__(447));

var decompilation_1 = __webpack_require__(448);

var NodeCache = function (_super) {
  tslib_1.__extends(NodeCache, _super);

  function NodeCache(editor) {
    var _this = _super.call(this, editor.config.historyMaxSize) || this;

    _this.editor = editor;
    return _this;
  }

  NodeCache.prototype.observe = function () {
    this.resetMaxSize(this.editor.config.historyMaxSize);
  };
  /**
   * ?????????????????????
   */


  NodeCache.prototype.compile = function (data) {
    this.save(compile_1["default"](data));
    return this;
  };
  /**
   * ??????
   */


  NodeCache.prototype.revoke = function () {
    return _super.prototype.revoke.call(this, function (data) {
      decompilation_1.revoke(data);
    });
  };
  /**
   * ??????
   */


  NodeCache.prototype.restore = function () {
    return _super.prototype.restore.call(this, function (data) {
      decompilation_1.restore(data);
    });
  };

  return NodeCache;
}(cache_1["default"]);

exports["default"] = NodeCache;

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? - ???
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.CeilStack = void 0;
/**
 * ????????????????????????????????????????????????????????????????????????????????????????????????
 */
// ?????????????????? Math.ceil?????????????????????

var CeilStack = function () {
  function CeilStack(max) {
    if (max === void 0) {
      max = 0;
    }
    /**
     * ????????????
     */


    this.data = [];
    /**
     * ??????????????????????????????????????????
     */

    this.max = 0;
    /**
     * ????????????????????? max ???
     */

    this.reset = false;
    max = Math.abs(max);
    max && (this.max = max);
  }
  /**
   * ???????????????????????? max ???
   */


  CeilStack.prototype.resetMax = function (maxSize) {
    maxSize = Math.abs(maxSize);

    if (!this.reset && !isNaN(maxSize)) {
      this.max = maxSize;
      this.reset = true;
    }
  };

  (0, _defineProperty["default"])(CeilStack.prototype, "size", {
    /**
     * ???????????????????????????
     */
    get: function get() {
      return this.data.length;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ??????
   * @param data ???????????????
   */

  CeilStack.prototype.instack = function (data) {
    this.data.unshift(data);

    if (this.max && this.size > this.max) {
      this.data.length = this.max;
    }

    return this;
  };
  /**
   * ??????
   */


  CeilStack.prototype.outstack = function () {
    return this.data.shift();
  };
  /**
   * ?????????
   */


  CeilStack.prototype.clear = function () {
    this.data.length = 0;
    return this;
  };

  return CeilStack;
}();

exports.CeilStack = CeilStack;

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ????????????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _indexOf = _interopRequireDefault(__webpack_require__(28));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.compliePosition = exports.complieNodes = exports.compileValue = exports.compileType = void 0;

var util_1 = __webpack_require__(6);
/**
 * ????????????
 */


function compileType(data) {
  switch (data) {
    case 'childList':
      return 'node';

    case 'attributes':
      return 'attr';

    default:
      return 'text';
  }
}

exports.compileType = compileType;
/**
 * ???????????????????????????
 */

function compileValue(data) {
  switch (data.type) {
    case 'attributes':
      return data.target.getAttribute(data.attributeName) || '';

    case 'characterData':
      return data.target.textContent;

    default:
      return '';
  }
}

exports.compileValue = compileValue;
/**
 * addedNodes/removedNodes
 */

function complieNodes(data) {
  var temp = {};

  if (data.addedNodes.length) {
    temp.add = util_1.toArray(data.addedNodes);
  }

  if (data.removedNodes.length) {
    temp.remove = util_1.toArray(data.removedNodes);
  }

  return temp;
}

exports.complieNodes = complieNodes;
/**
 * addedNodes/removedNodes ???????????????
 */

function compliePosition(data) {
  var temp;

  if (data.previousSibling) {
    temp = {
      type: 'before',
      target: data.previousSibling
    };
  } else if (data.nextSibling) {
    temp = {
      type: 'after',
      target: data.nextSibling
    };
  } else {
    temp = {
      type: 'parent',
      target: data.target
    };
  }

  return temp;
}

exports.compliePosition = compliePosition;
/**
 * ?????? Firefox ?????????????????????
 */

var tag = ['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
/**
 * ??? MutationRecord ?????????????????????????????????
 */

function compile(data) {
  var temp = []; // ??????????????????????????? Firefox ???????????????
  // ????????????????????????????????????

  var removeNode = false; // ???????????????????????????

  var removeCache = [];
  (0, _forEach["default"])(data).call(data, function (record, index) {
    var item = {
      type: compileType(record.type),
      target: record.target,
      attr: record.attributeName || '',
      value: compileValue(record) || '',
      oldValue: record.oldValue || '',
      nodes: complieNodes(record),
      position: compliePosition(record)
    };
    temp.push(item); // ?????? Firefox?????????????????????????????????????????????????????? IE ???????????????

    if (!util_1.UA.isFirefox) {
      return;
    } // ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    // ??????????????????????????????????????? HTMLElement????????????????????? HTMLElement ??? ul -> ol ??? ol -> ul ??? Enter???


    if (removeNode && record.addedNodes.length && record.addedNodes[0].nodeType == 1) {
      // ?????????????????????????????????
      var replenishNode = record.addedNodes[0];
      var replenishData = {
        type: 'node',
        target: replenishNode,
        attr: '',
        value: '',
        oldValue: '',
        nodes: {
          add: [removeNode]
        },
        position: {
          type: 'parent',
          target: replenishNode
        }
      }; // ??????????????????['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']

      if ((0, _indexOf["default"])(tag).call(tag, replenishNode.nodeName) != -1) {
        replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
        temp.push(replenishData);
      } // ????????????????????????????????????
      else if (removeNode.nodeType == 3) {
        if (contains(replenishNode, removeCache)) {
          replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
        }

        temp.push(replenishData);
      } // ???????????????????????? Element && ?????????????????????????????????????????????????????????????????????????????????
      else if ((0, _indexOf["default"])(tag).call(tag, record.target.nodeName) == -1 && contains(replenishNode, removeCache)) {
        replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
        temp.push(replenishData);
      }
    } // ???????????????????????????


    if (item.type == 'node' && record.removedNodes.length == 1) {
      removeNode = record.removedNodes[0];
      removeCache.push(removeNode);
    } else {
      removeNode = false;
      removeCache.length = 0;
    }
  });
  return temp;
}

exports["default"] = compile; // ????????????????????????????????????????????????????????????????????????

function contains(tar, childs) {
  var count = 0;

  for (var i = childs.length - 1; i > 0; i--) {
    if (tar.contains(childs[i])) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _forEach = _interopRequireDefault(__webpack_require__(4));

var _entries = _interopRequireDefault(__webpack_require__(102));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.restore = exports.revoke = void 0;
/**
 * ?????????????????? DOM ??????
 * @param data ?????????
 * @param list ???????????????addedNodes ??? removedNodes???
 */

function insertNode(data, list) {
  var reference = data.position.target;

  switch (data.position.type) {
    // reference ????????????????????????
    case 'before':
      if (reference.nextSibling) {
        reference = reference.nextSibling;
        (0, _forEach["default"])(list).call(list, function (item) {
          data.target.insertBefore(item, reference);
        });
      } else {
        (0, _forEach["default"])(list).call(list, function (item) {
          data.target.appendChild(item);
        });
      }

      break;
    // reference ????????????????????????

    case 'after':
      (0, _forEach["default"])(list).call(list, function (item) {
        data.target.insertBefore(item, reference);
      });
      break;
    // parent
    // reference ???????????????????????????

    default:
      (0, _forEach["default"])(list).call(list, function (item) {
        reference.appendChild(item);
      });
      break;
  }
}
/* ------------------------------------------------------------------ ???????????? ------------------------------------------------------------------ */


function revokeNode(data) {
  for (var _i = 0, _a = (0, _entries["default"])(data.nodes); _i < _a.length; _i++) {
    var _b = _a[_i],
        relative = _b[0],
        list = _b[1];

    switch (relative) {
      // ????????????????????????????????? DOM ?????????
      case 'add':
        (0, _forEach["default"])(list).call(list, function (item) {
          data.target.removeChild(item);
        });
        break;
      // remove?????????????????????????????????????????? DOM ??????

      default:
        {
          insertNode(data, list);
          break;
        }
    }
  }
}
/**
 * ?????? attribute
 */


function revokeAttr(data) {
  var target = data.target;

  if (data.oldValue == null) {
    target.removeAttribute(data.attr);
  } else {
    target.setAttribute(data.attr, data.oldValue);
  }
}
/**
 * ??????????????????
 */


function revokeText(data) {
  data.target.textContent = data.oldValue;
}

var revokeFns = {
  node: revokeNode,
  text: revokeText,
  attr: revokeAttr
}; // ?????? - ?????????????????????

function revoke(data) {
  for (var i = data.length - 1; i > -1; i--) {
    var item = data[i];
    revokeFns[item.type](item);
  }
}

exports.revoke = revoke;
/* ------------------------------------------------------------------ ???????????? ------------------------------------------------------------------ */

function restoreNode(data) {
  for (var _i = 0, _a = (0, _entries["default"])(data.nodes); _i < _a.length; _i++) {
    var _b = _a[_i],
        relative = _b[0],
        list = _b[1];

    switch (relative) {
      case 'add':
        {
          insertNode(data, list);
          break;
        }
      // remove

      default:
        {
          (0, _forEach["default"])(list).call(list, function (item) {
            ;
            item.parentNode.removeChild(item);
          });
          break;
        }
    }
  }
}

function restoreText(data) {
  data.target.textContent = data.value;
}

function restoreAttr(data) {
  ;
  data.target.setAttribute(data.attr, data.value);
}

var restoreFns = {
  node: restoreNode,
  text: restoreText,
  attr: restoreAttr
}; // ?????? - ?????????????????????

function restore(data) {
  for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    restoreFns[item.type](item);
  }
}

exports.restore = restore;

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var chain_1 = __webpack_require__(450);

var HtmlCache = function () {
  function HtmlCache(editor) {
    this.editor = editor;
    this.data = new chain_1.TailChain();
  }
  /**
   * ???????????????
   */


  HtmlCache.prototype.observe = function () {
    this.data.resetMax(this.editor.config.historyMaxSize); // ??????????????????

    this.data.insertLast(this.editor.$textElem.html());
  };
  /**
   * ??????
   */


  HtmlCache.prototype.save = function () {
    this.data.insertLast(this.editor.$textElem.html());
    return this;
  };
  /**
   * ??????
   */


  HtmlCache.prototype.revoke = function () {
    var data = this.data.prev();

    if (data) {
      this.editor.$textElem.html(data);
      return true;
    }

    return false;
  };
  /**
   * ??????
   */


  HtmlCache.prototype.restore = function () {
    var data = this.data.next();

    if (data) {
      this.editor.$textElem.html(data);
      return true;
    }

    return false;
  };

  return HtmlCache;
}();

exports["default"] = HtmlCache;

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ???????????? - ??????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _splice = _interopRequireDefault(__webpack_require__(99));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.TailChain = void 0;
/**
 * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
 */

var TailChain = function () {
  function TailChain() {
    /**
     * ????????????
     */
    this.data = [];
    /**
     * ??????????????????????????????????????????
     */

    this.max = 0;
    /**
     * ??????
     */

    this.point = 0; // ?????????????????????????????????

    this.isRe = false;
  }
  /**
   * ???????????????????????? max ???
   */


  TailChain.prototype.resetMax = function (maxSize) {
    maxSize = Math.abs(maxSize);
    maxSize && (this.max = maxSize);
  };

  (0, _defineProperty["default"])(TailChain.prototype, "size", {
    /**
     * ?????????????????????
     */
    get: function get() {
      return this.data.length;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ?????????
   * @param data ???????????????
   */

  TailChain.prototype.insertLast = function (data) {
    // ???????????????????????????????????????????????????
    if (this.isRe) {
      var _context;

      (0, _splice["default"])(_context = this.data).call(_context, this.point + 1);
      this.isRe = false;
    }

    this.data.push(data); // ????????????????????????

    while (this.max && this.size > this.max) {
      this.data.shift();
    } // ???????????????????????????????????????


    this.point = this.size - 1;
    return this;
  };
  /**
   * ????????????????????????
   */


  TailChain.prototype.current = function () {
    return this.data[this.point];
  };
  /**
   * ????????????????????????
   */


  TailChain.prototype.prev = function () {
    !this.isRe && (this.isRe = true);
    this.point--;

    if (this.point < 0) {
      this.point = 0;
      return undefined;
    }

    return this.current();
  };
  /**
   * ??????????????????
   */


  TailChain.prototype.next = function () {
    !this.isRe && (this.isRe = true);
    this.point++;

    if (this.point >= this.size) {
      this.point = this.size - 1;
      return undefined;
    }

    return this.current();
  };

  return TailChain;
}();

exports.TailChain = TailChain;

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? scrollTop
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var cache_1 = tslib_1.__importDefault(__webpack_require__(106));

var ScrollCache = function (_super) {
  tslib_1.__extends(ScrollCache, _super);

  function ScrollCache(editor) {
    var _this = _super.call(this, editor.config.historyMaxSize) || this;

    _this.editor = editor;
    /**
     * ???????????? scrollTop
     */

    _this.last = 0;
    _this.target = editor.$textElem.elems[0];
    return _this;
  }
  /**
   * ???????????????????????? scroll ??????
   */


  ScrollCache.prototype.observe = function () {
    var _this = this;

    this.target = this.editor.$textElem.elems[0];
    this.editor.$textElem.on('scroll', function () {
      _this.last = _this.target.scrollTop;
    });
    this.resetMaxSize(this.editor.config.historyMaxSize);
  };
  /**
   * ?????? scrollTop ???
   */


  ScrollCache.prototype.save = function () {
    _super.prototype.save.call(this, [this.last, this.target.scrollTop]);

    return this;
  };
  /**
   * ??????
   */


  ScrollCache.prototype.revoke = function () {
    var _this = this;

    return _super.prototype.revoke.call(this, function (data) {
      _this.target.scrollTop = data[0];
    });
  };
  /**
   * ??????
   */


  ScrollCache.prototype.restore = function () {
    var _this = this;

    return _super.prototype.restore.call(this, function (data) {
      _this.target.scrollTop = data[1];
    });
  };

  return ScrollCache;
}(cache_1["default"]);

exports["default"] = ScrollCache;

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description ?????? range ??????
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var cache_1 = tslib_1.__importDefault(__webpack_require__(106));

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

var util_1 = __webpack_require__(6);
/**
 * ??? Range ???????????????????????????
 * @param range Range ??????
 */


function rangeToObject(range) {
  return {
    start: [range.startContainer, range.startOffset],
    end: [range.endContainer, range.endOffset],
    root: range.commonAncestorContainer,
    collapsed: range.collapsed
  };
}
/**
 * ????????? range ???????????????
 */


var RangeCache = function (_super) {
  tslib_1.__extends(RangeCache, _super);

  function RangeCache(editor) {
    var _this = _super.call(this, editor.config.historyMaxSize) || this;

    _this.editor = editor;
    _this.lastRange = rangeToObject(document.createRange());
    _this.root = editor.$textElem.elems[0];
    _this.updateLastRange = util_1.debounce(function () {
      _this.lastRange = rangeToObject(_this.rangeHandle);
    }, editor.config.onchangeTimeout);
    return _this;
  }

  (0, _defineProperty["default"])(RangeCache.prototype, "rangeHandle", {
    /**
     * ?????? Range ??????
     */
    get: function get() {
      var selection = document.getSelection();
      return selection && selection.rangeCount ? selection.getRangeAt(0) : document.createRange();
    },
    enumerable: false,
    configurable: true
  });
  /**
   * ???????????????
   */

  RangeCache.prototype.observe = function () {
    var self = this; // ??????????????????

    this.root = this.editor.$textElem.elems[0];
    this.resetMaxSize(this.editor.config.historyMaxSize); // selection change ????????????

    function selectionchange() {
      var handle = self.rangeHandle;

      if (self.root === handle.commonAncestorContainer || self.root.contains(handle.commonAncestorContainer)) {
        // ???????????????????????????????????????
        if (!self.editor.isComposing) {
          self.updateLastRange();
        }
      }
    } // backspace ??? delete ???????????? Range ??????


    function deletecallback(e) {
      if (e.key == 'Backspace' || e.key == 'Delete') {
        // self.lastRange = rangeToObject(self.rangeHandle)
        self.updateLastRange();
      }
    } // ?????????????????????????????? document ????????????????????? window ??????


    dom_core_1["default"](document).on('selectionchange', selectionchange); // ??????????????????

    this.editor.beforeDestroy(function () {
      dom_core_1["default"](document).off('selectionchange', selectionchange);
    }); // ??????????????????????????? range

    self.editor.$textElem.on('keydown', deletecallback);
  };
  /**
   * ?????? Range
   */


  RangeCache.prototype.save = function () {
    var current = rangeToObject(this.rangeHandle);

    _super.prototype.save.call(this, [this.lastRange, current]);

    this.lastRange = current;
    return this;
  };
  /**
   * ?????? Range?????? ??????/?????? ?????????
   * @param range ????????? Range ??????
   */


  RangeCache.prototype.set = function (range) {
    try {
      if (range) {
        var handle = this.rangeHandle;
        handle.setStart.apply(handle, range.start);
        handle.setEnd.apply(handle, range.end);
        this.editor.menus.changeActive();
        return true;
      }
    } catch (err) {
      return false;
    }

    return false;
  };
  /**
   * ??????
   */


  RangeCache.prototype.revoke = function () {
    var _this = this;

    return _super.prototype.revoke.call(this, function (data) {
      _this.set(data[0]);
    });
  };
  /**
   * ??????
   */


  RangeCache.prototype.restore = function () {
    var _this = this;

    return _super.prototype.restore.call(this, function (data) {
      _this.set(data[1]);
    });
  };

  return RangeCache;
}(cache_1["default"]);

exports["default"] = RangeCache;

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _find = _interopRequireDefault(__webpack_require__(32));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tslib_1 = __webpack_require__(2);

var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));

__webpack_require__(454);

function disableInit(editor) {
  var isCurtain = false; // ????????????????????????

  var $contentDom;
  var $menuDom; // ????????????????????? js ??????????????????????????????

  editor.txt.eventHooks.changeEvents.push(function () {
    if (isCurtain) {
      (0, _find["default"])($contentDom).call($contentDom, '.w-e-content-preview').html(editor.$textElem.html());
    }
  }); // ????????????

  function disable() {
    if (isCurtain) return; // ??????????????????

    editor.$textElem.hide(); // ??????div ??????????????????

    var textContainerZindexValue = editor.zIndex.get('textContainer');
    var content = editor.txt.html();
    $contentDom = dom_core_1["default"]("<div class=\"w-e-content-mantle\" style=\"z-index:" + textContainerZindexValue + "\">\n                <div class=\"w-e-content-preview w-e-text\">" + content + "</div>\n            </div>");
    editor.$textContainerElem.append($contentDom); // ??????div ????????????

    var menuZindexValue = editor.zIndex.get('menu');
    $menuDom = dom_core_1["default"]("<div class=\"w-e-menue-mantle\" style=\"z-index:" + menuZindexValue + "\"></div>");
    editor.$toolbarElem.append($menuDom);
    isCurtain = true;
    editor.isEnable = false;
  } // ????????????????????????????????????


  function enable() {
    if (!isCurtain) return;
    $contentDom.remove();
    $menuDom.remove();
    editor.$textElem.show();
    isCurtain = false;
    editor.isEnable = true;
  }

  return {
    disable: disable,
    enable: enable
  };
}

exports["default"] = disableInit;

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(21);
            var content = __webpack_require__(455);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(22);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-content-mantle {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.w-e-content-mantle .w-e-content-preview {\n  width: 100%;\n  min-height: 100%;\n  padding: 0 10px;\n  line-height: 1.5;\n}\n.w-e-content-mantle .w-e-content-preview img {\n  cursor: default;\n}\n.w-e-content-mantle .w-e-content-preview img:hover {\n  box-shadow: none;\n}\n.w-e-menue-mantle {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var SelectionChange = function () {
  function SelectionChange(editor) {
    var _this = this;

    this.editor = editor; // ???????????????

    var init = function init() {
      var activeElement = document.activeElement;

      if (activeElement === editor.$textElem.elems[0]) {
        _this.emit();
      }
    }; //  ????????????????????????


    window.document.addEventListener('selectionchange', init); // ?????????????????????

    this.editor.beforeDestroy(function () {
      window.document.removeEventListener('selectionchange', init);
    });
  }

  SelectionChange.prototype.emit = function () {
    var _a; // ??????rangeChange??????


    var onSelectionChange = this.editor.config.onSelectionChange;

    if (onSelectionChange) {
      var selection = this.editor.selection;
      selection.saveRange();
      if (!selection.isSelectionEmpty()) onSelectionChange({
        // ????????????
        text: selection.getSelectionText(),
        // ?????????html
        html: (_a = selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0].innerHTML,
        // select??????
        selection: selection
      });
    }
  };

  return SelectionChange;
}();

exports["default"] = SelectionChange;

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _assign = _interopRequireDefault(__webpack_require__(132));

var _entries = _interopRequireDefault(__webpack_require__(102));

var _forEach = _interopRequireDefault(__webpack_require__(4));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.registerPlugin = void 0;

var tslib_1 = __webpack_require__(2);

var editor_1 = tslib_1.__importDefault(__webpack_require__(94));

var util_1 = __webpack_require__(6);
/**
 * ????????????
 * @param { string } name ?????????
 * @param { RegisterOptions } options ????????????
 * @param { pluginsListType } memory ????????????
 */


function registerPlugin(name, options, memory) {
  if (!name) {
    throw new TypeError('name is not define');
  }

  if (!options) {
    throw new TypeError('options is not define');
  }

  if (!options.intention) {
    throw new TypeError('options.intention is not define');
  }

  if (options.intention && typeof options.intention !== 'function') {
    throw new TypeError('options.intention is not function');
  }

  if (memory[name]) {
    console.warn("plugin " + name + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002");
  }

  memory[name] = options;
}

exports.registerPlugin = registerPlugin;
/**
 * ???????????????
 * @param { Editor } editor ???????????????
 */

function initPlugins(editor) {
  var plugins = (0, _assign["default"])({}, util_1.deepClone(editor_1["default"].globalPluginsFunctionList), util_1.deepClone(editor.pluginsFunctionList));
  var values = (0, _entries["default"])(plugins);
  (0, _forEach["default"])(values).call(values, function (_a) {
    var name = _a[0],
        options = _a[1];
    console.info("plugin " + name + " initializing");
    var intention = options.intention,
        config = options.config;
    intention(editor, config);
    console.info("plugin " + name + " initialization complete");
  });
}

exports["default"] = initPlugins;

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=wangEditor.js.map