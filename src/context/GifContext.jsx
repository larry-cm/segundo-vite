import React, { useState } from 'react'
const Context = React.createContext()

export function GifContextProvider ({ children }) {
  const [gif, updateGif] = useState([])
  const [tag, setTag] = useState(undefined)
  return (
    <Context.Provider value={{ gif, updateGif, tag, setTag }}>
      {children}
    </Context.Provider>
  )
}

export default Context
