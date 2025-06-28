import { useState, useCallback } from 'react'
import { Heart } from 'lucide-react'

export function Favoritos ({ mode, elementId }) {
  const [fav, setFav] = useState(() => {
    const color = JSON.parse(globalThis.localStorage.getItem(`user-${mode}`)) || []
    return color
  })

  const colorFav = fav.includes(elementId) ? 'text-red-500' : 'text-text'
  const fillFav = fav.includes(elementId) ? 'fill-red-500' : 'fill-text'
  const colorFavSuave = fav.includes(elementId) ? 'text-red-400' : 'text-text'

  const handleFavorites = useCallback(() => {
    setFav(prev => {
      let newVal
      if (prev.includes(elementId)) newVal = prev.filter(e => e !== elementId)
      else newVal = [...prev, elementId]
      globalThis.localStorage.setItem(`user-${mode}`, JSON.stringify(newVal))
      return newVal
    })
  }, [elementId])

  return (
    <>
      <button
        type='button'
        onClick={handleFavorites}
        className={`cursor-pointer flex py-2 px-4  font-semibold transition duration-200 w-fit items-center gap-3 group ${colorFavSuave}`}
      >
        <Heart className={`group-hover:scale-125 group-hover:fill-red-500 group-hover:text-red-500 transition duration-200 ${fillFav} ${colorFav}`} />
        <span className='group-hover:text-red-400 '>favorites</span>
      </button>
    </>
  )
}
