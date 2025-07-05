import Loading from './Loading'
import NoResults from './NotResults'

export default function ContentLoE ({ isLoading, isError, children, LoadingComponent = Loading, sizeResultComponent = '' }) {
  return isLoading
    ? <LoadingComponent />
    : isError ? <NoResults w={sizeResultComponent} /> : children
}
