
import * as test from 'tape'
import { JSDOM, DOMWindow } from 'jsdom'

interface JustFun {
  document: Document,
  window: DOMWindow,
}

const justFun = ((fn: Function) => {
  JSDOM.fromFile('./src/index.html', {
    runScripts: 'dangerously',
    resources: 'usable'
  })
    .then((dom: JSDOM) => setTimeout(() =>
      fn({ document: dom.window.document, window: dom.window }), 0))
    .catch(reason => console.error(reason))
})

// Test example
test('Doing something interesting',(t: test.Test) => {
  t.plan(1)

  justFun(({ document, window }: JustFun) => {
    const div = document.querySelector('div')

    t.ok(div instanceof window.HTMLDivElement, 'div is present')
  })
})

// Test example
test('Click pressed',(t: test.Test) => {
  t.plan(3)

  justFun(({ document, window }: JustFun) => {
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
