'use strict';

const buttonRef = document.getElementById('task-01-do');

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`Login: '${this.login}'`);
  console.log(`Email: '${this.email}'`);
};

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

buttonRef.addEventListener('click', () => {
  console.log(Account.prototype.getInfo); // function
  console.log(mango);
  mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
  console.log(poly);
  poly.getInfo(); // Login: Poly, Email: poly@mail.com
  console.log('\n');
});
