import ButtonNav from '@/components/Home/ButtonNav'
import React, { useCallback, useState, useEffect } from 'react'
function LastViews () {
  const [ultimasVistas, setUltimasVistas] = useState(() => {
    const item = window.localStorage.getItem('lastKeyword')
    try {
      return item ? JSON.parse(item) : []
    } catch {
      return []
    }
  })

  const handleVistas = useCallback((val) => {
    setUltimasVistas(val)
  }, [])

  useEffect(() => {
    if (ultimasVistas.some(item => item.includes('undefined'))) {
      const filtered = ultimasVistas.filter(item => !item.includes('undefined'))
      setUltimasVistas(filtered)
      window.localStorage.setItem('lastKeyword', JSON.stringify(filtered))
    }
  }, [ultimasVistas])
  const getTextUrl = useCallback((str) => decodeURIComponent(str).split('/')[0], [ultimasVistas])

  return (
    <div className=' mb-6'>
      <em className='text-white text-2xl not-italic font-medium mb-4 block'>Búsquedas recientes</em>
      <ul className='flex flex-wrap gap-4 '>
        {ultimasVistas.length
          ? ultimasVistas.map((e, id) => (
            <ButtonNav
              key={id}
              to={`/gif/${decodeURIComponent(e)}`}
              handleVistas={handleVistas}
              text={getTextUrl(e)}
            />
          ))
          : (
            <h3 className=' flex items-center rounded-2xl py-2 px-4 shadow-2xs transition-colors duration-300 bg-primary font-medium text-text min-h-[42px]'>
              Navega entre categorías o búsquedas para tener un historial
            </h3>
            )}
      </ul>
    </div>
  )
}
export default React.memo(LastViews)
