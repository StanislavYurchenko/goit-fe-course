'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = this.transactions.length + 1;
    const transactionObj = { id, type, amount };
    // this.transactions.push(transactionObj);
    return transactionObj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += +amount;
    console.log(`You add "${amount}" credits, Your new balance "${this.balance}" credits`);
    return this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.createTransaction(amount, Transaction.WITHDRAW);
    if (+amount > this.balance) {
      console.log(`Not enough credits on your account, Your balance "${this.balance}" credits`);
      return this.balance;
    }

    this.balance -= +amount;
    console.log(`You withdraw "${amount}" credits, Your new balance "${this.balance}" credits`);
    return this.balance;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};

const buttonDepositRef = document.getElementById('task-07-deposit');
const buttonBalanceRef = document.getElementById('task-07-balance');
const buttonWithdrawRef = document.getElementById('task-07-withdraw');
const buttonTransactionIdRef = document.getElementById('task-07-transaction-id');
const buttonTransactionTypeRef = document.getElementById('task-07-transaction-type');

buttonBalanceRef.addEventListener('click', () => {
  console.log(account.getBalance());
  console.log('\n');
});

buttonDepositRef.addEventListener('click', () => {
  let getAmount = prompt('how many credits do you want to put into your account?');

  if (getAmount !== null) {
    if (Number.isNaN(+getAmount)) {
      console.log('Enter the number [0...9]! Try again!');
    } else {
      console.log(account.deposit(getAmount));
    }
  } else {
    console.log('Сancel ed by user');
  }

  console.log('\n');
});

buttonWithdrawRef.addEventListener('click', () => {
  let getAmount = prompt('how many credits do you want to put into your account?');

  if (getAmount !== null) {
    if (Number.isNaN(+getAmount)) {
      console.log('Enter the number [0...9]! Try again!');
    } else {
      console.log(account.withdraw(getAmount));
    }
  } else {
    console.log('Сancel ed by user');
  }

  console.log('\n');
});

buttonTransactionIdRef.addEventListener('click', () => {
  console.log('Сancel ed by user');
  console.log('\n');
});

buttonTransactionTypeRef.addEventListener('click', () => {
  console.log('Сancel ed by user');
  console.log('\n');
});
