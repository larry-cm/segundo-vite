import { apiUrl, apiKey } from '@/services/setting'

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
