import React from 'react';
import ReactDOM from 'react-dom/client';
import FormGif from './Search/FormGif';
import { GifContextProvider } from '../context/GifContext';
import { Route, } from 'wouter';
import SearchResult from './Search';
import CardInfo from '../pages/Detail/CardInfo';
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <GifContextProvider>

      <header>

        <h1 className='text-white font-bold text-5xl mb-12 text-center'><a href="/">GifClub</a></h1>

        <div
          className='mb-6'>
          <FormGif />
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
