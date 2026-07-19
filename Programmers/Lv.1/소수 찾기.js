const input = require("./example");

function solution(n) {
  let isPrime = Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  // 합성수 x를 x = a × b로 나타낼 때,
  // a와 b가 모두 √x보다 크다면 a × b > x가 되어 모순이다.
  // 따라서 합성수는 반드시 자신의 제곱근 이하인 약수를 하나 이상 가진다.
  // n 이하의 모든 합성수는 √n 이하인 약수에 의해 제거될 수 있으므로,
  // 배수를 제거하는 바깥 반복은 √n까지만 수행하면 된다.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!isPrime[i]) continue;

    // i × 2부터 i × (i - 1)까지는 이미 더 작은 약수의 배수로 제거되었다.
    // 따라서 아직 제거되지 않았을 가능성이 있는 i * i부터 시작한다.
    for (let multiple = i * i; multiple <= n; multiple += i) {
      isPrime[multiple] = false;
    }
  }

  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) count++;
  }

  return count;
}

const answer = solution(input);
console.log(answer);
