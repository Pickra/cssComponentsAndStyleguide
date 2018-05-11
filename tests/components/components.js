module.exports = {
    "Components page accessibility": browser => {
        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe()
            .runAxe()
            .end();
    }
};