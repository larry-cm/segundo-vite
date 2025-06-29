import useDialog from '@/hooks/useDialog'
import { ListRestart, X } from 'lucide-react'

export default function RestartFilters ({ handleRestart }) {
  const { dialogRef, contentRef, handleAnimateEnd, handleCloseDialog, handleDialog } = useDialog()
  function restartFilters () {
    handleRestart(handleDialog)
  }
  return (
    <>
      <button
        aria-label='Puedes borrar todos los filtros recién agregados'
        onClick={restartFilters}
        type='button'
        className='bg-botones relative font-medium  transition text-text capitalize cursor-pointer flex items-center gap-3'
      >
        <ListRestart className=' text-text ' />
        <span>Quitar filtros</span>
      </button>

      <dialog
        className='h-fit w-3xl m-auto backdrop:bg-fondo/70 bg-transparent '
        ref={dialogRef}
        onAnimationEnd={handleAnimateEnd}
      >
        <div ref={contentRef} tabIndex={0} className='size-full min-h-60   bg-fondo-secondary p-6 rounded-lg border border-secondary '>
          <header className='flex items-center justify-between'>
            <h2 className='text-2xl  text-white font-semibold mb-2'>Filtros en estado predeterminado</h2>

            <button
              onClick={handleCloseDialog}
              className='text-white bg-red-500 p-1 rounded-full transition cursor-pointer'
            >
              <X />
            </button>
          </header>

          <p className='mt-4 text-text text-lg'>
            Todos los filtros ya están en su configuración original.<br />
            ¡Puedes seguir explorando o aplicar nuevos filtros cuando lo desees!
          </p>

          <button
            onClick={handleCloseDialog}
            className='w-44 bg-primary hover:bg-primary/80 duration-200 cursor-pointer rounded-md mx-auto block py-2 px-4 text-text text-lg font-medium mt-10 hover:text-text-hover transition'
          >
            Cerrar
          </button>

        </div>
      </dialog>
    </>
  )
}
