const chalk = require('chalk');

module.exports.command = function runAxe(selector = 'html', options = {}) {
  this.executeAsync(function(selector, options, done) {
    (function(axe) {
      var el = document.querySelector(selector)

      axe.run(el, options, function(err, results) {
        if (err) { done({ error: err.toString() }); }
        done({ results: results });
      });
    })(window.axe);

  }, [selector, options], function(res) {
    const { results } = res.value;
    const { passes = [], violations = [] } = results;

    if (!!passes.length) {
        passes.forEach((test, index) => {
          this.assert.ok(`#${index + 1} = ${test.id}: ${test.help}`);
        });
    
        console.log(chalk.bold.green('\n💪 💪 💪  GREAT JOB ON THESE^ 💪 💪 💪\n'));
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