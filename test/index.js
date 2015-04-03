var bengo = {}
bengo.web = require('../index')


var test = require('tape')
var testRequest = require('supertest-as-promised')

test('bengo.web exists', function (t) {
  t.ok(bengo.web)
  t.ok(bengo.web.server)
  t.equal(typeof bengo.web.server.create, 'function')
  t.end()
})

test('server serves bengo html', function (t) {
  testRequest(bengo.web.server.create())
    .get('/')
    .expect(200)
    .then(function (res) {
      t.ok(res, 'res is truthy')
      t.ok(/<html>/.test(res.text), 'is html')
    })
    .then(t.end, t.end)
})
