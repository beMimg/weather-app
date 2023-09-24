/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/polar-lights.jpg */ "./src/img/polar-lights.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  --font: 'Noto Sans', sans-serif;
  --trans: all 0.3s linear;
}
body {
  font-family: var(--font);
  margin: 0;
  height: 100vh;
  font-size: 16px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  background:
    linear-gradient(rgba(25, 82, 83, 0.5), rgba(0, 0, 0, 0.7)),
    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat;
  color: white;
}
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}
.header {
  display: grid;
  align-self: center;
  justify-self: center;
}
.date {
  display: grid;
  grid-area: 1/3;
  align-self: center;
  justify-self: center;
}
.current-info {
  display: grid;
  grid-area: 2/1;
  align-self: center;
  justify-self: center;
  text-align: center;
}
.day-info {
  display: grid;
  grid-area: 1/2;
  grid-row: span 2;
  align-self: center;
  justify-self: center;
  text-align: center;
  gap: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
}
form {
  display: grid;
  align-self: center;
  justify-self: center;
  position: relative;
  grid-area: 2/3;
}
.curiosity {
  display: grid;
  align-self: center;
  justify-self: center;
  padding: 20px;
  grid-area: 3/1;
  grid-column: span 3;
  text-align: center;
}
input {
  width: 100%;
  font-size: 1.7rem;
  padding: 20px;
  font-family: var(--font);
  border-radius: 8px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.6);
  color: lightgray;
  margin-bottom: 30px;
}
form button {
  background-color: inherit;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
  top: 25px;
  right: 15px;
  position: absolute;
  color: lightgray;
}
.error {
  opacity: 0;
  visibility: hidden;
  transition: var(--trans);
  position: absolute;
  bottom: 0;
  right: 5px;
}
.error-active {
  opacity: 1;
  visibility: visible;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,+BAA+B;EAC/B,wBAAwB;AAC1B;AACA;EACE,wBAAwB;EACxB,SAAS;EACT,aAAa;EACb,eAAe;EACf,aAAa;EACb,kCAAkC;EAClC,qCAAqC;EACrC;;kEAEoD;EACpD,YAAY;AACd;AACA;;;;;;EAME,SAAS;AACX;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,SAAS;EACT,oCAAoC;EACpC,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,wBAAwB;EACxB,kBAAkB;EAClB,2BAA2B;EAC3B,sBAAsB;EACtB,oCAAoC;EACpC,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,SAAS;EACT,eAAe;EACf,eAAe;EACf,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;AACA;EACE,UAAU;EACV,mBAAmB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n  --font: 'Noto Sans', sans-serif;\n  --trans: all 0.3s linear;\n}\nbody {\n  font-family: var(--font);\n  margin: 0;\n  height: 100vh;\n  font-size: 16px;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  background:\n    linear-gradient(rgba(25, 82, 83, 0.5), rgba(0, 0, 0, 0.7)),\n    url(./img/polar-lights.jpg) center/cover no-repeat;\n  color: white;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n}\n.header {\n  display: grid;\n  align-self: center;\n  justify-self: center;\n}\n.date {\n  display: grid;\n  grid-area: 1/3;\n  align-self: center;\n  justify-self: center;\n}\n.current-info {\n  display: grid;\n  grid-area: 2/1;\n  align-self: center;\n  justify-self: center;\n  text-align: center;\n}\n.day-info {\n  display: grid;\n  grid-area: 1/2;\n  grid-row: span 2;\n  align-self: center;\n  justify-self: center;\n  text-align: center;\n  gap: 60px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 20px;\n  border-radius: 10px;\n}\nform {\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  position: relative;\n  grid-area: 2/3;\n}\n.curiosity {\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  padding: 20px;\n  grid-area: 3/1;\n  grid-column: span 3;\n  text-align: center;\n}\ninput {\n  width: 100%;\n  font-size: 1.7rem;\n  padding: 20px;\n  font-family: var(--font);\n  border-radius: 8px;\n  border: 1px solid lightgray;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: lightgray;\n  margin-bottom: 30px;\n}\nform button {\n  background-color: inherit;\n  border: 0;\n  font-size: 2rem;\n  cursor: pointer;\n  top: 25px;\n  right: 15px;\n  position: absolute;\n  color: lightgray;\n}\n.error {\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--trans);\n  position: absolute;\n  bottom: 0;\n  right: 5px;\n}\n.error-active {\n  opacity: 1;\n  visibility: visible;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/changeCuriosity.js":
/*!********************************!*\
  !*** ./src/changeCuriosity.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   curiosities: () => (/* binding */ curiosities),
