var isIE = /*@cc_on!@*/false || !!document.documentMode;

function requireAll(req) {
    req.keys().map(function(key) { return req(key); });
}

require("./styles.scss");

if (isIE) {
    // IE + Edge don't like <use xlink:href> for referencing svgs inline - https://caniuse.com/#search=svg
    // Using a polyfill - https://github.com/jonathantneal/svg4everybody
    // More info - https://css-tricks.com/svg-use-external-source/
    var svg4everybody = require('svg4everybody');
    svg4everybody();
}

requireAll(require.context("./icons", true, /\.svg$/));
