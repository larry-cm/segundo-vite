import CardVistas from './CardVistas'

export default function ListOfComponent ({ gif, currentSearch = '' }) {
  return (
    <>
      {
        currentSearch && (
          <h2 className='text-text text-2xl font-medium mb-6 capitalize'>
            {currentSearch}
          </h2>
        )
      }
      <section className='content-column min-h-[70vh]'>
        {
          gif?.map(({ id, url, title, frames, hash, userInfo, username }, index) =>
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
      </section>
    </>
  )
}
