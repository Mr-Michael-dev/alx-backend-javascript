// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let mySpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    mySpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    mySpy.restore();
  });

  it('should call Utils.calculateNumber with SUM and the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
  
  it('should log the total to the console', () => {
    sendPaymentRequestToApi(100, 20);

    expect(mySpy.getCall(0).args[0]).to.equal('The total is: 10');
  });
});
