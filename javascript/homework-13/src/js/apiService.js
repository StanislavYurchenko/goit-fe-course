'use strict';
import photoCard from '../templates/photo-card.hbs';

const buttonRef = document.querySelector('.load-more');
const galleryRef = document.querySelector('.gallery');
const formRef = document.querySelector('.search-form');

const API_KEY = '18376090-d7378f6abd5315284a04e80ad';
const baseUrl = 'https://pixabay.com/api/';
let q = 'yellow+flowers';
let imageType = 'photo';
let lang = 'en';
let page = 1;
let perPage = 12;

formRef.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();
  const {
    currentTarget: {
      elements: { query },
    },
  } = event;

  q = query.value;
  page = 1;

  const response = fetch(
    `${baseUrl}?key=${API_KEY}&q=${q}&image_type=${imageType}&lang=${lang}&page=${page}&per_page=${perPage}`,
  );

  const usersMarkup = response
    .then(response => response.json())
    .then(response => response.hits)
    .then(list => photoCard(list))
    .then(itemsMarkup => (galleryRef.innerHTML = itemsMarkup))
    .catch(error => console.log(error));
}

// buttonRef.addEventListener('click', buttonHandler);

function buttonHandler() {
  page += 1;
  const response = fetch(
    `${baseUrl}?key=${API_KEY}&q=${q}&image_type=${imageType}&lang=${lang}&page=${page}&per_page=${perPage}`,
  );

  const usersMarkup = response
    .then(response => response.json())
    .then(response => response.hits)
    .then(list => photoCard(list))
    .then(itemsMarkup =>
      galleryRef.insertAdjacentHTML('beforeend', itemsMarkup),
    )
    .catch(error => console.log(error));
}

// main.js
var Masonry = require('masonry-layout');
var InfiniteScroll = require('infinite-scroll');
var imagesLoaded = require('imagesloaded');

var infScroll = new InfiniteScroll('.container', {
  path: function () {
    return `${baseUrl}?key=${API_KEY}&q=${q}&image_type=${imageType}&lang=${lang}&page=${this.pageIndex}&per_page=${perPage}`;
  },
  responseType: 'text',
  status: '.scroll-status',
  history: false,
  button: '.load-more',
});

infScroll.on('load', function (response) {
  // parse response into JSON data
  console.log(response);
  var data = JSON.parse(response);
  // compile data into HTML
  // var itemsHTML = data.map(getItemHTML).join('');
  // // convert HTML string into elements
  // proxyElem.innerHTML = itemsHTML;
  // // append item elements
  // var items = proxyElem.querySelectorAll('.photo-item');
  // infScroll.appendItems(items);
});
