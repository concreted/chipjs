var constants = require('../chip8-constants');

var WHITE = '#FFFFFF';
var BLACK = '#000000';

function VideoCanvas(canvas, width, height, pixelWidth, pixelHeight) {
  this.width = width;
  this.height = height;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;

  canvas.width = this.width * this.pixelWidth;
  canvas.height = this.height * this.pixelHeight;
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
}

VideoCanvas.prototype = {
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawBuffer: function(buffer) {
    for(var y = 0; y < 32; y++) {
      for(var x = 0; x < 64; x++) {
        this._drawPixel(buffer[(y * 64) + x], {x: x, y: y});
      }
    }
  },

  _drawPixel: function(value, location) {
    if (value) {
      this.context.fillStyle=WHITE;
    } else {
      this.context.fillStyle=BLACK;
    }
    this.context.fillRect(
      location.x * this.pixelWidth,
      location.y * this.pixelHeight,
      this.pixelWidth,
      this.pixelHeight
    );
  },
}

module.exports = VideoCanvas;
