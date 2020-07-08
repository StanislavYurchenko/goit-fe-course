'use strict';

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const buttonRef = document.getElementById('task-01-do');

const logItems = function (items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${i + 1} - ${items[i]}`);
  }
};

buttonRef.addEventListener('click', () => {
  logItems(numbers);
  logItems(names);
  console.log('\n');
});
