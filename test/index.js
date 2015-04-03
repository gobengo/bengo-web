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
      t.ok(/DOCTYPE html/.test(res.text), 'is html')
    })
    .then(t.end, t.end)
})

test('/notes/ serves html', function (t) {
  testRequest(bengo.web.server.create())
    .get('/notes/')
    .expect(200)
    .then(function (res) {
      t.ok(res, 'res is truthy')
      t.ok(/DOCTYPE html/.test(res.text), 'is html')
    })
    .then(t.end, t.end)
})


test('/notes/ links to specific notes', function (t) {
  testRequest(bengo.web.server.create())
    .get('/notes/')
    .expect(200)
    .then(function (res) {
      t.ok(res, 'res is truthy')

      t.ok(/20150324-first/.test(res.text), 'links to first post')
      t.ok(/20150402-notes/.test(res.text), 'links to second post about /notes/')
    })
    .then(t.end, t.end)
})

