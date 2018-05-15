'use strict';

// reference: http://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html for reference

module.exports.HashTable = class {
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
};
