"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movies3";
exports.ids = ["pages/movies3"];
exports.modules = {

/***/ "./pages/movies3.js":
/*!**************************!*\
  !*** ./pages/movies3.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheLink\": () => (/* binding */ TheLink),\n/* harmony export */   \"TheMovies\": () => (/* binding */ TheMovies),\n/* harmony export */   \"default\": () => (/* binding */ Movies3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies3() {\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher);\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        if (url === \"\") setUrl(\"http://www.omdbapi.com/?apikey=218bd007&s=bagdad\");\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url,\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: url !== \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\nasync function theFetcher(url) {\n    if (url === null || url === \"\") return {\n        Search: \"\"\n    };\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction TheMovies({ data , show  }) {\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n        lineNumber: 32,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n        lineNumber: 33,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n        lineNumber: 34,\n        columnNumber: 38\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n                lineNumber: 38,\n                columnNumber: 39\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\nfunction TheLink({ url , handler  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            onClick: handler,\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\karol\\\\BSI\\\\PWeb\\\\pages\\\\movies3.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0I7QUFDTTtBQUNmLFNBQVNFLFVBQVM7SUFFN0IsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sRUFBQ0ksS0FBSSxFQUFFQyxNQUFLLEVBQUMsR0FBR04sK0NBQU1BLENBQUNHLEtBQUtJO0lBQ2xDLE1BQU1DLGlCQUFpQixDQUFDQyxJQUFNO1FBRTFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlQLFFBQVEsSUFBSUMsT0FBTzthQUNsQkEsT0FBTztJQUVoQjtJQUNBLHFCQUNJLDhEQUFDTzs7MEJBQ0csOERBQUNDO2dCQUFRVCxLQUFLQTtnQkFBS1UsU0FBU0w7Ozs7OzswQkFDNUIsOERBQUNNO2dCQUFVVCxNQUFPQyxRQUFNO29CQUFDQSxPQUFNO2dCQUFrQixJQUFHRCxPQUFPQSxPQUFNO29CQUFDVSxRQUFPO2dCQUFFLENBQUM7Z0JBQUdDLE1BQU1iLFFBQVE7Ozs7Ozs7Ozs7OztBQUd6RyxDQUFDO0FBRUQsZUFBZUksV0FBV0osR0FBRyxFQUFFO0lBRTNCLElBQUlBLFFBQVEsSUFBSSxJQUFJQSxRQUFRLElBQUksT0FBTztRQUFDWSxRQUFPO0lBQUU7SUFDakQsTUFBTUUsTUFBTSxNQUFNQyxNQUFNZjtJQUN4QixNQUFNZ0IsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU9BO0FBRVg7QUFDTyxTQUFTTCxVQUFVLEVBQUNULEtBQUksRUFBQ1csS0FBSSxFQUFDLEVBQUM7SUFFbEMsSUFBSSxDQUFDQSxNQUFNLHFCQUFRLDhEQUFDTDs7Ozs7SUFDcEIsSUFBSU4sS0FBS0MsS0FBSyxFQUFFLHFCQUFRLDhEQUFDSztrQkFBSTs7Ozs7O0lBQzdCLElBQUlOLEtBQUtVLE1BQU0sS0FBSyxJQUFLLHFCQUFRLDhEQUFDSjtrQkFBSTs7Ozs7O0lBRXRDLHFCQUNJLDhEQUFDQTtrQkFDS04sS0FBS1UsTUFBTSxDQUFDSyxHQUFHLENBQUUsQ0FBQ0Msa0JBQU0sOERBQUNWOztvQkFBS1UsRUFBRUMsS0FBSztvQkFBQztvQkFBTUQsRUFBRUUsSUFBSTs7Ozs7Ozs7Ozs7O0FBSWhFLENBQUM7QUFFTSxTQUFTWCxRQUFRLEVBQUNULElBQUcsRUFBRVUsUUFBTyxFQUFDLEVBQUM7SUFFbkMscUJBQ0ksOERBQUNGO2tCQUNHLDRFQUFDYTtZQUFFQyxNQUFLO1lBQWNDLFNBQVNiOztnQkFBUztnQkFBRVYsUUFBUSxLQUFLLFlBQVksU0FBUztnQkFBQzs7Ozs7Ozs7Ozs7O0FBSXpGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wd2ViLy4vcGFnZXMvbW92aWVzMy5qcz83YWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMygpe1xyXG5cclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IodXJsLCB0aGVGZXRjaGVyKVxyXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAodXJsID09PSAnJykgc2V0VXJsKCdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9MjE4YmQwMDcmcz1iYWdkYWQnKVxyXG4gICAgICAgIGVsc2Ugc2V0VXJsKCcnKVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXt1cmx9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17IGVycm9yP3tlcnJvcjonRXJybyBuYSBwZXNxdWlzYSd9OiBkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXt1cmwgIT09ICcnfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRoZUZldGNoZXIodXJsKSB7XHJcblxyXG4gICAgaWYgKHVybCA9PT0gbnVsbCB8fCB1cmwgPT09ICcnKSByZXR1cm4ge1NlYXJjaDonJ31cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTW92aWVzKHtkYXRhLHNob3d9KXtcclxuXHJcbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pICAgIFxyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo288L2Rpdj4pXHJcbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKSB9ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7dXJsLCBoYW5kbGVyfSl7ICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZXMzLmpzXCIgb25DbGljaz17aGFuZGxlcn0+IHt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfSA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVN0YXRlIiwiTW92aWVzMyIsInVybCIsInNldFVybCIsImRhdGEiLCJlcnJvciIsInRoZUZldGNoZXIiLCJvbkNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsIlRoZUxpbmsiLCJoYW5kbGVyIiwiVGhlTW92aWVzIiwiU2VhcmNoIiwic2hvdyIsInJlcyIsImZldGNoIiwianNvbiIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies3.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movies3.js"));
module.exports = __webpack_exports__;

})();