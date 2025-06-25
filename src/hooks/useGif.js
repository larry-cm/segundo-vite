import { useContext, useEffect, useState } from 'react'
import { apiObGif } from '@/services/apiGetGif'
import GifContext from '@/context/GifContext'

const INITIAL_PAGE = 0

export default function useGif ({ keyword, id } = { keyword: null, id: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gif, updateGif, mode } = useContext(GifContext)
  const [finalPage, setFilanPage] = useState(false)
  const keywordToUse = keyword || window.localStorage.getItem('lastKeyword') || 'random'
  const modeToUse = mode || window.localStorage.getItem('lastMode') || 'gifs'

  useEffect(function () {
    setLoading(true)

    apiObGif({ keyword: keywordToUse, mode: modeToUse })
      .then(res => {
        setLoading(false)
        updateGif(res)
        window.localStorage.setItem('lastGifObserver', JSON.stringify(res))
        window.localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword, mode])

  useEffect(() => {
    if (page === INITIAL_PAGE || loadingNextPage) return undefined
    setLoadingNextPage(true)
    apiObGif({ keyword: keywordToUse, mode: modeToUse, page })
      .then(nextGifts => {
        updateGif(prev => {
          if (prev.length === prev.concat(nextGifts).length) return prev

          // (prev.length === prev.concat(nextGifts).length) && setFilanPage(true)
          return prev.concat(nextGifts)
        })
        setLoadingNextPage(false)
      })
      .catch(e => console.error(e))
  }, [page])

  return { loading, loadingNextPage, gif, mode, setPage, finalPage }
}
