function requireAll(req) {
    req.keys().map(function(key) { return req(key); });
}

require("./styles.scss");

requireAll(require.context("./icons", true, /\.svg$/));
