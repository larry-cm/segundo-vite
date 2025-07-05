import ButtonNav from '@/components/Home/ButtonNav'
import React from 'react'
import useLastViews from '@/components/Home/LastViews/useLastViews'
function LastViews () {
  const {
    ultimasVistas,
    quitView,
    getTextUrl,
    viewBadge
  } = useLastViews()

  return (
    <div className=' mb-6'>
      <h2 className='text-white text-2xl not-italic font-medium mb-4 block'>Búsquedas recientes</h2>
      <ul className='flex flex-wrap gap-4 '>
        {ultimasVistas.length
          ? ultimasVistas.map((e, id) => (
            <ButtonNav
              key={id}
              to={decodeURIComponent(e)}
              quitView={quitView}
              text={getTextUrl(e)}
              badge={viewBadge(e)}
            />
          ))
          : (
            <li className=' flex items-center rounded-2xl py-2 px-4 shadow-2xs transition-colors duration-300 bg-primary font-medium text-fondo '>
              Navega entre categorías o búsquedas para tener un historial
            </li>)}
      </ul>
    </div>
  )
}
export default React.memo(LastViews)
