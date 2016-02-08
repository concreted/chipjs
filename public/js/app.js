document.addEventListener('DOMContentLoaded', function() {
  Chip8 = require('../../src/chip8');
  chip8 = new Chip8(function() {console.log('beep')});
  chip8.draw();

  console.log('chip8 is here!');

  var pc = 512;
  var I = 528;
  chip8.registers.PC = pc;
  chip8.registers.I = I;

  drawLetter(0xD, 1, 1);
  drawLetter(0xE, 6, 1);
  drawLetter(0xA, 11, 1);
  drawLetter(0xD, 16, 1);
  drawLetter(0xB, 21, 1);
  drawLetter(0xE, 26, 1);
  drawLetter(0xE, 31, 1);
  drawLetter(0xF, 36, 1);
});

var drawLetter = function(hex, x, y) {
  chip8.registers.V[0] = x;
  chip8.registers.V[1] = y;
  chip8.registers.V[0xA] = hex;
  chip8.ram[chip8.registers.PC] = 0xFA;
  chip8.ram[chip8.registers.PC + 1] = 0x29;
  chip8.mainLoop();
  chip8.ram[chip8.registers.PC] = 0xD0;
  chip8.ram[chip8.registers.PC + 1] = 0x15;
  chip8.mainLoop();
}
