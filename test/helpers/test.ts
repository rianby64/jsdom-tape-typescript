
import * as tape from 'tape'
import { JSDOM, DOMWindow } from 'jsdom'

interface ITest {
  document: Document, window: DOMWindow, t: tape.Test
}

const test = (
  description: string,
  callback: ({ document, window, t }: ITest) => void
) => {
  tape(description, (t: tape.Test) => {
    JSDOM.fromFile('./src/index.html', {
      runScripts: 'dangerously',
      resources: 'usable'
    })
      .then((dom: JSDOM) => setTimeout(() =>
        callback({ document: dom.window.document, window: dom.window, t }), 64))
      .catch(reason => console.error(reason))
  })
}

export default test
