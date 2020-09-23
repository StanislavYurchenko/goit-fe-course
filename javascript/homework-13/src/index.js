import './styles/styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import refs from './js/reference.js';
import photoCard from './templates/photo-card.hbs';
import fetchApi from './js/apiService.js';

import creatImageLightbox from './js/basicLightbox.js';

let quest = '';
let page = 1;

const observerCallbackOptions = {
  root: null,
  rootMargin: '100px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(
  observerCallback,
  observerCallbackOptions,
);

observer.observe(refs.loadMoreBtn);

refs.form.addEventListener('submit', formHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
refs.gallery.addEventListener('click', galleryHandler);

function formHandler(event) {
  event.preventDefault();
  quest = event.currentTarget.elements.query.value;
  page = 1;
  markupDestroy(refs.gallery);
  fetchApi(quest, page)
    .then(galleryMarkup)
    .then(() => {
      isGalleryEmpty() ? hideShowMoreBtn() : showShowMoreBtn();
    });
  refs.form.reset();
}

function loadMoreBtnHandler() {
  page += 1;
  fetchApi(quest, page).then(galleryMarkup);
}

function galleryHandler(event) {
  const { target } = event;
  target.currentSrc && creatImageLightbox(target.currentSrc);
}

function markupDestroy(ref) {
  ref.innerHTML = '';
}

function galleryMarkup(list) {
  const itemsMarkup = photoCard(list);
  refs.gallery.insertAdjacentHTML('beforeend', itemsMarkup);
}

function observerCallback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isGalleryEmpty()) {
      loadMoreBtnHandler();
    }
  });
}
function showShowMoreBtn() {
  refs.loadMoreBtn.classList.remove('visually-hidden');
}
function hideShowMoreBtn() {
  refs.loadMoreBtn.classList.add('visually-hidden');
}

function isGalleryEmpty() {
  return !refs.gallery.innerHTML;
}
