var serve = {
  index: require('serve-index'),
  static: require('serve-static')
}
var render = {
  index: require('./render-dir-index')
}
var webmention = require('./webmention')

var NOTES_DIR = dataDir('notes')
var QUESTIONS_DIR = dataDir('questions')
var WEBMENTION_URI = 'https://webmention.io/bengo.is/webmention'

exports.create = function createBengoWebServer() {
  var server = require('express')()
  server.use(webmention.headerMiddleware(WEBMENTION_URI))

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
  server.use('/notes/', serve.static(NOTES_DIR, {
    extensions: ['html', 'md', 'txt']
  }))

  server.get('/questions$', function (req, res) {
    res.redirect(302, '/questions/');
  })
  server.use('/questions/', serve.index(QUESTIONS_DIR, {
    icons: true,
    template: render.index
  }))
  server.use('/questions/', serve.static(QUESTIONS_DIR, {
    extensions: ['html', 'md', 'txt']
  }))

  server.use(require('./well-known')())

  return server;
}

function dataDir(name) { return __dirname + '/../' + name; }
