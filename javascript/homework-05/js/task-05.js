'use strict';

const buttonRef = document.getElementById('task-05-do');
class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    console.log('maxSpeed', car.maxSpeed);
    console.log('speed', car.speed);
    console.log('isOn', car.isOn);
    console.log('distance', car.distance);
    console.log('price', car._price);
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */

  constructor({ speed = 0, _price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = _price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */

  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */

  accelerate(value) {
    if (value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */

  decelerate(value) {
    this.speed -= value;
    this.maxSpeed = this.maxSpeed < 0 ? 0 : this.maxSpeed;
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */

  drive(hours) {
    if (this.isOn) {
      this.distance = this.distance + hours * this.speed;
    }
  }
}

buttonRef.addEventListener('click', () => {
  const mustang = new Car({ maxSpeed: 200, _price: 2000 });

  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);

  Car.getSpecs(mustang); // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  console.log('\n');

  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();

  Car.getSpecs(mustang); // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  console.log('\n');

  console.log(mustang.price); // 2000

  mustang.price = 4000;
  console.log(mustang.price); // 4000
  console.log('\n');
});
