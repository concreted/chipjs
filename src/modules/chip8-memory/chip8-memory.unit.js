var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var Chip8Memory = require('./chip8-memory');

describe('Chip8Memory', function() {
  var memory = new Chip8Memory();
  it('should return an array of 4096 8-bit blocks', function() {
    expect(memory.RAM.length).to.equal(4096);
    expect(memory.RAM[0]).to.equal(0);
    expect(memory.RAM[4095]).to.equal(0);
  });
});
