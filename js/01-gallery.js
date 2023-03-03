import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItemsMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    .join("");
}

galleryEl.addEventListener("click", handleGalleryItemClick);

function handleGalleryItemClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
     <img 
    src="${evt.target.dataset.source}"
  />
  
`);
  instance.show();
 
}

// const instanceEl = document.querySelector('.modal__img')

// instanceEl.addEventListener('keydown', handleEscapePress);

// function handleEscapePress (evt) {
//   console.log("key: ", evt.key);
//   console.log("code: ", evt.code);
// }

