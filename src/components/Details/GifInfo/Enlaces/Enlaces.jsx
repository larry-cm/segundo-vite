import { Favoritos } from './Favoritos'

import Descargar from './Descargar'
import Copiar from './Copiar'
import Card from '../Card'
import CompartirWp from './CompartirWp'

export default function Enlaces ({
  urlDownload,
  title,
  mode,
  elementId,
  handleAnimateCopyLink,
  handleAnimateDownload,
  handleAnimateShare,
  handleAnimateFav
}) {
  return (
    <Card>

      <div className='flex items-center justify-center md:flex-col gap-2 text-sm md:text-base *:text-wrap md:*:min-w-40'>
        <div className='flex flex-col sm:flex-row md:flex-col justify-center md:items-start items-center gap-2'>
          <Favoritos
            mode={mode}
            handleAnimateFav={handleAnimateFav}
            elementId={elementId}
          />

          <Copiar
            urlDownload={urlDownload}
            handleAnimateCopyLink={handleAnimateCopyLink}
          />
        </div>
        <div className='flex flex-col sm:flex-row md:flex-col justify-center md:items-start items-center gap-2'>

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
        </div>
      </div>

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
