import { Link } from 'wouter'

export default function Categories ({ options }) {
  return (
    <>

      <h4 className='text-2xl text-text font-medium'>Categorías </h4>
      <p className='flex flex-wrap gap-2'>

        {
          options?.map((trend, i) => (
            <Link className=' bg-gradient-to-br from-fondo-secondary via-fondo-secondary/80 to-fondo-secondary rounded-2xl py-2 px-4 shadow-2xs text-text-hover/85 transition hover:text-text' key={i} to={`/${trend}`}>
              {trend}
            </Link>
          ))
        }
      </p>
    </>
  )
}
