import React from 'react'
import { Link } from 'wouter'
function Tags ({ pulse, ancla, url }) {
  const prueba = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae'.split(' ')
  if (ancla) {
    return (
      <Link
        className='bg-botones text-text-hover/90 transition hover:text-white'
        to={`/gif/${encodeURI(url)}`}
      >
        {url}
      </Link>
    )
  }
  return (
    <ul className='flex gap-4 flex-wrap mt-4'>
      {
        prueba.map((text, index) => (
          <li
            key={index}
            className={`${pulse && 'animate-pulse'} bg-botones before:content-['#'] before:text-text-hover/70 text-white`}
          >
            {text}
          </li>
        ))
      }
    </ul>
  )
}
export default React.memo(Tags)
