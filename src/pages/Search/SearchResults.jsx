import { lazy, useCallback, useContext, useEffect } from 'react'
import { Link } from 'wouter'
import throttle from 'just-throttle'
import Loading from '@/components/ContentLoad/Loading'
import useGif from '@/hooks/useGif'
import useNearScreen from '@/hooks/useIntersection'

import { Helmet } from 'react-helmet'
import { LANGUAGES, MODO, RATINGS } from '@/components/Home/Filters/entries'
import ContentLoading from '@/components/ContentLoad/LoadingSearches'
import FilterContext from '@/context/FilterContext'

const ListOfComponent = lazy(() => import('@/components/ListOfGif/ListOfComponent'))

export default function SearchResults ({ params = '' }) {
  const { filters } = useContext(FilterContext)
  const { query, mode: modeContext, rating: ratingContext, lang: langContext } = filters
  const {
    keyword,
    rating = RATINGS[0],
    mode = MODO[0],
    lang = Object.keys(LANGUAGES)[1]
  } = { keyword: query || params.keyword, rating: ratingContext, mode: modeContext, lang: langContext } || params

  const {
    loading,
    gif,
    setPage,
    loadingNextPage,
    finalPage
  } = useGif({ keyword, rating, mode, lang })

  const { isNearScreen, refElement } = useNearScreen({
    distance: '200px',
    once: false
  })

  const handleNextPage = () => setPage(prev => prev + 1)
  const debounceHandleNextPage = useCallback(throttle(
    handleNextPage
    , 300
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
        <ContentLoading />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>
          {`Resultados para ${decodeURI(keyword)} | GufClub`}
        </title>
        <meta
          name='description'
          content={`Encuentra ${gif.length} gifs animados sobre "${decodeURI(keyword)}" en GufClub. Descubre imágenes en movimiento, memes y reacciones relacionadas con "${decodeURI(keyword)}".`}
        />
        <meta
          name='keywords'
          content={`${decodeURI(keyword)}, gifs de ${decodeURI(keyword)}, imágenes animadas, memes de ${decodeURI(keyword)}, reacciones, GufClub`}
        />
        <meta
          property='og:title'
          content={`${gif.length} resultados para "${decodeURI(keyword)}" | GufClub`}
        />
        <meta
          property='og:description'
          content={`Explora y comparte los mejores gifs de "${decodeURI(keyword)}". GufClub te muestra ${gif.length} resultados animados para tu búsqueda.`}
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='/logo.svg' />
        <meta property='og:site_name' content='GufClub' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={`${gif.length} resultados para "${decodeURI(keyword)}" | GufClub`}
        />
        <meta
          name='twitter:description'
          content={`Busca y comparte gifs de "${decodeURI(keyword)}" en GufClub. Resultados actualizados y relevantes.`}
        />
      </Helmet>

      <h1 className='text-2xl font-semibold mb-3'>
        {`Hemos encontrado ${gif.length} resultados para ${decodeURI(keyword)}`}
      </h1>

      <p className='mb-6 text-text-hover'>
        <>Explora gifs animados, memes y reacciones sobre <strong className='font-medium'>{decodeURI(keyword)}</strong>. Haz clic en cualquier gif para compartirlo o guardarlo.</>
      </p>

      <ListOfComponent hMin='min-h-250' gif={gif} />

      {loadingNextPage && <Loading />}

      <div ref={refElement} className='sr-only'>referencia para el infinite scroll</div>

      {finalPage && (
        <Link to='/' className='mt-6 block px-4 py-2 bg-botones '> # volver al inicio</Link>
      )}
    </>
  )
}
