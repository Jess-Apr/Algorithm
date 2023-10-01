// 문제 번호: 9095번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);
input.shift();

// 어떤 수를 1, 2, 3의 합으로 나타내는 방법은 해당 수보다 3 작은 수의 방법들에 3을 전부 더해주는 것과 해당 수보다 2 작은 수의 방법들에 2를 전부 더해주는 것, 그리고 해당 수보다 1 작은 수의 방법들에 1을 전부 더해주는 것을 합한 수이다.
// 그렇기 때문에 1과 2와 3을 각각 1, 2, 3의 합으로 나타내는 방법을 구해 초기값으로 세팅해준 후 그 뒤 n의 수에는 n - 3, n - 2, n - 1의 방법들의 수를 더해서 출력해주면 된다.
function solution(input) {
  // 1, 2, 3을 1, 2, 3의 합으로 나타내는 수를 초기값으로 정해주었다.
  let arr = [1, 2, 4];
  // 숫자 n을 1, 2, 3의 합으로 나타내는 방법의 수를 집어 넣을 배열 생성.
  const answer = [];

  // 테스트케이스가 하나가 아니라 여러개가 한꺼번에 들어오기 때문에 각각의 테스트 케이스를 나눠줄 반복문 선언.
  for (let i = 0; i < input.length; i++) {
    // 각각의 테스트케이스의 숫자 n에 따라 1, 2, 3의 합으로 나타내는 방법의 수를 구해 arr에 넣어준다.
    for (let j = 3; j < input[i]; j++) {
      // 만약, 숫자 n의 자리(arr[j])에 이미 계산된 값이 들어있다면 굳이 같은 수를 다시 연산하지 않고 continue로 넘긴다.
      if (arr[j]) continue;
      // 숫자 n의 자리에 이미 계산된 값이 없다면 이전에 계산된 3개의 수를 더해 숫자 n을 1, 2, 3의 합으로 구하는 방법의 수를 구해서 arr에 넣어준다.
      arr.push(arr[j - 3] + arr[j - 2] + arr[j - 1]);
    }
    // 정답을 출력해주는 배열에 각각 테스트케이스 숫자 n의 방법 수를 집어넣어준다.
    // index는 0부터 시작하기 때문에 테스트케이스 숫자를 그대로 넣어주면 원하는 index보다 한자리 뒤 index의 값을 출력한다. 숫자가 잘못 출력되는 것을 방지하기 위해 테스트케이스 숫자에서 1을 뺀 숫자로 index 위치를 찾는다.
    answer.push(arr[input[i] - 1]);
  }

  return answer.join("\n");
}

console.log(solution(input));
