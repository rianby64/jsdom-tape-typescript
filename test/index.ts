
import * as test from 'tape';
import { JSDOM, DOMWindow } from 'jsdom';

function initPage(): Promise<{ window: DOMWindow, document: Document }> {
  return JSDOM.fromFile('./src/index.html').then((dom: JSDOM) => ({
    window: dom.window,
    document: dom.window.document
  }));
}

test('Doing something interesting', (t: test.Test) => {
  t.plan(1);

  initPage().then(({ window, document }) => {
    t.ok(document.querySelector('div').tagName === 'DIV', 'ok');
  });
});