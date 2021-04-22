import onCarousel from './carousel';
import { lightbox, lightboxImage } from './lightbox';

export default function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onCarousel);

  lightbox.classList.remove('is-open');

  lightboxImage.src = '';
  lightboxImage.alt = '';
}

const closeBtn = document.querySelector('[data-action="close-lightbox"]');
closeBtn.addEventListener('click', onCloseModal);

const overlay = document.querySelector('.lightbox__overlay');
overlay.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
