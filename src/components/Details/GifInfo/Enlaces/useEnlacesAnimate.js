import { useEffect, useRef } from 'react'
export default function useEnlaceAnimate ({ handleAnimateCurso, messageAnimate = 'hola!', messageIcon = '' }) {
  const animateRef = useRef()

  const animateElement = () => {
    if (animateRef.current) return

    handleAnimateCurso({ status: true, message: messageAnimate, icon: messageIcon })
    animateRef.current = setTimeout(() => {
      handleAnimateCurso({ status: false, message: '', icon: '' })
      animateRef.current = null
    }, 1000)
  }

  useEffect(function () {
    return () => clearTimeout(animateRef.current)
  }, [])
  return {
    animateElement
  }
}
