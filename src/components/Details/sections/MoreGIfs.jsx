import throttle from 'just-throttle'
import { ChevronUp, Search } from 'lucide-react'
import { useCallback, useContext, useEffect, useState, useMemo } from 'react'

import FilterContext from '@/context/FilterContext'
import ListOfComponent from '@/components/ListOfGif/ListOfComponent'
import Loading from '@/components/ContentLoad/Loading'

import useGif from '@/hooks/useGif'
import useNearScreen from '@/hooks/useIntersection'
const LIMIT_PAGE = 30

export default function MoreGifs ({ singleGif, moreComponentsRef, id }) {
  const [limitPage, setLimitPage] = useState(LIMIT_PAGE)
  const { isNearScreen, refElement } = useNearScreen({ distance: '200px', once: false })
  const { filters } = useContext(FilterContext)
  const { lang, rating, mode } = filters

  const lTags = useMemo(() => JSON.parse(window.localStorage.getItem('lastTags')) || {}, [])
  const nextGifts = useMemo(() => singleGif?.title in lTags
    ? lTags[singleGif?.title]?.[0]
    : singleGif?.title?.slice(0, 10), [singleGif, lTags])

  const { gif, loadingNextPage, setPage, isFinalPage } = useGif({
    keyword: nextGifts, mode, lang, rating
  })

  const moreGifs = useMemo(() => gif.filter(g => g.id !== id), [gif, id])
  const isLimitGifs = useMemo(() => moreGifs.length <= limitPage, [moreGifs, limitPage])

  const handleFocusElement = useCallback(() => {
    if (moreComponentsRef.current) {
      moreComponentsRef.current.scrollIntoView(
        { block: 'center', behavior: 'smooth' }
      )
    }
  }, [])

  const handleLimitPage = useCallback(() => {
    handleNextPage()
    setLimitPage(limit => limit + LIMIT_PAGE)
  }, [])

  const handleNextPage = () => setPage(page => page + 1)
  const throttleNextPage = useCallback(throttle(
    handleNextPage,
    300
  ), [])

  useEffect(function () {
    if (isNearScreen && isLimitGifs) throttleNextPage()
  }, [isNearScreen, throttleNextPage])

  return (
    <>
      <section className='min-h-200'>
        <ListOfComponent handleFocusElement={handleFocusElement} hMin='h-fit' gif={moreGifs} />
      </section>

      {loadingNextPage && <Loading />}

      <p ref={refElement} className='sr-only'>Elemento para referenciar mas elementos en la pagina de detalles</p>

      {(isFinalPage || !isLimitGifs) && (
        <menu className='flex gap-5 text-white'>
          <button
            onClick={handleFocusElement} className='mt-6 block px-4 py-2 bg-botones cursor-pointer'
          >
            <ChevronUp />
          </button>
          <button
            style={{ width: 'fit-content' }}
            onClick={handleLimitPage}
            className='mt-6 flex gap-3 px-4 py-2  bg-botones'
          >
            <Search />
            <span> continuar tu búsqueda</span>
          </button>
        </menu>
      )}
    </>
  )
}
