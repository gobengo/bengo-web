exports.create = function createBengoWebServer() {
  var server = require('express')()

  server.get('/', function (req, res) {
    var html = require('fs').readFileSync(__dirname+'/index.html');
    res.set('Content-Type', 'text/html');
    res.send(html);
  })

  return server;
}
