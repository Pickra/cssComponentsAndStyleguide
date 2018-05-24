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

    "Select active state accessibility": browser => {
        const select = "#a";

        browser
            .click(select)
            .runAxe(select)
            .end();
    },

    "Toggle-switch active state accessibility": browser => {
        const toggleSwitch = "#toggle-sm-switch";
        const checkbox = "#toggle-sm-input";

        browser
            .click(checkbox)
            .runAxe(toggleSwitch)
            .end();
    }
};