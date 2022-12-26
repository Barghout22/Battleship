/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./PressStart2P-Regular.ttf */ \"./src/PressStart2P-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"MyFont\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  font-family: \\\"MyFont\\\";\\n}\\n\\nhtml,\\nbody {\\n  margin: 0;\\n  height: 100%;\\n}\\n.baseContainer {\\n  display: grid;\\n  text-align: center;\\n  width: 100%;\\n  height: 100%;\\n  grid-template: 1fr 9fr/5fr 1fr;\\n}\\n\\n.gameTitle {\\n  grid-area: 1/1/2/2;\\n  font-size: 150%;\\n  padding: 2%;\\n  display: grid;\\n  grid-template: 2fr 1fr/1fr 1fr;\\n}\\n.upperTitle {\\n  grid-area: 1/1/2/3;\\n  text-shadow: 4px 4px #cbd5e1;\\n  font-size: 200%;\\n  margin-bottom: 3%;\\n}\\n.playerName1 {\\n  grid-area: 2/1/3/2;\\n}\\n.playerName2 {\\n  grid-area: 2/2/3/3;\\n}\\n\\n.gameContainer {\\n  grid-area: 2/1/3/2;\\n  display: grid;\\n  grid-template: 12fr 1fr/1fr 1fr;\\n  gap: 5%;\\n  margin-left: 7%;\\n  margin-right: 2%;\\n}\\n.player1GameBoard {\\n  grid-area: 1/1/2/2;\\n}\\n.player2GameBoard {\\n  grid-area: 1/2/2/3;\\n}\\n\\n.player1GameBoard,\\n.player2GameBoard {\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n  gap: 2%;\\n}\\n.displaySentence {\\n  grid-area: 2/1/3/3;\\n}\\n.legends {\\n  grid-area: 2/2/3/3;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: repeat(6, 1fr);\\n}\\n\\n.legendBlock {\\n  display: flex;\\n  font-size: 60%;\\n}\\n\\n.occupiedLegend,\\n.hitAttacksLegend,\\n.missedLegend,\\n.sunkLegend {\\n  width: 70px;\\n  height: 70px;\\n  margin: 5px;\\n}\\n\\n.occupied,\\n.occupiedLegend {\\n  background-color: #a3a3a3;\\n}\\n.hitAttacks,\\n.hitAttacksLegend {\\n  background-color: #ea580c;\\n}\\n.missed,\\n.missedLegend {\\n  background-color: #bef264;\\n}\\n.sunk,\\n.sunkLegend {\\n  background-color: black;\\n}\\n.p {\\n  margin: 10px;\\n}\\n\\n.emptySlot,\\n.emptySelectionSlot {\\n  background-color: #7dd3fc;\\n}\\n\\n.enemySlot:hover {\\n  background-color: #0ea5e9;\\n  margin: 10%;\\n}\\n\\n.gameStartDiv,\\n.endgameMessage {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  display: none;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  color: white;\\n  font-size: 5rem;\\n  padding: 1em;\\n}\\n#restartButton {\\n  font-size: 3rem;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 0.25em 0.5em;\\n  cursor: pointer;\\n}\\n\\n#restartButton:hover {\\n  color: white;\\n  background-color: black;\\n  border-color: white;\\n}\\n\\n.endgameMessage.show {\\n  display: flex;\\n}\\n.gameStartDiv {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: white;\\n  color: black;\\n  display: none;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 2rem;\\n  padding: 1em;\\n}\\n\\n.gameStartDiv.show {\\n  display: grid;\\n  grid-template: 1fr 6fr 1fr/1fr 4fr 1fr;\\n}\\n\\n.confirmSelection,\\n.randomize {\\n  font-size: 2rem;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 0.25em 0.5em;\\n  margin: 0.5em;\\n  cursor: pointer;\\n}\\n\\n.confirmSelection:hover,\\n.randomize:hover {\\n  color: white;\\n  background-color: black;\\n  border-color: white;\\n}\\n\\n.startGameButtons {\\n  grid-area: 3/2/4/3;\\n  display: flex;\\n  justify-content: space-around;\\n  padding: 1em;\\n}\\n\\n.selectionGameboard {\\n  grid-area: 2/2/3/3;\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n  gap: 2%;\\n  width: 70%;\\n  height: 100%;\\n  padding: 10rem;\\n}\\n\\n.shipPlacementTop {\\n  text-align: center;\\n  grid-area: 1/2/2/3;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/GameLoop.js":
/*!*************************!*\
  !*** ./src/GameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameLoop\": () => (/* binding */ GameLoop)\n/* harmony export */ });\n/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ \"./src/players.js\");\n/* harmony import */ var _domInteraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domInteraction */ \"./src/domInteraction.js\");\n\n\nconst GameLoop = (\n  playerName,\n  ShipArrangement,\n  arrangementInputAI,\n  playerRandomizeInput\n) => {\n  const player1 = (0,_players__WEBPACK_IMPORTED_MODULE_0__.player)(playerName, ShipArrangement, playerRandomizeInput);\n  const AI = (0,_players__WEBPACK_IMPORTED_MODULE_0__.player)(\"AI\", arrangementInputAI);\n  let playerTurn = true;\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.intiateGameboards)(player1);\n  const slots = document.querySelectorAll(\".enemySlot\");\n\n\n  // console.log(player1.thisGameboard.showShips());\n  // console.log(AI.thisGameboard.showShips());\n\n  slots.forEach((slot) =>\n    slot.addEventListener(\"click\", () => {\n      if (\n        !player1.thisGameboard.allShipsSunk() &&\n        !AI.thisGameboard.allShipsSunk()\n      ) {\n        if (playerTurn) {\n          playerTurn = false;\n          (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.bottomDisplayText)(AI.thisPlayerName);\n          let desiredValue = slot.getAttribute(\"id\").split(\",\");\n          desiredValue = [\n            Number(desiredValue[0]) - 10,\n            Number(desiredValue[1]) - 10,\n          ];\n          //console.log(`player's attack:${desiredValue}`);\n          slot.className = \" \";\n          player1.playerAttack(desiredValue);\n          AI.thisGameboard.receiveAttack(desiredValue[0], desiredValue[1])\n            ? slot.classList.add(\"hitAttacks\")\n            : slot.classList.add(\"missed\");\n\n          if (AI.thisGameboard.allShipsSunk()) {\n            (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.displayResult)(player1.thisPlayerName);\n            return;\n          }\n\n          let attack = AI.playerAttack([1, 1]);\n          //console.log(`computer attack:${attack}`);\n          const attackSpot = document.getElementById(\n            `${attack[1]},${attack[0]}`\n          );\n\n          setTimeout(() => {\n            (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.bottomDisplayText)(player1.thisPlayerName);\n            attackSpot.className = \" \";\n            player1.thisGameboard.receiveAttack(attack[1], attack[0])\n              ? attackSpot.classList.add(\"hitAttacks\")\n              : attackSpot.classList.add(\"missed\");\n            playerTurn = true;\n            if (player1.thisGameboard.allShipsSunk()) {\n              (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.displayResult)(AI.thisPlayerName);\n            }\n          }, 2000);\n        }\n      }\n    })\n  );\n};\n\n\n//# sourceURL=webpack://battleship/./src/GameLoop.js?");

