var constants = require('../chip8-constants');

function Chip8Timers() {
  this._timers = {
    delay: 0,
    sound: 0
  }

  this._intervalId = null;
}

Chip8Timers.prototype = {
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
    Object.keys(this._timers).forEach(this._decrementTimer);
  },

  _decrementTimer: function(timer) {
    if (this._timers[timer] > 0) {
      this._timers[timer]--;
    }
  },

  _setTimer: function(name, t) {
    this._timers[name] = t;
  }
}

module.exports = Chip8Timers;
