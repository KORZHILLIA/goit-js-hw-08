// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const getGalleryMarkup = imagesArr => {
  const galleryMarkup = imagesArr
    .map(({ preview, original, description } = {}) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
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
