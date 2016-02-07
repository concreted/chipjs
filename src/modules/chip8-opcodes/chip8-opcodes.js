var table = {};

table[0x00E0] = function() {
  // Clear video
  this.video.clear();
};
table[0x00EE] = function() {
  // Return from subroutine
};
table[0xA000] = function(opcode) {
  // Sets I to the address NNN.
  address = opcode & 0x0FFF;
  this.registers.I = address;
};

table[0xD000] = function(opcode) {
  var X = opcode & 0x0F00;
  var Y = opcode & 0x00F0;
  var n = opcode & 0x000F;
  var VX = this.registers.V[X];
  var VY = this.registers.V[Y];
  var I = this.registers.I;

  // draw n rows of 8 bits from memory location I
  // at coordinates (VX,VY)
  for (var i = 0; i < n; i++) {
    // for (var j = 0; j < 8; j++) {
    //   this.videoBuffer[(i + VY) % 32][(j + VX) % 64] = 1;
    // }
    
  }
  this.drawFlag = 1;
}

table[0xF000] = function(opcode) {
  var extracted_opcode = opcode & 0xF0FF;
  table[extracted_opcode](opcode);
};

table[0xF029] = function(opcode) {
  var X = opcode & 0x0F00;
  this.registers.I = (5 * this.registers.V[X]) & 0xFFF;
};

function Chip8Opcodes() {
  this.table = table;
}

Chip8Opcodes.prototype = {
  lookup: function(opcode) {
    if (table[opcode]) {
      // Handle opcodes without variables
      return table[opcode];
    } else {
      return table[opcode & 0xF000];
    }
  }
}

module.exports = Chip8Opcodes;
