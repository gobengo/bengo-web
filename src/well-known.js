var express = require('express')

module.exports = function createWellKnownApp() {
  var router = express.Router()
  router.get('/.well-known/webfinger', function (req, res, next) {
    // https://tools.ietf.org/html/rfc7033#section-4.4
    var jrd = {
      links: [{
        rel: 'webmention',
        href: 'https://webmention.io/bengo.is/webmention'
      }]
    }
    if ('subject' in req.query) {
      jrd.subject = req.query.subject
    }
    res.json(jrd)
  })
  return router
}
