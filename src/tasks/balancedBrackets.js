export function balancedBrackets(input) {
  const openingBrackets = ['(', '{', '['];
  const closingBrackets = [')', '}', ']'];

  const inputArray = input.split('').filter((el) => {
    if (
      el === openingBrackets[0] ||
      el === openingBrackets[1] ||
      el === openingBrackets[2] ||
      el === closingBrackets[0] ||
      el === closingBrackets[1] ||
      el === closingBrackets[2]
    )
      return true;
    return false;
  });

  const closingStack = [];

  if (inputArray.length % 2) return false;

  for (let el of inputArray) {
    switch (el) {
      //adding to closing stack
      case openingBrackets[0]:
        closingStack.unshift(closingBrackets[0]);
        break;
      case openingBrackets[1]:
        closingStack.unshift(closingBrackets[1]);
        break;
      case openingBrackets[2]:
        closingStack.unshift(closingBrackets[2]);
        break;

      //deleting from closing stack
      case closingBrackets[0]:
        if (closingBrackets[0] === closingStack[0]) {
          closingStack.shift();
        } else {
          return false;
        }
        break;
      case closingBrackets[1]:
        if (closingBrackets[1] === closingStack[0]) {
          closingStack.shift();
        } else {
          console.log('SHOULD BE HRER');
          return false;
        }
        break;
      case closingBrackets[2]:
        if (closingBrackets[2] === closingStack[0]) {
          closingStack.shift();
        } else {
          return false;
        }
        break;

      default:
        console.log('error:' + el);
    }
  }
  console.log('closing stack is:' + closingStack);
  if (closingStack.length > 0) return false;
  return true;
}
