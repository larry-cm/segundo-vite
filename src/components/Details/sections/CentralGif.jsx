import TagsLoading from '@/components/ContentLoad/TagsLoading'
import Gif from '@/components/Gif/Gif'
import { lazy, Suspense } from 'react'
const TagsLazyInfo = lazy(() => import('@/components/Tags/TagsLazyInfo'))
export default function CentralGif ({ animateState, singleGif, id, mode }) {
  const { url, altText, title, userInfo } = singleGif

  return (
    <>
      {
        url && (
          <div className='max-[500px]:min-h-40 min-h-64 md:min-h-40'>
            <Gif
              id={id}
              title={title}
              url={url}
              altText={altText}
              animateView={animateState}
              mode={mode}
              classAdd='w-full md:min-hh-72'
            />
          </div>
        )
      }
      <Suspense fallback={<TagsLoading numTags={8} />}>
        <TagsLazyInfo mode={mode} altText={altText || userInfo?.description} title={title} />
      </Suspense>

    </>
  )
}
