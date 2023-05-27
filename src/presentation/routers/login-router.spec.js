class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500
      }
    }

    const { email, passoword } = httpRequest.body
    if (!email || !passoword) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  it('Should return 400 if no email is provived', () => {
    const sut = new LoginRouter()

    const httpRequest = {
      body: {
        passoword: 'any_pass'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
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
