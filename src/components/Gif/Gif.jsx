import React, { useMemo } from 'react'
import { Link } from 'wouter'
import AvisoGif from '@/components/Gif/AvisoGif'
import { ClipboardCheck } from 'lucide-react'
import { MODO } from '../Home/Filters/entries'

function Gif ({ title, id, url, altText = 'gif', hash, frames, classAdd, animateView, handleFocusElement }) {
  const modeToUse = useMemo(() => {
    return window.localStorage.getItem('lastKeyword')?.split('/')[2] || MODO[0]
  }, [])
  const avisos = Object.values(animateView || {}).filter(value => value !== null)

  return (
    <Link
      to={`/gif-detalle/${modeToUse}/${id}`}
      className={` flex relative ${classAdd || 'size-full min-h-full'}`}
      onClick={handleFocusElement}
    >
      <img loading='eager' src={url} alt={altText} className='gif object-cover size-full rounded ' />
      <span className='sr-only'>Imagen para de gif para mirar sus propiedades</span>

      {
        avisos?.map(({ status, message, icon }, index) => (
          <AvisoGif
            key={index}
            stateAviso={status}
            textMostrar={message || 'Enlace copiado!'}
            Icon={icon || ClipboardCheck}
          />
        ))
      }

    </Link>
  )
}
export default React.memo(Gif)
