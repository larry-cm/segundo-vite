import { Helmet } from 'react-helmet'
import LazyTrading from '@/components/Home/TrendingSearches/TrendingSearches'
import FormGif from '@/components/Home/FormGif/FormGif'
import LastViews from '@/components/Home/LastViews/UltimasVistas'
import Results from '@/components/Home/Results/Results'
import Footer from '@/components/Home/Footer'

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Un mundo de búsqueda de gifts para disfrutar de las risas | GifClub</title>
        <meta
          name='description'
          content='GifClub es tu plataforma para buscar, descubrir y compartir los mejores gifs animados. Encuentra gifs divertidos, populares y de tendencia para cada ocasión y comparte risas con tus amigos.'
        />
        <meta name='keywords' content='gifs, animados, buscar gifs, compartir gifs, gifs divertidos, gifs populares, gifs tendencia, GifClub' />
        <meta name='author' content='GifClub' />

        <meta property='og:title' content='GifClub - Busca y comparte los mejores gifs animados' />
        <meta property='og:description' content='Descubre y comparte gifs divertidos, populares y de tendencia en GifClub.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='/logo.svg' />
        <meta property='og:image' content='/logo.svg' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='GifClub - Busca y comparte los mejores gifs animados' />
        <meta name='twitter:description' content='Descubre y comparte gifs divertidos, populares y de tendencia en GifClub.' />
        <meta name='twitter:image' content='/logo.svg' />

      </Helmet>

      <FormGif />

      <LastViews />

      <div className='flex flex-col mb-6'>
        <LazyTrading />

        <Results />
      </div>

      <Footer />
    </>
  )
}
