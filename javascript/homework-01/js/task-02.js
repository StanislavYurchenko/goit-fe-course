// Напиши скрипт проверки количества товаров на складе.Есть переменные total(количество товаров на складе) и ordered(единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

'use strict';
const buttonTask02Ref = document.querySelector('#task-02-do');

buttonTask02Ref.addEventListener('click', () => {
  const inputTotalTask02Ref = document.querySelector('#task-02-input-total');
  const inputOrderTask02Ref = document.querySelector('#task-02-input-order');

  let total = Number(inputTotalTask02Ref.value);
  const order = Number(inputOrderTask02Ref.value);
  let message;

  if (order > total) {
    message = `Your order is(are) ${order} item(s). There are not enough goods in the stock! You can order not more then ${total} item(s)`;
    console.log(message);
  } else {
    message = `The order is(are) ${order} item(s), the manager will contact you`;
    console.log(message);

    total -= order;
    inputTotalTask02Ref.value = total;
    message = `There is(are) ${total} item(s) in the stock`;
    console.log(message);
  }
  console.log('\n');
});
