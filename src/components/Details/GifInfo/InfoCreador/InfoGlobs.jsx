export default function InfoGlobs ({ articles = {} }) {
  const formatearTamaño = (bytes) => {
    if (bytes < 1024) {
      return `${bytes} B`
    }

    const kb = bytes / 1024
    if (kb < 1024) {
      return `${kb.toFixed(2)} KB`
    }

    const mb = kb / 1024
    return `${mb.toFixed(2)} MB`
  }

  const formatearFecha = (date) => {
    return new Date(date).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const giphyRatings = {
    g: 'Público general',
    pg: 'Supervisión parental',
    pg13: 'Solo adolescentes',
    r: 'Solo adultos',
    unrated: 'Sin clasificar'
  }

  function Article ({ title, text }) {
    return (
      <article className='text-center sm:text-start'>
        <h4 className='font-semibold tracking-wider text-base5 text-text-hover mb-2'>{title || 'Titulo principal'}</h4>
        <p className='text-white font-semibold text-xl'>{text || 'Decadente'}</p>
      </article>
    )
  }

  const { title, width, height, size, username, frames = '', rating, publishDate } = articles
  return (
    <div className='space-y-10'>
      <h3 className='text-3xl first-letter:capitalize text-text  font-bold'>{title}</h3>
      <section className='size-full min-h-44 place-content-center grid grid-cols-1 justify-items-center sm:justify-items-start sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {(height && width) && <Article title='Dimension' text={`${height}x${width}`} />}

        {size && <Article title='Tamaño' text={`${formatearTamaño(size)}`} />}

        {frames && <Article title='Fps' text={`${frames}`} />}

        {publishDate && <Article title='Fecha de publicación' text={`${formatearFecha(publishDate)}`} />}

        {
          (rating && giphyRatings[rating] !== undefined) && <Article title='Clasificación' text={`${giphyRatings[rating]}`} />
        }

        {username && <Article title='Creador' text={`@${username}`} />}
      </section>

    </div>
  )
}
