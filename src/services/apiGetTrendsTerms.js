import { apiUrl } from '@/services/setting'
const apiKey = import.meta.env.VITE_API_KEY

const fromApiResponseToTerms = response => {
  const { data = [] } = response
  return data
}

export function apiObTrendingTerms () {
  const urlApi = `${apiUrl}/trending/searches?api_key=${apiKey}`

  return fetch(urlApi)
    .then(obj => obj.json())
    .then(fromApiResponseToTerms)
    .catch(e => console.error(e))
}
