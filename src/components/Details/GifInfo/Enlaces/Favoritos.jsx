import { useState, useCallback } from 'react'
import { Heart } from 'lucide-react'

export function Favoritos ({ mode, elementId }) {
  const [fav, setFav] = useState(() => {
    const color = JSON.parse(globalThis.localStorage.getItem(`user-${mode}`)) || []
    return color
  })

  // const colorFav = fav.includes(elementId) ? 'text-red-500' : 'text-text-hover/80'
  const fillFav = fav.includes(elementId) ? 'fill-primary' : 'fill-transparent'
  const colorFav = fav.includes(elementId) ? 'text-primary' : 'text-text-hover/70'

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
        className='cursor-pointer flex flex-col md:flex-row py-2 px-4 transition duration-200 w-fit items-center gap-x-3 gap-y-1.5 group '
      >
        <Heart className={`group-hover:scale-125 group-hover:fill-primary group-hover:text-primary transition duration-200 ${fillFav} ${colorFav}`} />
        <span className={`group-hover:text-primary ${colorFav}`}>favorites</span>
      </button>
    </>
  )
}