/* harmony export */   displayCuriosity: () => (/* binding */ displayCuriosity)
/* harmony export */ });
const curiosities = [
  "Strangest Rain: In some parts of the world, it can rain animals. This phenomenon, known as 'animal rain,' occurs when small creatures like fish or frogs fall from the sky during a rainstorm.",
  'Weather on Other Planets: The weather on Venus is incredibly harsh. It has a constant temperature of around 900°F (475°C) due to its thick, toxic atmosphere, which traps heat.',
  'Green Flash at Sunset: Under the right atmospheric conditions, you can witness a rare optical phenomenon known as the "green flash" just as the sun sets. It appears as a green spot for a few seconds above the upper rim of the sun.',
  'Thunder Snow: Thunderstorms can occur during snowfall, creating a unique phenomenon known as "thundersnow." Lightning during a snowstorm can be quite a sight!',
  'Weather and Mood: Many people believe that weather can affect their mood. Some experience increased happiness and energy on sunny days, while others feel more relaxed during a gentle rain.',
  'Microclimates: Even within a small area, there can be distinct microclimates. For example, a city may have cooler temperatures in parks and green spaces due to the urban heat island effect.',
  'Temperature Inversion: In some cases, temperature can increase with altitude, which is called a temperature inversion. This phenomenon can trap pollution close to the ground and lead to poor air quality.',
  'Drought and Civilization: Throughout history, droughts have played a significant role in the rise and fall of civilizations. They can lead to crop failure, food shortages, and social unrest.',
  'Extreme Temperature Swings: In 1972, the town of Loma, Montana, experienced the most dramatic temperature change ever recorded in a 24-hour period. The temperature plummeted from 103°F (39.4°C) to -54°F (-47.8°C)!',
];

const randomCuriosity = document.getElementById('random_curiosity');
let curiosityCount = 0;

function displayCuriosity() {
  setInterval(() => {
    curiosityCount++;
    if (curiosityCount > curiosities.length - 1) {
      curiosityCount = 0;
    }
    randomCuriosity.textContent = `${curiosities[curiosityCount]}`;
  }, 6000);
}

displayCuriosity();


