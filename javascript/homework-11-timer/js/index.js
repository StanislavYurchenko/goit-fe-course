'use strict';

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = new Date(targetDate);
  }

  ref = {
    days: document.querySelector('span[data-value = days]'),
    hours: document.querySelector('span[data-value = hours]'),
    mins: document.querySelector('span[data-value = mins]'),
    secs: document.querySelector('span[data-value = secs]'),
  };

  getTimeNow() {
    return new Date();
  }

  getTimeLeft() {
    return this.targetDate.getTime() - this.getTimeNow();
  }

  getDaysLeft() {
    return Math.floor(this.getTimeLeft() / (1000 * 60 * 60 * 24));
  }

  getHoursLeft() {
    return Math.floor(
      (this.getTimeLeft() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
  }

  getMinsLeft() {
    return Math.floor((this.getTimeLeft() % (1000 * 60 * 60)) / (1000 * 60));
  }

  getSecsLeft() {
    return Math.floor((this.getTimeLeft() % (1000 * 60)) / 1000);
  }

  render() {
    setInterval(() => {
      this.ref.days.textContent = this.getDaysLeft();
      this.ref.hours.textContent = this.getHoursLeft();
      this.ref.mins.textContent = this.getMinsLeft();
      this.ref.secs.textContent = this.getSecsLeft();
    }, 1000);
  }
}

const timer = new CountdownTimer('#timer-1', 'Sep 10, 2020 00:00:00');

timer.render();
