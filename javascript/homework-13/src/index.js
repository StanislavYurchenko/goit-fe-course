import './styles/styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import refs from './js/reference.js';
import photoCard from './templates/photo-card.hbs';
import fetchApi from './js/apiService.js';

let quest = '';
let page = 1;

refs.form.addEventListener('submit', formHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function formHandler(event) {
  event.preventDefault();
  quest = event.currentTarget.elements.query.value;
  page = 1;
  markupDestroy(refs.gallery);
  fetchApi(quest, page).then(galleryMarkup).catch(console.log);
  refs.form.reset();
}

function loadMoreBtnHandler() {
  page += 1;
  fetchApi(quest, page).then(galleryMarkup).catch(console.log);
}

function markupDestroy(ref) {
  ref.innerHTML = '';
}

function galleryMarkup(list) {
  const itemsMarkup = photoCard(list);
  refs.gallery.insertAdjacentHTML('beforeend', itemsMarkup);
}
