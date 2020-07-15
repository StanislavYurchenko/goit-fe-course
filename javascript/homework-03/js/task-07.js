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
    this.transactions.push(transactionObj);
    return transactionObj;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.createTransaction(+amount, Transaction.DEPOSIT);
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
    if (+amount > this.balance) {
      console.log(`Not enough credits on your account, Your balance "${this.balance}" credits`);
      return this.balance;
    }
    this.createTransaction(+amount, Transaction.WITHDRAW);
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
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
    return `There is no ID:"${id}"`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        total += +this.transactions[i].amount;
      }
    }
    return total;
  },

  /*
   * Метод возвращает строку ID всех транзакций
   */
  getAvailableId() {
    let availableId = '';
    for (let i = 0; i < this.transactions.length; i += 1) {
      availableId =
        i === this.transactions.length - 1
          ? availableId + account.transactions[i].id
          : availableId + account.transactions[i].id + ', ';
    }
    return availableId;
  },
};

const btnDepositRef = document.getElementById('task-07-deposit');
const btnBalanceRef = document.getElementById('task-07-balance');
const btnWithdrawRef = document.getElementById('task-07-withdraw');
const btnTransactionIdRef = document.getElementById('task-07-transaction-id');
const btnTransactionTypeDepositRef = document.getElementById('task-07-transaction-type-deposit');
const btnTransactionTypeWithdrawRef = document.getElementById('task-07-transaction-type-withdraw');

btnBalanceRef.addEventListener('click', () => {
  console.log(`Your balance is "${account.getBalance()}" credits`);
  console.log('\n');
});

btnDepositRef.addEventListener('click', () => {
  let getAmount = prompt('how many credits do you want to put into your account?');
  if (getAmount !== null) {
    if (Number.isNaN(+getAmount) || +getAmount <= 0) {
      console.log('Enter the number [0...9]! Try again!');
    } else {
      console.log(account.deposit(getAmount));
    }
  } else {
    console.log('Сancel ed by user');
  }
  console.log('\n');
});

btnWithdrawRef.addEventListener('click', () => {
  let getAmount = prompt('how many credits do you want to withdraw from your account?');

  if (getAmount !== null) {
    if (Number.isNaN(+getAmount) || +getAmount <= 0) {
      console.log('Enter the number [0...9]! Try again!');
    } else {
      console.log(account.withdraw(getAmount));
    }
  } else {
    console.log('Сanceled by user');
  }
  console.log('\n');
});

btnTransactionIdRef.addEventListener('click', () => {
  let getID = prompt(`List of available ID: ${account.getAvailableId()}`);
  if (getID !== null) {
    console.log(account.getTransactionDetails(+getID));
  } else {
    console.log('Сanceled by user');
  }
  console.log('\n');
});

btnTransactionTypeDepositRef.addEventListener('click', () => {
  const totalDeposit = account.getTransactionTotal('deposit');
  console.log(`Total credits added - "${totalDeposit}"`);
  console.log('\n');
});

btnTransactionTypeWithdrawRef.addEventListener('click', () => {
  const totalWithdraw = account.getTransactionTotal('withdraw');
  console.log(`Total credits withdraw - "${totalWithdraw}"`);
  console.log('\n');
});
