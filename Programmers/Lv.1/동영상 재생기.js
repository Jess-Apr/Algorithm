const input = require("./example");

function convertTimeToSec(time) {
  const [min, sec] = time.split(":").map(Number);

  return min * 60 + sec;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const videoTime = convertTimeToSec(video_len);
  const opStartTime = convertTimeToSec(op_start);
  const opEndTime = convertTimeToSec(op_end);

  function skipOpening(time) {
    if (opStartTime <= time && time <= opEndTime) {
      return opEndTime;
    }

    return time;
  }

  let curPos = skipOpening(convertTimeToSec(pos));

  for (let command of commands) {
    if (command === "prev") curPos = Math.max(0, curPos - 10);
    else curPos = Math.min(videoTime, curPos + 10);

    curPos = skipOpening(curPos);
  }

  const min = String(Math.floor(curPos / 60)).padStart(2, "0");
  const sec = String(curPos % 60).padStart(2, "0");

  return `${min}:${sec}`;
}

const answer = solution(input[0], input[1], input[2], input[3], input[4]);
console.log(answer);
