// 1392. Longest Happy Prefix

export function longestHappyPrefix(str) {
  const prefix = {};
  const suffix = {};

  for (let i = 1; i < str.length; i++) {
    prefix[i] = str.slice(0, i);
    suffix[i] = str.slice(str.length - i, str.length);
  }

  for (let i = Object.keys(prefix).length; i > 0; i--) {
    if (prefix[i] === suffix[i]) return suffix[i];
  }
  return '';
}

// there is a better way with KMP pattern.
