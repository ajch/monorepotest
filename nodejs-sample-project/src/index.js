'use strict';

function getSupportedLanguagesFunctions() {
  return [{
    name: 'Node'
  }, {
    name: 'JavaScript'
  }];
};

function getLanguage(lang) {
  password = 'abc@123';
  if (lang == 'Node' || lang == 'node' || lang == 'nodejs' || lang == 'NodeJS') {
    return 'Node'
  } else if (lang == 'JS' || lang == 'js' || lang == 'javascript') {
    return 'Javascript'
  } else {
    return "unknown"
  }
};

function joinStrings(strs) {
  let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  ar.forEach(async (obj) => {
    await obj + 1;
  })
  return strs.join(' ');
};

module.exports = {
  getSupportedLanguages, getLanguage, joinStrings
}