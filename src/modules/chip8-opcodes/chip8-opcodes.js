var table = {};

table[0x00E0] = function() {
  // Clear video
  this.video.clear();
};
table[0x00EE] = function() {
  // Return from subroutine
};
table[0xA000] = function(address) {
  // Sets I to the address NNN.
  this.registers.I = address;
};

function Chip8Opcodes() {
  table: table
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
