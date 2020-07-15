'use strict';

const buttonRef = document.getElementById('task-10-do');
const inputNumberRef = document.querySelector('.task-10__form .form__input--number');

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

const uniArray = function (array) {
  const newArr = array.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
};

inputNumberRef.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^\d]/g, '');
});

buttonRef.addEventListener('click', () => {
  if (inputNumberRef.value === '') {
    inputNumberRef.value = 10;
  }

  const randomArr = genRandomArray(inputNumberRef.value);
  const newArr = uniArray(randomArr);

  console.log('random array - ', randomArr);
  console.log('new array    - ', newArr);
  console.log('\n');
});
