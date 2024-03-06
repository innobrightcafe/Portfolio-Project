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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_inosoft_Documents_project_ALXFINALPROJECT_Portfolio_Project_code_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/inosoft/Documents/project/ALXFINALPROJECT/Portfolio-Project/code/src/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _home_inosoft_Documents_project_ALXFINALPROJECT_Portfolio_Project_code_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGaW5vc29mdCUyRkRvY3VtZW50cyUyRnByb2plY3QlMkZBTFhGSU5BTFBST0pFQ1QlMkZQb3J0Zm9saW8tUHJvamVjdCUyRmNvZGUlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZpbm9zb2Z0JTJGRG9jdW1lbnRzJTJGcHJvamVjdCUyRkFMWEZJTkFMUFJPSkVDVCUyRlBvcnRmb2xpby1Qcm9qZWN0JTJGY29kZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM4RDtBQUMzSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQxNHN0YXJ0ZXIvPzJhZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvaW5vc29mdC9Eb2N1bWVudHMvcHJvamVjdC9BTFhGSU5BTFBST0pFQ1QvUG9ydGZvbGlvLVByb2plY3QvY29kZS9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvaW5vc29mdC9Eb2N1bWVudHMvcHJvamVjdC9BTFhGSU5BTFBST0pFQ1QvUG9ydGZvbGlvLVByb2plY3QvY29kZS9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.GET),\n/* harmony export */   POST: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.POST)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dDE0c3RhcnRlci8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz8yMzJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IEdFVCwgUE9TVCB9IGZyb20gXCJAL2xpYi9hdXRoXCIiXSwibmFtZXMiOlsiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.config.js":
/*!********************************!*\
  !*** ./src/lib/auth.config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\nconst authConfig = {\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [],\n    callbacks: {\n        // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.isAdmin = user.isAdmin;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.isAdmin = token.isAdmin;\n            }\n            return session;\n        },\n        authorized ({ auth, request }) {\n            const user = auth?.user;\n            const isOnAdminPanel = request.nextUrl?.pathname.startsWith(\"/admin\");\n            const isOnBlogPage = request.nextUrl?.pathname.startsWith(\"/blog\");\n            const isOnLoginPage = request.nextUrl?.pathname.startsWith(\"/login\");\n            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD\n            if (isOnAdminPanel && !user?.isAdmin) {\n                return false;\n            }\n            // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE\n            if (isOnBlogPage && !user) {\n                return false;\n            }\n            // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE\n            if (isOnLoginPage && user) {\n                return Response.redirect(new URL(\"/\", request.nextUrl));\n            }\n            return true;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGguY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxhQUFhO0lBQ3hCQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxXQUFXLEVBQUU7SUFDYkMsV0FBVztRQUNULGtHQUFrRztRQUNsRyxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JELE1BQU1FLEVBQUUsR0FBR0QsS0FBS0MsRUFBRTtnQkFDbEJGLE1BQU1HLE9BQU8sR0FBR0YsS0FBS0UsT0FBTztZQUM5QjtZQUNBLE9BQU9IO1FBQ1Q7UUFDQSxNQUFNSSxTQUFRLEVBQUVBLE9BQU8sRUFBRUosS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1RJLFFBQVFILElBQUksQ0FBQ0MsRUFBRSxHQUFHRixNQUFNRSxFQUFFO2dCQUMxQkUsUUFBUUgsSUFBSSxDQUFDRSxPQUFPLEdBQUdILE1BQU1HLE9BQU87WUFDdEM7WUFDQSxPQUFPQztRQUNUO1FBQ0FDLFlBQVcsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7WUFDMUIsTUFBTU4sT0FBT0ssTUFBTUw7WUFDbkIsTUFBTU8saUJBQWlCRCxRQUFRRSxPQUFPLEVBQUVDLFNBQVNDLFdBQVc7WUFDNUQsTUFBTUMsZUFBZUwsUUFBUUUsT0FBTyxFQUFFQyxTQUFTQyxXQUFXO1lBQzFELE1BQU1FLGdCQUFnQk4sUUFBUUUsT0FBTyxFQUFFQyxTQUFTQyxXQUFXO1lBRTNELDJDQUEyQztZQUUzQyxJQUFJSCxrQkFBa0IsQ0FBQ1AsTUFBTUUsU0FBUztnQkFDcEMsT0FBTztZQUNUO1lBRUEsbURBQW1EO1lBRW5ELElBQUlTLGdCQUFnQixDQUFDWCxNQUFNO2dCQUN6QixPQUFPO1lBQ1Q7WUFFQSxzREFBc0Q7WUFFdEQsSUFBSVksaUJBQWlCWixNQUFNO2dCQUN6QixPQUFPYSxTQUFTQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLVCxRQUFRRSxPQUFPO1lBQ3ZEO1lBRUEsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dDE0c3RhcnRlci8uL3NyYy9saWIvYXV0aC5jb25maWcuanM/NzY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXV0aENvbmZpZyA9IHtcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHByb3ZpZGVyczogW10sXG4gIGNhbGxiYWNrczoge1xuICAgIC8vIEZPUiBNT1JFIERFVEFJTCBBQk9VVCBDQUxMQkFDSyBGVU5DVElPTlMgQ0hFQ0sgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vY2FsbGJhY2tzXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5pc0FkbWluID0gdXNlci5pc0FkbWluO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlzQWRtaW4gPSB0b2tlbi5pc0FkbWluO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhdXRob3JpemVkKHsgYXV0aCwgcmVxdWVzdCB9KSB7XG4gICAgICBjb25zdCB1c2VyID0gYXV0aD8udXNlcjtcbiAgICAgIGNvbnN0IGlzT25BZG1pblBhbmVsID0gcmVxdWVzdC5uZXh0VXJsPy5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FkbWluXCIpO1xuICAgICAgY29uc3QgaXNPbkJsb2dQYWdlID0gcmVxdWVzdC5uZXh0VXJsPy5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2Jsb2dcIik7XG4gICAgICBjb25zdCBpc09uTG9naW5QYWdlID0gcmVxdWVzdC5uZXh0VXJsPy5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2xvZ2luXCIpO1xuXG4gICAgICAvLyBPTkxZIEFETUlOIENBTiBSRUFDSCBUSEUgQURNSU4gREFTSEJPQVJEXG5cbiAgICAgIGlmIChpc09uQWRtaW5QYW5lbCAmJiAhdXNlcj8uaXNBZG1pbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE9OTFkgQVVUSEVOVElDQVRFRCBVU0VSUyBDQU4gUkVBQ0ggVEhFIEJMT0cgUEFHRVxuXG4gICAgICBpZiAoaXNPbkJsb2dQYWdlICYmICF1c2VyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gT05MWSBVTkFVVEhFTlRJQ0FURUQgVVNFUlMgQ0FOIFJFQUNIIFRIRSBMT0dJTiBQQUdFXG5cbiAgICAgIGlmIChpc09uTG9naW5QYWdlICYmIHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvXCIsIHJlcXVlc3QubmV4dFVybCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbImF1dGhDb25maWciLCJwYWdlcyIsInNpZ25JbiIsInByb3ZpZGVycyIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImlkIiwiaXNBZG1pbiIsInNlc3Npb24iLCJhdXRob3JpemVkIiwiYXV0aCIsInJlcXVlc3QiLCJpc09uQWRtaW5QYW5lbCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJpc09uQmxvZ1BhZ2UiLCJpc09uTG9naW5QYWdlIiwiUmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.config.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.js":
/*!*************************!*\
  !*** ./src/lib/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"(rsc)/./src/lib/utils.js\");\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ \"(rsc)/./src/lib/models.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.config */ \"(rsc)/./src/lib/auth.config.js\");\n\n\n\n\n\n\n\nconst login = async (credentials)=>{\n    try {\n        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.connectToDb)();\n        const user = await _models__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n            username: credentials.username\n        });\n        if (!user) throw new Error(\"Wrong credentials!\");\n        const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.password);\n        if (!isPasswordCorrect) throw new Error(\"Wrong credentials!\");\n        return user;\n    } catch (err) {\n        console.log(err);\n        throw new Error(\"Failed to login!\");\n    }\n};\nconst { handlers: { GET, POST }, auth, signIn, signOut } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ..._auth_config__WEBPACK_IMPORTED_MODULE_6__.authConfig,\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            async authorize (credentials) {\n                try {\n                    const user = await login(credentials);\n                    return user;\n                } catch (err) {\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account, profile }) {\n            if (account.provider === \"github\") {\n                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.connectToDb)();\n                try {\n                    const user = await _models__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                        email: profile.email\n                    });\n                    if (!user) {\n                        const newUser = new _models__WEBPACK_IMPORTED_MODULE_4__.User({\n                            username: profile.login,\n                            email: profile.email,\n                            image: profile.avatar_url\n                        });\n                        await newUser.save();\n                    }\n                } catch (err) {\n                    console.log(err);\n                    return false;\n                }\n            }\n            return true;\n        },\n        ..._auth_config__WEBPACK_IMPORTED_MODULE_6__.authConfig.callbacks\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNlO0FBQ2tCO0FBQzVCO0FBQ047QUFDRjtBQUNhO0FBRTNDLE1BQU1PLFFBQVEsT0FBT0M7SUFDbkIsSUFBSTtRQUNGTCxtREFBV0E7UUFDWCxNQUFNTSxPQUFPLE1BQU1MLHlDQUFJQSxDQUFDTSxPQUFPLENBQUM7WUFBRUMsVUFBVUgsWUFBWUcsUUFBUTtRQUFDO1FBRWpFLElBQUksQ0FBQ0YsTUFBTSxNQUFNLElBQUlHLE1BQU07UUFFM0IsTUFBTUMsb0JBQW9CLE1BQU1SLHVEQUFjLENBQzVDRyxZQUFZTyxRQUFRLEVBQ3BCTixLQUFLTSxRQUFRO1FBR2YsSUFBSSxDQUFDRixtQkFBbUIsTUFBTSxJQUFJRCxNQUFNO1FBRXhDLE9BQU9IO0lBQ1QsRUFBRSxPQUFPTyxLQUFLO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNLElBQUlKLE1BQU07SUFDbEI7QUFDRjtBQUVPLE1BQU0sRUFDWE8sVUFBVSxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRSxFQUN2QkMsSUFBSSxFQUNKQyxNQUFNLEVBQ05DLE9BQU8sRUFDUixHQUFHeEIscURBQVFBLENBQUM7SUFDWCxHQUFHTSxvREFBVTtJQUNibUIsV0FBVztRQUNUeEIsc0VBQU1BLENBQUM7WUFDTHlCLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQ3pDO1FBQ0E3QiwyRUFBbUJBLENBQUM7WUFDbEIsTUFBTThCLFdBQVV4QixXQUFXO2dCQUN6QixJQUFJO29CQUNGLE1BQU1DLE9BQU8sTUFBTUYsTUFBTUM7b0JBQ3pCLE9BQU9DO2dCQUNULEVBQUUsT0FBT08sS0FBSztvQkFDWixPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RpQixXQUFXO1FBQ1QsTUFBTVYsUUFBTyxFQUFFZCxJQUFJLEVBQUV5QixPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNyQyxJQUFJRCxRQUFRRSxRQUFRLEtBQUssVUFBVTtnQkFDakNqQyxtREFBV0E7Z0JBQ1gsSUFBSTtvQkFDRixNQUFNTSxPQUFPLE1BQU1MLHlDQUFJQSxDQUFDTSxPQUFPLENBQUM7d0JBQUUyQixPQUFPRixRQUFRRSxLQUFLO29CQUFDO29CQUV2RCxJQUFJLENBQUM1QixNQUFNO3dCQUNULE1BQU02QixVQUFVLElBQUlsQyx5Q0FBSUEsQ0FBQzs0QkFDdkJPLFVBQVV3QixRQUFRNUIsS0FBSzs0QkFDdkI4QixPQUFPRixRQUFRRSxLQUFLOzRCQUNwQkUsT0FBT0osUUFBUUssVUFBVTt3QkFDM0I7d0JBRUEsTUFBTUYsUUFBUUcsSUFBSTtvQkFDcEI7Z0JBQ0YsRUFBRSxPQUFPekIsS0FBSztvQkFDWkMsUUFBUUMsR0FBRyxDQUFDRjtvQkFDWixPQUFPO2dCQUNUO1lBQ0Y7WUFDQSxPQUFPO1FBQ1Q7UUFDQSxHQUFHVixvREFBVUEsQ0FBQzJCLFNBQVM7SUFDekI7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dDE0c3RhcnRlci8uL3NyYy9saWIvYXV0aC5qcz84N2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RiIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9tb2RlbHNcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBhdXRoQ29uZmlnIH0gZnJvbSBcIi4vYXV0aC5jb25maWdcIjtcblxuY29uc3QgbG9naW4gPSBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25uZWN0VG9EYigpO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIldyb25nIGNyZWRlbnRpYWxzIVwiKTtcblxuICAgIGNvbnN0IGlzUGFzc3dvcmRDb3JyZWN0ID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgIHVzZXIucGFzc3dvcmRcbiAgICApO1xuXG4gICAgaWYgKCFpc1Bhc3N3b3JkQ29ycmVjdCkgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgY3JlZGVudGlhbHMhXCIpO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGxvZ2luIVwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgaGFuZGxlcnM6IHsgR0VULCBQT1NUIH0sXG4gIGF1dGgsXG4gIHNpZ25JbixcbiAgc2lnbk91dCxcbn0gPSBOZXh0QXV0aCh7XG4gIC4uLmF1dGhDb25maWcsXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdEh1Yih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKGNyZWRlbnRpYWxzKTtcbiAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xuICAgICAgaWYgKGFjY291bnQucHJvdmlkZXIgPT09IFwiZ2l0aHViXCIpIHtcbiAgICAgICAgY29ubmVjdFRvRGIoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHByb2ZpbGUuZW1haWwgfSk7XG5cbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLmxvZ2luLFxuICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICAgICAgaW1hZ2U6IHByb2ZpbGUuYXZhdGFyX3VybCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIC4uLmF1dGhDb25maWcuY2FsbGJhY2tzLFxuICB9LFxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0SHViIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImNvbm5lY3RUb0RiIiwiVXNlciIsImJjcnlwdCIsImF1dGhDb25maWciLCJsb2dpbiIsImNyZWRlbnRpYWxzIiwidXNlciIsImZpbmRPbmUiLCJ1c2VybmFtZSIsIkVycm9yIiwiaXNQYXNzd29yZENvcnJlY3QiLCJjb21wYXJlIiwicGFzc3dvcmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlcnMiLCJHRVQiLCJQT1NUIiwiYXV0aCIsInNpZ25JbiIsInNpZ25PdXQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYXV0aG9yaXplIiwiY2FsbGJhY2tzIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlciIsImVtYWlsIiwibmV3VXNlciIsImltYWdlIiwiYXZhdGFyX3VybCIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/models.js":
