var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var Chip8Registers = require('./chip8-registers');

describe('Chip8Registers Module', function() {
  var registers = new Chip8Registers();

  describe('attributes', function() {
    it('should have an I register', function() {
      expect(registers.I).to.equal(0);
    });
    it('should have a program counter PC register', function() {
      expect(registers.PC).to.equal(0);
    });
    it('should have registers V0-VF', function() {
      expect(registers.V0).to.equal(0);
      expect(registers.V1).to.equal(0);
      expect(registers.V2).to.equal(0);
      expect(registers.V3).to.equal(0);
      expect(registers.V4).to.equal(0);
      expect(registers.V5).to.equal(0);
      expect(registers.V6).to.equal(0);
      expect(registers.V7).to.equal(0);
      expect(registers.V8).to.equal(0);
      expect(registers.V9).to.equal(0);
      expect(registers.VA).to.equal(0);
      expect(registers.VB).to.equal(0);
      expect(registers.VC).to.equal(0);
      expect(registers.VD).to.equal(0);
      expect(registers.VE).to.equal(0);
      expect(registers.VF).to.equal(0);
    });
  });
});
