export default function AvisoGif ({ stateAviso, textMostrar, Icon }) {
  return stateAviso !== undefined && (
    <div className={`absolute  w-full text-text left-0 p-6 mx-auto right-0 rounded flex gap-4 items-center text-3xl font-medium justify-center  transition-transform bottom-0 Aviso ${stateAviso === null ? 'hidden' : stateAviso ? 'Up' : 'Down'}`}>
      <em className='not-italic'>{textMostrar || 'no estas mostrando nada'}</em>
      {Icon ? <Icon className='size-8' /> : '🐱‍👤'}
    </div>
  )
}
