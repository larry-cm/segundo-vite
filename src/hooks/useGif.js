import { useContext, useEffect, useState } from 'react'
import { apiObGif } from '@/services/apiGetGif'
import GifContext from '@/context/GifContext'

const INITIAL_PAGE = 0

export default function useGif ({ keyword, id, rating, mode, lang } = { keyword: null, id: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gif, updateGif } = useContext(GifContext) || {}
  const [finalPage, setFinalPage] = useState(false)

  const lastKeywords = JSON.parse(window.localStorage.getItem('lastKeyword')) || []
  const keywordToUse = keyword || lastKeywords[0]?.split('/')[0] || 'random'
  const modeToUse = mode || lastKeywords[0]?.split('/')[2] || 'gifs'

  useEffect(function () {
    setLoading(true)
    if (!keyword || !lang) {
      // console.log('L', modeToUse)
    }
    apiObGif({ keyword: keywordToUse, mode: modeToUse, rating, lang })
      .then(res => {
        setLoading(false)
        updateGif(res)
        if (!res.length) return
        if (keywordToUse !== 'random' && keyword) {
          const newKeywords = [`${keywordToUse}/${rating}/${modeToUse}/${lang}`, ...lastKeywords]
            .filter((e, i, arr) => arr.indexOf(e) === i)
            .slice(0, 3)
          window.localStorage.setItem('lastKeyword', JSON.stringify(newKeywords))
        }

        window.localStorage.setItem('lastGifObserver', JSON.stringify(res))
      })
      .catch(e => console.error(e))
  }, [keyword, mode, rating, lang])

  useEffect(() => {
    if (page === INITIAL_PAGE || loadingNextPage || finalPage) return undefined
    setLoadingNextPage(true)
    apiObGif({ keyword: keywordToUse, modeToUse, page, rating, lang })
      .then(nextGifts => {
        if (gif.length === gif.concat(nextGifts).length) setFinalPage(true)
        else {
          updateGif(prev => prev.concat(nextGifts))
          setFinalPage(false)
        }
        setLoadingNextPage(false)
      })
      .catch(e => console.error(e))
  }, [page])

  return { loading, loadingNextPage, gif, setPage, finalPage }
}
