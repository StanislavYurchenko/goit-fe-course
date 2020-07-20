'use strict';

const buttonRef = document.getElementById('task-03-do');

class Storage {
  constructor(arr) {
    this.items = arr;
  }
  getItems() {
    console.log(this.items);
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
    console.log(`"${item}" was added successful`);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`"${item}" was removed successful`);
    }
  }
}

buttonRef.addEventListener('click', () => {
  const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);
  console.log(storage);

  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
  console.log('\n');
});
