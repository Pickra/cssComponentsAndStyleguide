module.exports = {
    "Test Index Page Accessibility": function(browser) {
        browser
            .url(`${browser.launchUrl}section-typography.html`)
            .injectAxe()
            .runAxe()
            .end();
    }
};