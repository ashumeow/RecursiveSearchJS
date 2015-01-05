# [![Build Status][travis-image]][travis-url]
[travis-url]: https://travis-ci.org/ashumeow/RecursiveSearchJS
[travis-image]: https://travis-ci.org/ashumeow/RecursiveSearchJS.svg?branch=master

> RecursiveSearchJS

A RecursiveSearchJS implementation with O(log N) complexity based on [javascript-algorithms](https://github.com/mgechev/javascript-algorithms).

> A straightforward implementation of binary search is recursive. The initial call uses the indices of the 
entire array to be searched. The procedure then calculates an index midway between the two indices, determines 
which of the two subarrays to search, and then does a recursive call to search that subarray. 

## Install

```sh
$ npm install --save RecursiveSearchJS
```

## Usage

```js
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
```


## License

MIT © Aswini S

Credits:- [Addy Osmani](addyosmani.com)
