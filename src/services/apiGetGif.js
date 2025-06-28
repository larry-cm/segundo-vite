import { LANGUAGES, MODO, RATINGS } from '@/components/Home/Filters/entries'
import { apiUrl } from '@/services/setting'
const apiKey = import.meta.env.VITE_API_KEY

const fromApiResponseToGif = response => {
  const { data = [] } = response
  return data?.map(data => {
    const { user, images, title, id, embed_url, username, source, rating, import_datetime } = data
    const { url, frames, hash, height, width, size } = images.original

    const { avatar_url: avatarUrl, display_name: viewName, description, instagram_url: instaUrl, website_url: webUrl, is_verified: isVerified } = user || {}

    return {
      title,
      id,
      url,
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
  })
}

export function apiObGif ({ rating = RATINGS[0], lang = LANGUAGES.es, keyword = 'die Bart', mode = MODO[0], page = 0, limit = 10 } = {}) {
  const urlApi = `${apiUrl}/${mode}/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}&bundle=messaging_non_clips`
  return fetch(urlApi)
    .then(obj => obj.json())
    .then(fromApiResponseToGif)
    .catch(e => console.error(e))
}
