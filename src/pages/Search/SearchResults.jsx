import useGif from '@/hooks/useGif'
import { lazy, Suspense, useCallback, useEffect } from 'react'
// import ContentLoading from '@/components/ContentLoad/LoadingSearches'
import useNearScreen from '@/hooks/useIntersection'
import debounce from 'just-debounce-it'
import Loading from '@/components/ContentLoad/Loading'
import { Link } from 'wouter'
const ListOfComponent = lazy(() => import('@/components/ListOfGif/ListOfComponent'))

export default function SearchResults ({ params = '' }) {
  const { keyword } = params
  const { loading, gif, setPage, loadingNextPage, finalPage } = useGif({ keyword })
  // const refGuie = useRef()
  const { isNearScreen, refElement } = useNearScreen({
    // distance: '50px',
    once: false
  })
  const handleNextPage = () => setPage(prev => prev + 1)

  const debounceHandleNextPage = useCallback(debounce(
    handleNextPage, 100
  ), [])

  useEffect(function () {
    // console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <>
      <Suspense fallback={<Loading />}>
        {
          loading
            ? <Loading />
            : (
              <>
                <ListOfComponent gif={gif} currentSearch={keyword} />

                {
                  loadingNextPage && <Loading />
                }

                <div ref={refElement} />

                {finalPage && (
                  <Link to='/' className='mt-6 block'> # volver al inicio</Link>
                )}
              </>)
        }
      </Suspense>
    </>
  )
}
