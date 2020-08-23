'use strict';

const inputRef = document.querySelector('#validation-input');

const inputHandler = event => {
  const isCorrect = event.target.textLength === +event.target.attributes['data-length'].value;

  if (isCorrect) {
    inputRef.classList.add('validation-input-valid');
    inputRef.classList.remove('validation-input-invalid');
  }

  if (!isCorrect) {
    inputRef.classList.remove('validation-input-valid');
    inputRef.classList.add('validation-input-invalid');
  }

  if (event.target.textLength === 0) {
    inputRef.classList.remove('validation-input-valid');
    inputRef.classList.remove('validation-input-invalid');
  }
};

inputRef.addEventListener('change', inputHandler);
