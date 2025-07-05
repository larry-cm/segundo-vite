import { GetUrlDownload } from '@/services/downloadImage'
import { useRef, useCallback, useEffect } from 'react'
export default function useDownloadGif ({ urlDownload, title }) {
  const downloadRef = useRef()

  const downloadImg = useCallback(async () => {
    const res = await GetUrlDownload({ urlDownload })
    if (!res) return
    const { url, ext } = res
    downloadRef.current.href = url
    downloadRef.current.download = title || `${title}.${ext}`
  }, [])

  useEffect(function () {
    downloadImg()
      .then(() => { })
      .catch(e => console.error(e))
  }, [])
  return downloadRef
}
