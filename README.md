
# fn-wrap

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/fn-wrap.svg)](https://www.npmjs.com/package/fn-wrap) [![Downloads](https://img.shields.io/npm/dt/fn-wrap.svg)](https://www.npmjs.com/package/fn-wrap) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Function wrapping utility.

## :cloud: Installation

```sh
$ npm i --save fn-wrap
```


## :clipboard: Example



```js
const fnWrap = require("fn-wrap");


let originalFn = () => {
    console.log(42);
};

let newFn = fnWrap(() => {
    console.log(43);
}, originalFn);

newFn();
// => 43
// => 42
```

## :memo: Documentation


### `fnWrap(fn, origFn, scope)`
Wraps the both functions into another function.

#### Params
- **Function** `fn`: The function to be called before the old function.
- **Function** `origFn`: The original function to call.
- **Object** `scope`: The context to use.

#### Return
- **Function** A new function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
