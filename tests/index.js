module.exports = {
    "Test Index Page Accessibility": function(browser) {
        browser
            .url(`${browser.launchUrl}index.html`)
            .injectAxe()
            .runAxe()
            .end();
    }
};