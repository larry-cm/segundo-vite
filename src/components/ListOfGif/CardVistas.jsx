import React, { lazy, Suspense } from 'react'
import Loading from '@/components/ContentLoad/Loading'

const Gif = lazy(() => import('@/components/Gif/Gif'))

function CardVistas ({ id, frames, hash, title, url }) {
  return (
    <Suspense fallback={<FallGif />}>
      <picture
        className='h-60 block bg-gradient-to-t from-sky-500 via-secondary to-sky-600 text-text rounded-md '
      >
        <Gif
          id={id}
          frames={frames}
          hash={hash}
          title={title}
          url={url}
          classAdd='h-2/3 w-full *:rounded-b-none '
        />
        <header className=' h-1/3 gap-3 flex px-4 items-center justify-center'>
          <em className='not-italic w-full line-clamp-2 text-center font-medium'>{title}</em>
        </header>
      </picture>
    </Suspense>
  )
}

function FallGif () {
  return (
    <div className='min-36'>
      <Loading />
    </div>
  )
}

export default React.memo(CardVistas, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})// verificar props antiguas con las nuevas para permitir que re renderize el componente
