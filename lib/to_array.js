'use strict';

const _toArray = require('lodash.toarray');

function isObject(value) {
  return typeof value === 'object' && value !== null && value !== undefined;
}

function toArray(value) {
  if (isObject(value) && typeof value.toArray === 'function') {
    return value.toArray();
  } else if (Array.isArray(value)) {
    return value;
  }

  return _toArray(value);
}

module.exports = toArray;
