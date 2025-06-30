import ListOfComponent from '@/components/ListOfGif/ListOfComponent'
import NoResults from '@/components/ContentLoad/NotResults'
import Loading from '@/components/ContentLoad/Loading'
import useGif from '@/hooks/useGif'

export default function Results () {
  const { gif, loading } = useGif()

  return (
    <section className='order-1 flex flex-col items-start min-h-[400px] mb-6 w-full'>
      <h3 className='text-text w-fit text-2xl font-medium mb-4'>
        {loading ? 'Buscando GIFs...' : 'Resultados de tu ultima búsqueda '}
      </h3>
      {
        loading
          ? <Loading />
          : gif.length > 0
            ? <ListOfComponent gif={gif} hMin='h-fit' />
            : <NoResults />

      }
    </section>
  )
}
