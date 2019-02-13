
import * as test from 'tape';
import { JSDOM, DOMWindow } from 'jsdom';

const initPage = (): Promise<{ window: DOMWindow, document: Document }> =>
  JSDOM.fromFile('./src/index.html').then((dom: JSDOM) => ({
    window: dom.window,
    document: dom.window.document
  }));

test('Doing something interesting', (t: test.Test) => {
  t.plan(1);

  initPage().then(({ document }) => {
    t.ok(document.querySelector('div').tagName === 'DIV', 'ok');
  });
});
