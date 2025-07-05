import ListOfComponent from '@/components/ListOfGif/ListOfComponent'
import useGif from '@/hooks/useGif'
import ContentLoE from '@/components/ContentLoad/ContentLoE'

export default function Results () {
  const { gif, loading } = useGif()
  // console.log(gif);

  return (
    <section className='order-1 flex flex-col items-start min-h-[400px] mb-6 w-full'>
      <h4 className='text-text w-fit text-2xl font-medium mb-4'>
        {loading ? 'Buscando GIFs...' : 'Gifs para Raymundo y todo el mundo'}
      </h4>
      <ContentLoE
        isLoading={loading}
      >
        <ListOfComponent
          gif={gif}
          hMin={gif?.length < 5 ? 'h-fit' : 'min-h-[100vh]'}
        />
      </ContentLoE>
    </section>
  )
}
