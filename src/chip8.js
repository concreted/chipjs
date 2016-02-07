var memory = require('./modules/memory');
var constants = require('./modules/chip8-constants');
var Chip8Registers = require('./modules/chip8-registers');
var Chip8Timers = require('./modules/chip8-timers');
var VideoCanvas = require('./modules/video-canvas');
var Chip8Opcodes = require('./modules/chip8-opcodes');

function Chip8(beep) {
  this.ram = memory.create8Bit(constants.MEMORY_SIZE_BYTES);
  // this.stack = memory.create8Bit(constants.STACK_SIZE_BYTES);
  this.stack = new Uint16Array(16);
  this.timers = new Chip8Timers(beep);
  this.registers = new Chip8Registers();
  this.sp = 0;
  this.drawFlag = 0;

  // this.videoBuffer = memory.create8Bit2D(
  //   constants.SCREEN_WIDTH,
  //   constants.SCREEN_HEIGHT
  // );

  this.videoBuffer = new Uint8Array(256);

  this.video = new VideoCanvas(
    document.getElementById('chip8'),
    constants.SCREEN_WIDTH,
    constants.SCREEN_HEIGHT,
    5,
    5
  );

  this.opcodes = new Chip8Opcodes;
}

Chip8.prototype = {
  start: function() {
    this._mainLoopInterval = setInterval(
      this.mainLoop.bind(this),
      constants.REFRESH_MS
    );
  },

  stop: function() {
    clearInterval(this._mainLoopInterval);
  },

  cycle: function() {
    this._executeOpcode();

    // advance program counter
    this.registers.PC += 2;

    // update timers
    this.timers.update();
  },

  _executeOpcode: function() {
    // fetch opcode
    var opcode = this._decodeOpcodeAtLocation(this.registers.PC);
    console.log(opcode);

    // decode opcode
    // get first four bits of opcode for lookup, right 12 bits for variables
    var rightBits = opcode & 0x0FFF;
    var instruction = this.opcodes.lookup(opcode);
    console.log(instruction);
    // execute opcode with this context
    instruction.bind(this)(opcode);
  },

  _decodeOpcodeAtLocation: function(pc) {
    return this.ram[pc] << 8 | this.ram[pc + 1];
  },

  draw: function() {
    this.video.drawBuffer(this.videoBuffer);
  },

  loadROM: function(rom) {

  },

  mainLoop: function() {
    this.cycle();
    if (this.drawFlag) {
      this.draw();
      this.drawFlag = 0;
    }
  }
}

module.exports = Chip8;
