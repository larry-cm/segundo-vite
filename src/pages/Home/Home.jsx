// import { Search } from 'lucide-react';
import useGif from '@/hooks/useGif'
import ListOfComponent from '@/components/ListOfGif/ListOfComponent'

import Loading from '@/components/ContentLoad/Loading'
import ButtonNav from '@/components/Home/ButtonNav'
import FilterBtn from '@/components/Home/Filter/Filter'
import LazyTrading from '@/components/Home/TrendingSearches/TrendingSearches'

export default function Home () {
  const { gif, loading } = useGif()

  return (
    <>
      <nav className='flex items-center justify-between w-full relative mb-6'>
        <ul className='flex gap-4'>
          <ButtonNav to='/colombia' text='Colombia' />
          <ButtonNav to='/argentina' text='Argentina' />
          <ButtonNav to='/venezuela' text='Venezuela' />
        </ul>
        <FilterBtn />
      </nav>

      <div className='flex flex-col justify-between items-start min-h-[800px] mb-6'>
        <h3 className='text-text w-fit text-2xl font-medium mb-6'>Ultima búsqueda realizada</h3>
        {
          loading ? <Loading /> : <ListOfComponent gif={gif} />
        }
      </div>

      <section>
        <LazyTrading />
      </section>
    </>
  )
}
