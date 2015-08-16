var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var Video = require('./video');

describe('Video module', function() {
  describe('attributes', function() {
    before(function() {
      sinon.stub(Video.prototype, '_createScreen').returns('the screen');
    });
    it('should create a screen', function() {
      var video = new Video(10, 10);
      expect(video._createScreen).to.have.been.called;
      expect(video.screen).to.equal('the screen');
    });
    after(function() {
      Video.prototype._createScreen.restore();
    });
  });

  describe('_createScreen', function() {
    it('should return a 2D array with height/width set to arguments', function() {
      var result = Video.prototype._createScreen(64, 32);
      expect(result[0].length).to.equal(64);
      expect(result.length).to.equal(32);
    });
  });
});
