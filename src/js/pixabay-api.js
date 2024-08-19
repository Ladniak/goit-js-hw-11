const BASE_URL = 'https://pixabay.com';

export const fetchPhotos = searchQuery => {
    const urlParams = new URLSearchParams({
        key: '45500129-782b0efec7a4b6e4cb35c382f',
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(
        `${BASE_URL}/api/?${urlParams}`
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        });
}