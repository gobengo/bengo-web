#!/usr/bin/env node

var log = require('debug')('bengo-web')
var fs = require('fs');
var server = exports.server = require('./src/server');

if (require.main === module) {
    main();
}

function main() {
  var port = process.env.PORT || 80;
  var httpsPort = process.env.PORT_HTTPS || 443;
  var httpsCertPath = process.env.ssl_cert;
  var httpsKeyPath = process.env.ssl_key;
  var bengoServer = server.create();
  // HTTP
  log('listening for HTTP on port '+port)
  bengoServer.listen(port);
  // HTTPS (maybe)
  if (httpsPort && httpsKeyPath && httpsCertPath) {
    var httpsOptions = {
      key: fs.readFileSync(httpsKeyPath),
      cert: fs.readFileSync(httpsCertPath)
    };
    log('listening for HTTPS on port '+httpsPort)
    require('https')
      .createServer(httpsOptions, bengoServer)
      .listen(httpsPort)
  } else {
    log('skipping HTTPS because no key/cert')
  }
}
