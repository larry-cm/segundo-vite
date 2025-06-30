import ButtonNav from '@/components/Home/ButtonNav'
import React from 'react'
import useLastViews from '@/components/Home/LastViews/useLastViews'
function LastViews () {
  const {
    ultimasVistas,
    indicesRepetidosPorInicio: filtrosRepetidos,
    changeViews,
    getTextUrl
  } = useLastViews()

  return (
    <div className=' mb-6'>
      <em className='text-white text-2xl not-italic font-medium mb-4 block'>Búsquedas recientes</em>
      <ul className='flex flex-wrap gap-4 '>
        {ultimasVistas.length
          ? ultimasVistas.map((e, id) => (
            <ButtonNav
              key={id}
              to={`/gif/${decodeURIComponent(e)}`}
              handleVistas={changeViews}
              text={getTextUrl(e)}
              badge={filtrosRepetidos[id]}
            />
          ))
          : (
            <h3 className=' flex items-center rounded-2xl py-2 px-4 shadow-2xs transition-colors duration-300 bg-primary font-medium text-text min-h-[42px]'>
              Navega entre categorías o búsquedas para tener un historial
            </h3>)}
      </ul>
    </div>
  )
}
export default React.memo(LastViews)
