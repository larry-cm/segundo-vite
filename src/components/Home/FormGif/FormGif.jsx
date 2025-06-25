import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useLocation } from 'wouter'

export default function FormGif () {
  const [query, setQuery] = useState(() => {
    const queryLocal = window.localStorage.getItem('queryGif')
    return queryLocal ?? ''
  })
  const navigate = useLocation()[1]

  function handleChange (e) {
    window.localStorage.setItem('queryGif', e.currentTarget.value)
    setQuery(e.currentTarget.value)
  }

  function handleOnSubmit (e) {
    e.preventDefault()
    navigate(`/${query}`)
  }

  function handleCleanSearch () {
    setQuery('')
    window.localStorage.removeItem('queryGif')
  }

  return (
    <form onSubmit={handleOnSubmit} className='border border-primary rounded-md h-[2.5lh] bg-text flex items-center ps-6 text-fondo font-medium overflow-hidden mb-6'>
      <label htmlFor='buscar' className='relative w-full h-full  flex items-center pr-8'>
        <span className='sr-only'>busca tus gis como gustes, date libertad.</span>
        <input
          type='text'
          name='buscar'
          id='buscar'
          value={query}
          onChange={handleChange}
          placeholder='Gif de camarón bailando'
          className='w-full appearance-none focus:outline-none placeholder:text-fondo/70 pr-6'
        />
        {
          query && (
            <button onClick={handleCleanSearch} type='button' className='absolute rounded-full bg-text-hover p-1 cursor-pointer text-xl right-0 select-none mr-4'>
              <X className='size-5' />
            </button>
          )
        }
      </label>

      <button className='px-4 bg-gradient-to-br from-blue-400 via-sky-500 to-blue-500 h-full cursor-pointer flex items-center'>
        <Search className='size-8 text-white' />
      </button>
    </form>
  )
}
