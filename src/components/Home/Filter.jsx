import { useState } from "react"
import { Filter } from 'lucide-react';
import { useContext } from "react";
import GifContext from '../../context/GifContext'

export default function FilterBtn () {
  const [open, setOpen] = useState(false)
  const { setMode } = useContext(GifContext)

  function handleClick () {
    setOpen(!open)
  }

  function handleChange (e) {
    setMode(e.target.value);
  }

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={`px-4 py-2 border border-primary rounded-lg duration-300 hover:bg-primary  font-medium  transition text-text capitalize cursor-pointer flex items-center gap-4  ${open ? 'bg-primary' : ''}`}>
        <Filter className='size-5 text-text ' />
        <span>Filtrar</span>
      </button>
      {
        open && (
          <article className="absolute z-10 top-16 right-0 h-fit p-6 bg-fondo border border-primary rounded-lg shadow-2xl ">
            <header>
              <h4 className="text-text font-medium ">Disponible para filtrar</h4>
            </header>


            <div className="flex flex-col gap-4 pt-4">

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  onChange={handleChange}
                  value="gifs"
                  className="peer hidden"
                  defaultChecked // o checked={...}
                />
                <div className="text-text font-medium transition duration-200 text-sm text-center hover:scale-105 hover:bg-secondary rounded p-2 peer-checked:bg-secondary">
                  Giphy Public API
                </div>
              </label>

              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="mode"
                  onChange={handleChange}
                  value="stickers"
                  className="peer hidden"
                />
                <div className="text-text font-medium transition duration-200 text-sm text-center hover:scale-105 hover:bg-secondary rounded p-2 peer-checked:bg-secondary">
                  Giphy Sticker API
                </div>
              </label>

            </div>

          </article>
        )
      }

    </>
  )
}