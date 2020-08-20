'use strict';

const inputFontSizeRef = document.querySelector('#font-size-control');

inputFontSizeRef.min = 0;
inputFontSizeRef.max = 30;
inputFontSizeRef.defaultValue = 16;
inputFontSizeRef.nextElementSibling.setAttribute('style', `font-size: ${inputFontSizeRef.value}px`);

const inputFontSizeHandler = event => {
  event.target.nextElementSibling.setAttribute('style', `font-size: ${event.target.value}px`);
};

inputFontSizeRef.addEventListener('change', inputFontSizeHandler);
