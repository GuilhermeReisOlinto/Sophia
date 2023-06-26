const LoginRouter = require('./login-router');
const MissingParamError = require('../helpers/missing-error');

describe('Login Router', () => {
  test('Shoube return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }

    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  })
})

describe('Login Router', () => {
  test('Shoube return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'any_email@gmail.com'
      }
    }

    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('password'));
  })
})

describe('Login Router', () => {
  test('Shoube return 500 if httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route();
    expect(httpResponse.statusCode).toBe(500);
  })
})
