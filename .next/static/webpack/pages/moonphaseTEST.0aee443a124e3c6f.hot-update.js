"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/moonphaseTEST",{

/***/ "./pages/moonphaseTEST.js":
/*!********************************!*\
  !*** ./pages/moonphaseTEST.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// const inter = Inter({ subsets: ['latin']})\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const http = __webpack_require__(/*! https */ \"./node_modules/next/dist/compiled/https-browserify/index.js\");\n    const options = {\n        \"method\": \"POST\",\n        \"hostname\": \"api.astronomyapi.com\",\n        \"port\": null,\n        \"path\": \"/api/v2/studio/moon-phase\",\n        \"headers\": {\n            \"Authorization\": \"Basic MjY2Y2Q3OWEtNWEyYy00MGQxLWI4NGUtNWQyZTRmNWEwOWI3OjRhY2MyNjQ0ZjEwMjg4MWY3Y2Q2MDhkYjliOGE2ODliOGQzYzkxOTAxZmVkODE3MDcyNTU0NDQ1M2Q2YmUxYWQyOTMxMjI3MDZlODAyM2ExMDlmMjAxMjFlYjU5MTEzZGNkMDNhY2EwNTI2NjY5OWM2ZjZhNWJjNDU4MGFhNjY5NGM5ZWRmNmQ1MjUwNmIzZjRkMzEzYjFjZmMyYWZhZjU5OTUzODg3YzM4ZWRkMjdhZmRhNWZjZWJhZDIxN2Y0YjljZjc0NzY3NmQxYjBiMDdmNDdlY2Y1NGNjMDE2ZmJl\"\n        }\n    };\n    const req = http.request(options, function(res) {\n        const chunks = [];\n        res.on(\"data\", function(chunk) {\n            chunks.push(chunk);\n        });\n        res.on(\"end\", function() {\n            const body = Buffer.concat(chunks);\n            console.log(body.toString());\n        });\n    });\n    req.write('{\"style\":{\"moonStyle\":\"default\",\"backgroundStyle\":\"stars\",\"backgroundColor\":\"#000000\",\"headingColor\":\"#ffffff\",\"textColor\":\"#ffffff\"},\"observer\":{\"latitude\":33.775867,\"longitude\":-84.39733,\"date\":\"2023-01-24\"},\"view\":{\"type\":\"portrait-simple\",\"parameters\":{}}}');\n    req.end();\n    //JS HTTP\n    // const data = \"{\\\"style\\\":{\\\"moonStyle\\\":\\\"default\\\",\\\"backgroundStyle\\\":\\\"stars\\\",\\\"backgroundColor\\\":\\\"#000000\\\",\\\"headingColor\\\":\\\"#ffffff\\\",\\\"textColor\\\":\\\"#ffffff\\\"},\\\"observer\\\":{\\\"latitude\\\":33.775867,\\\"longitude\\\":-84.39733,\\\"date\\\":\\\"2023-01-24\\\"},\\\"view\\\":{\\\"type\\\":\\\"portrait-simple\\\",\\\"parameters\\\":{}}}\";\n    // const xhr = new XMLHttpRequest();\n    // xhr.withCredentials = true;\n    // xhr.addEventListener(\"readystatechange\", function () {\n    //   if (this.readyState === this.DONE) {\n    //     console.log(this.responseText);\n    //   }\n    // });\n    // xhr.open(\"POST\", \"https://api.astronomyapi.com/api/v2/studio/moon-phase\");\n    // xhr.setRequestHeader(\"Authorization\", \"Basic MjY2Y2Q3OWEtNWEyYy00MGQxLWI4NGUtNWQyZTRmNWEwOWI3OjRhY2MyNjQ0ZjEwMjg4MWY3Y2Q2MDhkYjliOGE2ODliOGQzYzkxOTAxZmVkODE3MDcyNTU0NDQ1M2Q2YmUxYWQyOTMxMjI3MDZlODAyM2ExMDlmMjAxMjFlYjU5MTEzZGNkMDNhY2EwNTI2NjY5OWM2ZjZhNWJjNDU4MGFhNjY5NGM5ZWRmNmQ1MjUwNmIzZjRkMzEzYjFjZmMyYWZhZjU5OTUzODg3YzM4ZWRkMjdhZmRhNWZjZWJhZDIxN2Y0YjljZjc0NzY3NmQxYjBiMDdmNDdlY2Y1NGNjMDE2ZmJl\");\n    // xhr.send(data);\n    //RAPID \n    //  const [data, setData] = useState();\n    //  useEffect(() => {\n    //    const options = {\n    //     method: 'POST',\n    //     headers: {\n    //       'content-type': 'application/json',\n    //       'X-RapidAPI-Key': 'cd1d39da66msh0174a15141798a2p1bcccajsn97a12c5766e4',\n    //       'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'\n    //     },\n    //     body: '{\"format\":\"png\",\"observer\":{\"date\":\"2020-11-01\",\"latitude\":6.56774,\"longitude\":79.88956},\"style\":{\"backgroundColor\":\"red\",\"backgroundStyle\":\"stars\",\"headingColor\":\"white\",\"moonStyle\":\"sketch\",\"textColor\":\"red\"},\"view\":{\"type\":\"portrait-simple\"}}'\n    //   };\n    //   fetch('https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase', options)\n    // \t.then(response => response.json())\n    // \t.then(response => {\n    //     console.log(response)\n    //     setData(response)\n    //   })\n    // \t.catch(err => console.error(err));\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Skybound\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\pages\\\\moonphaseTEST.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\pages\\\\moonphaseTEST.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    \"API Info Test:\",\n                    data && data.map((d)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: d.imageUrl,\n                                width: \"50\",\n                                height: \"50\",\n                                alt: d.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\pages\\\\moonphaseTEST.js\",\n                                lineNumber: 101,\n                                columnNumber: 17\n                            }, this)\n                        }, d.data, false, {\n                            fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\pages\\\\moonphaseTEST.js\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\pages\\\\moonphaseTEST.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ADCD\\\\Final Project\\\\SkyBound-App\\\\pages\\\\moonphaseTEST.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lif/WApPZI6pT1W4YSJwxeyij3U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb29ucGhhc2VURVNULmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNFO0FBQ2dCO0FBQ0g7QUFFbEI7QUFFekIsNkNBQTZDO0FBRzlCLFNBQVNNLE9BQU87O0lBRTdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUE7SUFFOUIsTUFBTU0sT0FBT0MsbUJBQU9BLENBQUMsMEVBQU87SUFFNUIsTUFBTUMsVUFBVTtRQUNkLFVBQVU7UUFDVixZQUFZO1FBQ1osUUFBUSxJQUFJO1FBQ1osUUFBUTtRQUNSLFdBQVc7WUFDVCxpQkFBaUI7UUFDbkI7SUFDRjtJQUVBLE1BQU1DLE1BQU1ILEtBQUtJLE9BQU8sQ0FBQ0YsU0FBUyxTQUFVRyxHQUFHLEVBQUU7UUFDL0MsTUFBTUMsU0FBUyxFQUFFO1FBRWpCRCxJQUFJRSxFQUFFLENBQUMsUUFBUSxTQUFVQyxLQUFLLEVBQUU7WUFDOUJGLE9BQU9HLElBQUksQ0FBQ0Q7UUFDZDtRQUVBSCxJQUFJRSxFQUFFLENBQUMsT0FBTyxXQUFZO1lBQ3hCLE1BQU1HLE9BQU9DLE1BQU1BLENBQUNDLE1BQU0sQ0FBQ047WUFDM0JPLFFBQVFDLEdBQUcsQ0FBQ0osS0FBS0ssUUFBUTtRQUMzQjtJQUNGO0lBRUFaLElBQUlhLEtBQUssQ0FBQztJQUNWYixJQUFJYyxHQUFHO0lBSVQsU0FBUztJQUNULCtUQUErVDtJQUUvVCxvQ0FBb0M7SUFDcEMsOEJBQThCO0lBRTlCLHlEQUF5RDtJQUN6RCx5Q0FBeUM7SUFDekMsc0NBQXNDO0lBQ3RDLE1BQU07SUFDTixNQUFNO0lBRU4sNkVBQTZFO0lBQzdFLCtZQUErWTtJQUUvWSxrQkFBa0I7SUFFcEIsUUFBUTtJQUNSLHVDQUF1QztJQUV2QyxxQkFBcUI7SUFFckIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLGdGQUFnRjtJQUNoRixzREFBc0Q7SUFDdEQsU0FBUztJQUNULG9RQUFvUTtJQUNwUSxPQUFPO0lBRVAsZ0ZBQWdGO0lBQ2hGLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixPQUFPO0lBQ1Asc0NBQXNDO0lBRXRDLFNBQVM7SUFFUCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVzFCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRixrREFBSUE7MEJBQ0gsNEVBQUM4Qjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDO2dCQUFLSCxXQUFXMUIscUVBQVc7O29CQUFFO29CQUsxQkssUUFBUUEsS0FBS3lCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNO3dCQUN0QixxQkFDRSw4REFBQ047c0NBQ0MsNEVBQUMxQixtREFBS0E7Z0NBQUNpQyxLQUFLRCxFQUFFRSxRQUFRO2dDQUFFQyxPQUFNO2dDQUFLQyxRQUFPO2dDQUFLQyxLQUFLTCxFQUFFTSxJQUFJOzs7Ozs7MkJBRGxETixFQUFFMUIsSUFBSTs7Ozs7b0JBSXBCOzs7Ozs7Ozs7Ozs7O0FBT1QsQ0FBQztHQXBHc0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vb25waGFzZVRFU1QuanM/NmVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIGNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ119KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwc1wiKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcclxuICAgICAgXCJob3N0bmFtZVwiOiBcImFwaS5hc3Ryb25vbXlhcGkuY29tXCIsXHJcbiAgICAgIFwicG9ydFwiOiBudWxsLFxyXG4gICAgICBcInBhdGhcIjogXCIvYXBpL3YyL3N0dWRpby9tb29uLXBoYXNlXCIsXHJcbiAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgTWpZMlkyUTNPV0V0TldFeVl5MDBNR1F4TFdJNE5HVXROV1F5WlRSbU5XRXdPV0kzT2pSaFkyTXlOalEwWmpFd01qZzRNV1kzWTJRMk1EaGtZamxpT0dFMk9EbGlPR1F6WXpreE9UQXhabVZrT0RFM01EY3lOVFUwTkRRMU0yUTJZbVV4WVdReU9UTXhNakkzTURabE9EQXlNMkV4TURsbU1qQXhNakZsWWpVNU1URXpaR05rTUROaFkyRXdOVEkyTmpZNU9XTTJaalpoTldKak5EVTRNR0ZoTmpZNU5HTTVaV1JtTm1RMU1qVXdObUl6WmpSa016RXpZakZqWm1NeVlXWmhaalU1T1RVek9EZzNZek00WldSa01qZGhabVJoTldaalpXSmhaREl4TjJZMFlqbGpaamMwTnpZM05tUXhZakJpTURkbU5EZGxZMlkxTkdOak1ERTJabUpsXCJcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXEgPSBodHRwLnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuXHJcbiAgICAgIHJlcy5vbihcImRhdGFcIiwgZnVuY3Rpb24gKGNodW5rKSB7XHJcbiAgICAgICAgY2h1bmtzLnB1c2goY2h1bmspO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcy5vbihcImVuZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEJ1ZmZlci5jb25jYXQoY2h1bmtzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5LnRvU3RyaW5nKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcS53cml0ZShcIntcXFwic3R5bGVcXFwiOntcXFwibW9vblN0eWxlXFxcIjpcXFwiZGVmYXVsdFxcXCIsXFxcImJhY2tncm91bmRTdHlsZVxcXCI6XFxcInN0YXJzXFxcIixcXFwiYmFja2dyb3VuZENvbG9yXFxcIjpcXFwiIzAwMDAwMFxcXCIsXFxcImhlYWRpbmdDb2xvclxcXCI6XFxcIiNmZmZmZmZcXFwiLFxcXCJ0ZXh0Q29sb3JcXFwiOlxcXCIjZmZmZmZmXFxcIn0sXFxcIm9ic2VydmVyXFxcIjp7XFxcImxhdGl0dWRlXFxcIjozMy43NzU4NjcsXFxcImxvbmdpdHVkZVxcXCI6LTg0LjM5NzMzLFxcXCJkYXRlXFxcIjpcXFwiMjAyMy0wMS0yNFxcXCJ9LFxcXCJ2aWV3XFxcIjp7XFxcInR5cGVcXFwiOlxcXCJwb3J0cmFpdC1zaW1wbGVcXFwiLFxcXCJwYXJhbWV0ZXJzXFxcIjp7fX19XCIpO1xyXG4gICAgcmVxLmVuZCgpO1xyXG5cclxuXHJcblxyXG4gIC8vSlMgSFRUUFxyXG4gIC8vIGNvbnN0IGRhdGEgPSBcIntcXFwic3R5bGVcXFwiOntcXFwibW9vblN0eWxlXFxcIjpcXFwiZGVmYXVsdFxcXCIsXFxcImJhY2tncm91bmRTdHlsZVxcXCI6XFxcInN0YXJzXFxcIixcXFwiYmFja2dyb3VuZENvbG9yXFxcIjpcXFwiIzAwMDAwMFxcXCIsXFxcImhlYWRpbmdDb2xvclxcXCI6XFxcIiNmZmZmZmZcXFwiLFxcXCJ0ZXh0Q29sb3JcXFwiOlxcXCIjZmZmZmZmXFxcIn0sXFxcIm9ic2VydmVyXFxcIjp7XFxcImxhdGl0dWRlXFxcIjozMy43NzU4NjcsXFxcImxvbmdpdHVkZVxcXCI6LTg0LjM5NzMzLFxcXCJkYXRlXFxcIjpcXFwiMjAyMy0wMS0yNFxcXCJ9LFxcXCJ2aWV3XFxcIjp7XFxcInR5cGVcXFwiOlxcXCJwb3J0cmFpdC1zaW1wbGVcXFwiLFxcXCJwYXJhbWV0ZXJzXFxcIjp7fX19XCI7XHJcblxyXG4gIC8vIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIC8vIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gIFxyXG4gIC8vIHhoci5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG4gIFxyXG4gIC8vIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vYXBpLmFzdHJvbm9teWFwaS5jb20vYXBpL3YyL3N0dWRpby9tb29uLXBoYXNlXCIpO1xyXG4gIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIE1qWTJZMlEzT1dFdE5XRXlZeTAwTUdReExXSTROR1V0TldReVpUUm1OV0V3T1dJM09qUmhZMk15TmpRMFpqRXdNamc0TVdZM1kyUTJNRGhrWWpsaU9HRTJPRGxpT0dRell6a3hPVEF4Wm1Wa09ERTNNRGN5TlRVME5EUTFNMlEyWW1VeFlXUXlPVE14TWpJM01EWmxPREF5TTJFeE1EbG1NakF4TWpGbFlqVTVNVEV6WkdOa01ETmhZMkV3TlRJMk5qWTVPV00yWmpaaE5XSmpORFU0TUdGaE5qWTVOR001WldSbU5tUTFNalV3Tm1JelpqUmtNekV6WWpGalptTXlZV1poWmpVNU9UVXpPRGczWXpNNFpXUmtNamRoWm1SaE5XWmpaV0poWkRJeE4yWTBZamxqWmpjME56WTNObVF4WWpCaU1EZG1ORGRsWTJZMU5HTmpNREUyWm1KbFwiKTtcclxuICBcclxuICAvLyB4aHIuc2VuZChkYXRhKTtcclxuXHJcbi8vUkFQSUQgXHJcbi8vICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuLy8gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4vLyAgICBjb25zdCBvcHRpb25zID0ge1xyXG4vLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICdYLVJhcGlkQVBJLUtleSc6ICdjZDFkMzlkYTY2bXNoMDE3NGExNTE0MTc5OGEycDFiY2NjYWpzbjk3YTEyYzU3NjZlNCcsXHJcbi8vICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnYXN0cm9ub215LnAucmFwaWRhcGkuY29tJ1xyXG4vLyAgICAgfSxcclxuLy8gICAgIGJvZHk6ICd7XCJmb3JtYXRcIjpcInBuZ1wiLFwib2JzZXJ2ZXJcIjp7XCJkYXRlXCI6XCIyMDIwLTExLTAxXCIsXCJsYXRpdHVkZVwiOjYuNTY3NzQsXCJsb25naXR1ZGVcIjo3OS44ODk1Nn0sXCJzdHlsZVwiOntcImJhY2tncm91bmRDb2xvclwiOlwicmVkXCIsXCJiYWNrZ3JvdW5kU3R5bGVcIjpcInN0YXJzXCIsXCJoZWFkaW5nQ29sb3JcIjpcIndoaXRlXCIsXCJtb29uU3R5bGVcIjpcInNrZXRjaFwiLFwidGV4dENvbG9yXCI6XCJyZWRcIn0sXCJ2aWV3XCI6e1widHlwZVwiOlwicG9ydHJhaXQtc2ltcGxlXCJ9fSdcclxuLy8gICB9O1xyXG4gIFxyXG4vLyAgIGZldGNoKCdodHRwczovL2FzdHJvbm9teS5wLnJhcGlkYXBpLmNvbS9hcGkvdjIvc3R1ZGlvL21vb24tcGhhc2UnLCBvcHRpb25zKVxyXG4vLyBcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuLy8gXHQudGhlbihyZXNwb25zZSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuLy8gICAgIHNldERhdGEocmVzcG9uc2UpXHJcbi8vICAgfSlcclxuLy8gXHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4vLyB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNreWJvdW5kPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcblxyXG4gICAgICAgIEFQSSBJbmZvIFRlc3Q6XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEgJiYgZGF0YS5tYXAoKGQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtkLmRhdGF9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZC5pbWFnZVVybH0gd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PXtkLm5hbWV9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG4gfSJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiaHR0cCIsInJlcXVpcmUiLCJvcHRpb25zIiwicmVxIiwicmVxdWVzdCIsInJlcyIsImNodW5rcyIsIm9uIiwiY2h1bmsiLCJwdXNoIiwiYm9keSIsIkJ1ZmZlciIsImNvbmNhdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1N0cmluZyIsIndyaXRlIiwiZW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwibWFwIiwiZCIsInNyYyIsImltYWdlVXJsIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/moonphaseTEST.js\n"));

/***/ })

});