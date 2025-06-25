// import LoaderTags from '@/components/ContentLoad/LoaderTags'
import Tags from '@/components/Details/Tags/Tags'
import useNearScreen from '@/hooks/useIntersection'
import { lazy, Suspense } from 'react'
// import TrendingSearchesLazy from './TrendingSearchesLazy'

const TrendingSearchesLazy = lazy(() => import('./TrendingSearchesLazy'))
export default function LazyTrading () {
  const { refElement: refTrends, isNearScreen } = useNearScreen({ distance: '500px' })

  return (
    <section ref={refTrends}>
      <Suspense fallback={<Tags pulse />}>
        {
          isNearScreen ? <TrendingSearchesLazy /> : <Tags pulse />
        }
      </Suspense>
    </section>
  )
};
