import { useLocation } from 'wouter'
import { useCallback, useReducer, useContext, useEffect } from 'react'
import { ACTION, LANGUAGES, languagesArrayInvertido, MODO, RATINGS } from '@/components/Home/Filters/entries'
import FilterContext from '@/context/FilterContext'
export default function useForm ({ initialKeyword, initialRating, initialMode, initialLang }) {
  const pushLocation = useLocation()[1]
  const { setFilters } = useContext(FilterContext) || {}
  const ACTION_REDUCER = {
    [ACTION.UPDATE_KEYWORD]: (state, action) => ({ ...state, query: action.payload }),
    [ACTION.UPDATE_RATING]: (state, action) => ({ ...state, rating: action.payload }),
    [ACTION.UPDATE_MODE]: (state, action) => ({ ...state, mode: action.payload }),
    [ACTION.UPDATE_LANG]: (state, action) => ({ ...state, lang: action.payload }),
    [ACTION.CLEAN_KEYWORD]: (state, action) => ({ ...state, query: '' }),
    [ACTION.CLEAN_FILTERS]: (state, action) => {
      if (
        state.lang === languagesArrayInvertido[LANGUAGES.es] &&
        state.mode === MODO[0] &&
        state.rating === RATINGS[0]
      ) {
        const openDialog = action.payload
        openDialog()
        return state
      }
      return {
        ...state,
        mode: MODO[0],
        rating: RATINGS[0],
        lang: languagesArrayInvertido[LANGUAGES.es]
      }
    }
  }
  const reducer = (state, action) => {
    const actionReducer = ACTION_REDUCER[action.type]
    return actionReducer ? actionReducer(state, action) : state
  }

  const [state, dispatch] = useReducer(reducer, {
    query: initialKeyword,
    rating: initialRating,
    mode: initialMode,
    lang: initialLang
  })

  useEffect(() => {
    if (!setFilters) return
    setFilters(prev => ({
      ...prev,
      query: state.query,
      rating: state.rating,
      mode: state.mode,
      lang: state.lang
    }))
  }, [state.query, state.rating, state.mode, state.lang, setFilters])
  const { query, rating, mode, lang } = state

  return {
    query,
    rating,
    mode,
    lang,
    updateKeyword: useCallback(keyword => dispatch({ type: ACTION.UPDATE_KEYWORD, payload: keyword }), []),
    updateRating: useCallback(rating => dispatch({ type: ACTION.UPDATE_RATING, payload: rating }), []),
    updateMode: useCallback(mode => dispatch({ type: ACTION.UPDATE_MODE, payload: mode }), []),
    updateLang: useCallback(lang => dispatch({ type: ACTION.UPDATE_LANG, payload: lang }), []),
    cleanKeyword: useCallback(() => dispatch({ type: ACTION.CLEAN_KEYWORD, payload: '' }), []),
    cleanFilters: useCallback(filters => dispatch({ type: ACTION.CLEAN_FILTERS, payload: filters }), []),
    submitForm: useCallback(() => {
      if (!query || !rating || !mode || !lang) return
      pushLocation(`/gif/${query}/${rating}/${mode}/${lang}`)
    }, [query, rating, mode, lang]
    )

  }
}
