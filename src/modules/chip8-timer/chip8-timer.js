var constants = require('../chip8-constants');

function Chip8Timer() {
  this._timers = {
    delay: 0,
    sound: 0
  }

  this._intervalId = null;
}

Chip8Timer.prototype = {
  start: function() {
    this._intervalId = this._startTimerCountdown();
  },

  stop: function() {
    clearInterval(this._intervalId);
  },

  getDelayTimer: function() {
    return this._timers.delay;
  },

  setDelayTimer: function(t) {
    this._setTimer('delay', t);
  },

  getSoundTimer: function() {
    return this._timers.sound;
  },

  setSoundTimer: function(t) {
    this._setTimer('sound', t);
  },

  _startTimerCountdown: function() {
    return setInterval(this._decrementAllTimers, constants._REFRESH_MS);
  },

  _decrementAllTimers: function() {
    Object.keys(this._timers).forEach(_decrementTimer);
  },

  _decrementTimer: function(timer) {
    if (this._timer[timer] > 0) {
      this._timer[timer]--;
    }
  },

  _setTimer: function(name, t) {
    this._timers[name] = t;
  }
}

module.exports = Chip8Timer;
