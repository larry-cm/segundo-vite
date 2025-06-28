import React, { useEffect, useState } from 'react'
import { apiObTrendingTerms } from '@/services/apiGetTrendsTerms'
import Tags from '@/components/Details/Tags/Tags'

function TrendingSearchesLazy () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    apiObTrendingTerms()
      .then(setTrends)
      .catch(e => console.error(e))
    return () => setTrends([])
  }, [])

  return (
    <>
      <p className='flex flex-wrap gap-2'>
        {
          trends?.map((trend, i) => (
            <Tags url={trend} key={i} ancla />
          ))
        }
      </p>
    </>
  )
}
export default React.memo(TrendingSearchesLazy)
