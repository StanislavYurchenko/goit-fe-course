'use strict';

import galleryItems from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const lightboxBtnRef = document.querySelector('.lightbox__button');
const lightboxContentRef = document.querySelector('.lightbox__content');

const quantityGalleryItems = galleryItems.length;
const isLightboxHide = () => lightboxRef.className.indexOf('is-open') === -1;

let indexActiveImage;

galleryRef.append(...createGalleryItems());

galleryRef.addEventListener('click', galleryHandler);
lightboxBtnRef.addEventListener('click', lightboxBtnHandler);
lightboxContentRef.addEventListener('click', lightboxContentHandler);
lightboxRef.addEventListener('transitionend', cleanImageSrc);
document.addEventListener('keydown', navigationInLightbox);

function galleryHandler(event) {
  event.preventDefault();

  event.currentTarget.childNodes.forEach((el, i) => {
    if (el.firstChild.firstChild === event.target) {
      indexActiveImage = i;
      showLightbox();
    }
  });
}

function lightboxBtnHandler() {
  hideLightbox();
}

function lightboxContentHandler(event) {
  if (event.target === event.currentTarget) {
    hideLightbox();
  }
}

function cleanImageSrc() {
  if (isLightboxHide()) {
    lightboxImageRef.setAttribute('src', '');
    lightboxImageRef.setAttribute('alt', '');
  }
}

function navigationInLightbox(event) {
  if (event.code === 'Escape' && !isLightboxHide()) {
    hideLightbox();
  }

  if ((event.code === 'ArrowLeft' || event.code === 'ArrowUp') && !isLightboxHide()) {
    indexActiveImage = indexActiveImage <= 0 ? quantityGalleryItems - 1 : (indexActiveImage -= 1);
    showLightbox();
  }

  if ((event.code === 'ArrowDown' || event.code === 'ArrowRight') && !isLightboxHide()) {
    indexActiveImage = indexActiveImage >= quantityGalleryItems - 1 ? 0 : (indexActiveImage += 1);
    showLightbox();
  }
}

function showLightbox() {
  const src = galleryItems[indexActiveImage].original;
  const alt = galleryItems[indexActiveImage].description;

  lightboxImageRef.setAttribute('src', src);
  lightboxImageRef.setAttribute('alt', alt);
  lightboxRef.classList.add('is-open');
}

function hideLightbox() {
  lightboxRef.classList.remove('is-open');
}

function createGalleryItems() {
  const items = [];

  for (let i = 0; i < quantityGalleryItems; i += 1) {
    items[i] = document.createElement('li');
    items[i].classList.add('gallery__item');
  }

  items.forEach((el, i) => {
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.setAttribute('href', galleryItems[i].preview);
    a.classList.add('gallery__link');
    el.append(a);

    img.setAttribute('src', galleryItems[i].preview);
    img.setAttribute('alt', galleryItems[i].description);
    img.dataset.source = galleryItems[i].original;
    img.classList.add('slider__dot-img');
    el.firstChild.append(img);
  });

  return items;
}
