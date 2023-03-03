import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}

const gallery = new SimpleLightbox('.gallery a', {captions: true, captionSelector: 'img', docClose: false, captionsData: [galleryItems.description]});

