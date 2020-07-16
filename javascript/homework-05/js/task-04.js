'use strict';

const buttonRef = document.getElementById('task-04-do');

const countTotalSalary = function (employees) {
  let totalSalery = 0;
  const saleryList = Object.values(employees);
  for (let salery of saleryList) {
    totalSalery += +salery;
  }
  return totalSalery;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

buttonRef.addEventListener('click', () => {
  console.log(countTotalSalary({})); // 0

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400

  console.log('\n');
});
