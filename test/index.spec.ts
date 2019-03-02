
import test from './helpers/test'

test('check listeners', ({ document, window, t }) => {
  t.plan(1)

  const div = document.querySelector('div')
  t.ok(div instanceof window.HTMLDivElement, 'div is present')
})

test('check listeners', ({ document, window, t }) => {
  t.plan(3)

  const button = document.querySelector('button')
  const span = document.querySelector('span')

  t.ok(span instanceof window.HTMLSpanElement, 'span is present')
  t.ok(button instanceof window.HTMLButtonElement, 'button is present')

  button && button.click()
  t.equal(
    span && span.textContent,
    'pressed',
    'button triggers span.textContent = pressed')
})
