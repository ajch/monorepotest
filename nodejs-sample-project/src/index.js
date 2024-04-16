'use strict';

function getSupportedLanguages () {
  return [{
    name: 'Node'
  }, {
    name: 'JavaScript'
  }];
};

function getLanguage (lang) {
  if(lang == 'Node' || lang == 'node' || lang == 'nodejs' || lang == 'NodeJS'){
    return 'Node'
  } else if(lang == 'JS' || lang == 'js' || lang == 'javascript'){
    return 'Javascript'
  } else {
    return "unknown"
  }
};

function joinStrings (strs) {
  return strs.join(' ');
};

module.exports = {
  getSupportedLanguages, getLanguage, joinStrings
}