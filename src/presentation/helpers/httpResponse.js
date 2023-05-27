const MissingParamError = require('./missing-param-error')

module.exports = class HttpResponse {
  static bad_request (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static server_error () {
    return {
      statusCode: 500
    }
  }
}
