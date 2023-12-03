import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('gallery__item');
  listItemEl.style.listStyle = 'none'; 
  listItemEl.innerHTML = `<a 
        class='gallery__link' 
        href='${item.original}'>
          <img 
          class='gallery__image' 
          src='${item.preview}' 
          alt='${item.description}'
          />
        </a>`;
  listEl.append(listItemEl);
});

var lightbox = new SimpleLightbox('.gallery a', {
  sourceAttr: 'href',
  captionsData: 'alt',
  captionPosition: 'bottom',
  navText: ['←', '→'],
  closeText: '×',
  captionDelay: 250,
  animationSpeed: 250,
  fadeSpeed: 300,
  showCounter: true,
  
});