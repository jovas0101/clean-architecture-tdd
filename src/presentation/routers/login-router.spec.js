class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email || !httpRequest.body.passoword) {
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

  it('Should return 400 if no password is provived', () => {
    const sut = new LoginRouter()

    const httpRequest = {
      body: {
        email: 'any_email@gmail.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
