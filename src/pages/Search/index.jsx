
import ListOfComponent from "../../components/ListOfGif/ListOfComponent";
import useGif from "../../hooks/useGif";
import Loading from "../../components/animate/Loading";


export default function SearchResult ({ params = '' }) {
  const { keyword } = params

  const { loading, gif } = useGif({ keyword })
  return loading ?
    <Loading /> :
    <ListOfComponent gif={gif} />

}