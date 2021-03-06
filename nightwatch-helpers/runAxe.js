const chalk = require('chalk');

function runAxe(selector = 'html', options = {}, passedMessage) {
  this.executeAsync(function(selector, options, done) {
    (function(axe) {
      const el = document.querySelector(selector);

      axe.run(el, options, function(err, results) {
        if (err) { done({ error: err.toString() }); }
        done({ results: results });
      });
    })(window.axe);

  }, [selector, options], function(res) {
    const { results } = res.value;
    const { passes = [], violations = [] } = results;

    if (!!passes.length) {
      const message = `💪 💪 💪  ${passes.length} accessibility tests passed 💪 💪 💪 `;
      this.assert.ok(chalk.bold.green(passedMessage ? passedMessage : message));
    }

    if (!!violations.length) {
        console.log(chalk.bold.keyword('crimson')('💩 🔥 💥  FIX THE FOLLOWING 💩 🔥 💥 \n'));

        violations.forEach(violation => {
            const { help, helpUrl, id, nodes } = violation;
            const fail = chalk.underline.bold.red(`${help}!`.toUpperCase());
            const helpLabel = chalk.keyword('crimson')(`\nGet help with ${id}: `);
            const link = chalk.keyword('aquamarine')(helpUrl + '\n');

            console.log(fail + helpLabel + link);
    
            nodes.forEach(node => {
                const { target, html } = node;
                const cssPath = chalk.keyword('fuchsia').bold(target);
                const HTML = chalk.keyword('fuchsia').bold(html);

                console.log(`HTML: ${HTML}`)
                console.log(`CSS PATH: ${cssPath}`)
                this.assert.fail(`TYPE: ${id} - CSS PATH: ${cssPath}`);
            });

            console.log(`💩 🔥 💥 💩 🔥 💥 💩 🔥 💥 💩 🔥 💥\n`);
        });
    }

    return this;
  })
}

module.exports.command = runAxe;