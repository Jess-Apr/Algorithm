const input = require("./example");

function isValid(s) {
  const stack = [];
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if ("({[".includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pair[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid(input));
