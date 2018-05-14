'use strict';

/* ADVENT OF CODE - https://adventofcode.com/2016/day/2 */

// 1 2 3  -  1 1   1 2   1 3
// 4 5 6  -  2 1   2 2   2 3
// 7 8 9  -  3 1   3 2   3 3

// reference: http://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html for reference
class HashTable {
  constructor(obj) {
    this.length = 0;
    this.items = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        this.items[i] = obj[i];
        this.length++;
      }
    }
  }

  hasItem(key) {
    return this.items.hasOwnProperty(key);
  }

  getItem(key) {
    return this.hasItem(key) ? this.items[key] : undefined;
  }
}

let table = new HashTable({
  '1 1': 1,
  '1 2': 2,
  '1 3': 3,
  '2 1': 4,
  '2 2': 5,
  '2 3': 6,
  '3 1': 7,
  '3 2': 8,
  '3 3': 9,
})

const findCode = (clues, start) => {
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
    code.push(table.getItem(current.join(' ')))
  }
  return code.join(',');
}

let clues = ['ULL', 'RRDDD', 'LURDL', 'UUUUD'];
findCode(clues, '2 2');