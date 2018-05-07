module.exports = {
    "Colors page accessibility": browser => {
        browser
            .url(`${browser.launchUrl}section-colors.html`)
            .injectAxe()
            .runAxe()
            .end();
    }
};