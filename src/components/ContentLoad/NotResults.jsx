export default function NoResults () {
  return (
    <div className='w-full flex flex-col items-center justify-center py-6'>
      <img src='/images/not-found.webp' alt='Sin resultados' className='h-auto w-96 bg-cover mb-4 opacity-70' />
      <h4 className='text-xl font-semibold text-text-hover/70 mb-2'>¡No se encontraron GIFs!</h4>
      <p className='text-text-hover font-normal text-center'>Intenta buscar con otra palabra clave o revisa tu conexión.</p>
    </div>
  )
}
