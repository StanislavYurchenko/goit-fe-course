'use strict';

const buttonRef = document.getElementById('task-11-do');
const inputNumberRef = document.querySelector('.task-11__form .form__input--number');

const maxInt = 100;
const minInt = 0;

const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const genRandomArrayUnique = function (n) {
  const arr = [];
  let randomInt;

  if (n >= maxInt) {
    console.log('Error: number should be less');
  }

  while (arr.length < n) {
    randomInt = getRandomIntInclusive(minInt, maxInt);
    if (arr.includes(randomInt)) {
      continue;
    }

    arr.push(randomInt);
  }

  return arr;
};

inputNumberRef.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^\d]/g, '');
});

buttonRef.addEventListener('click', () => {
  if (inputNumberRef.value === '' || inputNumberRef.value >= 100) {
    inputNumberRef.value = 10;
  }

  console.log(genRandomArrayUnique(inputNumberRef.value));
  console.log('\n');
});
