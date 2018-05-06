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
        const firstSidebarLink = ".layout__nav-item:first-of-type .layout__nav-link";

        browser
            .testHoverdColorContrast(firstSidebarLink)
            .end();
    }
};