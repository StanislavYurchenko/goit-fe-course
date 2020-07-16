'use strict';

const buttonRef = document.getElementById('task-12-do');

const array = [5, 5, 5, [1, 1, 2, [2, 6], [1]], 2, [5]];

let total = 0;
const deepArraySum = function (arr) {
  for (let item of arr) {
    if (typeof item === 'number') {
      total += item;
    } else {
      deepArraySum(item);
    }
  }
  return total;
};

buttonRef.addEventListener('click', () => {
  console.log(array);
  total = 0;
  console.log(`sum of all elements of array is "${deepArraySum(array)}"`);
  console.log('\n');
});
