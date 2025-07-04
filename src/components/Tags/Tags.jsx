import { LANGUAGES, languagesArrayInvertido, MODO, RATINGS } from '@/components/Home/Filters/entries'
import FilterContext from '@/context/FilterContext'
import React, { useCallback, useContext } from 'react'
import { Link } from 'wouter'
const prueba = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae'.split(' ')

function Tags ({ pulse, ancla, url, tags = prueba }) {
  const { filters, setFilters } = useContext(FilterContext) || {}
  const {
    rating = RATINGS[0],
    mode = MODO[0],
    lang = languagesArrayInvertido[LANGUAGES.es]
  } = filters || {}

  const handleMoveHash = useCallback((name) => {
    setFilters(prev => ({ ...prev, query: name, rating, mode, lang }))
  }, [setFilters])

  if (ancla) {
    return (
      <Link
        className='bg-botones text-text-hover/90 transition hover:text-white'
        to={`/gif/${encodeURI(url)}/${rating}/${mode}/${lang}`}
      >
        {url}
      </Link>
    )
  }
  return (
    <ul className='flex gap-4 flex-wrap mt-4'>
      {
        tags?.map((name, index) => (
          <Link
            to={`/gif/${decodeURI(name)}/${rating}/${mode}/${lang}`}
            onClick={() => handleMoveHash(name)}
            key={index}
            className={`${pulse && 'animate-pulse'} bg-botones before:content-['#'] hover:before:text-fondo before:text-text-hover/70 text-white`}
          >
            {name}
          </Link>
        ))
      }
    </ul>
  )
}
export default React.memo(Tags)
