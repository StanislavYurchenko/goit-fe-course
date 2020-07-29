'use strict';

import users from './users.js';

//task 01
const getUserNames = users => {
  return users.map(user => user.name);
};

//task 02
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

//task 03
const getUsersWithGender = (users, gender) => {
  // return users.filter(user => user.gender === gender).map(user => user.name);

  return users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }

    return acc;
  }, []);
};

//task 04
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

//task 05
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

//task 06
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

//task 07
const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

//task 08
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.find(frend => frend === friendName));
};

//task 09
const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((prev, next) => (prev.friends.length > next.friends.length ? 1 : -1))
    .map(frend => frend.name);
};

//task 10
const getSortedUniqueSkills = users => {
  return users
    .reduce(function (acc, user) {
      user.skills.forEach(skill => {
        if (!acc.includes(skill)) {
          acc.push(skill);
        }
      });
      return acc;
    }, [])
    .sort();
};

const buttonRef = document.getElementById('task-01-do');

buttonRef.addEventListener('click', () => {
  console.log('users');
  console.log(users);
  console.log('\n');

  console.log('TASK 1');
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head','Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
  console.log('\n');

  console.log('TASK 2');
  console.log(getUsersWithEyeColor(users, 'blue'));
  // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
  console.log('\n');

  console.log('TASK 3');
  console.log(getUsersWithGender(users, 'male'));
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  console.log('\n');

  console.log('TASK 4');
  console.log(getInactiveUsers(users));
  // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
  console.log('\n');

  console.log('TASK 5');
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
  // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
  // {объект пользователя Elma Head}
  console.log('\n');

  console.log('TASK 6');
  console.log(getUsersWithAge(users, 20, 30));
  // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
  console.log('\n');

  console.log('TASK 7');
  console.log(calculateTotalBalance(users)); // 20916
  console.log('\n');

  console.log('TASK 8');
  console.log(getUsersWithFriend(users, 'Briana Decker'));
  // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry'));
  // [ 'Elma Head', 'Sheree Anthony' ]}
  console.log('\n');

  console.log('TASK 9');
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
  console.log('\n');

  console.log('TASK 10');
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
  console.log('\n');
});
