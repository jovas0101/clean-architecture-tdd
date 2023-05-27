const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missing-param-error')

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
