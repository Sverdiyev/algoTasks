export function findSubstring(str, substr) {
  let strIndex = 0;
  let subStrIndex = 0;

  const prefixTable = buildPrefixTable(substr);
  console.log('🚀 ~ findSubstring ~ prefixTable', prefixTable);
  let count = 0;
  while (strIndex < str.length - 1 && count < 100) {
    if (str[strIndex] === substr[subStrIndex]) {
      strIndex++;
      subStrIndex++;
    } else {
      const skip = prefixTable[subStrIndex];
      console.log('🚀 ~ findSubstring ~ skip', skip);
    }

    count++;
  }
}

function buildPrefixTable(str) {
  const prefixTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < str.length) {
    if (str[prefixIndex] === str[suffixIndex]) {
      prefixTable[suffixIndex] = prefixIndex + 1;
      prefixIndex += 1;
      suffixIndex += 1;
    } else {
      prefixTable[suffixIndex] = 0;
      suffixIndex += 1;
      prefixIndex = 0;
    }
  }
  return prefixTable;
}
