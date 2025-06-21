import React from 'react';
import ReactDOM from 'react-dom/client';
import FormGif from './Search/FormGif';
import { ButtonNav } from './Home';
import { GifContextProvider } from '../context/GifContext';
import { Route, } from 'wouter';
import SearchResult from './Search';
import CardInfo from '../pages/Detail/CardInfo'
import Home from './Home';
import FilterBtn from '../components/animate/Filter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <GifContextProvider>

      <header>

        <h1 className='text-white font-bold text-5xl mb-12 text-center'><a href="/">GifClub</a></h1>

        <div
          className='mb-6'>

          <FormGif />

          <nav className='flex items-center justify-between w-full relative'>

            <ul className='flex gap-4'>
              <ButtonNav to='/colombia' text='Colombia' />
              <ButtonNav to='/argentina' text='Argentina' />
              <ButtonNav to='/venezuela' text='Venezuela' />
            </ul>
            <FilterBtn />
          </nav>

        </div>
      </header >




      <main className='pb-12'>

        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResult}
          path='/:keyword'
        />
        <Route
          component={CardInfo}
          path='/gif/:id'
        />
      </main>
    </GifContextProvider>

  </React.Fragment>
);
