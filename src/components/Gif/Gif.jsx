import { Link } from 'wouter'
import AvisoGif from '@/components/Gif/AvisoGif'
import { ClipboardCheck } from 'lucide-react'
export default function Gif ({ title, id, url, hash, frames, classAdd, animateCopyLink, animateDownload }) {
  return (
    <Link
      to={`/gif/${id}`}
      className={` flex relative ${classAdd ?? 'size-full min-h-32 '}`}

    >
      <img src={url} className={`object-cover size-full rounded ${classAdd ? '' : 'rounded-b-none'}`} />
      <span className='sr-only'>Imagen para de gif para mirar sus propiedades</span>

      <AvisoGif stateAviso={animateCopyLink} textMostrar='Enlace copiado!' Icon={ClipboardCheck} />
      <AvisoGif stateAviso={animateDownload} textMostrar='Descarga realizada!' />

      <div />
    </Link>
  )
}
