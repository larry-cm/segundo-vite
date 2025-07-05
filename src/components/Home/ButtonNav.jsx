import { X } from 'lucide-react'
import { Link } from 'wouter'
import React from 'react'
function ButtonNav ({ to, text, quitView, badge }) {
  const handleQuitButton = () => quitView(to)

  const [keyword] = text.split('/')
  const badgeView = (to.split('/').slice(1).join('-'))

  return (
    <li className='relative group'>
      <Link
        to={`/gif/${to || ''}`}
        aria-label='enlace-principal'
        style={{ paddingLeft: '3rem' }}
        className='px-4 py-2 rounded-2xl min-w-36 relative  font-medium  transition duration-300 bg-primary hover:bg-secondary  text-zinc-900 capitalize flex '
      >
        <span>{decodeURIComponent(keyword) || 'Colombia '}</span>
        {
          badge && (
            <span style={{ paddingBlock: '.15rem', paddingInline: '.30rem' }} className='absolute w-fit text-white text-xs right-0 -top-3 font-normal secondary-fondo p-1 rounded-full'>
              {badgeView}
            </span>
          )
        }

      </Link>
      <span
        className='absolute rounded-full cursor-pointer transition top-0 h-fit left-3 p-[2px] text-white bottom-0 my-auto bg-red-500 '
        title={`Olvidar la búsqueda ${text} `}
      >
        <X onClick={handleQuitButton} />

      </span>
    </li>
  )
}

export default React.memo(ButtonNav)
