import { apiUrl, apiKey } from '@/services/setting'

const fromApiResponseToTerms = response => {
  const { data = [] } = response
  return data
}

export function apiObGifTerms ({ mode = 'gifs', query = '', limit = 5, offset = 0 } = {}) {
  const urlApi = `${apiUrl}/${mode}/search/tags?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}`
  return fetch(urlApi)
    .then(obj => obj.json())
    .then(fromApiResponseToTerms)
    .catch(e => console.error(e))
}
