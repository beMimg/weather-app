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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/stars.jpg */ "./src/img/stars.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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
  transition: var(--trans);
}
.moon {
  background:
    linear-gradient(rgba(38, 60, 109, 0.5), rgba(0, 0, 0, 0.7)),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/cover no-repeat;
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
  opacity: 0;
  visibility: hidden;
  transition: var(--trans);
}
.current-info {
  display: grid;
  grid-area: 2/1;
  align-self: center;
  justify-self: center;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: var(--trans);
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
}
.condition-icon {
  display: grid;
  align-self: center;
  justify-self: center;
}
.day-info {
  display: grid;
  grid-area: 1/2;
  grid-row: span 2;
  align-self: center;
  justify-self: center;
  text-align: center;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
  transition: var(--trans);
}
.active {
  opacity: 1;
  visibility: visible;
}
form {
  display: grid;
  align-self: center;
  justify-self: center;
  position: relative;
  grid-area: 2/3;
  margin: 20px;
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
.deactive {
  display: none;
}
input {
  width: 100%;
  font-size: 1.7rem;
  padding: 20px;
  font-family: var(--font);
  border-radius: 8px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
  color: lightgray;
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
  top: 100px;
  right: 5px;
  transition: var(--trans);
}
.error-active {
  opacity: 1;
  visibility: visible;
}
.footer {
  display: grid;
  grid-column: span 3;
  grid-template-columns: repeat(3, 1fr);
}
.day-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.6);
  margin: 20px;
  padding: 5px;
  border-radius: 12px;
  gap: 20px;
}
.container-header {
  display: flex;
  align-items: center;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-row {
  display: flex;
  align-items: center;
}
.img-weather {
  height: 30px;
  filter: invert(100%);
}
.current-info-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media (max-width: 767px) {
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    gap: 20px;
    background-image: rgba(0, 0, 0, 0.6), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .moon {
    background-image: rgba(0, 0, 0, 0.6), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  .footer {
    display: flex;
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,+BAA+B;EAC/B,wBAAwB;AAC1B;AACA;EACE,wBAAwB;EACxB,SAAS;EACT,aAAa;EACb,eAAe;EACf,aAAa;EACb,kCAAkC;EAClC,qCAAqC;EACrC;;kEAEoD;EACpD,YAAY;EACZ,wBAAwB;AAC1B;AACA;EACE;;kEAE6C;AAC/C;AACA;;;;;;EAME,SAAS;AACX;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,oBAAoB;EACpB,UAAU;EACV,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,SAAS;EACT,oCAAoC;EACpC,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,SAAS;EACT,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,cAAc;EACd,YAAY;AACd;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,wBAAwB;EACxB,kBAAkB;EAClB,2BAA2B;EAC3B,sBAAsB;EACtB,oCAAoC;EACpC,gBAAgB;AAClB;AACA;EACE,yBAAyB;EACzB,SAAS;EACT,eAAe;EACf,eAAe;EACf,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,wBAAwB;AAC1B;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,qCAAqC;AACvC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,oCAAoC;EACpC,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;IACvB,SAAS;IACT,6EAAiE;IACjE,sBAAsB;IACtB,kCAAkC;IAClC,4BAA4B;EAC9B;EACA;IACE,6EAA0D;IAC1D,sBAAsB;IACtB,kCAAkC;IAClC,4BAA4B;EAC9B;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,sBAAsB;EACxB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n* {\n  --font: 'Noto Sans', sans-serif;\n  --trans: all 0.3s linear;\n}\nbody {\n  font-family: var(--font);\n  margin: 0;\n  height: 100vh;\n  font-size: 16px;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-template-columns: repeat(3, 1fr);\n  background:\n    linear-gradient(rgba(25, 82, 83, 0.5), rgba(0, 0, 0, 0.7)),\n    url(./img/polar-lights.jpg) center/cover no-repeat;\n  color: white;\n  transition: var(--trans);\n}\n.moon {\n  background:\n    linear-gradient(rgba(38, 60, 109, 0.5), rgba(0, 0, 0, 0.7)),\n    url(./img/stars.jpg) center/cover no-repeat;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n}\n.header {\n  display: grid;\n  align-self: center;\n  justify-self: center;\n}\n.date {\n  display: grid;\n  grid-area: 1/3;\n  align-self: center;\n  justify-self: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--trans);\n}\n.current-info {\n  display: grid;\n  grid-area: 2/1;\n  align-self: center;\n  justify-self: center;\n  text-align: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--trans);\n  gap: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 20px;\n  border-radius: 10px;\n}\n.condition-icon {\n  display: grid;\n  align-self: center;\n  justify-self: center;\n}\n.day-info {\n  display: grid;\n  grid-area: 1/2;\n  grid-row: span 2;\n  align-self: center;\n  justify-self: center;\n  text-align: center;\n  gap: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 20px;\n  border-radius: 10px;\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--trans);\n}\n.active {\n  opacity: 1;\n  visibility: visible;\n}\nform {\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  position: relative;\n  grid-area: 2/3;\n  margin: 20px;\n}\n.curiosity {\n  display: grid;\n  align-self: center;\n  justify-self: center;\n  padding: 20px;\n  grid-area: 3/1;\n  grid-column: span 3;\n  text-align: center;\n}\n.deactive {\n  display: none;\n}\ninput {\n  width: 100%;\n  font-size: 1.7rem;\n  padding: 20px;\n  font-family: var(--font);\n  border-radius: 8px;\n  border: 1px solid lightgray;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: lightgray;\n}\nform button {\n  background-color: inherit;\n  border: 0;\n  font-size: 2rem;\n  cursor: pointer;\n  top: 25px;\n  right: 15px;\n  position: absolute;\n  color: lightgray;\n}\n.error {\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--trans);\n  position: absolute;\n  top: 100px;\n  right: 5px;\n  transition: var(--trans);\n}\n.error-active {\n  opacity: 1;\n  visibility: visible;\n}\n.footer {\n  display: grid;\n  grid-column: span 3;\n  grid-template-columns: repeat(3, 1fr);\n}\n.day-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  background-color: rgba(0, 0, 0, 0.6);\n  margin: 20px;\n  padding: 5px;\n  border-radius: 12px;\n  gap: 20px;\n}\n.container-header {\n  display: flex;\n  align-items: center;\n}\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.main-row {\n  display: flex;\n  align-items: center;\n}\n.img-weather {\n  height: 30px;\n  filter: invert(100%);\n}\n.current-info-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n@media (max-width: 767px) {\n  body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    background-color: black;\n    gap: 20px;\n    background-image: rgba(0, 0, 0, 0.6), url(./img/polar-lights.jpg);\n    background-size: cover;\n    background-position: center center;\n    background-attachment: fixed;\n  }\n  .moon {\n    background-image: rgba(0, 0, 0, 0.6), url(./img/stars.jpg);\n    background-size: cover;\n    background-position: center center;\n    background-attachment: fixed;\n  }\n  .header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 40px;\n  }\n  .footer {\n    display: flex;\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
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


/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getForecastDay: () => (/* binding */ getForecastDay),
/* harmony export */   getInfo: () => (/* binding */ getInfo)
/* harmony export */ });
/* harmony import */ var _img_water_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/water.png */ "./src/img/water.png");
/* harmony import */ var _img_weather_windy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/weather-windy.png */ "./src/img/weather-windy.png");

