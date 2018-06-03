const firstSidebarLink = ".layout__nav-item:first-of-type .layout__nav-link";

module.exports = {
    beforeEach: browser => {
        browser
            .url(`${browser.launchUrl}index.html`)
            .injectAxe();
    },

    "Index page accessibility": browser => {
        browser
            .runAxe()
            .end();
    },

    "Index sidebar hovered link color-contrast": browser => {
        browser
            .testHoveredColorContrast(firstSidebarLink)
            .end();
    },

    "Index sidebar focused link color-contrast": browser => {
        browser
            .testFocusStyles(firstSidebarLink)
            .end();
    }
};