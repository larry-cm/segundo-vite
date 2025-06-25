import { useEffect, useState } from 'react'
import { apiObTrendingTerms } from '@/services/apiGetTrendsTerms'
import Categories from '@/components/Home/Categories/Categories'

export default function TrendingSearchesLazy () {
  const [trends, setTrends] = useState([])
  useEffect(() => {
    apiObTrendingTerms().then(setTrends)
  }, [])

  return <Categories options={trends} />
}
