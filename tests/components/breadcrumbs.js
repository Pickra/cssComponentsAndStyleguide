module.exports = {
    "Breadcrumbs hovered color-contrast": browser => {
        const breadcrumbs = "#breadcrumbs";
        
        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe()
            .testHoveredColorContrast(breadcrumbs)
            .end();
    },
};