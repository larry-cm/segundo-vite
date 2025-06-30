import React, { useContext } from 'react'
import { Link } from 'wouter'
import AvisoGif from '@/components/Gif/AvisoGif'
import { ClipboardCheck } from 'lucide-react'
import FilterContext from '@/context/FilterContext'

function Gif ({ title, id, url, altText = 'gif', hash, frames, classAdd, animateView }) {
  const { filters } = useContext(FilterContext)
  const { mode } = filters
  const avisos = Object.values(animateView).filter(e => e !== null)
  console.log(avisos)
  return (
    <Link
      to={`/gif-detalle/${mode}/${id}`}
      className={` flex relative ${classAdd || 'size-full min-h-32 '}`}

    >
      <img loading='lazy' src={url} alt={altText} className='gif object-cover size-full rounded ' />
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
