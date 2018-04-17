const fs = require('fs');
const path = require('path');

const axePath = path.resolve('./node_modules/axe-core/axe.min.js');
const axe = fs.readFileSync(axePath, 'utf8');

module.exports.command = function injectAxe() {
  this.execute(function(js) { eval(js); }, [axe]);
  return this;
}
