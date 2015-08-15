var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var bit = require('./bit');

describe('bit module', function() {
  describe('isNBit', function() {
    it('should throw RangeError if n is negative', function() {
      expect(bit.isNBit.bind(bit, 1, -1)).to.throw(RangeError, "isNBit: n expects a positive integer, received: -1");
    });
    it('should return true if x is in range', function() {
      assert(bit.isNBit(1, 1));
      assert(bit.isNBit(255, 8));
      assert(bit.isNBit(65535, 16));
    });
    it('should return false if x is out of range', function() {
      assert.isFalse(bit.isNBit(-1, 1));
      assert.isFalse(bit.isNBit(100, 1));
      assert.isFalse(bit.isNBit(256, 8));
      assert.isFalse(bit.isNBit(65536, 16));
    });
  });

  describe('is8Bit', function() {
    before(function() {
      sinon.stub(bit, 'isNBit');
    });
    it('should call isNBit with x and 8', function() {
      bit.is8Bit(255);
      expect(bit.isNBit).to.have.been.calledWith(255, 8);
    });
    after(function() {
      bit.isNBit.restore();
    });
  });

  describe('is16Bit', function() {
    before(function() {
      sinon.stub(bit, 'isNBit');
    });
    it('should call isNBit with x and 16', function() {
      bit.is16Bit(65535);
      expect(bit.isNBit).to.have.been.calledWith(65535, 16);
    });
    after(function() {
      bit.isNBit.restore();
    });
  });

  describe('assert8Bit', function() {
    beforeEach(function() {
      sinon.stub(bit, 'is8Bit');
    })
    it('should call is8Bit', function() {
      bit.is8Bit.returns(true);
      bit.assert8Bit(255);
      expect(bit.is8Bit).to.have.been.calledWith(255);
    });
    it('should throw RangeError if x is out of range', function() {
      bit.is8Bit.returns(false);
      expect(bit.assert8Bit.bind(bit, 256)).to.throw(RangeError);
    });
    afterEach(function() {
      bit.is8Bit.restore();
    })
  });

  describe('assert16Bit', function() {
    beforeEach(function() {
      sinon.stub(bit, 'is16Bit');
    })
    it('should call is16Bit', function() {

    });
    it('should throw RangeError if x is out of range', function() {

    });
    afterEach(function() {
      bit.is16Bit.restore();
    })
  });
});

