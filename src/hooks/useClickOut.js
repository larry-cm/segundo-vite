import { useState, useEffect, useRef } from 'react'
export default function useClickOut () {
  const [open, setOpen] = useState(false)
  const elementRef = useRef()
  const menuRef = useRef()

  function handleViewMenu () {
    !open ? setOpen(true) : handleCloseViewMenu()
  }

  function handleCloseViewMenu () {
    setOpen(false)
  }

  useEffect(function () {
    if (!open) return
    function viewClick (e) {
      const outsideMenu = elementRef.current && !elementRef.current.contains(e.target)
      const menu = (menuRef.current && !menuRef.current.contains(e.target))
      if (
        open &&
        outsideMenu &&
        menu
      ) {
        handleCloseViewMenu()
      }
    }
    window.addEventListener('mousedown', viewClick)
    return () => window.removeEventListener('mousedown', viewClick)
  }, [open])

  return {
    open,
    elementRef,
    menuRef,
    handleViewMenu
  }
}
