var log = require('debug')('bengo-web')

var server = exports.server = require('./src/server').create();

if (require.main === module) {
    main();
}

function main() {
  var port = process.env.PORT || 80
  log('listening on port '+port)
  server.listen(port);
}
