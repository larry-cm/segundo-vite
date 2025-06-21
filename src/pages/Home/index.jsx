// import { Search } from 'lucide-react';
import useGif from '../../hooks/useGif';
import ListOfComponent from '../../components/ListOfGif/ListOfComponent';
// import { Link } from 'wouter';

import Loading from '../../components/Home/Loading';
import { ButtonNav } from '../Home/ButtonNav';
import FilterBtn from '../components/animate/Filter';



export default function Home() {
  const { gif, loading } = useGif();

  return (
    <>
      <nav className='flex items-center justify-between w-full relative'>

        <ul className='flex gap-4'>
          <ButtonNav to='/colombia' text='Colombia' />
          <ButtonNav to='/argentina' text='Argentina' />
          <ButtonNav to='/venezuela' text='Venezuela' />
        </ul>
        <FilterBtn />
      </nav>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-text text-2xl '>Ultima búsqueda realizada</h3>

      </div>
      {
        loading ? <Loading /> : <ListOfComponent gif={gif} />
      }
    </>
  );
}