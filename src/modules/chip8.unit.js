var proxyquire = require('proxyquire');
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var constants = require('./chip8-constants');

var stubs = {
  memory: {
    create8Bit: sinon.stub().returnsArg(0)
  },
  Chip8Registers: sinon.stub(),
  Chip8Timers: sinon.stub()
}

var Chip8 = proxyquire('./chip8', {
  './memory': stubs.memory,
  './chip8-registers': stubs.Chip8Registers,
  './chip8-timers': stubs.Chip8Timers
});

describe('Chip8', function() {
  var chip8 = null;

  describe('attributes', function() {
    before(function() {
      chip8 = new Chip8();
    });
    it('should set ram to 4096-byte array', function() {
      expect(stubs.memory.create8Bit).to.have.been.called;
      expect(stubs.memory.create8Bit).to.have.been.calledWith(constants._MEMORY_SIZE_BYTES);
      expect(chip8.ram).to.equal(4096);
    });
    it('should set stack to 64-byte array', function() {
      expect(stubs.memory.create8Bit).to.have.been.calledWith(constants._STACK_SIZE_BYTES);
      expect(chip8.stack).to.equal(64);
    });
    it('should create registers', function() {
      expect(stubs.Chip8Registers).to.have.been.calledWithNew;
    });
    it('should create timers', function() {
      expect(stubs.Chip8Timers).to.have.been.calledWithNew;
    });
  });
});
