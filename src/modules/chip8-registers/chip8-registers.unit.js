var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var Chip8Registers = require('./chip8-registers');

describe('Chip8Registers Module', function() {
  var register = new Chip8Registers();

  describe('attributes', function() {
    it('should have an I register', function() {
      expect(register.I).to.equal(0);
    });
    it('should have registers V0-VF', function() {
      expect(register.V0).to.equal(0);
      expect(register.V1).to.equal(0);
      expect(register.V2).to.equal(0);
      expect(register.V3).to.equal(0);
      expect(register.V4).to.equal(0);
      expect(register.V5).to.equal(0);
      expect(register.V6).to.equal(0);
      expect(register.V7).to.equal(0);
      expect(register.V8).to.equal(0);
      expect(register.V9).to.equal(0);
      expect(register.VA).to.equal(0);
      expect(register.VB).to.equal(0);
      expect(register.VC).to.equal(0);
      expect(register.VD).to.equal(0);
      expect(register.VE).to.equal(0);
      expect(register.VF).to.equal(0);
    });
  });
});
