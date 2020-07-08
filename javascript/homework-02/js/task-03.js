'use strict';

const buttonRef = document.getElementById('task-03-do');
const inputStringRef = document.querySelector('.task-03__form .form__input--string');

const string1 = 'The quick brown fox jumped over the lazy dog';
const string2 = 'Google do a roll';
const string3 = 'May the force be with you';

const findLongestWord = function (stringOfWords) {
  const arr = stringOfWords.split(' ');

  let longestWord = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  console.log(stringOfWords);
  console.log(
    `"${longestWord}" is the longest word in the string, it includes "${longestWord.length}" letters`,
  );
};

inputStringRef.addEventListener('keyup', function () {
  this.value = this.value.replace(/[\d]/g, '');
});

buttonRef.addEventListener('click', () => {
  if (inputStringRef.value == string1) {
    inputStringRef.value = string2;
  } else if (inputStringRef.value == string2) {
    inputStringRef.value = string3;
  } else if (inputStringRef.value == string3) {
    inputStringRef.value = string1;
  }

  if (!inputStringRef.value.trim()) {
    inputStringRef.value = string1;
  }
  findLongestWord(inputStringRef.value);

  console.log('\n');
});
