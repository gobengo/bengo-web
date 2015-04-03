var bengo = {}
bengo.web = require('../index')

var test = require('tape')

test('bengo.web exists', function (t) {
  t.ok(bengo.web)
  t.ok(bengo.web.server)
  t.equal(typeof bengo.web.server, 'function')
  t.end()
})
