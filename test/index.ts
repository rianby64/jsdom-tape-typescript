
import * as test from 'tape'
import { JSDOM, DOMWindow } from 'jsdom'

// initPage function allows to load the page within a promise
const initPage = (): Promise<{ document: Document, window: DOMWindow }> =>
  JSDOM.fromFile('./src/index.html', {
    runScripts: 'dangerously',
    resources: 'usable'
  })
    .then((dom: JSDOM) => {
      return {
        window: dom.window,
        document: dom.window.document
      }
    })

// Test example
test('Doing something interesting',(t: test.Test) => {
  t.plan(1)

  initPage()
    .then(({ window, document }) => {
      const div = document.querySelector('div')

      t.ok(div instanceof window.HTMLDivElement, 'div is present')
    })
    .catch((reason: any) => {
      console.error(reason)
    })
})

// Test example
test('Click pressed',(t: test.Test) => {
  t.plan(3)

  initPage()
    .then(({ window, document }) => {
      setTimeout(() => {
        const button = document.querySelector('button')
        const span = document.querySelector('span')

        t.ok(span instanceof window.HTMLSpanElement, 'span is present')
        t.ok(button instanceof window.HTMLButtonElement, 'button is present')

        button && button.click()
        t.equal(span && span.textContent, 'pressed', 'button triggers span.textContent = pressed')
      }, 0)
    })
    .catch(reason => {
      console.error(reason)
    })
})
