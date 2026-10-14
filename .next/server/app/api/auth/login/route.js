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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_OneDrive_Documents_Global_Ada_Code_trip_dashboard_trip_dashboard_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.ts */ \"(rsc)/./app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\Global Ada Code\\\\trip-dashboard\\\\trip-dashboard\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_HP_OneDrive_Documents_Global_Ada_Code_trip_dashboard_trip_dashboard_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDR2xvYmFsJTIwQWRhJTIwQ29kZSU1Q3RyaXAtZGFzaGJvYXJkJTVDdHJpcC1kYXNoYm9hcmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0hQJTVDT25lRHJpdmUlNUNEb2N1bWVudHMlNUNHbG9iYWwlMjBBZGElMjBDb2RlJTVDdHJpcC1kYXNoYm9hcmQlNUN0cmlwLWRhc2hib2FyZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0U7QUFDako7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwLWRhc2hib2FyZC8/M2E3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcR2xvYmFsIEFkYSBDb2RlXFxcXHRyaXAtZGFzaGJvYXJkXFxcXHRyaXAtZGFzaGJvYXJkXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcR2xvYmFsIEFkYSBDb2RlXFxcXHRyaXAtZGFzaGJvYXJkXFxcXHRyaXAtZGFzaGJvYXJkXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/login/route.ts":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\n\n\nasync function POST(req) {\n    const { email, password } = await req.json();\n    const user = await (await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.getDb)()).collection(\"users\").findOne({\n        email: String(email).toLowerCase()\n    });\n    if (!user || !await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(String(password), user.hash)) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Invalid credentials\"\n    }, {\n        status: 401\n    });\n    const token = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.signToken)(user.email);\n    const res = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        token\n    });\n    res.cookies.set(\"token\", token, {\n        httpOnly: true,\n        sameSite: \"lax\",\n        secure: \"development\" === \"production\",\n        maxAge: 604800,\n        path: \"/\"\n    });\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdEO0FBQzFCO0FBQ0c7QUFDTTtBQUNoQyxlQUFlSSxLQUFLQyxHQUFnQjtJQUN6QyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUMxQyxNQUFNQyxPQUFPLE1BQU0sQ0FBQyxNQUFNUCw4Q0FBS0EsRUFBQyxFQUFHUSxVQUFVLENBQUMsU0FBU0MsT0FBTyxDQUFDO1FBQUVMLE9BQU9NLE9BQU9OLE9BQU9PLFdBQVc7SUFBRztJQUNwRyxJQUFJLENBQUNKLFFBQVEsQ0FBRSxNQUFNUix1REFBYyxDQUFDVyxPQUFPTCxXQUFXRSxLQUFLTSxJQUFJLEdBQUksT0FBT2YscURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFUSxPQUFPO0lBQXNCLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQzVJLE1BQU1DLFFBQVEsTUFBTWYsb0RBQVNBLENBQUNNLEtBQUtILEtBQUs7SUFDeEMsTUFBTWEsTUFBTW5CLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRVU7SUFBTTtJQUN0Q0MsSUFBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBU0gsT0FBTztRQUFFSSxVQUFVO1FBQU1DLFVBQVU7UUFBT0MsUUFBUUMsa0JBQXlCO1FBQWNDLFFBQVE7UUFBUUMsTUFBTTtJQUFJO0lBQzVJLE9BQU9SO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwLWRhc2hib2FyZC8uL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50cz80ZjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IGdldERiIH0gZnJvbSAnQC9saWIvZGInO1xuaW1wb3J0IHsgc2lnblRva2VuIH0gZnJvbSAnQC9saWIvYXV0aCc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXEuanNvbigpO1xuICBjb25zdCB1c2VyID0gYXdhaXQgKGF3YWl0IGdldERiKCkpLmNvbGxlY3Rpb24oJ3VzZXJzJykuZmluZE9uZSh7IGVtYWlsOiBTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkgfSk7XG4gIGlmICghdXNlciB8fCAhKGF3YWl0IGJjcnlwdC5jb21wYXJlKFN0cmluZyhwYXNzd29yZCksIHVzZXIuaGFzaCkpKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQgc2lnblRva2VuKHVzZXIuZW1haWwpO1xuICBjb25zdCByZXMgPSBOZXh0UmVzcG9uc2UuanNvbih7IHRva2VuIH0pO1xuICByZXMuY29va2llcy5zZXQoJ3Rva2VuJywgdG9rZW4sIHsgaHR0cE9ubHk6IHRydWUsIHNhbWVTaXRlOiAnbGF4Jywgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLCBtYXhBZ2U6IDYwNDgwMCwgcGF0aDogJy8nIH0pO1xuICByZXR1cm4gcmVzO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImJjcnlwdCIsImdldERiIiwic2lnblRva2VuIiwiUE9TVCIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwidXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJjb21wYXJlIiwiaGFzaCIsImVycm9yIiwic3RhdHVzIiwidG9rZW4iLCJyZXMiLCJjb29raWVzIiwic2V0IiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInNlY3VyZSIsInByb2Nlc3MiLCJtYXhBZ2UiLCJwYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signToken: () => (/* binding */ signToken),\n/* harmony export */   verifyReq: () => (/* binding */ verifyReq)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n\nconst key = ()=>new TextEncoder().encode(process.env.JWT_SECRET);\nconst signToken = (sub)=>new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT({}).setProtectedHeader({\n        alg: \"HS256\"\n    }).setSubject(sub).setExpirationTime(\"7d\").sign(key());\nasync function verifyReq(req) {\n    const h = req.headers.get(\"authorization\");\n    const t = h?.startsWith(\"Bearer \") ? h.slice(7) : req.cookies.get(\"token\")?.value;\n    if (!t) return null;\n    try {\n        return (await (0,jose__WEBPACK_IMPORTED_MODULE_1__.jwtVerify)(t, key())).payload.sub ?? null;\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRTFDLE1BQU1FLE1BQU0sSUFBTSxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtBQUMxRCxNQUFNQyxZQUFZLENBQUNDLE1BQ3hCLElBQUlULHlDQUFPQSxDQUFDLENBQUMsR0FBR1Usa0JBQWtCLENBQUM7UUFBRUMsS0FBSztJQUFRLEdBQUdDLFVBQVUsQ0FBQ0gsS0FBS0ksaUJBQWlCLENBQUMsTUFBTUMsSUFBSSxDQUFDWixPQUFPO0FBQ3BHLGVBQWVhLFVBQVVDLEdBQWdCO0lBQzlDLE1BQU1DLElBQUlELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQzFCLE1BQU1DLElBQUlILEdBQUdJLFdBQVcsYUFBYUosRUFBRUssS0FBSyxDQUFDLEtBQUtOLElBQUlPLE9BQU8sQ0FBQ0osR0FBRyxDQUFDLFVBQVVLO0lBQzVFLElBQUksQ0FBQ0osR0FBRyxPQUFPO0lBQ2YsSUFBSTtRQUFFLE9BQU8sQ0FBQyxNQUFNbkIsK0NBQVNBLENBQUNtQixHQUFHbEIsTUFBSyxFQUFHdUIsT0FBTyxDQUFDaEIsR0FBRyxJQUFJO0lBQU0sRUFBRSxPQUFNO1FBQUUsT0FBTztJQUFNO0FBQ3ZGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJpcC1kYXNoYm9hcmQvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25KV1QsIGp3dFZlcmlmeSB9IGZyb20gJ2pvc2UnO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XG5jb25zdCBrZXkgPSAoKSA9PiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCEpO1xuZXhwb3J0IGNvbnN0IHNpZ25Ub2tlbiA9IChzdWI6IHN0cmluZykgPT5cbiAgbmV3IFNpZ25KV1Qoe30pLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogJ0hTMjU2JyB9KS5zZXRTdWJqZWN0KHN1Yikuc2V0RXhwaXJhdGlvblRpbWUoJzdkJykuc2lnbihrZXkoKSk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5UmVxKHJlcTogTmV4dFJlcXVlc3QpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgY29uc3QgaCA9IHJlcS5oZWFkZXJzLmdldCgnYXV0aG9yaXphdGlvbicpO1xuICBjb25zdCB0ID0gaD8uc3RhcnRzV2l0aCgnQmVhcmVyICcpID8gaC5zbGljZSg3KSA6IHJlcS5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWU7XG4gIGlmICghdCkgcmV0dXJuIG51bGw7XG4gIHRyeSB7IHJldHVybiAoYXdhaXQgand0VmVyaWZ5KHQsIGtleSgpKSkucGF5bG9hZC5zdWIgPz8gbnVsbDsgfSBjYXRjaCB7IHJldHVybiBudWxsOyB9XG59XG4iXSwibmFtZXMiOlsiU2lnbkpXVCIsImp3dFZlcmlmeSIsImtleSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJzaWduVG9rZW4iLCJzdWIiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRTdWJqZWN0Iiwic2V0RXhwaXJhdGlvblRpbWUiLCJzaWduIiwidmVyaWZ5UmVxIiwicmVxIiwiaCIsImhlYWRlcnMiLCJnZXQiLCJ0Iiwic3RhcnRzV2l0aCIsInNsaWNlIiwiY29va2llcyIsInZhbHVlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDb: () => (/* binding */ getDb)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst g = globalThis;\nasync function getDb() {\n    if (!g._mongo) g._mongo = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URI).connect();\n    return (await g._mongo).db(process.env.MONGODB_DB || \"trip_dashboard\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQzFDLE1BQU1DLElBQUlDO0FBQ0gsZUFBZUM7SUFDcEIsSUFBSSxDQUFDRixFQUFFRyxNQUFNLEVBQUVILEVBQUVHLE1BQU0sR0FBRyxJQUFJSixnREFBV0EsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUdDLE9BQU87SUFDM0UsT0FBTyxDQUFDLE1BQU1QLEVBQUVHLE1BQU0sRUFBRUssRUFBRSxDQUFDSixRQUFRQyxHQUFHLENBQUNJLFVBQVUsSUFBSTtBQUN2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaXAtZGFzaGJvYXJkLy4vbGliL2RiLnRzPzFkZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIERiIH0gZnJvbSAnbW9uZ29kYic7XG5jb25zdCBnID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHsgX21vbmdvPzogUHJvbWlzZTxNb25nb0NsaWVudD4gfTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYigpOiBQcm9taXNlPERiPiB7XG4gIGlmICghZy5fbW9uZ28pIGcuX21vbmdvID0gbmV3IE1vbmdvQ2xpZW50KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJISkuY29ubmVjdCgpO1xuICByZXR1cm4gKGF3YWl0IGcuX21vbmdvKS5kYihwcm9jZXNzLmVudi5NT05HT0RCX0RCIHx8ICd0cmlwX2Rhc2hib2FyZCcpO1xufVxuZXhwb3J0IGludGVyZmFjZSBUcmlwIHtcbiAgdGFiOiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgZGF0ZVRzOiBudW1iZXI7IGNoYWxsYW46IHN0cmluZzsgdmVoaWNsZTogc3RyaW5nOyB3dDogbnVtYmVyO1xuICB0cmFuc3BvcnRlcjogc3RyaW5nOyBwbGFudDogc3RyaW5nOyBhbW91bnQ6IG51bWJlcjsgdGRzOiBudW1iZXI7IHF0eTogbnVtYmVyOyBkQW10OiBudW1iZXI7XG4gIG5ldDogbnVtYmVyOyBvdGg6IG51bWJlcjsgcGFpZEFtdDogbnVtYmVyOyBkdWVBbXQ6IG51bWJlcjsgcHVtcDogc3RyaW5nOyB0aW1lOiBzdHJpbmc7IHJ0eXBlOiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJnIiwiZ2xvYmFsVGhpcyIsImdldERiIiwiX21vbmdvIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdCIsImRiIiwiTU9OR09EQl9EQiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();