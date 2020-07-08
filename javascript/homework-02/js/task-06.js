'use strict';

const buttonRef = document.getElementById('task-06-do');

buttonRef.addEventListener('click', () => {
  const numbers = [];
  let message;

  let total = function (numbers) {
    let sum = 0;

    for (let number of numbers) {
      sum += number;
    }
    return sum;
  };

  do {
    message = 'Enter numbers to add array';
    let input = prompt(message);

    if (input !== null) {
      if (Number.isNaN(+input) || +input == '') {
        message = 'Input error, try entering the number again';
        console.log(message);
        continue;
      } else {
        numbers.push(+input);
      }
    } else {
      message =
        numbers.length > 0
          ? `Sum of numbers in the array "[${numbers}]" is "${total(numbers)}"`
          : `array is empty`;

      console.log(message);
      break;
    }
  } while (true);

  console.log('\n');
});
