import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';



const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  console.log(event.target.dataset.source);
  // event.target.dataset -об'єкт з дата атрибутами
  let lightbox = new SimpleLightbox('.gallery a', {showCounter: false, captionsData: 'alt', captionDelay: 250});
}

const markup = galleryItems.map((element) => 
`<a class="gallery__link" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
  />
</a>`
).join('');


const galleryMarkup = galleryEl.insertAdjacentHTML('beforeend', markup);


console.log(galleryItems);
