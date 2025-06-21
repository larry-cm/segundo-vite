const apiKey = import.meta.env.VITE_API_KEY;

export function apiObGif ({ keyword = 'die bart', mode } = { keyword: '', mode: '' }) {

    const urlApi = `https://api.giphy.com/v1/${mode || ''}/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    return fetch(urlApi)
        .then(obj => obj.json())
        .then(response => {
            const { data = [] } = response;
            const gifs = data.map(image => {
                const { images, title, id } = image;
                const { url, frames, hash } = images.original;
                return { title, id, url, frames, hash };
            });
            return gifs;
        });
}

// export function apiObGifId ({ id = 'ninguno' } = { id: '' }) {
//     const urlApiId = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}&rating=r`
//     return fetch(urlApiId)
//         .then(res => res.json()).then(res => {
//             const { title, images, user } = res.data
//             const { avatar_url, username } = user
//             const { url } = images.original
//             return { avatarUser: avatar_url, username, urlGif: url, titleGif: title }
//         })
// }