/***/ }),

/***/ "./src/GameboardFactory.js":
/*!*********************************!*\
  !*** ./src/GameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\");\n\nconst Gameboard = () => {\n  let hits = [];\n  let misses = [];\n  let groupOfShips = [];\n  const createShip = ([x, y], length, axis) => {\n    let dummyShip = [[x, y]];\n    for (let i = 1; i < length; i++) {\n      if (axis === \"x\") {\n        dummyShip = dummyShip.concat([[x + i, y]]);\n      } else {\n        dummyShip = dummyShip.concat([[x, y + i]]);\n      }\n    }\n    groupOfShips.push([(0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(length), dummyShip]);\n  };\n  const receiveAttack = (x, y) => {\n    for (let i = 0; i < groupOfShips.length; i++) {\n      groupOfShips[i][1].forEach((coor) => {\n        if (x == coor[0] && y == coor[1]) {\n          groupOfShips[i][0].isHit();\n          hits = hits.concat([[x, y]]);\n        }\n      });\n    }\n    for (let i = 0; i < hits.length; i++) {\n      if (x == hits[i][0] && y == hits[i][1]) {\n        return true;\n      }\n    }\n    misses = misses.concat([[x, y]]);\n    return false;\n  };\n  const allShipsSunk = () => {\n    let returnValue = true;\n    groupOfShips.forEach((ship) => {\n      returnValue = returnValue && ship[0].isSunk();\n    });\n    return returnValue;\n  };\n  const showHits = () => {\n    return hits;\n  };\n  const showMisses = () => {\n    return misses;\n  };\n  const showShips = () => {\n    let shipInfo = [];\n    for (let i = 0; i < groupOfShips.length; i++) {\n      shipInfo.push(groupOfShips[i][1]);\n    }\n    return shipInfo;\n  };\n  const showAllCoordinates = () => {\n    let shipCoordinates = [];\n    for (let i = 0; i < groupOfShips.length; i++) {\n      shipCoordinates.push(...groupOfShips[i][1]);\n    }\n    return shipCoordinates;\n  };\n  return {\n    createShip,\n    allShipsSunk,\n    receiveAttack,\n    showHits,\n    showMisses,\n    showShips,\n    showAllCoordinates,\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/GameboardFactory.js?");

/***/ }),

