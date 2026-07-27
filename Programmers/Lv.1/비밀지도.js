const input = require("./example");

// 비트 OR 연산 사용
// 두 숫자를 2진수로 바꿔서 같은 자리끼리 OR 연산 (즉, 둘 중 하나라도 1이면 1이 됨)
function solution(n, arr1, arr2) {
  return arr1.map((value, index) =>
    (value | arr2[index]).toString(2).padStart(n, "0").replaceAll("1", "#").replaceAll("0", " "),
  );
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
