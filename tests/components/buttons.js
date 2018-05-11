module.exports = {
    beforeEach: browser => {
        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe();
    },

    "Primary button hovered button color-contrast": browser => {
        const primaryBtn = "button.button--primary:first-of-type";

        browser
            .testHoverdColorContrast(primaryBtn)
            .end();
    },

    "Warning button hovered button color-contrast": browser => {
        const warningBtn = "button.button--warning:first-of-type";

        browser
            .testHoverdColorContrast(warningBtn)
            .end();
    },

    "Go button hovered button color-contrast": browser => {
        const goBtn = "button.button--go:first-of-type";

        browser
            .testHoverdColorContrast(goBtn)
            .end();
    }
};