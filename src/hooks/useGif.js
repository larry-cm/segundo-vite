import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { apiObGif } from '@/services/apiGetGif'
import GifContext from '@/context/GifContext'
import debounce from 'just-debounce-it'

const INITIAL_PAGE = 0

export default function useGif ({ keyword, id, rating, mode, lang } = { keyword: null, mode: null }) {
  const [isError, setIsError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [isFinalPage, setFinalPage] = useState(false)

  const { gif, updateGif } = useContext(GifContext) || {}

  const lastKeywords = useMemo(() => JSON.parse(window.localStorage.getItem('lastKeyword')) || [], [])
  const lastGifObserver = useMemo(() => JSON.parse(window.localStorage.getItem('lastGifObserver')), [])

  const modeToUse = useMemo(() => mode || lastKeywords[0]?.split('/')[2] || 'gifs', [mode, lastKeywords])
  const keywordToUse = useMemo(() => keyword || lastKeywords[0]?.split('/')[0] || 'random', [keyword, lastKeywords])

  const finallySearch = useCallback((res) => {
    setLoading(false)
    updateGif(res)
  }, [setLoading, updateGif])

  const getApi = useCallback((keyword) => {
    setLoading(true)
    apiObGif({ keyword, mode: modeToUse, rating, lang })
      .then(res => {
        if (!res?.length) {
          setIsError(true)
          finallySearch([])
          return
        }
        // guardando ultimas búsquedas
        if (keyword !== 'random' && rating && modeToUse && lang) {
          const newKeywords = [
            `${keyword.trim()}/${rating}/${modeToUse}/${lang}`,
            ...lastKeywords
          ]
            .filter((e, i, arr) => arr.indexOf(e) === i)
            .slice(0, 3)
          window.localStorage.setItem('lastKeyword', JSON.stringify(newKeywords))
        }
        // guardando últimos gifs vistos
        window.localStorage.setItem('lastGifObserver', JSON.stringify(res))
        finallySearch(res)
      })
      .catch(e => {
        finallySearch([])
        setIsError(true)
      })
  }, [mode, rating, lang])

  const handleGetApi = useCallback(debounce(
    (keywordToUse) => {
      getApi(keywordToUse)
    }, 500, false), [getApi])

  useEffect(function () {
    if (!keyword) return
    const equalGifs = (
      lastGifObserver &&
      (lastKeywords[0]?.split('/')[0] === keyword?.trim())
    )

    if (equalGifs) finallySearch(lastGifObserver)
    else handleGetApi(keywordToUse)
  }, [keyword])

  useEffect(function () {
    getApi(keywordToUse)
  }, [mode, rating, lang])

  useEffect(() => {
    if (page === INITIAL_PAGE || loadingNextPage || isFinalPage || isError) return undefined
    setLoadingNextPage(true)
    apiObGif({ keyword: keywordToUse, modeToUse, page, rating, lang })
      .then(nextGifts => {
        if (gif.length === gif.concat(nextGifts).length) {
          setFinalPage(true)
          return undefined
        } else {
          updateGif(prev => prev.concat(nextGifts))
          setFinalPage(false)
        }
        setLoadingNextPage(false)
      })
      .catch(e => setIsError(true))
  }, [page])

  return { loading, loadingNextPage, gif, setPage, isFinalPage, handleGetApi }
}
