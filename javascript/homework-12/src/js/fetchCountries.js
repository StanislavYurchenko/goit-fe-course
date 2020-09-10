export default function fetchCountries(country) {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res => res.json())
    .catch(error => console.log(error));
}
