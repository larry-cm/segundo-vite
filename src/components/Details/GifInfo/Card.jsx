import React from 'react'
function Card ({ children }) {
  return (
    <article className='bg-fondo-secondary rounded-md shadow-2xl text-sm p-6 mask-b-from-80% mask-b-to-100% w-full'>
      {children}
    </article>
  )
}
export default React.memo(Card, (prevEl, nextEl) => prevEl.children.username === nextEl.children.username
)
