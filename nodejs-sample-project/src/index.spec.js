'use strict';


var example = require('./index.js');

test('testGetSupportedLanguages', () => {
  expect(example.getSupportedLanguages()).toHaveLength(2)
});

test('testGetLanguage', () => {
  expect(example.getLanguage("nodejs")).toBe('Node')
});


