export default function AvisoGif ({ stateAviso, textMostrar, Icon }) {
  const EVITAR = stateAviso === null ? 'hidden' : stateAviso ? 'Up' : 'Down'
  return stateAviso !== undefined && (
    <div className={`absolute  w-full text-text left-0 p-6 mx-auto right-0 rounded flex gap-4 items-center text-3xl font-medium justify-center  transition-transform bottom-0 Aviso ${EVITAR}`}>
      <em className='not-italic text-center'>{textMostrar || 'no estas mostrando nada'}</em>
      {<Icon className='size-8 min-w-8' /> ?? '🐱‍👤'}
    </div>
  )
}
