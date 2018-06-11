var openDrawerBtn = "#open-drawer";
var drawer = "#drawer";

module.exports = {
    "Drawers active accessibility": browser => {
        browser
            .url(`${browser.launchUrl}section-components.html`)
            .injectAxe()
            .moveToElement(openDrawerBtn, 10, 10)
            .click(openDrawerBtn)
            .waitForElementVisible(drawer)
            .runAxe(drawer)
            .end();
    }
};