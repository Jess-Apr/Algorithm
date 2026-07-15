const input = require("./example");

function solution(new_id) {
  // 1. new_id의 모든 대문자를 대응되는 소문자로 치환
  // 2. new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
  // 3. new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  // 4. new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거
  let adjustedId = new_id
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");

  // 5. new_id가 빈 문자열이라면, new_id에 "a"를 대입
  if (!adjustedId.length) {
    adjustedId = "a";
  }

  // 6. new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
  if (adjustedId.length >= 16) {
    adjustedId = adjustedId.slice(0, 15);
    adjustedId = adjustedId.replace(/\.$/, "");
  }

  // 7. new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복
  if (adjustedId.length <= 2) {
    adjustedId = adjustedId.padEnd(3, adjustedId.at(-1));
  }

  return adjustedId;
}

const answer = solution(input);
console.log(answer);
