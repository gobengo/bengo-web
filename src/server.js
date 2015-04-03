exports.create = function createBengoWebServer() {
  var server = require('express')()

  server.get('/', function (req, res) {
    var html = require('fs').readFileSync(__dirname+'/index.html');
    res.set('Content-Type', 'text/html');
    res.send(html);
  })

  server.get('/notes$', function (req, res) {
    res.redirect(302, '/notes/');
  })
  server.get('/notes/', function (req, res) {
    var html = require('fs').readFileSync(__dirname+'/notes/index.html');
    res.set('Content-Type', 'text/html');
    res.send(html);
  })

  server.use('/notes/', require('serve-index')('../notes', {'icons': true}))
  server.use('/notes/', require('serve-static')(__dirname + '/../notes'))

  return server;
}
