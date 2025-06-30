import { X } from 'lucide-react'
import { Link } from 'wouter'
import React from 'react'
function ButtonNav ({ to, text, handleVistas }) {
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
        className='bg-botones  truncate font-medium  transition  text-text capitalize flex '
      >
        <span>{decodeURIComponent(keyword) || 'Colombia '}</span>

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
