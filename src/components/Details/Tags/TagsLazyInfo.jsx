import Tags from '@/components/Details/Tags/Tags'
import { useEffect, useState } from 'react'
import { apiObGifTerms } from '@/services/apiGetGifTerms'
export default function TagsLazyInfo ({ mode, altText, title }) {
  const [tagsGif, setTagsGif] = useState([])

  useEffect(function () {
    const tagToUse = (string = '') => string.split(' ').slice(1, 2).join(' ')
    apiObGifTerms({ mode, query: tagToUse(altText) || tagToUse(title) || 'gif', limit: 8 })
      .then(setTagsGif)
      .catch(e => console.error(e))
  }, [])

  return (

    <Tags tags={tagsGif} />
  )
}
