var RecursiveSearch = function(array, key, left, right) {
  'use strict';
  if (left > right) {
    return -1;
  }
  var middle = Math.floor((right + left) / 2);
  if (array[middle] === key) {
    return middle;
  } else if (array[middle] > key) {
    return recursiveBinarySearch(array, key, left, middle - 1);
  } else {
    return recursiveBinarySearch(array, key, middle + 1, right);
  }
};
module.exports = function (array, key) {
  return recursiveBinarySearch(array, key, 0, array.length);
};
