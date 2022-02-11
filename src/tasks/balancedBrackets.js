export function balancedBrackets(input) {
  const brackets = { '{': '}', '(': ')', '[': ']' };

  const inputArray = input.split('').filter((el) => {
    if (
      el === '[' ||
      el === ']' ||
      el === '{' ||
      el === '}' ||
      el === '(' ||
      el === ')'
    )
      return true;
    return false;
  });

  const closingStack = [];

  if (inputArray.length % 2) return false;

  for (let el of inputArray) {
    if (brackets[el]) closingStack.unshift(el);
    else {
      const poppedElement = closingStack.pop();
      if (poppedElement !== el) return false;
    }
  }
}
