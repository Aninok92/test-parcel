import galleryItems from './gallery-items';
import { lightboxImage } from './lightbox';

const currentArr = galleryItems.map(i => i.original);
const currentArrDesc = galleryItems.map(d => d.description);

export default function onCarousel(e) {
  if (e.code != 'ArrowLeft' && e.code != 'ArrowRight') {
    return;
  }
  if (e.code == 'ArrowLeft') {
    onArrowLeft();
  }
  if (e.code == 'ArrowRight') {
    onArrowRight();
  }
}

function onArrowLeft() {
  let currentImg = currentArr.indexOf(lightboxImage.src);
  let currentDesc = currentArrDesc.indexOf(lightboxImage.alt);

  lightboxImage.src = currentArr[currentImg - 1];
  lightboxImage.alt = currentArrDesc[currentDesc - 1];

  if (currentImg === 0) {
    lightboxImage.src = currentArr[currentArr.length - 1];
    lightboxImage.alt = currentArrDesc[currentArrDesc.length - 1];
  }
}

function onArrowRight() {
  let currentImg = currentArr.indexOf(lightboxImage.src);
  let currentDesc = currentArrDesc.indexOf(lightboxImage.alt);

  lightboxImage.src = currentArr[currentImg + 1];
  lightboxImage.alt = currentArrDesc[currentDesc + 1];
  if (!currentArr.includes(lightboxImage.src)) {
    lightboxImage.src = currentArr[0];
    lightboxImage.alt = currentArrDesc[0];
  }
}
