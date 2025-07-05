import React from 'react'
export default function Card ({ children }) {
  return (
    <article className='bg-fondo-secondary rounded-md shadow-2xl text-sm p-6 mask-b-from-80% mask-b-to-100% w-full'>
      {children}
    </article>
  )
}
