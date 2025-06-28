import { useContext, useEffect, useState } from 'react'

import GifContext from '@/context/GifContext'
import { apiObSingleGif } from '@/services/ApiGetGifId'
export default function useSingleGif ({ id }) {
  const lastGiftsObserver = { gif: JSON.parse(globalThis.localStorage.getItem('lastGifObserver') || '[]') }
  const gifContextValue = useContext(GifContext)
  const defineGif = gifContextValue.gif.length ? gifContextValue : lastGiftsObserver
  const { gif } = defineGif
  const fromCacheGif = gif?.find(singleGif => singleGif?.id === id)

  const [gifts, setGifts] = useState(fromCacheGif)
  const [isError, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    if (!gifts) {
      setIsLoading(true)
      apiObSingleGif({ id })
        .then(gif => {
          setGifts(gif)
          setIsLoading(false)
          globalThis.localStorage.setItem('lastGifObserver', JSON.stringify(lastGiftsObserver.gif.concat(gif)))
          setError(false)
        })
        .catch(e => {
          setIsLoading(false)
          setError(true)
        })
    }
  }, [gifts, id])

  return { gifts, isError, isLoading }
}
