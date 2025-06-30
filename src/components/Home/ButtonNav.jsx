import { X } from 'lucide-react'
import { Link } from 'wouter'
import React from 'react'
function ButtonNav ({ to, text, handleVistas, badge }) {
  function handleQuitButton () {
    const lastK = JSON.parse(window.localStorage.getItem('lastKeyword') || [])
    const lastKFilter = lastK.filter(e => (`/gif/${e}` !== to))
    window.localStorage.setItem('lastKeyword', JSON.stringify(lastKFilter))
    handleVistas(lastKFilter)
  }

  const [keyword] = text.split('/')

  return (
    <li className='relative group'>
      <Link
        to={to || ' '}
        aria-label='enlace-principal'
        style={{ paddingLeft: '3rem', background: 'var(--color-primary)' }}
        className='bg-botones relative  font-medium  transition  text-text capitalize flex '
      >
        <span>{decodeURIComponent(keyword) || 'Colombia '}</span>
        {
          badge && (
            <span className='absolute w-fit text-xs right-0 -top-3 bg-red-500 p-1 rounded-full'>
              {badge.replace('/', ' - ')}
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
