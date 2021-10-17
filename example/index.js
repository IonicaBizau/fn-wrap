"use strict";

const fnWrap = require("../lib");


let originalFn = () => {
    console.log(2);
};

let newFn = fnWrap(() => {
    console.log(3);
}, originalFn);

newFn();
// => 43
// => 42
