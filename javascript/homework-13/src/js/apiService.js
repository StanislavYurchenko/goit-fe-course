'use strict';
import photoCard from '../templates/photo-card.hbs';

const buttonRef = document.querySelector('.button');
const galleryRef = document.querySelector('.gallery');

const API_KEY = '18376090-d7378f6abd5315284a04e80ad';
const baseUrl = 'https://pixabay.com/api/';
const userRequest = 'yellow+flowers';
const imageType = 'photo';
const setting = {};

buttonRef.addEventListener('click', buttonHandler);

function buttonHandler() {
  const response = fetch(
    `${baseUrl}?key=${API_KEY}&q=${userRequest}&image_type=${imageType}`,
  );
  console.log(response);

  const usersMarkup = response
    .then(response => response.json())
    .then(response => response.hits)
    .then(list => photoCard(list))
    .then(itemsMarkup =>
      galleryRef.insertAdjacentHTML('beforeend', itemsMarkup),
    );
}