let myWaterPNG = new Image();
myWaterPNG.src = _img_water_png__WEBPACK_IMPORTED_MODULE_0__;


let myWindyPNG = new Image();
myWaterPNG.src = _img_weather_windy_png__WEBPACK_IMPORTED_MODULE_1__;

const currentInfo = document.querySelector('.current-info');
const dayInfo = document.querySelector('.day-info');
const dayDate = document.querySelector('.date');
const curiosityInfo = document.querySelector('.curiosity');
const footer = document.querySelector('.footer');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');

async function getDataFrom(url) {
  const response = await fetch(url);
  const thisData = await response.json();
  return thisData;
}

function getInfo(url, locationValue) {
  getDataFrom(url)
    .then((thisData) => {
      let name = thisData.location.name;
      let country = thisData.location.country;
      let currentTemp_C = thisData.current.temp_c;
      let currentTemp_F = thisData.current.temp_f;
      let localTime = thisData.location.localtime;
      let condition = thisData.current.condition.text;
      let conditionIcon = thisData.current.condition.icon;
      let isDay = thisData.current.is_day;
      handleTimeBackground(isDay);
      displayInfo(
        name,
        country,
        currentTemp_C,
        currentTemp_F,
        localTime,
        condition,
        conditionIcon,
      );
    })
    .catch(() => {
      displayError(
        `Cant find "${locationValue}". Please make sure this is a legit location.`,
      );
    });
}

function displayError(msg) {
  const error = document.querySelector('.error');
  error.textContent = msg;
  error.classList.add('error-active');
  title.textContent = 'Globe Weather';
  subtitle.textContent = 'Your Global Weather Companion';
  currentInfo.className = 'current-info';
  currentInfo.innerHTML = '';
  dayDate.className = 'date';
  dayDate.innerHTML = '';
  dayInfo.className = 'day-info ';
  dayInfo.innerHTML = '';
  curiosityInfo.className = 'curiosity';
  document.body.classList.remove('moon');
}

function handleTimeBackground(condition) {
  if (condition === 0) {
    document.body.classList.add('moon');
  } else {
    document.body.classList.remove('moon');
  }
}

function displayInfo(
  name,
  country,
  currentTemp_C,
  currentTemp_F,
  localTime,
  condition,
  conditionIcon,
) {
  dayDate.textContent = `${localTime}`;
  dayDate.className = 'date active';
  dayInfo.className = 'day-info active';
  title.textContent = country;
  subtitle.textContent = name;
  currentInfo.className = `current-info active`;
  currentInfo.innerHTML = `
    <div class="current-info-header">
      <img src="${conditionIcon}" class="condition-icon" alt="">   
      <h1>${condition}</h1>
    </div>
    <p>Current Temperature:</p>
    <h1>${currentTemp_C}°C</h1>
    <h1>${currentTemp_F}°F</h1>
  `;
}

