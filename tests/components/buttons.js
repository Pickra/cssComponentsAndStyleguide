module.exports = {
    beforeEach: browser => {
        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe();
    },

    "Primary button hovered color-contrast": browser => {
        const primaryBtn = "button.button--primary:first-of-type";

        browser
            .testHoveredColorContrast(primaryBtn)
            .end();
    },

    "Warning button hovered color-contrast": browser => {
        const warningBtn = "button.button--warning:first-of-type";

        browser
            .testHoveredColorContrast(warningBtn)
            .end();
    },

    "Go button hovered color-contrast": browser => {
        const goBtn = "button.button--go:first-of-type";

        browser
            .testHoveredColorContrast(goBtn)
            .end();
    },

    "Light button hovered color-contrast": browser => {
        const lightBtn = "button.button--light:first-of-type";

        browser
            .testHoveredColorContrast(lightBtn)
            .end();
    }
};