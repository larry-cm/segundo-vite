import { MessageSquareShare, MailCheck } from 'lucide-react'
import useEnlaceAnimate from './useEnlacesAnimate'

export default function CompartirWp ({ urlDownload = '', title = '', handleAnimateShare }) {
  const { animateElement } = useEnlaceAnimate({
    handleAnimateCurso: handleAnimateShare,
    messageAnimate: 'Enviando mensaje...',
    messageIcon: MailCheck
  })

  const message = `¡Hola! Encontré esto en GifClub y pensé que te gustaría: "${title}". ¡Échale un vistazo!`
  const texto = encodeURIComponent(`${message} ${urlDownload}`)
  const urlWp = `https://wa.me/?text=${texto}` || 'no tiene url'

  return (
    <a
      onClick={animateElement}
      rel='noopener noreferrer'
      href={urlWp || '#'}
      target='_blank'
      className='p-2 text-text-hover/70 flex flex-col md:flex-row transition duration-200 w-fit  items-center gap-x-3 gap-y-1.5 group cursor-pointer active:text-primary'
    >
      <MessageSquareShare className='group-hover:scale-125 group-hover:text-primary  transition duration-200' />
      <span className='group-hover:text-primary '>Compartir</span>
    </a>
  )
}
