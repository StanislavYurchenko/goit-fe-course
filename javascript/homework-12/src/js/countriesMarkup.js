import countriesTemplate from '../templates/countries.hbs';
import countryTemplate from '../templates/country.hbs';
import ref from '../js/refs.js';

function countriesMarkup(countries) {
  const markup = countriesTemplate(countries);
  ref.countries.insertAdjacentHTML('beforeend', markup);
}

function clearBeforeMarkup() {
  ref.countries.innerHTML = '';
}

function countryMarkup(country) {
  ref.country.innerHTML = countryTemplate(...country);
}

function clearInput() {
  ref.inputCountry.value = '';
}

function clearCountry() {
  ref.country.innerHTML = '';
}

export {
  countriesMarkup,
  clearBeforeMarkup,
  countryMarkup,
  clearInput,
  clearCountry,
};
