// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const getGalleryMarkup = imagesArr => {
  const galleryMarkup = imagesArr
    .map(({ preview, original, description } = {}) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join('');
  return galleryMarkup;
};

const renderGallery = () =>
  galleryContainer.insertAdjacentHTML('beforeend', getGalleryMarkup(galleryItems));

renderGallery();
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
