// integration tests for express app
const request = require('request');
const { expect } = require('chai');

describe('GET /', () => {
  it('should return a response code of 200', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('should return the right body', () => new Promise((done) => {
    request.get('http://127.0.0.1:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});
