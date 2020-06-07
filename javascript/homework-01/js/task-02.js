// Напиши скрипт проверки количества товаров на складе.Есть переменные total(количество товаров на складе) и ordered(единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
const ordered = 130;

if (ordered > total) {
  console.log(
    `Your order is ${ordered}. There are not enough goods in the stock! You can order not more then ${total} items`,
  );
} else {
  console.log('The order is placed, the manager will contact you');
}

console.log('\n');
