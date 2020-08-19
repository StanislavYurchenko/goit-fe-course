'use strict';

// Почему ООП?
// Какой смысл несет фраза ООП в расшифровке?

// --------------------------
// const user = {
//   name: "Andrew",
//   age: 29,
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// user.sayName();

// -----------------------------

// const logger = {
//   console: function (msg) {
//     console.log(msg);
//   },

//   alert: function (msg) {
//     alert(msg);
//   },
// };

// const randomGenerator = {
//   generateNumber: function (max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   },
// };

// const user = {
//   name: "Andrew",
//   age: 29,
//   sayName: function () {
//     console.log(this.name);
//   },
//   saySmth: function () {
//     logger.console(randomGenerator.generateNumber(100));
//   },
// };

// user.saySmth();

//--------------------------------------------------------------

// function User(name = "User", age = 18, hobbies = []) {
//   this.name = name;
//   this.age = age;
//   this.hobbies = hobbies;
// }

// const user1 = new User();
// const user2 = new User("Andrew", 29, ["Bike", "JS"]);

// console.log(user1);
// console.log(user2);

// console.log(user1 === user2);

//--------------------------------------------------------------

// function User(name = "User", age = 18, hobbies = []) {
//   this.name = name;
//   this.age = age;
//   this.hobbies = hobbies;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// const user = new User("Andrew", 29, ["Bike", "JS"]);
// user.sayName();

//-------------------------------------------------------------

// function User(name = "User", age = 18) {
//   this.name = name;
//   this.age = age;
// }

// const user = new User("Andrew", 29, ["Bike", "JS"]);

// const admin = Object.create(new User("Admin", 29));
// admin.isAdmin = true;
// admin.sayYourRights = function () {
//   console.log(this.isAdmin);
// };

// admin.sayYourRights();

// console.log(admin);
// --------------------------------------------------------------

// function User(name = "User", age = 18) {
//   this.name = name;
//   this.age = age;
//   this.isAdmin = false;
// }

// User.prototype.sayYourRights = function () {
//   console.log(this.isAdmin);
// };

// const user = new User("Andrew", 29, ["Bike", "JS"]);
// const admin = Object.create(new User("Admin", 29));
// admin.isAdmin = true;

// console.log(user);
// console.log(admin);

// ----------------------------------------------------------------
// function User(name = "User", age = 18) {
//   this.name = name;
//   this.age = age;
// }

// function Admin(name, age, pass) {
//   User.call(this, name, age);

//   this.pass = pass;
// }

// Admin.prototype.getPass = function () {
//   console.log(this.pass);
// };

// const admin = new Admin("Andrew", 29, "123");
// admin.getPass();

//----------------------------------------------------------------
// function User(name = "User", age = 18) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.saySmth = function () {
//   console.log("Hello guys! Some beer?");
// };

// const user = new User("Andrew", 29);
// user.saySmth();

// function Admin(name, age, pass) {
//   User.call(this, name, age);

//   this.pass = pass;
// }

// Admin.prototype.saySmth = function () {
//   console.log("Hello girl! I love u");
// };

// const admin = new Admin("Andrew", 29, "123");
// admin.saySmth();

// //----------------------------------------------------------------
// class User {
//   constructor(name = "User", age = 18) {
//     this.name = name;
//     this.age = age;
//   }

//   saySmth() {
//     console.log("Hello guys! Some beer?");
//   }
// }

// const user = new User("Andrew", 29);
// user.saySmth();

// class Admin extends User {
//   constructor(name = "User", age = 18) {
//     super(name, age);
//   }

//   saySmth() {
//     console.log("Hello girl! I love u");
//   }
// }

// const admin = new Admin("Andrew", 29, "123");
// admin.saySmth();

// //----------------------------------------------------------------

// Задачки =)

// // //----------------------------------------------------------------
// // Найти обьект по айди
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];

// const user = (arr, id) => arr.find(el => el.id === id);

// console.log(user(users, 2)); // {id: 2, name: "Pete"}

// // //----------------------------------------------------------------
// // Найти обьект по лучшем скорам

// const users = [
//   { name: 'John', score: 10 },
//   { name: 'Pete', score: 5 },
//   { name: 'Mary', score: 20 },
// ];

// const highScoreUsers = users.find(user => {
//   return (
//     user.score ===
//     [...users].reduce((acc, user) => {
//       return user.score > acc ? user.score : acc;
//     }, 0)
//   );
// });

// const highScoreUsers = [[...users].sort((prev, next) => next.score - prev.score)[0]];
// const highScoreUsers = [...users].sort((prev, next) => next.score - prev.score).splice(0, 1);
// const highScoreUsers = arr => arr.reduce((acc, item) => (acc.score < item.score ? item : acc));

// console.log(users);
// console.log(highScoreUsers(users)); // [{ name: "Mary", score: 20}]

