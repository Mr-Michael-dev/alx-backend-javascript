// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let mySpy;

  beforeEach(() => {
    mySpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    mySpy.restore();
  });

  it('Verify that the console is logging the correct string', () => {
    sendPaymentRequestToApi(100, 20);

    expect(mySpy.calledOnce).to.be.true;
    expect(mySpy.getCall(0).args[0]).to.equal('The total is: 120');
  });

  it('Verify that the console is logging the correct string', () => {
    sendPaymentRequestToApi(10, 10);

    expect(mySpy.calledOnce).to.be.true;
    expect(mySpy.getCall(0).args[0]).to.equal('The total is: 20');
  });
});
