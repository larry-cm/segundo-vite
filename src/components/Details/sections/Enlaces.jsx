import Favoritos from '@/components/Details/GifInfo/Enlaces/Favoritos'
import Descargar from '@/components/Details/GifInfo/Enlaces/Descargar'
import Copiar from '@/components/Details/GifInfo/Enlaces/Copiar'
import CompartirWp from '@/components/Details/GifInfo/Enlaces/CompartirWp'

import Card from '@/components/Details/GifInfo/Card'

export default function Enlaces ({
  urlDownload,
  title,
  mode,
  elementId,
  handleAnimateAll

}) {
  const {
    handleAnimateCopyLink,
    handleAnimateDownload,
    handleAnimateShare,
    handleAnimateFav
  } = handleAnimateAll
  return (
    <Card>

      <article className='flex items-center justify-center md:flex-col gap-2 text-sm md:text-base *:text-wrap md:*:min-w-40'>
        <section className='flex flex-col sm:flex-row md:flex-col justify-center md:items-start items-center gap-2'>
          <Favoritos
            mode={mode}
            handleAnimateFav={handleAnimateFav}
            elementId={elementId}
          />

          <Copiar
            urlDownload={urlDownload}
            handleAnimateCopyLink={handleAnimateCopyLink}
          />
        </section>

        <section className='flex flex-col sm:flex-row md:flex-col justify-center md:items-start items-center gap-2'>

          <Descargar
            title={title}
            urlDownload={urlDownload}
            handleAnimateDownload={handleAnimateDownload}
          />

          <CompartirWp
            title={title}
            urlDownload={urlDownload}
            handleAnimateShare={handleAnimateShare}
          />
        </section>
      </article>

    </Card>
  )
}

// function ButtonsPagination ({ Icon, gifts, elementId, type = '' }) {
//   const preUrl = { id: '/', title: 'Se agotan los elementos. busca mas!' }
//   const [nextViews, setNextViews] = useState([preUrl, ...gifts.map(({ id, title }) => ({ id, title })), preUrl])

//   useEffect(() => {
//     setNextViews([preUrl, ...gifts.map(({ id, title }) => ({ id, title })), preUrl])
//   }, [elementId])

//   const indexId = (nextViews.findIndex(e => e.id === elementId))

//   const prevPos = nextViews[indexId - 1]
//   const nextPos = nextViews[indexId + 1]
//   const qrUrl = type === 'next' ? nextPos?.id : prevPos?.id
//   const qrTitle = type === 'next' ? nextPos?.title : prevPos?.title

//   if (nextViews !== '/') {
//     return (
//       <Link to={qrUrl} title={qrTitle} className='bg-secondary flex items-center rounded p-2 cursor-pointer'>
//         <Icon />
//       </Link>
//     )
//   }
//   return (
//     <Link to='/' title={qrTitle} className='bg-secondary rounded p-2 flex  text-base font-medium cursor-pointer capitalize items-center'>
//       mas
//       <Search className='ms-3' />
//     </Link>
//   )
// }
