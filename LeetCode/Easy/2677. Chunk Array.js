const input = require("./example");

const chunk = function (arr, size) {
  let curIdx = 0;
  const answer = [];
  let curArr = [];

  while (curIdx < arr.length) {
    curArr.push(arr[curIdx]);

    if (curArr.length === size) {
      answer.push(curArr);
      curArr = [];
    }

    curIdx++;
  }

  if (curArr.length) answer.push(curArr);

  return answer;
};

console.log(chunk(input[0], input[1]));
