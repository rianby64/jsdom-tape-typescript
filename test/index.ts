
import * as test from 'tape';
import { JSDOM } from 'jsdom';

test('Doing something interesting', (t: test.Test) => {
  t.plan(1);

  JSDOM.fromFile('./src/index.html').then((dom: JSDOM) => {
    const { window } = dom;
    const { document } = window;

    t.ok(document.querySelector('div').tagName === 'DIV', 'ok');
  });
});