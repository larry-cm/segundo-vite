export function GetUrlDownload ({ urlDownload }) {
  try {
    if (!urlDownload) return
    return fetch(urlDownload)
      .then(res => res.blob())
      .then(blob => {
        const mime = blob.type
        const ext = mime.split('/').pop()
        return { url: URL.createObjectURL(blob), ext }
      })
  } catch (error) {
    console.error(error)
    return Promise.reject(new Error('no se pudo descargar la imagen'))
  }
}
