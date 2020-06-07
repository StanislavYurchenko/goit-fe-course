// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти, пользователь
// может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй
// switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

//   Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const country = prompt('Choose your contry');
let price;

switch (country.toLowerCase()) {
  case 'china':
    price = 100;
    break;
  case 'chile':
    price = 250;
    break;
  case 'australia':
    price = 170;
    break;
  case 'india':
    price = 80;
    break;
  case 'jamaica':
    price = 120;
    break;
  default:
    price = 0;
}

// if (country === 'China' || 'Chile' || 'Australia' || 'India' || 'Jamaica') {}

// if (
//   country === 'china' ||
//   country === 'chile' ||
//   country === 'australia' ||
//   country === 'india' ||
//   country === 'jamaica'
// ) {

if (price !== 0) {
  console.log(` Delivery to ${country} will coast ${price}$`);
} else {
  console.log(`Delivery isn't posible to ${country}`);
}
