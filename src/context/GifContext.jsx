import React, { useState } from 'react'
const Context = React.createContext()

export function GifContextProvider ({ children }) {
  const [gif, updateGif] = useState([])
  const [mode, setMode] = useState('')
  return (
    <Context.Provider value={{ gif, updateGif, mode, setMode }}>
      {children}
    </Context.Provider>
  )
}

export default Context
