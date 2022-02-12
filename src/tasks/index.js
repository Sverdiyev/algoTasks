// import { balancedBrackets } from './balancedBrackets.js';

import WordSearch from './wordSearch.js';

// import { longestPrefix } from './longestPrefix.js';

// const container1 = document.getElementById('container-1');
// const container2 = document.getElementById('container-2');
// const container3 = document.getElementById('container-3');

// console.log(longestPrefix(['c', 'acc', 'ccc']));

// console.log(balancedBrackets('(('));
const wordSearch = new WordSearch([
  '123456789s',
  'saggsasaga',
  '123456789n',
  'mfasashake',
  '123456789k',
  'oqjrwqiwra',
  '1234567890',
  'mafslkfasm',
  '1234567890',
  'kvjavabjch', // java
]);
console.log(wordSearch.letterGrid);

console.log(wordSearch.find(['java', 'sasha', 'sanek']));