// // //----------------------------------------------------------------
// // Вывести строкой - Имя - позиция в массиве Х и сам массив
// const robots = ['Bender', 'Awesom-O', 'Johnny 5'];

// const res =
//   robots.map(el => `${el}  - позиция в массиве ${robots.indexOf(el)}, `).toString() + `[${robots}]`;

// console.log(res);

// // //----------------------------------------------------------------

// const users = [
//   { name: 'Victor', score: 20 },
//   { name: 'Mario', score: 10 },
//   { name: 'Tatiana', score: 30 },
// ];

// const usersSortedByScoreDesc = [...users].sort((a, b) => a.score - b.score);

// const usersSortedByScoreAsc = [...users].sort((prev, next) => (prev.name > next.name ? 1 : -1));

// console.log(usersSortedByScoreDesc); // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]

// console.log(usersSortedByScoreAsc); // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]

// // //----------------------------------------------------------------
// const animals = ['pigs', 'goats', 'sheep'];

// const withoutPigs = animals.filter(el => el !== 'pigs');

// console.log(withoutPigs); // ["goats", "sheep"]

// // //----------------------------------------------------------------

// const users = [
//   { name: 'Victor', score: 20 },
//   { name: 'Mario', score: 10 },
//   { name: 'Tatiana', score: 30 },
// ];

// const scores = users.map(el => el.score);

// console.log(scores); // [20, 10, 30]

// // //----------------------------------------------------------------

// const users = [
//   { name: 'Victor', score: 20 },
//   { name: 'Mario', score: 10 },
//   { name: 'Tatiana', score: 30 },
// ];

// const totalScore = users.reduce((acc, user) => acc + user.score, 0);

// console.log(totalScore); // 60

// // //----------------------------------------------------------------

// const users = [
//   { name: 'Victor', score: 20 },
//   { name: 'Mario', score: 10 },
//   { name: 'Tatiana', score: 30 },
// ];

// const moreUsers = [
//   { name: 'Laura', score: 50 },
//   { name: 'Jasmine', score: 70 },
//   { name: 'Peter', score: 60 },
// ];

// const allUsers = [...users, ...moreUsers];

// console.log(allUsers); // [{name: "Victor", score: 20}, {name: "Mario", score: 10}, {name: "Tatiana", score: 30}, {name: "Laura", score: 50}, {name: "Jasmine", score: 70}, {name: "Peter", score: 60}]

// //----------------------------------------------------------------

// Создайте класс Гамбургер
// следующая начинка должна быть статик в Классе, что бы можно было ее использовать вот так Humburger.stuffing.STUFFING_SALAD
// const stuffing = {
//   STUFFING_SALAD: {
//     type: 'STUFFING_SALAD',
//     price: 300,
//     ccal: 200,
//   },
//   STUFFING_POTATO: {
//     type: 'STUFFING_POTATO',
//     price: 400,
//     ccal: 100,
//   },
//   TOPPING_MAYO: {
//     type: 'TOPPING_MAYO',
//     price: 300,
//     ccal: 400,
//   },
//   TOPPING_SPICE: {
//     type: 'TOPPING_SPICE',
//     price: 500,
//     ccal: 700,
//   },
// };

// Методы класса------------------------------------------------------

// addSize - Добавляем размер бургера
// addTopping(Humburger.stuffing.STUFFING_SALAD, ...) - Добавить добавку к гамбургеру. Можно добавить несколько добавок, при условии что они валидные
//removeTopping(Humburger.stuffing.STUFFING_SALAD, ...) - Убрать добавку, при условии, что она ранее была добавлена.
// getStuffing геттер должен вернуть this.toppings = [....]
//calculatePrice() узнать цену гамбургера,
//calculateCalories() Узнать калорийность гамбургера
//showError() метод который показывает 2 ошибки - если размер не верный передали, начинка не существует (При удалении или добавлении)

// class Humburger {
//   constructor() {
//     this.sizes = {
//       S: 200,
//       L: 300,
//       M: 400,
//     };
//     this.toppings = [];
//     this.size = '';
//   }

//   static stuffing = stuffing;

//   addSize(size) {
//     if (Object.keys(this.sizes).includes(size)) {
//       this.size = size;
//     } else {
//       this.showError();
//     }
//   }

//   addTopping(toppings) {
//     toppings.forEach(topping => {
//       if (Object.keys(Humburger.staffinh).includes(topping)) {
//         this.topping.push = topping;
//       } else {
//         this.showError('qqq');
//       }
//     });
//   }

//   showError() {
//     console.log('error');
//   }
// }

// const burger = new Humburger();

// burger.addSize(S);
// burger.addTopping([
//   Humburger.stuffing.STUFFING_POTATO.type,
//   Humburger.stuffing.STUFFING_SALAD.type,
// ]);

// console.log(burger);

