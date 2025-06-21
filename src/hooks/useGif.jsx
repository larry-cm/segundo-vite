import { useContext, useEffect, useState } from 'react';
import { apiObGif } from '../services/apiGetGif';
import GifContext from '../context/GifContext'

export default function useGif ({ keyword } = { keyword: null }) {

  const [loading, setLoading] = useState(false)
  const { gif, updateGif, mode } = useContext(GifContext)

  useEffect(function () {
    setLoading(true)

    const keywordToUse = keyword ?? localStorage.getItem('lastKeyword') ?? 'random'
    const modeToUse = mode || localStorage.getItem('lastMode') || 'gifs'

    apiObGif({ keyword: keywordToUse, mode: modeToUse })
      .then(res => {
        setLoading(false)
        updateGif(res);
        localStorage.setItem('lastKeyword', keywordToUse)
      });
  }, [keyword, updateGif, mode]);

  return { loading, gif, mode }
}