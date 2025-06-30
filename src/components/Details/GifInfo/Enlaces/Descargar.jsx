import { Download, ImageDown } from 'lucide-react'
import useEnlaceAnimate from './useEnlacesAnimate'
import useDownloadGif from './useDownloadGif'

export default function Descargar ({ title = 'Descarga', handleAnimateDownload, urlDownload }) {
  const { animateElement } = useEnlaceAnimate({
    handleAnimateCurso: handleAnimateDownload,
    messageAnimate: 'Descargando...',
    messageIcon: ImageDown
  })
  const { downloadRef } = useDownloadGif({ title, urlDownload })

  return (
    <a
      ref={downloadRef}
      onClick={animateElement}
      className='p-2 flex flex-col md:flex-row text-text-hover/70 transition duration-200 w-fit  items-center gap-x-3 gap-y-1.5 group active:text-primary'
      rel='noopener noreferrer'
    >
      <Download className='group-hover:scale-125 group-hover:text-secondary transition duration-200' />
      <span className='group-hover:text-sky-500 '>Descargar</span>
    </a>
  )
}
