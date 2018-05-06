const chromeDriver = require("chromedriver");

module.exports = {
    waitForConditionTimeout: 5000,

    after: done => {
        chromeDriver.stop();
        done();
    }
}