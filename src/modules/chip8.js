var memory = require('./memory');
var constants = require('./chip8-constants');
var Chip8Registers = require('./chip8-registers');
var Chip8Timers = require('./chip8-timers');

function Chip8() {
  this.ram = memory.create8Bit(constants.MEMORY_SIZE_BYTES);
  this.stack = memory.create8Bit(constants.STACK_SIZE_BYTES);
  this.registers = new Chip8Registers();
  this.timers = new Chip8Timers();

  this.video = memory.create8Bit2D(constants.SCREEN_WIDTH, constants.SCREEN_HEIGHT);
}

Chip8.prototype = {

}

module.exports = Chip8;
