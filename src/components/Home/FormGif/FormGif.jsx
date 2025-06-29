import React, { useContext } from 'react'
import { Search, X } from 'lucide-react'

import { LANGUAGES, languagesArrayInvertido, MODO, RATINGS } from '@/components/Home/Filters/entries'
import Rating from '@/components/Home/Filters/Rating'
import Mode from '@/components/Home/Filters/Mode'
import Lang from '@/components/Home/Filters/Lang'
import useForm from '@/components/Home/FormGif/useForm'
import RestartFilters from '@/components/Home/Filters/RestartFilters'
import FilterContext from '@/context/FilterContext'

const langToUse = languagesArrayInvertido[LANGUAGES.es]
const ratingToUse = RATINGS[0]
const modeToUse = MODO[0]

function FormGif ({
  initialKeyword = '',
  initialRating = ratingToUse,
  initialMode = modeToUse,
  initialLang = langToUse
}) {
  const { filters } = useContext(FilterContext) || {}
  const { query: queryContext, rating: ratingContext, mode: modeContext, lang: langContext } = filters

  const {
    query,
    mode,
    rating,
    lang,
    updateKeyword,
    cleanKeyword,
    cleanFilters,
    updateMode,
    updateRating,
    updateLang,
    submitForm
  } = useForm({
    initialKeyword: queryContext || initialKeyword,
    initialRating: ratingContext || initialRating,
    initialMode: modeContext || initialMode,
    initialLang: langContext || initialLang
  })

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
      <form onSubmit={handleForm} className='border border-primary rounded-xl h-[2.5lh] bg-text flex items-center ps-6 text-fondo font-medium overflow-hidden mb-4'>
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
      <div className='flex flex-wrap gap-4 mb-6'>
        <Rating handleRating={updateRating} rating={rating} />
        <Mode handleMode={updateMode} mode={mode} />
        <Lang handleLang={updateLang} lang={lang} />
        <RestartFilters handleRestart={cleanFilters} />
      </div>
    </>
  )
}

export default React.memo(FormGif)
