// import ListOfComponent from '@/components/ListOfGif/ListOfComponent'
import '@/css/download.css'
import { Helmet } from 'react-helmet'
import { lazy, Suspense, useReducer } from 'react'
import { Redirect } from 'wouter'
import Card from '@/components/Details/GifInfo/Card'
import Enlaces from '@/components/Details/GifInfo/Enlaces/Enlaces'
import FormGif from '@/components/Home/FormGif/FormGif'
import Gif from '@/components/Gif/Gif'
import InfoCreador, { HeaderCreador } from '@/components/Details/GifInfo/InfoCreador/CreatorInfo'
import Loading from '@/components/ContentLoad/Loading'
import useNearScreen from '@/hooks/useIntersection'
import useSingleGif from '@/hooks/useSingleGif'
import TagsLoading from '@/components/ContentLoad/TagsLoading'
const TagsLazyInfo = lazy(() => import('@/components/Details/Tags/TagsLazyInfo'))

export default function CardInfo ({ params }) {
  const { id = '', mode = '' } = params
  const { singleGif, isLoading, isError } = useSingleGif({ id })
  const { refElement, isNearScreen } = useNearScreen({ distance: '100px' })

  const REDUCER_OPTION = {
    A_DOWNLOAD: 'descarga',
    A_COPY: 'copiar link',
    A_SHARE: 'compartir ',
    A_FAVORITOS: 'favoritos'
  }

  const REDUCER_ACTION = {
    [REDUCER_OPTION.A_DOWNLOAD]: (state, action) => ({ ...state, animateDownload: action.payload }),
    [REDUCER_OPTION.A_COPY]: (state, action) => ({ ...state, animateCopyLink: action.payload }),
    [REDUCER_OPTION.A_SHARE]: (state, action) => ({ ...state, animateShare: action.payload }),
    [REDUCER_OPTION.A_FAVORITOS]: (state, action) => ({ ...state, animateFav: action.payload })
  }

  const reducer = (state, action) => {
    const reducerAction = REDUCER_ACTION[action.type]
    return reducerAction ? reducerAction(state, action) : state
  }

  const [animateState, dispatch] = useReducer(reducer, {
    animateDownload: null,
    animateCopyLink: null,
    animateShare: null,
    animateFav: null
  })

  function handleAction (type, msg) {
    return dispatch({ type, payload: msg })
  }

  if (isLoading) return <Loading />
  if (isError || !singleGif) return <Redirect to='/404' />

  const { url, altText, userInfo, username, title, info, frames } = singleGif
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
      <div className='grid grid-cols-1  md:grid-cols-6 gap-4 text-text mb-6'>
        <section className='col-span-2 flex flex-col sm:flex-row md:flex-col h-fit gap-4'>
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

        <section className=' col-span-2 h-fit '>
          <div className='max-[500px]:min-h-40 min-h-64 md:min-h-40'>
            <Gif
              id={id}
              title={title}
              url={url}
              altText={altText}
              animateView={animateState}
              classAdd='w-full md:h-72'
            />
          </div>
          <div ref={refElement} className='sr-only' />
          {isNearScreen && (
            <div className='max-[500px]:min-h-44 min-h-30 md:min-h-60 md:max-h-60 overflow-auto scroll-rounded'>
              <Suspense fallback={<TagsLoading numTags={8} />}>
                <TagsLazyInfo mode={mode} altText={altText} title={title} />
              </Suspense>
            </div>

          )}
        </section>

        <aside className='row-start-2 md:row-start-1 md:col-start-5 col-span-2 text-text text-lg h-fit '>
          <Enlaces
            urlDownload={url}
            title={title}
            elementId={id}
            handleAnimateCopyLink={(msg) => handleAction(REDUCER_OPTION.A_COPY, msg)}
            handleAnimateDownload={(msg) => handleAction(REDUCER_OPTION.A_DOWNLOAD, msg)}
            handleAnimateShare={(msg) => handleAction(REDUCER_OPTION.A_SHARE, msg)}
            handleAnimateFav={(msg) => handleAction(REDUCER_OPTION.A_FAVORITOS, msg)}
          />
        </aside>
      </div>
      <div>
        <FormGif />

        {/* <ListOfComponent hMin='h-fit' gif={[singleGif]} /> */}
      </div>

    </>
  )
};
