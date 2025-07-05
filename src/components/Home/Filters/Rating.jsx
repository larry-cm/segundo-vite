import { RATINGS, clasificaciones, clasificacionesAbreviadas } from '@/components/Home/Filters/entries'
import useClickOut from '@/hooks/useClickOut'
import { ShieldEllipsis } from 'lucide-react'
import React, { useCallback } from 'react'
function Rating ({ handleRating, rating }) {
  const { open, elementRef: buttonOpen, menuRef, handleViewMenu } = useClickOut()

  const submitRating = useCallback(rating => handleRating(rating.target.value), [])

  return (
    <div className='relative'>
      <button
        ref={buttonOpen}
        onClick={handleViewMenu}
        style={{ background: open ? 'var(--color-primary)' : undefined }}
        className='bg-botones text-base font-medium cursor-pointer text-text py-2 px-4 rounded-2xl flex gap-3'
      >
        <ShieldEllipsis className='text-text' />
        <span aria-label='Disponible para filtrar por clasificación'>Clasificación</span>
        <span className='absolute -top-3 right-1  bg-red-500 py-1 px-2 h-5 w-fit flex items-center justify-center lowercase text-xs rounded-full'>{clasificacionesAbreviadas[rating]}</span>
      </button>

      {open && (
        <div ref={menuRef} className='h-fit absolute min-w-52 sm:min-w-56 top-[calc(100%+1rem)] left-0  md:left-[inherit] md:right-0 p-6 bg-fondo border border-primary rounded-2xl shadow-2xl z-10 flex flex-col gap-4'>
          {
            RATINGS.map((itemRating, i) => (
              <div key={i} className='w-full'>
                <input
                  id={itemRating}
                  type='radio'
                  name='rating'
                  value={itemRating}
                  checked={rating === itemRating}
                  onChange={submitRating}
                  className='sr-only peer'
                />
                <label
                  htmlFor={itemRating}
                  className='px-4 py-2 w-full block  text-text rounded-2xl transition hover:scale-105 peer-checked:scale-105 cursor-pointer peer-checked:bg-primary hover:bg-primary'
                >
                  {clasificaciones[itemRating]}
                </label>
              </div>
            ))

          }
        </div>
      )}
    </div>
  )
}
export default React.memo(Rating)
