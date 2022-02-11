export function longestPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const word = strs[i];
    const limit = prefix.length;
    for (let j = 0; j < limit; j++) {
      console.log('word.indexOf(prefix)', word.indexOf(prefix));
      if (word.indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1);
      }
      if (prefix.length === 0) return '';
    }
  }

  return prefix;
}
