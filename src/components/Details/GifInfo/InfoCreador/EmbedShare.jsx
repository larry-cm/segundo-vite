import '@/css/switch.css'
import { Copy, CopyCheck } from 'lucide-react'
import useEmbedShare from '@/components/Details/GifInfo/InfoCreador/useEmbedShare'

export default function EmbedShare ({ url }) {
  const { responsiveRef, jsxRef, state, copyUrl, changeIframe } = useEmbedShare({ url })
  const { status, value } = state

  const iconsCopy = status ? <CopyCheck /> : <Copy />
  const colorCopyIcons = status ? 'from-green-600 via-green-500 to-green-700' : 'from-secondary/80 via-secondary to-secondary/80'

  function handleChange (e) {
    changeIframe(e)
  }

  function handleCopy () {
    copyUrl()
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
              onChange={handleChange}
              id='toggle-responsive'
              data-type='responsive'
              type='checkbox'
            />
            <label className='toggle-label' htmlFor='toggle-responsive' />
          </div>
        </div>

        <div className='w-fit '>
          <h3 className='text-text-hover/90 font-semibold text-base'>Modo de Jsx / Tsx</h3>

          <div tabIndex={0} className='toggle-switch mt-1'>
            <input
              ref={jsxRef}
              className='toggle-input'
              id='toggle-jsx-tsx'
              data-type='jsx-tsx'
              type='checkbox'
              onChange={handleChange}
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
            value={value}
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
