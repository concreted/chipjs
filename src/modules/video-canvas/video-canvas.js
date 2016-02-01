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
    for(var i = 0; i < buffer.length; i++) {
      var rowLocation = {
        x: 0,
        y: i * this.pixelHeight
      };
      this._drawRow(buffer[i], rowLocation);
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
