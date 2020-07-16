'use strict';

const buttonRef = document.getElementById('task-02-do');

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

buttonRef.addEventListener('click', () => {
  invokeInventoryAction('Medkit', inventory.add.bind(inventory));
  console.log(inventory.items);
  invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
  console.log(inventory.items);
});
