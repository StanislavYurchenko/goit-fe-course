'use strict';

const ref = {
  start: document.querySelector('.button[data-action = start]'),
  stop: document.querySelector('.button[data-action = stop]'),
  box: document.querySelector('.task'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const interval = 1000;
let timer;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(randomIntegerFromInterval(0, colors.length - 1));

ref.start.addEventListener('click', onStart);
ref.stop.addEventListener('click', onStop);

function onStart(e) {
  timer = setInterval(() => {
    ref.box.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    e.target.disabled = true;
    ref.stop.disabled = false;
  }, interval);
}

function onStop(e) {
  clearInterval(timer);
  ref.start.disabled = false;
  e.target.disabled = true;
}
