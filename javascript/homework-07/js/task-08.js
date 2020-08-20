'use strict';

const btnRenderRef = document.querySelector('#controls button[data-action = render]');
const btnDestroyRef = document.querySelector('#controls button[data-action = destroy]');
const inputRef = document.querySelector('#controls input');
const boxesRef = document.querySelector('#boxes');

const getRandomColor = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 255);
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

const createBoxes = amount => {
  let boxSize = 0;
  const boxesList = [];

  for (let i = 0; i < amount; i += 1) {
    boxSize = 30 + 10 * i;
    boxesList[i] = document.createElement('div');
    boxesList[i].style.backgroundColor = getRandomColor();
    boxesList[i].style.width = `${boxSize}px`;
    boxesList[i].style.height = `${boxSize}px`;
    boxesList[i].style.display = `inline-block`;
  }
  return boxesList;
};

const btnRenderHandler = () => boxesRef.append(...createBoxes(inputRef.value));
const btnDestroyHandler = () => (boxesRef.innerHTML = '');

btnRenderRef.addEventListener('click', btnRenderHandler);
btnDestroyRef.addEventListener('click', btnDestroyHandler);
