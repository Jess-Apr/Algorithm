const input = require("./example");

function solution(today, terms, privacies) {
  const answer = [];
  const [y, m, d] = today.split(".").map(Number);
  const todayNum = y * 12 * 28 + m * 28 + d;
  const periodNum = {};

  for (let t of terms) {
    const [type, period] = t.split(" ");
    periodNum[type] = Number(period) * 28;
  }

  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    const [collectedDate, collectedType] = privacy.split(" ");
    const [cy, cm, cd] = collectedDate.split(".").map(Number);
    const destructionDate = cy * 12 * 28 + cm * 28 + cd + periodNum[collectedType];

    if (todayNum >= destructionDate) answer.push(i + 1);
  }

  return answer;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
