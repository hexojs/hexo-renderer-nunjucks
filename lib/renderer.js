'use strict';

const nunjucks = require('nunjucks');
const fs = require('hexo-fs');
const toArray = require('./to_array.js');

const env = nunjucks.configure({
  noCache: true,
  autoescape: false,
  throwOnUndefined: false,
  trimBlocks: false,
  lstripBlocks: false
});


// extras.useTag(swig, 'markdown');
// extras.useTag(swig, 'switch');
// extras.useTag(swig, 'case');
//
// extras.useFilter(swig, 'batch');
// extras.useFilter(swig, 'groupby');
// extras.useFilter(swig, 'markdown');
// extras.useFilter(swig, 'nl2br');
// extras.useFilter(swig, 'pluck');
// extras.useFilter(swig, 'split');
// extras.useFilter(swig, 'trim');
// extras.useFilter(swig, 'truncate');


env.addFilter('toArray', toArray);

const Environment = nunjucks.Environment;

function render(data, locals) {
  if ('text' in data) {
    return nunjucks.renderString(data.text, locals);
  }

  return nunjucks.render(data.path, locals);
}

function compile(data) {
  const compiled = nunjucks.compile(
    'text' in data ? data.text : fs.readFileSync(data.path)
  );

  return compiled.render.bind(compiled);
}

// hexo Renderer API implicitly requires 'compile' to be a value of the rendering function
render.compile = compile;

function register(context) {
  // context.extend.renderer.register('swig', 'html', render, true);
  context.extend.renderer.register('njk', 'html', render, true);
  context.extend.renderer.register('j2', 'html', render, true);
}

module.exports = {render, compile, Environment, register};
