document.addEventListener('DOMContentLoaded', function() {
  Chip8 = require('../../src/chip8');
  chip8 = new Chip8(function() {console.log('beep')});
  chip8.draw();

  console.log('chip8 is here!');
});
