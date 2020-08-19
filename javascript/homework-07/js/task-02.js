'use strict';

const buttonRef = document.getElementById('task-02-do');
const ingredientsListRef = document.getElementById('ingredients');

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const creatListItem = items => {
  return items.map(item => {
    const ingredientListItem = document.createElement('li');
    ingredientListItem.textContent = item;
    return ingredientListItem;
  });
};

const buttonHandler = () => {
  console.log('TASK 02');
  ingredientsListRef.append(...creatListItem(ingredients));
  console.log('\n');
};

buttonRef.addEventListener('click', buttonHandler);
