import CardVistas from '@/components/ListOfGif/CardVistas'
export default function ListOfComponent ({ gif, hMin = '' }) {
  return (
    <>
      <div className={`content-column ${hMin || 'min-h-[100vh]'}`}>
        {
          gif?.map(({ id, url, title, frames, hash }, index) =>
            <CardVistas
              key={`${id}-${hash}-${index}`}
              id={id}
              frames={frames}
              hash={hash}
              title={title}
              url={url}
            />
          )
        }
      </div>
    </>
  )
}
