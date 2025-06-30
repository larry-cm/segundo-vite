import { useState } from 'react'
import '@/css/download.css'
import Card from '@/components/Details/GifInfo/Card'
import InfoCreador, { HeaderCreador } from '@/components/Details/GifInfo/InfoCreador/CreatorInfo'
import Enlaces from '@/components/Details/GifInfo/Enlaces/Enlaces'
import Gif from '@/components/Gif/Gif'
import Tags from '@/components/Details/Tags/Tags'
import useSingleGif from '@/hooks/useSingleGif'
import Loading from '@/components/ContentLoad/Loading'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

export default function CardInfo ({ params }) {
  const { id = '' } = params
  const { singleGif, isLoading, isError } = useSingleGif({ id })
  const [animateDownload, setAnimateDownload] = useState(null)
  const [animateCopyLink, setAnimateCopyLink] = useState(null)

  function handleAnimate (message = false, setAnimate) {
    setAnimate(message)
  }

  if (isLoading) return <Loading />
  if (isError || !singleGif) return <Redirect to='/404' />
  const { url, userInfo, username, title, info, frames } = singleGif
  const viewHeaderCreator = username || userInfo.avatarUrl || userInfo.viewName
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | GifClub` : 'Detalle del Gif | GifClub'}</title>
        <meta
          name='description'
          content={
            userInfo?.description
              ? userInfo.description
              : `Explora el gif "${title}" creado por ${userInfo?.viewName || username || 'un usuario de GifClub'}. Descubre más gifs, descárgalos y comparte fácilmente.`
          }
        />
        <meta property='og:title' content={title ? `${title} | GifClub` : 'Detalle del Gif | GifClub'} />
        <meta
          property='og:description'
          content={
            userInfo?.description
              ? userInfo.description
              : `Explora el gif "${title}" creado por ${userInfo?.viewName || username || 'un usuario de GifClub'}.`
          }
        />
        <meta property='og:image' content={url} />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title ? `${title} | GifClub` : 'Detalle del Gif | GifClub'} />
        <meta
          name='twitter:description'
          content={
            userInfo?.description
              ? userInfo.description
              : `Explora el gif "${title}" creado por ${userInfo?.viewName || username || 'un usuario de GifClub'}.`
          }
        />
        <meta name='twitter:image' content={url} />
      </Helmet>
      <div className='grid grid-cols-1  md:grid-cols-6 gap-4 text-text '>
        <section className='col-span-2 flex flex-row md:flex-col h-fit gap-4'>
          {
            (viewHeaderCreator) && (
              <Card>
                <HeaderCreador
                  username={username}
                  userInfo={userInfo}
                />
              </Card>
            )
          }
          <Card>
            <InfoCreador infoUser={{ info, username, title, frames }} />
          </Card>
        </section>

        <section className=' col-span-2 h-fit'>
          <Gif
            id={id}
            title={title}
            url={url}
            animateCopyLink={animateCopyLink}
            animateDownload={animateDownload}
            classAdd='w-full md:h-72'
          />
          <Tags />
        </section>

        <aside className='row-start-2 md:row-start-1 md:col-start-5 col-span-2 text-text text-lg h-fit '>
          <Enlaces
            urlDownload={url}
            title={title}
            elementId={id}
            handleAnimateCopyLink={message => handleAnimate(message, setAnimateCopyLink)}
            handleAnimateDownload={message => handleAnimate(message, setAnimateDownload)}
          />
        </aside>
      </div>

    </>
  )
};
