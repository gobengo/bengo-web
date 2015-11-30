var consolidate = require('consolidate')
var Handlebars = require('handlebars')
var handlebarsHelper = require('handlebars-helper')
handlebarsHelper.help(Handlebars);

module.exports = function render(templatePath, context, done) {
  return consolidate.handlebars(templatePath, context, done)
};
