'use strict';

const buttonRef = document.getElementById('task-01-do');

const restaurants = [
  {
    order: [],
    brand: 'KFC',
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: 'mcDonalds',
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: 'Burger King',
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];

const services = {
  showMenu() {},
  getMenu() {},
  addOrder() {},
  confirmOrder() {},
};

buttonRef.addEventListener('click', () => {
  message = 'Enter number [0-9]...';
  input = prompt(message);
  if (input !== null) {
  }
  const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  console.log('original object: ', user);
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  console.log('modified object: ', user);
  const keys = Object.keys(user);
  console.log('keys of array: ', keys);
  console.log('--key:value--');
  for (let key of keys) {
    console.log(`${key}:${user[key]}`);
  }
});

// const countres = ['Ukriane', 'Poland', 'Chroatia', 'Montenegro', 'Franse', 'USA'];
// const countriesPrise = [100, 200, 300, 400, 500, 600];

// const userName = prompt('Registration: Enter your name');
// const userPass = prompt('Registration: Enter your password');

// do {
//   let checkName = prompt('Login: Enter your name');
//   let checkPass = prompt('Login: Enter your password');

//   if (!(userName === checkName && userPass === checkPass)) {
//     console.log('Incorect login or password, try again');
//     alert('Incorect login or password, try again');
//     checkName = prompt('Login: Enter your name');
//     checkPass = prompt('Login: Enter your password');
//   } else {
//     console.log('Your logined successfully');
//     break;
//   }
// } while (false);

// const userCredits = prompt('Your maximum price?');

// let availableCountries = '';

// for (let i = 0; i < countriesPrise.length; i += 1) {
//   if (userCredits >= countriesPrise[i]) {
//     availableCountries = availableCountries + ' ' + countres[i];
//   }
// }

// console.log(availableCountries.trim());

// const userCountry = prompt('choise coutry');

// if (availableCountries.includes(userCountry)) {
//   const contryChoise = countres.indexOf(userCountry);

//   console.log(`your bougth ${countres[contryChoise]}`);
//   console.log(`money stay ${userCredits - countriesPrise[contryChoise]}`);
// }
