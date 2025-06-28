import { X } from 'lucide-react'
import useDialog from '@/hooks/useDialog'

export default function BtnDialog ({ Icon, text, children, titleHeader, buttonBottom }) {
  const { handleAnimateEnd, handleDialog, dialogRef, contentRef, handleCloseDialog } = useDialog()
  return (
    <>
      <button
        onClick={handleDialog}
        className='cursor-pointer p-2 text-text-hover/70 flex gap-1.5 items-center flex-col hover:text-text-hover transition'
      >
        <span>{Icon && <Icon />}</span>
        <span>{text && text}</span>
      </button>

      <dialog
        className='h-fit w-3xl m-auto backdrop:bg-fondo/70 bg-transparent '
        ref={dialogRef}
        onAnimationEnd={handleAnimateEnd}
      >
        <div ref={contentRef} tabIndex={0} className='size-full min-h-60   bg-fondo-secondary p-6 rounded-lg border border-secondary '>
          <header className='flex items-center justify-between'>
            <h2 className='text-2xl text-white font-semibold mb-2'>{titleHeader}</h2>

            <button onClick={handleCloseDialog} className='text-white hover:text-red-500 transition cursor-pointer'>
              <X />
            </button>
          </header>

          {
            children && children
          }

          {
            buttonBottom && <button onClick={handleCloseDialog} className='w-44 bg-primary hover:bg-primary/80 duration-200 cursor-pointer rounded-md mx-auto block py-2 px-4 text-text text-lg font-medium mt-10 hover:text-text-hover transition'>Cerrar</button>
          }

        </div>
      </dialog>
    </>
  )
}
