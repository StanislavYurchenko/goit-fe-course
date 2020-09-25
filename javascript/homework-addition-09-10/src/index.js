// Фукционал
//  - Пользователь может ввести свое имя и фамилию в форму и отправить ее
//  - После отправки, под формой вы должны отрендерить надпись {name} {secondName},
// выбирите категорию новостей а также селектор где пользователь может выбрать 1 из 3 категорий новостей
//  - После выбора категории новости вы должны отрендерить те новости которые выбрал пользователь
//  - Пользователь может выбрать другую категорию, вы должны отрендерить новости из новой категории
// - При перезагрузке страницы имя пользовател и выбранная категория должна сохранятся

'use strict';
import './css/styles.css';
import articles from './js/articles.js';
import selectTemplate from './templates/select.hbs';
import newsTemplate from './templates/selected-news.hbs';
import ref from './js/reference.js';

init();

ref.form.addEventListener('submit', formHolder);

function formHolder(event) {
  initForm(event);
  ref.outputSelect.removeEventListener('change', selectHolder);

  const fullName = getFullName(event).trim();
  localStorage.setItem('fullName', fullName);

  markupGrit(fullName);
  markupSelect();

  ref.form.reset();
}

function selectHolder() {
  removeMarkup(ref.outputNews);
  markupArticles();
  localStorage.setItem('selectedArticleIndex', getSelectedArticleIndex());
}

function categoriesForChoice() {
  return articles
    .map(article => article.category)
    .filter((category, i, categories) => categories.indexOf(category) === i);
}

function getSelectedArticleIndex() {
  return ref.outputSelect.firstElementChild.options.selectedIndex;
}

function getSelectedArticle() {
  return ref.outputSelect.firstElementChild.options[getSelectedArticleIndex()]
    .value;
}

function getSelectedArticles() {
  const selectedArticle = getSelectedArticle();
  return articles.filter(el => el.category === selectedArticle);
}

function getFullName(event) {
  return `${event.target.elements.name.value} ${event.target.elements['second-name'].value}`;
}

function removeMarkup(reference) {
  reference.innerHTML = '';
}

function initForm(event) {
  event.preventDefault();
  ref.outputSelect &&
    ref.outputSelect.removeEventListener('change', selectHolder);
  removeMarkup(ref.outputName);
  removeMarkup(ref.outputSelect);
}

function init() {
  if (localStorage.getItem('fullName')) {
    const fullName = localStorage.getItem('fullName');
    markupGrit(fullName);
    markupSelect();

    ref.outputSelect.addEventListener('change', selectHolder);
  }
  if (localStorage.getItem('selectedArticleIndex')) {
    ref.outputSelect.firstElementChild.options.selectedIndex = localStorage.getItem(
      'selectedArticleIndex',
    );
    removeMarkup(ref.outputNews);
    markupArticles();
  }
}

function markupGrit(name) {
  const messageMarkup = `<div class="user-name">добро пожаловать ${
    name || 'аноним'
  } </div>`;
  ref.outputName.insertAdjacentHTML('beforeend', messageMarkup);
}

function markupArticles() {
  const selectedArticles = getSelectedArticles();
  ref.outputNews.insertAdjacentHTML(
    'beforeend',
    newsTemplate(selectedArticles),
  );
}

function markupSelect() {
  ref.outputSelect.insertAdjacentHTML(
    'beforeend',
    selectTemplate(categoriesForChoice),
  );
}
