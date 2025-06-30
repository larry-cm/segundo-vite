import { LinkIcon } from 'lucide-react'
import useEnlaceAnimate from './useEnlacesAnimate'
export default function Copiar ({ handleAnimateCopyLink, urlDownload }) {
  const { animateElement } = useEnlaceAnimate({ handleAnimateCurso: handleAnimateCopyLink, messageAnimate: 'Enlace copiado' })

  const handleAnimate = async () => {
    await navigator.clipboard.writeText(urlDownload)
    animateElement()
  }

  return (
    <button
      onClick={handleAnimate}
      className='p-2 text-text-hover/70 flex flex-col md:flex-row transition duration-200 w-fit  items-center gap-x-3 gap-y-1.5 group cursor-pointer active:text-primary'
    >
      <LinkIcon className='group-hover:scale-125 group-hover:text-primary  transition duration-200' />
      <span className='group-hover:text-primary '>Copiar enlace</span>
    </button>
  )
}
