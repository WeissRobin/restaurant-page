"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_javascript_menu_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.menu-wrapper h1 {\n  font-family: \"Tangerine\", cursive;\n  font-size: 12rem;\n  text-align: center;\n  color: #e25571;\n  padding-top: 40px;\n  font-weight: 700;\n}\n.menu-wrapper .second {\n  font-family: \"Noto Sans JP\", sans-serif;\n  font-size: 2.2rem;\n  text-align: center;\n  color: #080607;\n  font-weight: 500;\n}\n.menu-wrapper svg {\n  width: 100%;\n}\n\n.menu {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-top: 50px;\n}\n.menu h2 {\n  font-family: \"Tangerine\", cursive;\n  font-size: 6rem;\n  color: #bb576b;\n  text-align: center;\n  font-weight: 700;\n  padding-bottom: 30px;\n}\n.menu .main-menu {\n  grid-area: main;\n}\n.menu .drink-menu {\n  grid-area: drinks;\n}\n.menu .desert-menu {\n  grid-area: deserts;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-areas: \"img heading\" \"img desc\";\n  height: max-content;\n  width: max-content;\n}\n.menu-item img {\n  grid-area: img;\n  max-width: 280px;\n}\n.menu-item .food-heading {\n  grid-area: heading;\n  font-family: \"Noto Sans JP\", sans-serif;\n  font-size: 2.3rem;\n  color: #080607;\n  font-weight: 500;\n  margin-top: auto;\n}\n.menu-item .food-desc {\n  grid-area: desc;\n  font-family: \"Noto Serif JP\", serif;\n  font-size: 1.6rem;\n  color: #bb576b;\n  width: 35ch;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/menu.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/menu.scss":
/*!******************************!*\
  !*** ./src/styles/menu.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/menu.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/menu.scss?");

/***/ }),

