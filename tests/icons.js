module.exports = {
    "Icons page accessibility": browser => {
        browser
            .url(`${browser.launchUrl}section-icons.html`)
            .injectAxe()
            .runAxe()
            .end();
    }
};