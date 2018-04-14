module.exports = {
    "Test Index Page Accessibility": function(browser) {
        browser
            .url(`${browser.launchUrl}index.html`)
            .axeInject()
            .axeRun("body");
    }
};