document.addEventListener('DOMContentLoaded', function() {
  Chip8 = require('../../src/chip8');
  chip8 = new Chip8(function() {console.log('beep')});
  chip8.draw();

  console.log('chip8 is here!');

  var pc = 0;
  chip8.registers.PC = pc;
  chip8.registers.V[0] = 60;
  chip8.ram[pc] = 0xD0;
  chip8.ram[pc + 1] = 0x0F;
  chip8.mainLoop();
});
