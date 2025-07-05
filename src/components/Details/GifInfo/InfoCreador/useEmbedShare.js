import { useReducer, useRef } from 'react'
import { Iframes } from '@/assets/Iframes'
export default function useEmbedShare ({ url }) {
  const REDUCER_OPTION = {
    COPY_CLIPBOARD: 'copiar',
    UPDATE_IFRAME: 'cambiandoIframe'
  }

  const REDUCER_ACTION = {
    [REDUCER_OPTION.COPY_CLIPBOARD]: (state, action) => ({ ...state, status: action.payload }),
    [REDUCER_OPTION.UPDATE_IFRAME]: (state, action) => ({ ...state, value: action.payload })
  }

  const reducerEmbed = (state, action) => {
    const reducerAction = REDUCER_ACTION[action.type]
    return reducerAction ? reducerAction(state, action) : state
  }

  const [state, dispatch] = useReducer(reducerEmbed, {
    value: Iframes({ url }),
    status: false
  })

  const responsiveRef = useRef()
  const jsxRef = useRef()

  function copyUrl () {
    const copiar = async () => {
      try {
        await navigator.clipboard.writeText(state.value)
      } catch (err) {
        console.error('Error al copiar:', err)
      }
    }
    copiar()
    dispatch({ type: REDUCER_OPTION.COPY_CLIPBOARD, payload: true })

    setTimeout(() => {
      dispatch({ type: REDUCER_OPTION.COPY_CLIPBOARD, payload: false })
    }, 1000)
  }

  function changeIframe (e) {
    const preferrer = (e.target)
    const value = preferrer.checked
    const dType = preferrer.getAttribute('data-type')
    const typeAttribute = {
      responsive: () => {
        const jsxP = jsxRef.current && jsxRef.current.checked
        dispatch({
          type: REDUCER_OPTION.UPDATE_IFRAME,
          payload: Iframes({ url, jsx: jsxP, responsive: value })
        })
      },
      'jsx-tsx': () => {
        const responsiveP = responsiveRef.current && responsiveRef.current.checked
        dispatch({
          type: REDUCER_OPTION.UPDATE_IFRAME,
          payload: Iframes({ url, jsx: value, responsive: responsiveP })
        })
      }
    }
    const actionInputs = typeAttribute[dType]
    actionInputs && actionInputs()
  }

  return {
    jsxRef,
    responsiveRef,
    state,
    copyUrl,
    changeIframe
  }
}
