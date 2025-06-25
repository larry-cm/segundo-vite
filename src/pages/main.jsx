import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Route } from 'wouter'

import { GifContextProvider } from '@/context/GifContext'
import FormGif from '@/components/Home/FormGif/FormGif'

import CardInfo from '@/pages/Detail/CardInfo'
import Home from '@/pages/Home/Home'
import SearchResults from '@/pages/Search/SearchResults'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <GifContextProvider>

        <header className='mb-6'>

          <h1 className='text-white font-bold text-5xl mb-12 text-center'>
            <Link to='/'>GifClub</Link>
          </h1>

          <FormGif />

        </header>

        <main className='pb-12'>

          <Route
            component={Home}
            path='/'
          />
          <Route
            component={SearchResults}
            path='/:keyword'
          />
          <Route
            component={CardInfo}
            path='/gif/:id'
          />
        </main>
      </GifContextProvider>
    </React.StrictMode>
  </>
)