/***/ "./src/javascript/menu.js":
/*!********************************!*\
  !*** ./src/javascript/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContent: () => (/* binding */ renderContent)\n/* harmony export */ });\n/* harmony import */ var _styles_menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/menu.scss */ \"./src/styles/menu.scss\");\n/* harmony import */ var _assets_sushi_rolls_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sushi-rolls.png */ \"./src/assets/sushi-rolls.png\");\n/* harmony import */ var _assets_beef_yakitori_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/beef-yakitori.png */ \"./src/assets/beef-yakitori.png\");\n/* harmony import */ var _assets_miso_soup_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/miso-soup.png */ \"./src/assets/miso-soup.png\");\n/* harmony import */ var _assets_teriyaki_chicken_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/teriyaki-chicken.png */ \"./src/assets/teriyaki-chicken.png\");\n/* harmony import */ var _assets_gyoza_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/gyoza.png */ \"./src/assets/gyoza.png\");\n/* harmony import */ var _assets_matcha_tea_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/matcha-tea.webp */ \"./src/assets/matcha-tea.webp\");\n/* harmony import */ var _assets_sake_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/sake.png */ \"./src/assets/sake.png\");\n/* harmony import */ var _assets_shochu_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/shochu.webp */ \"./src/assets/shochu.webp\");\n/* harmony import */ var _assets_mochi_icecream_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/mochi-icecream.png */ \"./src/assets/mochi-icecream.png\");\n/* harmony import */ var _assets_matcha_tiramisu_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/matcha-tiramisu.png */ \"./src/assets/matcha-tiramisu.png\");\n\r\n//dishes\r\n\r\n\r\n\r\n\r\n\r\n//drinks\r\n\r\n\r\n\r\n//deserts\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\n\r\nconst renderContent = () => {\r\n    content.innerHTML = '';\r\n\r\n    const menuSection = document.createElement('section'); menuSection.setAttribute('id', 'menu');\r\n    menuSection.innerHTML = `\r\n    <div class=\"menu-wrapper\">\r\n        <h1>See our menu</h1>\r\n        <svg class=\"doodle\" version=\"1.2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 260 120\" width=\"250\" height=\"115\">\r\n            <path id=\"&lt;Path&gt; copy\" class=\"s0\" fill=\"#e25571\" d=\"m208.3 47.2c-3.3-0.7-6.1-0.2-8.9 0.6-8.5 2.2-16.4 6.1-24.3 10-9.5 4.8-18.9 9.7-28.4 14.4-4 2-8.2 3.7-12.6 4.8-1.6 0.5-3.2 0.7-4.8 0.6-3.7-0.3-5.5-3.2-4.2-6.6 0.7-1.8 1.7-3.3 3-4.7 3.2-3.2 6.4-6.3 9.6-9.5 2.2-2.2 4.3-4.5 5.4-8-2.7-0.3-5.2-0.2-7.6 0.4-8.2 1.8-15.8 5.1-23.3 8.8-9.3 4.6-18.2 10-27.6 14.4-3.8 1.7-7.5 3.6-11.6 4.4-0.9 0.2-1.8 0.4-2.8 0.3-2.5-0.4-3.7-2-3-4.4 0.6-2.3 1.8-4.3 3.4-6 2.7-2.8 5.4-5.6 8.2-8.4 1.9-1.8 3.7-3.8 5.2-6 0.6-1 1.4-1.9 1.1-3.3-1.9-0.4-3.6 0.2-5.4 0.6-9.3 2.5-18 6.4-26.7 10.6-8.8 4.2-17.8 8.2-27.4 10.5-4 1-8.1 1.7-12.3 0.9-3.8-0.7-7.1-2.2-9.2-5.6-1-1.5-1.8-3.2-1.3-5.1 0.7 0 1.1 0.2 1.1 0.8 0.3 5.4 5.1 8.3 10.9 8.5 4.4 0.1 8.7-1 12.8-2.4 9.3-3.1 17.9-7.6 26.3-12.3 7.1-4 14.1-8 21.5-11.2 2.1-0.9 4.1-1.6 6.3-2 3.9-0.6 7.9 1.5 9.6 4.8 1.2 2.3 1 4.4-0.8 6.4-1.6 1.9-3.4 3.4-5.3 4.9-3.7 3-7.6 5.7-11.1 8.9-1.9 1.7-3.7 3.5-4.7 5.9-0.8 1.7-0.3 2.4 1.6 2.1 2.4-0.3 4.7-1.3 6.9-2.3 8.5-3.7 16.4-8.4 24.4-13.1 9.2-5.4 18.5-10.4 28.5-14.1 3.1-1.2 6.3-2.1 9.8-2.1 2.2 0 4 0.7 5.7 2.2 2.5 2.3 2.8 4.9 0.8 7.7-1.1 1.6-2.5 3-4 4.3q-5.7 4.8-11.3 9.6c-1.6 1.4-3.1 2.8-4.1 4.7-1.3 2.4-0.7 3.4 2 3.4 1.5 0 3-0.4 4.4-0.8 7.5-2.2 14.3-5.8 21.1-9.5 10.3-5.5 20.5-11.2 31.1-16.1 4.9-2.3 9.9-4.4 15.2-5.7 1.9-0.5 3.9-0.7 5.8-0.7 2 0.1 3.6 0.8 5.1 2.1 2.5 2.1 2.8 4.6 0.7 7.2-2 2.5-4.5 4.4-6.8 6.5-2.8 2.4-5.6 4.8-8 7.6-1.5 1.7-2.7 3.5-3.2 5.7-0.4 1.8 0.1 2.6 2 2.7 2.2 0 4.1-0.7 6.1-1.4 4.6-1.6 8.9-3.7 13.2-6 12.6-6.7 25.4-12.7 38.3-18.8 0.3-0.1 0.5-0.4 0.9-0.5 0.5-0.2 0.8 0 1.1 0.5 0.2 0.4 0 0.7-0.3 0.9-0.6 0.5-1.3 1-2 1.3-15 7.3-29.5 15.4-44.5 22.4q-4.6 2.1-9.5 3.3c-1.4 0.3-2.8 0.4-4.1 0.1-2.7-0.7-4.2-2.9-4-5.7 0.3-2.9 1.6-5.3 3.2-7.6 2.4-3.4 5.2-6.4 7.9-9.6 1.7-1.9 3.7-3.5 4.9-6.3z\"/>\r\n        </svg>\r\n        <div class=\"second\">Explore Our Delicious Selection</div>\r\n        <div class=\"menu\">\r\n            <div class=\"main-menu\">\r\n                <h2>Dishes</h2>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_sushi_rolls_png__WEBPACK_IMPORTED_MODULE_1__}>\r\n                    <span class=\"food-heading\">Sushi Rolls</span>\r\n                    <span class=\"food-desc\">Delicate rolls of vinegared rice filled with fresh fish, vegetables, and sometimes avocado, served with soy sauce and wasabi.</span>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_beef_yakitori_png__WEBPACK_IMPORTED_MODULE_2__}>\r\n                    <span class=\"food-heading\">Beef Yakitori</span>\r\n                    <span class=\"food-desc\">Grilled skewers of tender beef, marinated in a soy sauce-based mixture, and often paired with green onions or vegetables.</span>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_miso_soup_png__WEBPACK_IMPORTED_MODULE_3__}>\r\n                    <span class=\"food-heading\">Miso Soup</span>\r\n                    <span class=\"food-desc\">A traditional Japanese soup made with dashi broth and fermented soybean paste, often containing tofu cubes, seaweed, and green onions.</span>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_teriyaki_chicken_png__WEBPACK_IMPORTED_MODULE_4__}>\r\n                    <span class=\"food-heading\">Teriyaki Chicken</span>\r\n                    <span class=\"food-desc\">Grilled or pan-fried chicken glazed with a sweet and savory teriyaki sauce, served with steamed rice and vegetables.</span>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_gyoza_png__WEBPACK_IMPORTED_MODULE_5__}>\r\n                    <span class=\"food-heading\">Gyoza</span>\r\n                    <span class=\"food-desc\">Thin dough wrappers filled with a savory mixture of ground meat (usually pork) and vegetables, pan-fried until crispy on the bottom, and served with a dipping sauce.</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"drink-menu\">\r\n                <h2>Drinks</h2>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_matcha_tea_webp__WEBPACK_IMPORTED_MODULE_6__}>\r\n                    <span class=\"food-heading\">Green Tea (Matcha)</span>\r\n                    <span class=\"food-desc\">A finely ground powder of specially grown and processed green tea leaves, traditionally whisked with hot water to create a frothy, invigorating beverage.</span>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_sake_png__WEBPACK_IMPORTED_MODULE_7__}>\r\n                    <span class=\"food-heading\">Sake</span>\r\n                    <span class=\"food-desc\">A Japanese rice wine made through the fermentation of polished rice, with a range of flavors from sweet to dry, often served warm or chilled.</span>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_shochu_webp__WEBPACK_IMPORTED_MODULE_8__}>\r\n                    <span class=\"food-heading\">Shochu</span>\r\n                    <span class=\"food-desc\">A distilled Japanese spirit typically made from barley, sweet potatoes, or rice, with a clear and smooth taste, often enjoyed on the rocks or mixed with water or soda.\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"desert-menu\">\r\n                <h2>Deserts</h2>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_mochi_icecream_png__WEBPACK_IMPORTED_MODULE_9__}>\r\n                    <span class=\"food-heading\">Mochi</span>\r\n                    <span class=\"food-desc\">Soft and chewy rice cakes filled with creamy ice cream, available in various flavors such as green tea, strawberry, and mango.</span>\r\n                </div>\r\n                <div class=\"menu-item\">\r\n                    <img src=${_assets_matcha_tiramisu_png__WEBPACK_IMPORTED_MODULE_10__}>\r\n                    <span class=\"food-heading\">Tiramisu</span>\r\n                    <span class=\"food-desc\">A Japanese twist on the classic Italian dessert, featuring layers of matcha-infused sponge cake, mascarpone cheese, and whipped cream, dusted with powdered green tea.</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    `;\r\n\r\n    content.append(menuSection);\r\n};\n\n//# sourceURL=webpack://restaurant-page/./src/javascript/menu.js?");

