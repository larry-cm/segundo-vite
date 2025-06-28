import useClickOut from '@/hooks/useClickOut'
import { Languages } from 'lucide-react'
import { languagesArray, languagesArrayInvertido } from './entries'

export default function Lang ({ handleLang, lang }) {
  const { menuRef, open, elementRef, handleViewMenu } = useClickOut()
  function submitLang (lang) {
    handleLang(languagesArrayInvertido[lang.target.value])
    console.log()
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
        <Languages className=' text-text ' />
        <span>lenguaje</span>
        <span className='absolute -top-3 right-1  bg-red-500 p-1 size-5 flex items-center justify-center lowercase text-xs rounded-full'>{lang}</span>
      </button>
      {
        open && (
          <article
            ref={menuRef}
            className='absolute z-10 top-[calc(100%+1rem)]  min-w-52  sm:min-w-56 max-[329px]:left-0 max-[353px]:right-0 max-[353px]:left-auto max-[504px]:left-0  min-[505px]:right-0 h-fit p-6 bg-fondo border border-primary rounded-2xl shadow-2xl max-h-96 overflow-y-auto scroll-rounded snap-y sm:snap-none snap-mandatory'
          >
            <div className='flex flex-col gap-4 '>
              {
                languagesArray.map((language, i) => (
                  <div key={i} className='w-full  snap-center sm:snap-none'>
                    <input
                      id={language}
                      type='radio'
                      name='mode'
                      value={language}
                      checked={lang === language}
                      onChange={submitLang}
                      className='sr-only peer'
                    />
                    <label
                      htmlFor={language}
                      className='px-4 text-center py-2 w-full block text-text rounded-2xl transition hover:scale-105 cursor-pointer peer-checked:scale-105 peer-checked:bg-primary hover:bg-primary capitalize'
                    >
                      {language}
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
