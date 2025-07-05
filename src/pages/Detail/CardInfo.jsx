import '@/css/download.css'
import { Helmet } from 'react-helmet'
import { Redirect } from 'wouter'
import useSingleGif from '@/hooks/useSingleGif'

import CentralGif from '@/components/Details/sections/CentralGif'
import Enlaces from '@/components/Details/sections/Enlaces'
import InfoGif from '@/components/Details/sections/InfoGif'

import useReduceAnimate from '@/pages/Detail/useReduceAnimate'
import MoreGifs from '@/components/Details/sections/MoreGIfs'
import Loading from '@/components/ContentLoad/Loading'

import { useRef } from 'react'
export default function CardInfo ({ params }) {
  const { id = '', mode = '' } = params
  const { handleAll, animateState } = useReduceAnimate()
  const { singleGif, isLoading, isError } = useSingleGif({ id })
  const moreComponentsRef = useRef()

  if (isError) return <Redirect to='/404' />

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando... | GifClub</title>
          <meta name='description' content='Cargando el detalle del gif. Por favor espera...' />
          <meta property='og:title' content='Cargando... | GifClub' />
          <meta property='og:description' content='Cargando el detalle del gif. Por favor espera...' />
          <meta name='robots' content='noindex, nofollow' />
        </Helmet>
        <Loading />
      </>
    )
  }

  const { url, userInfo, username, title } = singleGif || {}

  return (
    <>
      <Helmet>
        <title>{title ? `${title} | GifClub` : 'Detalle del Gif | GifClub'}</title>
        <meta
          name='description'
          content={
            userInfo?.description
              ? userInfo.description
              : `Explora el gif "${title}" creado por ${userInfo?.viewName || username || 'un usuario de GifClub'}. Descubre más gifs, guárdalos y compártelos fácilmente.`
          }
        />
        <meta property='og:title' content={title ? `${title} | GifClub` : 'Detalle del Gif | GifClub'} />
        <meta
          property='og:description'
          content={
            userInfo?.description
              ? userInfo.description
              : `Explora el gif "${title}" creado por ${userInfo?.viewName || username || 'un usuario de GifClub'}.`
          }
        />
        <meta property='og:image' content={url} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title ? `${title} | GifClub` : 'Detalle del Gif | GifClub'} />
        <meta
          name='twitter:description'
          content={
            userInfo?.description
              ? userInfo.description
              : `Explora el gif "${title}" creado por ${userInfo?.viewName || username || 'un usuario de GifClub'}.`
          }
        />
        <meta name='twitter:image' content={url} />
      </Helmet>

      <div className='grid grid-cols-1  md:grid-cols-6 gap-4 text-text mb-6'>
        <section className='col-span-2 flex flex-col sm:flex-row md:flex-col h-fit gap-4'>
          <InfoGif
            singleGif={singleGif || {}}
          />
        </section>

        <section className=' col-span-2 h-fit ' ref={moreComponentsRef}>
          <CentralGif
            singleGif={singleGif || {}}
            animateState={animateState}
            id={id}
            mode={mode}
          />
        </section>

        <aside className='row-start-2 md:row-start-1 md:col-start-5 col-span-2 text-text text-lg h-fit '>
          <Enlaces
            urlDownload={url}
            title={title}
            elementId={id}
            handleAnimateAll={handleAll}
          />
        </aside>
      </div>
      <div>
        <MoreGifs
          moreComponentsRef={moreComponentsRef}
          id={id}
          singleGif={singleGif}
        // mode={mode}
        />
      </div>

    </>
  )
};
