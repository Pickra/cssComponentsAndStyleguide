const runOnly = {
    runOnly: {
        type: "rules",
        values: ["color-contrast"]
    }
};

function testHoveredColorContrast(selector) {
    const passedMessage = `Color contrast passed for the hovered selector: ${selector}`;

    this
        .waitForElementVisible(selector)
        .moveToElement(selector, 10, 10)
        .runAxe(selector, runOnly, passedMessage);
}

module.exports.command = testHoveredColorContrast;