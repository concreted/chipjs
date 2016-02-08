var proxyquire = require('proxyquire');
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var constants = require('./chip8-constants');

var stubs = {
  Chip8Registers: sinon.stub(),
  Chip8Timers: sinon.stub()
}

var Chip8 = proxyquire('./chip8', {
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
      expect(chip8.ram).to.equal(4096);
    });
    it('should set stack to 64-byte array', function() {
      expect(chip8.stack).to.equal(64);
    });
    it('should create registers', function() {
      expect(stubs.Chip8Registers).to.have.been.calledWithNew;
      expect(chip8.registers).to.not.equal(undefined);
    });
    it('should create timers', function() {
      expect(stubs.Chip8Timers).to.have.been.calledWithNew;
      expect(chip8.timers).to.not.equal(undefined);
    });
    it('should create video', function() {
      expect(chip8.video).to.equal('grid2d');
    });
  });
});
