'use strict';

const buttonRef = document.getElementById('task-06-do');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (let item of allProdcuts) {
    // console.log(item);

    if (item.name === productName) {
      console.log(item);
      return item.price * item.quantity;
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

buttonRef.addEventListener('click', () => {
  console.log(calculateTotalPrice(products, 'Радар')); // 5200

  console.log(calculateTotalPrice(products, 'Дроид')); // 2800

  console.log('\n');
});
