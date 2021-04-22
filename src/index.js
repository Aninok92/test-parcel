import galleryItems from './js/gallery-items.js';
import './sass/main.scss';
import createGallaryMarkup from './js/gallary-markup';
import onCarousel from './js/carousel';
import { lightbox, lightboxImage } from './js/lightbox';
import onEscKeyPress from './js/close-function';

console.log(galleryItems);
console.log(createGallaryMarkup);

const cardContainer = document.querySelector('.js-gallery');
const cardsMarkup = createGallaryMarkup(galleryItems);
cardContainer.insertAdjacentHTML('beforeend', cardsMarkup);

cardContainer.addEventListener('click', onCardContainerClick);

function onCardContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  onOpenModal(e);
}

function onOpenModal(e) {
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onCarousel);

  lightbox.classList.add('is-open');

  lightboxImage.src = e.target.dataset.source;
  lightboxImage.alt = e.target.alt;
}
