import Tags from '@/components/Tags/Tags'
import { useEffect, useState } from 'react'
import { apiObGifTerms } from '@/services/apiGetGifTerms'
import TagsLoading from '@/components/ContentLoad/TagsLoading'
import ContentLoE from '@/components/ContentLoad/ContentLoE'
const getTextTerm = (s) => s?.split(' ')?.slice(0, 2).join(' ').trim()

export default function TagsLazyInfo ({ mode, altText, title }) {
  const [loadingTags, setLoadingTags] = useState(false)
  const [errorTags, setErrorTags] = useState(false)
  const [tagsGif, setTagsGif] = useState(() => {
    const data = JSON.parse(window.localStorage.getItem('lastTags')) || {}
    return data || '[]'
  })

  useEffect(function () {
    if (tagsGif[title]?.length) return undefined

    setLoadingTags(true)
    const tagToUse = getTextTerm(title) || getTextTerm(altText)

    apiObGifTerms({ mode, query: tagToUse, limit: 8 })
      .then(res => {
        if (!res.length) return
        const tags = res.map(({ name }) => name)

        setTagsGif({ [title]: tags })
        window.localStorage.setItem('lastTags', JSON.stringify({ [title]: tags }))
        setErrorTags(false)
      })
      .catch(e => {
        setErrorTags(true)
      })
    setLoadingTags(false)
  }, [title])
  return (
    <ContentLoE
      isLoading={loadingTags}
      isError={errorTags}
      LoadingComponent={TagsLoading({ numTags: 8 })}
    >
      {tagsGif[title]?.length && (
        <div className='max-[500px]:min-h-44 min-h-30 md:min-h-60 md:max-h-60 overflow-auto scroll-rounded'>
          <Tags tags={tagsGif[title]} />
        </div>
      )}
    </ContentLoE>
  )
}
