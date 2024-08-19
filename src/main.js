// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { createGalleryCard } from "./js/render-functions";
import { fetchPhotos } from "./js/pixabay-api";

const galleryEl = document.querySelector('.gallery');
const formElSearch = document.querySelector('.search-form'); 

const onSearchSubmit = (event) => {
    event.preventDefault();

    const searchFromInput = formElSearch.elements.user_query.value;

    if (searchFromInput == '') {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
        })

        galleryEl.innerHTML = '';
        formElSearch.reset();

        return;
    }
        fetchPhotos(searchFromInput)
        .then(data => {
            console.log(data);

            const galleryCardTemplate = data.hits.map(imgDetails => createGalleryCard(imgDetails)).join('');

            galleryEl.innerHTML = galleryCardTemplate;

            let gallery = new SimpleLightbox('.gallery a');
            gallery.refresh();
            gallery.on('show.simplelightbox', function () {});

        })
        .catch(error => {
            console.log(error);
        })
    
    formElSearch.reset();
};

formElSearch.addEventListener('submit', onSearchSubmit);
