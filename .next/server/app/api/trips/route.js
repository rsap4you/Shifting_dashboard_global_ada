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
exports.id = "app/api/trips/route";
exports.ids = ["app/api/trips/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrips%2Froute&page=%2Fapi%2Ftrips%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrips%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrips%2Froute&page=%2Fapi%2Ftrips%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrips%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_OneDrive_Documents_Global_Ada_Code_trip_dashboard_trip_dashboard_app_api_trips_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/trips/route.ts */ \"(rsc)/./app/api/trips/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/trips/route\",\n        pathname: \"/api/trips\",\n        filename: \"route\",\n        bundlePath: \"app/api/trips/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Documents\\\\Global Ada Code\\\\trip-dashboard\\\\trip-dashboard\\\\app\\\\api\\\\trips\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_HP_OneDrive_Documents_Global_Ada_Code_trip_dashboard_trip_dashboard_app_api_trips_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/trips/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmlwcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdHJpcHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0cmlwcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCU1Q09uZURyaXZlJTVDRG9jdW1lbnRzJTVDR2xvYmFsJTIwQWRhJTIwQ29kZSU1Q3RyaXAtZGFzaGJvYXJkJTVDdHJpcC1kYXNoYm9hcmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0hQJTVDT25lRHJpdmUlNUNEb2N1bWVudHMlNUNHbG9iYWwlMjBBZGElMjBDb2RlJTVDdHJpcC1kYXNoYm9hcmQlNUN0cmlwLWRhc2hib2FyZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEQ7QUFDM0k7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwLWRhc2hib2FyZC8/ZWEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcR2xvYmFsIEFkYSBDb2RlXFxcXHRyaXAtZGFzaGJvYXJkXFxcXHRyaXAtZGFzaGJvYXJkXFxcXGFwcFxcXFxhcGlcXFxcdHJpcHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RyaXBzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdHJpcHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RyaXBzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXEdsb2JhbCBBZGEgQ29kZVxcXFx0cmlwLWRhc2hib2FyZFxcXFx0cmlwLWRhc2hib2FyZFxcXFxhcHBcXFxcYXBpXFxcXHRyaXBzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90cmlwcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrips%2Froute&page=%2Fapi%2Ftrips%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrips%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/trips/route.ts":
/*!********************************!*\
  !*** ./app/api/trips/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET(req) {\n    if (!await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyReq)(req)) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const db = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.getDb)();\n    const trips = await db.collection(\"trips\").find({}, {\n        projection: {\n            _id: 0\n        }\n    }).toArray();\n    const meta = await db.collection(\"meta\").findOne({\n        _id: \"sync\"\n    });\n    const tabs = Array.from(new Set(trips.map((t)=>t.tab))).sort().map((tab)=>({\n            tab\n        }));\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        trips,\n        tabs,\n        updated: meta?.at ? new Date(meta.at).toLocaleString(\"en-IN\") : \"—\",\n        skipped: meta?.skipped || []\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RyaXBzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ3ZCO0FBQ007QUFFaEMsTUFBTUcsVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUMsSUFBSUMsR0FBZ0I7SUFDeEMsSUFBSSxDQUFFLE1BQU1ILG9EQUFTQSxDQUFDRyxNQUFPLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRS9GLE1BQU1DLEtBQUssTUFBTVIsOENBQUtBO0lBQ3RCLE1BQU1TLFFBQVEsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLFNBQVNDLElBQUksQ0FBQyxDQUFDLEdBQUc7UUFBRUMsWUFBWTtZQUFFQyxLQUFLO1FBQUU7SUFBRSxHQUFHQyxPQUFPO0lBQ3ZGLE1BQU1DLE9BQVksTUFBTVAsR0FBR0UsVUFBVSxDQUFDLFFBQVFNLE9BQU8sQ0FBQztRQUFFSCxLQUFLO0lBQWM7SUFDM0UsTUFBTUksT0FBT0MsTUFBTUMsSUFBSSxDQUFDLElBQUlDLElBQUlYLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDQyxJQUFXQSxFQUFFQyxHQUFHLElBQUlDLElBQUksR0FBR0gsR0FBRyxDQUFDRSxDQUFBQSxNQUFRO1lBQUVBO1FBQUk7SUFFeEYsT0FBT3hCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFDdkJJO1FBQ0FRO1FBQ0FRLFNBQVNWLE1BQU1XLEtBQUssSUFBSUMsS0FBS1osS0FBS1csRUFBRSxFQUFFRSxjQUFjLENBQUMsV0FBVztRQUNoRUMsU0FBU2QsTUFBTWMsV0FBVyxFQUFFO0lBQzlCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwLWRhc2hib2FyZC8uL2FwcC9hcGkvdHJpcHMvcm91dGUudHM/YmQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBnZXREYiB9IGZyb20gJ0AvbGliL2RiJztcclxuaW1wb3J0IHsgdmVyaWZ5UmVxIH0gZnJvbSAnQC9saWIvYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgZHluYW1pYyA9ICdmb3JjZS1keW5hbWljJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIGlmICghKGF3YWl0IHZlcmlmeVJlcShyZXEpKSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGIoKTtcclxuICBjb25zdCB0cmlwcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3RyaXBzJykuZmluZCh7fSwgeyBwcm9qZWN0aW9uOiB7IF9pZDogMCB9IH0pLnRvQXJyYXkoKTtcclxuICBjb25zdCBtZXRhOiBhbnkgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdtZXRhJykuZmluZE9uZSh7IF9pZDogJ3N5bmMnIGFzIGFueSB9KTtcclxuICBjb25zdCB0YWJzID0gQXJyYXkuZnJvbShuZXcgU2V0KHRyaXBzLm1hcCgodDogYW55KSA9PiB0LnRhYikpKS5zb3J0KCkubWFwKHRhYiA9PiAoeyB0YWIgfSkpO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgdHJpcHMsXHJcbiAgICB0YWJzLFxyXG4gICAgdXBkYXRlZDogbWV0YT8uYXQgPyBuZXcgRGF0ZShtZXRhLmF0KS50b0xvY2FsZVN0cmluZygnZW4tSU4nKSA6ICfigJQnLFxyXG4gICAgc2tpcHBlZDogbWV0YT8uc2tpcHBlZCB8fCBbXSxcclxuICB9KTtcclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXREYiIsInZlcmlmeVJlcSIsImR5bmFtaWMiLCJHRVQiLCJyZXEiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJkYiIsInRyaXBzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJwcm9qZWN0aW9uIiwiX2lkIiwidG9BcnJheSIsIm1ldGEiLCJmaW5kT25lIiwidGFicyIsIkFycmF5IiwiZnJvbSIsIlNldCIsIm1hcCIsInQiLCJ0YWIiLCJzb3J0IiwidXBkYXRlZCIsImF0IiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwic2tpcHBlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/trips/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftrips%2Froute&page=%2Fapi%2Ftrips%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrips%2Froute.ts&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDocuments%5CGlobal%20Ada%20Code%5Ctrip-dashboard%5Ctrip-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();