/***/ "./src/domInteraction.js":
/*!*******************************!*\
  !*** ./src/domInteraction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bottomDisplayText\": () => (/* binding */ bottomDisplayText),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"displayResult\": () => (/* binding */ displayResult),\n/* harmony export */   \"intiateGameboards\": () => (/* binding */ intiateGameboards)\n/* harmony export */ });\n\n\nfunction intiateGameboards(player1) {\n  const player1Board = document.querySelector(\".player1GameBoard\");\n  const player2Board = document.querySelector(\".player2GameBoard\");\n  clearAll(player1Board);\n  clearAll(player2Board);\n  const playerName = document.querySelector(\".playerName1\");\n  playerName.textContent = `${player1.thisPlayerName}'s board`;\n  setTimeout(() => {\n    bottomDisplayText(player1.thisPlayerName);\n  }, 2000);\n  const shipPlacement = player1.thisGameboard.showAllCoordinates();\n  //console.log(shipPlacement);\n\n  for (let i = 1; i <= 10; i++) {\n    for (let j = 1; j <= 10; j++) {\n      const div1 = document.createElement(\"div\");\n      div1.setAttribute(\"id\", `${j},${i}`);\n      let checker = false;\n      shipPlacement.forEach((ship) => {\n        if (i === ship[1] && j === ship[0]) {\n          div1.classList.add(\"occupied\");\n          checker = true;\n        }\n      });\n      if (!checker) {\n        div1.classList.add(\"emptySlot\");\n      }\n\n      const div2 = document.createElement(\"div\");\n      div2.setAttribute(\"id\", `${j + 10},${i + 10}`);\n      div2.classList.add(\"emptySlot\");\n      div2.classList.add(\"enemySlot\");\n      //   div2.classList.add(\"enemySpot\");\n\n      player1Board.appendChild(div1);\n      player2Board.appendChild(div2);\n    }\n  }\n}\n\nfunction displayResult(name) {\n  const displaySentence = document.querySelector(\".displaySentence\");\n  displaySentence.textContent = ` `;\n  const winingDiv = document.querySelector(\".endgameMessage\");\n  const winningMessage = document.querySelector(\".winningMessage\");\n  winningMessage.textContent = `${name} wins`;\n  winingDiv.classList.add(\"show\");\n}\n\nfunction bottomDisplayText(name) {\n  const displaySentence = document.querySelector(\".displaySentence\");\n  displaySentence.textContent = `it's ${name}'s turn!`;\n}\n\nfunction clearAll(playerDomNode) {\n  while (playerDomNode.firstChild) {\n    playerDomNode.removeChild(playerDomNode.lastChild);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/domInteraction.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _GameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameLoop */ \"./src/GameLoop.js\");\n/* harmony import */ var _domInteraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domInteraction */ \"./src/domInteraction.js\");\n\n\n\nlet player1 = \"player\";\nlet shipPlacement = [\n  [[1, 1], 5, \"x\"],\n  [[6, 3], 4, \"x\"],\n  [[4, 4], 3, \"y\"],\n  [[2, 3], 3, \"y\"],\n  [[8, 8], 2, \"x\"],\n];\nlet AiPlacement = [5, 4, 3, 3, 2];\nconst selectionGameboard = document.querySelector(\".selectionGameboard\");\nfor (let i = 1; i <= 10; i++) {\n  for (let j = 1; j <= 10; j++) {\n    const div1 = document.createElement(\"div\");\n    div1.setAttribute(\"id\", `${j},${i}`);\n    div1.classList.add(\"emptySelectionSlot\");\n    selectionGameboard.appendChild(div1);\n  }\n}\n\nconst randomizeButton = document.querySelector(\".randomize\");\nrandomizeButton.addEventListener(\"click\", () => {\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_2__.clearAll)(selectionGameboard);\n  const gameStartDiv = document.querySelector(\".gameStartDiv\");\n  gameStartDiv.classList.remove(\"show\");\n  (0,_GameLoop__WEBPACK_IMPORTED_MODULE_1__.GameLoop)(player1, AiPlacement, AiPlacement, true);\n});\n\nconst restartButton = document.querySelector(\"#restartButton\");\nrestartButton.addEventListener(\"click\", () => {\n  const winingDiv = document.querySelector(\".endgameMessage\");\n  winingDiv.classList.remove(\"show\");\n  if (randomize) {\n    (0,_GameLoop__WEBPACK_IMPORTED_MODULE_1__.GameLoop)(player1, AiPlacement, AiPlacement, randomize);\n  } else {\n    (0,_GameLoop__WEBPACK_IMPORTED_MODULE_1__.GameLoop)(player1, shipPlacement, AiPlacement);\n  }\n});\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _GameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardFactory */ \"./src/GameboardFactory.js\");\n\nconst player = (playerName, shipsInput, randomize) => {\n  const thisPlayerName = playerName;\n  const thisGameboard = (0,_GameboardFactory__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n  let moves = [];\n\n  const checkShipPlacementValidity = ([x, y], length, axis) => {\n    const ships = thisGameboard.showShips();\n    let checker = false;\n    for (let i = 0; i < ships.length; i++) {\n      for (let j = 0; j < length; j++) {\n        if (axis === \"x\") {\n          checker ||= ships[i].find(\n            (item) => item[0] === x + j && item[1] === y\n          );\n        } else {\n          checker ||= ships[i].find(\n            (item) => item[0] === x && item[1] === y + j\n          );\n        }\n      }\n    }\n    for (let counter = 0; counter < length; counter++) {\n      if (axis === \"x\") {\n        checker ||= x + counter < 1 || x + counter > 10;\n      } else {\n        checker ||= y + counter < 1 || y + counter > 10;\n      }\n    }\n    if (checker) {\n      return \"invalid\";\n    } else return \"valid\";\n  };\n\n  const checkMoveValidity = ([x, y]) => {\n    for (let i = 0; i < moves.length; i++) {\n      if (x == moves[i][0] && y == moves[i][1]) return \"invalid\";\n    }\n    return \"valid\";\n  };\n\n  if (playerName !== \"AI\" && !randomize) {\n    for (let i = 0; i < shipsInput.length; i++) {\n      if (\n        checkShipPlacementValidity(\n          shipsInput[i][0],\n          shipsInput[i][1],\n          shipsInput[i][2]\n        ) === \"valid\"\n      ) {\n        thisGameboard.createShip(\n          shipsInput[i][0],\n          shipsInput[i][1],\n          shipsInput[i][2]\n        );\n      }\n    }\n  } else {\n    for (let i = 0; i < shipsInput.length; i++) {\n      let randomShipPlacement;\n      let randomAxis = [\"x\", \"y\"];\n      let currentAxis;\n\n      do {\n        randomShipPlacement = [\n          Math.floor(Math.random() * 10) + 1,\n          Math.floor(Math.random() * 10) + 1,\n        ];\n        currentAxis = randomAxis[Math.round(Math.random())];\n      } while (\n        checkShipPlacementValidity(\n          randomShipPlacement,\n          shipsInput[i],\n          currentAxis\n        ) === \"invalid\"\n      );\n      thisGameboard.createShip(randomShipPlacement, shipsInput[i], currentAxis);\n    }\n  }\n\n  const playerAttack = ([x, y]) => {\n    let playerMove;\n    if (playerName === \"AI\") {\n      do {\n        playerMove = [\n          Math.floor(Math.random() * 10 + 1),\n          Math.floor(Math.random() * 10 + 1),\n        ];\n      } while (checkMoveValidity(playerMove) === \"invalid\");\n      moves = moves.concat([playerMove]);\n      return playerMove;\n    } else {\n      if (checkMoveValidity([x, y]) === \"valid\") {\n        moves = moves.concat([[x, y]]);\n        return true;\n      } else return false; //playerMove = requestMove();\n    }\n  };\n\n  const checkMoves = () => {\n    return moves;\n  };\n\n  return { thisPlayerName, thisGameboard, playerAttack, checkMoves };\n};\n\n\n//# sourceURL=webpack://battleship/./src/players.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shipFactory\": () => (/* binding */ shipFactory)\n/* harmony export */ });\nconst shipFactory = (length) => {\n  let noOftimesHit = 0;\n  const isHit = () => {\n    noOftimesHit++;\n  };\n  const isSunk = () => {\n    if (length === noOftimesHit) return true;\n    else return false;\n  };\n  return { isHit, isSunk };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

/***/ }),

/***/ "./src/PressStart2P-Regular.ttf":
/*!**************************************!*\
  !*** ./src/PressStart2P-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"21503c6a5385ab41dde9.ttf\";\n\n//# sourceURL=webpack://battleship/./src/PressStart2P-Regular.ttf?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;