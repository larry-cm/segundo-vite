import React, { useEffect, useState } from 'react'
import { apiObTrendingTerms } from '@/services/apiGetTrendsTerms'
import Tags from '@/components/Tags/Tags'
import ContentLoE from '@/components/ContentLoad/ContentLoE'

function TrendingSearchesLazy () {
  const [trends, setTrends] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    apiObTrendingTerms()
      .then(setTrends)
      .catch(e => console.error(e))
    setLoading(false)
    return () => setTrends([])
  }, [])
  return (
    <div className='flex flex-wrap gap-2'>
      <ContentLoE
        isLoading={loading}
        sizeResultComponent='w-44'
      >
        {
          trends?.map((trend, i) => (
            <Tags url={trend} key={i} ancla />
          ))
        }

      </ContentLoE>
    </div>
  )
}
export default React.memo(TrendingSearchesLazy)
