'use strict';

function getOtherUsers () {
  return [{
    name: 'Node'
  }, {
    name: 'JavaScript'
  }];
};

function joinOtherStrings (strs) {
  return strs.join(' ');
};

module.exports = {
  getOtherUsers: getOtherUsers,
  joinOtherStrings: joinOtherStrings
};
