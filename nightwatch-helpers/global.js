// https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js

module.exports = {
    waitForConditionTimeout: 5000,

    afterEach: function(browser, done) {
        // https://github.com/nightwatchjs/nightwatch/issues/597#issuecomment-376332346
        browser.end(function() { done(); });
    }
}