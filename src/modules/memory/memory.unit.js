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

  describe('create8Bit2D', function() {
    it('should return a 2D array with height/width set to arguments', function() {
      var grid = memory.create8Bit2D(64, 32);
      expect(grid[0].length).to.equal(64);
      expect(grid.length).to.equal(32);
    });
  });
});
