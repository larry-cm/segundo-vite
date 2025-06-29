import { Link } from 'wouter'

import React from 'react'
function TitlePage () {
  return (
    <Link to='/' className='w-fit block mb-10 mx-auto'>
      <h1 aria-label='title-page' className='text-white w-fit  font-bold text-5xl  text-center'>
        GifClub
      </h1>
    </Link>
  )
}
export default React.memo(TitlePage)
