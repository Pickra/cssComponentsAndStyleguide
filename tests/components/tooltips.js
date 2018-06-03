module.exports = {
    "Tooltip active accessibility": browser => {
        const container = "#kssref-components-tooltips .kss-modifier__default-name + .kss-modifier__example";
        const defaultSibling = `${container} .tooltip-sibling`;
        const toolTip = `${container} .tooltip`;

        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe()
            .moveToElement(defaultSibling, 10, 10)
            .waitForElementVisible(toolTip)
            .runAxe(container)
            .end();
    }
};