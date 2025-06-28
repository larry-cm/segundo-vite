import React from 'react'
import { Search, X } from 'lucide-react'

import { LANGUAGES, languagesArrayInvertido, MODO, RATINGS } from '@/components/Home/Filters/entries'
import Rating from '@/components/Home/Filters/Rating'
import Mode from '@/components/Home/Filters/Mode'
import LastViews from '@/components/Home/LastViews/UltimasVistas'
import Lang from '@/components/Home/Filters/Lang'
import useForm from '@/components/Home/FormGif/useForm'

const langToUse = languagesArrayInvertido[LANGUAGES.es]
function FormGif ({
  initialKeyword = '',
  initialRating = RATINGS[0],
  initialMode = MODO[0],
  initialLang = langToUse
}) {
  const {
    query,
    mode,
    rating,
    lang,
    updateKeyword,
    cleanKeyword,
    updateMode,
    updateRating,
    updateLang,
    submitForm
  } = useForm({ initialKeyword, initialRating, initialMode, initialLang })

  function handleForm (event) {
    event.preventDefault()
    submitForm()
  }

  function handleKeyword (event) {
    updateKeyword(event.target.value)
  }

  function handleCleanKeyword () {
    cleanKeyword()
  }

  return (
    <>
      <form onSubmit={handleForm} className='border border-primary rounded-xl h-[2.5lh] bg-text flex items-center ps-6 text-fondo font-medium overflow-hidden mb-6'>
        <label htmlFor='buscar' className='relative w-full h-full  flex items-center pr-8'>
          <span className='sr-only'>busca tus gifts como gustes, date libertad.</span>
          <input
            type='text'
            name='buscar'
            id='buscar'
            value={query}
            onChange={handleKeyword}
            placeholder='Gif de camarón bailando'
            className='w-full appearance-none focus:outline-none placeholder:text-fondo/70 pr-6'
          />
          {
            query && (
              <button
                onClick={handleCleanKeyword}
                type='button'
                className='absolute rounded-full bg-text-hover p-1 cursor-pointer text-xl right-0 select-none mr-4'
              >
                <X className='size-5' />
              </button>
            )
          }
        </label>

        <button
          aria-label='search-gifts'
          className='px-4 bg-gradient-to-br from-blue-400 via-sky-500 to-blue-500 h-full cursor-pointer flex items-center'
        >
          <Search className='size-8 text-white' />
        </button>
      </form>

      <nav className='flex items-start flex-col gap-y-4 md:flex-row justify-between w-full  mb-6'>
        <LastViews />
        <div className='flex flex-wrap gap-4 order-1'>
          <Rating handleRating={updateRating} rating={rating} />
          <Mode handleMode={updateMode} mode={mode} />
          <Lang handleLang={updateLang} lang={lang} />
        </div>
      </nav>
    </>
  )
}

export default React.memo(FormGif)
