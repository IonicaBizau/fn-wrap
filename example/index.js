"use strict";

const fnWrap = require("../lib");


let originalFn = () => {
    console.log(42);
};

let newFn = fnWrap(() => {
    console.log(43);
}, originalFn);

newFn();
// => 43
// => 42
