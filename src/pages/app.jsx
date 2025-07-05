import { GifContextProvider } from '@/context/GifContext'
import { lazy, Suspense } from 'react'
import { Route } from 'wouter'
import ContentLoading from '@/components/ContentLoad/LoadingSearches'
import Error from '@/pages/404/Error'
import TitlePage from '@/components/Home/TitlePage'
import { FilterProvider } from '@/context/FilterContext'
// import NotFoundRedirect from '@/pages/404/NotFoundRedirect'
import SearchResults from '@/pages/Search/SearchResults'
import FormGif from '@/components/Home/FormGif/FormGif'
const CardInfo = lazy(() => import('@/pages/Detail/CardInfo'))
const Home = lazy(() => import('@/pages/Home/Home'))

export default function App () {
  return (
    <>
      <FilterProvider>
        <header className='mb-6'>
          <TitlePage />
          <FormGif />
        </header>

        <GifContextProvider>
          <main className='pb-12'>
            <Suspense fallback={<ContentLoading />}>
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
              <Route
                component={Error}
                path='/404'
              />
            </Suspense>
          </main>
        </GifContextProvider>
        {/* <NotFoundRedirect /> */}
      </FilterProvider>

    </>
  )
}
