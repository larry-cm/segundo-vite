import { useCallback, useState, useEffect } from 'react'
export default function useLastViews () {
  const [ultimasVistas, setUltimasVistas] = useState(() => {
    const item = window.localStorage.getItem('lastKeyword')
    try {
      return item ? JSON.parse(item) : []
    } catch {
      return []
    }
  })
  const [indicesRepetidosPorInicio, setIndicesRepetidosPorInicio] = useState([])

  const changeViews = useCallback((val) => {
    setUltimasVistas(val)
  }, [])

  useEffect(() => {
    if (ultimasVistas.some(item => item.includes('undefined'))) {
      const filtered = ultimasVistas.filter(item => !item.includes('undefined'))
      setUltimasVistas(filtered)
      window.localStorage.setItem('lastKeyword', JSON.stringify(filtered))
    }
  }, [ultimasVistas])
  // Guarda las diferencias en un estado
  useEffect(() => {
    const inicioIndices = {}
    const diferencias = Array(ultimasVistas.length).fill('')
    ultimasVistas.forEach((item, idx, arr) => {
      const partes = item.split('/')
      const inicio = partes[0]
      const resto = partes.slice(1)

      if (inicioIndices[inicio] !== undefined) {
        const idxPrevio = inicioIndices[inicio]
        const restoPrevio = arr[idxPrevio].split('/').slice(1)

        const diffIndex = resto.findIndex((val, i) => val !== restoPrevio[i])
        const startDiff = diffIndex === -1 ? resto.length : diffIndex

        diferencias[idxPrevio] = restoPrevio.slice(startDiff).join('/')
        diferencias[idx] = resto.slice(startDiff).join('/')
        inicioIndices[inicio] = idx
      } else {
        inicioIndices[inicio] = idx
        diferencias[idx] = ''
      }
    })
    setIndicesRepetidosPorInicio(diferencias)
  }, [ultimasVistas])

  const getTextUrl = useCallback((str) => decodeURIComponent(str).split('/')[0], [ultimasVistas])

  return {
    ultimasVistas,
    indicesRepetidosPorInicio,
    changeViews,
    getTextUrl
  }
}
