/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/potdtest",{

/***/ "./pages/potdtest.js":
/*!***************************!*\
  !*** ./pages/potdtest.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const baseUrl = \"https://api.nasa.gov/planetary/apod?api_key=\";\nconst apiKey = \"IzI1tggvGQoqd425WYCQ2nGdY1ubGx9Geg3Yi084\";\nfunction fetchData() {\n    const baseUrl = \"https://api.nasa.gov/planetary/apod?api_key=\";\n    const apiKey = \"IzI1tggvGQoqd425WYCQ2nGdY1ubGx9Geg3Yi084\";\n    try {\n        fetch(baseUrl + apiKey).then((response)=>response.json()).then((json)=>{\n            console.log(json);\n        });\n    } catch (error) {\n        console.log(error);\n    }\n}\nfetchData();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3RkdGVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxVQUFVO0FBQ2hCLE1BQU1DLFNBQVM7QUFFZixTQUFTQyxZQUFXO0lBQ3BCLE1BQU1GLFVBQVU7SUFDaEIsTUFBTUMsU0FBUztJQUVYLElBQUc7UUFDREUsTUFBTUgsVUFBUUMsUUFDYkcsSUFBSSxDQUFDQyxDQUFBQSxXQUFVQSxTQUFTQyxJQUFJLElBQzVCRixJQUFJLENBQUNFLENBQUFBLE9BQU07WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0YsRUFBQyxPQUFNRyxPQUFNO1FBQ1hGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtBQUNGO0FBQ0FQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvdGR0ZXN0LmpzP2JlZDQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS5uYXNhLmdvdi9wbGFuZXRhcnkvYXBvZD9hcGlfa2V5PSc7XG5jb25zdCBhcGlLZXkgPSBcIkl6STF0Z2d2R1FvcWQ0MjVXWUNRMm5HZFkxdWJHeDlHZWczWWkwODRcIjtcblxuZnVuY3Rpb24gZmV0Y2hEYXRhKCl7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLm5hc2EuZ292L3BsYW5ldGFyeS9hcG9kP2FwaV9rZXk9JztcbmNvbnN0IGFwaUtleSA9IFwiSXpJMXRnZ3ZHUW9xZDQyNVdZQ1EybkdkWTF1Ykd4OUdlZzNZaTA4NFwiO1xuXG4gICAgdHJ5e1xuICAgICAgZmV0Y2goYmFzZVVybCthcGlLZXkpXG4gICAgICAudGhlbihyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbj0+e1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgfSlcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG4gIGZldGNoRGF0YSgpIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJhcGlLZXkiLCJmZXRjaERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/potdtest.js\n"));

/***/ })

});