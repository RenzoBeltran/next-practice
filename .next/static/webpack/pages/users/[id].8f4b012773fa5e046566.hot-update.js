webpackHotUpdate_N_E("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/renzo/Escritorio/Technologies/frontend/nextproject/pages/users/[id].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar User = function User(_ref) {\n  var user = _ref.user;\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col-md-6 offset-md-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"card\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: user.avatar,\n    alt: \"\",\n    style: {\n      borderRadius: \"50%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 15\n    }\n  }, user.id, \", \", user.first_name, \" \", user.last_name))))), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Profile\"));\n};\n\n_c = User;\n\nUser.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var response, resJson;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            resJson = _context.sent;\n            return _context.abrupt(\"return\", {\n              user: resJson.data\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvLmpzPzJjZWIiXSwibmFtZXMiOlsiVXNlciIsInVzZXIiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiLCJpZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJqc29uIiwicmVzSnNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUEsSUFBSSxDQUFDQyxNQUFmO0FBQXVCLE9BQUcsRUFBQyxFQUEzQjtBQUE4QixTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsSUFBSSxDQUFDRyxFQURSLFFBQ2NILElBQUksQ0FBQ0ksVUFEbkIsT0FDZ0NKLElBQUksQ0FBQ0ssU0FEckMsQ0FERixDQUpGLENBREYsQ0FERixDQURGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGLENBREY7QUFtQkQsQ0FwQkQ7O0tBQU1OLEk7O0FBc0JOQSxJQUFJLENBQUNPLGVBQUw7QUFBQSwrTEFBdUIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRUMsdURBQUssdUNBQWdDRCxHQUFHLENBQUNFLEtBQUosQ0FBVU4sRUFBMUMsRUFEUDs7QUFBQTtBQUNmTyxvQkFEZTtBQUFBO0FBQUEsbUJBRUNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZEOztBQUFBO0FBRWZDLG1CQUZlO0FBQUEsNkNBR2Q7QUFBRVosa0JBQUksRUFBRVksT0FBTyxDQUFDQztBQUFoQixhQUhjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lZCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3VzZXJzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5cbmNvbnN0IFVzZXIgPSAoeyB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSBhbHQ9Jycgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAge3VzZXIuaWR9LCB7dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMT5Qcm9maWxlPC9oMT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YCk7XG4gIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB7IHVzZXI6IHJlc0pzb24uZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ })

})