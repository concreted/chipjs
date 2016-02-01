var memory = require('./modules/memory');
var constants = require('./modules/chip8-constants');
var Chip8Registers = require('./modules/chip8-registers');
var Chip8Timers = require('./modules/chip8-timers');
var VideoCanvas = require('./modules/video-canvas');

function Chip8(beep) {
  this.ram = memory.create8Bit(constants.MEMORY_SIZE_BYTES);
  this.stack = memory.create8Bit(constants.STACK_SIZE_BYTES);
  this.timers = new Chip8Timers(beep);
  this.registers = new Chip8Registers();

  this.videoBuffer = memory.create8Bit2D(
    constants.SCREEN_WIDTH,
    constants.SCREEN_HEIGHT
  );

  this.video = new VideoCanvas(
    document.getElementById('chip8'),
    constants.SCREEN_WIDTH,
    constants.SCREEN_HEIGHT,
    5,
    5
  );
}

Chip8.prototype = {
  start: function() {
    this.timers.start();

    this._mainLoopInterval = setInterval(
      this._mainLoop.bind(this),
      constants.REFRESH_MS
    );
  },

  stop: function() {
    this.timers.stop();
    clearInterval(this._mainLoopInterval);
  },

  cycle: function() {

  },

  draw: function() {
    this.video.drawBuffer(this.videoBuffer);
  },

  loadROM: function(rom) {

  },

  _mainLoop: function() {
    this.cycle();
    this.draw();
  }
}

module.exports = Chip8;
