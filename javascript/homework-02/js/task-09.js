'use strict';

const buttonRef = document.getElementById('task-09-do');
const inputNumberRef = document.querySelector('.task-09__form .form__input--number');

const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const genRandomArray = function (n) {
  const arr = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(getRandomIntInclusive(1, 10));
  }

  return arr;
};

inputNumberRef.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^\d]/g, '');
});

buttonRef.addEventListener('click', () => {
  if (inputNumberRef.value === '') {
    inputNumberRef.value = 10;
  }
  console.log(genRandomArray(inputNumberRef.value));
  console.log('\n');
});
