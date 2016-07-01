"use strict";

const noop = require("noop6");

/**
 * fnWrap
 * Wraps the both functions into another function.
 *
 * @name fnWrap
 * @function
 * @param {Function} fn The function to be called before the old function.
 * @param {Function} origFn The original function to call.
 * @param {Object} scope The context to use.
 * @returns {Function} A new function.
 */
module.exports = function fnWrap (fn, origFn, scope) {

    origFn = origFn || noop;
    scope = scope || this;

    return function () {
        fn.apply(scope, arguments);
        return origFn.apply(scope, arguments);
    };
};
