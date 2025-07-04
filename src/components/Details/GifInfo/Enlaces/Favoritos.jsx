import { useState } from 'react'
import { Heart } from 'lucide-react'
import useEnlaceAnimate from '@/components/Details/GifInfo/Enlaces/useEnlacesAnimate'

export default function Favoritos ({ mode, elementId, handleAnimateFav }) {
  const [fav, setFav] = useState(() => {
    const color = JSON.parse(globalThis.localStorage.getItem(`user-${mode}`)) || []
    return color
  })

  const isFav = fav.includes(elementId)
  const fillFav = isFav ? 'fill-primary' : 'fill-transparent'
  const colorFav = isFav ? 'text-primary' : 'text-text-hover/70'

  const animateElement = useEnlaceAnimate({
    handleAnimateCurso: handleAnimateFav,
    messageAnimate: isFav ? 'Eliminado de favoritos' : 'Agregado a favoritos',
    messageIcon: Heart
  })

  const handleFavorites = () => {
    setFav(prev => {
      let newVal
      if (prev.includes(elementId)) newVal = prev.filter(e => e !== elementId)
      else newVal = [...prev, elementId]
      globalThis.localStorage.setItem(`user-${mode}`, JSON.stringify(newVal))
      return newVal
    })

    animateElement()
  }

  return (
    <>
      <button
        type='button'
        onClick={handleFavorites}
        className='cursor-pointer flex flex-col md:flex-row p-2 transition duration-200 w-fit items-center gap-x-3 gap-y-1.5 group '
      >
        <Heart className={`sm:group-hover:scale-125 active:scale-125 sm:group-hover:fill-primary sm:group-hover:text-primary transition duration-200 ${fillFav} ${colorFav}`} />
        <span className={`sm:group-hover:text-primary ${colorFav}`}>favorites</span>
      </button>
    </>
  )
}
