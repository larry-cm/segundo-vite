import { lazy, useCallback, useEffect } from 'react'
import { Link } from 'wouter'
import debounce from 'just-debounce-it'
import Loading from '@/components/ContentLoad/Loading'
import useGif from '@/hooks/useGif'
import useNearScreen from '@/hooks/useIntersection'
import FormGif from '@/components/Home/FormGif/FormGif'

import { Helmet } from 'react-helmet'
import { clasificacionesAbreviadas, LANGUAGES, MODO, RATINGS } from '@/components/Home/Filters/entries'

const ListOfComponent = lazy(() => import('@/components/ListOfGif/ListOfComponent'))

export default function SearchResults ({ params = '' }) {
  const { keyword, rating = RATINGS[0], mode = MODO[0], lang = clasificacionesAbreviadas[LANGUAGES.es] } = params
  const { loading, gif, setPage, loadingNextPage, finalPage } = useGif({ keyword, rating, mode, lang })

  const { isNearScreen, refElement } = useNearScreen({
    distance: '200px',
    once: false
  })

  const handleNextPage = () => setPage(prev => prev + 1)
  const debounceHandleNextPage = useCallback(debounce(
    handleNextPage, 100
  ), [])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Loading />
      </>
    )
  }

  return (
    <>
      {/* <Helmet>
        <title>
          {gif.length
            ? `${gif.length} resultados para "${decodeURI(keyword)}" | GufClub`
            : `Sin resultados para "${decodeURI(keyword)}" | GufClub`}
        </title>
        <meta
          name='description'
          content={
            gif.length
              ? `Encuentra ${gif.length} gifs animados sobre "${decodeURI(keyword)}" en GufClub. Descubre imágenes en movimiento, memes y reacciones relacionadas con "${decodeURI(keyword)}".`
              : `No se encontraron gifs animados para "${decodeURI(keyword)}" en GufClub. Intenta con otra búsqueda.`
          }
        />
        <meta
          name='keywords'
          content={
            gif.length
              ? `${decodeURI(keyword)}, gifs de ${decodeURI(keyword)}, imágenes animadas, memes de ${decodeURI(keyword)}, reacciones, GufClub`
              : 'búsqueda sin resultados, GufClub'
          }
        />
        <meta
          property='og:title'
          content={
            gif.length
              ? `${gif.length} resultados para "${decodeURI(keyword)}" | GufClub`
              : `Sin resultados para "${decodeURI(keyword)}" | GufClub`
          }
        />
        <meta
          property='og:description'
          content={
            gif.length
              ? `Explora y comparte los mejores gifs de "${decodeURI(keyword)}". GufClub te muestra ${gif.length} resultados animados para tu búsqueda.`
              : `No se encontraron gifs para "${decodeURI(keyword)}". Prueba con otra palabra clave en GufClub.`
          }
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='/logo.svg' />
        <meta property='og:site_name' content='GufClub' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={
            gif.length
              ? `${gif.length} resultados para "${decodeURI(keyword)}" | GufClub`
              : `Sin resultados para "${decodeURI(keyword)}" | GufClub`
          }
        />
        <meta
          name='twitter:description'
          content={
            gif.length
              ? `Busca y comparte gifs de "${decodeURI(keyword)}" en GufClub. Resultados actualizados y relevantes.`
              : `No hay gifs para "${decodeURI(keyword)}" en GufClub.`
          }
        />
      </Helmet> */}

      <FormGif
        initialKeyword={keyword}
        initialRating={rating}
        initialMode={mode}
        initialLang={lang}
      />
      <h1 className='text-2xl font-semibold mb-3'>
        {gif.length
          ? `${gif.length} resultados para ${decodeURI(keyword)}`
          : `Sin resultados para "${decodeURI(keyword)}"`}
      </h1>
      <p className='mb-6 text-text-hover'>
        {gif.length
          ? <>Explora gifs animados, memes y reacciones sobre <strong className='font-medium'>{decodeURI(keyword)}</strong>. Haz clic en cualquier gif para compartirlo o guardarlo.</>
          : <>No se encontraron gifs para <strong className='font-medium'>{decodeURI(keyword)}</strong>. Intenta con otra búsqueda.</>}
      </p>

      {gif.length > 0 && <ListOfComponent gif={gif} />}

      {loadingNextPage && <Loading />}

      <div ref={refElement} className='sr-only'>referencia para el infinite scroll</div>

      {finalPage && (
        <Link to='/' className='mt-6 block'> # volver al inicio</Link>
      )}
    </>
  )
}
