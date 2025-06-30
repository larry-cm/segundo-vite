import { GifContextProvider } from '@/context/GifContext'
import { lazy, Suspense } from 'react'
import { Route } from 'wouter'
import ContentLoading from '@/components/ContentLoad/LoadingSearches'
import Error from '@/pages/404/Error'
import SearchResults from './Search/SearchResults'
import TitlePage from '@/components/Home/TitlePage'
import { FilterProvider } from '@/context/FilterContext'
// import NotFoundRedirect from '@/pages/404/NotFoundRedirect'
const CardInfo = lazy(() => import('@/pages/Detail/CardInfo'))
const Home = lazy(() => import('@/pages/Home/Home'))

export default function App () {
  return (
    <>
      <header className='mb-6'>
        <TitlePage />
      </header>

      <GifContextProvider>
        <main className='pb-12'>
          <Suspense fallback={<ContentLoading />}>
            <FilterProvider>
              <Route
                component={Home}
                path='/'
              />
              <Route
                component={SearchResults}
                path='/gif/:keyword/:rating?/:mode?/:lang?'
              />
              <Route
                component={CardInfo}
                path='/gif-detalle/:mode?/:id?'
              />
            </FilterProvider>
            <Route
              component={Error}
              path='/404'
            />
          </Suspense>
        </main>
      </GifContextProvider>
      {/* <NotFoundRedirect /> */}
    </>
  )
}
