'use strict';

const buttonRef = document.getElementById('task-04-do');
const inputStringRef = document.querySelector('.homework-04__form .form__input--string');
const inputNumberRef = document.querySelector('.homework-04__form .form__input--number');

const strings = [
  'Curabitur ligula sapien, tincidunt non.',
  'Vestibulum facilisis, purus nec pulvinar iaculis.',
  'Curabitur ligula sapien.',
  'Nunc sed turpis.Curabitur a felis in nunc fringilla tristique.',
];

const formatString = function (stringOfWords, lengthStr) {
  let shortStringOfWords;
  for (let i = 0; i < stringOfWords.length; i += 1) {
    shortStringOfWords = stringOfWords;
    if (i >= lengthStr) {
      shortStringOfWords = stringOfWords.slice(0, i) + '...';
      return shortStringOfWords;
    }
  }
  return shortStringOfWords;
};

inputNumberRef.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^\d]/g, '');
});

buttonRef.addEventListener('click', () => {
  if (inputNumberRef.value === '') {
    inputNumberRef.value = 40;
  }

  if (!inputStringRef.value.trim()) {
    for (let i = 0; i < strings.length; i += 1) {
      const resalt = formatString(strings[i], inputNumberRef.value);
      console.log(resalt);
    }
  } else {
    const resalt = formatString(inputStringRef.value, inputNumberRef.value);
    console.log(resalt);
  }

  console.log('\n');
});
