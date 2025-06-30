import React from 'react'
import { Link } from 'wouter'
import AvisoGif from '@/components/Gif/AvisoGif'
import { ClipboardCheck } from 'lucide-react'

function Gif ({ title, id, url, hash, frames, classAdd, animateCopyLink, animateDownload }) {
  return (
    <Link
      to={`/gif-detalle/${id}`}
      className={` flex relative ${classAdd || 'size-full min-h-32 '}`}

    >
      <img loading='lazy' src={url} alt='gif' className='gif object-cover size-full rounded ' />
      <span className='sr-only'>Imagen para de gif para mirar sus propiedades</span>

      <AvisoGif stateAviso={animateCopyLink} textMostrar='Enlace copiado!' Icon={ClipboardCheck} />
      <AvisoGif stateAviso={animateDownload} textMostrar='Descarga realizada!' />

    </Link>
  )
}
export default React.memo(Gif, (prevP, nextP) => (prevP.animateCopyLink === nextP.animateCopyLink && prevP.id === nextP.id && prevP.animateDownload === nextP.animateDownload))
