import FormGif from '@/components/Home/FormGif/FormGif'
import { randomNum } from '@/services/ApiRandomGif'
import { useEffect, useState } from 'react'

export default function Error () {
  const [gif, setGif] = useState()
  useEffect(function () {
    setGif(randomNum({ max: 4 }))
  }, [])
  console.log(gif)

  const url = gif || '/images/not-found.webp'
  return (
    <>
      <FormGif viewFilters={false} />
      <h1 className='text-3xl my-6 text-white text-center font-medium'>Vaya encontramos un error :( </h1>
      <img
        src={url}
        alt='Vaya parece que nos encontramos un error, por favor revida la búsqueda y vuelve a intentarlo' className='h-96 mx-auto mb-6'
      />
      <p className='text-text-hover text-xl font-normal mb-[1lh] text-center'>Puedes consultarnos para ver que esta pasando o seguir disfrutando de otros gifts y stickers gratis</p>
      <div className='flex gap-5 mx-auto w-fit *:min-w-44'>

        <a className='primary-fondo rounded-2xl py-4 px-6 text-text font-medium text-center' href='/'>Continuar disfrutando</a>
      </div>
    </>
  )
}
