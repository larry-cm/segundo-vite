import { useLocation } from 'wouter'
import { useCallback, useReducer } from 'react'
import { ACTION } from '@/components/Home/Filters/entries'

export default function useForm ({ initialKeyword, initialRating, initialMode, initialLang }) {
  const pushLocation = useLocation()[1]
  const reducer = (state, action) => {
    const OPTION = {
      [ACTION.UPDATE_KEYWORD]: {
        ...state,
        query: action.payload
      },
      [ACTION.CLEAN_KEYWORD]: {
        ...state,
        query: ''
      },
      [ACTION.UPDATE_RATING]: {
        ...state,
        rating: action.payload
      },
      [ACTION.UPDATE_MODE]: {
        ...state,
        mode: action.payload
      },
      [ACTION.UPDATE_LANG]: {
        ...state,
        lang: action.payload
      }
    }
    if (action.type in OPTION) {
      return OPTION[action.type]
    } else return state
  }

  const [state, dispatch] = useReducer(reducer, {
    query: initialKeyword,
    rating: initialRating,
    mode: initialMode,
    lang: initialLang
  })
  const { query, rating, mode, lang } = state
  return {
    query,
    rating,
    mode,
    lang,
    updateKeyword: useCallback(keyword => dispatch({ type: ACTION.UPDATE_KEYWORD, payload: keyword }), []),
    cleanKeyword: useCallback(() => dispatch({ type: ACTION.CLEAN_KEYWORD, payload: '' }), []),
    updateRating: useCallback(rating => dispatch({ type: ACTION.UPDATE_RATING, payload: rating }), []),
    updateMode: useCallback(mode => dispatch({ type: ACTION.UPDATE_MODE, payload: mode }), []),
    updateLang: useCallback(lang => dispatch({ type: ACTION.UPDATE_LANG, payload: lang }), []),
    submitForm: useCallback(() => {
      if (!query) return
      pushLocation(`/gif/${query}/${rating}/${mode}/${lang}`)
    }, [query, rating, mode, lang]
    )

  }
}
