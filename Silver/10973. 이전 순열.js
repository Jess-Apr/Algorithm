// 문제 번호: 10973번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = +input.shift();
const num = input.shift().split(" ").map(Number);

function solution(arr) {
  let i = arr.length - 1;
  // 배열의 끝부터 시작해서 원소가 이전 원소보다 크거나 같으면 계속 이전 원소로 이동한다.
  // num이 오름차순으로 정렬된 배열이라면 가장 처음에 오는 순열이므로 false를 리턴해준다.
  while (i > 0 && arr[i - 1] <= arr[i]) i -= 1;
  if (i <= 0) return false;

  let j = arr.length - 1;
  // 배열의 끝에서부터 시작해서 a[i - 1]보다 큰 첫번째 원소를 찾는다.
  while (arr[j] >= arr[i - 1]) j -= 1;
  // 찾았다면 a[i - 1], a[j]의 위치를 바꾼다.
  [arr[j], arr[i - 1]] = [arr[i - 1], arr[j]];

  // a[i]부터 배열의 끝까지 원소들을 뒤집는다.
  // 이를 통해 a[i - 1] 뒤쪽의 순열들을 오름차순으로 만든다.
  j = arr.length - 1;
  while (i < j) {
    [arr[j], arr[i]] = [arr[i], arr[j]];
    i += 1;
    j -= 1;
  }
  return true;
}

if (solution(num)) console.log(num.join(" "));
else console.log(-1);
