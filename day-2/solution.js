/* ADVENT OF CODE - https://adventofcode.com/2016/day/2 */

'use strict';

const HashTable = require('./lib/hashtable.js').HashTable;

module.exports = exports = {};

exports.table = new HashTable({
  '1 1': 1,
  '1 2': 2,
  '1 3': 3,
  '2 1': 4,
  '2 2': 5,
  '2 3': 6,
  '3 1': 7,
  '3 2': 8,
  '3 3': 9,
});

exports.findCode = (table, clues, start) => {
  let code = [];
  let current = start.split(' ');

  // iterate through clues
  for (let i = 0; i < clues.length; i++) {
    let clue = clues[i].split('');

    // iterate through individual letters in each clue
    for (let i = 0; i < clue.length; i++) {
      if (clue[i] === 'U') {
        if (current[0] > 1) {
          current[0]--;
        } else {
          current[0] = 1;
        }
      }

      if (clue[i] === 'D') {
        if (current[0] < 3) {
          current[0]++;
        } else {
          current[0] = 3;
        }
      }

      if (clue[i] === 'R') {
        if (current[1] < 3) {
          current[1]++;
        } else {
          current[1] = 3;
        }
      }

      if (clue[i] === 'L') {
        if (current[0] > 1) {
          current[1]--;
        } else {
          current[1] = 1;
        }
      }
    }
    code.push(table.getItem(current.join(' ')));
  }
  return code.join('');
};