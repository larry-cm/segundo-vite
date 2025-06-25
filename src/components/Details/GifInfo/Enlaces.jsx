import { ChevronLeft, ChevronRight, Heart, Download, Search, LinkIcon } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'wouter'
import { GetUrlDownload } from '@/services/downloadImage'
export default function Enlaces ({ urlDownload, title, mode, elementId = '', animateCopyLink, setAnimateDownloadInitial, setAnimateCopyLink, gifts }) {
  const downloadRef = useRef()// ref del elemento a
  // timeouts
  const downloadAnimateRef = useRef(null)
  const copyAnimateRef = useRef(null)

  function handleCleansAnimate ({ ref, setState, time = 1500 }) {
    ref = setTimeout(() => {
      setState(false)
      ref = null
    }, time)
  }

  function handleCopyLink () {
    navigator.clipboard.writeText(urlDownload).then(res => res).catch(error => console.error(error))
    handleAnimateCopyLink()
  }

  function handleAnimateCopyLink () {
    setAnimateCopyLink(true)
    handleCleansAnimate({ ref: copyAnimateRef, setState: setAnimateCopyLink })
  }

  function handleAnimateDownload () {
    setAnimateDownloadInitial(true)

    if (animateCopyLink) handleCleansAnimate({ ref: copyAnimateRef, setState: setAnimateCopyLink, time: 100 })
    handleCleansAnimate({ ref: downloadAnimateRef, setState: setAnimateDownloadInitial })
  }

  async function handleDownloadImg () {
    const res = await GetUrlDownload({ urlDownload })
    if (!res) return
    const { url, ext } = res
    downloadRef.current.href = url
    downloadRef.current.download = title || `${title}.${ext}`
  }

  useEffect(() => {
    return () => {
      if (copyAnimateRef.current) clearTimeout(copyAnimateRef.current)
      if (downloadAnimateRef.current) clearTimeout(downloadAnimateRef.current)
    }
  }, [])

  return (
    <ul className='grid'>
      <li className='justify-self-end flex gap-4 mb-4'>

        {/* <ButtonsPagination gifts={gifts} elementId={elementId} Icon={ChevronLeft} />
        <ButtonsPagination gifts={gifts} elementId={elementId} type='next' Icon={ChevronRight} /> */}
      </li>

      <li className='flex flex-col gap-4'>
        <FavoritesOption mode={mode} elementId={elementId} />

        <button
          onClick={handleCopyLink}
          className='py-2 px-4 text-text text-lg font-semibold transition duration-200 w-fit flex items-center gap-3 group cursor-pointer'
        >
          <LinkIcon className='group-hover:scale-125 group-hover:text-secondary transition duration-200' />
          <span className='group-hover:text-sky-500'>Copiar link</span>
        </button>

        <a
          ref={downloadRef}
          onMouseEnter={handleDownloadImg}
          onClick={handleAnimateDownload}
          className='py-2 px-4 text-text text-lg font-semibold transition duration-200 w-fit flex items-center gap-3 group'
          rel='noopener noreferrer'
        >
          <Download className='group-hover:scale-125 group-hover:text-secondary transition duration-200' />
          <span className='group-hover:text-sky-500'>Descargar</span>
        </a>
      </li>

    </ul>
  )
}

function ButtonsPagination ({ Icon, gifts, elementId, type = '' }) {
  const preUrl = { id: '/', title: 'Se agotan los elementos. busca mas!' }
  const [nextViews, setNextViews] = useState([preUrl, ...gifts.map(({ id, title }) => ({ id, title })), preUrl])

  useEffect(() => {
    setNextViews([preUrl, ...gifts.map(({ id, title }) => ({ id, title })), preUrl])
  }, [elementId])

  const indexId = (nextViews.findIndex(e => e.id === elementId))

  const prevPos = nextViews[indexId - 1]
  const nextPos = nextViews[indexId + 1]
  const qrUrl = type === 'next' ? nextPos?.id : prevPos?.id
  const qrTitle = type === 'next' ? nextPos?.title : prevPos?.title

  if (nextViews !== '/') {
    return (
      <Link to={qrUrl} title={qrTitle} className='bg-secondary flex items-center rounded p-2 cursor-pointer'>
        <Icon />
      </Link>
    )
  }
  return (
    <Link to='/' title={qrTitle} className='bg-secondary rounded p-2 flex  text-base font-medium cursor-pointer capitalize items-center'>
      mas
      <Search className='ms-3' />
    </Link>
  )
}

function FavoritesOption ({ mode, elementId }) {
  const [fav, setFav] = useState(() => {
    const color = JSON.parse(localStorage.getItem(`user-${mode}`)) || []
    return color
  })

  const colorFav = fav.includes(elementId) ? 'text-red-500' : 'text-text'
  const fillFav = fav.includes(elementId) ? 'fill-red-500' : 'fill-text'
  const colorFavSuave = fav.includes(elementId) ? 'text-red-400' : 'text-text'

  function handleFavorites () {
    setFav(prev => {
      let newVal
      if (prev.includes(elementId)) newVal = prev.filter(e => e !== elementId)
      else newVal = [...prev, elementId]
      localStorage.setItem(`user-${mode}`, JSON.stringify(newVal))
      return newVal
    })
  }

  return (
    <>
      <button
        type='button'
        onClick={handleFavorites}
        className={`cursor-pointer flex py-2 px-4  text-lg font-semibold transition duration-200 w-fit items-center gap-3 group ${colorFavSuave}`}
      >
        <Heart className={`group-hover:scale-125 group-hover:fill-red-500 group-hover:text-red-500 transition duration-200 ${fillFav} ${colorFav}`} />
        <span className='group-hover:text-red-400 '>favorites</span>
      </button>
    </>
  )
}