function getForecastDay(day, url) {
  dayInfo.innerHTML = ' ';
  footer.innerHTML = ' ';
  getDataFrom(url).then((thisData) => {
    const date = thisData.forecast.forecastday[day].date;
    const sunrise = thisData.forecast.forecastday[day].astro.sunrise;
    const sunset = thisData.forecast.forecastday[day].astro.sunset;
    const maxTemp_c = thisData.forecast.forecastday[day].day.maxtemp_c;
    const maxTemp_f = thisData.forecast.forecastday[day].day.maxtemp_f;
    const minTemp_c = thisData.forecast.forecastday[day].day.mintemp_c;
    const minTemp_f = thisData.forecast.forecastday[day].day.mintemp_f;
    const condition = thisData.forecast.forecastday[day].day.condition.text;
    const conditionIcon = thisData.forecast.forecastday[day].day.condition.icon;
    const avgHumidity = thisData.forecast.forecastday[day].day.avghumidity;
    const maxWindKph = thisData.forecast.forecastday[day].day.maxwind_kph;
    const maxWindMph = thisData.forecast.forecastday[day].day.maxwind_mph;

    if (day === 0) {
      displayForecastToday(
        sunrise,
        sunset,
        maxTemp_c,
        maxTemp_f,
        minTemp_c,
        minTemp_f,
        avgHumidity,
        maxWindKph,
        maxWindMph,
      );
    } else if (day === 1 || day === 2 || day === 3) {
      displayForecastDay(
        day,
        date,
        maxTemp_c,
        maxTemp_f,
        minTemp_c,
        minTemp_f,
        condition,
        conditionIcon,
        avgHumidity,
        maxWindKph,
        maxWindMph,
      );
    }
  });
}

function displayForecastDay(
  day,
  date,
  maxTemp_c,
  maxTemp_f,
  minTemp_c,
  minTemp_f,
  condition,
  conditionIcon,
  avgHumidity,
  maxWindKph,
  maxWindMph,
) {
  curiosityInfo.classList.add('deactive');
  let dayContainer = document.createElement('div');
  dayContainer.className = 'day-container';
  dayContainer.innerHTML = `
  <div class="container-header">
    <img src="${conditionIcon}" alt="" />
    <h2>${condition}</h2>
  </div>
  <div class="main">
    <p>MAX: <strong> ${maxTemp_c}°C / ${maxTemp_f}°F </strong></p>
    <p>MIN: <strong>${minTemp_c}°C /${minTemp_f}°F</strong></p>
  <div class="main-row">
    <img src="${_img_weather_windy_png__WEBPACK_IMPORTED_MODULE_1__}" class="img-weather" alt="" />
    <p>${maxWindKph}kph / ${maxWindMph}mph</p>
  </div>
  <div class="main-row">
    <img src="${_img_water_png__WEBPACK_IMPORTED_MODULE_0__}" class="img-weather" alt="" />
    <p>${avgHumidity}%</p>
  </div>
  </div>
  <h3>${date}</h3>
  `;

  footer.appendChild(dayContainer);
}

function displayForecastToday(
  sunrise,
  sunset,
  maxTemp_c,
  maxTemp_f,
  minTemp_c,
  minTemp_f,
  avgHumidity,
  maxWindKph,
  maxWindMph,
) {
  dayInfo.innerHTML = `
      <div class="row">
        <p>Sunrise:</p>
        <h2>${sunrise}</h2>
      </div>
      <div class="row">
        <p>Sunset:</p>
        <h2>${sunset}</h2>
      </div>
      <div class="row">
        <p>MAX:</p>
        <h2>${maxTemp_c}°C / ${maxTemp_f}°F</h2>
      </div>
      <div class="row">
        <p>MIN:</p>
        <h2>${minTemp_c}°C / ${minTemp_f}°F</h2>
      </div>
      <div class="row">
      <img src="${_img_weather_windy_png__WEBPACK_IMPORTED_MODULE_1__}" class="img-weather" alt="" />
      <h2>${maxWindKph}kph / ${maxWindMph}mph</h2>
      </div>
      <div class="row">
      <img src="${_img_water_png__WEBPACK_IMPORTED_MODULE_0__}" class="img-weather" alt="" />
      <h2>${avgHumidity}%</h2>
      </div>
  `;
}


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


const form = document.querySelector('form');
const location = document.getElementById('location');
const error = document.querySelector('.error');

function handleForm() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationValue = location.value;
    const newLocationUrl = `https://api.weatherapi.com/v1/forecast.json?key=f1e156d0390f4b18859175609232209&q=${locationValue}&days=7&aqi=yes&alerts=no`;
    if (locationValue === '' || null) {
      error.classList.add('error-active');
      error.textContent = 'Please enter a valid europe country';
    } else {
      (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getInfo)(newLocationUrl, locationValue);
      (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecastDay)(0, newLocationUrl);
      (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecastDay)(1, newLocationUrl);
      (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecastDay)(2, newLocationUrl);
      (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getForecastDay)(3, newLocationUrl);
      error.classList.remove('error-active');
      error.textContent = ' ';
    }
    form.reset();
  });
}


/***/ }),

/***/ "./src/img/polar-lights.jpg":
/*!**********************************!*\
  !*** ./src/img/polar-lights.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2e398735e9c4e706406.jpg";

/***/ }),

