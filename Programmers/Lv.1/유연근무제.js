const input = require("./example");

function getTimeInMinutes(time) {
  const hour = Math.floor(time / 100);
  const minute = time % 100;

  return hour * 60 + minute;
}

function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    const limitTime = getTimeInMinutes(schedules[i]) + 10;
    let isRewarded = true;

    for (let day = 0; day < 7; day++) {
      const curDay = ((startday - 1 + day) % 7) + 1;

      if (curDay === 6 || curDay === 7) continue;

      const clockInTime = getTimeInMinutes(timelogs[i][day]);

      if (clockInTime > limitTime) {
        isRewarded = false;
        break;
      }
    }

    if (isRewarded) answer++;
  }

  return answer;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
