const countUniqueValues = (sortedArr) => {
  const left = 0;
  const right = sortedArr.length - 1;

  const result = {};
  while (left < right) {
    if (sortedArr[left] === sortedArr[right]) {
    }
    if (result[left] in result) result[left]++;
  }
};

// 1 1 1 1 2
//
