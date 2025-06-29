import { LANGUAGES, MODO, languagesArrayInvertido, RATINGS } from '@/components/Home/Filters/entries'
import React, { useState } from 'react'
const FilterContext = React.createContext()

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    query: '',
    lang: languagesArrayInvertido[LANGUAGES.es],
    mode: MODO[0],
    rating: RATINGS[0]
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext
