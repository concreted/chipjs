var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var memory = require('./memory');

describe('Memory', function() {
  describe('create8Bit', function() {
    var chip8Memory = memory.create8Bit(4096);
    it('should return an array of n 8-bit blocks', function() {
      expect(chip8Memory.length).to.equal(4096);
      expect(chip8Memory[0]).to.equal(0);
      expect(chip8Memory[4095]).to.equal(0);
    });
  });
});
