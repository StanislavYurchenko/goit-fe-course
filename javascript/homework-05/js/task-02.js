'use strict';

const buttonRef = document.getElementById('task-02-do');

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

buttonRef.addEventListener('click', () => {
  mango.getInfo(); // User Mango is 2 years old and has 20 followers
  poly.getInfo(); // User Poly is 3 years old and has 17 followers
  console.log('\n');
});
