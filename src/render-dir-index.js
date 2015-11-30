var render = require('./render')
var TEMPLATE_PATH = __dirname + '/templates/serve-index.html';

/**
 * Render HTML to list the resources in a directory
 */
module.exports = function (locals, done) {
  return render(TEMPLATE_PATH, locals, done);
}
