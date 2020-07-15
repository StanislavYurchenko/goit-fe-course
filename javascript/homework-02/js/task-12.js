'use strict';

const buttonRef = document.getElementById('task-12-do');

const array = [5, 5, 5, [1, 1, 2, [2, 6], [1]], 2, [5]];

const deepArraySumm = function (arr) {
  let total = 0;

  for (let item of arr) {
    console.log(item);
  }

  // for (let i = 0; i < arr.length; i += 1) {
  //   console.log(arr[i]);
  // }

  return total;
};

buttonRef.addEventListener('click', () => {
  deepArraySumm(array);
  console.log('\n');
});
