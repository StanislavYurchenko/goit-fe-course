'use strict';

const buttonRef = document.getElementById('task-02-do');
const inputEngravingRef = document.querySelector('.homework-02__form .form__input--engraving');
const inputPriseRef = document.querySelector('.homework-02__form .form__input--prise');

const engraving1 = 'Proin sociis natoque et magnis parturient montes mus';
const engraving2 = 'Donec orci lectus aliquam est magnis';

let messageFromUser;
let engraving;

const calculateEngravingPrice = function (engraving, pricePerWord) {
  const engravingArrLengthInt = +engraving.split(' ').length;
  const totalPrice = engravingArrLengthInt * pricePerWord;
  return [totalPrice, engravingArrLengthInt];
};

inputPriseRef.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^\d]/g, '');
});

buttonRef.addEventListener('click', () => {
  if (inputEngravingRef.value == engraving1) {
    inputEngravingRef.value = engraving2;
  } else if (inputEngravingRef.value == engraving2) {
    inputEngravingRef.value = engraving1;
  }

  if (!inputEngravingRef.value) {
    inputEngravingRef.value = engraving1;
  }

  const pricePerOne = +inputPriseRef.value;

  const messageForUser = calculateEngravingPrice(inputEngravingRef.value, pricePerOne);
  console.log(`You want engrave "${inputEngravingRef.value}", price per one -  ${pricePerOne}`);
  console.log(
    `This phrase contains ${messageForUser[1]} word(s), it will be cost ${messageForUser[0]} credits.`,
  );
  console.log('\n');
});
