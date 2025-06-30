import { apiUrl, apiKey } from '@/services/setting'

const fromApiResponseToGif = response => {
  const { data = [] } = response
  const { user, images, title, id, embed_url, username, source, rating, import_datetime, alt_text } = data
  const { url, frames, hash, height, width, size } = images?.original
  const { avatar_url: avatarUrl, display_name: viewName, description, instagram_url: instaUrl, website_url: webUrl, is_verified: isVerified } = user || {}
  return {
    title,
    id,
    url,
    altText: alt_text,
    frames,
    hash,
    username,
    info: {
      source,
      rating,
      publishDate: import_datetime,
      height,
      width,
      size,
      embedUrl: embed_url
    },
    userInfo: {
      avatarUrl,
      viewName,
      instaUrl,
      description,
      webUrl,
      isVerified
    }
  }
}

export function apiObSingleGif ({ id = 'die Bart' } = {}) {
  const mode = globalThis.localStorage.getItem('lastMode') || 'gifs'
  const urlApi = `${apiUrl}/${mode}/${id}?api_key=${apiKey}`
  return fetch(urlApi)
    .then(obj => obj.json())
    .then(fromApiResponseToGif)
}
