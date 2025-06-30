import { LinkIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
export default function Copiar ({ handleAnimateCopyLink }) {
  const timeoutRef = useRef(null)

  const handleAnimate = () => {
    if (timeoutRef.current) return

    handleAnimateCopyLink(true)
    timeoutRef.current = setTimeout(() => {
      handleAnimateCopyLink(false)
      timeoutRef.current = null
    }, 500)
  }

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current)
  }, [])

  return (
    <button
      onClick={handleAnimate}
      className='py-2 px-4 text-text-hover/70 flex flex-col md:flex-row transition duration-200 w-fit  items-center gap-x-3 gap-y-1.5 group cursor-pointer'
    >
      <LinkIcon className='group-hover:scale-125 group-hover:text-secondary transition duration-200' />
      <span className='group-hover:text-sky-500'>Copiar enlace</span>
    </button>
  )
}
