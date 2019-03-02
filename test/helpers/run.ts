
import * as test from 'tape'
import { JSDOM, DOMWindow } from 'jsdom'

export const run = ((fn: ({ document, window }: {
  document: Document,
  window: DOMWindow
}) => void) => {
  JSDOM.fromFile('./src/index.html', {
    runScripts: 'dangerously',
    resources: 'usable'
  })
    .then((dom: JSDOM) => setTimeout(() =>
    fn({ document: dom.window.document, window: dom.window }), 64))
    .catch(reason => console.error(reason))
})
export default test
