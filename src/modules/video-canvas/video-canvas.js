var constants = require('../chip8-constants');
var memory = require('../memory');

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
    for(var i = 0; i < 32; i++) {
      for(var j = 0; j < 8; j++) {
        var byte = buffer[(i*8) + j];
        var byteLocation = {
          x: (j * this.pixelHeight) *8,
          y: i * this.pixelHeight
        }
        this._drawByte(byte, byteLocation);
      }
    }
  },

  _drawByte: function(byte, location) {
    var mask = 0x1;
    for (var i = 0; i < 8; i++) {
      var value = byte & mask;
      var pixelLocation = {
        x: location.x + (i * this.pixelWidth),
        y: location.y
      };
      this._drawPixel(value, pixelLocation);
      mask = mask << 1;
    }
  },

  _drawRow: function(row, location) {
    var that = this;
    row.forEach(function(value, i) {
      var pixelLocation = {
        x: location.x + (i * that.pixelWidth),
        y: location.y
      };
      that._drawPixel(value, pixelLocation);
    });
  },

  _drawPixel: function(value, location) {
    if (value) {
      this.context.fillStyle=WHITE;
    } else {
      this.context.fillStyle=BLACK;
    }
    this.context.fillRect(location.x, location.y, this.pixelWidth, this.pixelHeight);
  },
}

module.exports = VideoCanvas;
