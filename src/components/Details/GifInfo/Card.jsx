export default function Card ({ children }) {
  return (
    <article className='bg-fondo-secondary/80 rounded-md shadow-2xl text-sm p-6 mask-b-from-80% mask-b-to-100%'>
      {children && children}
    </article>
  )
}
