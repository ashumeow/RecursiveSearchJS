var binarysearch = require('RecursiveSearchJS');

binarySearch([1, 2, 3, 4, 6, 8], 1);
// => 0

binarySearch([1, 2, 3, 4, 6, 8], 4);
// => 3

binarySearch([1, 8], 1);
// => 0

binarySearch([1, 2, 3], 4);
// => -1

binarySearch([], 4);
// => -1
