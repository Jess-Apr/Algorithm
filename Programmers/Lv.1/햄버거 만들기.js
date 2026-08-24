const input = require("./example");

function solution(ingredient) {
  let answer = 0;
  const stack = ingredient.slice(0, 3);

  for (let i = 3; i < ingredient.length; i++) {
    const lastIdx = stack.length - 1;
    const isBread = ingredient[i] === 1;
    const isHamburger = stack[lastIdx - 2] === 1 && stack[lastIdx - 1] === 2 && stack[lastIdx] === 3;

    if (isBread && isHamburger) {
      answer++;
      stack.pop();
      stack.pop();
      stack.pop();
    } else {
      stack.push(ingredient[i]);
    }
  }

  return answer;
}

const answer = solution(input);
console.log(answer);
