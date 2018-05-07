const runOnly = {
    runOnly: {
        type: "rules",
        values: ["color-contrast"]
    }
};

function testFocusStyles(selector) {
    const passedMessage = `Color contrast passed for the focused selector: ${selector}`;

    this.execute(
        function(selector) {
            const el = document.querySelector(selector);
            el.focus();
            return el;
        },
        [selector],
        function(res) {
            const elId = res.value.ELEMENT;

            this.elementIdCssProperty(elId, "outline", prop => {
                const doesntHaveNone = !prop.value.includes("none");
                const doesntHave0px = !prop.value.includes("0px");

                if (doesntHaveNone && doesntHave0px) {
                    this.assert.ok(true, 'The selector has an outline focused value');
                } else {
                    this.assert.fail('The selector has no outline focused value');
                }
            });
            
            this.runAxe(selector, runOnly, passedMessage);
        }
    );
}

module.exports.command = testFocusStyles;