import ButtonNav from '@/components/Home/ButtonNav'
import { useCallback, useState } from 'react'
export default function LastViews () {
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
  return (
    <ul className='flex flex-wrap gap-4 order-2 md:order-1'>
      {ultimasVistas.length
        ? ultimasVistas.map((e, id) => (
          <ButtonNav
            key={id}
            to={`/gif/${decodeURIComponent(e)}`}
            handleVistas={handleVistas}
            text={decodeURIComponent(e)}
          />
        ))
        : (<h3 className=' flex items-center px-4 py-2 rounded-2xl bg-primary font-medium text-text'>Navega entre categorías o búsquedas tener un historial</h3>)}
    </ul>
  )
}
