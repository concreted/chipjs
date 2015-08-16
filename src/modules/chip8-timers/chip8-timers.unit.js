var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

var timing = require('./chip8-timers');

describe('Chip8Timers module', function() {
  xdescribe('attributes', function() {
    it('should have a delay and sound timer', function() {

    });
    it('should have store the interval ID', function() {

    });
  });

  xdescribe('start', function() {
    it('should start the timer countdown', function() {

    });
    it('should save the interval ID', function() {

    });
  });

  xdescribe('stop', function() {
    it('should clear the interval', function() {

    });
  });

  xdescribe('getDelayTimer', function() {
    it('should return the delay timer value', function() {

    });
  });

  xdescribe('setDelayTimer', function() {
    it('should call _setTimer with "delay" and the time', function() {

    });
  });

  xdescribe('getSoundTimer', function() {
    it('should return the sound timer value', function() {

    });
  });

  xdescribe('setSoundTimer', function() {
    it('should call _setTimer with "sound" and the time', function() {

    });
  });

  xdescribe('_startTimerCountdown', function() {
    it('should call setInterval to decrement timers with refresh rate', function() {

    });
    it('should return the interval ID', function() {

    });
  });

  xdescribe('_decrementAllTimers', function() {
    it('should decrement the timer for both timers', function() {

    });
  });

  xdescribe('_decrementTimer', function() {
    it('should decrement a single timer', function() {

    });
    it('should not decrement past 0', function() {

    });
  });

  xdescribe('_setTimer', function() {
    it('should set the timer based on name and t value', function() {

    });
  });
});
