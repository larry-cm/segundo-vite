import { Favoritos } from './Favoritos'

import Descargar from './Descargar'
import Copiar from './Copiar'
export default function Enlaces ({ urlDownload, title, mode, elementId, handleAnimateCopyLink, handleAnimateDownload }) {
  return (
    <ul className='grid '>

      <li className='flex items-start sm:items-center flex-col gap-4 text-base *:w-44'>
        <Favoritos mode={mode} elementId={elementId} />

        <Copiar urlDownload={urlDownload} handleAnimateCopyLink={handleAnimateCopyLink} />

        <Descargar urlDownload={urlDownload} title={title} handleAnimateDownload={handleAnimateDownload} />
      </li>

    </ul>
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
