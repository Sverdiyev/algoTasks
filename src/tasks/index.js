// import { balancedBrackets } from './balancedBrackets.js';

import WordSearch from './wordSearch.js';

// import { longestPrefix } from './longestPrefix.js';

// const container1 = document.getElementById('container-1');
// const container2 = document.getElementById('container-2');
// const container3 = document.getElementById('container-3');

// console.log(longestPrefix(['c', 'acc', 'ccc']));

// console.log(balancedBrackets('(('));
const wordSearch = new WordSearch([
  'abcdefghij',
  'saggsasagg',
  'qwopjrpqis',
  'mfaslkfmsa',
  'msflksmafl',
  'oqjrwqiwra',
  'ijqwrjifmm',
  'mafslkfasm',
  'koqwopwqrk',
  'kvjavabjch', // java
]);
console.log(wordSearch.letterGrid);

console.log(wordSearch.find(['java']));
