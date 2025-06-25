import { useContext, useState } from 'react'
import '@/css/download.css'
import Card from '@/components/Details/GifInfo/Card'
import { HeaderCreador, InfoCreador } from '@/components/Details/GifInfo/CreatorInfo'
import Enlaces from '@/components/Details/GifInfo/Enlaces'
import Gif from '@/components/Gif/Gif'
import GifContext from '@/context/GifContext'
import Tags from '@/components/Details/Tags/Tags'

export default function CardInfo ({ params }) {
  const { id = '' } = params
  const lastGiftsObserver = { gif: JSON.parse(window.localStorage.getItem('lastGifObserver') || '[]') }
  const { gif } = lastGiftsObserver || useContext(GifContext)
  const { url, title, username, info, userInfo } = gif.find(singleGif => singleGif.id === id) || { username: 'no encontré' }

  const [animateDownload, setAnimateDownload] = useState(null)
  const [animateCopyLink, setAnimateCopyLink] = useState(null)

  function handleAnimate (message = false, setAnimate) {
    setAnimate(message)
  }

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-text '>

        <section className=' h-fit col-span-1 md:col-span-2  lg:col-span-1 space-y-4'>

          {(username || userInfo.avatarUrl || userInfo.viewName) && (
            <Card>
              <HeaderCreador
                username={username}
                {...userInfo}
              />
            </Card>
          )}
          <Card>
            <InfoCreador info={{ ...info, username }} />
          </Card>

        </section>

        <section className=' sm:row-start-2 md:col-start-2 lg:row-start-1  sm:col-span-2 h-fit'>
          <Gif
            id={id}
            title={title}
            url={url}
            animateCopyLink={animateCopyLink}
            animateDownload={animateDownload}
            classAdd='w-full'
          />
          <Tags />
        </section>

        <aside className='text-text text-lg h-fit col-span-1 md:col-span-2 lg:col-span-1 '>
          <Enlaces
            urlDownload={url}
            title={title}
            elementId={id}
            gifts={gif}
            animateCopyLink={animateCopyLink}
            setAnimateCopyLink={message => handleAnimate(message, setAnimateCopyLink)}
            setAnimateDownloadInitial={message => handleAnimate(message, setAnimateDownload)}
          />
        </aside>
      </div>

    </>
  )
};
