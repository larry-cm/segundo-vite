import { useContext, useEffect, useState } from 'react'

import GifContext from '@/context/GifContext'
import { apiObSingleGif } from '@/services/ApiGetGifId'
export default function useSingleGif ({ id }) {
  const lastGiftsObserver = { gif: JSON.parse(globalThis.localStorage.getItem('lastGifObserver') || '[]') }
  const gifContextValue = useContext(GifContext)

  const defineGif = gifContextValue.gif.length ? gifContextValue : lastGiftsObserver
  const { gif } = defineGif
  const elementView = gif?.find(singleGif => singleGif?.id === id)

  const [singleGif, setGifts] = useState(() => {
    const containGif = gif.some(el => isEqual(el.id, id))
    return containGif ? elementView : null
  })
  const [isError, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function isEqual (a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  useEffect(function () {
    const containGif = gif.some(el => isEqual(el.id, id))

    if (containGif) setGifts(elementView)
    else {
      setIsLoading(true)
      apiObSingleGif({ id })
        .then(gif => {
          globalThis.localStorage.setItem(
            'lastGifObserver',
            JSON.stringify(lastGiftsObserver.gif.concat(gif))
          )
          setGifts(gif)
          setError(false)
        })
        .catch(e => {
          setError(true)
        })
      setIsLoading(false)
    }
  }, [id])

  return { singleGif, isError, isLoading }
}
