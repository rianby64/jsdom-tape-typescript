
import * as test from 'tape'
import { JSDOM, DOMWindow } from 'jsdom'

// initPage function allows to load the page within a promise
const initPage = (): Promise<{
  window: DOMWindow,
  document: Document
}> =>
  JSDOM.fromFile('./src/index.html')
    .then((dom: JSDOM) => ({
      window: dom.window,
      document: dom.window.document
    }))

// Test example
test('Doing something interesting',(t: test.Test) => {
  t.plan(1)

  initPage()
    .then(({ window, document }) => {
      const div = document.querySelector('div')

      t.ok(
        div instanceof window.HTMLDivElement,
        'Finally HTMLDivElement'
      )
    })
    .catch(reason => {
      console.error(reason)
    })
})
