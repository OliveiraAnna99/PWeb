"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_components_text-receitas_js",{

/***/ "./pages/elementos/function-soma.js":
/*!******************************************!*\
  !*** ./pages/elementos/function-soma.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"somar\": function() { return /* binding */ somar; }\n/* harmony export */ });\n/* harmony import */ var _elementos_form_soma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementos/form-soma */ \"./pages/elementos/form-soma.js\");\n\nfunction somar() {\n    var valor1 = parseInt(document.getElementById(\"v1\").value);\n    alert(valor1);\n    var valor2 = parseInt(document.getElementById(\"v2\").value);\n    alert(valor2);\n    var resul = valor1 + valor2;\n    return resul;\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbGVtZW50b3MvZnVuY3Rpb24tc29tYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUUrQztBQUMvQyxTQUFTQyxLQUFLLEdBQUU7SUFDWixJQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUNDLEtBQUssQ0FBQztJQUMxREMsS0FBSyxDQUFDTCxNQUFNLENBQUMsQ0FBQztJQUNkLElBQUlNLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO0lBQzFEQyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBRWQsSUFBSUMsS0FBSyxHQUFHUCxNQUFNLEdBQUdNLE1BQU07SUFFM0IsT0FBT0MsS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lbGVtZW50b3MvZnVuY3Rpb24tc29tYS5qcz84ZTdjIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHtGb3JtU29tYX0gZnJvbSAnLi4vZWxlbWVudG9zL2Zvcm0tc29tYSdcclxuZnVuY3Rpb24gc29tYXIoKXtcclxuICAgIGxldCB2YWxvcjEgPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndjEnKS52YWx1ZSk7XHJcbiAgICBhbGVydCh2YWxvcjEpO1xyXG4gICAgbGV0IHZhbG9yMiA9IHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2MicpLnZhbHVlKTtcclxuICAgIGFsZXJ0KHZhbG9yMik7XHJcblxyXG4gICAgbGV0IHJlc3VsID0gdmFsb3IxICsgdmFsb3IyO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVzdWw7XHJcbn1cclxuXHJcbmV4cG9ydCB7c29tYXJ9Il0sIm5hbWVzIjpbIkZvcm1Tb21hIiwic29tYXIiLCJ2YWxvcjEiLCJwYXJzZUludCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImFsZXJ0IiwidmFsb3IyIiwicmVzdWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/elementos/function-soma.js\n"));

/***/ })

});