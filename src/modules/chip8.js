var constants = require('./chip8-constants');
var memory = require('./memory');
var Chip8Registers = require('./chip8-registers');
var Chip8Timers = require('./chip8-timers');

function Chip8() {
  this.ram = memory.create8Bit(constants._MEMORY_SIZE_BYTES);
  this.stack = memory.create8Bit(constants._STACK_SIZE_BYTES);
  this.registers = new Chip8Registers();
  this.timers = new Chip8Timers();
  console.log(this);
}

Chip8.prototype = {

}

module.exports = Chip8;
