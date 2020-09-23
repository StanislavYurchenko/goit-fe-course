import 'basiclightbox/dist/basicLightbox.min.css';
const basicLightbox = require('basiclightbox');

function creatImageLightbox(
  src = 'https://placehold.it/1400x900',
  width = 1400,
  height = 900,
) {
  basicLightbox
    .create(`<img width=${width} height=${height} src=${src}>`)
    .show();
}

export default creatImageLightbox;
