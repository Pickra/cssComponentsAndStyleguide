const chalk = require('chalk');

module.exports.command = function runAxe(selector = 'html', options = {}) {
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
      const passedMessage = `💪 💪 💪  ${passes.length} accessibility tests passed 💪 💪 💪 `;
      this.assert.ok(chalk.bold.green(passedMessage));
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
                const { target } = node;
                const elLabel = chalk.keyword('crimson').bold('Element: ');
                const el = chalk.keyword('fuchsia').bold(target);

                this.assert.fail( elLabel + el );
            });

            console.log(`💩 🔥 💥 💩 🔥 💥 💩 🔥 💥 💩 🔥 💥\n`);
        });
    }

    return this;
  })
}