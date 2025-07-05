import { Link } from 'wouter'

import React, { useContext } from 'react'
import FilterContext from '@/context/FilterContext'
function TitlePage () {
  const { setFilters } = useContext(FilterContext) || {}
  const handleCleanQuery = (e) => setFilters('')
  return (
    <>
      <Link to='/' className='w-fit block mb-5 mx-auto' onClick={handleCleanQuery}>
        <h1 tabIndex={0} aria-label='title-page' className='text-white w-fit  font-bold text-5xl  text-center'>
          GifClub
        </h1>
      </Link>
      <p className='text-text text-lg text-center font-normal mb-10'>
        ¡En manos de desarrolladores web! Explora y disfruta de los mejores GIFs.
      </p>
    </>
  )
}
export default React.memo(TitlePage)
