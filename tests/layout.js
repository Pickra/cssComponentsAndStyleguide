module.exports = {
    "Layout page accessibility": browser => {
        browser
            .url(`${browser.launchUrl}section-layout.html`)
            .injectAxe()
            .runAxe()
            .end();
    }
};