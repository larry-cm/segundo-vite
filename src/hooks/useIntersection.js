import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({ distance = '100px', externalRef = '', once = true } = {}) {
  const [isNearScreen, setIsObserver] = useState(false)
  const refElement = useRef()

  useEffect(function () {
    let observer
    const element = externalRef ? externalRef.current : refElement.current

    const options = {
      rootMargin: distance
    }

    function onChange (entries, observer) {
      const [firstObserverEvent] = entries

      if (firstObserverEvent.isIntersecting) {
        setIsObserver(true)
        once && observer.disconnect()
      } else {
        !once && setIsObserver(false)
      }
    }

    Promise.resolve(
      typeof window.IntersectionObserver === 'undefined' && import('intersection-observer')
    ).then(() => {
      observer = new window.IntersectionObserver(onChange, options)
      element && observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, refElement }
}
