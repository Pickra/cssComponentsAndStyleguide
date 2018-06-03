module.exports = {
    beforeEach: browser => {
        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe();
    },

    "Success alert close button hovered color-contrast": browser => {
        const successAlert = ".alert__close--success";

        browser
            .testHoveredColorContrast(successAlert)
            .end();
    },
    
    "Warning alert close button hovered color-contrast": browser => {
        const warningAlert = ".alert__close--warning";
        
        browser
            .testHoveredColorContrast(warningAlert)
            .end();
    },

    "Info alert close button hovered color-contrast": browser => {
        const infoAlert = ".alert__close--info";

        browser
            .testHoveredColorContrast(infoAlert)
            .end();
    }
};