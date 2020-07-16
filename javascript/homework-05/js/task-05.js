'use strict';

const buttonRef = document.getElementById('task-05-do');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // твой код
  const array = [];
  for (let item of arr) {
    if (item[prop] !== undefined) {
      array.push(item[prop]);
    }
  }
  return array;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
buttonRef.addEventListener('click', () => {
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

  console.log(getAllPropValues(products, 'category')); // []

  console.log('\n');
});
