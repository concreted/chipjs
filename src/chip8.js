var memory = require('./modules/memory');
var constants = require('./modules/chip8-constants');
var Chip8Registers = require('./modules/chip8-registers');
var Chip8Timers = require('./modules/chip8-timers');

function Chip8(beep) {
  this.ram = memory.create8Bit(constants.MEMORY_SIZE_BYTES);
  this.stack = memory.create8Bit(constants.STACK_SIZE_BYTES);
  this.timers = new Chip8Timers(beep);
  this.registers = new Chip8Registers();

  this.video = memory.create8Bit2D(constants.SCREEN_WIDTH, constants.SCREEN_HEIGHT);
}

Chip8.prototype = {
  start: function() {
    this.timers.start();
  },

  stop: function() {
    this.timers.stop();
  }
}

module.exports = Chip8;