/***/ }),

/***/ "./src/assets/beef-yakitori.png":
/*!**************************************!*\
  !*** ./src/assets/beef-yakitori.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c0eb4dcf017b3aedfb5.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/beef-yakitori.png?");

/***/ }),

/***/ "./src/assets/gyoza.png":
/*!******************************!*\
  !*** ./src/assets/gyoza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13f19aa06f59c864d0b2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/gyoza.png?");

/***/ }),

/***/ "./src/assets/matcha-tea.webp":
/*!************************************!*\
  !*** ./src/assets/matcha-tea.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d764f278b57400ae5fe9.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/matcha-tea.webp?");

/***/ }),

/***/ "./src/assets/matcha-tiramisu.png":
/*!****************************************!*\
  !*** ./src/assets/matcha-tiramisu.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18180036e021c530fbb3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/matcha-tiramisu.png?");

/***/ }),

/***/ "./src/assets/miso-soup.png":
/*!**********************************!*\
  !*** ./src/assets/miso-soup.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4889a9583e34b5a3e37.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/miso-soup.png?");

/***/ }),

/***/ "./src/assets/mochi-icecream.png":
/*!***************************************!*\
  !*** ./src/assets/mochi-icecream.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0787ca03682b4a4a1acb.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/mochi-icecream.png?");

/***/ }),

/***/ "./src/assets/sake.png":
/*!*****************************!*\
  !*** ./src/assets/sake.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a13c16e84b312fe4c41a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/sake.png?");

/***/ }),

/***/ "./src/assets/shochu.webp":
/*!********************************!*\
  !*** ./src/assets/shochu.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"27b3bb10558effb57687.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/shochu.webp?");

/***/ }),

/***/ "./src/assets/sushi-rolls.png":
/*!************************************!*\
  !*** ./src/assets/sushi-rolls.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42f9dc693ed06d0f3e05.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/sushi-rolls.png?");

/***/ }),

/***/ "./src/assets/teriyaki-chicken.png":
/*!*****************************************!*\
  !*** ./src/assets/teriyaki-chicken.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd92b83741afbbd37b86.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/teriyaki-chicken.png?");

/***/ })

}]);