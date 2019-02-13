'use strict';

const test = require('tape');
const { JSDOM } = require('jsdom');

test('Doing something interesting', t => {
  t.plan(1);

  JSDOM.fromFile('./src/index.html').then(dom => {
    const { window } = dom;
    const { document } = window;

    t.ok(document.querySelector('div') instanceof document.defaultView.HTMLDivElement, 'it is OK');
  });
});