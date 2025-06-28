import React from 'react'
import { Sparkles } from 'lucide-react'
import { MODO } from '@/components/Home/Filters/entries'
import useClickOut from '@/hooks/useClickOut'

function Mode ({ mode, handleMode }) {
  const { open, elementRef, menuRef, handleViewMenu } = useClickOut()

  const submitMode = mode => {
    console.log(mode.target.value)

    handleMode(mode.target.value)
  }
  return (
    <div className='relative '>
      <button
        ref={elementRef}
        aria-label='Disponible para filtrar'
        onClick={handleViewMenu}
        type='button'
        style={{ background: open && 'var(--color-primary)' }}
        className='bg-botones relative font-medium  transition text-text capitalize cursor-pointer flex items-center gap-3'
      >
        <Sparkles className=' text-text ' />
        <span>Modo</span>
        <span className='absolute -top-3 right-1  bg-red-500 py-1 px-2 h-5 w-fit flex items-center justify-center lowercase text-xs rounded-full'>{mode}</span>
      </button>
      {
        open && (
          <article ref={menuRef} className='absolute z-10 top-[calc(100%+1rem)] right-0 max-[353px]:left-0 min-w-52 sm:min-w-56 sm:left-0 md:right-0  h-fit p-6 bg-fondo border border-primary rounded-2xl shadow-2xl'>
            <div className='flex flex-col gap-4 '>

              {
                MODO.map((item, i) => (
                  <div key={i} className='w-full'>
                    <input
                      id={item}
                      type='radio'
                      name='mode'
                      value={item}
                      checked={mode === item}
                      onChange={submitMode}
                      className='sr-only peer'
                    />
                    <label
                      htmlFor={item}
                      className='px-4 text-center py-2 w-full block  text-text rounded-2xl transition hover:scale-105 peer-checked:scale-105 cursor-pointer peer-checked:bg-primary hover:bg-primary'
                    >
                      {item}
                    </label>
                  </div>
                ))
              }
            </div>
          </article>
        )
      }

    </div>
  )
}

export default React.memo(Mode)
