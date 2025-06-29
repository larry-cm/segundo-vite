import React, { lazy, Suspense } from 'react'
import useNearScreen from '@/hooks/useIntersection'
import TagsLoading from '@/components/ContentLoad/TagsLoading'
const TrendingSearchesLazy = lazy(() => import('@/components/Home/TrendingSearches/TrendingSearchesLazy'))

function LazyTrading () {
  const { isNearScreen, refElement } = useNearScreen({ distance: '200px' })

  return (
    <section className=' mb-6 order-2 md:order-1'>
      <h4 className='text-2xl text-text font-medium mb-4'>Novedades </h4>

      <Suspense fallback={<TagsLoading pulse />}>
        <div className='sr-only' ref={refElement}>visor de los trending</div>
        {
          isNearScreen && <TrendingSearchesLazy />
        }
      </Suspense>
    </section>
  )
};
export default React.memo(LazyTrading)
