import { Route } from 'wouter'
import { lazy, Suspense } from 'react'

import { GifContextProvider } from '@/context/GifContext'
import ContentLoading from '@/components/ContentLoad/LoadingSearches'
import TitlePage from '@/components/Home/TitlePage'
import Error from '@/pages/404/Error'
import SearchResults from './Search/SearchResults'
const Home = lazy(() => import('@/pages/Home/Home'))
// const SearchResults = lazy(() => import('@/pages/Search/SearchResults'))
const CardInfo = lazy(() => import('@/pages/Detail/CardInfo'))

export default function App () {
  return (
    <>
      <header className='mb-6'>
        <TitlePage />
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
              path='/gif-detalle/:id'
            />
            <Route
              component={Error}
              path='/404'
            />
          </Suspense>
        </main>
      </GifContextProvider>
    </>

  )
}
