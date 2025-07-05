import { useReducer } from 'react'
export default function useReduceAnimate () {
  const REDUCER_OPTION = {
    A_DOWNLOAD: 'descarga',
    A_COPY: 'copiar link',
    A_SHARE: 'compartir ',
    A_FAVORITOS: 'favoritos'
  }

  const REDUCER_ACTION = {
    [REDUCER_OPTION.A_DOWNLOAD]: (state, action) => ({ ...state, animateDownload: action.payload }),
    [REDUCER_OPTION.A_COPY]: (state, action) => ({ ...state, animateCopyLink: action.payload }),
    [REDUCER_OPTION.A_SHARE]: (state, action) => ({ ...state, animateShare: action.payload }),
    [REDUCER_OPTION.A_FAVORITOS]: (state, action) => ({ ...state, animateFav: action.payload })
  }

  const reducer = (state, action) => {
    const reducerAction = REDUCER_ACTION[action.type]
    return reducerAction ? reducerAction(state, action) : state
  }

  const [animateState, dispatch] = useReducer(reducer, {
    animateDownload: null,
    animateCopyLink: null,
    animateShare: null,
    animateFav: null
  })

  function handleAction (type, msg) {
    return dispatch({ type, payload: msg })
  }

  const handleAll = {
    handleAnimateCopyLink: msg => handleAction(REDUCER_OPTION.A_COPY, msg),
    handleAnimateDownload: msg => handleAction(REDUCER_OPTION.A_DOWNLOAD, msg),
    handleAnimateShare: msg => handleAction(REDUCER_OPTION.A_SHARE, msg),
    handleAnimateFav: msg => handleAction(REDUCER_OPTION.A_FAVORITOS, msg)
  }

  return {
    animateState,
    handleAll
  }
}
