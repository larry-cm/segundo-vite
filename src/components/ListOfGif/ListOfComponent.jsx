import CardVistas from '@/components/ListOfGif/CardVistas'
import NoResults from '../ContentLoad/NotResults'
export default function ListOfComponent ({ gif, hMin = '', handleFocusElement }) {
  return (
    <>

      {
        gif?.length
          ? (
            <div className={`content-column scroll-smooth ${hMin}`}>
              {
                gif.map(({ id, url, title, frames, hash }, index) =>
                  <CardVistas
                    handleFocusElement={handleFocusElement}
                    key={`${id}-${hash}-${index}`}
                    id={id}
                    frames={frames}
                    hash={hash}
                    title={title}
                    url={url}
                  />
                )
              }
            </div>)
          : <NoResults />
      }

    </>
  )
}
