import { useContext } from "react"
// import StaticContext from '../../context/StaticContext'
import GifContext from '../../context/GifContext'
import Gif from "../../components/Gif/Gif"
export default function CardInfo ({ params }) {
  const { id = '' } = params

  const { gif } = useContext(GifContext)
  const currentGif = gif.find(singleGif => singleGif.id === id)

  return (
    <div className="flex">

      <main className="w-full">
        <h3 className="text-5xl text-white">{id}</h3>
        <Gif id={id} title={currentGif?.title} url={currentGif?.url} />
      </main>
      <aside className="min-w-2xs">
        ss
      </aside>
    </div>
  )
}