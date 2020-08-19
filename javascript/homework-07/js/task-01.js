'use strict';

const buttonRef = document.getElementById('task-01-do');
const categoriesRef = document.getElementById('categories');

const buttonHandler = () => {
  console.log('TASK 01');

  console.log(`В списке "${categories.childElementCount}" категории`);

  Object.values(categories.children).forEach(el => {
    console.log('------------------');
    console.log(`Категория: ${el.children[0].textContent}`);
    console.log(`Количество элементов: ${el.children[1].childElementCount}`);
  });

  console.log('\n');
};

buttonRef.addEventListener('click', buttonHandler);
