module.exports = {
  create8Bit: function(n) {
    return new Uint8Array(n);
  },

  create8Bit2D: function (w, l) {
    var grid = [];
    for (var i = 0; i < l; i++) {
      var row = new Uint8Array(w);
      grid.push(row);
    }
    return grid;
  }
}
