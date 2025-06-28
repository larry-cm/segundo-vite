import { useRef, useEffect } from 'react'
export default function useDialog () {
  const dialogRef = useRef(null)
  const contentRef = useRef(null)

  const handleDialog = () => {
    dialogRef.current && dialogRef.current.showModal()
    dialogRef.current.classList.add('dialogUp')
  }

  const handleAnimateEnd = (e) => {
    const dialog = dialogRef.current
    if (dialog.classList.contains('dialogDown')) {
      dialog.classList.remove('dialogDown')
      dialog.close()
    }
    if (dialog.current?.open) {
      dialog.current.classList.remove('dialogUp')
    }
  }

  const handleCloseDialog = () => {
    const dialog = dialogRef.current
    const conteDialog = contentRef.current
    if (!conteDialog || !dialog || !dialog.open) return

    dialog.classList.add('dialogDown')
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      const conteDialog = contentRef.current
      if (conteDialog && !conteDialog.contains(e.target)) {
        handleCloseDialog()
      }
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return { handleAnimateEnd, handleDialog, handleCloseDialog, dialogRef, contentRef }
}
