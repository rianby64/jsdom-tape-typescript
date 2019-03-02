
import test, { run } from './helpers/run'

// Test example
test('Doing something interesting',(t: test.Test) => {
  t.plan(1)

  run(({ document, window }) => {
    const div = document.querySelector('div')

    t.ok(div instanceof window.HTMLDivElement, 'div is present')
  })
})

// Test example
test('Click pressed',(t: test.Test) => {
  t.plan(3)

  run(({ document, window }) => {
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
})
