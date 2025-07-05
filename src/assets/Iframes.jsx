export function Iframes ({ url, responsive = false, jsx = false }) {
  if (!url) return ''

  if (jsx) {
    // JSX: Normal o Responsive
    return responsive
      ? `<div style="width:100%;height:0;padding-bottom:57%;position:relative;"><iframe src="${url}" width="100%" height="100%" style="position:absolute" frameBorder="0" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/bandainamco-you-died-youdied-u-TbONGqAdpTWQW3Hz5V">via GIfClub</a></p>`
      : `<iframe src="${url}" width="480" height="274" style="" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bandainamco-you-died-youdied-u-TbONGqAdpTWQW3Hz5V">via GIfClub</a></p>`
  }

  // HTML normal o responsive
  return responsive
    ? `<div style="width:100%;height:0;padding-bottom:57%;position:relative;"><iframe src="${url}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowfullScreen></iframe></div><p><a href="https://giphy.com/gifs/bandainamco-you-died-youdied-u-TbONGqAdpTWQW3Hz5V">via GIfClub</a></p>`
    : `<iframe src="${url}" width="480" height="274" style="" frameBorder="0" allowfullScreen></iframe><p><a href="https://giphy.com/gifs/bandainamco-you-died-youdied-u-TbONGqAdpTWQW3Hz5V">via GIfClub</a></p>`
}
