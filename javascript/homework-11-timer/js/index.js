'use strict';

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);

    this._ref = {
      days: document.querySelector(`${this.selector} span[data-value = days]`),
      hours: document.querySelector(
        `${this.selector} span[data-value = hours]`,
      ),
      mins: document.querySelector(`${this.selector} span[data-value = mins]`),
      secs: document.querySelector(`${this.selector} span[data-value = secs]`),
    };

    this._interval = null;

    this.start();
  }

  getTimeNow() {
    return new Date();
  }

  getTimeLeft() {
    return this.targetDate.getTime() - this.getTimeNow();
  }

  getDaysLeft() {
    return Math.floor(this.getTimeLeft() / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, '0');
  }

  getHoursLeft() {
    return Math.floor(
      (this.getTimeLeft() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
      .toString()
      .padStart(2, '0');
  }

  getMinsLeft() {
    return Math.floor((this.getTimeLeft() % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, '0');
  }

  getSecsLeft() {
    return Math.floor((this.getTimeLeft() % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, '0');
  }

  _render() {
    this._ref.days.textContent = this.getDaysLeft();
    this._ref.hours.textContent = this.getHoursLeft();
    this._ref.mins.textContent = this.getMinsLeft();
    this._ref.secs.textContent = this.getSecsLeft();
  }

  start() {
    this.interval = setInterval(() => {
      this._render();
    }, 1000);
  }

  stop() {
    clearInterval(this._interval);
  }
}

const timer1 = new CountdownTimer('#timer-1', 'Sep 10, 2020 00:00:00');
const timer2 = new CountdownTimer('#timer-2', 'Sep 11, 2020 00:00:00');

setTimeout(() => {
  timer2.stop();
}, 3000);
