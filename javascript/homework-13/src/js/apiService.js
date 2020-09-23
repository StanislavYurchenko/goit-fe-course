'use strict';
import { alert, success, error } from './alert.js';

const API_KEY = '18376090-d7378f6abd5315284a04e80ad';
const baseUrl = 'https://pixabay.com/api/';
const imageType = 'photo';
const lang = 'en';
const orientation = 'horizontal';
const perPage = 12;

export default function fetchApi(q, page) {
  const request = `${baseUrl}?key=${API_KEY}&q=${q}&image_type=${imageType}&lang=${lang}&page=${page}&per_page=${perPage}&orientation=${orientation}`;

  return fetch(request)
    .then(responseJson => responseJson.json())
    .then(response => {
      if (response.total > 0 && page === 1) {
        success({
          title: 'Success!',
          text: `Was found ${response.total} images`,
        });
      }
      if (response.total === 0) {
        alert({
          title: 'Alert!',
          text: 'No images found, Please change your request',
        });
      }

      return response.hits;
    })
    .catch(err => {
      error({
        title: 'ERROR!',
        text: err,
      });
    });
}
