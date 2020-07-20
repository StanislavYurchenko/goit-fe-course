'use strict';

const buttonRef = document.getElementById('task-03-do');

const findBestEmployee = function (employees) {
  // const arrValues = Object.values(employees);
  // const arrEmployee = Object.keys(employees);
  // console.log(arrValues);
  // let biggestValue = 0;
  // let indexBestEmployee;
  // for (let i = 0; i < arrValues.length; i += 1) {
  //   if (arrValues[i] > biggestValue) {
  //     biggestValue = arrValues[i];
  //     indexBestEmployee = i;
  //   }
  // }
  // return `Best employee is "${arrEmployee[indexBestEmployee]}", his resalt is "${biggestValue}" tasks.`;
  let biggestValue = 0;
  let bestEmployee;
  for (let key in employees) {
    if (employees[key] > biggestValue) {
      biggestValue = employees[key];
      bestEmployee = key;
    }
  }
  return `Best employee is "${bestEmployee}", his resalt is "${biggestValue}" tasks.`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

buttonRef.addEventListener('click', () => {
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux

  console.log('\n');
});
