'use strict';

const buttonV1Ref = document.getElementById('task-08-do-v1');
const buttonV2Ref = document.getElementById('task-08-do-v2');
const buttonV3Ref = document.getElementById('task-08-do-v3');

const arr = [5, 10, 3, 9, 2, 8, 7, 6, 4, 1];

const sortArrayBooble = function (array) {
  const sortedArray = array.slice();
  let cycles = 0;

  for (let j = 0; j < sortedArray.length - 1; j += 1) {
    for (let i = 0; i < sortedArray.length - 1 - j; i += 1) {
      cycles += 1;
      if (sortedArray[i] > sortedArray[i + 1]) {
        sortedArray.splice(i, 2, sortedArray[i + 1], sortedArray[i]);
      }
    }
  }
  console.log('Booble method');
  console.log('cycles', cycles);
  console.log('old array', array);
  console.log('new array', sortedArray);
  return sortedArray;
};

const sortArrayBigNumber = function (array) {
  const sortedArray = [];
  const tempArr = array.slice();
  let cycles = 0;

  do {
    let maxItem = 0;
    let maxItemIndex = 0;
    for (let i = 0; i < tempArr.length; i += 1) {
      cycles += 1;
      if (tempArr[i] > maxItem) {
        maxItem = tempArr[i];
        maxItemIndex = i;
      }
    }
    sortedArray.unshift(maxItem);
    tempArr.splice(maxItemIndex, 1);
  } while (tempArr.length > 0);

  console.log('Bigges number method');
  console.log('cycles', cycles);
  console.log('old array', array);
  console.log('new array', sortedArray);
  return sortedArray;
};

const sortArrayMy = function (array) {
  const sortedArray = [];
  let cycles = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      sortedArray[i] = array[i];
      continue;
    }
    const arrLength = sortedArray.length;
    for (let j = 0; j < arrLength; j += 1) {
      cycles += 1;
      if (array[i] < sortedArray[j]) {
        sortedArray.splice(j, 0, array[i]);
        break;
      }

      if (array[i] > sortedArray[j] && j === arrLength - 1) {
        sortedArray.push(array[i]);
        break;
      }
    }
  }
  console.log('My method');
  console.log('cycles', cycles);
  console.log('old array', array);
  console.log('new array', sortedArray);
  return sortedArray;
};

buttonV1Ref.addEventListener('click', () => {
  sortArrayBooble(arr);
  console.log('\n');
});
buttonV2Ref.addEventListener('click', () => {
  sortArrayBigNumber(arr);
  console.log('\n');
});
buttonV3Ref.addEventListener('click', () => {
  sortArrayMy(arr);
  console.log('\n');
});
