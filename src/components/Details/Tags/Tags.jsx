export default function Tags ({ pulse }) {
  const prueba = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae'.split(' ')
  return (
    <ul className='flex gap-4 flex-wrap mt-4'>
      {
        prueba.map((text, index) => (
          <li key={index} className={`${pulse ? 'animate-pulse' : ''} bg-gradient-to-br from-fondo-secondary via-fondo-secondary/80 to-fondo-secondary rounded-2xl py-2 px-4 shadow-2xs before:content-['#'] before:text-text-hover/70 text-text"`}>
            {text}
          </li>
        ))
      }
    </ul>
  )
}
