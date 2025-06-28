import { useCallback, useEffect, useRef } from 'react'
import { Download } from 'lucide-react'

import { GetUrlDownload } from '@/services/downloadImage'
export default function Descargar ({ title = 'Descarga', handleAnimateDownload, urlDownload }) {
  const downloadRef = useRef()
  const animateRef = useRef()

  const handleAnimate = () => {
    if (animateRef.current) return

    handleAnimateDownload(true)
    animateRef.current = setTimeout(() => {
      handleAnimate(false)
      animateRef.current = null
    }, 500)
  }

  const handleDownloadImg = useCallback(async () => {
    const res = await GetUrlDownload({ urlDownload })
    if (!res) return
    const { url, ext } = res
    downloadRef.current.href = url
    downloadRef.current.download = title || `${title}.${ext}`
  }, [])

  useEffect(function () {
    return () => clearTimeout(animateRef.current)
  }, [])
  return (
    <a
      ref={downloadRef}
      onMouseEnter={handleDownloadImg}
      onClick={handleAnimate}
      className='py-2 px-4 text-text font-semibold transition duration-200 w-fit flex items-center gap-3 group'
      rel='noopener noreferrer'
    >
      <Download className='group-hover:scale-125 group-hover:text-secondary transition duration-200' />
      <span className='group-hover:text-sky-500'>Descargar</span>
    </a>
  )
}
