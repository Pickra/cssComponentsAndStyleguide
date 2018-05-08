const firstHoverableRow = ".table__row--hoverable:first-of-type";

module.exports = {
    beforeEach: browser => {
        browser
            .url(`${browser.launchUrl}section-tables.html`)
            .injectAxe();
    },

    "Tables page accessibility": browser => {
        browser
            .runAxe()
            .end();
    },

    "Tables hovered row color-contrast": browser => {
        browser
            .testHoverdColorContrast(firstHoverableRow)
            .end();
    }
};