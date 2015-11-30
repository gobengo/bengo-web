/**
 * Create an express middleware that will add a webmention Link
 * header to all responses, whose value is the provided uri.
 * http://webmention.net/
 */
exports.headerMiddleware = function (uri) {
  return function (req, res, next) {
    res.links({
      webmention: uri
    });
    next()
  }
}