/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getForecastFor: () => (/* binding */ getForecastFor),
/* harmony export */   getInfo: () => (/* binding */ getInfo),
/* harmony export */   locationURL: () => (/* binding */ locationURL)
/* harmony export */ });
const locationURL = {
  albania:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Albania&days=7&aqi=yes&alerts=no',
  andorra:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Andorra&days=7&aqi=yes&alerts=no',
  austria:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Austria&days=7&aqi=yes&alerts=no',
  belarus:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Belarus&days=7&aqi=yes&alerts=no',
  belgium:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Belgium&days=7&aqi=yes&alerts=no',
  bosnia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Bosnia&days=7&aqi=yes&alerts=no',
  bulgaria:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Bulgaria&days=7&aqi=yes&alerts=no',
  croatia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Croatia&days=7&aqi=yes&alerts=no',
  cyprus:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Cyprus&days=7&aqi=yes&alerts=no',
  czechrepublic:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Czech%20Republic&days=7&aqi=yes&alerts=no',
  denmark:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Denmark&days=7&aqi=yes&alerts=no',
  estonia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Estonia&days=7&aqi=yes&alerts=no',
  finland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Finland&days=7&aqi=yes&alerts=no',
  france:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=France&days=7&aqi=yes&alerts=no',
  germany:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Germany&days=7&aqi=yes&alerts=no',
  greece:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Greece&days=7&aqi=yes&alerts=no',
  hungary:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Hungary&days=7&aqi=yes&alerts=no',
  iceland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Iceland&days=7&aqi=yes&alerts=no',
  ireland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Ireland&days=7&aqi=yes&alerts=no',
  italy:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Italy&days=7&aqi=yes&alerts=no',
  latvia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Latvia&days=7&aqi=yes&alerts=no',
  liechtenstein:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Liechtenstein&days=7&aqi=yes&alerts=no',
  lithuania:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Lithuania&days=7&aqi=yes&alerts=no',
  luxembourg:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Luxembourg&days=7&aqi=yes&alerts=no',
  malta:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Malta&days=7&aqi=yes&alerts=no',
  moldova:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Moldova&days=7&aqi=yes&alerts=no',
  monaco:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Monaco&days=7&aqi=yes&alerts=no',
  montenegro:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Montenegro&days=7&aqi=yes&alerts=no',
  netherlands:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Netherlands&days=7&aqi=yes&alerts=no',
  northmacedonia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=North%20Macedonia&days=7&aqi=yes&alerts=no',
  norway:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Norway&days=7&aqi=yes&alerts=no',
  poland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Poland&days=7&aqi=yes&alerts=no',
  portugal:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Portugal&days=7&aqi=yes&alerts=no',
  romania:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Romania&days=7&aqi=yes&alerts=no',
  russia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Russia&days=7&aqi=yes&alerts=no',
  sanmarino:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=San%20Marino&days=7&aqi=yes&alerts=no',
  serbia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Serbia&days=7&aqi=yes&alerts=no',
  slovakia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Slovakia&days=7&aqi=yes&alerts=no',
  slovenia:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Slovenia&days=7&aqi=yes&alerts=no',
  spain:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Spain&days=7&aqi=yes&alerts=no',
  sweden:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Sweden&days=7&aqi=yes&alerts=no',
  switzerland:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Switzerland&days=7&aqi=yes&alerts=no',
  ukraine:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Ukraine&days=7&aqi=yes&alerts=no',
  unitedkingdom:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=United%20Kingdom&days=7&aqi=yes&alerts=no',
  vaticancity:
    'http://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=Vatican%20City&days=7&aqi=yes&alerts=no',
};

async function getDataFrom(url) {
  const response = await fetch(url);
  const thisData = await response.json();
  return thisData;
}

function getInfo(url) {
  getDataFrom(url).then((thisData) => {
    const name = thisData.location.name;
    const country = thisData.location.country;
    const currentTemp_C = thisData.current.temp_c;
    const currentTemp_F = thisData.current.temp_f;
    // today //
    console.log(name, country, currentTemp_C, currentTemp_F);

    return name, country, currentTemp_C, currentTemp_F;
  });
}
function getForecastFor(day, url) {
  getDataFrom(url).then((thisData) => {
    const date = thisData.forecast.forecastday[day].date;
    const sunrise = thisData.forecast.forecastday[day].astro.sunrise;
    const sunset = thisData.forecast.forecastday[day].astro.sunset;
    const maxTemp_c = thisData.forecast.forecastday[day].day.maxtemp_c;
    const maxTemp_f = thisData.forecast.forecastday[day].day.maxtemp_f;
    const minTemp_c = thisData.forecast.forecastday[day].day.mintemp_c;
    const minTemp_f = thisData.forecast.forecastday[day].day.mintemp_f;

    console.log(
      date,
      sunrise,
      sunset,
      maxTemp_c,
      maxTemp_f,
      minTemp_c,
      minTemp_f,
    );
    return date, sunrise, sunset, maxTemp_c, maxTemp_f, minTemp_c, minTemp_f;
  });
}

getInfo(locationURL.portugal);
getForecastFor(0, locationURL.portugal);


/***/ }),

/***/ "./src/handleForm.js":
/*!***************************!*\
  !*** ./src/handleForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleForm: () => (/* binding */ handleForm)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");


function handleForm() {
  const form = document.querySelector('form');
  const location = document.getElementById('location');
  const error = document.querySelector('.error');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationValue = location.value.toLowerCase();
    if (locationValue === '' || null) {
      error.classList.add('error-active');
      error.textContent = 'Please enter a valid europe country';
    } else if (_getData__WEBPACK_IMPORTED_MODULE_0__.locationURL.hasOwnProperty(locationValue)) {
      console.log('true');
      // display this next
    } else {
      error.classList.remove('error-active');
      error.textContent = '';
    }
  });
}

