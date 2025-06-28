import { Search, X } from 'lucide-react'
import { Link } from 'wouter'
import React, { useState } from 'react'
function ButtonNav ({ to, text, handleVistas }) {
  const [openClose, setOpenClose] = useState(false)

  function handleButton () {
    setOpenClose(true)
  }

  function handleCloseButton () {
    setOpenClose(false)
  }

  function handleQuitButton () {
    const lastK = JSON.parse(window.localStorage.getItem('lastKeyword') || [])
    window.localStorage.setItem('lastKeyword', JSON.stringify(lastK.filter(e => e !== text)))
    handleVistas(lastK.filter(e => e !== text))
  }

  return (
    <li className='relative group' onMouseOver={handleButton} onMouseOut={handleCloseButton}>
      <Link
        to={to || ' '}
        aria-label='enlace-principal'
        style={{ paddingLeft: '3rem' }}
        className='bg-botones group-hover:bg-primary truncate font-medium  transition  text-text capitalize flex '
      >
        <span>{text || 'Colombia '}</span>

      </Link>
      <span
        className={`absolute rounded-full cursor-pointer transition top-0 h-fit left-3 p-[2px] text-white bottom-0 my-auto ${openClose && 'bg-red-500 '}`}
        title={openClose ? `Olvidar la búsqueda ${text}` : `ir a ${text}`}
      >
        {openClose
          ? <X onClick={handleQuitButton} />
          : <Search />}
      </span>
    </li>
  )
}

export default React.memo(ButtonNav)
