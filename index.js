var log = require('debug')('bengo-web')
var port = process.env.PORT || 80

var server = require('express')()

var html = require('fs').readFileSync(__dirname+'/index.html');
server.get('/', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(html);
})

log('listening on port '+port)
server.listen(port)
