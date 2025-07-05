import { useCallback, useContext, useEffect, useState } from 'react'
import GifContext from '@/context/GifContext'
import { apiObGif } from '@/services/apiGetGif'
import FilterContext from '@/context/FilterContext'
export default function useLastViews () {
  const [ultimasVistas, setUltimasVistas] = useState(() => {
    const item = window.localStorage.getItem('lastKeyword') || '[]'
    return JSON.parse(item)
  })
  const { updateGif } = useContext(GifContext) || {}
  const { filters } = useContext(FilterContext)
  const { mode, rating, lang } = filters
  const quitView = useCallback((val) => {
    setUltimasVistas(prev => {
      if (!prev) return undefined
      const updateLastViews = prev?.filter(e => e !== val)
      window.localStorage.setItem('lastKeyword', JSON.stringify(updateLastViews))

      if (!updateLastViews.length) {
        apiObGif({ mode, rating, lang, keyword: 'random' })
          .then(res => {
            // actualizamos el contexto
            updateGif(res)
            // actualizamos el local storage.
            window.localStorage.setItem('lastGifObserver', JSON.stringify(res))
          })
        // .catch()
        window.localStorage.setItem('lastGifObserver', JSON.stringify([]))
      }
      return updateLastViews
    })
  }, [])

  useEffect(function () {
  }, [ultimasVistas])
  const getTextUrl = useCallback((str) => decodeURIComponent(str).split('/')[0], [ultimasVistas])

  const revisionDuplicados = ultimasVistas
    .map(el => getTextUrl(el))
    .filter((item, idx, arr) => arr.indexOf(item) !== idx)

  const viewBadge = useCallback((elMirar) => revisionDuplicados.some(e => e === getTextUrl(elMirar)),
    [revisionDuplicados])

  return {
    ultimasVistas,
    quitView,
    getTextUrl,
    viewBadge
  }
}
