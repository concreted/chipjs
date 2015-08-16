function Video(x, y) {
  this.screen = this._createScreen(x, y);
}

Video.prototype = {
  _createScreen: function (x, y) {
    var screen = [];
    for (var i = 0; i < y; i++) {
      var row = new Uint8Array(x);
      screen.push(row);
    }
    return screen;
  }
}

module.exports = Video;
