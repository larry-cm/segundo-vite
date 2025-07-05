import { Github, Instagram, Linkedin } from 'lucide-react'

export default function Footer () {
  return (
    <footer className='w-full flex justify-between rounded-2xl  '>
      <div className='flex flex-col gap-2 text-text font-normal w-fit '>
        <span className='drop-shadow-primary drop-shadow-2xl'>
          <img
            alt='logo de react referenciando al curso.'
            src='/react.svg'
            height='24px'
            width='auto'
            className='mx-auto object-cover animate-[spin_2s_linear_infinite] '
          />
        </span>
        <span className='bg-primary h-0.5 w-full rounded-2xl' />
        <span>Curso de react</span>
      </div>

      <div className='flex flex-col gap-2 text-text font-normal w-fit drop-shadow-primary/70 drop-shadow-2xl'>
        <a
          className='text-text-hover hover:text-white transition '
          href='https://github.com/larry-cm'
          rel='noopener noreferrer'
        >@Larry ceballos
        </a>
        <span className='bg-primary h-0.5 w-full rounded-2xl ' />
        <span className='flex gap-3 justify-center '>
          <a
            href='http://www.linkedin.com/in/larry-moncada-264762305/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='sr-only'>ir a ver mi perfil de LinkedIn</span>
            <Linkedin
              className='text-text-hover hover:text-primary hover:scale-110 transition duration-300 cursor-pointer'
            />
          </a>
          <a
            href='http://github.com/larry-cm'
            target='_blank' rel='noopener noreferrer'
          >
            <span className='sr-only'>Tengo un servidor de Discord en el que nos podemos comunicar</span>
            <Github className='text-text-hover  hover:text-primary hover:scale-110 transition duration-300 cursor-pointer' />
          </a>
          <a
            href='http://www.instagram.com/sonia.ceballo.503/'
            target='_blank' rel='noopener noreferrer'
          >
            <span className='sr-only'>No uso mucho instagram pero es necesario para los clientes. </span>
            <Instagram className='text-text-hover  hover:text-primary hover:scale-110 transition duration-300 cursor-pointer' />
          </a>
        </span>
      </div>
    </footer>
  )
}
