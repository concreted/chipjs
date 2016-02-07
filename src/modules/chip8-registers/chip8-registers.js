function Chip8Registers() {
  this.I = 0;
  this.PC = 0;
  this.V = new Uint16Array(16);
}

Chip8Registers.prototype = {

}

module.exports = Chip8Registers;
