module.exports = {
    beforeEach: browser => {
        browser
            .url(`${browser.launchUrl}section-forms.html`)
            .injectAxe();
    },

    "Forms page accessibility": browser => {
        browser
            .runAxe()
            .end();
    },

    "Input focused link color-contrast": browser => {
        const input = "#inputs";

        browser
            .testFocusStyles(input)
            .end();
    },

    "Select active accessibility": browser => {
        const select = "#a";

        browser
            .runAxe(select)
            .end();
    }
};