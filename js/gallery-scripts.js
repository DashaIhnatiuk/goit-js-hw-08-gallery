import gallery from './gallery-items.js';

const galleryTable = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__button');

const galleryItems = createGallery();

if(galleryTable!=null)galleryTable.insertAdjacentHTML('beforeend', galleryItems);


function createGallery(){
    let i = 0;
  const items = gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
    
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index ="${(i += 1)}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');

  return items;
}

galleryTable.addEventListener('click', onGalleryTableClick);
galleryTable.addEventListener('click', onOpenImageModal);


function onGalleryTableClick(evt) {
    if (!evt.target.classList.contains('gallery__image')) {
      return;
    }
  }

function onOpenImageModal(event) {
    event.preventDefault();
    console.log(event.target.nodeName);
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    lightbox.classList.add('is-open');
    lightboxImg.src = event.target.dataset.source;
    lightboxImg.alt = event.target.alt;
    lightboxImg.dataset.index = event.target.dataset.index;
  
  }

  closeBtn.addEventListener('click', onCloseModal);

  function onCloseModal(event) {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
  }