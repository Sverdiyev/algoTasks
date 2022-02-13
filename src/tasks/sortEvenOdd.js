// leetcode 2164

export const sortEvenOdd = (nums) => {
  if (nums.length === 0) return false;

  const result = [];
  const odd = [];
  const even = [];

  for (let i = 0; i < nums.length / 2 + 1; i += 2) {
    odd.push(nums[i]);
    if (nums[i + 1]) even.push(nums[i + 1]);
  }
  console.log('🚀 ~ sortEvenOdd ~ odd', odd);
  console.log('🚀 ~ sortEvenOdd ~ even', even);

  for (let i = 0; i < Math.max(even.length, odd.length); i++) {
    result.push();
  }
  console.log('🚀 ~ sortEvenOdd ~ result', result);
  // for (let i = nums.length - 1; i >= 0; i -= 2) {
  //   odd.push(nums[i]);
  //   if (nums[i - 1]) even.push(nums[i - 1]);
  // }
  // console.log('🚀 ~ sortEvenOdd ~ odd', odd);
  // console.log('🚀 ~ sortEvenOdd ~ even', even);

  // for (let i = Math.max(even.length, odd.length); i >= 0; i--) {
  //   // result.push();
  // }
  return result;
};

// const binarySort = (array) => {};
