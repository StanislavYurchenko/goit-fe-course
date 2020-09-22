'use strict';
const API_KEY = '18376090-d7378f6abd5315284a04e80ad';
const baseUrl = 'https://pixabay.com/api/';
const imageType = 'photo';
const lang = 'en';
const perPage = 12;

export default function fetchApi(q, page) {
  const request = `${baseUrl}?key=${API_KEY}&q=${q}&image_type=${imageType}&lang=${lang}&page=${page}&per_page=${perPage}`;

  return fetch(request)
    .then(responseJson => responseJson.json())
    .then(response => response.hits)
    .catch(console.log);
}
