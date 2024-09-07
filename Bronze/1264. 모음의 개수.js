// 문제 번호: 1264번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 내가 작성한 코드
input.pop();
const vowel = "AaEeIiOoUu";
const answer = [];

for (let i = 0; i < input.length; i++) {
    let count = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (vowel.includes(input[i][j])) count++;
    }
    answer.push(count);
}

console.log(answer.join("\n"));

// 생각해보지 못했던 방식의 코드 - 정규표현식 사용
// input.length에서 1을 빼고 반복문을 실행하며 마지막 문자인 #을 pop해주는 과정을 거치지 않아도 됨
for (let i = 0; i < input.length - 1; i++) {
    // 정규표현식을 사용하여 중첩 for문을 사용하지 않고 모음이 모두 포함된 배열을 얻을 수 있음
    const vowels = input[i].match(/[aeiou]/gi);
    // 모음이 없으면 null이 반환되므로, null일때는 0을 출력하고 배열에 모음이 있으면 해당 배열의 길이를 반환해준다.
    console.log(vowels ? vowels.length : 0);
}
