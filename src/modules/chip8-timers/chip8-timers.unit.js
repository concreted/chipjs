var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var Chip8Timers = require('./chip8-timers');
var constants = require('../chip8-constants');

describe('Chip8Timers module', function() {
  var timers = new Chip8Timers();

  describe('attributes', function() {
    it('should have a delay and sound timer', function() {
      expect(timers._timers.delay).to.equal(0);
      expect(timers._timers.sound).to.equal(0);
    });
    it('should initialize the interval ID to null', function() {
      expect(timers._intervalId).to.equal(null);
    });
  });

  describe('start', function() {
    before(function() {
      sinon.stub(Chip8Timers.prototype, '_startTimerCountdown').returns(999);
      timers.start();
    })
    it('should start the timer countdown', function() {
      expect(timers._startTimerCountdown).to.have.been.called;
    });
    it('should save the interval ID', function() {
      expect(timers._intervalId).to.equal(999);
    });
    after(function() {
      Chip8Timers.prototype._startTimerCountdown.restore();
    })
  });

  describe('stop', function() {
    before(function() {
      sinon.stub(global, 'clearInterval');
      timers._intervalId = 123;
      timers.stop();
    });
    it('should clear the interval', function() {
      expect(global.clearInterval).to.have.been.calledWith(123);
    });
    after(function() {
      global.clearInterval.restore();
    });
  });

  describe('getDelayTimer', function() {
    it('should return the delay timer value', function() {
      timers._timers.delay = 567;
      expect(timers.getDelayTimer()).to.equal(567);
    });
  });

  describe('setDelayTimer', function() {
    it('should set delay timer', function() {
      timers.setDelayTimer(255);
      expect(timers._timers.delay).to.equal(255);
    });
  });

  describe('getSoundTimer', function() {
    it('should return the sound timer value', function() {
      timers._timers.sound = 765;
      expect(timers.getSoundTimer()).to.equal(765);
    });
  });

  describe('setSoundTimer', function() {
    it('should set sound timer', function() {
      timers.setSoundTimer(255);
      expect(timers._timers.sound).to.equal(255);
    });
  });

  describe('setSoundAction', function() {
    it('should set the sound action', function() {
      var action = sinon.stub();
      timers.setSoundAction(action);
      expect(timers._actions.sound).to.equal(action);
    });
  });

  describe('executeSoundAction', function() {
    it('should call the set sound action', function() {
      var action = sinon.stub();
      timers.executeSoundAction(action);
      expect(timers._actions.sound).to.have.been.called;
    });
  });

  describe('_startTimerCountdown', function() {
    var intervalId = null;
    before(function() {
      sinon.stub(global, 'setInterval').returns(19);
      sinon.stub(timers._step, 'bind').returns('this._step.bind(this)');
      intervalId = timers._startTimerCountdown();
    });
    it('should call setInterval to decrement timers with refresh rate', function() {
      expect(global.setInterval).to.have.been.calledWith(
        'this._step.bind(this)',
        constants.REFRESH_MS
      )
    });
    it('should return the interval ID', function() {
      expect(intervalId).to.equal(19);
    });
    after(function() {
      global.setInterval.restore();
    })
  });

  describe('_step', function() {
    before(function() {
      sinon.stub(Chip8Timers.prototype, '_decrementTimer');
      sinon.stub(Chip8Timers.prototype, 'executeSoundAction');
      timers._timers.delay = 100;
      timers._timers.sound = 100;
      timers._step();
    });
    it('should decrement the timer for both timers', function() {
      expect(timers._decrementTimer).to.have.been.calledWith('delay');
      expect(timers._decrementTimer).to.have.been.calledWith('sound');
    });
    it('should call sound action if sound timer > 1', function() {
      expect(Chip8Timers.prototype.executeSoundAction).to.have.been.called;
    });
    after(function() {
      Chip8Timers.prototype._decrementTimer.restore();
      Chip8Timers.prototype.executeSoundAction.restore();
    });
  });

  describe('_decrementTimer', function() {
    it('should decrement a single timer', function() {
      timers._timers.delay = 1
      timers._decrementTimer('delay');
      expect(timers._timers.delay).to.equal(0);
    });
    it('should not decrement past 0', function() {
      timers._timers.delay = 0
      timers._decrementTimer('delay');
      expect(timers._timers.delay).to.equal(0);
    });
  });
});
