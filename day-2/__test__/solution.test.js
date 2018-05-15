'use strict';

const findCode = require('../solution.js').findCode;
let table = require('../solution.js').table;
require('jest');

describe('Bathroom Code Solution', () => {
  let clues = ['ULL', 'RRDDD', 'LURDL', 'UUUUD'];
  let solution = findCode(table, clues, '2 2');

  it('should return code 1985', () => {
    expect(solution).toEqual('1985');
    expect(typeof solution).toEqual('string');
    expect(typeof table).toEqual('object');
  });
});