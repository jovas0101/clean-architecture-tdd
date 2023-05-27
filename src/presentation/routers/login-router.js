const HttpResponse = require('../helpers/httpResponse')

module.exports = class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return HttpResponse.server_error()
    }

    const { email, password } = httpRequest.body

    if (!email) {
      return HttpResponse.bad_request('email')
    }

    if (!password) {
      return HttpResponse.bad_request('password')
    }
  }
}
