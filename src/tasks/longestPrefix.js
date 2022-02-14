// export function longestPrefix(strs) {
//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     const word = strs[i];
//     const limit = prefix.length;
//     for (let j = 0; j < limit; j++) {
//       if (word.indexOf(prefix) !== 0) {
//         prefix = prefix.slice(0, prefix.length - 1);
//       }
//       if (prefix.length === 0) return '';
//     }
//   }

//   return prefix;
// }

// better implemenetation - vertical. faster

export function longestPrefix(strs) {
  if (strs.length === 0) return '';
  let prefix = '';
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }

  return prefix;
}
