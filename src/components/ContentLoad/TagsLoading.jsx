export default function TagsLoading ({ numTags = 10 }) {
  const prueba = Array(numTags).fill('')
  return (
    <ul className='flex gap-4 flex-wrap mt-4'>
      {
        prueba.map((text, index) => (
          <li
            key={index}
            className='animate-pulse bg-botones before:content-[""] before:text-text-hover/90 w-44  h-10'
          />
        ))
      }
    </ul>
  )
}
