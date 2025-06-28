import React, { useState } from 'react'
import { VerifiedIcon, Info, Globe, Code } from 'lucide-react'
import BtnDialog from '@/components/Details/GifInfo/InfoCreador/BtnDialog'
import EmbedShare from '@/components/Details/GifInfo/InfoCreador/EmbedShare'
import InfoGlobs from '@/components/Details/GifInfo/InfoCreador/InfoGlobs'

export function HeaderCreador ({
  username,
  userInfo = {}
}) {
  const {
    viewName,
    isVerified,
    avatarUrl,
    instaUrl,
    webUrl,
    description
  } = userInfo
  const [open, setOpen] = useState(false)
  const itDescription = description.indexOf('. ') !== -1
    ? description.indexOf('. ')
    : description.indexOf('.')
  const firstDescription = description.slice(0, itDescription)
  const secondDescription = description.slice(itDescription)
  const handleDetails = () => setOpen(!open)

  return (
    <>
      <header className='flex items-center justify-center lg:justify-start gap-4 mb-[1lh] '>
        <img className='size-10 rounded' src={avatarUrl || '/vite.svg'} alt='imagen del creador' />
        <div className='text-base font-semibold '>
          <h3 className=''>{viewName || 'Default name'}</h3>
          <a className='w-fit block' href={instaUrl || webUrl || '#app'} target='_blank' rel='noopener noreferrer'>
            <span className='flex w-fit items-center text-text-hover/70 transition cursor-pointer hover:text-text-hover'>
              @{username || 'Default_name'}
              {isVerified && <VerifiedIcon className='size-4 ms-1 fill-secondary text-fondo' />}
            </span>
          </a>
        </div>
      </header>

      {description && (
        <p className='text-text-hover text-center lg:text-start'>
          {firstDescription || ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae'}
          {
            open && (' ' + secondDescription)
          }
          {
            secondDescription.length > 2 && (
              <span className='text-text cursor-pointer w-fit  block mt-2 font-semibold text-base' onClick={handleDetails}>leer mas {open ? '▴' : '▾'}</span>
            )
          }
        </p>
      )}
    </>
  )
}

function InfoCreador ({ infoUser }) {
  const { info } = infoUser
  const articles = {
    title: infoUser.title,
    username: infoUser.username,
    ...info
  }

  return (
    <div className='flex gap-2 justify-center'>

      <a className='cursor-pointer p-2 text-text-hover/70 flex gap-1.5 items-center flex-col hover:text-text-hover transition' target='_blank' href={info.sourceRute || 'fuente'} rel='noopener noreferrer'>
        <span><Globe /></span>
        <span>Fuente</span>
      </a>

      <BtnDialog text='Embed' Icon={Code} titleHeader='Gift como embed.'>
        <EmbedShare url={info.embedUrl} />
      </BtnDialog>
      <BtnDialog text='Info' Icon={Info} buttonBottom>
        <InfoGlobs articles={articles} />
      </BtnDialog>
    </div>
  )
}
export default React.memo(InfoCreador, (prevP, nextP) => prevP.infoUser.username === nextP.infoUser.username)
