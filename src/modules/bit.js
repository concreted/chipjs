module.exports = {
  isNBit: function(x, n) {
    if (n < 0) {
      throw new RangeError('isNBit: n expects a positive integer, received: ' + n);
    }
    if (0 <= x && x < Math.pow(2, n)) {
      return true;
    }
    return false;
  },

  is8Bit: function(x) {
    return this.isNBit(x, 8);
  },

  is16Bit: function(x) {
    return this.isNBit(x, 16);
  },

  assert8Bit: function(x) {
    if (!this.is8Bit(x)) {
      throw new RangeError('assert8Bit: expected an 8-bit integer, recieved: ' + x);
    }
  },

  assert16Bit: function(x) {
    if (!this.is16Bit(x)) {
      throw new RangeError('assert16Bit: expected a 16-bit integer, recieved: ' + x);
    }
  }
}
