var constants = require('../chip8-constants');

function Chip8Timers(beep) {
  this._timers = {
    delay: 0,
    sound: 0
  };

  this._actions = {
    sound: beep ? beep : function() {}
  };

  this._intervalId = null;
}

Chip8Timers.prototype = {
  update: function() {
    this._step();
  },

  start: function() {
    if (this._intervalId === null) {
      this._intervalId = this._startTimerCountdown();
    }
  },

  stop: function() {
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  },

  getDelayTimer: function() {
    return this._timers.delay;
  },

  setDelayTimer: function(t) {
    this._timers.delay = t;
  },

  getSoundTimer: function() {
    return this._timers.sound;
  },

  setSoundTimer: function(t) {
    this._timers.sound = t;
  },

  setSoundAction: function(cb) {
    this._actions.sound = cb;
  },

  executeSoundAction: function() {
    this._actions.sound();
  },

  _startTimerCountdown: function() {
    return setInterval(this._step.bind(this), constants.REFRESH_MS);
  },

  _step: function() {
    Object.keys(this._timers).forEach(this._decrementTimer.bind(this));
    if (this.getSoundTimer() > 1) {
      this.executeSoundAction();
    }
  },

  _decrementTimer: function(timer) {
    if (this._timers[timer] > 0) {
      this._timers[timer]--;
    }
  }
}

module.exports = Chip8Timers;
