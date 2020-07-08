'use strict';

const buttonRef = document.getElementById('task-06-do');

buttonRef.addEventListener('click', () => {
  const numbers = [];

  let total = function (numbers) {
    let sum = 0;

    for (let number of numbers) {
      sum += number;
    }
    return sum;
  };

  do {
    let input = prompt('Enter numbers to add array');

    if (input !== null) {
      if (Number.isNaN(+input) || +input == '') {
        console.log('Input error, try entering the number again');
        continue;
      } else {
        numbers.push(+input);
      }
    } else {
      const message =
        numbers.length > 0
          ? `Sum of numbers in the array "[${numbers}]" is "${total(numbers)}"`
          : `array is empty`;

      console.log(message);
      break;
    }
  } while (true);

  console.log('\n');
});
