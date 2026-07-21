const input = require("./example");

function solution(N, stages) {
  const stageData = Array.from({ length: N }, (_, idx) => ({
    idx,
    userCnt: 0,
    failRate: 0,
  }));

  stages.forEach((stage) => {
    if (stage <= N) {
      stageData[stage - 1].userCnt++;
    }
  });

  let curUser = stages.length;
  for (let i = 0; i < N; i++) {
    const faileduUser = stageData[i].userCnt;
    stageData[i].failRate = curUser === 0 ? 0 : faileduUser / curUser;
    curUser -= faileduUser;
  }

  stageData.sort((a, b) => b.failRate - a.failRate || a.idx - b.idx);
  return stageData.map((data) => data.idx + 1);
}

const answer = solution(input[0], input[1]);
console.log(answer);
