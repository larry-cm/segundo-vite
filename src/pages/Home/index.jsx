import { Search } from 'lucide-react';
import useGif from '../../hooks/useGif';
import ListOfComponent from '../../components/ListOfGif/ListOfComponent';
import { Link } from 'wouter';
import Loading from '../../components/animate/Loading';

export function ButtonNav ({ to, text }) {
  return (
    <li>
      <Link to={to || " "} className='px-4 py-2 border border-primary rounded-lg duration-300 hover:bg-primary  font-medium  transition text-text capitalize flex gap-4 '>
        <Search className='size-5 text-white ' />
        {text || 'Colombia '}
      </Link>
    </li>
  )
}

export default function Home () {
  const { gif, loading } = useGif()

  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-text text-2xl '>Ultima búsqueda realizada</h3>

      </div>
      {
        loading ? <Loading /> : <ListOfComponent gif={gif} />
      }
    </>
  )
}