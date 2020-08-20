'use strict';

const nameInputRef = document.getElementById('name-input');
const nameOutputRef = document.getElementById('name-output');

nameInputRef.value = '';

const nameInputHolder = () => {
  nameOutputRef.textContent = nameInputRef.value !== '' ? nameInputRef.value : 'незнакомец';
};

nameInputRef.addEventListener('input', nameInputHolder);