/***/ "./src/img/stars.jpg":
/*!***************************!*\
  !*** ./src/img/stars.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6cc71a59289ddfe4059.jpg";

/***/ }),

/***/ "./src/img/water.png":
/*!***************************!*\
  !*** ./src/img/water.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71a4ebd00efc66cf2405.png";

/***/ }),

/***/ "./src/img/weather-windy.png":
/*!***********************************!*\
  !*** ./src/img/weather-windy.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9c38ed14f3abace7ce2.png";

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
/* harmony import */ var _handleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleForm */ "./src/handleForm.js");
/* harmony import */ var _changeCuriosity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeCuriosity */ "./src/changeCuriosity.js");




(0,_handleForm__WEBPACK_IMPORTED_MODULE_1__.handleForm)();
(0,_changeCuriosity__WEBPACK_IMPORTED_MODULE_2__.displayCuriosity)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsMkdBQWtDO0FBQzlFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUhBQXlILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQzdPLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sV0FBVyxZQUFZLE1BQU0sS0FBSyxNQUFNLE9BQU8sTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZ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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDVzs7QUFFckQsdURBQVU7QUFDVixrRUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY2hhbmdlQ3VyaW9zaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGFuZGxlRm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wb2xhci1saWdodHMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvc3RhcnMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgLS1mb250OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgLS10cmFuczogYWxsIDAuM3MgbGluZWFyO1xufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMjUsIDgyLCA4MywgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucyk7XG59XG4ubW9vbiB7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMzgsIDYwLCAxMDksIDAuNSksIHJnYmEoMCwgMCwgMCwgMC43KSksXG4gICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG59XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxucCB7XG4gIG1hcmdpbjogMDtcbn1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuLmRhdGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IDEvMztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucyk7XG59XG4uY3VycmVudC1pbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzE7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucyk7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNvbmRpdGlvbi1pY29uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbi5kYXktaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogMS8yO1xuICBncmlkLXJvdzogc3BhbiAyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zKTtcbn1cbi5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC1hcmVhOiAyLzM7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5jdXJpb3NpdHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBncmlkLWFyZWE6IDMvMTtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRlYWN0aXZlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMjVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5lcnJvciB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zKTtcbn1cbi5lcnJvci1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG4uZGF5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBnYXA6IDIwcHg7XG59XG4uY29udGFpbmVyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW4tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWctd2VhdGhlciB7XG4gIGhlaWdodDogMzBweDtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG4uY3VycmVudC1pbmZvLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJnYmEoMCwgMCwgMCwgMC42KSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICB9XG4gIC5tb29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZ2JhKDAsIDAsIDAsIDAuNiksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgfVxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG4gIC5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDOztrRUFFb0Q7RUFDcEQsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0U7O2tFQUU2QztBQUMvQztBQUNBOzs7Ozs7RUFNRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsU0FBUztFQUNULG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsNkVBQWlFO0lBQ2pFLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw2RUFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgLS1mb250OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tdHJhbnM6IGFsbCAwLjNzIGxpbmVhcjtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYmFja2dyb3VuZDpcXG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMjUsIDgyLCA4MywgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcXG4gICAgdXJsKC4vaW1nL3BvbGFyLWxpZ2h0cy5qcGcpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucyk7XFxufVxcbi5tb29uIHtcXG4gIGJhY2tncm91bmQ6XFxuICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDM4LCA2MCwgMTA5LCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNykpLFxcbiAgICB1cmwoLi9pbWcvc3RhcnMuanBnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5kYXRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zKTtcXG59XFxuLmN1cnJlbnQtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiAyLzE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucyk7XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNvbmRpdGlvbi1pY29uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmRheS1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMjtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zKTtcXG59XFxuLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWFyZWE6IDIvMztcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuLmN1cmlvc2l0eSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ3JpZC1hcmVhOiAzLzE7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVhY3RpdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMjVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuLmVycm9yIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMHB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zKTtcXG59XFxuLmVycm9yLWFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcbi5kYXktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGdhcDogMjBweDtcXG59XFxuLmNvbnRhaW5lci1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWFpbi1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbWctd2VhdGhlciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuLmN1cnJlbnQtaW5mby1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJnYmEoMCwgMCwgMCwgMC42KSwgdXJsKC4vaW1nL3BvbGFyLWxpZ2h0cy5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgfVxcbiAgLm1vb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZ2JhKDAsIDAsIDAsIDAuNiksIHVybCguL2ltZy9zdGFycy5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgfVxcbiAgLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGN1cmlvc2l0aWVzID0gW1xuICBcIlN0cmFuZ2VzdCBSYWluOiBJbiBzb21lIHBhcnRzIG9mIHRoZSB3b3JsZCwgaXQgY2FuIHJhaW4gYW5pbWFscy4gVGhpcyBwaGVub21lbm9uLCBrbm93biBhcyAnYW5pbWFsIHJhaW4sJyBvY2N1cnMgd2hlbiBzbWFsbCBjcmVhdHVyZXMgbGlrZSBmaXNoIG9yIGZyb2dzIGZhbGwgZnJvbSB0aGUgc2t5IGR1cmluZyBhIHJhaW5zdG9ybS5cIixcbiAgJ1dlYXRoZXIgb24gT3RoZXIgUGxhbmV0czogVGhlIHdlYXRoZXIgb24gVmVudXMgaXMgaW5jcmVkaWJseSBoYXJzaC4gSXQgaGFzIGEgY29uc3RhbnQgdGVtcGVyYXR1cmUgb2YgYXJvdW5kIDkwMMKwRiAoNDc1wrBDKSBkdWUgdG8gaXRzIHRoaWNrLCB0b3hpYyBhdG1vc3BoZXJlLCB3aGljaCB0cmFwcyBoZWF0LicsXG4gICdHcmVlbiBGbGFzaCBhdCBTdW5zZXQ6IFVuZGVyIHRoZSByaWdodCBhdG1vc3BoZXJpYyBjb25kaXRpb25zLCB5b3UgY2FuIHdpdG5lc3MgYSByYXJlIG9wdGljYWwgcGhlbm9tZW5vbiBrbm93biBhcyB0aGUgXCJncmVlbiBmbGFzaFwiIGp1c3QgYXMgdGhlIHN1biBzZXRzLiBJdCBhcHBlYXJzIGFzIGEgZ3JlZW4gc3BvdCBmb3IgYSBmZXcgc2Vjb25kcyBhYm92ZSB0aGUgdXBwZXIgcmltIG9mIHRoZSBzdW4uJyxcbiAgJ1RodW5kZXIgU25vdzogVGh1bmRlcnN0b3JtcyBjYW4gb2NjdXIgZHVyaW5nIHNub3dmYWxsLCBjcmVhdGluZyBhIHVuaXF1ZSBwaGVub21lbm9uIGtub3duIGFzIFwidGh1bmRlcnNub3cuXCIgTGlnaHRuaW5nIGR1cmluZyBhIHNub3dzdG9ybSBjYW4gYmUgcXVpdGUgYSBzaWdodCEnLFxuICAnV2VhdGhlciBhbmQgTW9vZDogTWFueSBwZW9wbGUgYmVsaWV2ZSB0aGF0IHdlYXRoZXIgY2FuIGFmZmVjdCB0aGVpciBtb29kLiBTb21lIGV4cGVyaWVuY2UgaW5jcmVhc2VkIGhhcHBpbmVzcyBhbmQgZW5lcmd5IG9uIHN1bm55IGRheXMsIHdoaWxlIG90aGVycyBmZWVsIG1vcmUgcmVsYXhlZCBkdXJpbmcgYSBnZW50bGUgcmFpbi4nLFxuICAnTWljcm9jbGltYXRlczogRXZlbiB3aXRoaW4gYSBzbWFsbCBhcmVhLCB0aGVyZSBjYW4gYmUgZGlzdGluY3QgbWljcm9jbGltYXRlcy4gRm9yIGV4YW1wbGUsIGEgY2l0eSBtYXkgaGF2ZSBjb29sZXIgdGVtcGVyYXR1cmVzIGluIHBhcmtzIGFuZCBncmVlbiBzcGFjZXMgZHVlIHRvIHRoZSB1cmJhbiBoZWF0IGlzbGFuZCBlZmZlY3QuJyxcbiAgJ1RlbXBlcmF0dXJlIEludmVyc2lvbjogSW4gc29tZSBjYXNlcywgdGVtcGVyYXR1cmUgY2FuIGluY3JlYXNlIHdpdGggYWx0aXR1ZGUsIHdoaWNoIGlzIGNhbGxlZCBhIHRlbXBlcmF0dXJlIGludmVyc2lvbi4gVGhpcyBwaGVub21lbm9uIGNhbiB0cmFwIHBvbGx1dGlvbiBjbG9zZSB0byB0aGUgZ3JvdW5kIGFuZCBsZWFkIHRvIHBvb3IgYWlyIHF1YWxpdHkuJyxcbiAgJ0Ryb3VnaHQgYW5kIENpdmlsaXphdGlvbjogVGhyb3VnaG91dCBoaXN0b3J5LCBkcm91Z2h0cyBoYXZlIHBsYXllZCBhIHNpZ25pZmljYW50IHJvbGUgaW4gdGhlIHJpc2UgYW5kIGZhbGwgb2YgY2l2aWxpemF0aW9ucy4gVGhleSBjYW4gbGVhZCB0byBjcm9wIGZhaWx1cmUsIGZvb2Qgc2hvcnRhZ2VzLCBhbmQgc29jaWFsIHVucmVzdC4nLFxuICAnRXh0cmVtZSBUZW1wZXJhdHVyZSBTd2luZ3M6IEluIDE5NzIsIHRoZSB0b3duIG9mIExvbWEsIE1vbnRhbmEsIGV4cGVyaWVuY2VkIHRoZSBtb3N0IGRyYW1hdGljIHRlbXBlcmF0dXJlIGNoYW5nZSBldmVyIHJlY29yZGVkIGluIGEgMjQtaG91ciBwZXJpb2QuIFRoZSB0ZW1wZXJhdHVyZSBwbHVtbWV0ZWQgZnJvbSAxMDPCsEYgKDM5LjTCsEMpIHRvIC01NMKwRiAoLTQ3LjjCsEMpIScsXG5dO1xuXG5jb25zdCByYW5kb21DdXJpb3NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tX2N1cmlvc2l0eScpO1xubGV0IGN1cmlvc2l0eUNvdW50ID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJpb3NpdHkoKSB7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBjdXJpb3NpdHlDb3VudCsrO1xuICAgIGlmIChjdXJpb3NpdHlDb3VudCA+IGN1cmlvc2l0aWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGN1cmlvc2l0eUNvdW50ID0gMDtcbiAgICB9XG4gICAgcmFuZG9tQ3VyaW9zaXR5LnRleHRDb250ZW50ID0gYCR7Y3VyaW9zaXRpZXNbY3VyaW9zaXR5Q291bnRdfWA7XG4gIH0sIDYwMDApO1xufVxuIiwiaW1wb3J0IHdhdGVyUG5nIGZyb20gJy4vaW1nL3dhdGVyLnBuZyc7XG5sZXQgbXlXYXRlclBORyA9IG5ldyBJbWFnZSgpO1xubXlXYXRlclBORy5zcmMgPSB3YXRlclBuZztcblxuaW1wb3J0IHdpbmR5UG5nIGZyb20gJy4vaW1nL3dlYXRoZXItd2luZHkucG5nJztcbmxldCBteVdpbmR5UE5HID0gbmV3IEltYWdlKCk7XG5teVdhdGVyUE5HLnNyYyA9IHdpbmR5UG5nO1xuXG5jb25zdCBjdXJyZW50SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWluZm8nKTtcbmNvbnN0IGRheUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWluZm8nKTtcbmNvbnN0IGRheURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuY29uc3QgY3VyaW9zaXR5SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJpb3NpdHknKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJ0aXRsZScpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbSh1cmwpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCB0aGlzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHRoaXNEYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5mbyh1cmwsIGxvY2F0aW9uVmFsdWUpIHtcbiAgZ2V0RGF0YUZyb20odXJsKVxuICAgIC50aGVuKCh0aGlzRGF0YSkgPT4ge1xuICAgICAgbGV0IG5hbWUgPSB0aGlzRGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgbGV0IGNvdW50cnkgPSB0aGlzRGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgbGV0IGN1cnJlbnRUZW1wX0MgPSB0aGlzRGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICAgIGxldCBjdXJyZW50VGVtcF9GID0gdGhpc0RhdGEuY3VycmVudC50ZW1wX2Y7XG4gICAgICBsZXQgbG9jYWxUaW1lID0gdGhpc0RhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xuICAgICAgbGV0IGNvbmRpdGlvbiA9IHRoaXNEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgICBsZXQgY29uZGl0aW9uSWNvbiA9IHRoaXNEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgICBsZXQgaXNEYXkgPSB0aGlzRGF0YS5jdXJyZW50LmlzX2RheTtcbiAgICAgIGhhbmRsZVRpbWVCYWNrZ3JvdW5kKGlzRGF5KTtcbiAgICAgIGRpc3BsYXlJbmZvKFxuICAgICAgICBuYW1lLFxuICAgICAgICBjb3VudHJ5LFxuICAgICAgICBjdXJyZW50VGVtcF9DLFxuICAgICAgICBjdXJyZW50VGVtcF9GLFxuICAgICAgICBsb2NhbFRpbWUsXG4gICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgY29uZGl0aW9uSWNvbixcbiAgICAgICk7XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgZGlzcGxheUVycm9yKFxuICAgICAgICBgQ2FudCBmaW5kIFwiJHtsb2NhdGlvblZhbHVlfVwiLiBQbGVhc2UgbWFrZSBzdXJlIHRoaXMgaXMgYSBsZWdpdCBsb2NhdGlvbi5gLFxuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKG1zZykge1xuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xuICBlcnJvci50ZXh0Q29udGVudCA9IG1zZztcbiAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3ItYWN0aXZlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0dsb2JlIFdlYXRoZXInO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9ICdZb3VyIEdsb2JhbCBXZWF0aGVyIENvbXBhbmlvbic7XG4gIGN1cnJlbnRJbmZvLmNsYXNzTmFtZSA9ICdjdXJyZW50LWluZm8nO1xuICBjdXJyZW50SW5mby5pbm5lckhUTUwgPSAnJztcbiAgZGF5RGF0ZS5jbGFzc05hbWUgPSAnZGF0ZSc7XG4gIGRheURhdGUuaW5uZXJIVE1MID0gJyc7XG4gIGRheUluZm8uY2xhc3NOYW1lID0gJ2RheS1pbmZvICc7XG4gIGRheUluZm8uaW5uZXJIVE1MID0gJyc7XG4gIGN1cmlvc2l0eUluZm8uY2xhc3NOYW1lID0gJ2N1cmlvc2l0eSc7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9vbicpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUaW1lQmFja2dyb3VuZChjb25kaXRpb24pIHtcbiAgaWYgKGNvbmRpdGlvbiA9PT0gMCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9vbicpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9vbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmZvKFxuICBuYW1lLFxuICBjb3VudHJ5LFxuICBjdXJyZW50VGVtcF9DLFxuICBjdXJyZW50VGVtcF9GLFxuICBsb2NhbFRpbWUsXG4gIGNvbmRpdGlvbixcbiAgY29uZGl0aW9uSWNvbixcbikge1xuICBkYXlEYXRlLnRleHRDb250ZW50ID0gYCR7bG9jYWxUaW1lfWA7XG4gIGRheURhdGUuY2xhc3NOYW1lID0gJ2RhdGUgYWN0aXZlJztcbiAgZGF5SW5mby5jbGFzc05hbWUgPSAnZGF5LWluZm8gYWN0aXZlJztcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBjb3VudHJ5O1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGN1cnJlbnRJbmZvLmNsYXNzTmFtZSA9IGBjdXJyZW50LWluZm8gYWN0aXZlYDtcbiAgY3VycmVudEluZm8uaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LWluZm8taGVhZGVyXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7Y29uZGl0aW9uSWNvbn1cIiBjbGFzcz1cImNvbmRpdGlvbi1pY29uXCIgYWx0PVwiXCI+ICAgXG4gICAgICA8aDE+JHtjb25kaXRpb259PC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8cD5DdXJyZW50IFRlbXBlcmF0dXJlOjwvcD5cbiAgICA8aDE+JHtjdXJyZW50VGVtcF9DfcKwQzwvaDE+XG4gICAgPGgxPiR7Y3VycmVudFRlbXBfRn3CsEY8L2gxPlxuICBgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9yZWNhc3REYXkoZGF5LCB1cmwpIHtcbiAgZGF5SW5mby5pbm5lckhUTUwgPSAnICc7XG4gIGZvb3Rlci5pbm5lckhUTUwgPSAnICc7XG4gIGdldERhdGFGcm9tKHVybCkudGhlbigodGhpc0RhdGEpID0+IHtcbiAgICBjb25zdCBkYXRlID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXRlO1xuICAgIGNvbnN0IHN1bnJpc2UgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmFzdHJvLnN1bnJpc2U7XG4gICAgY29uc3Qgc3Vuc2V0ID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5hc3Ryby5zdW5zZXQ7XG4gICAgY29uc3QgbWF4VGVtcF9jID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWF4dGVtcF9jO1xuICAgIGNvbnN0IG1heFRlbXBfZiA9IHRoaXNEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5Lm1heHRlbXBfZjtcbiAgICBjb25zdCBtaW5UZW1wX2MgPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5taW50ZW1wX2M7XG4gICAgY29uc3QgbWluVGVtcF9mID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWludGVtcF9mO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IHRoaXNEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBjb25zdCBhdmdIdW1pZGl0eSA9IHRoaXNEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmF2Z2h1bWlkaXR5O1xuICAgIGNvbnN0IG1heFdpbmRLcGggPSB0aGlzRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5tYXh3aW5kX2twaDtcbiAgICBjb25zdCBtYXhXaW5kTXBoID0gdGhpc0RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkubWF4d2luZF9tcGg7XG5cbiAgICBpZiAoZGF5ID09PSAwKSB7XG4gICAgICBkaXNwbGF5Rm9yZWNhc3RUb2RheShcbiAgICAgICAgc3VucmlzZSxcbiAgICAgICAgc3Vuc2V0LFxuICAgICAgICBtYXhUZW1wX2MsXG4gICAgICAgIG1heFRlbXBfZixcbiAgICAgICAgbWluVGVtcF9jLFxuICAgICAgICBtaW5UZW1wX2YsXG4gICAgICAgIGF2Z0h1bWlkaXR5LFxuICAgICAgICBtYXhXaW5kS3BoLFxuICAgICAgICBtYXhXaW5kTXBoLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGRheSA9PT0gMSB8fCBkYXkgPT09IDIgfHwgZGF5ID09PSAzKSB7XG4gICAgICBkaXNwbGF5Rm9yZWNhc3REYXkoXG4gICAgICAgIGRheSxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgbWF4VGVtcF9jLFxuICAgICAgICBtYXhUZW1wX2YsXG4gICAgICAgIG1pblRlbXBfYyxcbiAgICAgICAgbWluVGVtcF9mLFxuICAgICAgICBjb25kaXRpb24sXG4gICAgICAgIGNvbmRpdGlvbkljb24sXG4gICAgICAgIGF2Z0h1bWlkaXR5LFxuICAgICAgICBtYXhXaW5kS3BoLFxuICAgICAgICBtYXhXaW5kTXBoLFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9yZWNhc3REYXkoXG4gIGRheSxcbiAgZGF0ZSxcbiAgbWF4VGVtcF9jLFxuICBtYXhUZW1wX2YsXG4gIG1pblRlbXBfYyxcbiAgbWluVGVtcF9mLFxuICBjb25kaXRpb24sXG4gIGNvbmRpdGlvbkljb24sXG4gIGF2Z0h1bWlkaXR5LFxuICBtYXhXaW5kS3BoLFxuICBtYXhXaW5kTXBoLFxuKSB7XG4gIGN1cmlvc2l0eUluZm8uY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmUnKTtcbiAgbGV0IGRheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXlDb250YWluZXIuY2xhc3NOYW1lID0gJ2RheS1jb250YWluZXInO1xuICBkYXlDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWhlYWRlclwiPlxuICAgIDxpbWcgc3JjPVwiJHtjb25kaXRpb25JY29ufVwiIGFsdD1cIlwiIC8+XG4gICAgPGgyPiR7Y29uZGl0aW9ufTwvaDI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgIDxwPk1BWDogPHN0cm9uZz4gJHttYXhUZW1wX2N9wrBDIC8gJHttYXhUZW1wX2Z9wrBGIDwvc3Ryb25nPjwvcD5cbiAgICA8cD5NSU46IDxzdHJvbmc+JHttaW5UZW1wX2N9wrBDIC8ke21pblRlbXBfZn3CsEY8L3N0cm9uZz48L3A+XG4gIDxkaXYgY2xhc3M9XCJtYWluLXJvd1wiPlxuICAgIDxpbWcgc3JjPVwiJHt3aW5keVBuZ31cIiBjbGFzcz1cImltZy13ZWF0aGVyXCIgYWx0PVwiXCIgLz5cbiAgICA8cD4ke21heFdpbmRLcGh9a3BoIC8gJHttYXhXaW5kTXBofW1waDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtYWluLXJvd1wiPlxuICAgIDxpbWcgc3JjPVwiJHt3YXRlclBuZ31cIiBjbGFzcz1cImltZy13ZWF0aGVyXCIgYWx0PVwiXCIgLz5cbiAgICA8cD4ke2F2Z0h1bWlkaXR5fSU8L3A+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGgzPiR7ZGF0ZX08L2gzPlxuICBgO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChkYXlDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9yZWNhc3RUb2RheShcbiAgc3VucmlzZSxcbiAgc3Vuc2V0LFxuICBtYXhUZW1wX2MsXG4gIG1heFRlbXBfZixcbiAgbWluVGVtcF9jLFxuICBtaW5UZW1wX2YsXG4gIGF2Z0h1bWlkaXR5LFxuICBtYXhXaW5kS3BoLFxuICBtYXhXaW5kTXBoLFxuKSB7XG4gIGRheUluZm8uaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8cD5TdW5yaXNlOjwvcD5cbiAgICAgICAgPGgyPiR7c3VucmlzZX08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxwPlN1bnNldDo8L3A+XG4gICAgICAgIDxoMj4ke3N1bnNldH08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxwPk1BWDo8L3A+XG4gICAgICAgIDxoMj4ke21heFRlbXBfY33CsEMgLyAke21heFRlbXBfZn3CsEY8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxwPk1JTjo8L3A+XG4gICAgICAgIDxoMj4ke21pblRlbXBfY33CsEMgLyAke21pblRlbXBfZn3CsEY8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7d2luZHlQbmd9XCIgY2xhc3M9XCJpbWctd2VhdGhlclwiIGFsdD1cIlwiIC8+XG4gICAgICA8aDI+JHttYXhXaW5kS3BofWtwaCAvICR7bWF4V2luZE1waH1tcGg8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7d2F0ZXJQbmd9XCIgY2xhc3M9XCJpbWctd2VhdGhlclwiIGFsdD1cIlwiIC8+XG4gICAgICA8aDI+JHthdmdIdW1pZGl0eX0lPC9oMj5cbiAgICAgIDwvZGl2PlxuICBgO1xufVxuIiwiaW1wb3J0IHsgZ2V0Rm9yZWNhc3REYXksIGdldEluZm8gfSBmcm9tICcuL2dldERhdGEnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbmNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGb3JtKCkge1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxvY2F0aW9uVmFsdWUgPSBsb2NhdGlvbi52YWx1ZTtcbiAgICBjb25zdCBuZXdMb2NhdGlvblVybCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1mMWUxNTZkMDM5MGY0YjE4ODU5MTc1NjA5MjMyMjA5JnE9JHtsb2NhdGlvblZhbHVlfSZkYXlzPTcmYXFpPXllcyZhbGVydHM9bm9gO1xuICAgIGlmIChsb2NhdGlvblZhbHVlID09PSAnJyB8fCBudWxsKSB7XG4gICAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvci1hY3RpdmUnKTtcbiAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGV1cm9wZSBjb3VudHJ5JztcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0SW5mbyhuZXdMb2NhdGlvblVybCwgbG9jYXRpb25WYWx1ZSk7XG4gICAgICBnZXRGb3JlY2FzdERheSgwLCBuZXdMb2NhdGlvblVybCk7XG4gICAgICBnZXRGb3JlY2FzdERheSgxLCBuZXdMb2NhdGlvblVybCk7XG4gICAgICBnZXRGb3JlY2FzdERheSgyLCBuZXdMb2NhdGlvblVybCk7XG4gICAgICBnZXRGb3JlY2FzdERheSgzLCBuZXdMb2NhdGlvblVybCk7XG4gICAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1hY3RpdmUnKTtcbiAgICAgIGVycm9yLnRleHRDb250ZW50ID0gJyAnO1xuICAgIH1cbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhhbmRsZUZvcm0gfSBmcm9tICcuL2hhbmRsZUZvcm0nO1xuaW1wb3J0IHsgZGlzcGxheUN1cmlvc2l0eSB9IGZyb20gJy4vY2hhbmdlQ3VyaW9zaXR5JztcblxuaGFuZGxlRm9ybSgpO1xuZGlzcGxheUN1cmlvc2l0eSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9