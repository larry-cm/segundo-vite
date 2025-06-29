export function randomNum ({ max = 4 } = {}) {
  return `/images/error-${Math.floor(Math.random() * max)}.gif`
}
