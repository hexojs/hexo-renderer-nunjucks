/* global hexo */

'use strict';

const renderer = require('./lib/renderer.js');


// auto-registers if hexo is widely available
// typically the case when hexo autoloads npm dependencies
if (typeof hexo !== 'undefined') {
  renderer.register(hexo);
}


module.exports = renderer;
