'use strict';

const buttonRef = document.getElementById('task-03-do');
const galleryListRef = document.getElementById('gallery');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryHtml = images.reduce((html, image) => {
  return html + `<li><img src=${image.url} alt=${image.alt}></li>`;
}, '');

const buttonHandler = () => {
  console.log('TASK 03');

  galleryListRef.insertAdjacentHTML('afterbegin', galleryHtml);
  console.log('\n');
};

buttonRef.addEventListener('click', buttonHandler);
