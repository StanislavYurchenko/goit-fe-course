'use strict';

const task0Ref = document.getElementById('slide-0');
const task1Ref = document.getElementById('slide-1');
const task2Ref = document.getElementById('slide-2');
const task3Ref = document.getElementById('slide-3');
const task4Ref = document.getElementById('slide-4');
const task5Ref = document.getElementById('slide-5');
const task6Ref = document.getElementById('slide-6');

const btnPrevRef = document.querySelector('.slider__btn--prev');
const btnNextRef = document.querySelector('.slider__btn--next');

const slideRef = document.querySelectorAll('.slide');
const slideBoxRef = document.querySelectorAll('.slide__box');

const totalSlides = 6;
let numberActiveSlide = 0;

const navSliderBtnPrev = function (activSlide, totalSlide) {
  if (activSlide === 0) {
    return (activSlide = totalSlide);
  } else {
    return (activSlide -= 1);
  }
};

const navSliderBtnNext = function (activSlide, totalSlide) {
  if (activSlide === totalSlide) {
    return (activSlide = 0);
  } else {
    return (activSlide += 1);
  }
};

const letAddClass = function (activSlide, classToAdd, classRef) {
  for (let i = 0; i < classRef.length; i += 1) {
    if (i === activSlide) {
      const ref = classRef[i];
      ref.classList.add(`${classToAdd}`);
    } else {
      const ref = classRef[i];
      ref.classList.remove(`${classToAdd}`);
    }
  }
};

const letRemoveClass = function (activSlide, classToRemove, classRef) {
  for (let i = 0; i < classRef.length; i += 1) {
    if (i === activSlide) {
      const ref = classRef[i];
      ref.classList.remove(`${classToRemove}`);
    } else {
      const ref = classRef[i];
      ref.classList.add(`${classToRemove}`);
    }
  }
};

task0Ref.addEventListener('click', () => {
  numberActiveSlide = 0;
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

task1Ref.addEventListener('click', () => {
  numberActiveSlide = 1;
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

task2Ref.addEventListener('click', () => {
  numberActiveSlide = 2;

  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

task3Ref.addEventListener('click', () => {
  numberActiveSlide = 3;
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

task4Ref.addEventListener('click', () => {
  numberActiveSlide = 4;
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

task5Ref.addEventListener('click', () => {
  numberActiveSlide = 5;
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

task6Ref.addEventListener('click', () => {
  numberActiveSlide = 6;
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

btnPrevRef.addEventListener('click', () => {
  numberActiveSlide = navSliderBtnPrev(numberActiveSlide, totalSlides);
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});

btnNextRef.addEventListener('click', () => {
  numberActiveSlide = navSliderBtnNext(numberActiveSlide, totalSlides);
  letRemoveClass(numberActiveSlide, 'slide--small', slideRef);
  letRemoveClass(numberActiveSlide, 'display-none', slideBoxRef);
});
