function requireAll(req) {
    req.keys().map(function(key) { req(key); });
}

require("./styles.scss");

requireAll(require.context("./icons", true, /\.svg$/));
