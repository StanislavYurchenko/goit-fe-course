// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits(создай и присвой).Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.Цена одного дроида хранится в переменной pricePerDroid(создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

'use strict';
const buttonTask04Ref = document.querySelector('#task-04-do');

buttonTask04Ref.addEventListener('click', () => {
  let credits = 23580;
  const pricePerDroid = 3000;
  let totalPrice;
  let quantity;
  let message;

  do {
    message = 'How many do you want order repair droid?';
    quantity = prompt(message);

    if (quantity !== null) {
      if (!Number.isInteger(quantity)) {
        quantity = Number(quantity);
        if (Number.isNaN(quantity)) {
          message = 'You entered a wrong value. Try again';
          console.log(message);
          continue;
        }
        quantity = Number.parseInt(quantity);
        totalPrice = quantity * pricePerDroid;
      }

      if (totalPrice > credits) {
        message = `Not enough money in your account. You need ${totalPrice} credits. You have ${credits} credits.`;
        console.log(message);
        continue;
      } else {
        credits = credits - totalPrice;
        message = `You bought ${quantity} repair(s) droid. Your balance ${credits} credits.`;
        console.log(message);
        break;
      }
    } else {
      message = 'canceled by user';
      console.log(message);
      break;
    }
  } while (true);

  console.log('\n');
});
