'use strict';

const btnPrevRef = document.querySelector('.slider__btn--prev');
const btnNextRef = document.querySelector('.slider__btn--next');

const slideRef = document.querySelectorAll('.slide');
const slideBoxRef = document.querySelectorAll('.slide__box');

const totalSlides = slideRef.length - 1;

let numberActiveSlide = 0;

const navSliderBtnPrev = function (activSlide, totalSlide) {
  return activSlide === 0 ? totalSlide : activSlide - 1;
};

const navSliderBtnNext = function (activSlide, totalSlide) {
  return activSlide === totalSlide ? (activSlide = 0) : activSlide + 1;
};

const letRemoveClass = function (activSlide, classForChange, classRef) {
  for (let i = 0; i < classRef.length; i += 1) {
    if (i === activSlide) {
      const ref = classRef[i];
      ref.classList.remove(`${classForChange}`);
    } else {
      const ref = classRef[i];
      ref.classList.add(`${classForChange}`);
    }
  }
};

const btmSlideHolder = () => {
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
};

const btmNavHolder = () => {
  numberActiveSlide = navSliderBtnNext(numberActiveSlide, totalSlides);
  btmSlideHolder();
};

slideRef[0].addEventListener('click', () => {
  numberActiveSlide = 0;
  btmSlideHolder();
});

slideRef[1].addEventListener('click', () => {
  numberActiveSlide = 1;
  btmSlideHolder();
});

btnPrevRef.addEventListener('click', () => btmNavHolder());

btnNextRef.addEventListener('click', () => btmNavHolder());
