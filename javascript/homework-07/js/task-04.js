'use strict';

const buttonIncrRef = document.querySelector('button[data-action="increment"]');
const buttonDecrRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.getElementById('value');

let counterValue = +valueRef.textContent;

const buttonIncrHandler = () => (valueRef.textContent = counterValue += 1);
const buttonDecrHandler = () => (valueRef.textContent = counterValue -= 1);

buttonIncrRef.addEventListener('click', buttonIncrHandler);
buttonDecrRef.addEventListener('click', buttonDecrHandler);
