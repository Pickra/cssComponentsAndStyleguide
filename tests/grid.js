module.exports = {
    "Grid page accessibility": browser => {
        browser
            .url(`${browser.launchUrl}section-grid.html`)
            .injectAxe()
            .runAxe()
            .end();
    }
};