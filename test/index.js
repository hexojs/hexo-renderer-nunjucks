'use strict';

const should = require('chai').should(); // eslint-disable-line
const {render} = require('../index.js');

describe('Nunjucks renderer', () => {

  it('renders from a template', () => {
    const body = [
      'Hello {{ name }}!'
    ].join('\n');

    render({text: body}, {
      name: 'world'
    }).should.eql('Hello world!');
  });

  it('"for" tag requires an explicit Array conversion', () => {
    const body = [
      '{% for x in arr.toArray() %}',
      '{{ x }}',
      '{% endfor %}'
    ].join('');

    const data = {
      arr: {
        toArray: () => {
          return [1, 2, 3];
        }
      }
    };

    render({text: body}, data).should.eql('123');
  });

  it('renders a compiled template', () => {
    const body = [
      'Hello {{ name }}!'
    ].join('\n');

    const compiledRender = render.compile({
      text: body
    });

    compiledRender({
      name: 'world'
    }).should.eql('Hello world!');
  });
});
