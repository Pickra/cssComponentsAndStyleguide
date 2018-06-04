module.exports = {
    "Tabs item hovered color-contrast": browser => {
        const tabsItem = ".tabs__labels .tabs__label:nth-of-type(2)";

        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe()
            .testHoveredColorContrast(tabsItem)
            .end();
    }
};