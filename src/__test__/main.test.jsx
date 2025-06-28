import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from '@/pages/app'

test('Primera vista', async () => {
  render(<App />)
  const title = await screen.findByText(/GifClub/i)
  expect(title).toBeVisible()
})

test('Vista de la búsqueda', async () => {
  render(<App />)

  const input = await screen.findByRole('textbox')
  const buttonSearch = await screen.findByLabelText('search-gifts')

  fireEvent.change(input, { target: { value: 'monos' } })
  fireEvent.click(buttonSearch)

  const titleSearches = await screen.findByText('monos')
  expect(titleSearches).toBeInTheDocument()

  await waitFor(async () => {
    const gifts = await screen.findAllByAltText('gif')
    return gifts.forEach(el => {
      expect(el.tagName).toBe('IMG')
      expect(el).toHaveAttribute('src')
      expect(el.getAttribute('src')).not.toBe('')
    })
  })

  screen.debug()
})

test('Sección de opciones de búsqueda', () => {
  render(<App />)

  const buttonsNav = screen.queryAllByLabelText('enlace-principal')
  buttonsNav.forEach(el => expect(el).toBeInTheDocument())
})
