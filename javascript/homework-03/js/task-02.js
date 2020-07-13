'use strict';

const buttonRef = document.getElementById('task-02-do');

const objects = [
  {},
  { name: 'Mango', age: 2 },
  { mail: 'poly@mail.com', isOnline: true, score: 500 },
];

const countProps = function (objs) {
  for (let obj of objs) {
    let length = Object.keys(obj).length;
    console.log(obj, ` has "${length}" propety(es)`);
  }
  return objs;
};

buttonRef.addEventListener('click', () => {
  console.log(countProps(objects));
});
