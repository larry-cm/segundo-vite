import { Github, Instagram, Linkedin } from 'lucide-react'

export default function Footer () {
  return (
    <footer className='w-full flex justify-between rounded-2xl  '>
      <div className='flex flex-col gap-2 text-text font-normal w-fit '>
        <span className='drop-shadow-primary drop-shadow-2xl'> <img src='/src/assets/react.svg' height='24px' width='auto' className='mx-auto object-cover animate-[spin_2s_linear_infinite] ' /></span>
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
          <a href='http://www.linkedin.com/in/larry-moncada-264762305/' target='_blank' rel='noopener noreferrer'>
            <Linkedin className='text-text-hover hover:text-primary hover:scale-110 transition duration-300 cursor-pointer' />
          </a>
          <a href='http://github.com/larry-cm' target='_blank' rel='noopener noreferrer'>
            <Github className='text-text-hover  hover:text-primary hover:scale-110 transition duration-300 cursor-pointer' />
          </a>
          <a href='http://www.instagram.com/sonia.ceballo.503/' target='_blank' rel='noopener noreferrer'>
            <Instagram className='text-text-hover  hover:text-primary hover:scale-110 transition duration-300 cursor-pointer' />
          </a>
        </span>
      </div>
    </footer>
  )
}
