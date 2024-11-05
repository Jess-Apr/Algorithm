// 문제 번호: 21592번

// 백준 제출용 코드
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0]);
const strings = input.slice(1);
const shortest = strings.reduce((acc, cur) =>
    acc.length > cur.length ? cur : acc
);

for (let length = shortest.length; length > 0; length--) {
    let isCommon = false;
    let substr = "";

    for (let start = 0; start <= shortest.length - length; start++) {
        substr = shortest.slice(start, start + length);

        if (strings.every((str) => str.includes(substr))) {
            console.log(substr.length);
            return;
        }
    }
}

console.log(0);

// 새로 배운 것:
// return 문을 함수 내부에서 사용할 경우 실행중인 함수를 종료하고 값을 반환한 후 함수를 빠져나오는 역할을 함.
// 하지만 function 블록 내부가 아닌 곳에서 return을 사용할 경우, 파일 전체에서 코드가 실행되기 때문에 스트립트의 실행이 완전히 종료됨.
// 반복문 또한 마찬가지임. 함수 내부에서 사용된 반복문이 아니라면 스크립트를 종료시킴.
// 따라서 여기서는 return이 될 경우 반복문의 루프가 완전히 멈추고, 이후에 console.log(0)도 실행되지 않음.
