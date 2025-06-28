import '@/css/switch.css'
import { Copy, CopyCheck } from 'lucide-react'
import { useRef, useState } from 'react'
import { Iframes } from '@/assets/Iframes'

export default function EmbedShare ({ url }) {
  const [copy, setCopy] = useState({ value: Iframes({ url }), status: false })
  const responsiveRef = useRef()
  const jsxRef = useRef()

  const iconsCopy = copy.status ? <CopyCheck /> : <Copy />
  const colorCopyIcons = copy.status ? 'from-green-600 via-green-500 to-green-700' : 'from-secondary/80 via-secondary to-secondary/80'

  function handleCopy () {
    const copiar = async () => {
      try {
        setCopy(prev => ({ ...prev, status: true }))
        await navigator.clipboard.writeText(copy.value)
      } catch (err) {
        console.error('Error al copiar:', err)
      }
    }
    copiar()

    setTimeout(() => {
      setCopy(prev => ({ ...prev, status: false }))
    }, 1000)
  }

  function handleChangeIframe (e) {
    const preferrerResponsive = (e.target.checked)
    const preferrerJsx = (jsxRef.current && jsxRef.current.checked)
    setCopy(prev => ({ ...prev, value: Iframes({ url, responsive: preferrerResponsive, jsx: preferrerJsx }) }))
  }

  function handleDisablesJsx (e) {
    const preferrerJsx = (e.target.checked)
    const preferrerResponsive = (responsiveRef.current && responsiveRef.current.checked)
    setCopy(prev => ({ ...prev, value: Iframes({ url, responsive: preferrerResponsive, jsx: preferrerJsx }) }))
  }

  return (
    <article className='flex flex-col gap-6'>
      <section>

        <p className='border-t border-primary pt-2 text-text text-base'>
          Puedes editar y copiar el código embed para obtener diferentes formatos y logar una vista del gift el tu web o otros sitios!
        </p>

      </section>

      <section className='flex gap-6'>
        <div className='w-fit'>
          <h3 className='text-text-hover/90 font-semibold text-base'>Modo celular</h3>
          <div tabIndex={0} className='toggle-switch mt-1'>
            <input
              ref={responsiveRef}
              className='toggle-input'
              onChange={handleChangeIframe}
              id='toggle'
              type='checkbox'
            />
            <label className='toggle-label' htmlFor='toggle' />
          </div>
        </div>

        <div className='w-fit '>
          <h3 className='text-text-hover/90 font-semibold text-base'>Modo de Jsx / Tsx</h3>

          <div tabIndex={0} className='toggle-switch mt-1'>
            <input
              ref={jsxRef}
              className='toggle-input'
              id='toggle-jsx-tsx'
              type='checkbox'
              onChange={handleDisablesJsx}
            />
            <label className='toggle-label' htmlFor='toggle-jsx-tsx' />
          </div>

        </div>
      </section>

      <section>
        <h4 className='text-text-hover/90 font-semibold text-sm mb-2'>Código Embed</h4>
        <div className='flex w-full h-10'>
          <input
            className='size-full  py-2 px-4 h-full rounded-r-none appearance-none  outline-none border border-transparent focus:border-primary border-r-0 rounded-md bg-text text-base'
            type='text'
            autoComplete='none'
            value={copy.value}
            onChange={function () { }}
          />
          <button
            onClick={handleCopy}
            type='button'
            className={`text-text bg-gradient-to-r  font-semibold px-4 py-2 cursor-pointer rounded-r-md transition-all ${colorCopyIcons}`}
          >
            {iconsCopy}
          </button>
        </div>

      </section>
    </article>
  )
}
