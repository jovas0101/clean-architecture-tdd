class LoginRouter {
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
class HttpResponse {
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

class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}

describe('Login Router', () => {
  it('Should return 400 if no email is provived', () => {
    const sut = new LoginRouter()

    const httpRequest = {
      body: {
        password: 'any_pass'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter()

    const httpRequest = {
      body: {
        email: 'any_email@gmail.com'
      }
    }

    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('Should return 500 if no httpRequest  is provived', () => {
    const sut = new LoginRouter()

    const httpResponse = sut.route(undefined)
    expect(httpResponse.statusCode).toBe(500)
  })

  it('Should return 500 if no httpRequest has no body', () => {
    const sut = new LoginRouter()

    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})
