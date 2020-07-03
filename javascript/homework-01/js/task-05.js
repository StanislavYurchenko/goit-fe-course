// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти, пользователь
// может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй
// switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

'use strict';
const buttonTask05Ref = document.querySelector('#task-05-do');

buttonTask05Ref.addEventListener('click', () => {
  const country = prompt(
    'Available contry: China, Chile, Australia, India, Jamaica.\nType your contry',
  );
  let message;

  if (country !== null) {
    let price;

    switch (country.toLowerCase()) {
      case 'china':
      case 'китай':
        price = 100;
        break;

      case 'chile':
      case 'чили':
        price = 250;
        break;

      case 'australia':
      case 'австралия':
        price = 170;
        break;

      case 'india':
      case 'индия':
        price = 80;
        break;

      case 'jamaica':
      case 'ямайка':
        price = 120;
        break;

      default:
        price = 0;
    }

    if (price !== 0) {
      message = `Delivery to ${country} will coast ${price}$`;
      console.log(message);
      alert(message);
    } else {
      message = `Delivery isn't posible to ${country}`;
      console.log(message);
      alert(message);
    }
  } else {
    message = 'canceled by user';
    console.log(message);
    alert(message);
  }

  console.log('\n');
});
