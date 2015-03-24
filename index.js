var log = require('debug')('bengo-web')
var port = process.env.PORT || 80

var server = require('express')()

server.get('/', function (req, res) {
  var html = require('fs').readFileSync(__dirname+'/index.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
})

log('listening on port '+port)
server.listen(port)
