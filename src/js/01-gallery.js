// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');

function createGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    lightbox.close();
  }
});