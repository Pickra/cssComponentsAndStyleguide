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
        console.log(chalk.bold.red('💥 💩 🔥  FIX THE FOLLOWING 💥 💩 🔥 \n'));

        violations.forEach(violation => {
            const { help, helpUrl, id, nodes } = violation;
    
            console.log(chalk.bold.white.bgRed(` ${help}\n Reference: ${helpUrl}\n`));
    
            nodes.forEach(node => {
                const { target } = node;
                this.assert.fail(chalk.bgRed.white.bold(`Type: ${id}, Element: ${target}`));
            });

            console.log(`💥 💩 🔥 💥 💩 🔥 💥 💩 🔥 💥 💩 🔥\n`);
        });
    }

    return this;
  })
}