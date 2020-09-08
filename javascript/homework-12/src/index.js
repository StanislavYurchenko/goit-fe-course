import './style/styles.scss';
import error from './js/alert.js';
import fetchCountries from './js/fetchCountries.js';
import {
  countriesMarkup,
  clearBeforeMarkup,
  countryMarkup,
  clearInput,
  clearCountry,
} from './js/countriesMarkup.js';
import ref from './js/refs.js';

const debounce = require('lodash.debounce');
const message = 'Too many matches found. Please enter more specific query!';

clearInput();

ref.inputCountry.addEventListener('input', debounce(inputHandler, 1000));
ref.countries.addEventListener('click', countriesHolder);

function countriesHolder(event) {
  event.currentTarget.firstElementChild.firstElementChild.preventDefault;

  if (event.target !== event.currentTarget) {
    const inputValue = event.target.parentElement.textContent.trim();
    fetchCountries(inputValue)
      .then(countries => {
        countryMarkup(countries);
      })
      .catch(err => error(err));
  }
}

function inputHandler(event) {
  const inputValue = event.target.value;
  clearBeforeMarkup();
  clearCountry();
  if (!inputValue) return;
  fetchCountries(inputValue)
    .then(countries => {
      if (countries.length >= 10) {
        error(message);
      }
      if (countries.message) {
        error(countries.message);
        return;
      }
      countriesMarkup(countries);
    })
    .catch(err => error(err));
}
