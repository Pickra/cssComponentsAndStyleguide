const chromeDriver = require("chromedriver");

module.exports = {
    waitForConditionTimeout: 5000,

    after: function(done) {
        chromeDriver.stop();
        done();
    }
}