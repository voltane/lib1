webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(13)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(19),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6deec429",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hello_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hello_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__hello_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__hello_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__hello_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_lib_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_lib_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_lib_scss__);



const Lib = {
  install: (Vue, options) => {
    if (install.installed) return;
    install.installed = true;
    Vue.prototype.$lib = new Vue({
      primary: options.primary || '#ccc'
    });
    Object.keys(__WEBPACK_IMPORTED_MODULE_0__components_index__).forEach(componentName => {
      Vue.component(componentName, __WEBPACK_IMPORTED_MODULE_0__components_index__[componentName]);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Lib);

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  computed: {
    color() {
      return this.$lib.primary;
    }
  }
});

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      color: this.color
    })
  }, [_vm._v("\n  I'm div from lib! And i have a colour!\n  That's awesome tho!\n")])
},staticRenderFns: []}

/***/ })
],[9]);
//# sourceMappingURL=lib1.81ffcefb4190d5eab9d3.js.map