const input = require("./example");

function solution(friends, gifts) {
  const n = friends.length;
  const index = {};
  const history = Array.from({ length: n }, () => Array(n).fill(0));
  const giftIndex = Array(n).fill(0);

  friends.forEach((name, i) => {
    index[name] = i;
  });

  for (let gift of gifts) {
    const [from, to] = gift.split(" ");
    const fromIdx = index[from];
    const toIdx = index[to];

    history[fromIdx][toIdx]++;
    giftIndex[fromIdx]++;
    giftIndex[toIdx]--;
  }

  const received = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (history[i][j] > history[j][i]) {
        received[i]++;
      } else if (history[j][i] > history[i][j]) {
        received[j]++;
      } else {
        if (giftIndex[i] > giftIndex[j]) {
          received[i]++;
        } else if (giftIndex[j] > giftIndex[i]) {
          received[j]++;
        }
      }
    }
  }

  return Math.max(...received);
}

const answer = solution(input[0], input[1]);
console.log(answer);

// 처음 풀었던 방법
// 이 방법도 답은 맞음
// 다만 위 방법을 사용하면 친구 쌍을 한번만 비교함 (i, j를 바꿔서 비교할 필요 없이 한번만 비교)
//   function solution(friends, gifts) {
//   const count = {};
//   const giftIndex = {};

//   friends.forEach((value) => (giftIndex[value] = 0));

//   for (let gift of gifts) {
//     if (!count[gift]) count[gift] = 1;
//     else count[gift] += 1;

//     const [left, right] = gift.split(" ");
//     giftIndex[left]++;
//     giftIndex[right]--;
//   }

//   let maxGift = 0;
//   const len = friends.length;

//   for (let i = 0; i < len; i++) {
//     let answer = 0;

//     for (let j = 0; j < len; j++) {
//       if (i === j) continue;

//       const count1 = count[`${friends[i]} ${friends[j]}`] ?? 0;
//       const count2 = count[`${friends[j]} ${friends[i]}`] ?? 0;
//       const index1 = giftIndex[friends[i]] ?? 0;
//       const index2 = giftIndex[friends[j]] ?? 0;

//       if (count1 > count2) answer++;
//       else if (count1 === count2 && index1 > index2) answer++;
//     }

//     maxGift = Math.max(maxGift, answer);
//   }

//   return maxGift;
// }
