// 문제 번호: 1929번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

function solution(input) {
  // 각 수를 인덱스로 표현하고, 그 수가 소수인지 아닌지를 1, 0으로 표현하는 arr 배열 생성
  // 0과 1은 소수가 아니니 0으로 바꿔준다.
  let arr = new Array(input[1] + 1).fill(1);
  arr.splice(0, 2, 0, 0);

  // 에라스토테네스의 체는 2부터 구하고자 하는 숫자의 제곱근(sqrt) 사이의 소수들의 배수를 제외하면 소수만 남는다는 개념이다.
  // 그래서 i * i 대신 Math.sqrt를 써도 되지만, i * i가 더 간편하니 이렇게 쓰겠다.
  for (let i = 2; i * i <= input[1]; i++) {
    // arr[i]의 수가 1이라면 아직 지워지지 않았다는 말이므로 배수들을 돌며 수를 지워주어야 한다.
    if (arr[i]) {
      // 자기 자신은 소수이므로 제외해야 한다. i * i부터 지워나간다.
      // i * 2가 아니라 i * i인 이유는 이전의 소수들이 배수를 지워나가는 과정을 통해 이미 그 숫자들이 지워졌기 때문이다.
      // 예를 들어 i가 5라고 한다면, 5 * 2는 2의 배수에서 지워졌고, 5 * 3은 3의 배수에서 지워졌고, 5 * 4는 2의 배수에서 지워졌다.
      // j에 i씩 더해가며 배수를 지워준다.
      for (let j = i * i; j <= input[1]; j += i) {
        arr[j] = 0;
      }
    }
  }

  // 1부터 시작하는게 아니라 시작하는 숫자가 정해져 있으므로 해당 숫자 이전까지의 숫자는 전부 0으로 바꿔준다.
  for (let i = 0; i < input[0]; i++) {
    arr[i] = 0;
  }

  // 숫자를 출력해야 하므로 1인 요소들의 인덱스를 구해준다.
  const answer = [];
  arr.forEach((el, idx) => {
    if (el) answer.push(idx);
  });

  return answer.join("\n");
}

console.log(solution(input));
