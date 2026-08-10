const input = require("./example");

function solution(id_list, report, k) {
  const reportSet = new Set(report);
  const reportList = {};
  const count = {};

  for (const r of reportSet) {
    const [reporter, target] = r.split(" ");

    if (!reportList[reporter]) reportList[reporter] = [];

    reportList[reporter].push(target);
    count[target] = (count[target] ?? 0) + 1;
  }

  return id_list.map((reporter) => {
    if (!reportList[reporter]) return 0;

    return reportList[reporter].filter((target) => count[target] >= k).length;
  });
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
