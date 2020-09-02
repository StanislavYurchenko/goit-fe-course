import menuSource from '../data/menu.json';
import itemMenuTemplate from '../templates/menu-items.hbs';

const ref = {
  menu: document.querySelector('.js-menu'),
};

const markup = itemMenuTemplate({ items: menuSource });

ref.menu.insertAdjacentHTML('beforeend', markup);
