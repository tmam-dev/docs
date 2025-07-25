"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount@2.0.1";
exports.ids = ["vendor-chunks/ccount@2.0.1"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ccount: () => (/* binding */ ccount)\n/* harmony export */ });\n/**\n * Count how often a character (or substring) is used in a string.\n *\n * @param {string} value\n *   Value to search in.\n * @param {string} character\n *   Character (or substring) to look for.\n * @return {number}\n *   Number of times `character` occurred in `value`.\n */\nfunction ccount(value, character) {\n  const source = String(value)\n\n  if (typeof character !== 'string') {\n    throw new TypeError('Expected character')\n  }\n\n  let count = 0\n  let index = source.indexOf(character)\n\n  while (index !== -1) {\n    count++\n    index = source.indexOf(character, index + character.length)\n  }\n\n  return count\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vY2NvdW50QDIuMC4xL25vZGVfbW9kdWxlcy9jY291bnQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvbWFoYS9Eb2N1bWVudHMvR2l0SHViL2RvY3Mvbm9kZV9tb2R1bGVzLy5wbnBtL2Njb3VudEAyLjAuMS9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ291bnQgaG93IG9mdGVuIGEgY2hhcmFjdGVyIChvciBzdWJzdHJpbmcpIGlzIHVzZWQgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFZhbHVlIHRvIHNlYXJjaCBpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAqICAgQ2hhcmFjdGVyIChvciBzdWJzdHJpbmcpIHRvIGxvb2sgZm9yLlxuICogQHJldHVybiB7bnVtYmVyfVxuICogICBOdW1iZXIgb2YgdGltZXMgYGNoYXJhY3RlcmAgb2NjdXJyZWQgaW4gYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNjb3VudCh2YWx1ZSwgY2hhcmFjdGVyKSB7XG4gIGNvbnN0IHNvdXJjZSA9IFN0cmluZyh2YWx1ZSlcblxuICBpZiAodHlwZW9mIGNoYXJhY3RlciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgbGV0IGNvdW50ID0gMFxuICBsZXQgaW5kZXggPSBzb3VyY2UuaW5kZXhPZihjaGFyYWN0ZXIpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcbiAgICBpbmRleCA9IHNvdXJjZS5pbmRleE9mKGNoYXJhY3RlciwgaW5kZXggKyBjaGFyYWN0ZXIubGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js\n");

/***/ })

};
;