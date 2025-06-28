export function GetUrlDownload ({ urlDownload }) {
  if (!urlDownload) return
  return fetch(urlDownload)
    .then(res => res.blob())
    .then(blob => {
      const mime = blob.type
      const ext = mime.split('/').pop()
      return { url: URL.createObjectURL(blob), ext }
    })
    .catch(e => console.error(e))
}