/*!***************************!*\
  !*** ./src/lib/models.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Post: () => (/* binding */ Post),\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true,\n        unique: true,\n        min: 3,\n        max: 20\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        max: 50\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst postSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    desc: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String\n    },\n    userId: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\nconst Post = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)?.Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", postSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vZGVscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDcEM7SUFDRUcsVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsS0FBSztRQUNMQyxLQUFLO0lBQ1A7SUFDQUMsT0FBTztRQUNMTixNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkUsS0FBSztJQUNQO0lBQ0FFLFVBQVU7UUFDUlAsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FNLEtBQUs7UUFDSFIsTUFBTUM7SUFDUjtJQUNBUSxTQUFTO1FBQ1BULE1BQU1VO1FBQ05DLFNBQVM7SUFDWDtBQUNGLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR3JCLE1BQU1DLGFBQWEsSUFBSWpCLHdEQUFlLENBQ3BDO0lBQ0VrQixPQUFPO1FBQ0xkLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBYSxNQUFNO1FBQ0pmLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBTSxLQUFLO1FBQ0hSLE1BQU1DO0lBQ1I7SUFDQWUsUUFBUTtRQUNOaEIsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FlLE1BQU07UUFDSmpCLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0FBQ0YsR0FDQTtJQUFFUyxZQUFZO0FBQUs7QUFHZCxNQUFNTSxPQUFPdEIsd0RBQWUsRUFBRXNCLFFBQVF0QixxREFBYyxDQUFDLFFBQVFDLFlBQVk7QUFDekUsTUFBTXdCLE9BQU96Qix3REFBZSxFQUFFeUIsUUFBUXpCLHFEQUFjLENBQUMsUUFBUWlCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0MTRzdGFydGVyLy4vc3JjL2xpYi9tb2RlbHMuanM/YzM2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgbWluOiAzLFxuICAgICAgbWF4OiAyMCxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIG1heDogNTAsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBpbWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGlzQWRtaW46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuY29uc3QgcG9zdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBkZXNjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgdXNlcklkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHNsdWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG5leHBvcnQgY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscz8uVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5leHBvcnQgY29uc3QgUG9zdCA9IG1vbmdvb3NlLm1vZGVscz8uUG9zdCB8fCBtb25nb29zZS5tb2RlbChcIlBvc3RcIiwgcG9zdFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwibWluIiwibWF4IiwiZW1haWwiLCJwYXNzd29yZCIsImltZyIsImlzQWRtaW4iLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJwb3N0U2NoZW1hIiwidGl0bGUiLCJkZXNjIiwidXNlcklkIiwic2x1ZyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCIsIlBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/models.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDb: () => (/* binding */ connectToDb)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nconst connectToDb = async ()=>{\n    try {\n        if (connection.isConnected) {\n            console.log(\"Using existing connection\");\n            return;\n        }\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO);\n        connection.isConnected = db.connections[0].readyState;\n    } catch (error) {\n        console.log(error);\n        throw new Error(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3V0aWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxhQUFhLENBQUM7QUFFYixNQUFNQyxjQUFjO0lBQ3pCLElBQUk7UUFDRixJQUFHRCxXQUFXRSxXQUFXLEVBQUU7WUFDekJDLFFBQVFDLEdBQUcsQ0FBQztZQUNaO1FBQ0Y7UUFDQSxNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLEtBQUs7UUFDbkRULFdBQVdFLFdBQVcsR0FBR0csR0FBR0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtJQUN2RCxFQUFFLE9BQU9DLE9BQU87UUFDZFQsUUFBUUMsR0FBRyxDQUFDUTtRQUNaLE1BQU0sSUFBSUMsTUFBTUQ7SUFDbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dDE0c3RhcnRlci8uL3NyYy9saWIvdXRpbHMuanM/NjViZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xuXG5leHBvcnQgY29uc3QgY29ubmVjdFRvRGIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJVc2luZyBleGlzdGluZyBjb25uZWN0aW9uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR08pO1xuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3RUb0RiIiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiZXJyb3IiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/utils.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/@auth","vendor-chunks/bcryptjs","vendor-chunks/oauth4webapi","vendor-chunks/preact","vendor-chunks/next-auth","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/@swc"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Finosoft%2FDocuments%2Fproject%2FALXFINALPROJECT%2FPortfolio-Project%2Fcode&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();