handleForm();
console.log(_getData__WEBPACK_IMPORTED_MODULE_0__.locationURL);


/***/ }),

/***/ "./src/img/polar-lights.jpg":
/*!**********************************!*\
  !*** ./src/img/polar-lights.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2e398735e9c4e706406.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _changeCuriosity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeCuriosity */ "./src/changeCuriosity.js");
/* harmony import */ var _handleForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleForm */ "./src/handleForm.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getData */ "./src/getData.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDRCQUE0QjtBQUNqRSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SXdDOztBQUVqQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sU0FBUyxpREFBVztBQUMxQjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLFlBQVksaURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0M7QUFDWDtBQUNVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NoYW5nZUN1cmlvc2l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hhbmRsZUZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvcG9sYXItbGlnaHRzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgLS1mb250OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgLS10cmFuczogYWxsIDAuM3MgbGluZWFyO1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMjUsIDgyLCA4MywgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbnAge1xuICBtYXJnaW46IDA7XG59XG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbi5kYXRlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiAxLzM7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4uY3VycmVudC1pbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzE7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kYXktaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogMS8yO1xuICBncmlkLXJvdzogc3BhbiAyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC1hcmVhOiAyLzM7XG59XG4uY3VyaW9zaXR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgZ3JpZC1hcmVhOiAzLzE7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMjVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5lcnJvciB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDVweDtcbn1cbi5lcnJvci1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDOztrRUFFb0Q7RUFDcEQsWUFBWTtBQUNkO0FBQ0E7Ozs7OztFQU1FLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FuczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAtLWZvbnQ6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS10cmFuczogYWxsIDAuM3MgbGluZWFyO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICBsaW5lYXItZ3JhZGllbnQocmdiYSgyNSwgODIsIDgzLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNykpLFxcbiAgICB1cmwoLi9pbWcvcG9sYXItbGlnaHRzLmpwZykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uZGF0ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmN1cnJlbnQtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiAyLzE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRheS1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMjtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtYXJlYTogMi8zO1xcbn1cXG4uY3VyaW9zaXR5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBncmlkLWFyZWE6IDMvMTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGNvbG9yOiBsaWdodGdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAyNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG4uZXJyb3Ige1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiA1cHg7XFxufVxcbi5lcnJvci1hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGN1cmlvc2l0aWVzID0gW1xuICBcIlN0cmFuZ2VzdCBSYWluOiBJbiBzb21lIHBhcnRzIG9mIHRoZSB3b3JsZCwgaXQgY2FuIHJhaW4gYW5pbWFscy4gVGhpcyBwaGVub21lbm9uLCBrbm93biBhcyAnYW5pbWFsIHJhaW4sJyBvY2N1cnMgd2hlbiBzbWFsbCBjcmVhdHVyZXMgbGlrZSBmaXNoIG9yIGZyb2dzIGZhbGwgZnJvbSB0aGUgc2t5IGR1cmluZyBhIHJhaW5zdG9ybS5cIixcbiAgJ1dlYXRoZXIgb24gT3RoZXIgUGxhbmV0czogVGhlIHdlYXRoZXIgb24gVmVudXMgaXMgaW5jcmVkaWJseSBoYXJzaC4gSXQgaGFzIGEgY29uc3RhbnQgdGVtcGVyYXR1cmUgb2YgYXJvdW5kIDkwMMKwRiAoNDc1wrBDKSBkdWUgdG8gaXRzIHRoaWNrLCB0b3hpYyBhdG1vc3BoZXJlLCB3aGljaCB0cmFwcyBoZWF0LicsXG4gICdHcmVlbiBGbGFzaCBhdCBTdW5zZXQ6IFVuZGVyIHRoZSByaWdodCBhdG1vc3BoZXJpYyBjb25kaXRpb25zLCB5b3UgY2FuIHdpdG5lc3MgYSByYXJlIG9wdGljYWwgcGhlbm9tZW5vbiBrbm93biBhcyB0aGUgXCJncmVlbiBmbGFzaFwiIGp1c3QgYXMgdGhlIHN1biBzZXRzLiBJdCBhcHBlYXJzIGFzIGEgZ3JlZW4gc3BvdCBmb3IgYSBmZXcgc2Vjb25kcyBhYm92ZSB0aGUgdXBwZXIgcmltIG9mIHRoZSBzdW4uJyxcbiAgJ1RodW5kZXIgU25vdzogVGh1bmRlcnN0b3JtcyBjYW4gb2NjdXIgZHVyaW5nIHNub3dmYWxsLCBjcmVhdGluZyBhIHVuaXF1ZSBwaGVub21lbm9uIGtub3duIGFzIFwidGh1bmRlcnNub3cuXCIgTGlnaHRuaW5nIGR1cmluZyBhIHNub3dzdG9ybSBjYW4gYmUgcXVpdGUgYSBzaWdodCEnLFxuICAnV2VhdGhlciBhbmQgTW9vZDogTWFueSBwZW9wbGUgYmVsaWV2ZSB0aGF0IHdlYXRoZXIgY2FuIGFmZmVjdCB0aGVpciBtb29kLiBTb21lIGV4cGVyaWVuY2UgaW5jcmVhc2VkIGhhcHBpbmVzcyBhbmQgZW5lcmd5IG9uIHN1bm55IGRheXMsIHdoaWxlIG90aGVycyBmZWVsIG1vcmUgcmVsYXhlZCBkdXJpbmcgYSBnZW50bGUgcmFpbi4nLFxuICAnTWljcm9jbGltYXRlczogRXZlbiB3aXRoaW4gYSBzbWFsbCBhcmVhLCB0aGVyZSBjYW4gYmUgZGlzdGluY3QgbWljcm9jbGltYXRlcy4gRm9yIGV4YW1wbGUsIGEgY2l0eSBtYXkgaGF2ZSBjb29sZXIgdGVtcGVyYXR1cmVzIGluIHBhcmtzIGFuZCBncmVlbiBzcGFjZXMgZHVlIHRvIHRoZSB1cmJhbiBoZWF0IGlzbGFuZCBlZmZlY3QuJyxcbiAgJ1RlbXBlcmF0dXJlIEludmVyc2lvbjogSW4gc29tZSBjYXNlcywgdGVtcGVyYXR1cmUgY2FuIGluY3JlYXNlIHdpdGggYWx0aXR1ZGUsIHdoaWNoIGlzIGNhbGxlZCBhIHRlbXBlcmF0dXJlIGludmVyc2lvbi4gVGhpcyBwaGVub21lbm9uIGNhbiB0cmFwIHBvbGx1dGlvbiBjbG9zZSB0byB0aGUgZ3JvdW5kIGFuZCBsZWFkIHRvIHBvb3IgYWlyIHF1YWxpdHkuJyxcbiAgJ0Ryb3VnaHQgYW5kIENpdmlsaXphdGlvbjogVGhyb3VnaG91dCBoaXN0b3J5LCBkcm91Z2h0cyBoYXZlIHBsYXllZCBhIHNpZ25pZmljYW50IHJvbGUgaW4gdGhlIHJpc2UgYW5kIGZhbGwgb2YgY2l2aWxpemF0aW9ucy4gVGhleSBjYW4gbGVhZCB0byBjcm9wIGZhaWx1cmUsIGZvb2Qgc2hvcnRhZ2VzLCBhbmQgc29jaWFsIHVucmVzdC4nLFxuICAnRXh0cmVtZSBUZW1wZXJhdHVyZSBTd2luZ3M6IEluIDE5NzIsIHRoZSB0b3duIG9mIExvbWEsIE1vbnRhbmEsIGV4cGVyaWVuY2VkIHRoZSBtb3N0IGRyYW1hdGljIHRlbXBlcmF0dXJlIGNoYW5nZSBldmVyIHJlY29yZGVkIGluIGEgMjQtaG91ciBwZXJpb2QuIFRoZSB0ZW1wZXJhdHVyZSBwbHVtbWV0ZWQgZnJvbSAxMDPCsEYgKDM5LjTCsEMpIHRvIC01NMKwRiAoLTQ3LjjCsEMpIScsXG5dO1xuXG5jb25zdCByYW5kb21DdXJpb3NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tX2N1cmlvc2l0eScpO1xubGV0IGN1cmlvc2l0eUNvdW50ID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJpb3NpdHkoKSB7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBjdXJpb3NpdHlDb3VudCsrO1xuICAgIGlmIChjdXJpb3NpdHlDb3VudCA+IGN1cmlvc2l0aWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGN1cmlvc2l0eUNvdW50ID0gMDtcbiAgICB9XG4gICAgcmFuZG9tQ3VyaW9zaXR5LnRleHRDb250ZW50ID0gYCR7Y3VyaW9zaXRpZXNbY3VyaW9zaXR5Q291bnRdfWA7XG4gIH0sIDYwMDApO1xufVxuXG5kaXNwbGF5Q3VyaW9zaXR5KCk7XG4iLCJleHBvcnQgY29uc3QgbG9jYXRpb25VUkwgPSB7XG4gIGFsYmFuaWE6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUFsYmFuaWEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgYW5kb3JyYTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9QW5kb3JyYSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBhdXN0cmlhOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1BdXN0cmlhJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIGJlbGFydXM6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUJlbGFydXMmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgYmVsZ2l1bTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9QmVsZ2l1bSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBib3NuaWE6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUJvc25pYSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBidWxnYXJpYTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9QnVsZ2FyaWEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgY3JvYXRpYTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9Q3JvYXRpYSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBjeXBydXM6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUN5cHJ1cyZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBjemVjaHJlcHVibGljOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1DemVjaCUyMFJlcHVibGljJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIGRlbm1hcms6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPURlbm1hcmsmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgZXN0b25pYTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9RXN0b25pYSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBmaW5sYW5kOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1GaW5sYW5kJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIGZyYW5jZTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9RnJhbmNlJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIGdlcm1hbnk6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUdlcm1hbnkmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgZ3JlZWNlOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1HcmVlY2UmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgaHVuZ2FyeTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9SHVuZ2FyeSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBpY2VsYW5kOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1JY2VsYW5kJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIGlyZWxhbmQ6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUlyZWxhbmQmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgaXRhbHk6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUl0YWx5JmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIGxhdHZpYTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9TGF0dmlhJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIGxpZWNodGVuc3RlaW46XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPUxpZWNodGVuc3RlaW4mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgbGl0aHVhbmlhOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1MaXRodWFuaWEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgbHV4ZW1ib3VyZzpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9THV4ZW1ib3VyZyZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBtYWx0YTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9TWFsdGEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgbW9sZG92YTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9TW9sZG92YSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBtb25hY286XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPU1vbmFjbyZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBtb250ZW5lZ3JvOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1Nb250ZW5lZ3JvJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIG5ldGhlcmxhbmRzOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1OZXRoZXJsYW5kcyZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBub3J0aG1hY2Vkb25pYTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9Tm9ydGglMjBNYWNlZG9uaWEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgbm9yd2F5OlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1Ob3J3YXkmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgcG9sYW5kOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1Qb2xhbmQmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgcG9ydHVnYWw6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPVBvcnR1Z2FsJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIHJvbWFuaWE6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPVJvbWFuaWEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgcnVzc2lhOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1SdXNzaWEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgc2FubWFyaW5vOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1TYW4lMjBNYXJpbm8mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgc2VyYmlhOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1TZXJiaWEmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgc2xvdmFraWE6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPVNsb3Zha2lhJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIHNsb3ZlbmlhOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1TbG92ZW5pYSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICBzcGFpbjpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9U3BhaW4mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgc3dlZGVuOlxuICAgICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWYxZTE1NmQwMzkwZjRiMTg4NTkxNzU2MDkyMzIyMDkmcT1Td2VkZW4mZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgc3dpdHplcmxhbmQ6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPVN3aXR6ZXJsYW5kJmRheXM9NyZhcWk9eWVzJmFsZXJ0cz1ubycsXG4gIHVrcmFpbmU6XG4gICAgJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjFlMTU2ZDAzOTBmNGIxODg1OTE3NTYwOTIzMjIwOSZxPVVrcmFpbmUmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbiAgdW5pdGVka2luZ2RvbTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9VW5pdGVkJTIwS2luZ2RvbSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm8nLFxuICB2YXRpY2FuY2l0eTpcbiAgICAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9VmF0aWNhbiUyMENpdHkmZGF5cz03JmFxaT15ZXMmYWxlcnRzPW5vJyxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGFGcm9tKHVybCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHRoaXNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gdGhpc0RhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmZvKHVybCkge1xuICBnZXREYXRhRnJvbSh1cmwpLnRoZW4oKHRoaXNEYXRhKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXNEYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgY29uc3QgY291bnRyeSA9IHRoaXNEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgY29uc3QgY3VycmVudFRlbXBfQyA9IHRoaXNEYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgIGNvbnN0IGN1cnJlbnRUZW1wX0YgPSB0aGlzRGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgICAvLyB0b2RheSAvL1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIGNvdW50cnksIGN1cnJlbnRUZW1wX0MsIGN1cnJlbnRUZW1wX0YpO1xuXG4gICAgcmV0dXJuIG5hbWUsIGNvdW50cnksIGN1cnJlbnRUZW1wX0MsIGN1cnJlbnRUZW1wX0Y7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcmVjYXN0Rm9yKGRheSwgdXJsKSB7XG4gIGdldERhdGFGcm9tKHVybCkudGhlbigodGhpc0RhdGEpID0+IHtcbiAgICBjb25zdCBkYXRlID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXRlO1xuICAgIGNvbnN0IHN1bnJpc2UgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmFzdHJvLnN1bnJpc2U7XG4gICAgY29uc3Qgc3Vuc2V0ID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5hc3Ryby5zdW5zZXQ7XG4gICAgY29uc3QgbWF4VGVtcF9jID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWF4dGVtcF9jO1xuICAgIGNvbnN0IG1heFRlbXBfZiA9IHRoaXNEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1heHRlbXBfZjtcbiAgICBjb25zdCBtaW5UZW1wX2MgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5taW50ZW1wX2M7XG4gICAgY29uc3QgbWluVGVtcF9mID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWludGVtcF9mO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICBkYXRlLFxuICAgICAgc3VucmlzZSxcbiAgICAgIHN1bnNldCxcbiAgICAgIG1heFRlbXBfYyxcbiAgICAgIG1heFRlbXBfZixcbiAgICAgIG1pblRlbXBfYyxcbiAgICAgIG1pblRlbXBfZixcbiAgICApO1xuICAgIHJldHVybiBkYXRlLCBzdW5yaXNlLCBzdW5zZXQsIG1heFRlbXBfYywgbWF4VGVtcF9mLCBtaW5UZW1wX2MsIG1pblRlbXBfZjtcbiAgfSk7XG59XG5cbmdldEluZm8obG9jYXRpb25VUkwucG9ydHVnYWwpO1xuZ2V0Rm9yZWNhc3RGb3IoMCwgbG9jYXRpb25VUkwucG9ydHVnYWwpO1xuIiwiaW1wb3J0IHsgbG9jYXRpb25VUkwgfSBmcm9tICcuL2dldERhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2NhdGlvblZhbHVlID0gbG9jYXRpb24udmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG9jYXRpb25WYWx1ZSA9PT0gJycgfHwgbnVsbCkge1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3ItYWN0aXZlJyk7XG4gICAgICBlcnJvci50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBldXJvcGUgY291bnRyeSc7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvblVSTC5oYXNPd25Qcm9wZXJ0eShsb2NhdGlvblZhbHVlKSkge1xuICAgICAgY29uc29sZS5sb2coJ3RydWUnKTtcbiAgICAgIC8vIGRpc3BsYXkgdGhpcyBuZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLWFjdGl2ZScpO1xuICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH0pO1xufVxuXG5oYW5kbGVGb3JtKCk7XG5jb25zb2xlLmxvZyhsb2NhdGlvblVSTCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheUN1cmlvc2l0eSB9IGZyb20gJy4vY2hhbmdlQ3VyaW9zaXR5JztcbmltcG9ydCB7IGhhbmRsZUZvcm0gfSBmcm9tICcuL2hhbmRsZUZvcm0nO1xuaW1wb3J0IHsgZ2V0SW5mbywgZ2V0Rm9yZWNhc3RGb3IgfSBmcm9tICcuL2dldERhdGEnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9